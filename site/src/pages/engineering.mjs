import { LINKS, steps } from "../layout.mjs";

const discCard = (name, { tags, what, quals }) => `<div class="disc-card">
<div class="disc-name">${name}</div>
<div class="chips desk-only">${tags}</div>
<p class="disc-what desk-only">${what}</p>
<p class="disc-quals mob-only">${quals}</p>
</div>`;

const inside = (ctx, items) => items.map(([img, w, h, alt, title, text]) => `<div>
<img src="${ctx.asset("img/" + img)}" alt="${alt}" width="${w}" height="${h}" loading="lazy">
<h3>${title}</h3>
<p>${text}</p>
</div>`).join("\n");

const faq = (items) => items.map(([q, a]) => `<div class="faq-item">
<h3>${q}</h3>
<p>${a}</p>
</div>`).join("\n");

const fa = (ctx) => {
  const tags = '<span class="gm-tag gm-tag--el-strong" lang="fa">صلاحیت نظارت</span><span class="gm-tag gm-tag--el-strong" lang="fa">صلاحیت اجرا</span>';
  const d = { tags, what: "جزوه + دفترچه‌ی تست", quals: "نظارت · اجرا" };
  const order = `<a href="${LINKS.order}" lang="en" dir="ltr">@NNAdminGM</a>`;
  return {
    title: "نظام مهندسی — نیم‌نگاه | گلوبال مایند",
    description: "جمع‌بندی مباحث مقررات ملی ساختمان برای آزمون‌های ورود به حرفه‌ی مهندسان: معماری، عمران، برق و مکانیک، در دو صلاحیت نظارت و اجرا. سفارش در تلگرام.",
    sticky: "copper",
    body: `
<div class="crumbs-bar"><nav class="wrap crumbs" aria-label="مسیر صفحه">
<a href="${ctx.url("nimnegah")}">نیم‌نگاه</a><span class="arr" aria-hidden="true">←</span><span aria-current="page">نظام مهندسی</span>
</nav></div>

<section class="band band--green"><div class="wrap eh">
<div class="eh-a">
<div class="kicker">خط دوم نیم‌نگاه</div>
<h1>نظام مهندسی</h1>
<div class="alt-line" lang="en" dir="ltr">PROFESSIONAL LICENSING EXAM</div>
<div class="copper-lines" aria-hidden="true"><span></span><span></span><span></span></div>
</div>
<div class="eh-cover">
<img src="${ctx.asset("img/cover-engineering.jpg")}" alt="جلد نیم‌نگاه — نظام مهندسی، معماری · صلاحیت نظارت" width="588" height="861">
</div>
<div class="eh-b">
<p>جمع‌بندی مباحث مقررات ملی ساختمان برای آزمون‌های ورود به حرفه‌ی مهندسان: نقشه‌ی مفهومی هر مبحث، نکته‌های کلیدی و تست با پاسخ تشریحی.</p>
</div>
<div class="eh-cta btns">
<a class="gm-btn gm-btn--copper" lang="fa" href="${LINKS.order}">سفارش در تلگرام</a>
<a class="gm-btn gm-btn--secondary gm-btn--on-dark" lang="fa" href="${LINKS.channel}">نمونه‌ی رایگان در تلگرام</a>
</div>
<p class="eh-price">قیمت: در تلگرام به ما پیام بدهید</p>
</div></section>

<section class="wrap disc" aria-labelledby="disc-title">
<div class="disc-head">
<h2 class="h-sec" id="disc-title">رشته‌ها و صلاحیت‌ها</h2>
<p>هر رشته در دو صلاحیت نظارت و اجرا.<span class="desk-only"> رشته‌ی دیگری لازم دارید؟ در تلگرام درخواست بدهید تا برایتان آماده کنیم.</span></p>
</div>
<div class="disc-grid">
${["معماری", "عمران", "برق", "مکانیک"].map((n) => discCard(n, d)).join("\n")}
</div>
<p class="disc-foot mob-only">رشته‌ی دیگری لازم دارید؟ در تلگرام درخواست بدهید تا برایتان آماده کنیم.</p>
</section>

<section class="wrap inside" aria-labelledby="inside-title"><div class="inside-inner">
<h2 class="h-sec" id="inside-title">داخل هر مجموعه چه چیزی هست</h2>
<div class="inside-grid">
${inside(ctx, [
  ["sample-study.jpg", 605, 860, "نمونه‌ی صفحه‌ی مطالعه", "بخش مطالعه", "هر مبحث به بخش‌های شماره‌دار تقسیم می‌شود؛ تعریف‌ها، رابطه‌ها و نکته‌های کلیدی در کادرهای جداگانه."],
  ["sample-tests.jpg", 576, 837, "نمونه‌ی صفحه‌ی تست", "دفترچه‌ی تست", "تست‌های دسته‌بندی‌شده به تفکیک بخش، با چهار گزینه و شماره‌گذاری پیوسته."],
  ["sample-answers.jpg", 580, 861, "نمونه‌ی پاسخ‌نامه‌ی تشریحی", "پاسخ‌نامه‌ی تشریحی", "برای هر تست، دلیل گزینه‌ی درست به‌همراه ارجاع به مبحث مرجع."],
])}
</div>
</div></section>

${steps(ctx, { variant: "cards", accent: "copper", step2: "discipline" })}

<section class="wrap faq" aria-labelledby="faq-title">
<h2 class="h-sec" id="faq-title">پرسش‌های پرتکرار</h2>
<div class="faq-list">
${faq([
  ["چطور سفارش بدهم؟", `در تلگرام به ${order} پیام بدهید و بنویسید کدام رشته و کدام مبحث را می‌خواهید. سفارش‌گیری فقط همان‌جا انجام می‌شود.`],
  ["پرداخت چطور انجام می‌شود؟", "کارت‌به‌کارت، بعد از پیام دادن در تلگرام. شماره‌ی کارت را همان‌جا برای شما می‌فرستیم؛ روی سایت هیچ درگاه پرداخت و شماره‌ی کارتی نیست."],
  ["فایل‌ها چطور به دستم می‌رسد؟", "پس از تأیید پرداخت، فایل‌های کامل در همان گفت‌وگوی تلگرام فرستاده می‌شود. ارسال فیزیکی نداریم."],
  ["قبل از سفارش می‌توانم نمونه ببینم؟", `بله. نمونه‌های رایگان صفحه‌های واقعی جزوه و تست را در <a href="${LINKS.channel}">کانال تلگرام نیم‌نگاه</a> می‌گذاریم.`],
])}
</div>
</section>

<section class="band band--green cta cta--compact cta--line"><div class="wrap cta-inner">
<div>
<h2>سفارش در تلگرام</h2>
<p>بنویسید کدام رشته را می‌خواهید؛ باقی کار همان‌جا جلو می‌رود.</p>
</div>
<div class="btns"><a class="gm-btn gm-btn--copper" lang="fa" href="${LINKS.order}">سفارش در تلگرام</a></div>
</div></section>
`,
  };
};

