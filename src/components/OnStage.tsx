import Image from "next/image";
import { images } from "@/lib/images";
import { PrimaryButton } from "./ui/Button";

const stageCaptions = [
  "Daniel speaking at National Achievers Congress 2025",
  "Daniel with audience participation",
  "Daniel on stage - Best Kept Secret",
  "Daniel speaking at Success Resources event",
];

export function OnStage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <span className="inline-flex items-center rounded-full border border-red-ribbon/30 bg-red-ribbon/10 px-4 py-2 text-xs font-medium text-red-ribbon">
          On Stage
        </span>
        <h2 className="mt-4 text-4xl font-medium leading-[60px] tracking-[-0.05em] md:text-[60px]">
          Engaging audiences across{" "}
          <span className="font-playfair italic text-oslo-gray">the globe</span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base font-medium leading-6 text-oslo-gray">
          From intimate workshops to arenas of thousands — delivering AI insights that transform how founders think and
          execute.
        </p>
        <div className="mt-4">
          <PrimaryButton href="#contact">Book for Your Event</PrimaryButton>
        </div>
      </div>

      <div className="relative mt-12 px-4 md:px-15">
        <div
          className="relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%), linear-gradient(0deg, transparent 0%, black 15%)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%), linear-gradient(0deg, transparent 0%, black 15%)",
            maskComposite: "intersect",
          }}
        >
          <div className="onstage-marquee flex gap-4 pb-4">
            {images.stage.concat(images.stage).map((src, index) => (
              <div
                key={`${src}-${index}`}
                className="group relative h-[208px] w-[384px] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.1)] transition-transform duration-300 hover:-translate-y-1"
              >
                <Image
                  src={src}
                  alt={stageCaptions[index % stageCaptions.length]}
                  fill
                  className="object-cover grayscale transition duration-300 group-hover:grayscale-0"
                  sizes="384px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
