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
    for (const [label, width, height] of [['desktop', 1440, 1000], ['mobile', 390, 844]]) {
      await send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile: false });
      await send('Page.navigate', { url: 'http://127.0.0.1:3000' });
      for (let i = 0; i < 40; i++) { if (await evaluate('document.readyState === "complete" && !!document.querySelector("#philosophy")')) break; await sleep(500); }
      await evaluate('document.fonts.ready.then(() => true)');
      await evaluate('window.scrollTo(0, document.body.scrollHeight)');
      await sleep(1200);
      await evaluate('window.scrollTo(0, 0)');
      const result = await evaluate(`JSON.stringify({ width: innerWidth, documentWidth: document.documentElement.scrollWidth, sections: [...document.querySelectorAll('main > section')].map(e => e.id), brokenAnchors: [...document.querySelectorAll('a[href^="#"]')].map(e => e.getAttribute('href')).filter(h => h.length > 1 && !document.getElementById(h.slice(1))), imageCount: document.images.length })`);
      console.log(label + ': ' + result);
      for (const section of ['about', 'work']) {
        await evaluate(`document.getElementById('${section}').scrollIntoView({behavior:'instant'})`);
        await sleep(1000);
        await evaluate('Promise.all([...document.images].filter(i => i.getBoundingClientRect().bottom > 0 && i.getBoundingClientRect().top < innerHeight).map(i => i.decode().catch(() => null)))');
        const shot = await send('Page.captureScreenshot', { format: 'png' });
        fs.writeFileSync(path.join('docs', 'portfolio-' + label + '-' + section + '.png'), Buffer.from(shot.data, 'base64'));
      }
    }
    await send('Browser.close').catch(() => {});
  } finally { if (ws) ws.close(); edge.kill(); }
})().catch(e => { console.error(e); process.exitCode = 1; });