const en = (ctx) => {
  const tags = '<span class="gm-tag gm-tag--el-strong" lang="en">Supervision</span><span class="gm-tag gm-tag--el-strong" lang="en">Execution</span>';
  const d = { tags, what: "Study booklet + test booklet", quals: "Supervision · Execution" };
  const order = `<a href="${LINKS.order}">@NNAdminGM</a>`;
  return {
    title: "Engineering licensing — Nim Negah | Global Mind",
    description: "A review of the National Building Regulations topics for the engineers’ professional licensing exams: Architecture, Civil, Electrical and Mechanical, for supervision and execution. Order on Telegram.",
    sticky: "copper",
    body: `
<div class="crumbs-bar"><nav class="wrap crumbs" aria-label="Breadcrumb">
<a href="${ctx.url("nimnegah")}">Nim Negah</a><span class="arr" aria-hidden="true">→</span><span aria-current="page">Engineering licensing</span>
</nav></div>

<section class="band band--green"><div class="wrap eh">
<div class="eh-a">
<div class="kicker">Nim Negah · line two</div>
<h1>Engineering licensing</h1>
<div class="alt-line" lang="fa" dir="rtl">نظام مهندسی</div>
<div class="copper-lines" aria-hidden="true"><span></span><span></span><span></span></div>
</div>
<div class="eh-cover">
<img src="${ctx.asset("img/cover-engineering.jpg")}" alt="Nim Negah cover — Engineering licensing, Architecture · Supervision" width="588" height="861">
</div>
<div class="eh-b">
<p>A review of the National Building Regulations topics for the engineers’ professional licensing exams: a conceptual map of each topic, key points, and tests with explained answers.</p>
</div>
<div class="eh-cta btns">
<a class="gm-btn gm-btn--copper" lang="en" href="${LINKS.order}">Order on Telegram</a>
<a class="gm-btn gm-btn--secondary gm-btn--on-dark" lang="en" href="${LINKS.channel}">Free sample on Telegram</a>
</div>
<p class="eh-price">For pricing, message us on Telegram.</p>
</div></section>

<section class="wrap disc" aria-labelledby="disc-title">
<div class="disc-head">
<h2 class="h-sec" id="disc-title">Disciplines and qualifications</h2>
<p>Each discipline covers both supervision and execution.<span class="desk-only"> Need another discipline? Send a request on Telegram and we will prepare it for you.</span></p>
</div>
<div class="disc-grid">
${["Architecture", "Civil", "Electrical", "Mechanical"].map((n) => discCard(n, d)).join("\n")}
</div>
<p class="disc-foot mob-only">Need another discipline? Send a request on Telegram and we will prepare it for you.</p>
</section>

<section class="wrap inside" aria-labelledby="inside-title"><div class="inside-inner">
<h2 class="h-sec" id="inside-title">What is inside each set</h2>
<div class="inside-grid">
${inside(ctx, [
  ["sample-study.jpg", 605, 860, "Sample study page", "Study section", "Each topic is divided into numbered sections, with definitions, formulas and key points in separate boxes."],
  ["sample-tests.jpg", 576, 837, "Sample test page", "Test booklet", "Tests grouped by section, each with four options and continuous numbering."],
  ["sample-answers.jpg", 580, 861, "Sample explained answer key", "Explained answer key", "For every test, the reason the correct option is right, with a reference to the source topic."],
])}
</div>
</div></section>

${steps(ctx, { variant: "cards", accent: "copper", step2: "discipline" })}

<section class="wrap faq" aria-labelledby="faq-title">
<h2 class="h-sec" id="faq-title">Frequently asked questions</h2>
<div class="faq-list">
${faq([
  ["How do I order?", `Message ${order} on Telegram and say which discipline and topic you need. Orders are taken there only.`],
  ["How is payment made?", "By bank card transfer, after you message us on Telegram. We send the card number there; there is no payment gateway or card number on this site."],
  ["How do I receive the files?", "Once payment is confirmed, the complete files are sent in the same Telegram chat. There is no physical delivery."],
  ["Can I see a sample before ordering?", `Yes. Free samples of real study and test pages are posted on the <a href="${LINKS.channel}">Nim Negah Telegram channel</a>.`],
])}
</div>
</section>

<section class="band band--green cta cta--compact cta--line"><div class="wrap cta-inner">
<div>
<h2>Order on Telegram</h2>
<p>Tell us which discipline you need; everything else happens there.</p>
</div>
<div class="btns"><a class="gm-btn gm-btn--copper" lang="en" href="${LINKS.order}">Order on Telegram</a></div>
</div></section>
`,
  };
};

export default { fa, en };
