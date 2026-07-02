import { ArrowRight, Check, Sparkles, Users } from "lucide-react";
import { ExternalLinkText, OutlineButton, PrimaryButton } from "./ui/Button";

const dfyItems = [
  "Positioning and message",
  "LinkedIn content system",
  "AI workflows tailored to your voice",
  "Visibility engine that runs weekly",
];

const cohortItems = [
  "Think clearly with AI",
  "Turn ideas into content",
  "Stay consistent on LinkedIn",
  "Keep your voice intact",
];

export function BeyondStage() {
  return (
    <section
      id="beyond"
      style={{
        background:
          "linear-gradient(151deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.1) 100%)",
        boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.05)",
      }}
    >
      <div className="spotlight-content space-y-16 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-medium uppercase tracking-[0.1em] text-red-ribbon">Beyond the Stage</span>
          <h2 className="mt-4 text-4xl font-medium leading-[60px] tracking-[-0.05em] md:text-[60px]">
            How Founders <span className="font-playfair italic text-oslo-gray">Work With Me</span>
          </h2>
          <p className="mt-4 text-lg leading-7 text-oslo-gray">
            Speaking creates clarity.
            <br />
            These services turn clarity into execution.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="glass-card space-y-6 p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-ribbon/10">
                <Sparkles className="h-6 w-6 text-red-ribbon" />
              </div>
              <span className="text-xs font-medium uppercase tracking-[0.1em] text-red-ribbon">Done-For-You</span>
            </div>
            <h3 className="text-3xl font-medium">Dechub: Done-For-You</h3>
            <p className="text-base leading-6 text-oslo-gray">
              Many founders leave events inspired — and then go back to chaos. Dechub is my done-for-you
              execution arm for founders who want the results of clarity.
            </p>
            <p className="text-sm text-white/80">My team and I build your:</p>
            <ul className="space-y-2">
              {dfyItems.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-oslo-gray">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-red-ribbon" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {["Founders", "CEOs", "Expert-led businesses", "High-ticket services"].map((tag) => (
                <span key={tag} className="rounded-lg bg-mine-shaft px-3 py-1 text-xs text-oslo-gray">
                  {tag}
                </span>
              ))}
            </div>
            <PrimaryButton href="https://dechub.in/" external>
              Learn More
            </PrimaryButton>
          </div>

          <div className="glass-card space-y-6 p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-whiskey/10">
                <Users className="h-6 w-6 text-whiskey" />
              </div>
              <span className="text-xs font-medium uppercase tracking-[0.1em] text-whiskey">AI Cohort</span>
            </div>
            <h3 className="text-3xl font-medium">Dechub: AI Cohort</h3>
            <p className="text-base leading-6 text-oslo-gray">
              Not ready for done-for-you? Join our AI Cohort — a structured program for founders who want to master AI
              with guidance, community, and accountability.
            </p>
            <p className="text-sm text-white/80">You will learn to:</p>
            <ul className="space-y-2">
              {cohortItems.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-oslo-gray">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-whiskey" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {["Founders", "Solopreneurs", "Content creators", "Coaches"].map((tag) => (
                <span key={tag} className="rounded-lg bg-mine-shaft px-3 py-1 text-xs text-oslo-gray">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="https://dechub.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-4 rounded-xl px-8 text-base font-bold text-cod-gray transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(90deg, #cfa377 0%, #f59e0b 100%)" }}
            >
              Join the AI Cohort
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div
          className="relative rounded-3xl p-10"
          style={{
            background:
              "linear-gradient(90deg, rgba(233, 12, 60, 0.05) 0%, rgba(233, 12, 60, 0.1) 50%, rgba(233, 12, 60, 0.05) 100%)",
            boxShadow: "inset 0 0 0 1px rgba(233, 12, 60, 0.2)",
          }}
        >
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-2xl space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-ribbon/10">
                  <Users className="h-5 w-5 text-red-ribbon" />
                </div>
                <span className="text-xs font-medium uppercase tracking-[0.1em] text-red-ribbon">
                  For Event Organizers
                </span>
              </div>
              <h3 className="text-xl font-medium">What Happens After the Talk</h3>
              <p className="text-base leading-6 text-oslo-gray">
                If your audience wants help implementing what they learned, I offer post-event options including private
                workshops, founder implementation sprints, advisory sessions, and DFY onboarding for selected
                attendees.
              </p>
              <p className="text-sm italic text-white/70">This turns a great talk into real outcomes.</p>
            </div>
            <OutlineButton href="#contact">Discuss Post-Event Options</OutlineButton>
          </div>
        </div>

        <div className="space-y-6 text-center">
          <h4 className="text-lg font-medium">How Most Founders Work With Me</h4>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[
              { step: "01", label: "Hear me speak" },
              { step: "02", label: "Get clarity" },
              { step: "03", label: "Implement with Dechub" },
            ].map((item, index) => (
              <div key={item.step} className="flex items-center gap-3">
                <span className="text-xs font-medium text-red-ribbon">{item.step}</span>
                <span className="text-base text-oslo-gray">{item.label}</span>
                {index < 2 && <ArrowRight className="hidden h-4 w-4 text-oslo-gray/50 sm:block" />}
              </div>
            ))}
          </div>
          <p className="text-sm text-oslo-gray/70">Simple. Effective. No guesswork.</p>
        </div>
      </div>
    </section>
  );
}
