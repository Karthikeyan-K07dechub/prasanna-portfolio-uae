import Image from "next/image";
import { Globe } from "lucide-react";
import { images } from "@/lib/images";
import { OutlineButton, PrimaryButton } from "./ui/Button";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-svh overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "linear-gradient(159deg, rgba(115,26,202, 0.1) 0%, rgba(115,26,202, 0) 50%, rgba(115,26,202, 0) 100%)",
          }}
        />
        <div className="absolute inset-x-0 top-0 h-[75%] overflow-hidden sm:h-full">
          <Image
            src={images.hero}
            alt="Prasanna EL, founder of Dechub"
            fill
            priority
            className="object-cover object-[calc(50%+12px)_15%] sm:object-[center_15%]"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0.005) 45%, rgba(255,255,255,0.02) 50%, rgba(255,255,255,0.055) 55%, rgba(255,255,255,0.12) 60%, rgba(255,255,255,0.22) 65%, rgba(255,255,255,0.35) 70%, rgba(255,255,255,0.52) 75%, rgba(255,255,255,0.70) 80%, rgba(255,255,255,0.85) 85%, rgba(255,255,255,0.95) 90%, rgba(255,255,255,0.99) 95%, rgba(255,255,255,1) 100%)",
            }}
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 35%, rgba(255, 255, 255, 0) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 flex min-h-svh flex-col justify-end pb-10 pt-[55svh] sm:pb-16 lg:pt-40">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-5 sm:space-y-8">
            <h1 className="text-[clamp(2.75rem,8vw,6rem)] font-medium leading-[1.12] tracking-[-0.05em] text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.65),0_0_16px_rgba(0,0,0,0.35)] sm:[text-shadow:none]">
              Prasanna <span className="font-playfair italic text-white">EL</span>
            </h1>
            <p className="max-w-xl rounded-xl bg-transparent p-4 text-lg leading-7 text-black sm:bg-white/90 md:text-xl md:leading-7 lg:rounded-none lg:bg-transparent lg:p-0">
              Founder of Dechub. Bringing design, marketing, and technology
              together to help brands grow.
            </p>
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-6 sm:mt-12 lg:flex-row lg:items-end">
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
              <PrimaryButton href="#contact">Let&apos;s Connect</PrimaryButton>
              <OutlineButton href="#work">Explore Our Work</OutlineButton>
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
