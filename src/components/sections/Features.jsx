const featureCards = [
  {
    icon: '/icons/icon-book.png',
    title: 'Clinical Cases',
    lines: [
      'Turn repetitive tasks into autonomous flows—',
      'agents plan, execute, and report with guardrails,',
      'audit trails, and clear handoff to humans.',
    ],
    width: 'left-[296px] right-[1177.28px]',
    top: 'top-[204px]',
    titleRight: 'right-[97.11px]',
    bodyRight: 'right-[45.8px]',
    shadowClass:
      'shadow-[0px_7.77px_8px_rgba(0,0,0,0.06),0px_3px_1.5px_rgba(0,0,0,0.1)]',
  },
  {
    icon: '/icons/icon-clipboard-check.png',
    title: 'Live Webinars',
    lines: [
      'Measure accuracy, latency, safety, and cost from',
      'day one. Our evals and dashboards keep models',
      'reliable and budgets predictable.',
    ],
    width: 'left-[296px] right-[1177.28px]',
    top: 'top-[504px]',
    titleRight: 'right-[199.72px]',
    bodyRight: 'right-[41.3px]',
    shadowClass:
      'shadow-[0px_7.77px_8px_rgba(0,0,0,0.06),0px_3px_1.5px_rgba(0,0,0,0.1)]',
  },
  {
    icon: '/icons/icon-plug.png',
    title: 'Discussion Chat Cases',
    lines: [
      'Make your docs, tickets, and wikis instantly useful',
      'with retrieval augmented generation—freshness,',
      'citations, and explainability built in.',
    ],
    width: 'left-[296px] right-[1177.28px]',
    top: 'top-[804px]',
    titleRight: 'right-[127.91px]',
    bodyRight: 'right-[40.71px]',
    shadowClass:
      'shadow-[0px_7.77px_8px_rgba(0,0,0,0.06),0px_3px_1.5px_rgba(0,0,0,0.1)]',
  },
  {
    icon: '/icons/icon-search.png',
    title: 'Structured Courses',
    lines: [
      'Interfaces, prompts, and error states designed for',
      'trust and adoption—so the smart thing is also the',
      'obvious thing to do.',
    ],
    width: 'left-[1177.28px] right-[296px]',
    top: 'top-[204px]',
    titleRight: 'right-[127.76px]',
    bodyRight: 'right-[34.85px]',
    shadowClass:
      'shadow-[0px_7.77px_8px_rgba(0,0,0,0.06),0px_3px_1.5px_rgba(0,0,0,0.1)]',
  },
  {
    icon: '/icons/icon-shield.png',
    title: 'Expert Community',
    lines: [
      'PII handling, SSO/SAML, RBAC, secrets',
      'management, and compliance workflows—ship',
      'AI that’s safe, auditable, and enterprise-ready.',
    ],
    width: 'left-[1177.28px] right-[296px]',
    top: 'top-[504px]',
    titleRight: 'right-[171px]',
    bodyRight: 'right-[47.3px]',
    shadowClass:
      'shadow-[0px_7.77px_8px_rgba(0,0,0,0.06),0px_3px_1.5px_rgba(0,0,0,0.1)]',
  },
  {
    icon: '/icons/icon-lightning.png',
    title: 'Learning Progress Tracking',
    lines: [
      'Plug into your stack (CRM, helpdesk, ERP, data',
      'warehouse) with webhooks and APIs to turn',
      'insights into action—fast.',
    ],
    width: 'left-[1177.28px] right-[296px]',
    top: 'top-[804px]',
    titleRight: 'right-[84px]',
    bodyRight: 'right-[62.27px]',
    shadowClass:
      'shadow-[0px_7.77px_8px_rgba(0,0,0,0.06),0px_3px_1.5px_rgba(0,0,0,0.1)]',
  },
]

