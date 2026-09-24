// Global Mind — mobile menu, plus link fix-up for browsing the folder offline.
(function () {
  "use strict";

  // Opened straight from disk (file://), folder links like "../about/" would show a
  // directory listing, so point them at the index.html inside instead.
  if (location.protocol === "file:") {
    document.addEventListener("DOMContentLoaded", function () {
      var links = document.querySelectorAll("a[href], link[rel=alternate]");
      for (var i = 0; i < links.length; i++) {
        var href = links[i].getAttribute("href");
        if (!/^[a-z]+:|^#|^\/\//i.test(href) && /\/$/.test(href)) {
          links[i].setAttribute("href", href + "index.html");
        }
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var header = document.querySelector("[data-header]");
    var btn = document.querySelector("[data-menu-btn]");
    if (!header || !btn) return;
    var desktop = window.matchMedia("(min-width: 960px)");
    var isFa = document.documentElement.lang === "fa";
    var labels = isFa
      ? { open: "باز کردن منو", close: "بستن منو" }
      : { open: "Open menu", close: "Close menu" };

    function setOpen(open) {
      header.classList.toggle("is-open", open);
      document.body.classList.toggle("menu-open", open);
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      btn.setAttribute("aria-label", open ? labels.close : labels.open);
    }

    btn.addEventListener("click", function () {
      setOpen(btn.getAttribute("aria-expanded") !== "true");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && header.classList.contains("is-open")) {
        setOpen(false);
        btn.focus();
      }
    });
    // Close when a menu link is followed (matters for same-page links and bfcache restores)
    header.querySelector("#site-menu").addEventListener("click", function (e) {
      if (e.target.closest("a")) setOpen(false);
    });
    window.addEventListener("pageshow", function () { setOpen(false); });
    var onChange = function (e) { if (e.matches) setOpen(false); };
    if (desktop.addEventListener) desktop.addEventListener("change", onChange);
    else desktop.addListener(onChange);
  });
})();
