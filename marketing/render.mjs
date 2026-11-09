import { spawn } from 'node:child_process';
import { writeFile } from 'node:fs/promises';

const [html, widthArg, heightArg, out, scaleArg] = process.argv.slice(2);
const width = Number(widthArg);
const height = Number(heightArg);
const scale = Number(scaleArg || 2);
const PORT = 9350 + Math.floor(Math.random() * 40);

const chrome = spawn('/usr/bin/chromium', [
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  '--hide-scrollbars',
  '--force-color-profile=srgb',
  `--remote-debugging-port=${PORT}`,
  `--user-data-dir=/tmp/opencode/chrome-poster-${PORT}`,
  'about:blank'
], { stdio: 'ignore' });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function getWs() {
  for (let i = 0; i < 100; i++) {
    try {
      const list = await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json();
      const page = list.find((t) => t.type === 'page');
      if (page) return page.webSocketDebuggerUrl;
    } catch {}
    await sleep(120);
  }
  throw new Error('no devtools target');
}

const ws = new WebSocket(await getWs());
await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });

let id = 0;
const pending = new Map();
ws.onmessage = (e) => {
  const msg = JSON.parse(e.data);
  if (msg.id && pending.has(msg.id)) {
    const { resolve, reject } = pending.get(msg.id);
    pending.delete(msg.id);
    msg.error ? reject(new Error(JSON.stringify(msg.error))) : resolve(msg.result);
  }
};
const send = (method, params = {}) => new Promise((resolve, reject) => {
  const n = ++id;
  pending.set(n, { resolve, reject });
  ws.send(JSON.stringify({ id: n, method, params }));
});

const evalJs = async (expression) => {
  const r = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
  if (r.exceptionDetails) throw new Error(r.exceptionDetails.text + ' ' + (r.result?.description || ''));
  return r.result.value;
};

await send('Page.enable');
await send('Runtime.enable');
await send('Emulation.setDeviceMetricsOverride', {
  width, height, deviceScaleFactor: scale, mobile: false
});
await send('Page.navigate', { url: `file://${html}` });
await sleep(1200);

await evalJs(`(async () => {
  await document.fonts.ready;
  await Promise.all([...document.images].map((img) => img.complete ? null : new Promise((res) => { img.onload = res; img.onerror = res; })));
  return true;
})()`);
await sleep(600);

const probe = await evalJs(`(() => ({
  fonts: [...document.fonts].filter((f) => f.status === 'loaded').map((f) => f.family + ':' + f.weight + ':' + f.style).slice(0, 20),
  size: [document.documentElement.scrollWidth, document.documentElement.scrollHeight],
  overflow: document.documentElement.scrollWidth > ${width} || document.documentElement.scrollHeight > ${height},
  qrLoaded: (() => { const i = document.querySelector('.qr-wrap img'); return i ? i.complete && i.naturalWidth > 0 : null; })()
}))()`);

const shot = await send('Page.captureScreenshot', {
  format: 'png',
  fromSurface: true,
  captureBeyondViewport: false,
  clip: { x: 0, y: 0, width, height, scale: 1 }
});

await writeFile(out, Buffer.from(shot.data, 'base64'));
console.log(JSON.stringify({ out, ...probe }, null, 2));

ws.close();
chrome.kill('SIGKILL');
