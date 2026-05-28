# IR4U — Interventional Radiology Learning Platform

## What

IR4U is a landing page for an interventional radiology education platform. It showcases clinical cases, structured courses, live webinars, expert community features, and membership tiers. The target audience is IR professionals, residents, and training institutions. This build covers the complete homepage matching the Figma design pixel-for-pixel.

## Tech Stack

| Layer | Technology | Role |
|-------|-----------|------|
| Framework | React 19 | UI rendering |
| Build | Vite 8 | Dev server, HMR, bundling |
| Styling | Tailwind CSS v4 | Utility-first CSS via `@tailwindcss/vite` |
| Fonts | Urbanist via Google Fonts | Primary typography (400/500/600/700/800) |
| Linting | ESLint 10 + react-hooks + react-refresh | Code quality |
| Deployment | TBD | — |

## Design Source

- **Tool**: Figma
- **File**: `IR4U-HomePage- 1.2 (Copy)`
- **Design width**: 1920px (total page height: 17,965px)
- **Named styles**: `PurpleGradient` (fill)
- **Exported data**: `figma_styles.json`, `figma_scroll_results.txt`, `figma_layout.json`, `figma_summary.json`
- **Assets extracted to**: `public/icons/` (27 files), `public/images/` (11 files)

## Features

### Landing Page Sections (16 total, in scroll order)

- Glassmorphic navbar with mobile hamburger menu
- Hero banner with CTA, featured case card, scroll indicator
- About Us — why IR professionals choose IR4U
- Partner logos strip — "Trusted by 100+ top-tier brands"
- Services grid — 4 AI service cards with descriptions
- Featured Works — 4 case study project cards
- Process — step-by-step workflow (Discover → Prototype)
- Benefits — "Why Choose Us" with metric indicators
- Features — "Complete IR Learning Ecosystem" 6-card grid
- AI Tools — dark section with floating badge icons
- Team — 5 team member profile cards
- Statistics — growth metrics showcase
- Awards — recognition and certifications
- Testimonials — customer review cards
- Pricing — tier packages with toggle
- FAQs — accordion questions
- Contact — form with email/phone, background image
- Footer — links, social icons, newsletter, copyright

### Persistent Layout

- Navbar (top, glassmorphic, responsive)
- Left Bar (vertical sticky sidebar, desktop only)
- Footer (full-width, dark)

## Scope

**In scope**:
- Full homepage matching Figma design across all 16+ sections
- Responsive at 1920px, 1024px, 768px, 640px, 320px
- CSS transitions, hover states, micro-animations
- Mobile hamburger menu with slide animation
- FAQ accordion interaction
- Pricing toggle (monthly/annual)

**Out of scope**:
- Backend / API / database
- Authentication / user accounts
- CMS integration
- Multi-page routing (single page only)
- Search functionality
- Video playback
- Payment processing
- Email form submission (front-end only)

## Success Criteria

1. All 16 Figma sections implemented and visually matching the design
2. Responsive and usable at 1920px, 1024px, 768px, 640px, 320px
3. `npm run build` passes with zero errors
4. No console errors or warnings in production build
5. All interactive elements (menu, accordion, toggle) work correctly
6. Assets load correctly — no broken images or missing icons
