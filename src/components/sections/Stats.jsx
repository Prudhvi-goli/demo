export default function Stats() {
  const stats = [
    { value: '5,000+', label: 'Clinical Cases' },
    { value: '250+', label: 'Hours of Learning' },
    { value: '120+', label: 'Experts' },
    { value: '40+', label: 'Countries' },
  ]

  return (
    <section className="mx-auto px-6 pt-[90px] pb-0 max-sm:px-2.5 max-sm:pt-10 max-sm:pb-0" aria-label="IR4U statistics">
      <div className="
        w-[min(1290px,calc(100vw-48px))] mx-auto
        grid grid-cols-4 gap-[30px]
        max-lg:grid-cols-2 max-lg:max-w-[630px]
        max-sm:grid-cols-1 max-sm:max-w-[300px]
      ">
        {stats.map(({ value, label }) => (
          <div
            key={label}
            className="
              w-full h-[160px] flex flex-col justify-center items-center text-center
              bg-[#f4f4f5] rounded-[40px] p-[40px]
              shadow-[inset_0_4px_0_rgba(255,255,255,0.6),0_3px_3px_rgba(0,0,0,0.1),0_7.77px_16px_rgba(0,0,0,0.06)]
              hover:bg-[#fafafb] hover:scale-[1.02]
              transition-all duration-300
              max-sm:h-[140px] max-sm:p-6 max-sm:rounded-[32px]
            "
          >
            <span className="text-[36px] font-bold leading-[48px] tracking-[-0.36px] text-[#5b4bdb] max-sm:text-[30px] max-sm:leading-[38px]">
              {value}
            </span>
            <span className="text-[24px] font-semibold leading-[28px] tracking-[-0.24px] text-[#5b4bdb] max-sm:text-[20px] max-sm:leading-[24px]">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
