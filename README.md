# Sumerian Merchant — website (Astro)

Premium, tactile, cinematic wishlist site for **Sumerian Merchant**.
Astro edition: the visitor gets plain HTML + CSS — **zero JavaScript by
default** — and GSAP loads only for the animated scenes. Fastest possible
site on low-end devices; fully static output, no backend anywhere.

## Quick start

```bash
npm install
npm run dev        # http://localhost:3124
npm run build      # static output in dist/ — deploy to any static host
```

Or just double-click **START-WEBSITE.bat** (Windows): it finds or downloads
a portable Node, installs packages, starts the site, and opens the browser
when the server is ready. No admin rights needed.

## Before launch — 5-minute checklist

1. **`src/lib/site.ts`** — real Steam URL, Discord invite, press email,
   studio name. `astro.config.mjs` → real domain.
2. **`/public/assets/`** — real captures per `public/assets/README.md`:
   - Hero video → replace the scene block in `src/components/home/Hero.astro`
   - Scale capture → swap the SVG in `src/components/home/Scale.astro`
   - Before/after screenshots → swap dioramas in `src/components/home/Growth.astro`
3. **OG image** — add `/assets/og-cover.jpg`, uncomment the meta in
   `src/layouts/Base.astro`.
4. **Devlog** — drop markdown into `src/content/blog/` (`title`, `date`,
   `excerpt` frontmatter). Appears automatically at build.

## Architecture

```
src/
├── layouts/Base.astro        # shell: nav, footer, meta, global reveal script
├── pages/                    # index + about/features/characters/gallery/
│   └── blog/                 #   faq/press/404 + markdown-driven devlog
├── components/
│   ├── home/                 # 14 homepage sections (Hero…FinalCTA)
│   └── …                     # Nav, Footer, Section, Reveal, Dust (build-time),
│                             # CTALink/WishlistButton, MediaPlaceholder, Cuneiform
├── content/blog/*.md         # devlog posts (content collection)
├── styles/global.css         # design tokens + materials (clay/wax/stamp)
└── lib/site.ts               # ← EDIT URLS HERE
```

**JS budget:** interactive scenes (hero parallax, balance scale, ziggurat
light, complaint stamp, day stamps) share one small GSAP bundle; nav toggle,
FAQ, slider are a few lines of vanilla each; dust particles are rendered at
build time with zero client JS. Everything ships its finished state in HTML —
the site is complete with JavaScript disabled, and `prefers-reduced-motion`
turns all animation off.

**CTA rule:** the Steam wishlist button appears exactly three places — hero,
sticky nav, final section (plus a footer text link). Keep it that way.

## Deploy

`npm run build` → upload `dist/` anywhere (Cloudflare Pages, GitHub Pages,
Vercel, Netlify — all free tiers work; there is no server code).
