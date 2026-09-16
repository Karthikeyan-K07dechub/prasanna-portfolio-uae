"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "./LanguageProvider";

const timelineItems = [
  {
    year: "2011–2012",
    title: "Beginning in Design",
    description:
      "Started his professional career as a Designer at VENFIELD, building practical experience in design and brand presentation.",
    image: "/images/2011-2012.png",
    imageAlt: "Anas beginning his design career",
  },
  {
    year: "2012–2023",
    title: "Building Corporate Experience at Titan",
    description:
      "Spent over a decade at Titan Company Limited, holding Senior Designer and Lead Designer roles. His experience spanned design, visual merchandising, and brand execution, shaping his understanding of how brands connect with customers.",
    image: "/images/2012-2023.png",
    imageAlt: "Anas building corporate experience at Titan",
  },
  {
    year: "2021",
    title: "Founding Dechub",
    description:
      "Founded Dechub while continuing his corporate career, with a vision to bring brand, design, marketing, and technology together to address business challenges.",
    image: "/images/2021-new.png",
    imageAlt: "Dechub foundation year",
  },
  {
    year: "2022",
    title: "Expanding Our Creative Capabilities",
    description:
      "We strengthened our capabilities across brand identity, visual communication, e-commerce design and digital execution. During this period, we expanded our portfolio by working with prominent businesses, including brands from the Aditya Birla Group.",
    image: "/images/2024.png",
    imageAlt: "Dechub expanding its creative capabilities",
  },
  {
    year: "2023",
    title: "Growing into an Integrated Partner",
    description:
      "Our relationship with the Titan ecosystem grew further through projects for brands such as Tanishq and Mia by Tanishq. We also expanded beyond design into UI/UX, digital platforms, development and technology-enabled execution.",
    image: "/images/2023-new.png",
    imageAlt: "Dechub as an integrated partner",
  },
  {
    year: "2024",
    title: "Entering the US Market",
    description:
      "Dechub established its presence in the United States and began supporting American businesses across strategy, branding, technology and digital transformation, including companies operating in the infrastructure sector.",
    image: "/images/2024-usa.png",
    imageAlt: "Dechub entering the United States market",
  },
  {
    year: "2025",
    title: "Strengthening Our Ecosystem",
    description:
      "We brought our design, marketing and technology capabilities together into a more connected service ecosystem. Our growing multidisciplinary team enabled us to manage projects from strategy and creative development through to technology implementation and ongoing support.",
    image: "/images/2025-new1.png",
    imageAlt: "Dechub's connected service ecosystem",
  },
  {
    year: "Today",
    title: "Expanding with a Dubai Presence",
    description:
      "Today, Dechub is a 30+ member creative and technology company expanding across India, the United States and the UAE, with a new office presence in Dubai. We help businesses connect brand, design, marketing, software, CRM, automation and execution through one integrated partnership.",
    image: "/images/today-uae.png",
    imageAlt: "Dechub today",
  },
];

const metrics = [
  { value: "13+", label: "Years of design leadership" },
  { value: "10+", label: "Years at Titan" },
  { value: "3", label: "Markets of experience" },
  { value: "2021", label: "Founded Dechub" },
];

export function AboutJourney() {
  const { t } = useLanguage();
  const [activeYear, setActiveYear] = useState("2012–2023");
  const activeItem = timelineItems.find((item) => item.year === activeYear) ?? timelineItems[0];

  return (
    <section id="journey" data-motion-section className="scroll-mt-32 border-t border-black/10 bg-sand-light py-10 sm:py-12 lg:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div data-reveal className="mx-auto max-w-4xl text-center">
          <p className="mb-4 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-section-title">
            <span className="h-px w-8 bg-section-title" aria-hidden="true" />{t("02 / Anas journey")}
          </p>
          <h2 className="text-[clamp(2rem,7vw,2.25rem)] font-medium leading-tight tracking-tight text-section-title sm:text-5xl lg:text-6xl">
            {t("From design leadership to global growth.")}
          </h2>

          <div className="mt-7 inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-black/10 bg-surface p-2">
            {timelineItems.map((item) => {
              const isActive = item.year === activeYear;

              return (
                <button
                  key={item.year}
                  type="button"
                  onClick={() => setActiveYear(item.year)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors sm:px-5 ${
                    isActive ? "bg-brand text-white" : "text-black/60 hover:text-section-title"
                  }`}
                  aria-pressed={isActive}
                >
                  {t(item.year)}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mx-auto mt-10 sm:mt-12">
          <div className="grid grid-cols-1 items-center gap-8 rounded-3xl border border-black/15 bg-surface p-5 sm:p-8 lg:grid-cols-[minmax(260px,360px)_minmax(0,1fr)] lg:gap-12">
            <div key={`content-${activeItem.year}`} className="max-w-md transition-opacity">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-section-title">{t(activeItem.year)}</p>
              <h3 className="mt-3 text-[clamp(1.5rem,5vw,2.125rem)] font-medium leading-[1.1] tracking-tight text-section-title">
                {t(activeItem.title)}
              </h3>
              <p className="mt-5 text-base leading-8 text-black">{t(activeItem.description)}</p>
            </div>

            <div key={`image-${activeItem.year}`} className="relative aspect-video overflow-hidden rounded-3xl border border-black/10 bg-sand-light">
              <Image
                src={activeItem.image}
                alt={t(activeItem.imageAlt)}
                fill
                sizes="(max-width: 1023px) 100vw, 720px"
                className="object-cover transition-opacity"
              />
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:mt-10 md:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-black/15 bg-surface p-5 text-center">
                <p className="text-[clamp(2rem,7vw,3rem)] font-semibold leading-none tracking-tight text-section-title">{metric.value}</p>
                <p className="mt-2 text-sm leading-6 text-black">{t(metric.label)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
