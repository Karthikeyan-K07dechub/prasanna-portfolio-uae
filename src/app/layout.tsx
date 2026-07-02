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
  title: "Daniel Paul — AI Expert & International Speaker",
  description:
    "AI Expert & International Speaker. Helping founders use AI to sharpen their message and build authority.",
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
