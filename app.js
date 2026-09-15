/* KidsTown SPA router — hash-based zone switching */

(function () {
    'use strict';

const VALID_ZONES = [
    'home',
    'cityhall',
    'cityhall-bbb1',
    'cityhall-bbb2a',
    'cityhall-bbb3-5',
    'cityhall-bbb3a',
    'cityhall-bbb3c',
    'cityhall-bbb4-6',
    'cityhall-bbb4a',
    'cityhall-bbb4c',
    'cityhall-bbb4s',
    'cityhall-bbb5-6',
    'cityhall-bbb5a',
    'cityhall-bbb5s',
    'cityhall-bbb6-4',
    'cityhall-bbb6-5',
    'cityhall-bbb6a',
    'cityhall-bbb6b',
    'cityhall-bbb6s',
    'cityhall-bbbend',
    'cityhall-cap1',
    'cityhall-cap2',
    'cityhall-cap3',
    'cityhall-cap4',
    'cityhall-cap5',
    'cityhall-capend',
    'citypark',
    'library',
    'museum',
    'school',
    'toystore',
    'township',
    'zoo',
    'help'
];
    const CONTENT = document.getElementById('content');
    const ENTRY_PAGE_HTML = CONTENT.innerHTML;

    function handleRoute() {
    const hash = window.location.hash.slice(1).toLowerCase().trim();

    updateBodyZoneClass(hash);

    if (hash === '' || hash === 'home') {
        renderEntryPage();
        return;
    }

    if (!VALID_ZONES.includes(hash)) {
        renderNotFound(hash);
        return;
    }

    loadZone(hash);
}

/**
 * Add a zone-specific class to <body> so CSS can theme the whole
 * page (background, etc.) based on which zone is showing.
 *
 * Examples:
 *   #cityhall         → body class "zone-cityhall"
 *   #cityhall-bbb1    → body class "zone-cityhall"
 *   #museum           → body class "zone-museum"
 *   # (empty)         → no zone class (default home theme)
 */
function updateBodyZoneClass(hash) {
    // Remove any existing zone-* classes from body
    document.body.className = document.body.className
        .split(' ')
        .filter(function (cls) { return !cls.startsWith('zone-'); })
        .join(' ')
        .trim();

    if (hash === '' || hash === 'home') {
        return; // default background (home theme)
    }

    // Take the part of the hash before the first dash as the zone name
    // (e.g. "cityhall-bbb1" → "cityhall")
    const zoneName = hash.split('-')[0];
    document.body.classList.add('zone-' + zoneName);
}

    function renderEntryPage() {
        CONTENT.innerHTML = ENTRY_PAGE_HTML;
        document.title = 'KidsTown';
        scrollToTop();
    }

    function loadZone(zoneName) {
        CONTENT.innerHTML = '<p class="loading">Loading…</p>';

        fetch('zones/' + zoneName + '.html')
            .then(function (response) {
                if (!response.ok) {
                    throw new Error('Zone file returned status ' + response.status);
                }
                return response.text();
            })
            .then(function (html) {
                CONTENT.innerHTML = html;
                document.title = capitalize(zoneName) + ' — KidsTown';
                scrollToTop();
                runInlineScripts(CONTENT);
            })
            .catch(function (err) {
                console.error('Failed to load zone "' + zoneName + '":', err);
                CONTENT.innerHTML =
                    '<section class="zone-content">' +
                    '<h1>Zone not ready yet</h1>' +
                    '<p class="zone-content__lead">' +
                    'The <strong>' + escapeHtml(zoneName) + '</strong> zone is still being built. ' +
                    'Try one of the other zones below, or <a href="#">head back to KidsTown</a>.' +
                    '</p>' +
                    '</section>';
                document.title = 'Not ready — KidsTown';
                scrollToTop();
            });
    }

    function renderNotFound(hash) {
        CONTENT.innerHTML =
            '<section class="zone-content">' +
            '<h1>That page doesn\'t exist</h1>' +
            '<p class="zone-content__lead">' +
            'We couldn\'t find <strong>' + escapeHtml(hash) + '</strong> in KidsTown. ' +
            '<a href="#">Go back to the map</a> and pick a place to visit.' +
            '</p>' +
            '</section>';
        document.title = 'Not found — KidsTown';
        scrollToTop();
    }

    function scrollToTop() {
        try {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (e) {
            window.scrollTo(0, 0);
        }
    }

    function capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    function escapeHtml(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    function runInlineScripts(container) {
        const scripts = container.querySelectorAll('script');
        scripts.forEach(function (oldScript) {
            const newScript = document.createElement('script');
            for (let i = 0; i < oldScript.attributes.length; i++) {
                const attr = oldScript.attributes[i];
                newScript.setAttribute(attr.name, attr.value);
            }
            newScript.textContent = oldScript.textContent;
            oldScript.parentNode.replaceChild(newScript, oldScript);
        });
    }

    if (window.location.hash && window.location.hash !== '#') {
        handleRoute();
    }

    window.addEventListener('hashchange', handleRoute);

})();