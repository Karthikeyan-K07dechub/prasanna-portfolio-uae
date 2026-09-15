// Local, read-only browser review. Does not submit forms or visit external links.
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawn } = require('child_process');
const sleep = ms => new Promise(r => setTimeout(r, ms));

(async () => {
  const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'portfolio-review-'));
  const edge = spawn('C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', [
    '--headless=new', '--disable-gpu', '--no-first-run', '--remote-debugging-port=9237',
    '--remote-debugging-address=127.0.0.1', '--user-data-dir=' + profile, 'about:blank',
  ], { stdio: 'ignore', windowsHide: true });
  let ws;
  try {
    let pages;
    for (let i = 0; i < 30; i++) {
      try { pages = await (await fetch('http://127.0.0.1:9237/json')).json(); if (pages.length) break; } catch {}
      await sleep(300);
    }
    ws = new WebSocket(pages.find(p => p.type === 'page').webSocketDebuggerUrl);
    await new Promise((resolve, reject) => { ws.onopen = resolve; ws.onerror = reject; });
    let id = 0; const pending = new Map();
    ws.onmessage = e => { const msg = JSON.parse(e.data); if (msg.id && pending.has(msg.id)) { const p = pending.get(msg.id); pending.delete(msg.id); msg.error ? p.reject(msg.error) : p.resolve(msg.result); } };
    const send = (method, params = {}) => new Promise((resolve, reject) => { pending.set(++id, { resolve, reject }); ws.send(JSON.stringify({ id, method, params })); });
    const evaluate = async expression => (await send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true })).result.value;
    await send('Page.enable');
    await send('Page.navigate', { url: 'http://127.0.0.1:3000' });
    await sleep(3000);
    const report=[];
    for (const [width,height] of [[390,844],[1440,900]]) {
      const label=String(width);
      await send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile: false });
      await sleep(400);
      for (let i = 0; i < 40; i++) { if (await evaluate('document.readyState === "complete" && !!document.querySelector("#philosophy")')) break; await sleep(500); }
      await evaluate('document.fonts.ready.then(() => true)');
      await evaluate('document.documentElement.style.scrollBehavior = "auto"');
      await evaluate('window.scrollTo(0, document.body.scrollHeight)');
      await sleep(1200);
      await evaluate('window.scrollTo(0, 0)');
      const result = JSON.parse(await evaluate(`JSON.stringify({width:innerWidth,viewport:document.documentElement.clientWidth, documentWidth:document.documentElement.scrollWidth, sections:[...document.querySelectorAll('main>section')].map(e=>e.id), overflow:[...document.querySelectorAll('main *,nav *,footer *')].filter(e=>{const r=e.getBoundingClientRect();return r.width>0&&(r.right>document.documentElement.clientWidth+2||r.left < -2)}).map(e=>({tag:e.tagName,text:(e.innerText||e.getAttribute('alt')||'').slice(0,60),width:Math.round(e.getBoundingClientRect().width)})).slice(0,15), textOverflow:[...document.querySelectorAll('h1,h2,h3,p,li,a,button')].filter(e=>e.clientWidth>0&&e.scrollWidth>e.clientWidth+2).map(e=>(e.innerText||'').slice(0,70)),brokenAnchors:[...document.querySelectorAll('a[href^="#"]')].filter(e=>!document.getElementById(e.hash.slice(1))).map(e=>e.hash),navWidth:document.querySelector('nav').clientWidth})`));
      if(width<1024){
        await evaluate(`document.querySelector('[aria-controls="mobile-navigation"]')?.click()`);
        result.menuOpened=await evaluate('!!document.getElementById("mobile-navigation")');
        await send('Input.dispatchKeyEvent',{type:'keyDown',key:'Escape',code:'Escape',windowsVirtualKeyCode:27});
        await new Promise(r=>setTimeout(r,100));
        result.escapeClosed=await evaluate('!document.getElementById("mobile-navigation")');
        await evaluate(`document.querySelector('[aria-controls="mobile-navigation"]')?.click()`);
        await evaluate(`document.querySelector('#mobile-navigation a[href="#work"]')?.click()`);
        await new Promise(r=>setTimeout(r,100));
        result.linkClosed=await evaluate('!document.getElementById("mobile-navigation")');
      }
      await sleep(800);
      report.push(result);console.log(JSON.stringify(result));
      for (const section of (['hero','about','expertise','beyond','work','process','insights','philosophy','contact'])) {
        await evaluate(`document.getElementById('${section}').scrollIntoView({behavior:'instant'})`);
        await sleep(200);
        await evaluate('Promise.all([...document.images].filter(i => i.getBoundingClientRect().bottom > 0 && i.getBoundingClientRect().top < innerHeight).map(i => i.decode().catch(() => null)))');
        const shot = await send('Page.captureScreenshot', { format: 'png' });
        fs.writeFileSync(path.join('docs', 'arabic-audit-' + label + '-' + section + '.png'), Buffer.from(shot.data, 'base64'));
      }
    }
    fs.writeFileSync('docs/arabic-audit-'+(process.argv[2]||'audit')+'.json',JSON.stringify(report,null,2));
    const content = await evaluate('JSON.stringify({language:document.documentElement.lang,direction:document.documentElement.dir,title:document.title,text:document.body.innerText,images:[...document.images].map(i=>({src:i.getAttribute("src"),alt:i.alt,loaded:i.complete&&i.naturalWidth>0})),labels:[...document.querySelectorAll("[aria-label]")].map(e=>e.getAttribute("aria-label"))})');
    fs.writeFileSync('docs/arabic-audit-content.json',content);
    await send('Browser.close').catch(() => {});
  } finally { if (ws) ws.close(); edge.kill(); }
})().catch(e => { console.error(e); process.exitCode = 1; });
