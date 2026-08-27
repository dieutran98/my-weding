# Online Wedding — CineLove-style Invitation

Single-page wedding invitation built with Vue 3 + Vite + TypeScript, inspired by the layout of `cinelove.me/template/thiep-cuoi-47` (original UI re-implemented, no copied source/assets).

## Stack
- Vue 3 (`<script setup>`) + Vite + TypeScript
- SCSS (design tokens, breakpoints, animations)
- No router (single page, smooth-scroll navigation), no state library (local composables)
- RSVP submits to a Google Apps Script Web App (writes to a Google Sheet)

## Getting started
```bash
npm install
npm run dev      # start dev server
npm run build    # type-check + production build
npm run preview  # preview the production build
```

## Configuring RSVP
1. Deploy the sample script in [docs/google-apps-script-sample.gs](docs/google-apps-script-sample.gs) to a Google Sheet (see comments in the file).
2. Copy `.env.example` to `.env` and set `VITE_RSVP_SCRIPT_URL` to your deployment URL.

## Replacing placeholder assets
All content is data-driven — edit [src/data/wedding.ts](src/data/wedding.ts) to change names, dates, addresses, and events without touching components. Fill in the `saintName`/`fatherSaintName`/`motherSaintName` fields with real Catholic baptismal names (currently empty placeholders).

Placeholder assets to swap with real files before launch:
- `public/images/wedding/hero.svg` → replace with the real hero photo and update the path in `src/data/wedding.ts`.
- `public/audio/wedding-music.mp3` → add the real background music file (referenced by `weddingData.musicSrc`).
- Fonts are loaded from Google Fonts in `index.html`; self-host if needed.

## Structure
```
src/
  components/wedding/   UI sections (Hero, Events, RSVP, ...)
  composables/          useCountdown, useScrollReveal, useWeddingMusic, useRSVPSubmit, useHeartRain
  data/wedding.ts        all wedding content
  types/                 TypeScript models
  styles/                design tokens, breakpoints, animations
```
