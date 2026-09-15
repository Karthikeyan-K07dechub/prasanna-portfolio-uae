"use client";

import { useLanguage } from "./LanguageProvider";
import { ArrowUpRight } from "lucide-react";
import { PrimaryButton } from "./ui/Button";
import { PortfolioSection } from "./ui/PortfolioSection";

const insights = [
  { category: "AI & Business", title: "Start with the business problem", description: "Anas’s perspective on applying AI to customer experience, operations, and business growth.", href: "https://www.linkedin.com/posts/prasanna-el-13a6b27a_ai-artificialintelligence-businessgrowth-activity-7491120641643978756-EYqf" },
  { category: "Customer Experience", title: "Make it easier to take action", description: "Why clearer messaging, faster responses, and a simpler buying journey matter to customers.", href: "https://www.linkedin.com/posts/prasanna-el-13a6b27a_customerexperience-businessgrowth-digitalmarketing-activity-7486053046905634816-KerX" },
  { category: "Digital Communication", title: "Clarity belongs in the design", description: "Helping website visitors understand the offer, find reasons to trust it, and know what to do next.", href: "https://www.linkedin.com/posts/prasanna-el-13a6b27a_webdesign-uiux-conversionrateoptimization-activity-7485318595212881920-eXov" },
];

export function ExperienceCards() {
  const { t } = useLanguage();
  return (
    <PortfolioSection id="insights" eyebrow={t("06 / Insights & perspectives")} title={<>{t("Thinking behind the")} <span className="font-playfair italic">{t("work.")}</span></>} description={t("Perspectives on AI, customer experience, and how businesses communicate, published by Anas on LinkedIn.")} tinted>
      <div className="grid gap-6 lg:grid-cols-3">
        {insights.map(item => (
          <article key={t(item.title)} className="flex h-full flex-col rounded-2xl border border-black/15 bg-surface p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-widest">{t(item.category)}</p>
            <h3 className="mt-6 text-2xl font-semibold leading-snug">{t(item.title)}</h3>
            <p className="mb-8 mt-4 flex-1 text-base leading-7">{t(item.description)}</p>
            <a href={item.href} target="_blank" rel="noopener noreferrer" aria-label={`${t("Read on LinkedIn")}: ${t(item.title)}`} className="inline-flex items-center gap-2 self-start border-b border-black pb-1 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-4">{t("Read on LinkedIn")} <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
          </article>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <PrimaryButton href="https://www.linkedin.com/in/prasanna-el-13a6b27a/recent-activity/all/" external>
          {t("See more posts")} </PrimaryButton>
      </div>
    </PortfolioSection>
  );
}

