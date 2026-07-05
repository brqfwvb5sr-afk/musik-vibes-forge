import { copyFile, mkdir, rm, writeFile } from "node:fs/promises";
import { spawn } from "node:child_process";
import { join } from "node:path";

const port = Number(process.env.EXPORT_PORT ?? 4175);
const basePath = (process.env.PAGES_BASE_PATH ?? "/musik-vibes-forge").replace(/\/$/, "");
const origin = `http://127.0.0.1:${port}`;
const outputDir = join(process.cwd(), "static-site");

const routes = [
  { path: "/", file: "index.html" },
  { path: "/bar", file: "bar/index.html" },
  { path: "/kontakt", file: "kontakt/index.html" },
  { path: "/impressum", file: "impressum/index.html" },
  { path: "/datenschutz", file: "datenschutz/index.html" },
];

const routeHrefs = new Map([
  ['href="/"', `href="${basePath}/"`],
  ['href="/bar"', `href="${basePath}/bar/"`],
  ['href="/kontakt"', `href="${basePath}/kontakt/"`],
  ['href="/impressum"', `href="${basePath}/impressum/"`],
  ['href="/datenschutz"', `href="${basePath}/datenschutz/"`],
]);

async function waitForServer() {
  const deadline = Date.now() + 45_000;
  while (Date.now() < deadline) {
    try {
      const response = await fetch(`${origin}/`);
      if (response.ok) return;
    } catch {
      // Server is still starting.
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  throw new Error(`Timed out waiting for ${origin}`);
}

function cleanHtml(html) {
  let cleaned = html
    .replace(/\sdata-tsd-source="[^"]*"/g, "")
    .replace(/<script\b[\s\S]*?<\/script>/g, "")
    .replace(/<link rel="modulepreload"[^>]*>/g, "")
    .replace(/<link rel="stylesheet" href="\/src\/styles\.css"[^>]*>/g, "")
    .replace(/<link rel="stylesheet" href="\/@tanstack-start\/styles\.css[^"]*"[^>]*>/g, "")
    .replace(/<link rel="icon" href="\/favicon\.svg\?v=mp1"[^>]*>/g, `<link rel="icon" href="${basePath}/favicon.svg?v=mp1" type="image/svg+xml"/>`)
    .replace("</head>", `<link rel="stylesheet" href="${basePath}/styles.css"/></head>`);

  for (const [from, to] of routeHrefs) {
    cleaned = cleaned.replaceAll(from, to);
  }

  return cleaned;
}

async function fetchText(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }
  return response.text();
}

async function main() {
  await rm(outputDir, { recursive: true, force: true });
  await mkdir(outputDir, { recursive: true });

  const child = spawn(
    process.execPath,
    [join(process.cwd(), "node_modules", "vite", "bin", "vite.js"), "dev", "--host", "127.0.0.1", "--port", String(port)],
    { cwd: process.cwd(), stdio: ["ignore", "pipe", "pipe"] },
  );
  child.stdout.on("data", (chunk) => process.stdout.write(chunk));
  child.stderr.on("data", (chunk) => process.stderr.write(chunk));

  try {
    await waitForServer();

    const css = await fetchText(`${origin}/src/styles.css?direct`);
    await writeFile(join(outputDir, "styles.css"), css);
    await writeFile(join(outputDir, ".nojekyll"), "");
    await copyFile(join(process.cwd(), "public", "favicon.ico"), join(outputDir, "favicon.ico"));
    await copyFile(join(process.cwd(), "public", "favicon.svg"), join(outputDir, "favicon.svg"));
    await copyFile(join(process.cwd(), "public", "robots.txt"), join(outputDir, "robots.txt"));

    for (const route of routes) {
      const html = cleanHtml(await fetchText(`${origin}${route.path}`));
      const filePath = join(outputDir, route.file);
      await mkdir(join(filePath, ".."), { recursive: true });
      await writeFile(filePath, html);
    }

    await writeFile(
      join(outputDir, "404.html"),
      `<!doctype html>
<html lang="de">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Weiterleitung - Musik Palast</title>
    <script>
      const base = "${basePath}";
      const routes = new Set(["/bar", "/kontakt", "/impressum", "/datenschutz"]);
      const path = window.location.pathname.replace(base, "").replace(/\\/$/, "");
      if (routes.has(path)) {
        window.location.replace(base + path + "/" + window.location.search + window.location.hash);
      } else {
        window.location.replace(base + "/");
      }
    </script>
  </head>
  <body>
    <a href="${basePath}/">Zur Startseite</a>
  </body>
</html>`,
    );
  } finally {
    child.kill("SIGTERM");
  }
}

await main();
