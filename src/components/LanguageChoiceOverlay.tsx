"use client";

import { useEffect, useState } from "react";
import { useLanguage, type Locale } from "./LanguageProvider";

const storageKey = "anas-preferred-language";

export function LanguageChoiceOverlay() {
  const { locale } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved === "en" || saved === "ar") return;
      setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function chooseLanguage(nextLocale: Locale) {
    try {
      localStorage.setItem(storageKey, nextLocale);
    } catch {
      /* Preference storage is optional; navigation still works. */
    }

    if (nextLocale === locale) {
      setVisible(false);
      return;
    }

    window.location.assign(nextLocale === "ar" ? "/ar" : "/");
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-white/25 px-4 backdrop-blur-md">
      <div className="relative w-full max-w-sm overflow-hidden rounded-[1.6rem] border border-white/70 bg-surface/90 p-5 text-center shadow-[0_24px_80px_rgba(0,0,0,0.14)] ring-1 ring-black/5">
        <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-brand/45 to-transparent" aria-hidden="true" />
        <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-brand/25" aria-hidden="true" />
        <p className="text-sm font-bold text-section-title">Choose your preferred language</p>
        <p className="mt-1.5 text-xs text-black/55">You can change it anytime.</p>
        <div className="mt-5 grid grid-cols-2 gap-2.5">
          <button
            type="button"
            onClick={() => chooseLanguage("en")}
            className="rounded-2xl border border-white/25 bg-[linear-gradient(135deg,#36A569_0%,#00843D_48%,#00652F_100%)] px-4 py-3.5 text-sm font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-10px_24px_rgba(0,0,0,0.10)] transition duration-300 hover:-translate-y-0.5 hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          >
            English
          </button>
          <button
            type="button"
            dir="rtl"
            lang="ar"
            onClick={() => chooseLanguage("ar")}
            className="rounded-2xl border border-brand/25 bg-[linear-gradient(135deg,#FFFFFF_0%,#FDFCF8_55%,#F4EFE9_100%)] px-4 py-3.5 text-sm font-bold text-brand shadow-[inset_0_1px_0_rgba(255,255,255,0.95),inset_0_-10px_22px_rgba(0,132,61,0.035)] transition duration-300 hover:-translate-y-0.5 hover:border-brand/45 hover:bg-brand/5 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          >
            العربية
          </button>
        </div>
      </div>
    </div>
  );
}
