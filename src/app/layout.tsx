import type { Metadata } from "next";
import { Playfair_Display, Rethink_Sans } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  icons: {
    icon: "/images/logo.png",
  },
  title: "Prasanna EL — Founder of Dechub",
  description:
    "Prasanna EL, founder of Dechub. Connecting design, brand strategy, marketing, and technology to help businesses grow across India and the UAE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rethinkSans.variable} ${playfairDisplay.variable}`}>
      <body>{children}</body>
    </html>
  );
}
