# Implementation Tasks

Sections listed in **Figma scroll order** (verified from `figma_layout.json` mainWrapperChildren).
Each task = one component = one implementation session.

---

## Already Built

- [x] **Navbar** — `components/layout/Navbar.jsx` — Glassmorphic nav with mobile menu
- [x] **Hero** — `components/sections/Hero.jsx` — Full hero with CTA, featured case card, scroll indicator
- [x] **Stats** — `components/sections/Stats.jsx` — 4-column stat counters (verified and aligned to Figma layout and shadows)
  - ⚠️ Note: Figma calls this `section-partner` (1:807, 1296px wide) / `Frame 3` (`29:104` inside `Hero Banner`). Redesigned styling to match Figma's exact shadows, sizes, and layout.
- [x] **Benefits** — `components/sections/Benefits.jsx` — REMOVED per requirements.
- [x] **About Us** — `components/sections/AboutUs.jsx` — "Why Leading IR Professionals Choose IR4U" 2-column cards layout (matched to Figma)

---

## To Build — In Figma Scroll Order

### 1. About Us Section
- [x] **Status**: COMPLETED
- **Figma**: `section-about-us` (1:763) — 1320×856px
- **File**: `components/sections/AboutUs.jsx`
- **Content**: "Why Leading IR Professionals Choose IR4U"
- **Children**: Background+Shadow frames (card-based layout)
- **Assets needed**: `public/icons/Earth.png` (representing global learning)
- **Container**: `min(1320px, calc(100vw - 48px))`
- **Spacing Note**: Spacing adjusted to match Figma exactly (141px gap to Stats cards; heading layered behind cards with a negative margin `lg:-mt-[32px]` to cast the drop shadow over "Choose IR4U").

### 2. Partner Logos Section
- **Figma**: `section-partner` (1:807) — 1296×168px
- **File**: `components/sections/Partners.jsx`
- **Content**: "Trusted by 100+ top-tier brands" + horizontal divider + logo container
- **Assets needed**: Partner/brand logo images (not yet in `public/`)
- **Container**: `min(1296px, calc(100vw - 48px))`
- **Note**: This is DIFFERENT from the Stats section. Stats was incorrectly named — the first `section-partner` in Figma is the stat counters, this one appears to be a logo strip or was already mapped to Stats. **Verify with Figma visually.**

> ⚠️ **Figma has two frames both named `section-partner`**: one at 1296px (stats/counters area) and one at 1888px (wrapping services through features). The 1296px one contains "Trusted by 100+ top-tier brands" text + a container — likely a partner logos strip ABOVE the stats. Need to confirm if this is separate from Stats or the same section.

### 3. Services Section
- **Figma**: `section-services` (1:887) — inside 1888px wrapper
- **File**: `components/sections/Services.jsx`
- **Content**: Eyebrow "Services" → Title "End-to-End AI Services" (72px) → Description → 4 service cards
- **Cards**: "AI Strategy & Mapping" (48px), "AI UX & Product Design" (36px), "LLM / Agent Development" (36px), "Data Engineering & Pipelines" (36px)
- **Card detail**: Each has index "(01)"–"(04)", description (14px), feature list items (16px/600)
- **Assets needed**: Service icons from `public/icons/`
- **Typography note**: Main card uses **48px** (not 36px) — differs from other cards

### 4. Featured Works Section
- **Figma**: `section-featured-works` (1:918)
- **File**: `components/sections/FeaturedWorks.jsx`
- **Content**: Eyebrow "Featured Works" → 4 project cards
- **Cards**:
  - "Support Copilot for SaaS" — DESCRIPTION + DELIVERABLES + INDUSTRY (SaaS)
  - "Underwriting Risk Copilot" — Fintech
  - "Clinical Note Summarizer" — Healthcare
  - "Catalog Intelligence Engine" — Ecommerce/Retail
- **Card structure**: Title (36px/600) + Description label (16px/400) + Description text (14px/600) + Deliverables + Industry
- **Assets needed**: Project screenshots/images (check if any exist in `public/images/`)

### 5. Process Section
- **Figma**: `section-process` (1:976)
- **File**: `components/sections/Process.jsx`
- **Content**: Eyebrow "Process" → Title "From Idea to Production" (72px/600) → 2 step cards
- **Steps**:
  - Step 01: "Discover & Scope" (36px/600) — "3-7 DAYS" — Big number "01 /03"
  - Step 02: "Prototype" (36px/600) — "1-2 WEEKS" — Big number "02 /03"
- **Typography**: Step counter numbers at 72px/600, duration labels at 16px/600

### 6. Benefits Section (REWRITE)
- [x] **Status**: REMOVED per instructions.

### 7. Features Section (Ecosystem)
- [x] **Status**: COMPLETED
- **Figma**: `section-features` (1:1093)
- **File**: `components/sections/Features.jsx`
- **Content**: Eyebrow "Ecosystem" → Title "Complete IR Learning Ecosystem" (72px/600) → Subtitle (20px/400) → 6 feature cards
- **Cards** (24px/600 each): "Clinical Cases", "Live Webinars", "Discussion Chat Cases", "Structured Courses", "Expert Community", "Learning Progress Tracking"
- **Each card**: Title + description (16px/400)
- **Assets used**: `public/icons/icon-book.png`, `icon-group.png`, `icon-plug.png`, `icon-search.png`, `icon-support.png`, `icon-lightning.png` ✅

