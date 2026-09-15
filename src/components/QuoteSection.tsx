"use client";

import { useLanguage } from "./LanguageProvider";
import { PortfolioSection } from "./ui/PortfolioSection";

export function QuoteSection() {
  const { t } = useLanguage();
  return (
    <PortfolioSection id="philosophy" eyebrow={t("07 / Founder philosophy")} title={<>{t("Discipline. Clarity.")} <span className="font-playfair italic">{t("Continuous improvement.")}</span></>}>
      <div data-reveal className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <p className="text-lg leading-8">{t("Anas’s outlook is shaped by persistence, strategic thinking, and a commitment to improving over time. His black belt in Karate reflects the discipline he values beyond business and brings into his professional life.")}</p>
        <div className="border-s-2 border-black ps-6">
          <h3 className="text-xl font-semibold">{t("A practical mindset")}</h3>
          <p className="mt-3 text-base leading-7">{t("Understand the challenge, think deliberately, and keep refining the work. These values connect his personal journey with his approach to leading Dechub.")}</p>
        </div>
      </div>
    </PortfolioSection>
  );
}
