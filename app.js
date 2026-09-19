/* =========================================================
   KIDSTOWN — SPA ROUTER
   =========================================================
   Hash-based router with folder-per-zone structure.

   URL patterns:
     #                 → home zone (zones/home/index.html)
     #cityhall         → cityhall landing (zones/cityhall/index.html)
     #cityhall/bbb1    → cityhall sub-page (zones/cityhall/bbb1.html)
     #museum/planet-3  → museum sub-page (zones/museum/planet-3.html)
   ========================================================= */

(function () {
    'use strict';

    // ------- CONFIG -------

    // Zones that exist as folders in zones/. Adding a zone here doesn't
    // create the folder — you still need to actually make zones/<name>/.
    // Sub-pages inside a zone don't need to be listed; the router accepts
    // any #<zone>/<subpage> as long as the zone is in this list.
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

    // ------- CORE ROUTER -------

    function handleRoute() {
        const hash = window.location.hash.slice(1).toLowerCase().trim();

        updateBodyZoneClass(hash);

        // Empty hash → show the KidsTown entry page.
        if (hash === '' || hash === 'home') {
            renderEntryPage();
            return;
        }

        // Parse the hash: "cityhall" or "cityhall/bbb1"
        const parts = hash.split('/');
        const zoneName = parts[0];
        const subPage = parts.slice(1).join('/'); // supports nested subpages if ever needed

        // Unknown zone → not-found message.
        if (!VALID_ZONES.includes(zoneName)) {
            renderNotFound(hash);
            return;
        }

        // Build the file path.
        // #cityhall          → zones/cityhall/index.html
        // #cityhall/bbb1     → zones/cityhall/bbb1.html
        const filePath = subPage
            ? 'zones/' + zoneName + '/' + subPage + '.html'
            : 'zones/' + zoneName + '/index.html';

        loadZone(filePath, hash);
    }

    /**
     * Add a zone-specific class to <body> so CSS can theme the whole
     * page (background, etc.) based on which zone is showing.
     */
    function updateBodyZoneClass(hash) {
        // Remove any existing zone-* classes from body
        document.body.className = document.body.className
            .split(' ')
            .filter(function (cls) { return !cls.startsWith('zone-'); })
            .join(' ')
            .trim();

        if (hash === '' || hash === 'home') {
            return;
        }

        const zoneName = hash.split('/')[0];
        document.body.classList.add('zone-' + zoneName);
    }

    function renderEntryPage() {
        CONTENT.innerHTML = ENTRY_PAGE_HTML;
        document.title = 'KidsTown';
        scrollToTop();
    }

    function loadZone(filePath, hash) {
        CONTENT.innerHTML = '<p class="loading">Loading…</p>';

        fetch(filePath)
            .then(function (response) {
                if (!response.ok) {
                    throw new Error('Zone file returned status ' + response.status);
                }
                return response.text();
            })
            .then(function (html) {
                CONTENT.innerHTML = html;
                document.title = capitalize(hash.replace(/[\/-]/g, ' ')) + ' — KidsTown';
                scrollToTop();
                runInlineScripts(CONTENT);
            })
            .catch(function (err) {
                console.error('Failed to load zone at "' + filePath + '":', err);
                CONTENT.innerHTML =
                    '<section class="zone-content">' +
                    '<h1>Zone not ready yet</h1>' +
                    '<p class="zone-content__lead">' +
                    'The <strong>' + escapeHtml(hash) + '</strong> zone is still being built. ' +
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

    // ------- HELPERS -------

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

    // ------- WIRE UP -------

    handleRoute();
    window.addEventListener('hashchange', handleRoute);

})();