import Image from "next/image";
import { images } from "@/lib/images";

const platforms = ["Success Resources", "National Achievers Congress", "NAS Summit", "eToro"];
const countries = ["Netherlands", "Singapore", "Malaysia", "Cyprus", "Czech Republic", "UAE"];
const highlights = ["Multi-lingual Speaker", "Practical AI Frameworks", "Trusted by CEOs"];

const stats = [
  { value: "10+", label: "Countries" },
  { value: "50+", label: "Events" },
  { value: "100K+", label: "Attendees" },
];

export function About() {
  return (
    <section
      id="about"
      className="section-gradient"
      style={{
        background:
          "linear-gradient(158deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.1) 100%)",
      }}
    >
      <div className="spotlight-content space-y-16 py-16">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)] md:items-end">
          <div className="max-w-xl">
            <h2 className="text-5xl font-medium leading-[90px] tracking-[-0.05em] md:text-[88px] md:leading-[88px]">
              About <span className="font-playfair italic text-oslo-gray">Prasanna</span>
            </h2>
            <p className="mt-3 text-sm text-white/50">{"// BACKGROUND & PROOF"}</p>
          </div>
          <div className="flex flex-col items-start justify-end text-left md:items-end md:text-right">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-red-ribbon">02</span>
            <p className="mt-4 text-lg leading-8 text-white/70 max-w-md">
              Speaker alongside Robert Kiyosaki at National Achievers Congress.
            </p>
          </div>
        </div>

        <div
          className="grid gap-16 rounded-3xl p-8 lg:grid-cols-3"
          style={{
            background: "linear-gradient(167deg, rgba(13, 13, 13, 0.5) 0%, rgba(13, 13, 13, 0) 100%)",
          }}
        >
          <div className="relative overflow-hidden rounded-3xl lg:col-span-1">
            <div className="relative h-full min-h-[600px] w-full flex items-center justify-center">
              <div className="relative h-full w-[calc(100%+10px)]">
                <Image src={images.about} alt="Prasanna EL" fill className="object-cover object-center" sizes="400px" />
              </div>
            </div>
            <div className="absolute bottom-12 left-1/2 z-10 w-56 -translate-x-1/2 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-mountain-meadow" />
                <span className="text-xs font-medium text-white">Available for bookings</span>
              </div>
              <p className="mt-2 text-xs leading-4 text-oslo-gray">
                Based globally. Speaker kit on request.
              </p>
            </div>
          </div>

          <div className="space-y-6 lg:col-span-2">
            <h3 className="text-4xl font-medium leading-10 text-white">
              AI Expert. International Speaker. Founder of Dechub.
            </h3>
            <p className="text-lg leading-[29px] text-oslo-gray">
              Prasanna EL is an AI expert, international keynote speaker, and founder of Dechub, a LinkedIn-first
              platform helping founders turn clarity into consistent visibility and inbound demand.
            </p>
            <p className="text-lg leading-[29px] text-oslo-gray">
              His work focuses on practical AI systems for messaging, storytelling, and execution — not hype or theory.
              Prasanna teaches founders and leadership teams how to think with AI, communicate clearly, and execute
              consistently without sounding generic or burning out.
            </p>

            <div className="space-y-6 pt-4">
              <div>
                <p className="text-sm uppercase tracking-[0.1em] text-red-ribbon">Platforms</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {platforms.map((item) => (
                    <span key={item} className="rounded-lg bg-mine-shaft px-3 py-1.5 text-sm text-white">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.1em] text-whiskey">Countries</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {countries.map((item) => (
                    <span key={item} className="rounded-lg bg-mine-shaft px-3 py-1.5 text-sm text-white">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {highlights.map((item) => (
                  <span key={item} className="rounded-full border border-red-ribbon px-4 py-2 text-sm font-medium text-red-ribbon">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <span className="block text-4xl font-extrabold text-white">{stat.value}</span>
                  <span className="mt-1.5 block text-sm uppercase tracking-[0.05em] text-oslo-gray">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
