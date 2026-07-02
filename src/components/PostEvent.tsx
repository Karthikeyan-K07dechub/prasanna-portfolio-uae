import { Calendar, Lightbulb, Rocket, Users } from "lucide-react";
import { PrimaryButton } from "./ui/Button";

const services = [
  {
    icon: Calendar,
    title: "Post-Event Workshops",
    description: "Deep-dive sessions that turn insights into action plans.",
  },
  {
    icon: Rocket,
    title: "Implementation Sprints",
    description: "Focused execution windows with hands-on guidance.",
  },
  {
    icon: Lightbulb,
    title: "Leadership Advisory Sessions",
    description: "Strategic support for leadership teams ready to move.",
  },
  {
    icon: Users,
    title: "Done-For-You Onboarding",
    description: "Full implementation for selected attendees.",
  },
];

export function PostEvent() {
  return (
    <section
      className="px-4 py-16 md:px-16"
      style={{
        background:
          "linear-gradient(175deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 50%, rgba(233, 12, 60, 0.05) 100%)",
        boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.05)",
      }}
    >
      <div className="spotlight-content space-y-12">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-medium uppercase tracking-[0.05em] text-red-ribbon">For Event Organizers</span>
          <h2 className="mt-4 text-4xl font-medium leading-[48px] tracking-[-0.025em] md:text-5xl">
            What Happens <span className="font-playfair italic text-oslo-gray">After</span> the Talk
          </h2>
          <p className="mt-4 text-lg leading-7 text-oslo-gray">
            If your audience wants help implementing what they learn, I offer follow-up services that turn inspiration
            into measurable outcomes.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="glass-card space-y-2 p-6">
              <service.icon className="h-8 w-8 text-red-ribbon" />
              <h3 className="text-lg font-medium">{service.title}</h3>
              <p className="text-sm leading-5 text-oslo-gray">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <PrimaryButton href="#contact">Discuss Post-Event Options</PrimaryButton>
        </div>
      </div>
    </section>
  );
}
