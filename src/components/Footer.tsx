"use client";

import { useLanguage } from "./LanguageProvider";
import Image from "next/image";
import Link from "next/link";
import { Globe, Instagram, Linkedin, Youtube } from "lucide-react";
import { images } from "@/lib/images";

const pages = [
  { label: "About", href: "#about" }, { label: "Expertise", href: "#expertise" },
  { label: "Dechub", href: "#beyond" }, { label: "Selected Work", href: "#work" },
  { label: "Insights", href: "#insights" }, { label: "Contact", href: "#contact" },
];
const social = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/prasanna-el-13a6b27a/", icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/prasanna_el/", icon: Instagram },
  { label: "YouTube", href: "https://www.youtube.com/@PrasannaEL", icon: Youtube },
  { label: "Dechub", href: "https://www.dechub.in/", icon: Globe },
];

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-black/15 bg-surface py-8 text-black sm:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.25fr_1.15fr_0.7fr_0.7fr]">
          <div>
            <Link href="#hero" className="inline-flex items-center gap-3">
              <Image src={images.avatar} alt={t("Anas logo")} width={32} height={32} className="h-8 w-8 shrink-0 rounded-full object-cover" />
              <span className="font-playfair text-xl font-semibold italic text-section-title">{t("Anas")}</span>
            </Link>
            <p className="mt-4 max-w-sm text-base leading-7">{t("Founder of Dechub. Bringing design, marketing, and technology together to help brands grow.")}</p>
            <a dir="ltr" href="tel:+919940379614" className="mt-4 block text-sm transition-colors hover:text-section-title">+91 99403 79614</a>
            <a dir="ltr" href="mailto:prasanna@dechub.in" className="mt-4 inline-block text-sm underline underline-offset-4 transition-colors hover:text-section-title">prasanna@dechub.in</a>
          </div>
          <div>
            <h2 className="text-base font-semibold text-section-title">{t("Address")}</h2>
            <div className="mt-4 space-y-4 text-sm leading-6">
              <p>{t("Al Mamourah Street, Al Nakheel, Ras Al Khaimah, United Arab Emirates")} <Image src="/images/UAE.png" alt="" width={24} height={16} className="ms-1 inline-block h-4 w-6 rounded-sm object-cover align-[-0.15em]" aria-hidden="true" /></p>
              <p>{t("3rd Phase, J.P Nagar, Bangalore, 560078, India")} <Image src="/images/INDIA.png" alt="" width={24} height={16} className="ms-1 inline-block h-4 w-6 rounded-sm object-cover align-[-0.15em]" aria-hidden="true" /></p>
            </div>
            <h2 className="mt-6 text-base font-semibold text-section-title">{t("Office Hours")}</h2>
            <p className="mt-4 text-sm leading-6">{t("Monday to Saturday:")}<br />{t("9:00 AM – 6:30 PM")}</p>
          </div>
          <div><h2 className="text-base font-semibold text-section-title">{t("Explore")}</h2><ul className="mt-4 space-y-3">{pages.map(item => <li key={item.href}><Link href={item.href} className="text-sm transition-colors hover:text-section-title hover:underline">{t(item.label)}</Link></li>)}</ul></div>
          <div><h2 className="text-base font-semibold text-section-title">{t("Connect")}</h2><ul className="mt-4 space-y-3">{social.map(item => <li key={t(item.label)}><a href={item.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm transition-colors hover:text-section-title hover:underline"><item.icon className="h-4 w-4 text-section-title" aria-hidden="true" />{t(item.label)}</a></li>)}</ul></div>
        </div>
        <p className="mt-10 border-t border-black/15 pt-6 text-sm">© {new Date().getFullYear()} {t("Anas")}</p>
      </div>
    </footer>
  );
}
