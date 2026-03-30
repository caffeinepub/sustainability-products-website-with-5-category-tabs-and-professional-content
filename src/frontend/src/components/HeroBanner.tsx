export function HeroBanner() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Full-bleed hero image */}
      <div className="relative h-[380px] md:h-[500px] lg:h-[600px]">
        <img
          src="/assets/generated/hero-banner.dim_1600x700.png"
          alt="Sustainable solutions for a better tomorrow"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Dark gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-2xl">
              <span className="inline-block mb-4 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-white/90 text-xs font-semibold tracking-widest uppercase">
                Environmental Technology
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight drop-shadow-md">
                Sustainable Solutions for a Better Tomorrow
              </h1>
              <p className="text-base md:text-lg text-white/85 leading-relaxed max-w-xl drop-shadow-sm">
                Innovative environmental technologies for waste management,
                water treatment, renewable energy, and green construction —
                engineered for impact.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  ISO 14001 Certified
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                  25+ Years Experience
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                  Global Operations
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
