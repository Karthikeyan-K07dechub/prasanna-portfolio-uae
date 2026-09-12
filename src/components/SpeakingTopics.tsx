import { PortfolioSection } from "./ui/PortfolioSection";

const areas = [
  { title: "Brand Strategy & Identity", tag: "Positioning · Communication", services: ["Brand consulting", "Brand positioning", "Visual identity design", "Brand messaging"] },
  { title: "Digital Experiences", tag: "Web · Customer journeys", services: ["Website design & development", "UI/UX design", "Web application development", "SaaS development"] },
  { title: "AI & Automation", tag: "Technology · Operations", services: ["AI integration", "Workflow automation", "CRM integration", "ERP integration"] },
  { title: "Marketing & Growth", tag: "Content · Performance", services: ["Search engine optimization", "Performance marketing", "Content strategy & copywriting", "Digital campaign execution"] },
];

export function SpeakingTopics() {
  return (
    <PortfolioSection id="expertise" eyebrow="02 / Areas of focus" title={<>Where strategy meets <span className="font-playfair italic">execution.</span></>} description="The disciplines that shape Prasanna’s approach and the work of the company he leads." tinted>
      <div className="divide-y divide-black/15 border-y border-black/15">
        {areas.map((area, index) => (
          <article key={area.title} className="grid gap-4 py-7 text-center sm:py-8 sm:text-left lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
            <div className="flex items-start justify-center gap-4 sm:justify-start">
              <span className="pt-1 text-sm tabular-nums">{String(index + 1).padStart(2, "0")}</span>
              <div><h3 className="text-xl font-semibold sm:text-2xl">{area.title}</h3><p className="mt-2 text-sm">{area.tag}</p></div>
            </div>
            <ul aria-label={`${area.title} services`} className="mx-auto grid w-fit max-w-full gap-x-6 gap-y-3 text-left sm:mx-0 sm:w-auto sm:grid-cols-2 lg:pt-1">
              {area.services.map((service) => (
                <li key={service} className="flex items-start gap-3 text-base leading-7">
                  <span aria-hidden="true" className="mt-3 h-1 w-1 shrink-0 rounded-full bg-black" />
                  {service}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </PortfolioSection>
  );
}
