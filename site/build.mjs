// Builds the static site into ../dist — no dependencies, just Node 18+.
//   node site/build.mjs
import { readFileSync, writeFileSync, mkdirSync, rmSync, cpSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { makeCtx, document, PATHS } from "./src/layout.mjs";
import home from "./src/pages/home.mjs";
import nimnegah from "./src/pages/nimnegah.mjs";
import engineering from "./src/pages/engineering.mjs";
import about from "./src/pages/about.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const repo = join(here, "..");
const dist = join(repo, "dist");
const ds = join(repo, "project/_ds/global-mind-design-system-b977efb6-5760-4ab6-8f37-4d6ba8a9931f");

const write = (rel, content) => {
  const file = join(dist, rel);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, content);
};

rmSync(dist, { recursive: true, force: true });
cpSync(join(here, "static"), dist, { recursive: true });

// CSS: design-system tokens + core components, then the site's own styles.
// (tokens/fonts.css is left out: the site declares its own self-hosted WOFF2 faces.)
const dsFiles = ["tokens/colors.css", "tokens/spacing.css", "tokens/shape.css", "tokens/typography.css", "tokens/motion.css", "components/core/core.css"];
const fl = (a, b) => {
  const [lo, hi] = [Math.min(a, b), Math.max(a, b)];
  return `clamp(${lo}px, calc(${a}px + ${b - a} * var(--fl)), ${hi}px)`;
};
const css = [
  ...dsFiles.map((f) => `/* design system: ${f} */\n` + readFileSync(join(ds, f), "utf8").trim()),
  readFileSync(join(here, "src/site.css"), "utf8").replace(/fl\(\s*([\d.]+)\s*,\s*([\d.]+)\s*\)/g, (_, a, b) => fl(+a, +b)),
].join("\n\n");
write("assets/css/site.css", css + "\n");
write("assets/js/site.js", readFileSync(join(here, "src/site.js"), "utf8"));

const pages = { home, nimnegah, engineering, about };
for (const lang of ["fa", "en"]) {
  for (const [key, page] of Object.entries(pages)) {
    const ctx = makeCtx(lang, key);
    const p = page[lang](ctx);
    write(`${lang}/${PATHS[key]}index.html`, document(ctx, p));
  }
}

// Site root: Persian is the primary language.
write("index.html", `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>گلوبال مایند — Global Mind</title>
<meta http-equiv="refresh" content="0; url=fa/">
<link rel="alternate" hreflang="fa" href="fa/">
<link rel="alternate" hreflang="en" href="en/">
<link rel="icon" type="image/png" sizes="32x32" href="assets/img/favicon-32.png">
<script>location.replace(location.protocol === "file:" ? "fa/index.html" : "fa/");</script>
<style>body{margin:0;padding:40px 22px;background:#F8F5EF;color:#1B263B;font:16px/2 Tahoma,sans-serif}a{color:#7D6428}</style>
</head>
<body>
<p><a href="fa/index.html">گلوبال مایند — فارسی</a> · <a href="en/index.html" lang="en" dir="ltr">Global Mind — English</a></p>
</body>
</html>
`);

// 404 page. Hosts serve it at any missing URL, so it uses root-absolute paths
// and assumes the site sits at the root of its domain.
write("404.html", `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>صفحه پیدا نشد — گلوبال مایند</title>
<meta name="robots" content="noindex">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/img/favicon-32.png">
<link rel="stylesheet" href="/assets/css/site.css">
</head>
<body>
<header class="site-header"><div class="hdr-bar"><div class="hdr">
<a class="brand" href="/fa/"><img src="/assets/img/logo-mark.png" alt="" width="46" height="46"><span class="brand-text"><span class="brand-name" lang="en">GLOBAL MIND</span></span></a>
</div></div></header>
<main class="wrap nf">
<div class="kicker">۴۰۴</div>
<h1>این صفحه پیدا نشد</h1>
<p>نشانی را دوباره بررسی کنید، یا از صفحه‌ی اصلی شروع کنید.</p>
<div lang="en" dir="ltr" style="margin-top:32px">
<div class="kicker">404</div>
<h1 style="font-weight:400">This page could not be found</h1>
<p>Check the address, or start from the home page.</p>
</div>
<div class="btns">
<a class="gm-btn gm-btn--primary" lang="fa" href="/fa/">صفحه‌ی اصلی</a>
<a class="gm-btn gm-btn--secondary" lang="en" href="/en/">Home (English)</a>
</div>
</main>
</body>
</html>
`);

console.log("Built site into", dist);
