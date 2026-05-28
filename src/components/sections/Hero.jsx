export default function Hero() {
  return (
    <section className="relative isolate min-h-[1200px] overflow-visible p-[clamp(16px,2vw,24px)] max-md:min-h-[auto] max-md:overflow-hidden max-sm:p-2.5" aria-label="IR4U Home AI hero section">

      {/* ── Background Layers ── */}
      <div className="hero-bg-primary absolute inset-4 rounded-[28px] overflow-hidden shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35),0_30px_80px_rgba(25,31,56,0.08)] max-sm:inset-2.5 max-sm:rounded-[22px]" aria-hidden="true" />
      <div className="hero-bg-secondary absolute inset-4 rounded-[28px] overflow-hidden opacity-[0.28] blur-[1.5px] saturate-[0.95] contrast-[1.05] mix-blend-overlay pointer-events-none max-sm:inset-2.5 max-sm:rounded-[22px]" aria-hidden="true" />

      {/* ── Content ── */}
      <div className="
        relative z-[1]
        w-[min(1177px,calc(100vw-32px))] min-h-[1100px]
        mx-auto pt-40
        flex flex-col items-center text-center
        max-md:min-h-[auto] max-md:pt-[140px] max-md:pb-20
        max-sm:w-[calc(100vw-20px)] max-sm:pt-[120px]
      ">

        {/* Title */}
        <h1 className="
          m-0 max-w-[1177px]
          text-[clamp(2.75rem,5.2vw,4rem)] leading-[0.98]
          tracking-[-0.04em] font-semibold text-[#252b42]
          max-md:text-[clamp(2.3rem,8vw,3.5rem)]
          max-sm:text-[2rem] max-sm:leading-[1.05]
        ">
          Master Interventional Radiology Through One Integrated Learning Platform
        </h1>

        {/* Subtitle */}
        <p className="mt-6 w-[min(600px,100%)] text-base leading-relaxed text-[#252b42] opacity-[0.88] max-sm:text-[0.95rem]">
          Access expert-led cases, structured learning, live webinars, and collaborative clinical discussions
          &mdash; all within a single professional ecosystem built for modern IR education.
        </p>

        {/* ── Feature Panel ── */}
        <div className="
          relative mt-[52px] w-[min(756px,100%)] min-h-[421px]
          rounded-[34px] px-12 pt-[46px] pb-[38px]
          bg-[rgba(255,255,255,0.45)]
          border border-[rgba(255,255,255,0.45)]
          shadow-[0_22px_38px_rgba(44,51,74,0.08),inset_0_1px_0_rgba(255,255,255,0.5)]
          text-left backdrop-blur-[30px]
          max-md:px-6 max-md:pt-[34px] max-md:pb-7
          max-sm:min-h-[auto] max-sm:rounded-[26px] max-sm:px-5 max-sm:pt-7 max-sm:pb-6
        ">
          <div className="max-w-[492px]">
            {/* Eyebrow + Index */}
            <div className="flex justify-between items-start">
              <p className="m-0 text-[clamp(1.25rem,2.2vw,1.5rem)] leading-[1.4] tracking-[-0.04em] font-semibold text-[#252b42] max-sm:text-base">
                Featured Cases
              </p>
              <span className="text-lg leading-[1.55] text-[rgba(255,255,255,0.94)] mt-0.5">
                (01)
              </span>
            </div>

            {/* Panel Title */}
            <h2 className="
              mt-3.5
              text-[clamp(2.5rem,4.1vw,3rem)] leading-[1.08]
              tracking-[-0.04em] font-semibold text-[#252b42]
              max-sm:text-[2rem]
            ">
              Complex AVM Embolization
            </h2>

            {/* Description */}
            <p className="mt-7 max-w-[400px] text-base leading-relaxed text-[rgba(59,64,82,0.7)]">
              Collaborative procedural planning and intervention strategy review
            </p>

            {/* Chips */}
            <div className="flex flex-wrap gap-[12px_10px] mt-8" aria-label="Hero highlights">
              {['Interventional Planning', 'Expert Insights', 'Community Reviewed'].map((chip, i) => (
                <span
                  key={chip}
                  className={`
                    inline-flex items-center min-h-10 px-[18px]
                    rounded-full border border-[#4f43d8]
                    text-[#f4f5fb] text-base font-semibold leading-none
                    shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]
                    transition-all duration-200
                    hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_6px_16px_rgba(98,77,231,0.25)]
                    max-sm:min-h-9 max-sm:text-[0.95rem] max-sm:px-3.5
                    ${i < 2 ? 'bg-[#624de7]' : 'bg-[#5f54e8]'}
                  `}
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Badge */}
          <div
            className="
              badge-check absolute right-[35px] top-[266px]
              w-16 h-16 rounded-[10px] bg-white
              shadow-[0_11px_20px_rgba(47,54,74,0.16),inset_0_2px_0_rgba(255,255,255,0.7)]
              max-md:right-5 max-md:top-auto max-md:bottom-7
              max-sm:w-[52px] max-sm:h-[52px]
            "
            aria-hidden="true"
          />
        </div>

        {/* ── Dots ── */}
        <div className="flex gap-3 mt-[54px]" aria-hidden="true">
          {[true, false, false, false].map((active, i) => (
            <span
              key={i}
              className={`
                w-3 h-3 rounded-full cursor-pointer transition-colors duration-[250ms]
                ${active ? 'bg-[#6554e8]' : 'bg-[rgba(255,255,255,0.45)] hover:bg-[rgba(101,84,232,0.4)]'}
              `}
            />
          ))}
        </div>

        {/* ── Action Buttons ── */}
        <div className="flex gap-3 mt-8 flex-wrap justify-center max-sm:w-full">
          <a
            className="
              inline-flex items-center justify-center
              min-w-[178px] min-h-[52px] px-7
              rounded-full text-white text-base font-semibold leading-none
              bg-gradient-to-b from-[#6c59eb] to-[#5c4be5]
              shadow-[0_18px_28px_rgba(71,58,181,0.34),inset_0_2px_0_rgba(255,255,255,0.18)]
              transition-all duration-200
              hover:-translate-y-0.5 hover:shadow-[0_22px_34px_rgba(71,58,181,0.42),inset_0_2px_0_rgba(255,255,255,0.18)]
              max-sm:w-full max-sm:min-w-0
            "
            href="#join"
          >
            Join Now
          </a>
          <a
            className="
              inline-flex items-center justify-center
              min-w-[178px] min-h-[52px] px-7
              rounded-full text-[#11131a] text-base font-semibold leading-none
              bg-gradient-to-b from-white to-[#f1f2f5]
              shadow-[0_18px_26px_rgba(31,35,54,0.14),inset_0_2px_0_rgba(255,255,255,0.22)]
              transition-all duration-200
              hover:-translate-y-0.5 hover:shadow-[0_22px_32px_rgba(31,35,54,0.20),inset_0_2px_0_rgba(255,255,255,0.22)]
              max-sm:w-full max-sm:min-w-0
            "
            href="#explore"
          >
            Explore
          </a>
        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <div
        className="
          absolute bottom-4 left-1/2 -translate-x-1/2 z-[2]
          w-[320px] h-[56px]
          bg-[#edecec]
          rounded-t-[40px] rounded-b-0
          flex items-center justify-center gap-4
          max-md:relative max-md:bottom-auto max-md:left-auto max-md:translate-x-0 max-md:mt-10 max-md:mb-6 max-md:bg-transparent max-md:w-auto max-md:h-auto max-md:rounded-none
        "
        aria-label="Scroll for more"
      >
        <span className="text-base font-semibold leading-[24px] text-[#09090b] tracking-normal">
          Scroll for more
        </span>
        <span className="
          inline-flex items-center justify-center
          w-5 h-8 border border-[#d4d4d8]
          rounded-full bg-transparent
        ">
          <span className="text-[0.9rem] leading-none text-[#5b4bdb] font-bold animate-scroll-bounce">
            ↓
          </span>
        </span>
      </div>
    </section>
  )
}
