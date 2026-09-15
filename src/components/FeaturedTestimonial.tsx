"use client";

import Image from "next/image";
import { useState } from "react";
import { Quote, Star } from "lucide-react";
import { images } from "@/lib/images";

const featured = [
  {
    quote: (
      <>
        &ldquo;When I first met Daniel, my soul responded. It&apos;s a rare thing to come across someone who is not only
        a true expert in his field but <span className="text-black">genuinely cares</span> about your growth.&rdquo;
      </>
    ),
    name: "Bernadette L.",
    role: "Mental Coach",
    image: images.testimonials.bernadette,
  },
  {
    quote: (
      <>
        &ldquo;Working with Danny has been a <span className="text-black">game-changer</span> for both me and my
        business. He&apos;s an incredibly smart individual who truly understands personal branding.&rdquo;
      </>
    ),
    name: "Priyanka C.",
    role: "CEO at LSCS | Co-Founder at Sinevis",
    image: images.testimonials.priyanka,
  },
  {
    quote: (
      <>
        &ldquo;When I first met Danny, I was uncertain about my direction and what I truly wanted to pursue. He
        challenged me and helped me <span className="text-black">find clarity</span>.&rdquo;
      </>
    ),
    name: "Dasha B.",
    role: "Founder of Bly Stories",
    image: images.testimonials.dasha,
  },
];

const cards = [
  {
    quote:
      '"Exceptional Mentor and AI Expert. I have had the privilege of being mentored by Daniel Paul in NAS Academy."',
    author: "Liana F., Educational Consultant",
  },
  {
    quote:
      '"I had the privilege to work with Daniel. He encouraged me to find my own voice and build authentic connections."',
    author: "Karthikeyan M., Senior Tech Product Manager",
  },
];

export function FeaturedTestimonial() {
  const [active, setActive] = useState(0);

  return (
    <section
      className="border-t border-black/50 px-4 py-24 md:px-[15px]"
      style={{
        background: "linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.2) 100%)",
      }}
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        <div>
          <Quote className="mb-6 h-6 w-6 text-black" />
          <div className="relative min-h-[440px] md:min-h-[450px]">
            {featured.map((item, index) => (
              <div
                key={item.name}
                className={`absolute inset-0 flex flex-col transition-opacity duration-500 ${
                  active === index ? "opacity-100 z-10" : "pointer-events-none opacity-0 z-0"
                }`}
              >
                <blockquote className="text-3xl font-medium leading-[48px] tracking-[-0.025em] md:text-5xl md:leading-[48px]">
                  {item.quote}
                </blockquote>
                <div className="mt-8 flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={60}
                    height={60}
                    className="h-14 w-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-lg font-medium">{item.name}</p>
                    <p className="text-base text-black leading-6">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex gap-2 relative z-50">
            {featured.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to testimonial ${index + 1}`}
                onClick={() => setActive(index)}
                className={`h-2 rounded-full transition-all ${
                  active === index ? "w-6 bg-red-ribbon" : "w-6 bg-brand/20"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="relative min-h-[368px]">
          {cards.map((card, index) => (
            <button
              key={card.author}
              type="button"
              onClick={() => setActive(index + 1)}
              className="absolute rounded-3xl border border-black/10 bg-transparent p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-black/50"
              style={{
                top: index * 196,
                left: index * 32,
                width: `calc(100% - ${index * 32}px)`,
                zIndex: active === index + 1 ? 30 : 20 - index,
                background: "linear-gradient(185deg, rgba(0,132,61, 0.1) 0%, rgba(0,132,61, 0) 100%)",
              }}
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-black text-black" />
                ))}
              </div>
              <p className="text-lg leading-7 text-black">{card.quote}</p>
              <p className="mt-4 text-sm font-medium text-black">{card.author}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
