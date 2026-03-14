# Chandranchal Swasthi Teerth - Project Memory

## Tech Stack
- **Next.js 16.1.6** (App Router) with **React 19.2.3** and **TypeScript 5**
- **Tailwind CSS v4** via `@tailwindcss/postcss` (NOT v3 -- no `tailwind.config.js`)
- **Framer Motion 12.x** (installed but not currently used in components)
- **Swiper 12.x** for hero carousel (fade effect, autoplay, pagination)
- **react-icons 5.x** for iconography across sections
- Images are **unoptimized** (`next.config.ts`: `images: { unoptimized: true }`)

## Project Structure
```
src/
  app/
    layout.tsx        # Root layout, fonts, metadata from SITE_META
    page.tsx          # Single-page site composing all section components
    globals.css       # Tailwind v4 theme, CSS animations, Swiper overrides
  components/         # One component per section, all "use client"
    Header.tsx        # Fixed nav, scroll-aware, mobile drawer
    HeroCarousel.tsx  # Swiper-based hero with Ken Burns effect
    AboutSection.tsx  # Two-column layout with stats
    HighlightsSection.tsx  # Feature cards with icon mapping
    GallerySection.tsx     # Masonry grid with lightbox modal
    EventsSection.tsx      # Event cards with dates
    DonationSection.tsx    # Donation categories with icon mapping
    ContactSection.tsx     # Contact info + Google Maps embed
    Footer.tsx             # Links, social icons, copyright
  constants/
    content.ts        # ALL static text/data (single source of truth)
    design.ts         # Color/font/gradient tokens (JS-side reference)
```

## Tailwind v4 Theme Setup (Critical)
Theme is defined in `globals.css` using `@theme inline {}` block -- NOT a config file.
Colors are registered as `--color-*` CSS custom properties, usable as Tailwind utilities:
- `bg-primary`, `text-secondary`, `border-primary-dark`, etc.
- Custom font families: `--font-heading` (Oswald), `--font-body` (Roboto), `--font-decorative` (Bilbo Swash Caps)
- Font usage in components: `font-[family-name:var(--font-oswald)]` syntax

### Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| primary | #d88e7d | Warm terracotta/rose - buttons, accents, active states |
| primary-dark | #c47a68 | Hover states, scrollbar |
| primary-light | #e6a898 | Light accents, hero text |
| secondary | #363e5a | Deep slate blue - headings, nav text |
| secondary-light | #4a5478 | Lighter blue variant |
| tertiary | #f8eae1 | Soft cream - backgrounds, mobile nav |
| tertiary-light | #fdf5f0 | Lightest cream |
| accent | #b8860b | Gold - decorative elements |

### Key Gradients
- **Primary gradient**: `linear-gradient(327deg, #F6E0DB 0%, #EAF7FA 100%)` -- used for section backgrounds (About, Gallery)
- **Hero overlay**: `linear-gradient(180deg, rgba(54,62,90,0.65) 0%, rgba(54,62,90,0.35) 100%)` via `.gradient-overlay` class

## Content Management
ALL static text lives in `src/constants/content.ts`. Sections export typed objects:
- `SITE_META` - title, tagline (Hindi), description, keywords
- `NAV_ITEMS` - navigation links (anchor-based `#section`)
- `HERO_SLIDES` - carousel slides with Hindi+English headings
- `ABOUT_SECTION` - paragraphs, stats, image path
- `HIGHLIGHTS_SECTION` - feature items with string `icon` keys
- `GALLERY_SECTION` - image paths, alts, captions
- `EVENTS_SECTION` - upcoming events with dates
- `DONATE_SECTION` - donation categories with string `icon` keys
- `CONTACT_SECTION` - address, phone, email, Google Maps config
- `FOOTER` - copyright (auto-year), quick links, social links
- `SACRED_QUOTES` - Hindi quotes with translations

**To update content**: edit `src/constants/content.ts` only. No component changes needed.

## Component Patterns

### All components are client components (`"use client"`)
Every section component uses `"use client"` for Intersection Observer and interactive features.

### Scroll-triggered animations
Sections use `IntersectionObserver` to toggle visibility. Two approaches:
1. **State-based**: `useState(isVisible)` + conditional Tailwind classes (`opacity-0 translate-y-[30px]` -> `opacity-100 translate-y-0`)
2. **CSS class-based**: `.section-fade-in` / `.visible` classes defined in `globals.css`

### Icon mapping pattern
Components like `HighlightsSection` and `DonationSection` map string keys from content constants to react-icons components via a local `iconMap` object. To add a new icon: add the string key in `content.ts`, then add the mapping in the component file.

### Image error handling
All image components use `onError` callbacks to show gradient+SVG placeholders when images fail to load. Gallery has elaborate Jain-themed SVG placeholder icons.

### Navigation
Single-page anchor navigation (`#about`, `#gallery`, etc.). Header uses `IntersectionObserver` to highlight the active section. Smooth scroll with 80px header offset.

## Image Handling
- Images served from `/public/images/` (referenced as `/images/` in code)
- `next/image` with `fill` prop and `sizes` attribute for responsive loading
- **Images are unoptimized** (no Next.js image optimization pipeline)
- Every image component has fallback gradients/SVG placeholders for missing images
- Hero carousel uses CSS `background-image` (not `next/image`) with Ken Burns animation

## Fonts
Loaded two ways (both needed):
1. `next/font/google` in `layout.tsx` for Oswald and Roboto (sets CSS variables `--font-oswald`, `--font-roboto`)
2. Google Fonts `@import` in `globals.css` for all three fonts including Bilbo Swash Caps
- Body text: Roboto
- Headings: Oswald (uppercase tracking-wide is common)
- Decorative: Bilbo Swash Caps (section labels, Hindi accents)

## Gotchas
1. **Tailwind v4** -- no `tailwind.config.js`. Theme defined via `@theme inline` in CSS. Do not create a config file.
2. **Dual font loading** -- fonts are imported in both `globals.css` AND `layout.tsx`. Both are needed.
3. **No dark mode** -- site has no dark mode support.
4. **Hindi/Sanskrit content** -- headings use Devanagari script. Preserve Hindi text exactly.
5. **Bilingual pattern** -- sections typically show Hindi heading + English subheading.
6. **All sections are single-page anchors** -- no routing beyond the home page.
7. **Swiper CSS imports** -- HeroCarousel imports Swiper CSS modules directly in the component file.
8. **Inline styles for gradients** -- section backgrounds use inline `style` objects, not Tailwind classes.
9. **`max-w-7xl` container** -- consistent container width across all sections with `px-4 sm:px-6 lg:px-8` padding.
