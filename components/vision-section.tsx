export function VisionSection() {
  return (
    <section className="relative bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white rounded-full transform -translate-y-1/2"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 border border-white rounded-full"></div>
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        <div className="mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-white opacity-60"></div>
            <span className="text-white/80 font-medium text-sm uppercase tracking-widest">Philosophy</span>
            <div className="w-12 h-0.5 bg-white opacity-60"></div>
          </div>
          <h3 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">Vision & Purpose</h3>
          <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          <div className="absolute -top-6 -left-4 text-6xl text-white/20 font-serif">"</div>
          <div className="absolute -bottom-6 -right-4 text-6xl text-white/20 font-serif rotate-180">"</div>

          <blockquote className="relative text-white text-xl lg:text-3xl font-light leading-relaxed italic max-w-4xl mx-auto px-8">
            <span className="block mb-2">Jewellery is not just ornamentation—</span>
            <span className="block mb-2 text-yellow-200">
              it is emotion, identity, prestige, insurance, and legacy.
            </span>
            <span className="block">I aim to build jewellery that makes people feel</span>
            <span className="block font-medium text-yellow-100">secure, celebrated, and unforgettable.</span>
          </blockquote>
        </div>

        <div className="mt-12 flex items-center justify-center gap-4">
          <div className="w-16 h-0.5 bg-white/40"></div>
          <span className="text-white/80 font-medium tracking-wide">Akshay Bardia</span>
          <div className="w-16 h-0.5 bg-white/40"></div>
        </div>
      </div>
    </section>
  )
}
