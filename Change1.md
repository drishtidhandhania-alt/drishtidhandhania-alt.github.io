# Improvement 1: Portfolio Design Refresh

**Status:** Implementation and local preview verified; awaiting Drishti’s visual review.
**Working branch:** `portfolio-layout-refresh` (created from the Improvement 1 baseline; automatically synced to its direct site-update child before this correction)

## Current design

The portfolio is a static Jekyll site with Markdown pages, a shared layout, reusable includes, and a central stylesheet. It uses a near-black background, warm light text, rose accents, sans-serif body text, monospace navigation and labels, section numbers, thin borders, visible keyboard focus, and reduced-motion handling.

The homepage is a continuous portfolio in this order: Introduction, About, Work Experience, FitCircle, and Contact. The introduction is text-first. In About, biography and education occupy roughly two-thirds of the desktop section, with Drishti’s substantial portrait on the right; the content and portrait stack on mobile. The About, Work Experience, and Contact detail pages remain available and reuse the same content as their homepage sections.

The site also retains its skip link, SEO tags, sitemap, favicon, and footer links. Résumé access is removed from the published site and the PDF is excluded from Jekyll output.

## Reference direction

- **Zachary J. Collins:** Use the supplied About screenshot for the numbered section heading, biography/portrait proportions, and education rows. Keep the reference’s near-black canvas, bold headings, small monospace labels, framed portrait treatment, and generous negative space; do not use its copy, résumé link, chatbot, or orange accents.
- **Gisou:** Use the reference only for restrained blush and soft rose color cues. Do not copy its product imagery, branding, or ecommerce layout.

## Proposed changes and purpose

1. **Strengthen typography and hierarchy.** Give the name and page headings a more confident, responsive display scale and weight; keep body copy comfortably readable. Continue using monospace for navigation, section numbers, labels, dates, and outlined project tags. This adapts the main reference’s clear typographic hierarchy to a personal portfolio.
2. **Refine the dark visual system.** Keep a dark-only, near-black background with warm ivory text and limited muted rose/blush accents. Use subtle borders and restrained surface differences to separate sections. Do not introduce orange, light-theme sections, or decorative motion.
3. **Build a continuous homepage.** Present Introduction, About, Work Experience, FitCircle, and Contact in that order. Keep the introduction text-first. Within About, place the biography and education on the left and the substantial portrait on the right at desktop widths; stack the text and portrait on mobile. Keep the standalone About, Work Experience, and Contact pages available and reuse their content rather than maintaining duplicate copies.
4. **Polish shared navigation and page details.** On the homepage, link the navigation to the matching sections; on detail pages, keep links to their standalone destinations. Preserve footer links, the skip link, semantic headings, active-page state, hover styling, and keyboard focus.
5. **Keep Improvement 2 separate.** Retain the FitCircle homepage teaser and standalone case study without changing its story, screenshots, or gallery behavior. Keep prepared gallery work on its separate branch until the first PR is merged.
6. **Remove résumé access from the published site.** Remove the existing résumé download links from Work Experience and Contact, and add the PDF path to Jekyll’s `exclude` list so it is not copied into the generated site. Keep the Work Experience page as the place to read the existing experience details.

## Content and technical guardrails

- Preserve the existing biography, headline (“Product @ Kargo · MBA @ Berkeley Haas”), experience, job titles, contact details, profile photo, and project content. Add only résumé-supported education: Master of Business Administration at UC Berkeley Haas (May 2027), and a B.A. in Econometrics with a Minor in Business Studies from NYU (May 2020; University Honors Scholar). Do not invent or rewrite achievements, metrics, or responsibilities.
- Keep Jekyll, Markdown, YAML front matter, and reusable layouts/includes. Keep `index.md`, `_config.yml`, `_layouts`, `_includes`, and `assets` at the repository root; preserve the empty `baseurl` and current production `url`.
- Continue using Jekyll URL filters for internal links and assets. Preserve SEO tags, sitemap, favicon, and README.
- Use semantic HTML, CSS, and only minimal JavaScript. Do not add React, Vite, Node, `package.json`, a backend, database, trackers, complex animation, or a separate preview application.
- Do not change FitCircle case-study content or screenshot-gallery functionality in this improvement.
- Do not commit, push, open a pull request, or merge. Those steps wait until Drishti reviews the preview and provides the requested commit message.

## Files changed

- `assets/css/site.css` for the visual system, typography, spacing, section treatments, responsive rules, and interaction states.
- `index.md` for the continuous five-section homepage.
- `_includes/about-content.html`, `_includes/experience-content.html`, and `_includes/contact-methods.html` to share existing content between the homepage and detail pages.
- `about.md`, `experience.md`, and `contact.md` to reuse those shared content includes; the existing copy remains.
- `_layouts/default.html` and `_includes/header.html` for the wider homepage container and home-section navigation.
- `.replit` to route the existing Jekyll server on port 5000 to the Preview root.
- `_config.yml` to exclude `assets/drishti-dhandhania-resume.pdf` and this working document from Jekyll output.
- `Change1.md` to record the approved implementation and actual validation results.

`projects/fitcircle.md` and `assets/js/gallery.js` were not changed on this branch. FitCircle case-study copy, screenshots, and gallery behavior remain as before. The prepared FitCircle work remains isolated on `redesign-portfolio`; it was not copied into this branch.

