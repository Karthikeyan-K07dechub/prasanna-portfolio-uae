import { Check, X } from "lucide-react";

const forYou = ["Founders and CEOs", "Leadership teams", "B2B and expert-led businesses"];
const notForYou = [
  "Hobby creators",
  "Audiences looking for surface-level AI demos",
  "Events that want hype without depth",
];

export function IdealFit() {
  return (
    <section
      className="px-4 py-16 md:px-16"
      style={{
        background:
          "linear-gradient(184deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.05) 100%)",
        boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.05)",
      }}
    >
      <div className="spotlight-content space-y-12">
        <div className="text-center">
          <span className="text-sm font-medium uppercase tracking-[0.05em] text-red-ribbon">Ideal Fit</span>
          <h2 className="mt-4 text-5xl font-medium leading-[96px] tracking-[-0.05em] md:text-6xl md:leading-[96px]">
            Who This Is <span className="font-playfair italic text-oslo-gray">For</span>
          </h2>
        </div>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-red-ribbon/20 bg-red-ribbon/5 p-8">
            <h3 className="mb-6 flex items-center gap-2 text-3xl font-semibold leading-tight">
              <Check className="h-5 w-5 text-red-ribbon" />
              This is for
            </h3>
            <ul className="space-y-4">
              {forYou.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-white/90">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-red-ribbon" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-6 flex items-center gap-2 text-xl font-medium text-oslo-gray">
              <X className="h-5 w-5" />
              This is not for
            </h3>
            <ul className="space-y-4">
              {notForYou.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-oslo-gray">
                  <X className="mt-0.5 h-5 w-5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
