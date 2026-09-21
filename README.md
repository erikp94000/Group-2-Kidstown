# KidsTown
Original cgi version (ca. 1998)
https://erikp94000.github.io/Group-2-Kidstown/

KidsTown was conceived, designed and developed by students at the
University of Colorado at Denver through participation in the
Senior Design Project course offered by the
Department of Computer Science and Engineering.
The course represents the capstone experience of the
Bachelor of Science in Computer Science and Engineering degree program
and involves integrating and applying academic learning through the
design and creation of practical products.

KidsTown is a result of the Children's Literacy Project,
a joint effort by the Tattered Cover Book Store and the
University of Colorado at Denver to provide CU-Denver students with
real-world experience in developing a working relationship with a
business while designing and create computer-based tools for promoting
literacy skills among children.
Through this collaboration, the participants address their individual
goals in a manner that acknowledges a common responsibility for
addressing the needs of other community members.

-----

# Children's Literacy Project

The Children's Literacy Project was a collaborative partnership of the
University of Colorado at Denver (UCD) and the Tattered Cover Book Store.

The project, initiated in January 1996, involved UCD students and faculty
and Tattered Cover representatives in the ongoing development and
dissemination of computer-based tools to promote children's literacy.

UCD students benefited by gaining real-world experience in developing
working relationships with a business and by enjoying the opportunity
to integrate and apply their academic learning while designing and creating
community-oriented products. As of Spring 1998, over 100 students had
been involved in the project, along with advisors from UCD and
the Tattered Cover.

The initial product of this partnership is KidsTown, a World Wide Web
site that provides a resource for children, families, and teachers and
promotes literacy through interactive activities that are simultaneously
informative, educational, and entertaining.

Through the Children's Literacy Project, UCD and the Tattered Cover
demonstrated their commitment to supporting the educational needs of local
elementary and university students, and those of children web-wide.

-----

# 2026 Modernization

This repository contains a modernized version of the 1998 KidsTown site,
rebuilt as a Single Page Application (SPA) using vanilla HTML, CSS, and
JavaScript. The modernization was undertaken by MSU Denver students in
Fall 2026 as part of CS39AH (AI as Software Development Teammate).

The goal is to preserve the original site's content, character, and
interactive design while replacing the 1998 Perl/CGI backend with a
static architecture that runs on GitHub Pages with no server required.

## How to Run Locally

The SPA uses `fetch()` to load zone fragments, which browsers block when
opening files directly. You need a local web server:

**Option 1 — Python: python3 -m http.server 8000**
Then open `http://localhost:8000` in your browser.

**Option 2 — VS Code Live Server extension:**
Right-click `index.html` → "Open with Live Server"

## Repository Layout

### Active — the running SPA
- `index.html` — SPA shell with the KidsTown entry page and image map
- `app.js` — hash-based router that swaps zone content into `<main>`
- `styles.css` — shared theme (sunny gradient, zone accent colors, story styles)
- `zones/<zone>/` — one folder per zone containing the HTML fragments
- `graphics/` — image assets (reused from the original site)

### Reference — do NOT modify, do NOT delete
These preserve the original 1998 KidsTown as ground truth and are required
by the CI pipeline:
- `cgi-bin/kt.cgi` — original Perl dispatcher (not executed on GitHub Pages)
- `cgi-bin/kt.db` — routing table mapping KEYs to scripts. **Every zone's KEYs
  are documented here** — check this file to see which KEYs belong to your
  assigned zone and which Perl scripts build each page.
- `cgi-bin/kt.ini` — original server config
- `scripts/` — original Perl page-generation scripts, organized by zone.
  **These are the source-of-truth content that needs to be converted into
  HTML fragments in the new `zones/` folder.** To convert a page: read the
  matching `.pl` file, translate the HTML it prints into a modern zone
  fragment, and save it as `zones/<yourzone>/<page>.html`.
- `data/` — original quiz/story data files

## Zone Status

| Zone      | Status | Notes                                              |
|-----------|--------|----------------------------------------------------|
| Home      | Done   | Entry map with image map + zone navigation         |
| CityHall  | Done   | Both interactive mysteries fully playable          |
| CityPark  | Stub   | Landing placeholder only                           |
| Library   | Done   | Landing placeholder only                           |
| Museum    | Done   | Landing placeholder only                           |
| School    | Done   | Landing placeholder only                           |
| ToyStore  | Done   | Riddles, Poems and bonus question are ready        |
| TownShip  | Done   | The great wonders and country shape game are done  |
| Zoo       | Done   | Regions and quizzes are complete                   |

The CityHall help page (KEY 5900) is not yet built.
Zoo help page (KEY 9600) is not yet built.

## How to Add or Complete a Zone

1. Find your zone's KEYs in `cgi-bin/kt.db`
2. Read the matching Perl scripts in `scripts/<yourzone>/` to see the
   original HTML each page produced
3. Create HTML fragments in `zones/<yourzone>/`:
   - `zones/<yourzone>/index.html` — landing page for the zone
   - `zones/<yourzone>/<subpage>.html` — sub-pages
4. Use `href="#<yourzone>"` and `href="#<yourzone>/<subpage>"` for internal
   links
5. Your zone name is already in `VALID_ZONES` in `app.js` — no changes to
   the router are needed

See `zones/cityhall/` for a complete example with 27 pages and two
interactive branching stories.

## Live Site

https://erikp94000.github.io/Group-2-Kidstown/