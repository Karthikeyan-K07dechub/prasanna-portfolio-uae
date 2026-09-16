"use client";

import { useLanguage } from "./LanguageProvider";
import Image from "next/image";
import { PrimaryButton } from "./ui/Button";
import { PortfolioSection } from "./ui/PortfolioSection";

export function OnStage() {
  const { t } = useLanguage();
  return (
    <PortfolioSection id="work" eyebrow={t("04 / Selected work")} title={<>{t("Ideas brought to")} <span className="font-playfair italic">{t("life.")}</span></>} description={t("A selection of brand and digital work, including projects from Dechub and examples from Anas’s professional portfolio.")} tinted>
      <article className="overflow-hidden rounded-3xl border border-black/15 bg-surface">
        <div className="grid lg:grid-cols-[1.2fr_1fr]">
          <div className="bg-surface p-4 sm:p-6">
            <div className="relative aspect-[1823/863] overflow-hidden rounded-2xl bg-sand-light">
              <Image src="/images/projects/tanishqcase.png?v=quality" alt={t("Tanishq store discovery interface showing city selection and nearby boutiques")} fill sizes="(max-width: 1023px) 100vw, 620px" className="object-contain" />
            </div>
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-widest">{t("Dechub project / Digital experience")}</p>
            <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">{t("Tanishq Store Discovery")}</h3>
            <p className="mt-4 text-base leading-7">{t("Helping customers find a boutique is part of the shopping experience. Dechub’s store-locator case study brings together interface design, web development, and location discovery.")}</p>
            <p className="mt-4 text-sm leading-6">{t("Dechub reports coverage of 400+ boutiques across India.")}</p>
          </div>
        </div>
      </article>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {[
          { image: "/images/projects/digital-marketing.png", title: "Fastrack Campaign", category: "Campaign creative", description: "Fastrack Smart campaign artwork featured in Anas’s LinkedIn Services portfolio, bringing product and brand expression into a bold visual story.", alt: "Fastrack Smart Follow Yourself campaign artwork" },
          { image: "/images/projects/branding.png", title: "Titan Brand Visual", category: "Brand communication", description: "A product-focused Titan watch visual, highlighting the craftsmanship, detail, and visual identity at the heart of brand presentation.", alt: "Titan watch close-up with black dial and rose-gold details" },
        ].map(project => (
          <article key={t(project.title)} className="overflow-hidden rounded-3xl border border-black/15 bg-surface">
            <div className="relative aspect-video"><Image src={project.image} alt={t(project.alt)} fill sizes="(max-width: 767px) 100vw, 540px" className="object-cover" /></div>
            <div className="p-6 sm:p-8"><p className="text-xs font-semibold uppercase tracking-widest">{t(project.category)}</p><h3 className="mt-3 text-2xl font-semibold">{t(project.title)}</h3><p className="mt-3 text-base leading-7">{t(project.description)}</p></div>
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
