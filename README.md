# Homefield Marketing — Website Renewal

A personal Next.js rebuild of [homefieldmarketing.ca](https://homefieldmarketing.ca/) — a B2B marketing agency serving the Canadian prairies.

This project began as a personal initiative to faithfully realise the design system I co-created during my earlier involvement with the agency's original site. It is built entirely with Next.js 15, TypeScript, and Tailwind CSS v4, and is deployed on Vercel.

**[→ View Live Site](https://homefield-marketing.vercel.app)** &nbsp;|&nbsp; **[→ Read the Case Study](https://homefield-marketing.vercel.app/case-study.html)**

---

## Background

During the initial phase of the original Homefield Marketing website, I contributed as a UX/UI designer — defining the photo treatment direction, icon style, colour palette, typographic scale, spacing system, and overall layout language. A talented designer took those foundations and completed the full visual design. However, due to tight production timelines on the development side, some design intent was lost in the final build.

This renewal is my answer to that gap: an opportunity to see the original style guide executed at full fidelity, with modern performance and accessibility practices built in from the start.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router, `src/` directory) |
| Language | TypeScript |
| Styles | Tailwind CSS v4 + SCSS (BEM) |
| Animation | GSAP 3 + ScrollTrigger |
| Database | Supabase PostgreSQL (ISR / SSG) |
| Fonts | Montserrat, Open Sans (Google Fonts) + Superior Title (local WOFF2) |
| Deployment | Vercel |

---

## Key Features

- **Pixel-faithful layout** — measured against the original production site with JS computed-style inspection
- **Performance-first** — below-fold components lazy-loaded via `next/dynamic`; hero video uses `preload="metadata"`; AVIF/WebP image formats via `next/image`
- **Full SEO** — per-page `generateMetadata`, canonical URLs, Open Graph tags, dynamic OG image (`next/og`), `sitemap.ts`, `robots.ts`, JSON-LD structured data
- **WCAG-aware accessibility** — skip navigation, semantic landmarks (`role="banner"`, `<nav aria-label>`), `aria-live` for form feedback, `aria-hidden` on decorative elements, `:focus-visible` keyboard rings
- **ISR pattern** — Supabase-backed project pages use `generateStaticParams` + `revalidate: 3600`; static pages still serve from cache if Supabase is paused

---

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — Hero, Intro, Featured Work, Solutions, Contact |
| `/solutions/[slug]` | 10 service detail pages (SSG) |
| `/our-work/[slug]` | Project detail pages (ISR via Supabase) |
| `/customer-journey` | Step-by-step customer journey |
| `/locations` | Office locations |
| `/contact` | Full contact form |
| `/about` | Company overview |
| `/careers` | Open positions |

---

## Getting Started

```bash
# 1. Install dependencies
cd web && npm install

# 2. Add environment variables
cp .env.local.example .env.local
# Fill in NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY

# 3. Run dev server
npm run dev
# → http://localhost:3000

# 4. Production build
npm run build
```

### Environment Variables

```
NEXT_PUBLIC_SUPABASE_URL=https://[project-ref].supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[anon-key]
```

> The site renders fully without a Supabase connection — all project/solution data falls back to static seed data in `src/data/`.

---

## Project Structure

```
web/
├── src/
│   ├── app/                    # Next.js App Router pages & layouts
│   │   ├── our-work/[slug]/    # ISR project detail pages
│   │   ├── solutions/[slug]/   # SSG solution detail pages
│   │   ├── sitemap.ts          # Auto-generated XML sitemap
│   │   ├── robots.ts           # robots.txt
│   │   └── opengraph-image.tsx # Dynamic OG image (ImageResponse)
│   ├── components/
│   │   ├── layout/             # Header, Footer, ScrollUpBadge
│   │   ├── home/               # Hero, IntroText, FeaturedWork, etc.
│   │   ├── shared/             # Button, Badge, ProjectCard, SolutionCard
│   │   └── our-work/           # WorkGrid, WorkFilter, ProjectDetail
│   ├── data/                   # Static seed data (projects, solutions)
│   ├── lib/                    # GSAP config, animation helpers, utils
│   ├── styles/                 # Shared SCSS partials (mixins, heroes)
│   └── types/                  # TypeScript interfaces
└── public/
    ├── fonts/                  # Superior Title WOFF2
    ├── images/                 # Logo, hero, project thumbnails
    └── case-study.html         # Standalone case study page
```

---

## License

Personal portfolio project. All Homefield Marketing branding, copy, and imagery belong to their respective owners. This repository is for demonstration purposes only.

---

## Case Study

For a detailed walkthrough — including design context, style guide contributions, and technical decisions — see the full case study:

**→ [homefield-marketing.vercel.app/case-study.html](https://homefield-marketing.vercel.app/case-study.html)**
