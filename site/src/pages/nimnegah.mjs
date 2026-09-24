import { LINKS, steps } from "../layout.mjs";

const chips = (items, cls) => items.map((s) => `<span class="gm-tag ${cls}" lang="__L__">${s}</span>`).join("");

const MS_FA = ["روان‌شناسی", "حقوق", "MBA", "مهندسی کامپیوتر", "علوم شناختی", "فناوری اطلاعات IT", "آموزش زبان انگلیسی", "مهندسی برق", "مهندسی صنایع", "مهندسی عمران", "زیست سلولی مولکولی", "فیزیک", "مدیریت"];
const MS_EN = ["Psychology", "Law", "MBA", "Computer Engineering", "Cognitive Science", "Information Technology (IT)", "Teaching English", "Electrical Engineering", "Industrial Engineering", "Civil Engineering", "Cellular and Molecular Biology", "Physics", "Management"];
const EL_FA = ["معماری", "عمران", "برق", "مکانیک"];
const EL_EN = ["Architecture", "Civil", "Electrical", "Mechanical"];

const fa = (ctx) => ({
  title: "نیم‌نگاه — گلوبال مایند",
  description: "نیم‌نگاه مرور و آماده‌سازی هوشمند است: جزوه‌ی مطالعه‌ی فشرده و دفترچه‌ی تست با پاسخ تشریحی، در دو خط کنکور ارشد و نظام مهندسی. سفارش در تلگرام.",
  sticky: "gold",
  body: `
<section class="wrap cat-intro">
<div>
<div class="kicker">محصولی از گلوبال مایند</div>
<h1><span class="dot" aria-hidden="true">●</span> نیم‌نگاه</h1>
<div class="rule"></div>
<p class="lead">نیم‌نگاه مرور و آماده‌سازی هوشمند است، نه «جزوه‌ی کنکور». هر مجموعه نقشه‌ی مفهومی یک درس را می‌دهد: چه چیزی مهم است، چطور به هم وصل می‌شود، و در آزمون چه شکلی پرسیده می‌شود.</p>
</div>
<div class="cat-aside">
<p>هر خط، پالت و لحن تصویری خودش را دارد؛ اما زبان طراحی، ساختار محتوا و دقت مطالب در همه‌ی خط‌ها یکی است.</p>
</div>
</section>

<section class="wrap big-lines" aria-label="خط‌های نیم‌نگاه">
<article class="bl bl--ms">
<div class="bl-top">
<img src="${ctx.asset("img/cover-masters.jpg")}" alt="جلد نیم‌نگاه — کنکور ارشد" width="559" height="811">
<div>
<span class="gm-tag gm-tag--gold" lang="fa">خط اول</span>
<h2>کنکور ارشد</h2>
<p class="bl-sub desk-only">جمع‌بندی دو هفته‌ای برای آزمون کارشناسی ارشد</p>
<div class="swatches" aria-hidden="true"><span class="sw-ms-navy"></span><span class="sw-ms-gold"></span><span class="sw-ivory"></span></div>
<p class="bl-palname desk-only">سرمه‌ای، طلایی عتیقه، عاج</p>
</div>
</div>
<div class="bl-body">
<div class="bl-rule"></div>
<h3 class="desk-only">این خط شامل چیست</h3>
<ul class="incl">
<li><span>جزوه‌ی مطالعه‌ی فشرده: نقشه‌ی مفهومی درس، نظریه‌ها، مثال‌های حل‌شده و جدول‌های مقایسه‌ای</span></li>
<li><span>دفترچه‌ی تست با پاسخ‌نامه‌ی تشریحی و ارجاع به همان مبحث</span></li>
</ul>
<div class="subjects">
<div class="subjects-label">رشته‌های فعلی</div>
<div class="chips">${chips(MS_FA, "gm-tag--neutral gm-tag--outline").replaceAll("__L__", "fa")}</div>
<p class="subjects-note">رشته‌ی شما در فهرست نیست؟ در تلگرام درخواست بدهید تا برایتان آماده کنیم.</p>
</div>
<p class="price">قیمت: در تلگرام به ما پیام بدهید</p>
<div class="btns btns--sm-mobile">
<a class="gm-btn gm-btn--secondary" lang="fa" href="${LINKS.channel}">نمونه‌ی رایگان</a>
<a class="gm-btn gm-btn--primary" lang="fa" href="${LINKS.order}">سفارش در تلگرام</a>
</div>
</div>
</article>

<article class="bl bl--el">
<div class="bl-top">
<img src="${ctx.asset("img/cover-engineering.jpg")}" alt="جلد نیم‌نگاه — نظام مهندسی" width="588" height="861">
<div>
<span class="gm-tag gm-tag--line2" lang="fa">خط دوم</span>
<h2>نظام مهندسی</h2>
<p class="bl-sub desk-only">جمع‌بندی آزمون‌های ورود به حرفه‌ی مهندسان</p>
<div class="swatches" aria-hidden="true"><span class="sw-el-green"></span><span class="sw-el-copper"></span><span class="sw-el-sage"></span><span class="sw-ivory desk-only"></span></div>
<p class="bl-palname desk-only">سبز زغالی، مسی عتیقه، مریم‌گلی، عاج</p>
</div>
</div>
<div class="bl-body">
<div class="bl-rule"></div>
<h3 class="desk-only">این خط شامل چیست</h3>
<ul class="incl">
<li><span>جزوه‌ی مطالعه‌ی فشرده بر پایه‌ی مباحث مقررات ملی ساختمان</span></li>
<li><span>دفترچه‌ی تست با پاسخ‌نامه‌ی تشریحی و ارجاع به مبحث مرجع</span></li>
</ul>
<div class="subjects">
<div class="subjects-label">رشته‌های فعلی · هر کدام در دو صلاحیت نظارت و اجرا</div>
<div class="chips">${chips(EL_FA, "gm-tag--el").replaceAll("__L__", "fa")}</div>
<p class="subjects-note">رشته‌ی دیگری لازم دارید؟ در تلگرام درخواست بدهید تا برایتان آماده کنیم.</p>
</div>
<p class="price">قیمت: در تلگرام به ما پیام بدهید</p>
<div class="btns btns--sm-mobile">
<a class="gm-btn gm-btn--secondary" lang="fa" href="${LINKS.channel}">نمونه‌ی رایگان</a>
<a class="gm-btn gm-btn--primary" lang="fa" href="${ctx.url("engineering")}">دیدن صفحه‌ی خط</a>
</div>
</div>
</article>
</section>

<section class="wrap more">
<div class="more-card">
<div>
<h3>خط‌های بعدی در راه است</h3>
<p>هر خط تازه وقتی این‌جا اضافه می‌شود که واقعاً آماده باشد. تا آن زمان چیزی برای سفارش وجود ندارد.</p>
</div>
<span class="ph">در دست تهیه</span>
</div>
</section>

${steps(ctx, { variant: "cards" })}
`,
});

