"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { languagePreferenceKey, useLanguage, type Locale } from "./LanguageProvider";

export function LanguageChoiceOverlay() {
  const { locale } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;

    try {
      const saved = localStorage.getItem(languagePreferenceKey);
      if (saved === "en" || saved === "ar") return;
      timer = setTimeout(() => setVisible(true), 1000);
    } catch {
      timer = setTimeout(() => setVisible(true), 1000);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  function chooseLanguage(nextLocale: Locale) {
    try {
      localStorage.setItem(languagePreferenceKey, nextLocale);
    } catch {
      /* Preference storage is optional; navigation still works. */
    }

    if (nextLocale === locale) {
      setVisible(false);
      return;
    }

    window.location.assign(nextLocale === "ar" ? "/ar" : "/");
  }

  function chooseLater() {
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[100] flex h-48 items-center justify-center px-4 before:pointer-events-none before:absolute before:inset-0 before:bg-white/25 before:backdrop-blur-sm">
      <div dir="ltr" className="pointer-events-auto relative mx-auto w-full max-w-[22rem] overflow-hidden rounded-[1.35rem] border border-white/70 bg-surface/90 p-4 text-center shadow-[0_18px_55px_rgba(0,0,0,0.14)] ring-1 ring-black/5 backdrop-blur-md">
        <button
          type="button"
          onClick={chooseLater}
          aria-label="Close language prompt"
          className="absolute right-3 top-3 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border border-black/10 bg-white/60 p-0 text-black/45 transition-colors hover:bg-brand/5 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <X className="block h-3 w-3" strokeWidth={2} aria-hidden="true" />
        </button>
        <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-brand/45 to-transparent" aria-hidden="true" />
        <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-brand/25" aria-hidden="true" />
        <p className="text-xs font-bold text-section-title">Choose your preferred language</p>
        <p className="mt-1 text-[0.7rem] text-black/55">You can change it anytime.</p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => chooseLanguage("en")}
            className="cursor-pointer whitespace-nowrap rounded-xl border border-white/25 bg-[linear-gradient(135deg,#36A569_0%,#00843D_48%,#00652F_100%)] px-3 py-2.5 text-[0.7rem] font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-10px_24px_rgba(0,0,0,0.10)] transition duration-300 hover:-translate-y-0.5 hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand sm:text-xs"
          >
            Continue in English
          </button>
          <button
            type="button"
            dir="rtl"
            lang="ar"
            onClick={() => chooseLanguage("ar")}
            className="cursor-pointer whitespace-nowrap rounded-xl border border-brand/25 bg-[linear-gradient(135deg,#FFFFFF_0%,#FDFCF8_55%,#F4EFE9_100%)] px-3 py-2.5 text-[0.7rem] font-bold text-brand shadow-[inset_0_1px_0_rgba(255,255,255,0.95),inset_0_-10px_22px_rgba(0,132,61,0.035)] transition duration-300 hover:-translate-y-0.5 hover:border-brand/45 hover:bg-brand/5 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand sm:text-xs"
          >
            Switch to Arabic
          </button>
        </div>
      </div>
    </div>
  );
}

