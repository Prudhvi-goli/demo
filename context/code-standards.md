# Code Standards

Match existing code in the codebase. If not covered here, follow the nearest pattern.

---

## Component Pattern

```jsx
import { useState } from 'react'

export default function ComponentName() {
  const items = [{ value: 'X', label: 'Y' }]
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="..." aria-label="[descriptive]">
      {/* Content */}
    </section>
  )
}
```

- One component per file. `Hero.jsx` → `export default function Hero()`
- Data arrays inside the function body unless shared across components
- No barrel files. Import by direct path.

---

## Styling

**Tailwind v4 utilities in JSX** — the default for all styling.

Custom CSS in `index.css` **only** for:
- Multi-layer backgrounds / gradients with images
- Pseudo-elements (`::before`, `::after`)
- Keyframe animations
- Complex filters or vendor-specific properties

```jsx
// Multi-line className — group: layout → spacing → typography → color → responsive
<div className={`
  relative z-[1] w-[min(1177px,calc(100vw-32px))]
  mx-auto pt-40 flex flex-col items-center
  max-md:pt-[140px] max-sm:pt-[120px]
`}>

// Conditional
className={`base ${condition ? 'active' : 'default'}`}
```

No `classnames`/`clsx` libraries. No CSS classes for simple layout/spacing.

---

## Responsive

Desktop-first. Breakpoints: `max-lg:` ≤1024 · `max-md:` ≤768 · `max-sm:` ≤640

```
width:     min(1296px, calc(100vw - 48px))    ← fluid containers
font-size: clamp(2.75rem, 5.2vw, 4rem)       ← scaling text
padding:   clamp(16px, 2vw, 24px)             ← scaling space
```

Never use fixed `px` widths on containers. Always `min()` or `clamp()`.

---

## File Organization

```
src/
├── App.jsx                       # Root layout
├── index.css                     # Custom CSS, animations
├── components/
│   ├── layout/                   # Navbar, Footer
│   ├── sections/                 # Hero, Stats, Benefits
│   └── ui/                       # Shared buttons, cards [when needed]
public/
├── icons/                        # brand-Logo.png, icon-*.png
├── images/                       # Hero_banner2.png, backgrounds
```

- Layout (persistent) → `layout/` · Sections (scroll order) → `sections/`
- Assets in `public/`, reference as `/images/file.png` — never JS import
- Sub-components: `sections/Services/Services.jsx` + `ServiceCard.jsx`

---

## Naming

| What | How | Example |
|------|-----|---------|
| Files & components | PascalCase | `Hero.jsx` → `function Hero()` |
| CSS classes | kebab-case | `.hero-bg-primary` |
| Variables | camelCase | `menuOpen`, `stats` |
| Booleans | `is`/`has` prefix | `isOpen`, `hasLoaded` |
| Handlers | `handle` + action | `handleClick` |

---

## Don't

- Wrapper components that just add padding/margin
- `useEffect` for things computable during render
- BEM classes — use Tailwind utilities
- Animation libraries without approval — CSS first
- `import` images into JS — use `/public` paths
- Download fonts — use Google Fonts CDN + `@theme`
