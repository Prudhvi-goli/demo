# UI Context

Visual reference for implementing components. All values from Figma source (`figma_styles.json`, `figma_scroll_results.txt`).
AI must use these values — never invent colors, fonts, sizes, or spacing.

---

## Colors

### Core Palette

| Token | Value | Usage |
|-------|-------|-------|
| `page-bg` | `#edecec` | Page/body background |
| `text-primary` | `#252b42` | Headings, primary text |
| `text-dark` | `#18181b` | Dark headings (zinc-900) |
| `text-near-black` | `#09090b` | Near-black text (zinc-950) |
| `text-body` | `#3f3f46` | Body text (zinc-700) |
| `text-muted` | `#71717a` | Muted/secondary text (zinc-500) |
| `text-placeholder` | `#a1a1aa` | Placeholder text (zinc-400) |
| `brand` | `#5b4bdb` | Active states, accents, links, scroll icon |
| `brand-dark` | `#151515` | Dark section backgrounds |
| `surface-50` | `#fafafa` | Lightest surface (zinc-50) |
| `surface-100` | `#f5f5f5` | Light surface (zinc-100) |
| `surface-alt` | `#f4f4f5` | Card/stat backgrounds (zinc-100) |
| `border-light` | `#e4e4e7` | Light borders (zinc-200) |
| `border` | `#d4d4d8` | Default borders (zinc-300) |
| `divider` | `#d5d0d4` | Section dividers |
| `gray-mid` | `#52525b` | Medium gray text (zinc-600) |
| `gray-dark` | `#444444` | Dark gray |
| `red-accent` | `#fd3a25` | Alert/accent red |
| `green-success` | `#219653` | Success/growth green |

### Gradients (from Figma style `PurpleGradient`)

```
Primary CTA:     from-[#6c59eb] to-[#5c4be5]     (purple gradient)
Secondary CTA:   from-white to-[#f1f2f5]          (light button)
Sign-in button:  from-[rgba(111,92,236,0.98)] to-[rgba(86,68,222,0.98)]
```

---

## Typography

**Primary font**: Urbanist via Google Fonts
**Secondary fonts**: Manrope (400), Roboto (500) — used in specific elements (TBD)
**Weights loaded**: 400 (body), 500 (medium), 600 (semibold), 700 (bold), 800 (extra-bold)

### Type Scale (from `figma_styles.json` textSnippets)

| Role | Size | Weight | Tracking | Line Height | Usage |
|------|------|--------|----------|-------------|-------|
| Display | 72px / `clamp(2.75rem, 5.2vw, 4rem)` | 600 | -0.04em | — | Section hero headings |
| Service main | 48px | 600 | — | — | "AI Strategy & Mapping" (primary service card) |
| Card title | 36px | 600 | -0.36px | 48px | Feature cards, process steps, stat numbers |
| Membership | 32px | 800 | — | — | "Membership" badge |
| Subtitle | 24px | 600 | — | — | Benefit titles, team lead name, stat labels |
| Description lg | 20px | 400 | — | — | Ecosystem subtitle |
| Counter | 18px | 600 | -0.36px | 28px | "(01)", "(02)" step indices, team roles |
| Testimonial | 18px | 400 | — | — | Testimonial quotes, growth label |
| Body | 16px | 400 | — | 24px | Descriptions, card body text |
| Eyebrow | 16px | 600–700 | — | 24px | "Services", "Process", "Benefits", "Ecosystem" |
| Small body | 14px | 400–600 | — | — | Metadata, card descriptions |

---

## Spacing & Layout

### Container Widths (from `figma_layout.json` frame widths)

```
Full-width:    1920px                              ← Hero, Tools, Contact, Footer
Wide content:  min(1888px, calc(100vw - 32px))     ← Services-to-Features wrapper, Team-to-Testimonials wrapper
Standard:      min(1320px, calc(100vw - 48px))     ← About Us, Pricing, FAQs
Stats:         min(1296px, calc(100vw - 48px))     ← Stats/Partner section
Hero content:  min(1177px, calc(100vw - 32px))     ← Hero inner content
Navbar:        min(1288px, calc(100vw - 32px))     ← Nav bar
Mobile inset:  calc(100vw - 20px)                  ← All sections on mobile
```

