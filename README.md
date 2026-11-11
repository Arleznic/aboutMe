# aboutMe

Personal website of Nicolas Mogollon, built with Next.js, TypeScript and Tailwind CSS.

The layout is based on [michaelmannucci.com](https://michaelmannucci.com/) and was built from the
[ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template).

## Run it locally

Requires Node.js 24 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Edit the content

All text, links and images are in `src/components/sites/aboutme/content.ts`.
Images live in `public/sites/aboutme/`.

## Check before publishing

```bash
npm run check
```

## Publishing

Every push to `main` builds the site and publishes it to GitHub Pages:
https://arleznic.github.io/aboutMe/

The workflow is `.github/workflows/deploy-pages.yml`. It builds with `GITHUB_PAGES=true`, which
exports a static site under the `/aboutMe` path (see `next.config.ts`).
