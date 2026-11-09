// Minimal statisk dev-server utan beroenden. Kör: npm start
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize, resolve } from 'node:path';

const root = resolve(process.cwd());
const port = Number(process.env.PORT) || 8080;

const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
};

createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);
    let pathname = decodeURIComponent(url.pathname);
    if (pathname.endsWith('/')) pathname += 'index.html';
    const file = join(root, normalize(pathname));
    if (!file.startsWith(root)) throw Object.assign(new Error('Forbidden'), { code: 'EFORBIDDEN' });
    const info = await stat(file);
    if (info.isDirectory()) {
      res.writeHead(302, { Location: pathname + '/' });
      return res.end();
    }
    const body = await readFile(file);
    res.writeHead(200, {
      'Content-Type': types[extname(file).toLowerCase()] || 'application/octet-stream',
      'Cache-Control': 'no-store',
    });
    res.end(body);
  } catch (err) {
    const status = err.code === 'ENOENT' ? 404 : err.code === 'EFORBIDDEN' ? 403 : 500;
    res.writeHead(status, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(status === 404 ? 'Hittades inte' : status === 403 ? 'Förbjudet' : 'Serverfel');
  }
}).listen(port, () => {
  console.log(`Möteskostnad körs på http://localhost:${port}`);
});
