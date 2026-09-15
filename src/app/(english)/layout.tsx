import { DocumentLayout, englishMetadata } from "@/components/DocumentLayout";
export const metadata = { ...englishMetadata, alternates: { languages: { en: "/", ar: "/ar", "x-default": "/" } } };
export default function Layout({ children }: { children: React.ReactNode }) { return <DocumentLayout locale="en">{children}</DocumentLayout>; }
