/* KidsTown SPA router — hash-based zone switching */

(function () {
    'use strict';

    const VALID_ZONES = [
        'home',
        'cityhall',
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