/* @ds-bundle: {"format":4,"namespace":"GlobalMindDesignSystem_b977ef","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"ICON_CDN","sourcePath":"components/icon/Icon.jsx"},{"name":"Icon","sourcePath":"components/icon/Icon.jsx"}],"sourceHashes":{"components/core/Button.jsx":"86e5f7c85e91","components/core/Card.jsx":"f62d95e38ade","components/core/Input.jsx":"2f77a59f82b0","components/core/Tag.jsx":"37298464fa05","components/icon/Icon.jsx":"df6ef14faa0c","ui_kits/site/Page.jsx":"64c5088b55f2"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GlobalMindDesignSystem_b977ef = window.GlobalMindDesignSystem_b977ef || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function cx() {
  return Array.prototype.filter.call(arguments, Boolean).join(' ');
}
function dirOf(lang) {
  return lang === 'fa' ? 'rtl' : 'ltr';
}
function Button({
  variant = 'primary',
  size = 'md',
  lang = 'en',
  className,
  type = 'button',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    lang: lang,
    dir: dirOf(lang),
    className: cx('gm-btn', 'gm-btn--' + variant, 'gm-btn--' + size, className)
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function cx() {
  return Array.prototype.filter.call(arguments, Boolean).join(' ');
}
function dirOf(lang) {
  return lang === 'fa' ? 'rtl' : 'ltr';
}
function Card({
  title,
  tone = 'light',
  lang = 'en',
  className,
  children
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: cx('gm-card', 'gm-card--' + tone, className),
    lang: lang,
    dir: dirOf(lang)
  }, title ? /*#__PURE__*/React.createElement("h3", {
    className: "gm-card__title"
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    className: "gm-card__body"
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function cx() {
  return Array.prototype.filter.call(arguments, Boolean).join(' ');
}
function dirOf(lang) {
  return lang === 'fa' ? 'rtl' : 'ltr';
}
function Input({
  label,
  hint,
  error,
  lang = 'en',
  className,
  ...rest
}) {
  const id = React.useId();
  const descId = id + '-d';
  const msg = error ? (lang === 'fa' ? 'خطا: ' : 'Error: ') + error : hint;
  return /*#__PURE__*/React.createElement("div", {
    className: cx('gm-field', error && 'gm-field--error', className),
    lang: lang,
    dir: dirOf(lang)
  }, /*#__PURE__*/React.createElement("label", {
    className: "gm-field__label",
    htmlFor: id
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    dir: "auto",
    className: "gm-field__input",
    "aria-invalid": error ? 'true' : undefined,
    "aria-describedby": msg ? descId : undefined
  }, rest)), msg ? /*#__PURE__*/React.createElement("p", {
    id: descId,
    className: "gm-field__msg",
    role: error ? 'alert' : undefined
  }, msg) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function cx() {
  return Array.prototype.filter.call(arguments, Boolean).join(' ');
}
function dirOf(lang) {
  return lang === 'fa' ? 'rtl' : 'ltr';
}
function Tag({
  tone = 'neutral',
  lang = 'en',
  className,
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: cx('gm-tag', 'gm-tag--' + tone, className),
    lang: lang,
    dir: dirOf(lang)
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/icon/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Lucide (ISC) served from CDN as static SVG, tinted with currentColor via CSS mask.
   Substitution: the Global Mind upload contained no icon set. */
const ICON_CDN = 'https://unpkg.com/lucide-static@0.544.0/icons/';
function Icon({
  name,
  size = 20,
  strokeLabel,
  className,
  style,
  ...rest
}) {
  const url = ICON_CDN + name + '.svg';
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-hidden": rest['aria-label'] ? undefined : true,
    className: className,
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      flex: '0 0 auto',
      backgroundColor: 'currentColor',
      WebkitMaskImage: 'url(' + url + ')',
      maskImage: 'url(' + url + ')',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { ICON_CDN, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icon/Icon.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Page.jsx
try { (() => {
const NS = window.GlobalMindDesignSystem_b977ef || {};
const {
  Button,
  Input,
  Card,
  Tag
} = NS;
const Icon = NS.Icon || (() => null);
const COPY = {
  en: {
    dir: 'ltr',
    lang: 'en',
    nav: ['Essays', 'Voices', 'About', 'Archive'],
    toggle: 'فارسی',
    kicker: 'About us',
    title: 'Global Mind',
    lede: 'Every culture opens a new window on the world; we set those windows side by side to build a fuller picture.',
    cta: 'Read the report',
    cta2: 'Browse essays',
    sectionKicker: 'This month',
    cards: [{
      title: 'One world, many minds',
      body: 'A conversation across languages and cultures, gathered from ten cities.',
      tag: 'Featured',
      tone: 'gold'
    }, {
      title: 'Perspectives that widen the view',
      body: 'Six writers on what translation leaves behind.',
      tag: 'Essay',
      tone: 'neutral'
    }, {
      title: 'The map in the mind',
      body: 'How the places we learn first shape everything we read after.',
      tag: 'Culture',
      tone: 'plum'
    }],
    quote: 'A conversation across languages and cultures',
    quoteBy: 'The Global Mind letter, monthly',
    formTitle: 'Subscribe',
    formLabel: 'Email',
    formHint: 'We reply within two days.',
    formCta: 'Subscribe',
    footer: 'Global Mind · Published in English and Persian'
  },
  fa: {
    dir: 'rtl',
    lang: 'fa',
    nav: ['جستارها', 'صداها', 'درباره ما', 'بایگانی'],
    toggle: 'English',
    kicker: 'درباره ما',
    title: 'ذهن جهانی',
    lede: 'هر فرهنگ پنجره‌ای تازه به جهان می‌گشاید؛ ما این پنجره‌ها را کنار هم می‌گذاریم تا تصویری کامل‌تر بسازیم.',
    cta: 'خواندن گزارش',
    cta2: 'جستارها',
    sectionKicker: 'این ماه',
    cards: [{
      title: 'یک جهان، ذهن‌های بسیار',
      body: 'گفت‌وگویی میان زبان‌ها و فرهنگ‌ها، گردآمده از ده شهر.',
      tag: 'برگزیده',
      tone: 'gold'
    }, {
      title: 'دیدگاه‌هایی که افق را گسترده می‌کنند',
      body: 'شش نویسنده درباره آنچه در ترجمه جا می‌ماند.',
      tag: 'جستار',
      tone: 'neutral'
    }, {
      title: 'نقشه در ذهن',
      body: 'جاهایی که نخست می‌آموزیم چگونه خوانش ما را شکل می‌دهند.',
      tag: 'فرهنگ',
      tone: 'plum'
    }],
    quote: 'گفت‌وگو میان زبان‌ها و فرهنگ‌ها',
    quoteBy: 'نامه ماهانه ذهن جهانی',
    formTitle: 'اشتراک',
    formLabel: 'نشانی رایانامه',
    formHint: 'تا دو روز پاسخ می‌دهیم',
    formCta: 'اشتراک',
    footer: 'ذهن جهانی · منتشر شده به انگلیسی و فارسی'
  }
};
const T = (lang, base) => lang === 'fa' ? 'fa-' + base : base;
function Header({
  lang,
  onToggle
}) {
  const c = COPY[lang];
  return /*#__PURE__*/React.createElement("header", {
    lang: c.lang,
    dir: c.dir,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      padding: 'var(--space-4) var(--space-7)',
      borderBottom: '1px solid var(--border)',
      background: 'var(--ivory)',
      position: 'sticky',
      top: 0,
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/global-mind-on-ivory.png",
    alt: "",
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-sm)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: T(lang, 'heading-2')
  }, c.title)), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      marginInlineStart: 'auto'
    }
  }, c.nav.map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#",
    className: T(lang, 'body-sm'),
    style: {
      textDecoration: 'none',
      color: 'var(--midnight-navy)'
    }
  }, n))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    lang: lang === 'fa' ? 'en' : 'fa',
    onClick: onToggle
  }, c.toggle));
}
function Cover({
  lang
}) {
  const c = COPY[lang];
  const flip = lang === 'fa';
  return /*#__PURE__*/React.createElement("section", {
    lang: c.lang,
    dir: c.dir,
    style: {
      position: 'relative',
      height: 360,
      overflow: 'hidden',
      background: 'var(--ivory)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 960 288",
    preserveAspectRatio: "none",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      transform: flip ? 'scaleX(-1)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("rect", {
    x: "520",
    y: "0",
    width: "240",
    height: "288",
    rx: "16",
    fill: "var(--midnight-navy)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "776",
    y: "0",
    width: "184",
    height: "150",
    rx: "16",
    fill: "var(--antique-gold)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "776",
    y: "166",
    width: "184",
    height: "122",
    rx: "16",
    fill: "var(--dusty-plum)"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "520",
    y1: "96",
    x2: "760",
    y2: "96",
    stroke: "var(--antique-gold)"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "520",
    y1: "144",
    x2: "760",
    y2: "144",
    stroke: "var(--antique-gold)"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "520",
    y1: "192",
    x2: "760",
    y2: "192",
    stroke: "var(--antique-gold)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: 'var(--space-8) var(--space-7)',
      maxWidth: 520
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: T(lang, 'label'),
    style: {
      color: 'var(--dusty-plum)'
    }
  }, c.kicker), /*#__PURE__*/React.createElement("h1", {
    className: T(lang, 'display-xl'),
    style: {
      margin: 'var(--space-3) 0 0'
    }
  }, c.title), /*#__PURE__*/React.createElement("p", {
    className: T(lang, 'body'),
    style: {
      margin: 'var(--space-3) 0 var(--space-5)'
    }
  }, c.lede), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    lang: lang
  }, c.cta, " ", /*#__PURE__*/React.createElement(Icon, {
    name: lang === 'fa' ? 'arrow-left' : 'arrow-right'
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    lang: lang
  }, c.cta2))));
}
function Stories({
  lang
}) {
  const c = COPY[lang];
  return /*#__PURE__*/React.createElement("section", {
    lang: c.lang,
    dir: c.dir,
    style: {
      padding: 'var(--space-8) var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: T(lang, 'label'),
    style: {
      color: 'var(--dusty-plum)',
      marginBottom: 'var(--space-4)'
    }
  }, c.sectionKicker), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
      gap: 'var(--space-5)'
    }
  }, c.cards.map(card => /*#__PURE__*/React.createElement(Card, {
    key: card.title,
    title: card.title,
    lang: lang
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 var(--space-4)'
    }
  }, card.body), /*#__PURE__*/React.createElement(Tag, {
    tone: card.tone,
    lang: lang
  }, card.tag)))));
}
function Quote({
  lang
}) {
  const c = COPY[lang];
  return /*#__PURE__*/React.createElement("section", {
    lang: c.lang,
    dir: c.dir,
    style: {
      background: 'var(--midnight-navy)',
      padding: 'var(--space-8) var(--space-7)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/global-mind-on-navy.png",
    alt: "",
    style: {
      width: 160,
      height: 160,
      borderRadius: 'var(--radius-lg)'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: T(lang, 'heading-1'),
    style: {
      color: 'var(--ivory)'
    }
  }, c.quote), /*#__PURE__*/React.createElement("div", {
    className: T(lang, 'label'),
    style: {
      color: 'var(--antique-gold)',
      marginTop: 'var(--space-4)'
    }
  }, c.quoteBy)));
}
function Subscribe({
  lang
}) {
  const c = COPY[lang];
  const [value, setValue] = React.useState('');
  const [done, setDone] = React.useState(false);
  const invalid = value.length > 0 && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value);
  return /*#__PURE__*/React.createElement("section", {
    lang: c.lang,
    dir: c.dir,
    style: {
      padding: 'var(--space-8) var(--space-7)',
      background: 'var(--ivory-sunken)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 520
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: T(lang, 'heading-2'),
    style: {
      margin: '0 0 var(--space-4)'
    }
  }, c.formTitle), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: c.formLabel,
    lang: lang,
    type: "email",
    placeholder: "name@example.com",
    value: value,
    onChange: e => {
      setValue(e.target.value);
      setDone(false);
    },
    hint: c.formHint,
    error: invalid ? lang === 'fa' ? 'این نشانی معتبر نیست' : 'This address is not valid' : undefined
  })), /*#__PURE__*/React.createElement(Button, {
    lang: lang,
    disabled: !value || invalid,
    onClick: () => setDone(true),
    style: {
      marginBottom: '26px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail"
  }), " ", c.formCta)), done ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "success",
    lang: lang
  }, lang === 'fa' ? 'ثبت شد' : 'Subscribed')) : null));
}
function Footer({
  lang
}) {
  const c = COPY[lang];
  return /*#__PURE__*/React.createElement("footer", {
    lang: c.lang,
    dir: c.dir,
    style: {
      padding: 'var(--space-5) var(--space-7)',
      borderTop: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: T(lang, 'body-sm'),
    style: {
      color: 'var(--dusty-plum)'
    }
  }, c.footer));
}
function Site() {
  const [lang, setLang] = React.useState('en');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ivory)',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement(Header, {
    lang: lang,
    onToggle: () => setLang(l => l === 'en' ? 'fa' : 'en')
  }), /*#__PURE__*/React.createElement(Cover, {
    lang: lang
  }), /*#__PURE__*/React.createElement(Stories, {
    lang: lang
  }), /*#__PURE__*/React.createElement(Quote, {
    lang: lang
  }), /*#__PURE__*/React.createElement(Subscribe, {
    lang: lang
  }), /*#__PURE__*/React.createElement(Footer, {
    lang: lang
  }));
}
window.Site = Site;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Page.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.ICON_CDN = __ds_scope.ICON_CDN;

__ds_ns.Icon = __ds_scope.Icon;

})();