function CardIcon({ icon }) {
  return (
    <div
      className="
        flex size-[60px] items-center justify-center rounded-[16px] bg-[#252b42]
        shadow-[0px_2.77px_1.105px_rgba(0,0,0,0.12),0px_3px_1.5px_rgba(0,0,0,0.14),0px_12.52px_5.01px_rgba(0,0,0,0.13),0px_22.34px_8.935px_rgba(0,0,0,0.14),0px_41.78px_16.71px_rgba(0,0,0,0.15),0px_100px_40px_rgba(0,0,0,0.15)]
      "
      aria-hidden="true"
    >
      <div className="-scale-y-100 flex-none">
        <img alt="" aria-hidden="true" src={icon} className="size-[32px] object-contain" />
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, lines, width, top, titleRight, bodyRight, shadowClass }) {
  return (
    <article
      className={`
        absolute h-[268px] rounded-[32px] bg-[#f4f4f5] ${shadowClass} ${width} ${top}
      `}
    >
      <div className="absolute inset-0 rounded-[inherit] bg-[#f4f4f5]" aria-hidden="true" />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_4px_0px_0px_rgba(255,255,255,0.6)]" aria-hidden="true" />

      <div className="absolute left-[32px] top-[32px]">
        <CardIcon icon={icon} />
      </div>

      <h3
        className={`
          absolute left-[32px] ${titleRight} top-[140px] h-[32px]
          -translate-y-1/2 flex flex-col justify-center text-[24px] font-semibold leading-[32px] text-black
        `}
      >
        <span>{title}</span>
      </h3>

      <div
        className={`
          absolute left-[32px] ${bodyRight} top-[199.5px] h-[67px]
          -translate-y-1/2 flex flex-col justify-center text-[16px] font-normal leading-[24px] text-[#71717a]
        `}
      >
        {lines.map((line) => (
          <p key={line} className="mb-0 leading-[24px]">
            {line}
          </p>
        ))}
      </div>
    </article>
  )
}

function MembershipBadge() {
  return (
    <div
      className="
        absolute left-1/2 top-[558px] h-[160px] w-[160px] -translate-x-1/2 rounded-[32px]
        bg-gradient-to-b from-[#5b4bdb] to-[#5546cb]
        shadow-[0px_3.44px_2.785px_rgba(91,75,219,0.09),0px_22.91px_18.54px_rgba(91,75,219,0.17),0px_76px_61.5px_rgba(91,75,219,0.05),0px_5.05px_4.09px_rgba(91,75,219,0.1),0px_16.98px_13.735px_rgba(91,75,219,0.05),0px_56px_41.5px_rgba(91,75,219,0.25),0px_14px_17px_rgba(91,75,219,0.25),0px_1px_1px_rgba(91,75,219,0.4)]
      "
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.6)]"
        aria-hidden="true"
      />
      <div className="-translate-y-1/2 absolute left-0 right-0 top-[78px] flex flex-col justify-center text-center text-[32px] font-extrabold leading-[32px] text-white">
        <p className="leading-[32px]">Membership</p>
      </div>
    </div>
  )
}

