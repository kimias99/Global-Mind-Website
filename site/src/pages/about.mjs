import { LINKS } from "../layout.mjs";

const fa = (ctx) => ({
  title: "درباره — گلوبال مایند",
  description: "گلوبال مایند از رویدادهای علمی آنلاین با ترجمه و تسهیل‌گری شروع شد و به ایده‌ی وصل‌کردن دانشمندان و مردم رسید. امروز: نیم‌نگاه.",
  body: `
<section class="wrap ab-top">
<div>
<div class="kicker">درباره</div>
<h1>از یک جلسه‌ی ترجمه‌شده تا یک ایده</h1>
<div class="rule mob-only"></div>
</div>
<p class="ab-lead">گلوبال مایند از یک کار مشخص شروع شد: رویدادهای علمی آنلاین که در آن‌ها یک سخنران بین‌المللی برای مخاطبی در ایران صحبت می‌کرد و کسی باید ترجمه و تسهیل‌گری جلسه را به عهده می‌گرفت.</p>
</section>

<section class="wrap ab-body">
<div class="story">
<p>در آن جلسه‌ها یک چیز روشن شد: بخش سخت ماجرا پیدا کردن دانش نیست، رساندن آن است. دانش وجود دارد؛ اما زبان، فاصله‌ی جغرافیایی و نبودِ کسی که واسطه شود، آن را دور نگه می‌دارد.</p>
<p>از همین‌جا ایده‌ی بزرگ‌تری شکل گرفت: گلوبال مایند به‌عنوان یک چتر، برای وصل‌کردن دانشمندان و مردم. کاری که امروز انجام می‌دهیم کوچک و مشخص است — نیم‌نگاه، مجموعه‌های جمع‌بندی و مرور برای آزمون‌های تخصصی — و همان اصل را دنبال می‌کند: محتوای دقیق، به زبانی که مخاطبش می‌فهمد، به شکلی که به‌دستش برسد.</p>
</div>
<figure class="ab-photo">
<div class="frame"><img src="${ctx.asset("img/kimia.jpg")}" alt="کیمیا" width="900" height="1200"></div>
<figcaption>
<div class="ab-name">کیمیا</div>
<div class="ab-role">بنیان‌گذار گلوبال مایند · تهیه و تنظیم مجموعه‌های نیم‌نگاه</div>
</figcaption>
</figure>
<div class="vision">
<h2>چشم‌انداز</h2>
<p class="vision-text">در بلندمدت می‌خواهیم نشست‌ها، کارگاه‌ها و کنفرانس‌های علمی بین‌المللی برگزار کنیم و برای سخنران‌های خارجی مترجم و تسهیل‌گر داشته باشیم، تا مخاطب فارسی‌زبان بتواند بی‌واسطه‌ی زبان، در گفت‌وگوی علمی جهانی شریک شود.</p>
<p class="vision-tag"><span class="gm-tag gm-tag--plum" lang="fa">این یک چشم‌انداز است، نه چیزی که امروز ارائه می‌شود</span></p>
<p class="vision-note">تا امروز هیچ رویداد بین‌المللی‌ای زیر نام گلوبال مایند برگزار نشده است.</p>
</div>
</section>

<section class="wrap other" aria-labelledby="other-title">
<div class="other-card">
<div>
<h2 id="other-title">سازنده، و کاری دیگر</h2>
<div class="rule"></div>
</div>
<div>
<p>کیمیا جدا از گلوبال مایند، برند شخصی ترجمه‌ی خودش را با نام <span lang="en" dir="ltr">KimiaInterprets</span> اداره می‌کند: کار ترجمه‌ی شفاهی و همراهی جلسه‌ها.</p>
<p class="muted">این یک برند مستقل است و محصولی از گلوبال مایند نیست. اگر دنبال خدمات ترجمه هستید، آن‌جا جای درست‌تری است.</p>
<p class="other-link"><a href="${LINKS.kimia}">اینستاگرام <span lang="en" dir="ltr">@kimiainterprets</span></a></p>
</div>
</div>
</section>

<section class="band band--navy cta cta--compact"><div class="wrap cta-inner">
<div>
<h2>امروز از ما چه می‌توانید بگیرید</h2>
<p>نیم‌نگاه: جزوه‌های مطالعه و دفترچه‌های تست برای آزمون‌های تخصصی. سفارش و پرسش فقط در تلگرام.</p>
</div>
<div class="btns">
<a class="gm-btn gm-btn--gold" lang="fa" href="${ctx.url("nimnegah")}">دیدن نیم‌نگاه</a>
<a class="gm-btn gm-btn--secondary gm-btn--on-dark" lang="fa" href="${LINKS.order}">سفارش در تلگرام</a>
</div>
</div></section>
`,
});

