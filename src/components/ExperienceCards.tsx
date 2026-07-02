import Image from "next/image";
import { Globe, Mic, Users } from "lucide-react";
import { images } from "@/lib/images";

const cards = [
  {
    title: "Keynote Sessions",
    subtitle: "Inspiring audiences",
    badge: "Speaking",
    icon: Mic,
    image: images.stage[0],
    crop: "object-[center_25%]",
    style: "left-[6%] top-[12%] z-10 w-[28%] rotate-[-2deg]",
  },
  {
    title: "Leadership Workshops",
    subtitle: "Hands-on learning",
    badge: "Workshop",
    icon: Users,
    image: images.stage[1],
    crop: "object-center",
    style: "left-1/2 top-[10%] z-30 w-[28%] -translate-x-1/2",
  },
  {
    title: "Global Events",
    subtitle: "10+ countries",
    badge: "International",
    icon: Globe,
    image: images.stage[2],
    crop: "object-[center_25%]",
    style: "right-[6%] top-[12%] z-10 w-[28%] rotate-[2deg]",
  },
];

export function ExperienceCards() {
  return (
    <section className="relative px-4 py-32 md:px-16">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-96 w-full bg-transparent" />
      </div>

      <div className="relative mx-auto space-y-16">
        <div className="text-center">
          <span className="text-sm font-medium text-red-ribbon">Experience</span>
          <h2 className="mt-2 text-5xl font-bold">See It in Action</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-oslo-gray">
            From intimate workshops to global stages, every event is designed to create lasting impact.
          </p>
        </div>

        <div className="relative mx-auto h-[600px]">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`absolute overflow-hidden rounded-2xl border border-white/10 bg-cod-gray/40 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.1)] animate-float ${card.style}`}
            >
              <div className="relative aspect-[4/5] min-h-[280px] w-full">
                <Image src={card.image} alt={card.title} fill className={`object-cover ${card.crop}`} sizes="400px" />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0) 100%)",
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4">
                  <div>
                    <p className="text-sm font-medium">{card.title}</p>
                    <p className="text-xs text-white/70">{card.subtitle}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-1 text-[10px] text-white/80 backdrop-blur-sm">
                    <card.icon className="h-3.5 w-3.5" />
                    {card.badge}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
