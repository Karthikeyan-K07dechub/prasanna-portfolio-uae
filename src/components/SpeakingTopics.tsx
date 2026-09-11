import { PortfolioSection } from "./ui/PortfolioSection";

const areas = [
  { title: "Brand Strategy & Identity", tag: "Positioning · Communication", description: "Connecting positioning, visual identity, and communication to help businesses express their value consistently." },
  { title: "Digital Experiences", tag: "Web · Customer journeys", description: "Bringing design and business thinking together to create clear, useful websites and digital customer experiences." },
  { title: "AI & Automation", tag: "Technology · Operations", description: "Exploring practical applications of AI and connected systems to improve experiences and simplify business operations." },
  { title: "Marketing & Growth", tag: "Content · Performance", description: "Connecting content, SEO, campaigns, and performance marketing with the objectives that matter to a business." },
];

export function SpeakingTopics() {
  return (
    <PortfolioSection id="expertise" eyebrow="02 / Areas of focus" title={<>Where strategy meets <span className="font-playfair italic">execution.</span></>} description="The disciplines that shape Prasanna’s approach and the work of the company he leads." tinted>
      <div className="divide-y divide-black/15 border-y border-black/15">
        {areas.map((area, index) => (
          <article key={area.title} className="grid gap-4 py-7 sm:py-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
            <div className="flex items-start gap-4">
              <span className="pt-1 text-sm tabular-nums">{String(index + 1).padStart(2, "0")}</span>
              <div><h3 className="text-xl font-semibold sm:text-2xl">{area.title}</h3><p className="mt-2 text-sm">{area.tag}</p></div>
            </div>
            <p className="text-base leading-7 lg:pt-1">{area.description}</p>
          </article>
        ))}
      </div>
    </PortfolioSection>
  );
}
