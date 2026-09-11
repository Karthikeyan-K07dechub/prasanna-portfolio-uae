import Image from "next/image";
import { Globe } from "lucide-react";
import { images } from "@/lib/images";
import { OutlineButton, PrimaryButton } from "./ui/Button";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-24">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "linear-gradient(159deg, rgba(115,26,202, 0.1) 0%, rgba(115,26,202, 0) 50%, rgba(115,26,202, 0) 100%)",
          }}
        />
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={images.hero}
            alt="Prasanna EL, founder of Dechub"
            fill
            priority
            className="object-cover object-center opacity-80"
            sizes="100vw"
            style={{ objectPosition: "center 15%" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.75) 85%, rgba(255,255,255,1) 100%)",
            }}
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.18) 30%, rgba(255, 255, 255, 0) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.15) 35%, rgba(255, 255, 255, 0) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col justify-end px-4 pb-16 pt-32 md:px-16 md:pb-16">
        <div className="mx-auto w-full max-w-6xl lg:px-8">
          <div className="space-y-8">
            <h1 className="text-5xl font-medium leading-none tracking-[-0.05em] md:text-8xl md:leading-[128px]">
              Prasanna <span className="font-playfair italic text-black">EL</span>
            </h1>
            <p className="max-w-xl text-lg leading-7 text-black md:text-xl md:leading-7">
              Founder of Dechub. Bringing design, marketing, and technology
              together to help brands grow.
            </p>
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div className="flex flex-wrap gap-4">
              <PrimaryButton href="#contact">Let&apos;s Connect</PrimaryButton>
              <OutlineButton href="#work">Explore My Work</OutlineButton>
            </div>
            <a
              href="https://www.dechub.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-black transition-colors hover:text-black"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-black/10">
                <Globe className="h-5 w-5" aria-hidden="true" />
              </span>
              dechub.in →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
