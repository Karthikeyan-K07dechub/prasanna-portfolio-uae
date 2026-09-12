import Image from "next/image";
import { PortfolioSection } from "./ui/PortfolioSection";

export function About() {
  return (
    <PortfolioSection id="about" eyebrow="01 / Meet the founder" title={<>A multidisciplinary <span className="font-playfair italic">perspective.</span></>}>
      <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div data-reveal className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-3xl border border-black/10">
          <Image src="/images/dechub/founder.png" alt="Portrait of Prasanna EL, founder of Dechub" fill sizes="(max-width: 1023px) 90vw, 440px" className="object-cover object-top" />
        </div>
        <div data-reveal className="space-y-6 text-base leading-8 text-black sm:text-lg">
          <h3 className="text-2xl font-semibold leading-snug sm:text-3xl">Design roots. Business thinking. Founder leadership.</h3>
          <p>Prasanna EL is the founder of Dechub. His background brings together design, brand execution, marketing, and business strategy.</p>
          <p>With over a decade of experience at Titan Company Limited, where he held senior and lead design roles, he brings a practical understanding of how brands communicate and connect with customers.</p>
          <p>Today, he leads Dechub with a belief that strategy, design, technology, and execution work best together. His perspective considers how an experience looks, functions, and evolves with the business.</p>
          <div className="grid gap-5 border-t border-black/15 pt-6 sm:grid-cols-2">
            <div><p className="text-xs font-semibold uppercase tracking-widest">Professional focus</p><p className="mt-2 text-base leading-7">India, UAE &amp; USA</p></div>
            <div><p className="text-xs font-semibold uppercase tracking-widest">International experience</p><p className="mt-2 text-base leading-7">US, Gulf &amp; Asian markets</p></div>
          </div>
        </div>
      </div>
    </PortfolioSection>
  );
}
