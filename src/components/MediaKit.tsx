"use client";

import Image from "next/image";
import { useState } from "react";
import { Check, Copy, Download, FileText, Mic } from "lucide-react";
import { images } from "@/lib/images";
import { ExternalLinkText } from "./ui/Button";

const learnItems = [
  "Use AI to clarify positioning in minutes",
  "Turn experience into authority without sounding scripted",
  "Build a simple LinkedIn system that drives inbound conversations",
  "Avoid the mistakes that make AI content feel generic",
];

const otherTalks = [
  "AI for Personal Branding (Without Losing Your Voice)",
  "LinkedIn That Actually Sells",
  "Storytelling in the AI Era",
];

export function MediaKit() {
  const [activeHeadshot, setActiveHeadshot] = useState(0);

  return (
    <section id="media-kit" className="relative px-4 py-32 md:px-16">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div
          className="h-96 w-full max-w-4xl rounded-full opacity-80"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(115,26,202, 0.08) 0%, rgba(115,26,202, 0) 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl space-y-8">
        <div className="text-center">
          <span className="text-sm font-medium text-black">For Event Organizers</span>
          <h2 className="mt-2 text-5xl font-bold">Media Kit</h2>
          <p className="mt-4 text-lg text-black">
            Everything you need to promote Prasanna&apos;s appearance at your event.
          </p>
        </div>

        <div className="rounded-3xl border border-black/10 bg-cod-gray/50 p-10 backdrop-blur-sm">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-ribbon/10">
              <Mic className="h-5 w-5 text-black" />
            </div>
            <span className="text-xs font-medium uppercase tracking-[0.1em] text-black">Signature Keynote</span>
          </div>
          <h3 className="text-3xl font-bold">The AI Founder Advantage</h3>
          <p className="mt-4 max-w-3xl text-lg text-black">
            A practical, high-impact keynote showing founders how to use AI as a thinking partner, not just a content
            tool.
          </p>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.1em] text-black">Audience Will Learn</p>
              <ul className="mt-4 space-y-3">
                {learnItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base text-black">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-black" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.1em] text-black">Formats Available</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-xl bg-mine-shaft px-4 py-2 text-sm">45–60 minute keynote</span>
                <span className="rounded-xl bg-mine-shaft px-4 py-2 text-sm">90 minute interactive workshop</span>
              </div>
              <p className="mt-6 text-sm uppercase tracking-[0.1em] text-black">Other Popular Talks</p>
              <ul className="mt-3 space-y-2 text-sm text-black">
                {otherTalks.map((talk) => (
                  <li key={talk}>• {talk}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-8 text-sm text-black">
            Best for: Founder conferences, leadership offsites, B2B events, accelerators
          </p>
        </div>

        <div className="rounded-3xl border border-black/10 bg-cod-gray/50 p-10 backdrop-blur-sm">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-ribbon/10">
                <Download className="h-5 w-5 text-black" />
              </div>
              <div>
                <span className="text-xs font-medium uppercase tracking-[0.1em] text-black">Speaker Headshots</span>
                <p className="text-sm text-black">7 high-resolution photos</p>
              </div>
            </div>
            <button type="button" className="inline-flex items-center gap-2 rounded-full bg-red-ribbon px-4 py-2 text-sm font-medium text-white">
              <Download className="h-4 w-4" />
              Download All
            </button>
          </div>

          <div className="grid gap-3 lg:grid-cols-[1fr_1.2fr]">
            <div className="relative overflow-hidden rounded-2xl bg-brand/5">
              <div className="relative aspect-[3/4] min-h-[400px] bg-[#ffffff] w-full overflow-hidden">
                <Image
                  src={images.headshots[activeHeadshot]}
                  alt={`Prasanna EL headshot ${activeHeadshot + 1}`}
                  fill
                  className="object-cover"
                  sizes="500px"
                  style={{ inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                />
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-brand/80 px-3 py-1.5 text-sm text-white backdrop-blur-sm">
                {activeHeadshot + 1} / 7
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {images.headshots.map((src, index) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActiveHeadshot(index)}
                  className={`relative aspect-square overflow-hidden rounded-xl transition-opacity ${
                    activeHeadshot === index
                      ? "ring-4 ring-black ring-offset-2 ring-offset-cod-gray"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover object-top"
                    sizes="150px"
                    style={{ objectPosition: 'top center' }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Download, title: "Logo", desc: "Brand logo in multiple formats", action: "Download Logo" },
            { icon: Copy, title: "Speaker Bio", desc: "Short, medium & full bios", action: "View & Copy" },
            { icon: FileText, title: "One-Pager", desc: "Complete speaker overview", action: "View & Download" },
          ].map((item) => (
            <div
              key={item.title}
              className="glass-card p-6 transition-all duration-300 hover:border-black/50 hover:ring-2 hover:ring-black/20"
            >
              <div className="mb-4 flex aspect-square items-center justify-center rounded-xl bg-brand/5">
                <item.icon className="h-12 w-12 text-black" />
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-black">{item.desc}</p>
              {item.title === "Logo" ? (
                <a
                  href="/images/logo-success-resources-4b6f42.png"
                  download
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand/5 px-4 py-2.5 text-sm font-medium text-black transition hover:bg-red-ribbon hover:text-white"
                >
                  <Download className="h-4 w-4" />
                  {item.action}
                </a>
              ) : (
                <button
                  type="button"
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-brand/5 px-4 py-2.5 text-sm font-medium text-black transition hover:bg-red-ribbon hover:text-white"
                >
                  <Download className="h-4 w-4" />
                  {item.action}
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-black/5 bg-cod-gray/30 p-8 text-center">
          <p className="font-medium">Ready to book Prasanna for your event?</p>
          <p className="mt-2 text-sm text-black">
            Contact: <ExternalLinkText href="mailto:prasanna@dechub.in">prasanna@dechub.in</ExternalLinkText>
          </p>
          <p className="mt-2 text-sm text-black">
            Need custom assets or have specific requirements?{" "}
            <ExternalLinkText href="#contact">Get in touch</ExternalLinkText>
          </p>
        </div>
      </div>
    </section>
  );
}