## Implemented changes

- Applied a dark-only palette: `#121113` page background, `#1a181a` raised surface, warm `#f5eee9` text, muted `#d4c8c3` copy, and rose `#eab5c5` accents. No orange was introduced.
- Increased responsive display-heading scale and refined spacing, numbered labels, thin separators, and the framed profile portrait. The introduction stays text-first; the About section has a two-thirds biography/education column and a substantial one-third portrait column on desktop, stacked on mobile.
- Used DM Sans for sans-serif text and IBM Plex Mono for navigation and labels, with system fallbacks. Added restrained hover transitions, active-page navigation styling, and visible keyboard focus while retaining reduced-motion handling.
- Added Introduction → About → Work Experience → FitCircle → Contact as a continuous homepage, with navigation anchors for those sections. Shared includes keep the homepage and standalone About, Work Experience, and Contact copy in sync.
- Added two education rows from the supplied résumé while keeping the existing biography, headline wording, experience details, contact details, photo, and FitCircle content unchanged. Removed only the résumé links and excluded the PDF from the published site.
- Excluded `Change1.md` from Jekyll output as well, so this working document remains in the repository without becoming a public page.

## Validation results

- **Production build:** Restarting the existing `JEKYLL_ENV=production bundle exec jekyll serve --host 0.0.0.0 --port 5000` workflow regenerated the site successfully. It emitted non-fatal RubyGems duplicate-constant and Faraday retry warnings.
- **Homepage structure:** Generated HTML contains Introduction, About, Work Experience, FitCircle, and Contact in that order. The home navigation points to the matching section anchors. Standalone About, Work Experience, Contact, and FitCircle pages remain generated.
- **Generated site:** Sitemap, favicon, profile image, and project image are present. Internal page and asset links resolve. The résumé PDF and `Change1.md` are absent from `_site`; no public HTML links to the résumé remain.
- **Content and accessibility:** The home page uses one h1 followed by section headings and correctly nested experience/contact headings. Standalone pages retain their matching current-page navigation state. Shared includes keep their About, experience, and contact content consistent with the homepage.
- **Keyboard and focus:** The skip link, home navigation, anchor links, and visible 3px `:focus-visible` outline are present in the generated markup and stylesheet. FitCircle case-study/gallery markup and behavior were not changed.
- **Contrast:** Calculated foreground/background ratios were 16.40:1 for text on the page, 11.52:1 for muted text on the page, 10.68:1 for rose on the page, 15.38:1 for text on raised surfaces, 10.80:1 for muted text on raised surfaces, 10.02:1 for rose on raised surfaces, and 15.31:1 for the focus color on the page. All exceed WCAG AA for normal text.
- **Responsive preview:** The restarted Replit Preview was captured on Home at 1280×900 and 375×874, and at `/#about` at 1280×1500 and 375×1900. On desktop, biography and education sit to the left of the portrait; on mobile, the text and education stack above the full-proportion portrait. The introduction is text-only. The five-section order and anchor links are verified in generated output, with no visible horizontal overflow.
- **Preview routing:** The old `.replit` port mapping sent the Preview root to unused port 4000 and returned HTTP 502. It now maps Jekyll’s port 5000 to external port 80. After restart, the Preview root returned HTTP 200 and served markers for all five homepage sections.
- **Other checks:** The CSS contains no orange accent declarations. `git diff --check` passed. The workflow started successfully and the browser console reported no errors.
- **Lighthouse:** The Lighthouse CLI was unavailable, so Performance, Accessibility, Best Practices, and SEO scores were not collected.
- **Review boundary:** No manual commit, push, pull request, or merge was made for this correction. The workspace automatically advanced `portfolio-layout-refresh` from the `f601873` baseline to its direct site-update child before the visual correction; that branch history was left intact. The app and documentation edits remain uncommitted for review.

## Deferred Improvement 2: supplied screenshot inventory

The uploaded set contains three distinct FitCircle app screens. Repeated filenames below are byte-identical copies of the same screen:

- **“What’s the move?”** — `Screenshot_2026-10-06_at_12.56.15_PM_1791322943073.png`; duplicate: `Screenshot_2026-10-06_at_12.56.15_PM_1791395152028.png`.
- **“Find your people”** — `Screenshot_2026-10-06_at_12.50.36_PM_1791322948586.png`; duplicates: `Screenshot_2026-10-06_at_12.50.36_PM_1791322953530.png`, `Screenshot_2026-10-06_at_12.50.36_PM_1791395148940.png`, and `Screenshot_2026-10-06_at_12.50.36_PM_1791395763241.png`.
- **“Start something”** — `Screenshot_2026-10-06_at_12.58.01_PM_1791322941743.png`; duplicates: `Screenshot_2026-10-06_at_12.58.01_PM_1791395150570.png` and `Screenshot_2026-10-06_at_12.58.01_PM_1791395761766.png`.

The supplied Argus images are presentation references; the Competitive Landscape and Competitive Moat images are pitch-deck slides. None are FitCircle app screens and none are used as portfolio project imagery. No additional app screen or missing file was identified in the uploaded set. Keep the expanded gallery implementation and any prepared FitCircle changes isolated until Improvement 1 is reviewed and merged.
