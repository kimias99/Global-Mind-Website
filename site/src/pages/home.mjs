import { LINKS, steps } from "../layout.mjs";

const art = (ctx) => `<div class="hero-art" aria-hidden="true">
<img src="${ctx.asset("img/logo-navy.jpg")}" alt="" width="1000" height="1000">
<span class="sat sat--gold"></span><span class="sat sat--plum"></span>
<span class="hl hl-1"></span><span class="hl hl-2"></span><span class="hl hl-3"></span>
</div>`;

const fa = (ctx) => ({
  title: "گلوبال مایند — پلی میان دانشمندان و مردم",
  description: "گلوبال مایند را می‌سازیم تا دانش و تخصص علمی از مرزهای زبان و جغرافیا رد شود. اولین محصول ما نیم‌نگاه است: جزوه و دفترچه‌ی تست برای کنکور ارشد و نظام مهندسی.",
  body: `
<section class="wrap hero">
<div class="hero-copy">
<div class="kicker">گلوبال مایند</div>
<h1 class="hero-title">پلی میان دانشمندان و مردم</h1>
<div class="alt-line" lang="en" dir="ltr">Connecting scientists and people</div>
<div class="rule"></div>
<p class="hero-lead">ما گلوبال مایند را می‌سازیم تا دانش و تخصص علمی از مرزهای زبان و جغرافیا رد شود و به دست کسانی برسد که به آن نیاز دارند.</p>
</div>
${art(ctx)}
<div class="hero-cta btns">
<a class="gm-btn gm-btn--primary" lang="fa" href="${ctx.url("nimnegah")}">نیم‌نگاه را ببینید</a>
<a class="gm-btn gm-btn--secondary" lang="fa" href="${ctx.url("about")}">درباره‌ی گلوبال مایند</a>
</div>
</section>

<section class="wrap what">
<div class="what-inner">
<div class="what-head">
<h2>گلوبال مایند چیست</h2>
<p class="muted">نه یک برند روان‌شناسی، و نه فقط یک شرکت برگزاری رویداد.</p>
</div>
<div class="pillars">
<div class="pillar"><h3>علم</h3><p>کار ما از محتوای علمی شروع می‌شود؛ از پژوهش، تخصص و متن معتبر.</p></div>
<div class="pillar"><h3>مردم</h3><p>مخاطب ما کسانی هستند که می‌خواهند بفهمند: دانشجو، داوطلب آزمون، متخصص.</p></div>
<div class="pillar"><h3>دسترسی فراتر از مرزها</h3><p>زبان و جغرافیا نباید تعیین کند چه کسی به چه دانشی دسترسی دارد.</p></div>
</div>
</div>
</section>

<section class="band band--sunken path"><div class="wrap">
<div class="path-head">
<h2>مسیر ما</h2>
<p class="muted">گلوبال مایند در مرحله‌ی ساخت است. این‌جا صادقانه می‌گوییم امروز کجا ایستاده‌ایم و به کجا می‌رویم.</p>
</div>
<div class="path-grid">
<div class="path-card path-card--now">
<span class="gm-tag gm-tag--gold" lang="fa">امروز · در دسترس</span>
<h3><span class="dot" aria-hidden="true">●</span> نیم‌نگاه</h3>
<p>اولین محصول ما. مجموعه‌های جمع‌بندی و مرور برای آزمون‌های تخصصی، در دو خط: کنکور ارشد و نظام مهندسی. همین امروز از طریق تلگرام قابل تهیه است.</p>
<hr>
<a class="gm-btn gm-btn--ghost gm-btn--sm flush" lang="fa" href="${ctx.url("nimnegah")}">رفتن به نیم‌نگاه ←</a>
</div>
<div class="path-card path-card--future">
<span class="gm-tag gm-tag--plum" lang="fa">مسیر آینده · هنوز برگزار نشده</span>
<h3>نشست‌های علمی بین‌المللی</h3>
<p>نشست‌ها، کارگاه‌ها و کنفرانس‌های علمی با سخنران‌های بین‌المللی، همراه با مترجم و تسهیل‌گر. این بخش هنوز آغاز نشده و چیزی برای ثبت‌نام وجود ندارد.</p>
<hr>
<p class="path-note muted">وقتی اولین رویداد قطعی شود، همین‌جا اعلام می‌کنیم.</p>
</div>
</div>
</div></section>

<section class="wrap product">
<div class="product-grid">
<div class="product-intro">
<div class="kicker">اولین محصول</div>
<h2><span class="dot" aria-hidden="true">●</span> نیم‌نگاه</h2>
<p>جزوه‌های مطالعه و دفترچه‌های تست فشرده و هدف‌دار، برای مرور و آماده‌سازی راهبردی آزمون‌های تخصصی.</p>
<p class="muted">قیمت: در تلگرام به ما پیام بدهید</p>
</div>
<div class="lines">
<div class="lc lc--ms">
<div class="lc-top">
<img src="${ctx.asset("img/cover-masters.jpg")}" alt="جلد نیم‌نگاه — کنکور ارشد" width="559" height="811" loading="lazy">
<div>
<h3>کنکور ارشد</h3>
<p class="lc-sub">جمع‌بندی دو هفته‌ای برای آزمون کارشناسی ارشد</p>
<div class="swatches" aria-hidden="true"><span class="sw-ms-navy"></span><span class="sw-ms-gold"></span><span class="sw-ivory"></span></div>
</div>
</div>
<div class="lc-body">
<p>یک جزوه‌ی مطالعه‌ی فشرده به‌همراه دفترچه‌ی تست با پاسخ تشریحی.</p>
<div class="btns btns--sm-mobile">
<a class="gm-btn gm-btn--secondary gm-btn--sm" lang="fa" href="${LINKS.channel}">نمونه‌ی رایگان</a>
<a class="gm-btn gm-btn--primary gm-btn--sm" lang="fa" href="${LINKS.order}">سفارش در تلگرام</a>
</div>
</div>
</div>
<div class="lc lc--el">
<div class="lc-top">
<img src="${ctx.asset("img/cover-engineering.jpg")}" alt="جلد نیم‌نگاه — نظام مهندسی" width="588" height="861" loading="lazy">
<div>
<h3>نظام مهندسی</h3>
<p class="lc-sub">جمع‌بندی آزمون‌های ورود به حرفه‌ی مهندسان</p>
<div class="swatches" aria-hidden="true"><span class="sw-el-green"></span><span class="sw-el-copper"></span><span class="sw-el-sage"></span></div>
</div>
</div>
<div class="lc-body">
<p>یک جزوه‌ی مطالعه‌ی فشرده به‌همراه دفترچه‌ی تست با پاسخ تشریحی.</p>
<div class="btns btns--sm-mobile">
<a class="gm-btn gm-btn--secondary gm-btn--sm" lang="fa" href="${LINKS.channel}">نمونه‌ی رایگان</a>
<a class="gm-btn gm-btn--primary gm-btn--sm" lang="fa" href="${ctx.url("engineering")}">دیدن این خط</a>
</div>
</div>
</div>
</div>
</div>
</section>

${steps(ctx)}

<section class="band band--navy cta"><div class="wrap cta-inner">
<div>
<h2>سفارش در تلگرام</h2>
<p>سفارش و پرسش‌ها فقط در تلگرام انجام می‌شود. هیچ سبد خرید و درگاه پرداختی روی سایت نیست.</p>
</div>
<div class="btns"><a class="gm-btn gm-btn--gold" lang="fa" href="${LINKS.order}">سفارش در تلگرام</a></div>
</div></section>
`,
});