### 8. AI Tools Section
- **Figma**: `section-tools` (1:1153) — **1920px full-width**
- **File**: `components/sections/Tools.jsx`
- **Content**: Title "We work with powerful AI tools" (72px/600) → Description → "Get Started" link → Floating tool/badge icons
- **Assets needed**: `public/icons/badge-floating-*.png` (blue, green, orange, purple, purple2, red) — **all present ✅**
- **Special**: Dark background section, floating badge icons with absolute positioning

### 9. Team Section
- **Figma**: `section-team` (1:1221)
- **File**: `components/sections/Team.jsx`
- **Content**: Eyebrow "Team Members" → Title "The Squad Shipping Your AI" (72px/600) → 5 team cards
- **Team members**: Ava Collins (Design Lead, 24px), Noah Reed (ML/Agent Lead, 18px), Lucas Hayes (Solutions Architect), Jordan Brooks (Data Engineer), Erin Park (MLOps Engineer)
- **Card structure**: Name (18–24px/600) + Role (16px/400)
- **Assets needed**: Team member photos — **NOT in `public/images/`** ⚠️ Need to add or use placeholders

### 10. Statistics Section
- **Figma**: `section-statistic` (1:1284)
- **File**: `components/sections/Statistic.jsx`
- **Content**: Eyebrow "Statistic" → Title "Human-centered AI, built for production" (72px/600) → Testimonial quote (18px/400) → "OUR GROWTH" (18px/600)
- **Note**: Different from the Stats component already built. This is a larger showcase section in the dark wrapper area.

### 11. Awards Section
- **Figma**: `section-awards` (1:1310)
- **File**: `components/sections/Awards.jsx`
- **Content**: Recognition badges and achievements
- **Assets needed**: Award badge images — check if available

### 12. Testimonials Section
- **Figma**: `section-testimonials` (1:1400)
- **File**: `components/sections/Testimonials.jsx`
- **Content**: Customer reviews carousel or grid
- **Assets needed**: Customer photos, review content — check Figma for details

### 13. Pricing Section
- **Figma**: `section-pricing` (1:1435) — **1320×793px**
- **File**: `components/sections/Pricing.jsx`
- **Content**: "From pilot to enterprise" + "clear scope, transparent costs" → Toggle (annually) → 2-3 pricing tier cards
- **Children**: Background+Shadow frames (tier cards), Input toggle
- **Container**: `min(1320px, calc(100vw - 48px))`

### 14. FAQs Section
- **Figma**: `section-faqs` (1:1512) — **1320×724px**
- **File**: `components/sections/FAQs.jsx`
- **Content**: "Frequently Asked Questions" → 4 accordion items
- **Children**: 4 Background+Shadow frames (expandable FAQ items)
- **Container**: `min(1320px, calc(100vw - 48px))`
- **Interaction**: Accordion expand/collapse with CSS transitions

### 15. Contact Section
- **Figma**: `section-contact` (1:1544) — **1920×800px full-width**
- **File**: `components/sections/Contact.jsx`
- **Content**: "Let's Build Intelligent Things" → Email (admin@ir4u.info) + Phone (+1 216 236 4624) → Contact form
- **Assets needed**: `public/images/Contact-image-bg.jpg` ✅ **present**
- **Special**: Background image section, contact form with input fields

### 16. Footer
- **Figma**: `Footer - footer` (1:1580) — **1920×601px full-width**
- **File**: `components/layout/Footer.jsx`
- **Content**: Footer logo + "Get connected with Aigocy on social" + "Don't miss our new updates!" + Newsletter links + Footer links list + Copyright "© 2026 Aigocy"
- **Assets needed**: `brand-Logo.png` ✅, `social-facebook.png` ✅, `social-instagram.png` ✅, `social-linkedin.png` ✅, `social-x-.png` ✅, `social-github-purple.png` ✅

### 17. Left Bar (Persistent)
- **Figma**: `Left Bar` (1:1647)
- **File**: `components/layout/LeftBar.jsx`
- **Content**: Vertical sticky sidebar with social links or navigation dots
- **Position**: Fixed left side, visible on desktop only

---

## Asset Inventory

### ✅ Available in `public/icons/`
brand-Logo.png, Earth.png, badge-floating-blue/green/orange/purple/purple2/red.png,
icon-book/clipboard-check/group/intersection/lightning/mail/plug/robot/search/shield/support.png,
social-facebook/github-purple/instagram/linkedin/linkedin-purple/x-/x-purple.png

### ✅ Available in `public/images/`
Hero_banner2.png, hero_banner.jpg, Contact-image-bg.jpg, contage-image-bg-png.png,
Home-page.png, case11.png, live-expert-webinar.png, tunnel-dialysis.png,
Dr. Ram Kishore Gurajala.png, ram-gurajala.png

### ❌ Missing Assets
- Partner/brand logos (for Partner Logos section)
- Team member photos (Ava Collins, Noah Reed, Lucas Hayes, Jordan Brooks, Erin Park)
- Award/certification badge images (for Awards section)
- Featured works project images/screenshots (for case study cards)
- Testimonial author photos

---

## Pre-Implementation Fixes

Before building new sections, fix these issues in existing code:

- [ ] Fix `text-primary` color: `#252d47` → `#252b42` (across Hero.jsx, Stats.jsx, App.jsx)
- [x] Fix Benefits.jsx: Removed per requirements
- [x] Verify Stats shadow values against Figma source
- [x] Update `index.html` title from "AI Home — Smart Growth" to match project name
