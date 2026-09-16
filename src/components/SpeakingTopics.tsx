"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { PortfolioSection } from "./ui/PortfolioSection";

const areas = [
  {
    title: "Brand Strategy & Identity",
    tag: "Positioning · Communication",
    services: [
      { title: "Brand consulting", problem: "The brand lacks clear direction, making design and marketing decisions inconsistent.", solution: "We define a practical brand direction that guides identity, messaging, and execution." },
      { title: "Brand positioning", problem: "Customers do not clearly understand why the business is different or worth choosing.", solution: "We shape a clear market position that communicates the brand’s value and advantage." },
      { title: "Visual identity design", problem: "The brand looks inconsistent across touchpoints, reducing trust and recognition.", solution: "We create a cohesive visual system that makes the brand look professional and memorable." },
      { title: "Brand messaging", problem: "The business struggles to explain its offer in a simple and convincing way.", solution: "We craft clear messaging that helps customers understand, trust, and take action." },
    ],
  },
  {
    title: "Digital Experiences",
    tag: "Web · Customer journeys",
    services: [
      { title: "Website design", problem: "The website looks dated or does not present the brand with enough clarity and confidence.", solution: "We design polished website layouts with clear sections, strong visual hierarchy, and brand-aligned presentation." },
      { title: "UI/UX design", problem: "Users face confusion, too many steps, or unclear actions while using a website, app, or portal.", solution: "We simplify the experience with user journeys, wireframes, interface design, and interaction flows." },
      { title: "Web development", problem: "The design needs to become a fast, stable, responsive website that works well across devices.", solution: "We develop clean front-end and back-end builds with performance, CMS needs, integrations, and maintainability in mind." },
      { title: "Digital experience strategy", problem: "The website or platform lacks a clear journey, content flow, and conversion direction before design begins.", solution: "We define the experience structure, key pages, user paths, and action points so design and development start with clarity." },
    ],
  },
  {
    title: "AI & Automation",
    tag: "Technology · Operations",
    services: [
      { title: "AI integration", problem: "The business wants to use AI but does not know where it can create real value.", solution: "We identify practical AI use cases and integrate them into customer, content, or operational workflows." },
      { title: "Workflow automation", problem: "Teams spend time on repeated manual tasks that delay execution.", solution: "We automate routine workflows so teams can work faster with fewer errors." },
      { title: "CRM integration", problem: "Customer data and follow-ups are scattered across tools, messages, or spreadsheets.", solution: "We connect CRM systems to centralize customer information and improve follow-up consistency." },
      { title: "ERP integration", problem: "Business operations lack visibility because finance, inventory, sales, or process data is disconnected.", solution: "We integrate ERP workflows to improve coordination, reporting, and operational control." },
    ],
  },
  {
    title: "Marketing & Growth",
    tag: "Content · Performance",
    services: [
      { title: "Search engine optimization", problem: "The website does not attract enough relevant organic traffic.", solution: "We improve site structure, content, and search visibility so the right audience can find the business." },
      { title: "Performance marketing", problem: "Ad spend is not producing consistent leads, sales, or measurable returns.", solution: "We plan, run, and optimize campaigns focused on clear outcomes and better conversion." },
      { title: "Content strategy & copywriting", problem: "The brand posts content but lacks a clear message, structure, or conversion purpose.", solution: "We create content plans and copy that educate, build trust, and move customers toward action." },
      { title: "Digital campaign execution", problem: "Campaign ideas do not move smoothly from planning to design, launch, and tracking.", solution: "We manage campaign execution across creative, channels, tracking, and optimization." },
    ],
  },
];

export function SpeakingTopics() {
  const { t } = useLanguage();
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <PortfolioSection id="expertise" eyebrow={t("03 / Areas of focus")} title={<>{t("Where strategy meets")} <span className="font-playfair italic">{t("execution.")}</span></>} description={t("The disciplines that shape Anas’s approach and the work of the company he leads.")} tinted>
      <div className="divide-y divide-black/15 border-y border-black/15">
        {areas.map((area, index) => (
          <article key={t(area.title)} className="grid gap-4 py-7 text-center sm:py-8 sm:text-start lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
            <div className="flex items-start justify-center gap-4 sm:justify-start">
              <span className="pt-1 text-sm tabular-nums">{String(index + 1).padStart(2, "0")}</span>
              <div><h3 className="text-xl font-semibold sm:text-2xl">{t(area.title)}</h3><p className="mt-2 text-sm">{t(area.tag)}</p></div>
            </div>
            <div aria-label={`${t(area.title)} — ${t("services")}`} className="grid gap-3 text-start sm:grid-cols-2 lg:pt-1">
              {area.services.map((service) => {
                const isActive = activeService === service.title;

                return (
                  <button
                    key={service.title}
                    type="button"
                    aria-expanded={isActive}
                    onClick={() => setActiveService(isActive ? null : service.title)}
                    className="group rounded-2xl border border-black/15 bg-surface p-4 text-start transition duration-300 hover:-translate-y-1 hover:border-brand/35 hover:shadow-[0_10px_24px_rgba(0,132,61,0.12)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                  >
                    <span className="flex items-start justify-between gap-4">
                      <span className="font-semibold leading-6">{t(service.title)}</span>
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-brand/25 text-xs text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                        {isActive ? "−" : "+"}
                      </span>
                    </span>
                    <span className={`grid transition-all duration-300 ${isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus-visible:grid-rows-[1fr] group-focus-visible:opacity-100"}`}>
                      <span className="overflow-hidden">
                        <span className="mt-4 block border-t border-black/10 pt-4 text-sm leading-6">
                          <span className="font-semibold text-section-title">{t("Problem")}:</span> {t(service.problem)}
                        </span>
                        <span className="mt-2 block text-sm leading-6">
                          <span className="font-semibold text-brand">{t("Solution")}:</span> {t(service.solution)}
                        </span>
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </PortfolioSection>
  );
}
