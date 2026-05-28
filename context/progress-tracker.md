# Progress Tracker

Update after every completed task or meaningful change.
AI reads this first every session to know the current state.

---

## Status

**Phase**: Feature Build
**Current work**: Figma-matched Features section implemented and verified. Ready to continue with remaining sections.

## Completed

<!-- Add newest at top. Format: - Component/task - brief note -->

- Features section - `components/sections/Features.jsx` - Rebuilt from Figma node `1:294` with exact desktop geometry, matching copy, icon badges, connector lines, membership badge styling, responsive fallback, and overflow clipping removed to better match the Figma root
- About Us section - `components/sections/AboutUs.jsx` - Redesigned and refined to match exact Figma specifications (paddings, shadows, badge corner radius, subtitle style, text color formatting, vertical section spacing)
- Context files created (AI_rules, code-standards, ui-context, project-overview, progress-tracker, task.md) - production-tested context system
- Stats section - `components/sections/Stats.jsx` - 4-column stat counters (shadow values verified and aligned to Figma layout and shadows)
- Hero section - `components/sections/Hero.jsx` - Full hero with CTA, featured case card, scroll indicator (updated color values)
- Navbar - `components/layout/Navbar.jsx` - Glassmorphic nav with mobile hamburger menu, responsive breakpoints
- Project scaffolding - React 19 + Vite 8 + Tailwind v4 + ESLint

## Issues Log

<!-- Only unresolved or recently resolved issues that affect future work -->

| Issue | Status | Resolution |
|-------|--------|------------|
| `text-primary` color wrong - code uses `#252d47`, Figma says `#252b42` | resolved | Fixed in Hero.jsx, Stats.jsx, and App.jsx |
| Benefits.jsx uses BEM classes with no CSS defined | resolved | Removed Benefits section entirely per specifications |
| Stats shadow values don't match Figma multi-layer shadow | resolved | Updated Stats card shadow to match Figma exactly |
| `index.html` title says "AI Home - Smart Growth" - wrong project name | resolved | Updated title to "IR4U - Master Interventional Radiology" |
| Stats and About Us spacing gap wrong | resolved | Set Stats pb-0 and AboutUs pt-[141px] to achieve exact 141px gap spacing |
| About Us cards overlap and title shadow missing | resolved | Added relative z-0 to h2 and relative z-10 lg:-mt-[32px] to grid to overlap Choose IR4U text and cast card drop shadow |
| Manrope and Roboto fonts detected in Figma but not loaded | open | Identify which elements use them - may be partner logos only |
| Missing assets - team photos, partner logos, award badges, featured work images | open | Need to export from Figma or add placeholder strategy |

## Decisions

<!-- Architecture or pattern decisions made during implementation. These prevent the AI from re-debating settled choices. -->

- Tailwind utilities in JSX as primary styling - not BEM, not CSS modules. Custom CSS in `index.css` only for complex gradients, pseudo-elements, keyframes
- Desktop-first responsive using `max-md:` and `max-sm:` breakpoints
- One component per file, `export default function`, data arrays inside function body
- Assets in `public/` with absolute paths `/images/file.png` - never JS import
- Google Fonts CDN for typography - never download font files
- CSS transitions/keyframes only - no JS animation libraries without approval
- Three container widths: `min(1296px, ...)` for stats, `min(1320px, ...)` for pricing/faq/about, `1920px` full-width for hero/tools/contact/footer

## Open Questions

<!-- Unresolved questions that need human input before work can continue -->

- Partner logos: What brand logos should be displayed? Need image assets.
- Team photos: Are actual photos available or should we use placeholder avatars?
- Featured Works images: Are project screenshots available?
- Award badges: What certifications/awards to display?
- The Figma `section-about-us` appears BEFORE `section-partner` (stats) in the layout - is this the intended scroll order?

## Next Up

<!-- Ordered. Top item = what gets built next. -->

1. Services section (`section-services`)
2. Featured Works section (`section-featured-works`)
3. Process section (`section-process`)
4. Partner Logos section (`section-partner`)
