# michaelmannucci.com — page brief

Source: https://michaelmannucci.com/ → local route `/` (`src/app/page.tsx`).

The layout and styles were cloned from this page. The text, photo, projects and icons were then
replaced with Nicolas Mogollon's own content, and the Blog section was removed. The original
site's images are not included in this repository.

## Files

- `src/components/sites/aboutme/HomePage.tsx` — the whole page.
- `src/components/sites/aboutme/content.ts` — text, links and image paths.
- `src/app/globals.css` — site styles at the end of the file (`.mm-*` classes).
- `public/sites/aboutme/` — avatar, project logo and favicon.

## Sections

1. Header: 👋 home link, "Projects" / "Blog" anchor links (underline fades to #009dce on hover).
2. Hero: two-column grid, heading right-aligned, photo in a 5:6 box over a light-blue panel (85% height).
   On mobile the intro paragraph moves below the grid, centered.
3. Projects: white card with a 1px ring and small shadow, project logo on the right.
4. Blog: post title, date, excerpt.
5. Footer: centered, 50% opacity.

## Styles

- Body font Karla, headings Inter (line-height 1.25). Text color rgb(31 41 55), paragraphs rgb(107 114 128), line-height 1.625.
- Content width 56rem with 1rem side padding. Section padding 6rem (9rem from 640px).

## Measured match

Before the content was replaced, the clone matched the source's element positions and heights
at 974px and 375px wide.
