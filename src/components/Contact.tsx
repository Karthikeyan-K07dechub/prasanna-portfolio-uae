"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

type Draft = { name: string; phone: string; email: string; message: string };
type Status = "idle" | "sending" | "success" | "error";
const emptyDraft: Draft = { name: "", phone: "", email: "", message: "" };
const draftKey = "anas-contact-draft";
const statusText: Record<Status, string> = {
  idle: "Let's discuss how we can work together.", sending: "Sending...",
  success: "Message sent successfully!", error: "Something went wrong. Please try again.",
};

export function Contact() {
  const { t, locale } = useLanguage();
  const [draft, setDraft] = useState<Draft>(emptyDraft);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof Draft, string>>>({});
  const submitting = useRef(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(sessionStorage.getItem(draftKey) || "null");
      if (saved && Object.keys(emptyDraft).every(key => typeof saved[key] === "string")) {
        setDraft({ name: saved.name, phone: saved.phone, email: saved.email, message: saved.message });
      }
    } catch { /* Storage may be unavailable; the form still works. */ }
  }, []);

  function update(field: keyof Draft, value: string) {
    const next = { ...draft, [field]: value };
    setDraft(next);
    setErrors(previous => ({ ...previous, [field]: undefined }));
    if (status !== "sending") setStatus("idle");
    try { sessionStorage.setItem(draftKey, JSON.stringify(next)); } catch { /* Optional draft persistence. */ }
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    const form = event.currentTarget;
    const validation: Partial<Record<keyof Draft, string>> = {};
    if (!draft.name.trim()) validation.name = "Please enter your name.";
    const email = form.elements.namedItem("email") as HTMLInputElement;
    if (!draft.email.trim() || !email.validity.valid) validation.email = "Please enter a valid email address.";
    if (!draft.message.trim()) validation.message = "Please enter your message.";
    setErrors(validation);
    const firstInvalid = Object.keys(validation)[0];
    if (firstInvalid) {
      (form.elements.namedItem(firstInvalid) as HTMLElement).focus();
      return;
    }
    // Capture enabled fields before React renders the sending state.
    const data = new FormData(form);
    submitting.current = true;
    setStatus("sending");
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 20000);
    try {
      data.set("from_name", "Anas Portfolio");
      data.set("subject", "New Portfolio Enquiry — Anas");
      data.set("language", locale === "ar" ? "Arabic" : "English");
      data.set("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "");
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data, signal: controller.signal });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error("Submission failed");
      setStatus("success");
      setDraft(emptyDraft);
      try { sessionStorage.removeItem(draftKey); } catch { /* Optional draft persistence. */ }
    } catch {
      setStatus("error");
    } finally {
      window.clearTimeout(timeout);
      submitting.current = false;
    }
  }

  const fields = [
    { name: "name", label: "Your name", type: "text", autoComplete: "name", required: true },
    { name: "phone", label: "Phone number (optional)", type: "tel", autoComplete: "tel", required: false },
    { name: "email", label: "Your email", type: "email", autoComplete: "email", required: true },
  ] as const;
  const fieldClass = "w-full rounded-xl border border-black bg-surface px-4 py-3.5 text-black placeholder:text-black focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2 disabled:opacity-70";

  return (
    <section id="contact" className="section-gradient scroll-mt-28 px-4 py-10 sm:scroll-mt-32 sm:px-6 sm:py-12 lg:py-16">
      <div className="relative z-10 mx-auto w-full max-w-lg space-y-8 text-center">
        <div>
          <h2 className="text-4xl font-medium leading-tight text-section-title md:text-5xl">
            {t("Let's start a")}<br /><span className="font-playfair italic">{t("conversation.")}</span>
          </h2>
          <p className="mt-6 text-lg text-black">{t("Have a project, collaboration, or question in mind? Get in touch.")}</p>
        </div>
        <a href="mailto:prasanna@dechub.in" dir="ltr" className="inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-black bg-surface px-4 py-4 text-base font-medium text-black transition-opacity hover:opacity-90 sm:gap-3 sm:px-8 sm:text-lg">
          <Mail className="h-5 w-5 shrink-0" aria-hidden="true" />prasanna@dechub.in
        </a>
        <form onSubmit={onSubmit} noValidate className="space-y-4 text-start" aria-busy={status === "sending"}>
          <div className="grid gap-4 sm:grid-cols-2">
            {fields.map(field => (
              <div key={field.name} className={field.name === "email" ? "sm:col-span-2" : ""}>
                <label className="sr-only" htmlFor={`contact-${field.name}`}>{t(field.label)}</label>
                <input id={`contact-${field.name}`} name={field.name} type={field.type} autoComplete={field.autoComplete}
                  required={field.required} placeholder={t(field.label)} dir={field.name === "name" ? "auto" : "ltr"}
                  value={draft[field.name]} onChange={event => update(field.name, event.target.value)} disabled={status === "sending"}
                  aria-invalid={!!errors[field.name]} aria-describedby={errors[field.name] ? `error-${field.name}` : undefined}
                  className={fieldClass} />
                {errors[field.name] && <p id={`error-${field.name}`} className="mt-2 text-sm text-red-800">{t(errors[field.name]!)}</p>}
              </div>
            ))}
          </div>
          <div>
            <label className="sr-only" htmlFor="contact-message">{t("Your message")}</label>
            <textarea id="contact-message" name="message" placeholder={t("Tell me about your project, collaboration, or enquiry...")}
              required rows={4} dir="auto" value={draft.message} onChange={event => update("message", event.target.value)}
              disabled={status === "sending"} aria-invalid={!!errors.message} aria-describedby={errors.message ? "error-message" : undefined}
              className={`${fieldClass} resize-y`} />
            {errors.message && <p id="error-message" className="mt-2 text-sm text-red-800">{t(errors.message)}</p>}
          </div>
          <button type="submit" disabled={status === "sending"} className="btn-primary flex w-full cursor-pointer items-center justify-center gap-2 disabled:cursor-wait disabled:opacity-70">
            {t(status === "sending" ? "Sending..." : "Send Message")}<ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
          <p role="status" aria-live="polite" aria-atomic="true" className="text-center text-sm text-black">{t(statusText[status])}</p>
        </form>
      </div>
    </section>
  );
}
