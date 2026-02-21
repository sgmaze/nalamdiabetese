/**
 * Nalam i18n - Lightweight translation engine for static HTML sites
 * Supports: textContent, innerHTML, alt, aria-label, title, meta description
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'nalam-lang';
  var DEFAULT_LANG = 'en';
  var SUPPORTED = ['en', 'ta'];
  var translations = null;
  var currentLang = DEFAULT_LANG;

  function getSavedLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved && SUPPORTED.indexOf(saved) !== -1) return saved;
    } catch (e) {}
    return DEFAULT_LANG;
  }

  function saveLang(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function loadTranslations() {
    var basePath = '';
    var scripts = document.querySelectorAll('script[src*="i18n.js"]');
    if (scripts.length) {
      basePath = scripts[0].src.replace(/i18n\.js.*$/, '');
    }
    return fetch(basePath + 'translations/translations.json')
      .then(function (r) { return r.json(); })
      .then(function (data) {
        translations = data;
        return data;
      });
  }

  function applyTranslations(lang) {
    if (!translations || !translations[lang]) return;
    var t = translations[lang];
    currentLang = lang;

    // 1. textContent: data-i18n
    var els = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++) {
      var key = els[i].getAttribute('data-i18n');
      if (t[key] !== undefined) els[i].textContent = t[key];
    }

    // 2. innerHTML: data-i18n-html
    els = document.querySelectorAll('[data-i18n-html]');
    for (var i = 0; i < els.length; i++) {
      var key = els[i].getAttribute('data-i18n-html');
      if (t[key] !== undefined) els[i].innerHTML = t[key];
    }

    // 3. alt: data-i18n-alt
    els = document.querySelectorAll('[data-i18n-alt]');
    for (var i = 0; i < els.length; i++) {
      var key = els[i].getAttribute('data-i18n-alt');
      if (t[key] !== undefined) els[i].setAttribute('alt', t[key]);
    }

    // 4. aria-label: data-i18n-aria
    els = document.querySelectorAll('[data-i18n-aria]');
    for (var i = 0; i < els.length; i++) {
      var key = els[i].getAttribute('data-i18n-aria');
      if (t[key] !== undefined) els[i].setAttribute('aria-label', t[key]);
    }

    // 5. Page title
    if (t['meta.title']) document.title = t['meta.title'];

    // 6. Meta description
    if (t['meta.description']) {
      var meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', t['meta.description']);
    }

    // 7. HTML lang attribute
    document.documentElement.setAttribute('lang', lang);

    // 8. Update toggle UI
    updateToggleUI(lang);

    // 9. Remove FOUC class
    document.documentElement.classList.remove('i18n-loading');
  }

  function updateToggleUI(lang) {
    var toggles = document.querySelectorAll('.lang-toggle');
    for (var i = 0; i < toggles.length; i++) {
      var btn = toggles[i];
      var enLabel = btn.querySelector('.lang-en');
      var taLabel = btn.querySelector('.lang-ta');
      if (enLabel) {
        enLabel.className = 'lang-en ' + (lang === 'en' ? 'font-bold text-emerald-600' : 'text-slate-400');
      }
      if (taLabel) {
        taLabel.className = 'lang-ta ' + (lang === 'ta' ? 'font-bold text-emerald-600' : 'text-slate-400');
      }
      btn.setAttribute('aria-label', lang === 'en' ? 'தமிழுக்கு மாற்று' : 'Switch to English');
    }
  }

  function toggleLang() {
    var newLang = currentLang === 'en' ? 'ta' : 'en';
    saveLang(newLang);
    applyTranslations(newLang);
  }

  function init() {
    currentLang = getSavedLang();

    var toggles = document.querySelectorAll('.lang-toggle');
    for (var i = 0; i < toggles.length; i++) {
      toggles[i].addEventListener('click', toggleLang);
    }

    loadTranslations().then(function () {
      applyTranslations(currentLang);
    }).catch(function (err) {
      console.warn('i18n: Failed to load translations', err);
      document.documentElement.classList.remove('i18n-loading');
    });
  }

  window.NalamI18n = {
    init: init,
    toggle: toggleLang,
    setLang: function (lang) {
      if (SUPPORTED.indexOf(lang) !== -1) {
        saveLang(lang);
        applyTranslations(lang);
      }
    },
    getLang: function () { return currentLang; }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
