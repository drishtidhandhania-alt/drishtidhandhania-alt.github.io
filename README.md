# Drishti Dhandhania — Portfolio

A static Jekyll portfolio published through GitHub Pages from the `main` branch
and repository root:

<https://drishtidhandhania-alt.github.io>

## Update the site

- Edit `index.md`, `about.md`, `experience.md`, and `contact.md` for the main
  pages.
- Edit `projects/fitcircle.md` for the FitCircle project story.
- Put approved site images and downloadable files in `assets/`. Use descriptive
  filenames and alt text for meaningful images.
- Shared page structure lives in `_layouts/` and `_includes/`; styling is in
  `assets/css/site.css`. The FitCircle gallery behavior is in
  `assets/js/gallery.js`.
- Keep `baseurl` empty in `_config.yml` for this GitHub user site.

## Preview locally

Install Ruby and Bundler, then from the repository root run:

```sh
bundle install
bundle exec jekyll serve
```

Open <http://127.0.0.1:4000>. Jekyll rebuilds the site when source files change.
To check the publish output without starting a server:

```sh
bundle exec jekyll build
```

The generated `_site/` directory is local build output; GitHub Pages builds the
site when changes are pushed to `main`.

## Check responsive behavior and Lighthouse

In Chrome, open the local preview and use DevTools' device toolbar to inspect
375px and 1280px widths. Check the navigation, project links, gallery controls,
image captions, and keyboard focus.

To run Lighthouse, open Chrome DevTools → **Lighthouse**, select Performance,
Accessibility, Best Practices, and SEO, and run the audit on the local preview.
Record the actual scores and whether the run used mobile or desktop settings.
The target is 90 or higher in each category; do not report target scores as
results unless Lighthouse actually returned them.

## Publish changes from Replit

Local edits do not sync to GitHub automatically. Publish through Replit's
connected **GitHub (App)** integration, which has write access to
`drishtidhandhania-alt/drishtidhandhania-alt.github.io` and uses managed
authentication. Do not copy a token into the workspace or a file.

Before publishing:

1. Preview the changes locally and run `bundle exec jekyll build`.
2. Review the exact files to publish. The allowed site sources are
   `index.md`, `about.md`, `experience.md`, `contact.md`,
   `projects/*.md`, `_config.yml`, `_includes/**`, `_layouts/**`,
   `assets/css/**`, `assets/js/**`, and individually approved files under
   `assets/`. Repository support files `README.md`, `.gitignore`, `Gemfile`,
   and `Gemfile.lock` may also be updated when needed.
3. Ask Replit Agent to publish only those reviewed paths to the repository's
   `main` branch through the connected GitHub integration. Review the paths and
   commit message before confirming the change.
4. Wait for the GitHub Actions **pages build and deployment** run to complete
   successfully, then verify the changed public page or asset.

Never publish `attached_assets/`, `PLAN.md`, `replit.md`, `.replit`,
`.replitignore`, or Replit-only directories such as `.local/`, `.agents/`,
`.conversation/`, `.config/`, and `scripts/`. Do not copy the entire workspace
or `_site/` to GitHub. The `.gitignore` and Jekyll `exclude` list help keep
local files out, but the reviewed path list is the publishing boundary.

## GitHub Pages configuration

The repository's GitHub Pages settings should use **Deploy from a branch**,
`main`, and `/ (root)`. GitHub Pages then builds this Jekyll site from the
repository root after a commit reaches `main`. No separate app, backend,
database, or manual build step is required for publishing.
