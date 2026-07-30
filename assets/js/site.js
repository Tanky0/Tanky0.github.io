/* Anne Dayer — ePortfolio interaction layer.
   Progressive enhancement only: every page reads and works without this file. */

(function () {
    'use strict';

    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ---------------------------------------------------------- theme --- */

    var toggle = document.querySelector('.theme-toggle');

    if (toggle) {
        toggle.addEventListener('click', function () {
            var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            toggle.setAttribute('aria-label', next === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
            try { localStorage.setItem('theme', next); } catch (e) {}
        });
    }

    /* --------------------------------------------------------- mobile --- */

    var navToggle = document.querySelector('.nav-toggle');
    var navLinks = document.querySelector('.navlinks');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function () {
            var open = navLinks.classList.toggle('is-open');
            navToggle.setAttribute('aria-expanded', String(open));
        });

        navLinks.addEventListener('click', function (e) {
            if (e.target.tagName === 'A') {
                navLinks.classList.remove('is-open');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    /* ------------------------------------------------ scroll chrome  --- */

    var topbar = document.querySelector('.topbar');
    var progress = document.querySelector('.reading-progress span');
    var ticking = false;

    function onScroll() {
        var y = window.scrollY || window.pageYOffset;

        if (topbar) topbar.classList.toggle('is-stuck', y > 8);

        if (progress) {
            var max = document.documentElement.scrollHeight - window.innerHeight;
            progress.style.width = (max > 0 ? (y / max) * 100 : 0) + '%';
        }

        ticking = false;
    }

    window.addEventListener('scroll', function () {
        if (!ticking) {
            window.requestAnimationFrame(onScroll);
            ticking = true;
        }
    }, { passive: true });

    onScroll();

    /* --------------------------------------------------------- reveal --- */

    var revealables = document.querySelectorAll('.content-section, .intro-section, .module-card');

    if (!reduceMotion && 'IntersectionObserver' in window) {
        var revealObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { rootMargin: '0px 0px -8% 0px', threshold: 0.04 });

        Array.prototype.forEach.call(revealables, function (el, i) {
            el.setAttribute('data-reveal', '');
            if (el.classList.contains('module-card')) {
                el.style.transitionDelay = Math.min(i, 6) * 0.045 + 's';
            }
            revealObserver.observe(el);
        });
    }

    /* ---------------------------------------------------- section nav --- */

    var main = document.querySelector('main > .container');
    if (!main) return;

    var headings = main.querySelectorAll('.content-section > h2');
    if (headings.length < 3) return;

    var nav = document.createElement('aside');
    nav.className = 'section-nav';
    nav.setAttribute('aria-label', 'On this page');

    var list = document.createElement('ol');
    var items = [];

    Array.prototype.forEach.call(headings, function (h2, i) {
        var section = h2.parentElement;

        if (!section.id) {
            section.id = (h2.textContent || 'section')
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-+|-+$/g, '') || 'section-' + i;
        }

        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = '#' + section.id;
        a.textContent = h2.textContent;
        li.appendChild(a);
        list.appendChild(li);
        items.push({ link: a, section: section });
    });

    var title = document.createElement('p');
    title.className = 'section-nav__title';
    title.textContent = 'On this page';
    nav.appendChild(title);
    nav.appendChild(list);
    main.appendChild(nav);
    document.body.classList.add('has-section-nav');

    if ('IntersectionObserver' in window) {
        var visible = new Set();

        var spy = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) visible.add(entry.target);
                else visible.delete(entry.target);
            });

            var active = items.filter(function (it) { return visible.has(it.section); })[0];

            items.forEach(function (it) {
                it.link.classList.toggle('is-active', !!active && it === active);
            });
        }, { rootMargin: '-15% 0px -70% 0px', threshold: 0 });

        items.forEach(function (it) { spy.observe(it.section); });
    }
})();