const en = (ctx) => ({
  title: "Nim Negah — Global Mind",
  description: "Nim Negah is smart review and preparation: concise study booklets and test booklets with explained answers, for the Master’s entrance exam and engineering licensing. Order on Telegram.",
  sticky: "gold",
  body: `
<section class="wrap cat-intro">
<div>
<div class="kicker">A Global Mind product</div>
<h1><span class="dot" aria-hidden="true">●</span> Nim Negah</h1>
<div class="rule"></div>
<p class="lead">Nim Negah is smart review and preparation, not “exam cram notes”. Each set gives you the conceptual map of a subject: what matters, how it connects, and how it is asked in the exam.</p>
</div>
<div class="cat-aside">
<p>Each line has its own palette and visual tone; the design language, content structure and accuracy are the same across all of them.</p>
<p>All materials are written in Persian.</p>
</div>
</section>

<section class="wrap big-lines" aria-label="Nim Negah lines">
<article class="bl bl--ms">
<div class="bl-top">
<img src="${ctx.asset("img/cover-masters.jpg")}" alt="Nim Negah cover — Master’s entrance exam" width="559" height="811">
<div>
<span class="gm-tag gm-tag--gold" lang="en">Line one</span>
<h2>Master’s entrance exam</h2>
<p class="bl-sub desk-only">A two-week review for the Master’s entrance exam</p>
<div class="swatches" aria-hidden="true"><span class="sw-ms-navy"></span><span class="sw-ms-gold"></span><span class="sw-ivory"></span></div>
<p class="bl-palname desk-only">Navy, antique gold, ivory</p>
</div>
</div>
<div class="bl-body">
<div class="bl-rule"></div>
<h3 class="desk-only">What this line includes</h3>
<ul class="incl">
<li><span>A concise study booklet: the subject’s conceptual map, theories, worked examples and comparison tables</span></li>
<li><span>A test booklet with fully explained answers, each linked to its topic</span></li>
</ul>
<div class="subjects">
<div class="subjects-label">Current subjects</div>
<div class="chips">${chips(MS_EN, "gm-tag--neutral gm-tag--outline").replaceAll("__L__", "en")}</div>
<p class="subjects-note">Your subject isn’t listed? Send a request on Telegram and we will prepare it for you.</p>
</div>
<p class="price">For pricing, message us on Telegram.</p>
<div class="btns btns--sm-mobile">
<a class="gm-btn gm-btn--secondary" lang="en" href="${LINKS.channel}">Free sample</a>
<a class="gm-btn gm-btn--primary" lang="en" href="${LINKS.order}">Order on Telegram</a>
</div>
</div>
</article>

<article class="bl bl--el">
<div class="bl-top">
<img src="${ctx.asset("img/cover-engineering.jpg")}" alt="Nim Negah cover — Engineering licensing" width="588" height="861">
<div>
<span class="gm-tag gm-tag--line2" lang="en">Line two</span>
<h2>Engineering licensing</h2>
<p class="bl-sub desk-only">Review for the engineers’ professional licensing exams</p>
<div class="swatches" aria-hidden="true"><span class="sw-el-green"></span><span class="sw-el-copper"></span><span class="sw-el-sage"></span><span class="sw-ivory desk-only"></span></div>
<p class="bl-palname desk-only">Charcoal green, antique copper, sage, ivory</p>
</div>
</div>
<div class="bl-body">
<div class="bl-rule"></div>
<h3 class="desk-only">What this line includes</h3>
<ul class="incl">
<li><span>A concise study booklet based on the topics of Iran’s National Building Regulations</span></li>
<li><span>A test booklet with fully explained answers, each referenced to its source topic</span></li>
</ul>
<div class="subjects">
<div class="subjects-label">Current subjects · each for both supervision and execution</div>
<div class="chips">${chips(EL_EN, "gm-tag--el").replaceAll("__L__", "en")}</div>
<p class="subjects-note">Need another discipline? Send a request on Telegram and we will prepare it for you.</p>
</div>
<p class="price">For pricing, message us on Telegram.</p>
<div class="btns btns--sm-mobile">
<a class="gm-btn gm-btn--secondary" lang="en" href="${LINKS.channel}">Free sample</a>
<a class="gm-btn gm-btn--primary" lang="en" href="${ctx.url("engineering")}">See the line page</a>
</div>
</div>
</article>
</section>

<section class="wrap more">
<div class="more-card">
<div>
<h3>More lines are on the way</h3>
<p>A new line is added here only when it is actually ready. Until then, there is nothing to order.</p>
</div>
</div>
</section>

${steps(ctx, { variant: "cards" })}
`,
});

export default { fa, en };
