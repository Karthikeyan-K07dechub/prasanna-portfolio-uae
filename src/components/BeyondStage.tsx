"use client";

import { useLanguage } from "./LanguageProvider";
import Image from "next/image";
import { Layers, PenTool, Search, TrendingUp, Workflow } from "lucide-react";
import { PrimaryButton } from "./ui/Button";
import { PortfolioSection } from "./ui/PortfolioSection";

const steps = [
  { icon: Search, title: "Discover", description: "Understand the business, its audience, and the challenges before defining a clear direction." },
  { icon: PenTool, title: "Design", description: "Shape brand and digital experiences around real customer needs and business objectives." },
  { icon: Workflow, title: "Integrate", description: "Connect the tools, technology, and workflows that support consistent execution." },
  { icon: TrendingUp, title: "Grow", description: "Refine through campaigns, testing, reporting, and ongoing optimization." },
];

export function BeyondStage() {
  const { t } = useLanguage();
  return (
    <PortfolioSection id="beyond" eyebrow={t("02 / Building Dechub")} title={<>{t("One connected")} <span className="font-playfair italic">{t("experience.")}</span></>} description={t("Bringing brand, design, technology, and execution together around the needs of a business.")}>
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div data-reveal className="space-y-5 text-base leading-8">
          <h3 className="text-2xl font-semibold">{t("The belief behind Dechub")}</h3>
          <p>{t("Anas founded Dechub around a clear idea: businesses benefit when their brand, digital experiences, and operational systems work together.")}</p>
          <p>{t("That belief shapes the company’s work across identity, digital products, content, campaigns, and automation, with a focus on consistency, practicality, and sustainable growth.")}</p>
          <div className="flex justify-center pt-2 sm:justify-start"><PrimaryButton href="https://www.dechub.in/" external>{t("Explore Dechub")}</PrimaryButton></div>
        </div>
        <div data-reveal className="relative aspect-video overflow-hidden rounded-3xl border border-black/10">
          <Image src="/images/dechub-intro.png" alt={t("Dechub logo surrounded by brand, design, technology, and automation visuals")} fill sizes="(max-width: 1023px) 100vw, 540px" className="object-cover object-center" />
        </div>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-black/15 bg-surface p-6 sm:p-8">
          <Layers className="mb-5 h-7 w-7 text-black" aria-hidden="true" />
          <h3 className="text-xl font-semibold">{t("Brand & Digital Experiences")}</h3>
          <p className="mt-3 text-base leading-7">{t("Brand identity, websites, digital products, content, and campaigns designed to create a consistent experience across customer touchpoints.")}</p>
        </article>
        <article className="rounded-2xl border border-black/15 bg-surface p-6 sm:p-8">
          <Workflow className="mb-5 h-7 w-7 text-black" aria-hidden="true" />
          <h3 className="text-xl font-semibold">{t("Technology & Business Enablement")}</h3>
          <p className="mt-3 text-base leading-7">{t("AI applications, connected workflows, and business systems, alongside a focus on matching business needs with relevant talent.")}</p>
        </article>
      </div>
      <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-black/15 pt-6">
        <span className="me-2 rounded-full bg-brand/10 px-4 py-2 text-sm font-bold text-brand">{t("Industry focus")}</span>
        {["Retail", "Jewellery", "Automobile", "Real estate", "Healthcare", "Hospitality"].map(item => <span key={item} className="rounded-full border border-brand/20 bg-white px-4 py-2 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 hover:border-brand/45 hover:bg-brand/5 hover:text-brand">{t(item)}</span>)}
      </div>
      <div className="mt-8 border-t border-black/15 pt-6">
        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h3 className="text-2xl font-semibold text-section-title">{t("How Dechub works")}</h3>
          <p className="max-w-xl text-sm leading-6 text-black">{t("Dechub’s process connects strategic direction with design, implementation, and continuous improvement.")}</p>
        </div>
        <div className="relative grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:before:absolute lg:before:left-8 lg:before:right-8 lg:before:top-7 lg:before:h-px lg:before:bg-gradient-to-r lg:before:from-brand/0 lg:before:via-brand/35 lg:before:to-brand/0">
          {steps.map((step, i) => (
            <article key={t(step.title)} className="group relative rounded-2xl border border-black/15 bg-surface p-4 transition duration-300 hover:-translate-y-1 hover:border-brand/35 hover:shadow-[0_10px_24px_rgba(0,132,61,0.12)]">
              <div className="absolute inset-x-4 top-0 h-1 rounded-b-full bg-brand/0 transition-colors group-hover:bg-brand" aria-hidden="true" />
              <div className="relative flex items-center justify-between gap-3">
                <div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-full border border-brand/20 bg-brand/5 text-brand transition-colors group-hover:bg-brand group-hover:text-white"><step.icon className="h-4 w-4" aria-hidden="true" /></span><h4 className="text-base font-semibold">{t(step.title)}</h4></div>
                <span className="rounded-full bg-sand-light px-2 py-1 text-xs tabular-nums text-section-title">0{i + 1}</span>
              </div>
              <p className="mt-3 text-sm leading-6">{t(step.description)}</p>
            </article>
          ))}
        </div>
      </div>
    </PortfolioSection>
  );
}
