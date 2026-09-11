import { PortfolioSection } from "./ui/PortfolioSection";

export function QuoteSection() {
  return (
    <PortfolioSection id="philosophy" eyebrow="07 / Founder philosophy" title={<>Discipline. Clarity. <span className="font-playfair italic">Continuous improvement.</span></>}>
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <p className="text-lg leading-8">Prasanna’s outlook is shaped by persistence, strategic thinking, and a commitment to improving over time. His black belt in Karate reflects the discipline he values beyond business and brings into his professional life.</p>
        <div className="border-l-2 border-black pl-6">
          <h3 className="text-xl font-semibold">A practical mindset</h3>
          <p className="mt-3 text-base leading-7">Understand the challenge, think deliberately, and keep refining the work. These values connect his personal journey with his approach to leading Dechub.</p>
        </div>
      </div>
    </PortfolioSection>
  );
}
