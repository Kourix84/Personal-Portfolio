// Runs after the client and SSR builds (see "build" in package.json).
// Renders the app to HTML and writes it into dist/index.html so the page has
// real content before any JavaScript runs — better for SEO and first paint.
import { readFile, rm, writeFile } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

const { render } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);

const indexPath = path.join(dist, "index.html");
const template = await readFile(indexPath, "utf8");
const marker = '<div id="root"></div>';
if (!template.includes(marker)) {
  throw new Error(`prerender: ${marker} not found in dist/index.html`);
}

await writeFile(indexPath, template.replace(marker, `<div id="root">${render()}</div>`));
await rm(ssrDir, { recursive: true, force: true });
console.log("prerender: wrote dist/index.html");
