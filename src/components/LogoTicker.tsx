import Image from "next/image";
import { images } from "@/lib/images";

const logos = [
  { src: images.logos.nasSummit, alt: "NAS Summit", width: 48, height: 48 },
  { src: images.logos.successResources, alt: "Success Resources", width: 160, height: 48 },
  { src: images.logos.nasDaily, alt: "Nas Daily", width: 140, height: 48 },
  { src: images.logos.intel, alt: "Intel", width: 80, height: 48 },
  { src: images.logos.deutscheWelle, alt: "Deutsche Welle", width: 120, height: 48 },
  { src: images.logos.propellus, alt: "Propellus", width: 100, height: 48 },
  { src: images.logos.lscs, alt: "London School of Cybersecurity", width: 80, height: 48 },
];

export function LogoTicker() {
  const items = [...logos, ...logos];

  return (
    <section className="relative overflow-hidden py-24">
      <p className="mb-2 text-center text-sm font-medium uppercase tracking-[0.05em] text-oslo-gray">
        Trusted by teams at
      </p>
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-cod-gray to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-cod-gray to-transparent" />
        <div className="flex overflow-hidden py-6">
          <div className="ticker-track flex shrink-0 items-center gap-16">
            {items.map((logo, i) => (
              <div key={`${logo.alt}-${i}`} className="flex h-12 shrink-0 items-center justify-center px-9">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="h-12 w-auto max-w-[160px] object-contain opacity-70 grayscale transition-opacity hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
