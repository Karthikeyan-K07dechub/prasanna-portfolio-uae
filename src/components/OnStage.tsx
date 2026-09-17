"use client";

import { useLanguage } from "./LanguageProvider";
import Image from "next/image";
import { PrimaryButton } from "./ui/Button";
import { PortfolioSection } from "./ui/PortfolioSection";

const projects = [
  {
    image: "/images/projects/tanishqcase.png?v=quality",
    title: "Tanishq Store Discovery",
    category: "Dechub project / Digital experience",
    description: "Helping customers find a boutique is part of the shopping experience. Dechub’s store-locator case study brings together interface design, web development, and location discovery.",
    note: "Dechub reports coverage of 400+ boutiques across India.",
    alt: "Tanishq store discovery interface showing city selection and nearby boutiques",
    imageClass: "object-contain",
    imageFrameClass: "aspect-[1823/863]",
  },
  {
    image: "/images/projects/content-creation.png",
    title: "MIA by Tanishq Digital Visibility",
    category: "AI-powered search visibility",
    description: "A digital-first growth case focused on strengthening search presence, local discoverability, customer engagement, and store visits for MIA by Tanishq.",
    alt: "MIA by Tanishq digital visibility case study",
    note: "Focused on search presence, local discovery, customer engagement, and store visits.",
    imageClass: "object-cover",
    imageFrameClass: "aspect-video",
  },
  {
    image: "/images/projects/branding.png",
    title: "Titan Brand Visual",
    category: "Brand communication",
    description: "A product-focused Titan watch visual, highlighting the craftsmanship, detail, and visual identity at the heart of brand presentation.",
    alt: "Titan watch close-up with black dial and rose-gold details",
    note: "Built around craftsmanship, detail, and product storytelling.",
    imageClass: "object-cover",
    imageFrameClass: "aspect-video",
  },
];

export function OnStage() {
  const { t } = useLanguage();
  return (
    <PortfolioSection id="work" eyebrow={t("05 / Selected work")} title={<>{t("Ideas brought to")} <span className="font-playfair italic">{t("life.")}</span></>} description={t("A selection of brand and digital work, including projects from Dechub and examples from Anas’s professional portfolio.")} tinted>
      <div className="grid gap-6">
        {projects.map((project) => (
          <article key={t(project.title)} tabIndex={0} className="group relative isolate overflow-hidden rounded-3xl border border-black/15 bg-surface transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1 hover:border-brand/35 hover:shadow-[0_24px_55px_rgba(0,132,61,0.16)] focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand">
            <div className="relative z-10 grid lg:grid-cols-[1.2fr_1fr]">
              <div className="bg-surface p-4 sm:p-6">
                <div className={`relative overflow-hidden rounded-2xl bg-sand-light ${project.imageFrameClass}`}>
                  <Image src={project.image} alt={t(project.alt)} fill sizes="(max-width: 1023px) 100vw, 620px" className={`${project.imageClass} transition duration-700 ease-out group-hover:scale-[1.045] group-hover:brightness-[0.82] group-focus:scale-[1.045] group-focus:brightness-[0.82]`} />
                </div>
              </div>
              <div className="flex min-h-60 flex-col justify-center p-6 pb-24 sm:p-8 sm:pb-24 lg:p-10 lg:pb-24">
                <p className="text-xs font-semibold uppercase tracking-widest">{t(project.category)}</p>
                <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">{t(project.title)}</h3>
                <p className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-sand-light px-4 py-2 text-sm font-semibold text-section-title transition duration-300 group-hover:border-brand/35 group-hover:bg-white group-focus:border-brand/35 group-focus:bg-white">{t("Hover to view project")} <span aria-hidden="true">↑</span></p>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 z-20 rounded-t-3xl border-t border-black/10 bg-[#F5F5F5] p-5 shadow-[0_-24px_60px_rgba(0,0,0,0.12)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform [transform:translate3d(0,calc(100%-5.75rem),0)] group-hover:[transform:translate3d(0,0,0)] group-focus:[transform:translate3d(0,0,0)] sm:p-6">
              <div className="flex h-12 items-center justify-between gap-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-sand-light px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-section-title shadow-sm">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-brand/10" aria-hidden="true">
                    <span className="h-2.5 w-2.5 rounded-sm border border-brand" />
                  </span>
                  {t("Project")}
                </div>
                <div className="h-1 w-14 rounded-full bg-black/15 transition-colors duration-500 group-hover:bg-brand group-focus:bg-brand" aria-hidden="true" />
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-white shadow-[0_10px_24px_rgba(0,132,61,0.22)] transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-45 group-focus:-translate-y-1 group-focus:rotate-45" aria-hidden="true">↑</span>
              </div>
              <div className="mt-5 border-t border-black/10 pt-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-section-title">{t(project.category)}</p>
                <h4 className="mt-2 text-xl font-semibold sm:text-2xl">{t(project.title)}</h4>
                <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_0.7fr]">
                  <p className="text-base leading-7 text-black">{t(project.description)}</p>
                  <div className="rounded-2xl border border-black/10 bg-sand-light p-4 text-sm leading-6 text-black">
                    {project.note ? t(project.note) : t("Designed to turn brand visibility into clearer customer action.")}
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <PrimaryButton href="https://www.dechub.in/" external>
          {t("Explore More Works")} </PrimaryButton>
      </div>
    </PortfolioSection>
  );
}

