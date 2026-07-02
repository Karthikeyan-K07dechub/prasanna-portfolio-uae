import { PrimaryButton } from "./ui/Button";

const topics = [
  {
    title: "The AI Founder Advantage",
    tags: ["45-60 min", "Signature Keynote"],
    description:
      "How to use AI as a thinking partner, clarify positioning, and build a LinkedIn system that drives inbound.",
  },
  {
    title: "AI for Personal Branding",
    tags: ["90 min", "Workshop"],
    description: "Using AI without losing your voice. Practical frameworks for authentic content.",
  },
  {
    title: "LinkedIn That Actually Sells",
    tags: ["45-60 min", "Keynote"],
    description: "Turning profile views into real conversations. A founder-focused approach.",
  },
  {
    title: "Storytelling in the AI Era",
    tags: ["90 min", "Workshop"],
    description: "Why trust beats volume — and how to structure stories that land.",
  },
];

export function SpeakingTopics() {
  return (
    <section id="work" className="section-gradient px-4 py-16 md:px-16">
      <div className="spotlight-content space-y-12">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)] md:items-end">
          <div className="max-w-xl">
            <h2 className="text-5xl font-medium leading-[90px] tracking-[-0.05em] md:text-[88px] md:leading-[88px]">
              Speaking <br />
              <span className="font-playfair italic text-oslo-gray">Topics</span>
            </h2>
            <p className="mt-3 text-sm text-white/50">{"// KEYNOTES & WORKSHOPS"}</p>
          </div>
          <div className="flex flex-col items-start justify-end text-left md:items-end md:text-right">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-red-ribbon">01</span>
            <p className="mt-4 text-lg leading-8 text-white/70 max-w-md">
              Practical AI frameworks your audience can apply immediately.
            </p>
          </div>
        </div>

        <div className="divide-y divide-white/10">
          {topics.map((topic) => (
            <article
              key={topic.title}
              className="group border-b border-white/10 py-8 transition-all duration-300 hover:bg-white/5 hover:text-white last:border-b-0"
            >
              <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1.2fr)] lg:items-center">
                <h3 className="text-2xl font-medium transition-colors duration-300 group-hover:text-red-ribbon text-white">
                  {topic.title}
                </h3>
                <div className="flex flex-wrap items-center justify-start gap-4 text-sm uppercase tracking-[0.15em] text-oslo-gray lg:justify-center">
                  <span className="text-white/70 transition-colors duration-300">{topic.tags[0]}</span>
                  <span className="text-white/50 transition-colors duration-300 group-hover:text-red-ribbon">{topic.tags[1]}</span>
                </div>
                <p className="text-base leading-7 text-oslo-gray transition-colors duration-300 group-hover:text-white lg:text-right">
                  {topic.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <PrimaryButton href="#contact">Request a Talk</PrimaryButton>
        </div>
      </div>
    </section>
  );
}
