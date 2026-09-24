// Shared page chrome: <head>, header with mobile menu, footer, and the
// blocks that repeat across pages (3-step "how to get it", sticky order bar).

export const LINKS = {
  channel: "https://t.me/NimNegahGM",
  order: "https://t.me/NNAdminGM",
  instagram: "https://instagram.com/global_.mind",
  kimia: "https://instagram.com/kimiainterprets",
};

// Page key -> path under /fa/ or /en/
export const PATHS = {
  home: "",
  nimnegah: "nimnegah/",
  engineering: "nimnegah/engineering/",
  about: "about/",
};

const UI = {
  fa: {
    dir: "rtl",
    tagline: "پلی میان دانشمندان و مردم",
    nav: { home: "خانه", nimnegah: "نیم‌نگاه", about: "درباره" },
    order: "سفارش در تلگرام",
    menuOpen: "باز کردن منو",
    menuLabel: "منوی اصلی",
    langLabel: "زبان",
    skip: "رفتن به محتوا",
    footChannel: "کانال تلگرام نیم‌نگاه",
    footInsta: 'اینستاگرام <span lang="en" dir="ltr">@global_.mind</span>',
    steps: {
      title: "چطور تهیه کنیم",
      s1: ["نمونه را ببینید", `نمونه‌های رایگان در کانال تلگرام نیم‌نگاه منتشر می‌شود: <a href="${LINKS.channel}" lang="en" dir="ltr">t.me/NimNegahGM</a>`],
      s2: {
        subject: ["پیام بدهید", `در تلگرام به <a href="${LINKS.order}" lang="en" dir="ltr">@NNAdminGM</a> پیام بدهید و بگویید کدام خط و کدام درس را می‌خواهید.`],
        discipline: ["پیام بدهید", `در تلگرام به <a href="${LINKS.order}" lang="en" dir="ltr">@NNAdminGM</a> پیام بدهید و بگویید کدام رشته را می‌خواهید.`],
      },
      s3: ["فایل‌ها را بگیرید", "پس از پرداخت کارت‌به‌کارت، فایل‌های کامل در همان گفت‌وگوی تلگرام برای شما فرستاده می‌شود."],
    },
  },
  en: {
    dir: "ltr",
    tagline: "Connecting scientists and people",
    nav: { home: "Home", nimnegah: "Nim Negah", about: "About" },
    order: "Order on Telegram",
    menuOpen: "Open menu",
    menuLabel: "Main menu",
    langLabel: "Language",
    skip: "Skip to content",
    footChannel: "Nim Negah on Telegram",
    footInsta: "Instagram @global_.mind",
    steps: {
      title: "How to get it",
      s1: ["See a sample", `Free samples are posted on the Nim Negah Telegram channel: <a href="${LINKS.channel}">t.me/NimNegahGM</a>`],
      s2: {
        subject: ["Send a message", `Message <a href="${LINKS.order}">@NNAdminGM</a> on Telegram and tell us which line and which subject you need.`],
        discipline: ["Send a message", `Message <a href="${LINKS.order}">@NNAdminGM</a> on Telegram and tell us which discipline you need.`],
      },
      s3: ["Receive the files", "Once payment is made by bank card transfer, the complete files are sent to you in the same Telegram chat."],
    },
  },
};

export function makeCtx(lang, page) {
  const depth = 1 + PATHS[page].split("/").filter(Boolean).length;
  const root = "../".repeat(depth);
  return {
    lang,
    page,
    ui: UI[lang],
    root,
    other: lang === "fa" ? "en" : "fa",
    url: (key, l = lang) => root + l + "/" + PATHS[key],
    asset: (p) => root + "assets/" + p,
  };
}

function langSwitch(ctx) {
  const other = ctx.url(ctx.page, ctx.other);
  const fa = ctx.lang === "fa"
    ? '<span class="cur" aria-current="true">FA</span>'
    : `<a href="${other}" hreflang="fa" title="فارسی">FA</a>`;
  const en = ctx.lang === "en"
    ? '<span class="cur" aria-current="true">EN</span>'
    : `<a href="${other}" hreflang="en" title="English">EN</a>`;
  return { fa, en };
}

