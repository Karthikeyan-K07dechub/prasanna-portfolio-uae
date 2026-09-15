"use client";

import { useLanguage } from "./LanguageProvider";
import { Search, PenTool, Workflow, TrendingUp } from "lucide-react";
import { PortfolioSection } from "./ui/PortfolioSection";

const steps = [
  { icon: Search, title: "Discover", description: "Understand the business, its audience, and the challenges before defining a clear direction." },
  { icon: PenTool, title: "Design", description: "Shape brand and digital experiences around real customer needs and business objectives." },
  { icon: Workflow, title: "Integrate", description: "Connect the tools, technology, and workflows that support consistent execution." },
  { icon: TrendingUp, title: "Grow", description: "Refine through campaigns, testing, reporting, and ongoing optimization." },
];

export function PostEvent() {
  const { t } = useLanguage();
  return (
    <PortfolioSection id="process" eyebrow={t("05 / How Dechub works")} title={<>{t("From understanding to")} <span className="font-playfair italic">{t("action.")}</span></>} description={t("Dechub’s process connects strategic direction with design, implementation, and continuous improvement.")}>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <article key={t(step.title)} className="h-full rounded-2xl border border-black/15 p-6">
            <div className="mb-8 flex items-center justify-between"><step.icon className="h-6 w-6 text-black" aria-hidden="true" /><span className="text-sm tabular-nums">0{i + 1}</span></div>
            <h3 className="text-xl font-semibold">{t(step.title)}</h3><p className="mt-3 text-base leading-7">{t(step.description)}</p>
          </article>
        ))}
      </div>
    </PortfolioSection>
  );
}
