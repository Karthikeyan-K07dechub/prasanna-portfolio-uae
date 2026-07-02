"use client";

import Image from "next/image";
import { Maximize2, Pause, Play, Volume2 } from "lucide-react";
import { images } from "@/lib/images";

export function VideoSection() {
  return (
    <section className="px-4 py-16 md:px-[170px]">
      <div className="rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-md">
        <div className="relative overflow-hidden rounded-xl border border-white/10">
          <div className="relative aspect-video w-full">
            <Image
              src={images.video}
              alt="Watch Prasanna in Action"
              fill
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
            />
            <button
              type="button"
              aria-label="Play video"
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-red-ribbon shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.1)]">
                <Play className="ml-0.5 h-6 w-6 fill-white text-white" />
              </span>
            </button>
            <div
              className="absolute inset-x-0 bottom-0 p-3"
              style={{
                background: "linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%)",
              }}
            >
              <div className="flex items-center justify-between text-[11px] text-white">
                <span>00:00</span>
                <div className="flex items-center gap-2">
                  <Pause className="h-4 w-4" />
                  <Volume2 className="h-4 w-4" />
                  <Maximize2 className="h-4 w-4" />
                </div>
              </div>
              <div className="mt-1.5 h-1.5 rounded bg-white/20">
                <div className="h-full w-0 rounded bg-red-ribbon" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 space-y-2">
          <p className="text-lg font-medium text-white">Watch Prasanna in Action</p>
          <p className="text-sm leading-5 text-oslo-gray">
            &ldquo;See how Prasanna captivates audiences and delivers transformative insights on stage.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
