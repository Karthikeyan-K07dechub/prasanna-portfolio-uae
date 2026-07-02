import { Quote } from "lucide-react";

export function QuoteSection() {
  return (
    <section
      className="px-4 py-16 md:px-16"
      style={{
        background:
          "linear-gradient(178deg, rgba(233, 12, 60, 0.05) 0%, rgba(233, 12, 60, 0) 50%, rgba(207, 163, 119, 0.05) 100%)",
        boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.05)",
      }}
    >
      <div className="spotlight-content flex flex-col items-center gap-6 py-8 text-center">
        <Quote className="h-12 w-12 text-red-ribbon" />
        <blockquote className="max-w-3xl text-3xl font-medium leading-10 md:text-4xl md:leading-10">
          &ldquo;When I first met Prasanna, I was uncertain about my direction. He challenged me and helped me find{" "}
          <span className="text-red-ribbon">clarity</span>.&rdquo;
        </blockquote>
        <p className="text-lg text-oslo-gray">
          Trusted by founders and teams across multiple industries and regions.
        </p>
      </div>
    </section>
  );
}
