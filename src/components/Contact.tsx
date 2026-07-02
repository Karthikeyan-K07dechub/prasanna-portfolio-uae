import { ArrowRight, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="section-gradient px-4 py-20 md:px-[16px]">
      <div className="spotlight-content mx-auto max-w-lg space-y-8 text-center">
        <div>
          <h2 className="text-4xl font-medium leading-tight md:text-5xl">
            Let&apos;s make this event
            <br />
            <span className="font-playfair italic text-red-ribbon">matter.</span>
          </h2>
          <p className="mt-6 text-lg text-oslo-gray">
            Have an event in mind? Let&apos;s create something your audience actually uses.
          </p>
        </div>

        <a
          href="mailto:prasanna@dechub.in"
          className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-medium text-cod-gray transition-opacity hover:opacity-90"
        >
          <Mail className="h-5 w-5" />
          prasanna@dechub.in
        </a>

        <form className="space-y-4 text-left">
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Event name"
              className="w-full rounded-xl border border-mine-shaft-2 bg-mine-shaft px-4 py-3.5 text-white placeholder:text-oslo-gray focus:border-red-ribbon/50 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Location"
              className="w-full rounded-xl border border-mine-shaft-2 bg-mine-shaft px-4 py-3.5 text-white placeholder:text-oslo-gray focus:border-red-ribbon/50 focus:outline-none"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Audience size (e.g., 200 founders)"
              className="w-full rounded-xl border border-mine-shaft-2 bg-mine-shaft px-4 py-3.5 text-white placeholder:text-oslo-gray focus:border-red-ribbon/50 focus:outline-none"
            />
            <select
              defaultValue=""
              className="w-full rounded-xl border border-mine-shaft-2 bg-mine-shaft px-4 py-3.5 text-white focus:border-red-ribbon/50 focus:outline-none"
            >
              <option value="" disabled>
                Format
              </option>
              <option value="keynote">Keynote</option>
              <option value="workshop">Workshop</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="Desired outcome"
            className="w-full rounded-xl border border-mine-shaft-2 bg-mine-shaft px-4 py-3.5 text-white placeholder:text-oslo-gray focus:border-red-ribbon/50 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your email"
            className="w-full rounded-xl border border-mine-shaft-2 bg-mine-shaft px-4 py-3.5 text-white placeholder:text-oslo-gray focus:border-red-ribbon/50 focus:outline-none"
          />
          <button type="submit" className="btn-primary w-full">
            Request Booking
            <ArrowRight className="h-4 w-4" />
          </button>
          <p className="text-center text-sm text-oslo-gray/60">We reply within 48 hours.</p>
        </form>
      </div>
    </section>
  );
}
