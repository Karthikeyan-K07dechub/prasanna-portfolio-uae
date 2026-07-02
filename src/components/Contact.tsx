"use client";

import { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";

export function Contact() {
  const [result, setResult] = useState("");
  
  const onSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const form = event.currentTarget;

    setResult("Sending...");

    const formData = new FormData(form);

    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || ""
    );
    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully!");
      form.reset();
    } else {
      console.error(data);
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="section-gradient px-4 py-20 md:px-[16px]"
    >
      <div className="spotlight-content mx-auto max-w-lg space-y-8 text-center">
        <div>
          <h2 className="text-4xl font-medium leading-tight md:text-5xl">
            Let&apos;s make this event
            <br />
            <span className="font-playfair italic text-red-ribbon">
              matter.
            </span>
          </h2>

          <p className="mt-6 text-lg text-oslo-gray">
            Have an event in mind? Let&apos;s create something your audience
            actually uses.
          </p>
        </div>

        <a
          href="mailto:prasanna@dechub.in"
          className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-medium text-cod-gray transition-opacity hover:opacity-90"
        >
          <Mail className="h-5 w-5" />
          prasanna@dechub.in
        </a>

        <form
          onSubmit={onSubmit}
          className="space-y-4 text-left"
        >
          {/* Event Name & Location */}
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              name="event_name"
              placeholder="Event name"
              required
              className="w-full rounded-xl border border-mine-shaft-2 bg-mine-shaft px-4 py-3.5 text-white placeholder:text-oslo-gray focus:border-red-ribbon/50 focus:outline-none"
            />

            <input
              type="text"
              name="location"
              placeholder="Location"
              required
              className="w-full rounded-xl border border-mine-shaft-2 bg-mine-shaft px-4 py-3.5 text-white placeholder:text-oslo-gray focus:border-red-ribbon/50 focus:outline-none"
            />
          </div>

          {/* Audience Size & Format */}
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              name="audience_size"
              placeholder="Audience size (e.g., 200 founders)"
              required
              className="w-full rounded-xl border border-mine-shaft-2 bg-mine-shaft px-4 py-3.5 text-white placeholder:text-oslo-gray focus:border-red-ribbon/50 focus:outline-none"
            />

            <select
              name="format"
              defaultValue=""
              required
              className="w-full rounded-xl border border-mine-shaft-2 bg-mine-shaft px-4 py-3.5 text-white focus:border-red-ribbon/50 focus:outline-none"
            >
              <option value="" disabled>
                Format
              </option>

              <option value="Keynote">
                Keynote
              </option>

              <option value="Workshop">
                Workshop
              </option>

              <option value="Hybrid">
                Hybrid
              </option>
            </select>
          </div>

          {/* Desired Outcome */}
          <input
            type="text"
            name="desired_outcome"
            placeholder="Desired outcome"
            required
            className="w-full rounded-xl border border-mine-shaft-2 bg-mine-shaft px-4 py-3.5 text-white placeholder:text-oslo-gray focus:border-red-ribbon/50 focus:outline-none"
          />

          {/* Phone & Name */}
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full rounded-xl border border-mine-shaft-2 bg-mine-shaft px-4 py-3.5 text-white placeholder:text-oslo-gray focus:border-red-ribbon/50 focus:outline-none"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              autoComplete="tel"
              required
              className="w-full rounded-xl border border-mine-shaft-2 bg-mine-shaft px-4 py-3.5 text-white placeholder:text-oslo-gray focus:border-red-ribbon/50 focus:outline-none"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="w-full rounded-xl border border-mine-shaft-2 bg-mine-shaft px-4 py-3.5 text-white placeholder:text-oslo-gray focus:border-red-ribbon/50 focus:outline-none"
          />

          {/* Additional Message */}
          <textarea
            name="message"
            placeholder="Tell us more about your event..."
            rows={4}
            className="w-full resize-none rounded-xl border border-mine-shaft-2 bg-mine-shaft px-4 py-3.5 text-white placeholder:text-oslo-gray focus:border-red-ribbon/50 focus:outline-none"
          />

          <button
            type="submit"
            className="btn-primary flex w-full cursor-pointer items-center justify-center gap-2"
          >
            Request Booking
            <ArrowRight className="h-4 w-4" />
          </button>

          <p className="text-center text-sm text-oslo-gray/70">
            {result || "We reply within 48 hours."}
          </p>
        </form>
      </div>
    </section>
  );
}


