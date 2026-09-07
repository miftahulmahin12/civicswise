# CivicsWise — Frontend (Phase 1)

A complete Next.js frontend for a U.S. citizenship civics-test practice platform.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To run a production build (matches what was verified during development):

```bash
npm run build
npm run start
```

## Notes on this environment vs. yours

- **Fonts:** this project was built in a sandbox with no outbound access to
  `fonts.googleapis.com`, so `next/font/google` calls were removed from
  `src/app/layout.tsx` in favor of system-font fallbacks that approximate the
  intended look (a humanist sans for UI, a serif for display headings). If
  you build with normal internet access, restore the commented-out
  `Public_Sans` + `Fraunces` block at the top of `layout.tsx` — the whole type
  system already points at those CSS variables, so nothing else changes.
- Everything else (Tailwind v4 design tokens, GSAP, Motion, Three.js,
  Radix-based UI kit) works with the standard npm registry and needs no
  special network access.

## What's in this phase

Full local-data, frontend-only implementation — no real backend, auth, or
payments yet, but the data layer (`src/data/*`, `src/types/*`) is written so
those can be swapped in later without touching page/component code.

Pages: `/`, `/practice/free`, `/2025-civics-test`, `/2008-civics-test`,
`/65-20-test`, `/128-civics-questions`, `/categories/[slug]` (11 categories),
`/study-guide`, `/faq`, `/premium`, `/dashboard`, `/admin`, plus a custom 404.
