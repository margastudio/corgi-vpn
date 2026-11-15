const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL, URLSearchParams } = require('url');

const PORT = Number(process.env.PORT || 3000);
const HOST = '0.0.0.0';
const ROOT = __dirname;
const VPN_GATE = 'https://www.vpngate.net';
const UA = 'Mozilla/5.0 (compatible; CorgiVPN/1.0; +https://www.vpngate.net/)';
const CACHE_TTL = 5 * 60 * 1000;

// Minimal server entry — full version lives in the complete project.
// For Vercel, export handler if needed.
module.exports = async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ ok: true, app: 'Corgi VPN', message: 'API stub — deploy full server.js from local project' }));
};

if (require.main === module) {
  const server = http.createServer((req, res) => {
    const url = new URL(req.url, 'http://localhost');
    if (url.pathname.startsWith('/api/')) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: true, app: 'Corgi VPN' }));
      return;
    }
    let pathname = url.pathname === '/' ? '/index.html' : url.pathname;
    const filePath = path.join(ROOT, pathname);
    fs.readFile(filePath, (err, data) => {
      if (err) { res.writeHead(404); res.end('Not found'); return; }
      const ext = path.extname(filePath);
      const types = { '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.json': 'application/json', '.webmanifest': 'application/manifest+json' };
      res.writeHead(200, { 'Content-Type': types[ext] || 'application/octet-stream' });
      res.end(data);
    });
  });
  server.listen(PORT, HOST, () => console.log('Corgi VPN en http://' + HOST + ':' + PORT));
}
