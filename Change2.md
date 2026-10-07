# Change 2: Present FitCircle research and product decisions on Home

**Status:** Carried from the preserved local work onto `fitcircle-research-story`, which starts at GitHub’s updated `main` after Improvement 1 merged. Do not commit or push Improvement 2 until Drishti reviews its Preview.

## Git handoff

Improvement 1 is merged into GitHub `main`. Local `main` was fast-forwarded to that merged history, and `fitcircle-research-story` was created from it. The previous local `redesign-portfolio` branch, including its saved plan commit, remains untouched. The GitHub PR used a single remote commit; use the updated `main` tree as the source of truth rather than replaying the local Improvement 1 commits.

## Goal

Present FitCircle as one concise, selected-project section on Home. Help visitors understand the research, product reasoning, and prototype without making the project dominate the portfolio.

## Content

- Title: **FitCircle**
- Subtitle: **Product strategy and prototyping for social fitness coordination.**
- Keep an introduction and the four case-study parts: The problem, The hypothesis, What I built, and Key product decisions.
- Target approximately 150–180 words for the main narrative, excluding image captions and tags. Use the latest supplied copy below as the starting point; add only concise, evidence-grounded detail.
- Remove “What I would test next” and the “Explore the project” link.
- Do not claim interviews, testing, launches, traction, metrics, or implemented infrastructure/features that are not evidenced.

### Starting copy from the latest revision brief

- **Introduction:** I explored how social accountability could help turn fitness intentions into shared plans, combining competitive analysis, product strategy, and a clickable Lovable prototype.
- **The problem:** Finding a workout does not resolve the friction of coordinating with friends and committing to a plan.
- **The hypothesis:** Making upcoming workouts visible within small, private circles could make it easier for friends to coordinate and commit together.
- **What I built:** A competitive positioning map, a differentiation framework, and a clickable prototype for creating or joining circles and sharing workout plans.
- **Key product decisions:** Small private circles; clear activity, location, and time details; committed versus considering status; and an optional external booking link.

## Visuals

Use these two attached research images before the prototype UI:

1. `attached_assets/Screenshot_2026-10-06_at_12.52.15_PM_1791396936291.png` — competitive landscape / positioning map.
2. `attached_assets/Screenshot_2026-10-06_at_12.52.53_PM_1791396946276.png` — competitive moat / graph framework.

Use concise captions:

- **Competitive positioning:** My positioning analysis explored the relationship between class inventory and social connections, and the opportunity FitCircle could target.
- **Differentiation framework:** My strategy framework explored how invitations, preferences, attendance, and responses to nudges could inform a differentiated product over time.

Include one discreet note: “Research and strategy artifacts reflect the project’s hypotheses and intended positioning.”

Present the map as the author’s analysis and FitCircle’s intended positioning. Present the moat framework as a strategic hypothesis and broader vision, not implemented infrastructure or a proven competitive advantage. Do not repeat broad slide claims as established facts.

Below the research figures, show the three existing prototype screenshots as small, static supporting visuals:

- `assets/images/fitcircle-whats-the-move.png`
- `assets/images/fitcircle-find-your-people.png`
- `assets/images/fitcircle-start-something.png`

Keep all images in semantic, accessibly captioned figures with descriptive alt text. Preserve their natural proportions and original colors. Use restrained borders; research visuals should be compact (about 600px maximum width) and prototype screenshots about 140–160px wide on desktop. Wrap or stack on mobile. Images must not be links or buttons.

Remove the large image viewer, selectable thumbnails, carousel controls, image-switching JavaScript, lightboxes, and click-to-enlarge behavior. Keep the figures static: no image may link to a page, open a viewer, or act as a button.

The attached `Screenshot_2026-10-07_at_11.15.58_AM_1791396963127.png` is a portfolio visual reference, not a replacement for either research image.

## Site scope and constraints

- Put the complete compact FitCircle story on Home; keep Home, About, Work Experience, and Contact pages.
- Remove the standalone FitCircle page from navigation and other public links. Use the installed Jekyll redirect support to redirect its existing URL to the Home FitCircle section.
- Keep the near-black, warm-ivory, muted-rose visual direction, numbered sections, monospace labels, subtle borders, and clear hierarchy. Keep major homepage sections stacked; preserve the desktop right-side portrait and mobile stacking.
- Do not add résumé content or downloads.
- Keep the root-level static Jekyll setup, Markdown/YAML front matter, layouts/includes, plain HTML/CSS, minimal JavaScript, SEO tags, sitemap, favicon, README, repository URL, empty `baseurl`, and GitHub Pages `main` / root deployment. Do not add React, Vite, Node, a backend, or a separate preview application.

## Verification and delivery gate

After implementation, build Jekyll and verify Home at 375px and 1280px. Confirm both research images and all three small prototype images appear; images are static and not linked; writing stays within the 150–180 word target; the specified link and “What I would test next” are absent; navigation works; no horizontal overflow occurs; and the build succeeds. Report only checks actually run and any Lighthouse result actually obtained.

Show the updated Preview for review before committing or pushing. Do not commit or push before Drishti approves the Preview. After approval, use commit message: “Present FitCircle research and product decisions on Home”. Deliver the change through its own pull request into `main`; do not merge it on Drishti’s behalf.
