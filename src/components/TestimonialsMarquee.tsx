import Image from "next/image";
import { Linkedin } from "lucide-react";
import { images } from "@/lib/images";

const row1 = [
  {
    name: "Bernadette L.",
    role: "Mental Coach",
    image: images.testimonials.bernadette,
    quote:
      "When I first met Prasanna, my soul responded. It's a rare thing to come across someone who is not only a true expert in his field but genuinely cares about your growth.",
  },
  {
    name: "Liana F.",
    role: "Educational Consultant",
    image: images.testimonials.liana,
    quote:
      "Exceptional Mentor and AI Expert. I have had the privilege of being mentored by Prasanna EL in NAS Academy, where he transformed how I think about content and AI.",
  },
  {
    name: "Marius G.",
    role: "Founder of Cruise Smart Travel",
    image: images.testimonials.marius,
    quote:
      "Let me tell you a story about how I ended up working with Prasanna! I met Prasanna for the first time at GBI. He was on stage, and his energy was magnetic.",
  },
  {
    name: "Karthikeyan M.",
    role: "Senior Tech Product Manager",
    image: images.testimonials.karthikeyan,
    quote:
      "I had the privilege to work with Prasanna. He didn't just help me write on LinkedIn, he encouraged me to find my own voice and build authentic connections.",
  },
];

const row2 = [
  {
    name: "Dr. Subra M.",
    role: "Mind Mapping Coach",
    image: images.testimonials.subra,
    quote:
      "A Heartfelt Gratitude to Coach Prasanna EL! I had the privilege of being mentored by Prasanna EL over the past few months. His guidance has been transformational.",
  },
  {
    name: "Dasha B.",
    role: "Founder of Bly Stories",
    image: images.testimonials.dasha,
    quote:
      "When I first met Danny, I was uncertain about my direction and what I truly wanted to pursue. He challenged me and helped me find clarity.",
  },
  {
    name: "Priyanka C.",
    role: "CEO at LSCS | Co-Founder at Sinevis",
    image: images.testimonials.priyanka,
    quote:
      "Working with Danny has been a game-changer for both me and my business. He's an incredibly smart individual who truly understands personal branding.",
  },
  {
    name: "Luis DLH.",
    role: "SVP and New Jersey Market Manager",
    image: images.testimonials.luis,
    quote:
      "If you're serious about building a powerful personal brand and scaling your business, Prasanna EL is the coach you need. Absolutely transformative.",
  },
];

function TestimonialCard({
  name,
  role,
  image,
  quote,
}: {
  name: string;
  role: string;
  image: string;
  quote: string;
}) {
  return (
    <article className="w-[420px] shrink-0 h-56">
      <div className="glass-card p-6 h-full flex flex-col justify-between">
        <div className="flex items-center gap-3">
          <Image src={image} alt={name} width={36} height={36} className="h-9 w-9 rounded-full object-cover" />
          <div>
            <div className="flex items-center gap-1">
              <span className="text-sm font-medium">{name}</span>
              <Linkedin className="h-3.5 w-3.5 text-oslo-gray" />
            </div>
            <p className="text-xs text-oslo-gray">{role}</p>
          </div>
        </div>
        <p className="mt-4 text-base leading-6 text-oslo-gray grow">{quote}</p>
      </div>
    </article>
  );
}

function MarqueeRow({
  items,
  reverse,
}: {
  items: Array<{ name: string; role: string; image: string; quote: string }>;
  reverse?: boolean;
}) {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-4 px-8">
      <div className="marquee-row flex w-max gap-x-8" style={{ animationDirection: reverse ? "reverse" : "normal" }}>
        {doubled.map((item, index) => (
          <TestimonialCard key={`${item.name}-${index}`} {...item} />
        ))}
      </div>
    </div>
  );
}

export function TestimonialsMarquee() {
  return (
    <section className="px-4 py-24 md:px-8">
      <div className="mb-8 flex items-end justify-between px-4">
        <div>
          <p className="text-sm text-oslo-gray">What people say</p>
          <h2 className="text-4xl font-semibold tracking-[-0.025em]">Testimonials</h2>
        </div>
        <p className="hidden text-sm text-oslo-gray md:block">Real feedback from clients</p>
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-mine-shaft-2 bg-cod-gray/50">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-40 bg-gradient-to-r from-cod-gray to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-40 bg-gradient-to-l from-cod-gray to-transparent" />
        <div className="divide-y divide-mine-shaft/80 py-8">
          <MarqueeRow items={row1} reverse />
          <MarqueeRow items={row2} />
        </div>
      </div>
    </section>
  );
}
