import { readFile, rm, writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const root = process.cwd();
const htmlPath = resolve(root, 'dist/index.html');
const serverEntry = resolve(root, 'dist-server/entry-server.js');
const html = await readFile(htmlPath, 'utf8');
const { render } = await import(pathToFileURL(serverEntry).href);
const markup = render();

if (!html.includes('<!--ssr-outlet-->')) {
  throw new Error('Expected server-render marker was not found in dist/index.html.');
}

await writeFile(htmlPath, html.replace('<!--ssr-outlet-->', markup), 'utf8');
await rm(resolve(root, 'dist-server'), { recursive: true, force: true });
console.log(`Static HTML prerendered (${markup.length.toLocaleString()} characters).`);
