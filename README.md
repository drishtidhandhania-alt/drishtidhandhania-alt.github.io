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

## Publish through GitHub Pages

In the repository's GitHub Pages settings, choose **Deploy from a branch**,
select `main`, and choose `/ (root)`. GitHub Pages then builds this Jekyll site
from the repository root. No separate app, backend, database, or manual build
step is required for publishing.
