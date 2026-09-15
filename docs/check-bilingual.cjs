// Local, read-only browser review. Does not submit forms or visit external links.
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawn } = require('child_process');
const sleep = ms => new Promise(r => setTimeout(r, ms));

(async () => {
  const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'portfolio-review-'));
  const edge = spawn('C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', [
    '--headless=new', '--disable-gpu', '--no-first-run', '--remote-debugging-port=9241',
    '--remote-debugging-address=127.0.0.1', '--user-data-dir=' + profile, 'about:blank',
  ], { stdio: 'ignore', windowsHide: true });
  let ws;
  try {
    let pages;
    for (let i = 0; i < 30; i++) {
      try { pages = await (await fetch('http://127.0.0.1:9241/json')).json(); if (pages.length) break; } catch {}
      await sleep(300);
    }
    ws = new WebSocket(pages.find(p => p.type === 'page').webSocketDebuggerUrl);
    await new Promise((resolve, reject) => { ws.onopen = resolve; ws.onerror = reject; });
    let id = 0; const pending = new Map();
    ws.onmessage = e => { const msg = JSON.parse(e.data); if (msg.id && pending.has(msg.id)) { const p = pending.get(msg.id); pending.delete(msg.id); msg.error ? p.reject(msg.error) : p.resolve(msg.result); } };
    const send = (method, params = {}) => new Promise((resolve, reject) => { const timer=setTimeout(()=>reject(new Error("Timed out: "+method+" "+JSON.stringify(params))),20000); pending.set(++id, { resolve: value=>{clearTimeout(timer);resolve(value)}, reject: error=>{clearTimeout(timer);reject(error)} }); ws.send(JSON.stringify({ id, method, params })); });
    const evaluate = async expression => (await send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true })).result.value;
    await send('Page.enable');
    const assert = require('node:assert/strict');
    const browserErrors = [];
    await send('Runtime.enable');
    const base = process.env.REVIEW_URL || 'http://127.0.0.1:3100';
    const originalMessage = ws.onmessage;
    ws.onmessage = event => {
      originalMessage(event);
      const message = JSON.parse(event.data);
      if (message.method === 'Runtime.exceptionThrown') browserErrors.push(message.params.exceptionDetails.text);
    };
    async function navigate(route, locale) {
      await send('Page.navigate', {url:base+route});
      for(let i=0;i<100;i++) {
        try { if(await evaluate(`document.readyState === 'complete' && document.documentElement.lang === '${locale}' && !!document.querySelector('#contact form')`)) break; } catch {}
        await sleep(300);
      }
      await evaluate('document.fonts.ready.then(()=>true)');
      await sleep(800);
      assert.equal(await evaluate('document.documentElement.lang'),locale);
    }
    const report=[];
    for(const locale of ['en','ar']) {
      console.log('Checking',locale); await navigate(locale === 'ar' ? '/ar' : '/',locale);
      assert.equal(await evaluate('document.documentElement.dir'),locale === 'ar' ? 'rtl':'ltr');
      for(const width of [320,390,768,1024,1440,1920]) {
        await send('Emulation.setDeviceMetricsOverride',{width,height:900,deviceScaleFactor:1,mobile:false});
        await sleep(300);
        await evaluate('window.scrollTo(0, document.body.scrollHeight)');
        await sleep(1000);
        const result = await evaluate(`({locale:document.documentElement.lang,width:innerWidth,overflow:document.documentElement.scrollWidth > document.documentElement.clientWidth,brokenAnchors:[...document.querySelectorAll('a[href^="#"]')].filter(a=>!document.getElementById(a.hash.slice(1))).length,clippedText:[...document.querySelectorAll('h1,h2,h3,p,li,a,button')].filter(e=>e.clientWidth>0 && e.scrollWidth>e.clientWidth+2).map(e=>e.textContent.slice(0,60))})`);
        assert.equal(result.overflow,false,JSON.stringify(result));
        assert.equal(result.brokenAnchors,0);
        assert.deepEqual(result.clippedText,[],JSON.stringify(result));
        report.push(result);
        if(!process.env.SKIP_SCREENSHOTS && (width===390 || width===1440)) {
          for(const section of ['hero','about','expertise','beyond','work','process','insights','philosophy','contact','footer']) {
            await evaluate(`document.querySelector('${section==='footer'?'footer':'#'+section}').scrollIntoView({behavior:'instant'})`);
            await sleep(1000);
            await evaluate('Promise.all([...document.images].filter(i=>i.getBoundingClientRect().bottom>0 && i.getBoundingClientRect().top<innerHeight).map(i=>i.decode().catch(()=>null)))');
            const shot=await send('Page.captureScreenshot',{format:'png'});
            fs.writeFileSync(`docs/bilingual-${locale}-${width}-${section}.png`,Buffer.from(shot.data,'base64'));
          }
        }
      }
      const content=await evaluate(`({title:document.title,text:document.querySelector('main').innerText,labels:[...document.querySelectorAll('[aria-label]')].map(e=>e.getAttribute('aria-label')),images:[...document.images].map(i=>({alt:i.alt,loaded:i.complete&&i.naturalWidth>0})),links:[...document.querySelectorAll('a[href^="http"],a[href^="mailto:"]')].map(a=>a.href).sort()})`);
      fs.writeFileSync(`docs/bilingual-${locale}-content.json`,JSON.stringify(content,null,2));
      assert.ok(content.images.every(i=>i.loaded));
    }
    assert.deepEqual(require('./bilingual-en-content.json').links,require('./bilingual-ar-content.json').links);

    // Mobile navigation and a real language-switch navigation with a preserved draft.
    await send('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:false});
    await evaluate('window.scrollTo(0,0)');
    await evaluate(`document.querySelector('[aria-controls="mobile-navigation"]').click()`);
    await sleep(100);
    assert.ok(await evaluate('!!document.getElementById("mobile-navigation")'));
    await send('Input.dispatchKeyEvent',{type:'keyDown',key:'Escape',code:'Escape',windowsVirtualKeyCode:27});
    await sleep(100);
    assert.ok(await evaluate('!document.getElementById("mobile-navigation")'));
    await evaluate(`document.querySelector('[aria-controls="mobile-navigation"]').click()`);
    await sleep(100);
    await evaluate(`document.querySelector('#mobile-navigation a[href="#contact"]').click()`);
    await sleep(200);
    assert.ok(await evaluate('!document.getElementById("mobile-navigation")'));

    // Custom validation must not reach the network.
    await evaluate('document.querySelector("form").requestSubmit()');
    await sleep(100);
    assert.equal(await evaluate('document.querySelectorAll("[aria-invalid=true]").length'),3);
    assert.equal(await evaluate('document.activeElement.name'),'name');
    async function fill(name,value) {
      await evaluate(`(()=>{const el=document.querySelector('[name="${name}"]'); Object.getOwnPropertyDescriptor(el.tagName==='TEXTAREA'?HTMLTextAreaElement.prototype:HTMLInputElement.prototype,'value').set.call(el,${JSON.stringify(value)});el.dispatchEvent(new Event('input',{bubbles:true}));})()`);
      await sleep(60);
    }
    await fill('name','أنس Test');await fill('email','test@example.com');await fill('phone','+971 50 123 4567');await fill('message','رسالة اختبار — bilingual draft');
    await evaluate('document.querySelector("#contact").scrollIntoView({behavior:"instant"})');
    await evaluate('document.querySelector("nav a[hreflang=en]").click()');
    for(let i=0;i<100;i++) {try {if(await evaluate('document.documentElement.lang === "en" && document.querySelector("[name=name]")?.value === "أنس Test"'))break;}catch{} await sleep(200);}
    assert.equal(await evaluate('document.documentElement.lang'),'en');
    assert.equal(await evaluate('location.hash'),'#contact');
    assert.equal(await evaluate('document.querySelector("[name=message]").value'),'رسالة اختبار — bilingual draft');
    await evaluate('document.querySelector("nav a[hreflang=ar]").click()');
    for(let i=0;i<100;i++) {try {if(await evaluate('document.documentElement.lang === "ar" && document.querySelector("[name=name]")?.value === "أنس Test"'))break;}catch{} await sleep(200);}
    assert.equal(await evaluate('document.documentElement.lang'),'ar');

    // Mock the mail service in-page: no email is sent by these checks.
    await evaluate(`window.fetch=async()=>{throw new TypeError('Mock offline')}`);
    await evaluate('document.querySelector("form").requestSubmit()');await sleep(200);
    assert.equal(await evaluate('document.querySelector("[role=status]").textContent'), 'تعذّر إرسال الرسالة. يُرجى المحاولة مرة أخرى.');
    assert.equal(await evaluate('document.querySelector("[name=name]").value'),'أنس Test');
    await evaluate(`window.fetch=async()=>({ok:false,json:async()=>({success:false})})`);
    await evaluate('document.querySelector("form").requestSubmit()');await sleep(200);
    assert.equal(await evaluate('document.querySelector("[role=status]").textContent'), 'تعذّر إرسال الرسالة. يُرجى المحاولة مرة أخرى.');
    await evaluate(`window.mockCalls=0;window.fetch=async(url,options)=>{window.mockCalls++;window.mockSubmission=Object.fromEntries([...options.body.entries()].filter(([key])=>key!=='access_key'));return new Promise(resolve=>window.finishSubmission=()=>resolve({ok:true,json:async()=>({success:true})}));}`);
    await evaluate('document.querySelector("form").requestSubmit();document.querySelector("form").requestSubmit()');
    await sleep(100);
    assert.equal(await evaluate('window.mockCalls'),1);
    assert.ok(await evaluate('document.querySelector("button[type=submit]").disabled'));
    const submission=await evaluate('window.mockSubmission');
    assert.equal(submission.name,'أنس Test');assert.equal(submission.language,'Arabic');assert.equal(submission.message,'رسالة اختبار — bilingual draft');
    await evaluate('window.finishSubmission()');await sleep(150);
    assert.equal(await evaluate('document.querySelector("[role=status]").textContent'),'تم إرسال رسالتك بنجاح!');
    assert.equal(await evaluate('document.querySelector("[name=name]").value'),'');
    assert.equal(await evaluate('sessionStorage.getItem("anas-contact-draft")'),null);
    assert.deepEqual(browserErrors,[]);
    fs.writeFileSync('docs/bilingual-checks.json',JSON.stringify({viewports:report,languageSwitch:true,draftPreserved:true,mobileMenu:true,localizedValidation:true,mockedFormStates:['offline','server error','sending','duplicate guard','success'],browserErrors},null,2));
    console.log('PASS: 12 language/viewport combinations, navigation, draft preservation, validation and mocked form states. No email sent.');
    await send('Browser.close').catch(()=>{});
  } finally { if(ws) ws.close();edge.kill(); }
})().catch(error=>{console.error(error);process.exitCode=1;});




