export default function AboutUs() {
  return (
    <section className="w-full max-w-[1296px] mx-auto px-6 xl:px-0 pt-[141px] pb-20 max-sm:px-4 max-sm:pt-10 max-sm:pb-12" aria-label="About IR4U">
      {/* Main Section Title */}
      <h2 className="relative z-0 text-[clamp(2.25rem,4.5vw,4rem)] lg:text-[64px] lg:leading-[72px] lg:tracking-[-2.16px] font-semibold text-[#252b42] mt-0 max-w-[800px] max-sm:text-[28px] max-sm:leading-[34px]">
        Why Leading IR Professionals Choose IR4U
      </h2>

      {/* Cards 2-Column Grid */}
      <div className="grid grid-cols-[1.42fr_1fr] gap-6 items-start lg:-mt-[32px] mt-6 relative z-10 max-lg:grid-cols-1 max-lg:max-w-[600px] max-lg:mx-auto">
        
        {/* Left Dark Slate Card (Learn From Global Experts) */}
        <div className="
          w-full lg:h-[661px] rounded-[40px] bg-[#252b42] overflow-hidden relative 
          flex flex-col pt-[80px] px-10 pb-[320px] lg:pb-0 text-white shadow-[0_3px_3px_rgba(0,0,0,0.1),0_7.77px_16px_rgba(0,0,0,0.06)]
          max-sm:min-h-[500px] max-sm:px-6 max-sm:pt-10 max-sm:rounded-[32px] max-sm:pb-[260px]
        ">
          <div className="flex flex-col items-center text-center max-w-[520px] mx-auto z-10 relative">
            <span className="
              h-[37px] px-[18px] border border-[#ecebeb] rounded-full inline-flex items-center gap-[10px] bg-white/5 backdrop-blur-sm
            ">
              <span className="w-[6px] h-[6px] rounded-full bg-[#5b4bdb]" />
              <span className="text-[16px] font-normal text-white leading-none">Global Expert Learning</span>
            </span>
            <h3 className="text-[32px] font-semibold leading-[40px] mt-6 tracking-tight max-sm:text-[24px] max-sm:leading-[30px] max-sm:mt-4">
              Learn From <span className="text-[#5b4bdb]">Global Experts</span>
            </h3>
            <p className="text-[18px] font-semibold text-white override leading-[28px] mt-[18px] max-w-[512px] max-sm:text-sm max-sm:leading-6 max-sm:mt-4">
              Gain access to world-class IR specialists, advanced procedural insights, and continuously updated educational content.
            </p>
          </div>
          
          {/* Earth Image at the bottom */}
          <img
            src="/icons/Earth.png"
            alt="Globe illustration representing global learning"
            className="absolute bottom-0 left-0 w-full h-[437px] max-lg:h-[320px] max-sm:h-[260px] object-contain object-bottom pointer-events-none select-none z-0"
          />
        </div>

        {/* Right Vertical Stack of 3 Cards */}
        <div className="flex flex-col gap-5">
          
          {/* Card 1: Solve Real Clinical Cases */}
          <div className="
            lg:h-[206px] flex flex-col justify-center lg:px-[50px] lg:py-[36px] px-6 py-8 rounded-[40px] bg-[#f4f4f5]
            shadow-[inset_0_4px_0_rgba(255,255,255,0.6),0_3px_3px_rgba(0,0,0,0.1),0_7.77px_16px_rgba(0,0,0,0.06)]
            hover:bg-[#fafafb] hover:scale-[1.01] transition-all duration-300
            max-lg:h-auto max-sm:px-6 max-sm:rounded-[32px]
          ">
            <h3 className="text-[24px] font-extrabold text-[#5b4bdb] leading-[28px] mb-2 max-sm:text-[20px] max-sm:leading-[24px]">
              Solve Real Clinical Cases
            </h3>
            <p className="text-[18px] text-[#09090b] leading-[28px] max-sm:text-sm max-sm:leading-6">
              Explore complex interventional radiology cases with diagnostic workflows and peer discussions
            </p>
          </div>

          {/* Card 2: Collaborate With Peers */}
          <div className="
            lg:h-[206px] flex flex-col justify-center lg:px-[50px] lg:py-[36px] px-6 py-8 rounded-[40px] bg-[#f4f4f5]
            shadow-[inset_0_4px_0_rgba(255,255,255,0.6),0_3px_3px_rgba(0,0,0,0.1),0_7.77px_16px_rgba(0,0,0,0.06)]
            hover:bg-[#fafafb] hover:scale-[1.01] transition-all duration-300
            max-lg:h-auto max-sm:px-6 max-sm:rounded-[32px]
          ">
            <h3 className="text-[24px] font-extrabold text-[#5b4bdb] leading-[28px] mb-2 max-sm:text-[20px] max-sm:leading-[24px]">
              Collaborate With Peers
            </h3>
            <p className="text-[18px] text-[#09090b] leading-[28px] max-sm:text-sm max-sm:leading-6">
              Participate in expert led conversations and clinical collaboration rooms.
            </p>
          </div>

          {/* Card 3: Advance Clinical Practice */}
          <div className="
            lg:h-[206px] flex flex-col justify-center lg:px-[50px] lg:py-[36px] px-6 py-8 rounded-[40px] bg-[#f4f4f5]
            shadow-[inset_0_4px_0_rgba(255,255,255,0.6),0_3px_3px_rgba(0,0,0,0.1),0_7.77px_16px_rgba(0,0,0,0.06)]
            hover:bg-[#fafafb] hover:scale-[1.01] transition-all duration-300
            max-lg:h-auto max-sm:px-6 max-sm:rounded-[32px]
          ">
            <h3 className="text-[24px] font-extrabold text-[#5b4bdb] leading-[28px] mb-2 max-sm:text-[20px] max-sm:leading-[24px]">
              Advance Clinical Practice
            </h3>
            <p className="text-[18px] text-[#09090b] leading-[28px] max-sm:text-sm max-sm:leading-6">
              Stay updated with modern techniques, innovations, and evolving IR procedures.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
