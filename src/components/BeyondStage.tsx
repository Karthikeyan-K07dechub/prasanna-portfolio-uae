import Image from "next/image";
import { Layers, Workflow } from "lucide-react";
import { PrimaryButton } from "./ui/Button";
import { PortfolioSection } from "./ui/PortfolioSection";

export function BeyondStage() {
  return (
    <PortfolioSection id="beyond" eyebrow="03 / Building Dechub" title={<>One connected <span className="font-playfair italic">experience.</span></>} description="Bringing brand, design, technology, and execution together around the needs of a business.">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-5 text-base leading-8">
          <h3 className="text-2xl font-semibold">The belief behind Dechub</h3>
          <p>Prasanna founded Dechub around a clear idea: businesses benefit when their brand, digital experiences, and operational systems work together.</p>
          <p>That belief shapes the company’s work across identity, digital products, content, campaigns, and automation, with a focus on consistency, practicality, and sustainable growth.</p>
          <div className="pt-2"><PrimaryButton href="https://www.dechub.in/" external>Explore Dechub</PrimaryButton></div>
        </div>
        <div className="relative aspect-video overflow-hidden rounded-3xl border border-black/10">
          <Image src="/images/dechub/dechub-team.png" alt="Office collaboration visual for Dechub" fill sizes="(max-width: 1023px) 100vw, 540px" className="object-cover" />
        </div>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-black/15 bg-brand/5 p-6 sm:p-8">
          <Layers className="mb-5 h-7 w-7 text-black" aria-hidden="true" />
          <h3 className="text-xl font-semibold">Brand &amp; Digital Experiences</h3>
          <p className="mt-3 text-base leading-7">Brand identity, websites, digital products, content, and campaigns designed to create a consistent experience across customer touchpoints.</p>
        </article>
        <article className="rounded-2xl border border-black/15 bg-brand/5 p-6 sm:p-8">
          <Workflow className="mb-5 h-7 w-7 text-black" aria-hidden="true" />
          <h3 className="text-xl font-semibold">Technology &amp; Business Enablement</h3>
          <p className="mt-3 text-base leading-7">AI applications, connected workflows, and business systems, alongside a focus on matching business needs with relevant talent.</p>
        </article>
      </div>
      <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-black/15 pt-6">
        <span className="mr-2 text-sm font-semibold">Industry focus</span>
        {["Retail", "Real estate", "Healthcare", "Hospitality"].map(item => <span key={item} className="rounded-full border border-black/15 px-4 py-2 text-sm">{item}</span>)}
      </div>
    </PortfolioSection>
  );
}
