const flags = ["🇳🇱", "🇸🇬", "🇲🇾", "🇨🇾", "🇨🇿", "🇫🇮", "🇦🇪", "🇮🇳"];

const stats = ["10+ Countries", "50+ Events", "100,000+ Attendees", "Multilingual"];

export function GlobalReach() {
  return (
    <section
      className="px-4 py-16 md:px-16"
      style={{
        background:
          "linear-gradient(175deg, rgba(115,26,202, 0.1) 0%, rgba(115,26,202, 0) 50%, rgba(115,26,202, 0.1) 100%)",
        boxShadow: "inset 0 0 0 1px rgba(115,26,202, 0.05)",
      }}
    >
      <div className="spotlight-content grid items-center gap-10 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium uppercase tracking-[0.1em] text-black">03</span>
            <span className="text-sm font-medium text-black">Global Reach</span>
          </div>
          <h2 className="text-5xl font-medium leading-[96px] tracking-[-0.05em] md:text-6xl md:leading-[96px] whitespace-nowrap">
            Speaking <span className="font-playfair italic text-black">Worldwide</span>
          </h2>
          <p className="pb-4 text-lg leading-7 text-black">
            From Singapore to Scandinavia, delivering AI keynotes at major conferences and corporate events across the
            globe.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat} className="inline-flex items-center gap-2 rounded-lg border border-black/10 bg-brand/5 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-red-ribbon/50" />
                <span className="text-sm font-medium text-black">{stat}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto flex h-[416px] w-[416px] items-center justify-center">
          <div className="absolute -inset-8 rounded-full bg-red-ribbon/10 blur-[32px]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative h-full w-full rotate-clockwise">
              {flags.map((flag, index) => {
                const angle = (index / flags.length) * 2 * Math.PI - Math.PI / 2;
                const radius = 150;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <div
                    key={flag}
                    className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2"
                    style={{ transform: `translate(${x}px, ${y}px)` }}
                  >
                    <div className="rotate-counter flex h-full w-full items-center justify-center rounded-full border-2 border-black/50 bg-[#ffffff] text-3xl shadow-lg">
                      {flag}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
