"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

export function FloatingContactButton() {
  const { t } = useLanguage();

  return (
    <Link
      href="#contact"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full border border-white/40 bg-brand px-4 py-2.5 text-xs font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand sm:bottom-8 sm:right-8"
      aria-label={t("Get in Touch")}
    >
      <span>{t("Get in Touch")}</span>
      <span className="grid h-7 w-7 place-items-center rounded-full bg-white/16">
        <ArrowRight className="h-3.5 w-3.5 directional-arrow" />
      </span>
    </Link>
  );
}
