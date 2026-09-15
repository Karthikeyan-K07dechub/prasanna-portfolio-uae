import { DocumentLayout } from "@/components/DocumentLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "أنس — مؤسس Dechub",
  description: "أنس، مؤسس Dechub. يجمع بين التصميم واستراتيجية العلامة التجارية والتسويق والتقنية لمساعدة الأعمال على النمو في الهند والإمارات.",
  icons: { icon: "/images/logo.png" },
  alternates: { languages: { en: "/", ar: "/ar", "x-default": "/" } },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <DocumentLayout locale="ar">{children}</DocumentLayout>;
}
