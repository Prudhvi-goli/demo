import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { href: '#home', label: 'Home', active: true },
    { href: '#membership', label: 'Membership' },
    { href: '#cases', label: 'Cases' },
    { href: '#courses', label: 'Courses' },
    { href: '#webinars', label: 'Webinars' },
    { href: '#community', label: 'Community' },
  ]

  return (
    <header className="absolute left-0 right-0 top-0 z-10 flex flex-col items-center pt-12 max-md:pt-6 max-sm:pt-4">

      {/* ── Nav Bar ── */}
      <nav
        className="navbar-glass"
        aria-label="Primary navigation"
      >
        {/* Logo */}
        <a
          className="shrink-0 inline-flex items-center ml-[31px] max-md:ml-0"
          href="#top"
          aria-label="IR4U home"
        >
          <img
            src="/icons/brand-Logo.png"
            alt=""
            className="block w-[89px] h-14 object-contain max-sm:w-[72px] max-sm:h-[46px]"
          />
        </a>

        {/* Desktop Links */}
        <div className="flex-1 flex justify-center items-center gap-[clamp(20px,2.4vw,38px)] max-md:hidden">
          {links.map(({ href, label, active }) => (
            <a
              key={href}
              href={href}
              className={`
                text-[0.98rem] leading-relaxed tracking-[-0.01em]
                transition-colors duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]
                ${active
                  ? 'text-[#5b4bdb] font-semibold'
                  : 'text-[#1d2338] font-medium hover:text-[#5b4bdb]'
                }
              `}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Hamburger — tablet/mobile only */}
        <button
          className={`
            hidden max-md:flex flex-col justify-center items-center gap-[5px]
            w-11 h-11 rounded-[10px] shrink-0
            transition-colors duration-200
            hover:bg-black/5
            ${menuOpen ? 'hamburger-active' : ''}
          `}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="hamburger-line block w-[22px] h-0.5 bg-[#1d2338] rounded-sm transition-transform duration-300" />
          <span className="hamburger-line block w-[22px] h-0.5 bg-[#1d2338] rounded-sm transition-all duration-300" />
          <span className="hamburger-line block w-[22px] h-0.5 bg-[#1d2338] rounded-sm transition-transform duration-300" />
        </button>

        {/* Sign In CTA */}
        <a
          className="
            shrink-0 mr-3.5
            w-[124px] h-[52px]
            inline-flex items-center justify-center
            rounded-[14px]
            bg-gradient-to-b from-[rgba(111,92,236,0.98)] to-[rgba(86,68,222,0.98)]
            text-white text-base font-semibold
            shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_14px_24px_rgba(73,52,182,0.22),0_2px_0_rgba(255,255,255,0.08)]
            transition-all duration-200
            hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_18px_30px_rgba(73,52,182,0.30),0_2px_0_rgba(255,255,255,0.08)]
            max-md:hidden
          "
          href="#join"
        >
          Sign In
        </a>
      </nav>

      {/* ── Mobile Menu ── */}
      <div
        className={`
          w-[min(1288px,calc(100vw-32px))]
          px-6
          bg-[rgba(255,255,255,0.92)] backdrop-blur-[44px]
          border border-[rgba(255,255,255,0.20)] border-t-0
          rounded-b-[20px]
          max-md:mt-2 max-md:rounded-2xl max-md:border-t
          max-sm:w-[calc(100vw-20px)] max-sm:rounded-[14px]
          ${menuOpen ? 'mobile-menu-open' : 'mobile-menu-closed'}
        `}
        aria-label="Mobile navigation"
      >
        <nav className="flex flex-col gap-1">
          {links.map(({ href, label, active }) => (
            <a
              key={href}
              href={href}
              className={`
                block px-4 py-3 rounded-xl
                text-base text-[#1d2338]
                transition-all duration-200
                ${active
                  ? 'bg-[rgba(91,75,219,0.08)] text-[#5b4bdb] font-semibold'
                  : 'font-medium hover:bg-[rgba(91,75,219,0.08)] hover:text-[#5b4bdb]'
                }
              `}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          className="
            mt-3 w-full h-[52px]
            flex items-center justify-center
            rounded-[14px]
            bg-gradient-to-b from-[rgba(111,92,236,0.98)] to-[rgba(86,68,222,0.98)]
            text-white text-base font-semibold
            shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_14px_24px_rgba(73,52,182,0.22)]
          "
          href="#join"
        >
          Sign In
        </a>
      </div>
    </header>
  )
}
