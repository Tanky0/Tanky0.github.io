/* Anne Dayer, ePortfolio interaction layer.
   Progressive enhancement only: every page reads and works without this file. */

(function () {
    'use strict';

    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var root = document.documentElement;

    /* ---------------------------------------------------------- theme --- */

    var toggle = document.querySelector('.theme-toggle');
    var themeColor = document.querySelector('meta[name="theme-color"]');

    function labelToggle(theme) {
        if (toggle) {
            toggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
        }
        if (themeColor) {
            themeColor.setAttribute('content', theme === 'dark' ? '#0E1216' : '#FBFAF7');
        }
    }

    labelToggle(root.getAttribute('data-theme'));

    if (toggle) {
        toggle.addEventListener('click', function () {
            var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';

            // Switch every colour in the same frame. Without this each element
            // cross-fades on its own transition and the bar lags the page.
            root.setAttribute('data-theme-switching', '');
            root.setAttribute('data-theme', next);
            labelToggle(next);
            try { localStorage.setItem('theme', next); } catch (e) {}

            window.requestAnimationFrame(function () {
                window.requestAnimationFrame(function () {
                    root.removeAttribute('data-theme-switching');
                });
            });
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
            progress.style.transform = 'scaleX(' + (max > 0 ? y / max : 0) + ')';
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

    // Only the module cards on the home page; prose is never hidden.
    var cards = document.querySelectorAll('.module-card');

    if (!reduceMotion && cards.length && 'IntersectionObserver' in window) {
        var revealObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0 });

        var staggered = 0;

        Array.prototype.forEach.call(cards, function (el) {
            var box = el.getBoundingClientRect();
            // Anything already on screen at load, or taller than the window,
            // is shown as it is. Hiding it would only delay the reader.
            if (box.top < window.innerHeight || box.height > window.innerHeight) { return; }
            el.setAttribute('data-reveal', '');
            el.style.transitionDelay = Math.min(staggered, 4) * 0.04 + 's';
            staggered += 1;
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
                var isActive = !!active && it === active;
                it.link.classList.toggle('is-active', isActive);
                if (isActive) it.link.setAttribute('aria-current', 'location');
                else it.link.removeAttribute('aria-current');
            });
        }, { rootMargin: '-15% 0px -70% 0px', threshold: 0 });

        items.forEach(function (it) { spy.observe(it.section); });
    }
})();