const en = (ctx) => ({
  title: "Global Mind — Connecting scientists and people",
  description: "We are building Global Mind so that scientific knowledge and expertise can cross the borders of language and geography. Our first product is Nim Negah: study notes and test booklets for specialist exams.",
  body: `
<section class="wrap hero">
<div class="hero-copy">
<div class="kicker">Global Mind</div>
<h1 class="hero-title">Connecting scientists and people</h1>
<div class="alt-line" lang="fa" dir="rtl">پلی میان دانشمندان و مردم</div>
<div class="rule"></div>
<p class="hero-lead">We are building Global Mind so that scientific knowledge and expertise can cross the borders of language and geography and reach the people who need it.</p>
</div>
${art(ctx)}
<div class="hero-cta btns">
<a class="gm-btn gm-btn--primary" lang="en" href="${ctx.url("nimnegah")}">See Nim Negah</a>
<a class="gm-btn gm-btn--secondary" lang="en" href="${ctx.url("about")}">About Global Mind</a>
</div>
</section>

<section class="wrap what">
<div class="what-inner">
<div class="what-head">
<h2>What Global Mind is</h2>
<p class="muted">Not a psychology brand, and not only an events company.</p>
</div>
<div class="pillars">
<div class="pillar"><h3>Science</h3><p>Our work starts from scientific content: research, expertise and reliable sources.</p></div>
<div class="pillar"><h3>People</h3><p>We write for those who want to understand — students, exam candidates, specialists.</p></div>
<div class="pillar"><h3>Access beyond borders</h3><p>Language and geography should not decide who can reach which knowledge.</p></div>
</div>
</div>
</section>

<section class="band band--sunken path"><div class="wrap">
<div class="path-head">
<h2>Where we are</h2>
<p class="muted">Global Mind is still being built. Here we set out plainly where we stand today and where we are heading.</p>
</div>
<div class="path-grid">
<div class="path-card path-card--now">
<span class="gm-tag gm-tag--gold" lang="en">Today · available</span>
<h3><span class="dot" aria-hidden="true">●</span> Nim Negah</h3>
<p>Our first product: review and revision sets for specialist exams, in two lines — the Master’s entrance exam and engineering licensing. Available today through Telegram.</p>
<hr>
<a class="gm-btn gm-btn--ghost gm-btn--sm flush" lang="en" href="${ctx.url("nimnegah")}">Go to Nim Negah →</a>
</div>
<div class="path-card path-card--future">
<span class="gm-tag gm-tag--plum" lang="en">Future path · not yet held</span>
<h3>International scientific sessions</h3>
<p>Scientific sessions, workshops and conferences with international speakers, supported by an interpreter and facilitator. This has not started yet, and there is nothing to register for.</p>
<hr>
<p class="path-note muted">When the first event is confirmed, we will announce it here.</p>
</div>
</div>
</div></section>

<section class="wrap product">
<div class="product-grid">
<div class="product-intro">
<div class="kicker">First product</div>
<h2><span class="dot" aria-hidden="true">●</span> Nim Negah</h2>
<p>Concise, focused study notes and test booklets for reviewing and preparing strategically for specialist exams.</p>
<p class="muted">The materials are written in Persian. For pricing, message us on Telegram.</p>
</div>
<div class="lines">
<div class="lc lc--ms">
<div class="lc-top">
<img src="${ctx.asset("img/cover-masters.jpg")}" alt="Nim Negah cover — Master’s entrance exam" width="559" height="811" loading="lazy">
<div>
<h3>Master’s entrance exam</h3>
<p class="lc-sub">A two-week review for the Master’s entrance exam</p>
<div class="swatches" aria-hidden="true"><span class="sw-ms-navy"></span><span class="sw-ms-gold"></span><span class="sw-ivory"></span></div>
</div>
</div>
<div class="lc-body">
<div class="btns btns--sm-mobile">
<a class="gm-btn gm-btn--secondary gm-btn--sm" lang="en" href="${LINKS.channel}">Free sample</a>
<a class="gm-btn gm-btn--primary gm-btn--sm" lang="en" href="${LINKS.order}">Order on Telegram</a>
</div>
</div>
</div>
<div class="lc lc--el">
<div class="lc-top">
<img src="${ctx.asset("img/cover-engineering.jpg")}" alt="Nim Negah cover — Engineering licensing" width="588" height="861" loading="lazy">
<div>
<h3>Engineering licensing</h3>
<p class="lc-sub">Review for the engineers’ professional licensing exams</p>
<div class="swatches" aria-hidden="true"><span class="sw-el-green"></span><span class="sw-el-copper"></span><span class="sw-el-sage"></span></div>
</div>
</div>
<div class="lc-body">
<div class="btns btns--sm-mobile">
<a class="gm-btn gm-btn--secondary gm-btn--sm" lang="en" href="${LINKS.channel}">Free sample</a>
<a class="gm-btn gm-btn--primary gm-btn--sm" lang="en" href="${ctx.url("engineering")}">See this line</a>
</div>
</div>
</div>
</div>
</div>
</section>

${steps(ctx)}

<section class="band band--navy cta"><div class="wrap cta-inner">
<div>
<h2>Order on Telegram</h2>
<p>Orders and questions are handled on Telegram only. There is no shopping cart or payment gateway on this site.</p>
</div>
<div class="btns"><a class="gm-btn gm-btn--gold" lang="en" href="${LINKS.order}">Order on Telegram</a></div>
</div></section>
`,
});

export default { fa, en };