function DesktopFeatures() {
  return (
    <div
      className="relative mx-auto hidden overflow-visible lg:block"
      style={{
        width: 'min(1888px, calc(100vw - 32px))',
        height: 'calc(1192px * min(1, calc((100vw - 32px) / 1888px)))',
        ['--feature-scale']: 'min(1, calc((100vw - 32px) / 1888px))',
      }}
    >
      <div
        className="absolute left-1/2 top-0 origin-top"
        style={{
          width: 1888,
          height: 1192,
          transform: 'translateX(-50%) scale(var(--feature-scale))',
        }}
      >
        <h2
          className="
            absolute left-[calc(50%+1px)] top-[76px] w-[1064px] -translate-x-1/2
            text-center text-[72px] font-semibold leading-[72px] tracking-[-2.16px] text-transparent
          "
          style={{
            backgroundImage:
              'linear-gradient(94.15339412407276deg, rgb(97, 102, 106) 1.91%, rgb(41, 44, 46) 43.92%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
          }}
        >
          Complete IR Learning Ecosystem
        </h2>

        <p className="absolute left-[calc(50%+0.5px)] top-[162.5px] w-[867px] -translate-x-1/2 text-center text-[20px] font-normal leading-[24px] text-[#71717a]">
          Everything needed to continuously learn, collaborate, and advance clinical expertise — all
          connected in one platform.
        </p>

        <div
          className="
            absolute left-[716px] top-[342.88px] h-[598.94px] w-[66px]
            overflow-clip rounded-br-[20px] rounded-tr-[20px]
            border border-b border-r border-solid border-[#d4d4d8] border-l-0 bg-[#fafafa]
          "
          aria-hidden="true"
        >
          <div className="absolute inset-0 animate-features-connector-shimmer bg-gradient-to-b from-transparent via-[rgba(91,75,219,0.14)] to-transparent" />
          <div className="absolute inset-[0_1px_1.5px_0] rounded-br-[20px] rounded-tr-[20px] bg-[#fafafa]" />
        </div>

        <div
          className="absolute left-[1106px] top-[342.87px] flex h-[598.94px] w-[66px] items-center justify-center"
          style={{ containerType: 'size' }}
          aria-hidden="true"
        >
          <div className="h-[100cqh] w-[100cqw] flex-none rotate-180">
            <div className="relative size-full overflow-clip rounded-br-[20px] rounded-tr-[20px] border border-b border-r border-solid border-[#d4d4d8] bg-[#fafafa]">
              <div className="absolute inset-[0_1px_1.51px_0] rounded-br-[20px] rounded-tr-[20px] bg-[#fafafa]" />
            </div>
          </div>
        </div>

        <div
          className="
            absolute left-[716px] top-[641.34px] h-[2px] w-[456px] border border-solid border-[#d4d4d8]
          "
          aria-hidden="true"
        >
          <div className="absolute left-0 top-1/2 h-[1.5px] w-[50px] -translate-y-1/2 bg-[#5b4bdb]" />
          <div className="absolute left-0 top-1/2 h-[1.5px] w-[50px] -translate-y-1/2 animate-features-divider-sweep bg-gradient-to-l from-[#5b4bdb] to-[rgba(91,75,219,0)]" />
          <div className="absolute left-[60px] top-1/2 size-[8px] -translate-y-1/2 rounded-full bg-[#d5d0d4]" />
          <div className="absolute right-[60px] top-1/2 size-[8px] -translate-y-1/2 rounded-full bg-[#d5d0d4]" />
        </div>

        <MembershipBadge />

        {featureCards.map((card) => (
          <FeatureCard key={card.title} {...card} />
        ))}
      </div>
    </div>
  )
}

function MobileFeatures() {
  return (
    <div className="mx-auto grid w-full max-w-[768px] grid-cols-1 gap-5 px-4 py-4 lg:hidden sm:grid-cols-2">
      <div className="col-span-full mb-2 flex justify-center">
        <div className="relative size-[160px] rounded-[32px] bg-gradient-to-b from-[#5b4bdb] to-[#5546cb] shadow-[0px_3.44px_2.785px_rgba(91,75,219,0.09),0px_22.91px_18.54px_rgba(91,75,219,0.17),0px_76px_61.5px_rgba(91,75,219,0.05),0px_5.05px_4.09px_rgba(91,75,219,0.1),0px_16.98px_13.735px_rgba(91,75,219,0.05),0px_56px_41.5px_rgba(91,75,219,0.25),0px_14px_17px_rgba(91,75,219,0.25),0px_1px_1px_rgba(91,75,219,0.4)]">
          <div
            className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.6)]"
            aria-hidden="true"
          />
          <div className="-translate-y-1/2 absolute left-0 right-0 top-[78px] flex flex-col justify-center text-center text-[32px] font-extrabold leading-[32px] text-white">
            <p className="leading-[32px]">Membership</p>
          </div>
        </div>
      </div>

      {featureCards.map((card) => (
        <article
          key={card.title}
          className="min-h-[268px] rounded-[32px] bg-[#f4f4f5] px-8 py-8 shadow-[0px_7.77px_8px_rgba(0,0,0,0.06),0px_3px_1.5px_rgba(0,0,0,0.1)]"
        >
          <CardIcon icon={card.icon} />

          <h3 className="mt-[44px] text-[24px] font-semibold leading-[32px] text-black">{card.title}</h3>

          <div className="mt-[10px] text-[16px] font-normal leading-[24px] text-[#71717a]">
            {card.lines.map((line) => (
              <p key={line} className="mb-0 leading-[24px]">
                {line}
              </p>
            ))}
          </div>
        </article>
      ))}
    </div>
  )
}

export default function Features() {
  return (
    <section
      id="section-features"
      className="relative overflow-visible px-4 pb-[clamp(64px,6vw,96px)] pt-0 text-[#252b42]"
      aria-label="Complete IR Learning Ecosystem"
    >
      <DesktopFeatures />
      <MobileFeatures />
    </section>
  )
}