const en = (ctx) => ({
  title: "About — Global Mind",
  description: "Global Mind began with online scientific events that needed interpretation and facilitation, and grew into the idea of connecting scientists and people. Today: Nim Negah.",
  body: `
<section class="wrap ab-top">
<div>
<div class="kicker">About</div>
<h1>From an interpreted session to an idea</h1>
<div class="rule mob-only"></div>
</div>
<p class="ab-lead">Global Mind began with a specific piece of work: online scientific events in which an international speaker addressed an audience in Iran, and someone had to interpret and facilitate the session.</p>
</section>

<section class="wrap ab-body">
<div class="story">
<p>Those sessions made one thing clear: the hard part is not finding knowledge but delivering it. The knowledge exists; language, geographic distance and the lack of someone to bridge the gap keep it out of reach.</p>
<p>A larger idea grew from there: Global Mind as an umbrella for connecting scientists and people. What we do today is small and specific — Nim Negah, review and revision sets for specialist exams — and it follows the same principle: accurate content, in a language its reader understands, in a form that actually reaches them.</p>
</div>
<figure class="ab-photo">
<div class="frame"><img src="${ctx.asset("img/kimia.jpg")}" alt="Kimia" width="900" height="1200"></div>
<figcaption>
<div class="ab-name">Kimia</div>
<div class="ab-role">Founder of Global Mind · writes and edits the Nim Negah sets</div>
</figcaption>
</figure>
<div class="vision">
<h2>Vision</h2>
<p class="vision-text">In the long run we want to hold international scientific sessions, workshops and conferences, with interpreters and facilitators for visiting speakers, so that Persian-speaking audiences can take part in the global scientific conversation without language standing in the way.</p>
<p class="vision-tag"><span class="gm-tag gm-tag--plum" lang="en">This is a vision, not something offered today</span></p>
<p class="vision-note">No international event has been held under the Global Mind name to date.</p>
</div>
</section>

<section class="wrap other" aria-labelledby="other-title">
<div class="other-card">
<div>
<h2 id="other-title">The founder’s other work</h2>
<div class="rule"></div>
</div>
<div>
<p>Separately from Global Mind, Kimia runs her own interpreting brand, KimiaInterprets: spoken interpreting and support for live sessions.</p>
<p class="muted">It is an independent brand, not a Global Mind product. If you are looking for interpreting services, that is the better place to start.</p>
<p class="other-link"><a href="${LINKS.kimia}">Instagram @kimiainterprets</a></p>
</div>
</div>
</section>

<section class="band band--navy cta cta--compact"><div class="wrap cta-inner">
<div>
<h2>What we offer today</h2>
<p>Nim Negah: study notes and test booklets for specialist exams. Orders and questions on Telegram only.</p>
</div>
<div class="btns">
<a class="gm-btn gm-btn--gold" lang="en" href="${ctx.url("nimnegah")}">See Nim Negah</a>
<a class="gm-btn gm-btn--secondary gm-btn--on-dark" lang="en" href="${LINKS.order}">Order on Telegram</a>
</div>
</div></section>
`,
});

export default { fa, en };