export function header(ctx) {
  const { ui } = ctx;
  const cur = (k) => (k === ctx.page || (k === "nimnegah" && ctx.page === "engineering") ? ' aria-current="page"' : "");
  const navLinks = ["home", "nimnegah", "about"]
    .map((k) => `<a href="${ctx.url(k)}"${cur(k)}>${ui.nav[k]}</a>`)
    .join("\n");
  const sw = langSwitch(ctx);
  return `<a class="skip" href="#main">${ui.skip}</a>
<header class="site-header" data-header>
<div class="hdr-bar">
<div class="hdr">
<a class="brand" href="${ctx.url("home")}">
<img src="${ctx.asset("img/logo-mark.png")}" alt="" width="46" height="46">
<span class="brand-text"><span class="brand-name" lang="en">GLOBAL MIND</span><span class="brand-tag">${ui.tagline}</span></span>
</a>
<nav class="nav" aria-label="${ui.menuLabel}">
${navLinks}
</nav>
<div class="lang" lang="en" role="group" aria-label="${ui.langLabel}">${sw.fa}<span class="sep" aria-hidden="true">|</span>${sw.en}</div>
<button class="menu-btn" type="button" aria-expanded="false" aria-controls="site-menu" aria-label="${ui.menuOpen}" data-menu-btn><span class="bar"></span><span class="bar"></span><span class="bar"></span></button>
</div>
</div>
<div class="menu" id="site-menu">
<nav class="menu-nav" aria-label="${ui.menuLabel}">
${navLinks}
</nav>
<div class="menu-foot">
<div class="lang" lang="en" role="group" aria-label="${ui.langLabel}">${sw.fa}${sw.en}</div>
<a class="gm-btn gm-btn--gold gm-btn--sm" lang="${ctx.lang}" href="${LINKS.order}">${ui.order}</a>
</div>
</div>
</header>`;
}

export function footer(ctx) {
  const { ui } = ctx;
  return `<footer class="site-footer">
<div class="wrap ftr">
<div class="ftr-brand"><img src="${ctx.asset("img/logo-mark.png")}" alt="" width="30" height="30"><span lang="en">GLOBAL MIND</span></div>
<div class="ftr-links">
<a href="${LINKS.channel}">${ui.footChannel}</a>
<a href="${LINKS.instagram}">${ui.footInsta}</a>
</div>
</div>
</footer>`;
}

// "How to get it": variant "plain" (home) or "cards" (catalog, line page)
export function steps(ctx, { variant = "plain", accent = "gold", step2 = "subject" } = {}) {
  const s = ctx.ui.steps;
  const items = [s.s1, s.s2[step2], s.s3]
    .map(([h, p], i) => {
      const inner = `<div class="step-head"><span class="step-num" lang="en">${i + 1}</span><h3>${h}</h3></div>
<p>${p}</p>`;
      return variant === "cards" ? `<li class="step-card">${inner}</li>` : `<li>${inner}</li>`;
    })
    .join("\n");
  const list = `<ol class="steps${accent === "copper" ? " steps--copper" : ""}">\n${items}\n</ol>`;
  if (variant === "cards") {
    return `<section class="band band--sunken steps-band" aria-labelledby="steps-title"><div class="wrap">
<h2 class="h-sec" id="steps-title">${s.title}</h2>
${list}
</div></section>`;
  }
  return `<section class="wrap steps-sec" aria-labelledby="steps-title"><div class="steps-inner">
<h2 class="h-sec" id="steps-title">${s.title}</h2>
${list}
</div></section>`;
}

export function stickyOrder(ctx, { copper = false } = {}) {
  const btn = copper ? "gm-btn gm-btn--copper" : "gm-btn gm-btn--gold";
  return `<div class="sticky-order${copper ? " sticky-order--copper" : ""}">
<a class="${btn}" lang="${ctx.lang}" href="${LINKS.order}">${ctx.ui.order}</a>
</div>`;
}

export function document(ctx, { title, description, body, sticky = false }) {
  const { lang, ui } = ctx;
  const alt = (l) => ctx.url(ctx.page, l);
  const preload = [
    lang === "fa" ? `<link rel="preload" href="${ctx.asset("fonts/PlaypenSansArabic-arabic.woff2")}" as="font" type="font/woff2" crossorigin>` : "",
    `<link rel="preload" href="${ctx.asset("fonts/PlayfairDisplay.woff2")}" as="font" type="font/woff2" crossorigin>`,
  ].filter(Boolean).join("\n");
  return `<!DOCTYPE html>
<html lang="${lang}" dir="${ui.dir}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${title}</title>
<meta name="description" content="${description}">
<meta name="theme-color" content="#F8F5EF">
<meta property="og:type" content="website">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:locale" content="${lang === "fa" ? "fa_IR" : "en_US"}">
<link rel="alternate" hreflang="fa" href="${alt("fa")}">
<link rel="alternate" hreflang="en" href="${alt("en")}">
<link rel="icon" type="image/png" sizes="32x32" href="${ctx.asset("img/favicon-32.png")}">
<link rel="icon" type="image/png" sizes="192x192" href="${ctx.asset("img/logo-mark-192.png")}">
<link rel="apple-touch-icon" href="${ctx.asset("img/apple-touch-icon.png")}">
${preload}
<link rel="stylesheet" href="${ctx.asset("css/site.css")}">
<script src="${ctx.asset("js/site.js")}" defer></script>
</head>
<body${sticky ? ' class="has-sticky"' : ""}>
${header(ctx)}
<main id="main" tabindex="-1">
${body}
</main>
${footer(ctx)}
${sticky ? stickyOrder(ctx, sticky === "copper" ? { copper: true } : {}) : ""}
</body>
</html>
`;
}
