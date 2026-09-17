"use client";

import { createContext, useContext } from "react";
import arabic from "@/lib/ar.json";

export type Locale = "en" | "ar";
export const languagePreferenceKey = "anas-preferred-language";
const LanguageContext = createContext<Locale>("en");
const translations: Record<string, string> = arabic;

export function LanguageProvider({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return <LanguageContext.Provider value={locale}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const locale = useContext(LanguageContext);
  return { locale, t: (text: string) => locale === "ar" ? translations[text] ?? text : text };
}

export function LanguageSwitch() {
  const { locale } = useLanguage();
  const target = locale === "en" ? "ar" : "en";
  return (
    <a href={target === "ar" ? "/ar" : "/"} lang={target} hrefLang={target} dir={target === "ar" ? "rtl" : "ltr"}
      aria-label={target === "ar" ? "عرض الموقع باللغة العربية" : "View website in English"}
      onClick={(event) => {
        if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        try { localStorage.setItem(languagePreferenceKey, target); } catch { /* Preference storage is optional. */ }
        const sections = [...document.querySelectorAll<HTMLElement>("main > section")];
        const currentSection = sections.find(section => {
          const bounds = section.getBoundingClientRect();
          return bounds.top <= window.innerHeight / 2 && bounds.bottom > window.innerHeight / 2;
        });
        const hash = currentSection ? `#${currentSection.id}` : window.location.hash;
        window.location.assign((target === "ar" ? "/ar" : "/") + hash);
      }}
      className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-xl border border-brand/25 px-3 text-sm font-semibold text-brand hover:bg-brand/5 focus-visible:outline-2 focus-visible:outline-offset-4">
      {target === "ar" ? "العربية" : "English"}
    </a>
  );
}