### Stat Card Padding (from `figma_scroll_results.txt`)

```
paddingLeft: 40px, paddingRight: 40px, paddingTop: 40px, paddingBottom: 40px
itemSpacing: 10px
```

---

## Border Radius (from `figma_scroll_results.txt`)

| Context | Value |
|---------|-------|
| Stat cards | `40px` (Figma cornerRadius: 40) |
| Scroll indicator | `99px` (pill shape, Figma cornerRadius: 99) |
| Navbar | `20px`, tablet `16px`, mobile `14px` |
| CTA buttons (rect) | `14px` |
| Buttons (pill) | `9999px` / `full` |

---

## Shadows (from `figma_scroll_results.txt` effects)

### Stat Card (Figma-verified)
```css
box-shadow:
  inset 0 4px 0 rgba(255,255,255,0.6),       /* INNER_SHADOW visible */
  0 3px 3px rgba(0,0,0,0.10),                 /* DROP_SHADOW */
  0 8px 16px rgba(0,0,0,0.06);                /* DROP_SHADOW */
```

### Navbar (from index.css)
```css
box-shadow:
  0 10px 40px rgba(25,31,56,0.06),
  inset 0 1.5px 0 rgba(255,255,255,0.8),
  inset 0 -1px 0 rgba(255,255,255,0.25);
```

### CTA Button (from Navbar.jsx)
```css
box-shadow:
  inset 0 1px 0 rgba(255,255,255,0.16),
  0 14px 24px rgba(73,52,182,0.22),
  0 2px 0 rgba(255,255,255,0.08);
```

---

## Effects

### Glassmorphism (Navbar)

```css
background: rgba(255, 255, 255, 0.52);
backdrop-filter: blur(44px);
border: 1.5px solid rgba(255, 255, 255, 0.55);
```

### Stat Card Background
```css
background: rgba(244, 244, 245, 1);   /* #f4f4f5 — from Figma fill r:0.957 g:0.957 b:0.961 */
```

### Hover Behavior
```
CTA buttons:          -translate-y-0.5 + increased shadow spread
Cards/stats:          background-color lightens on hover
Nav links:            color transitions to brand (#5b4bdb)
Transition default:   duration-200
Transition extended:  duration-[250ms] with cubic-bezier(0.4,0,0.2,1)
```

---

## Animations

- **Micro-interactions**: CSS `transition` only — `duration-200` or `duration-[250ms]`
- **Scroll indicator**: CSS `@keyframes scrollBounce` — translateY(0→3px), `2s ease-in-out infinite`
- **Hamburger toggle**: CSS transforms on lines, `duration-300`
- **Mobile menu**: max-height transition, `0.4s cubic-bezier(0.4,0,0.2,1)`
- **No JS animation libraries**

---

## Icons & Assets

| Type | Location | Count | Naming |
|------|----------|-------|--------|
| Brand logo | `public/icons/brand-Logo.png` | 1 | — |
| UI icons | `public/icons/icon-*.png` | 11 | `icon-book`, `icon-shield`, `icon-robot`, `icon-plug`, etc. |
| Floating badges | `public/icons/badge-floating-*.png` | 6 | blue, green, orange, purple, purple2, red |
| Social icons | `public/icons/social-*.png` | 7 | facebook, instagram, linkedin, x, github (+ purple variants) |
| Hero images | `public/images/Hero_banner2.png`, `hero_banner.jpg` | 2 | — |
| Contact bg | `public/images/Contact-image-bg.jpg` | 1 | — |
| Case images | `public/images/case11.png`, `tunnel-dialysis.png`, `live-expert-webinar.png` | 3 | — |
| Earth graphic | `public/icons/Earth.png` | 1 | — |
| SVG sprite | `public/icons.svg` | 1 | — |

---

## Section Visual Pattern

Common layout hierarchy across sections (from Figma text analysis):

```
Section wrapper     → <section> with aria-label, container-width constrained
  Eyebrow           → 16px / 600-700 weight, section label ("Services", "Process")
  Section heading   → 72px / 600 weight, -0.04em tracking
  Description       → 16px / 400 weight, muted color, max-width constrained
  Content           → Grid/flex layout of cards or feature items
  CTA (optional)    → Gradient button, pill or rect-rounded
```
