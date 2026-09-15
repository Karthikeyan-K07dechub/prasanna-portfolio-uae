import type { Metadata } from "next";
import { Noto_Sans_Arabic, Playfair_Display, Rethink_Sans } from "next/font/google";
import "@/app/globals.css";
import { LanguageProvider, type Locale } from "@/components/LanguageProvider";

const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  variable: "--font-rethink",
  weight: ["400", "500", "600", "700", "800"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["italic", "normal"],
  weight: ["400", "500", "700"],
});

const arabicFont = Noto_Sans_Arabic({ subsets: ["arabic"], variable: "--font-arabic", weight: ["400", "500", "600", "700"], display: "swap" });

export const englishMetadata: Metadata = {
  icons: {
    icon: "/images/logo.png",
  },
  title: "Anas — Founder of Dechub",
  description:
    "Anas, founder of Dechub. Connecting design, brand strategy, marketing, and technology to help businesses grow across India and the UAE.",
};

export function DocumentLayout({
  children, locale,
}: Readonly<{
  children: React.ReactNode; locale: Locale;
}>) {
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} className={`${rethinkSans.variable} ${playfairDisplay.variable} ${arabicFont.variable}`}>
      <body><LanguageProvider locale={locale}>{children}</LanguageProvider></body>
    </html>
  );
}
