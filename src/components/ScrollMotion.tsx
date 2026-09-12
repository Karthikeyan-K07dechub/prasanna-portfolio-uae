"use client";

import { useEffect } from "react";

/** Enhance server-rendered content without hiding it before JavaScript loads. */
export function ScrollMotion() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Set<Animation>();
    let observer: IntersectionObserver | undefined;

    const setup = () => {
      observer?.disconnect();
      animations.forEach(animation => animation.cancel());
      animations.clear();
      if (preference.matches || !("IntersectionObserver" in window)) return;

      observer = new IntersectionObserver(entries => {
        const visible = entries.filter(entry => entry.isIntersecting);
        visible.forEach((entry, index) => {
          const element = entry.target as HTMLElement;
          observer?.unobserve(element);
          // Hash navigation and keyboard focus should show content immediately.
          if (element.contains(document.activeElement) || element.closest(":target")) return;
          const animation = element.animate(
            [
              { opacity: 0, transform: "translateY(24px)" },
              { opacity: 1, transform: "translateY(0)" },
            ],
            { duration: 750, delay: Math.min(index, 3) * 85, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "backwards" },
          );
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
        });
      }, { threshold: 0.08 });

      document.querySelectorAll<HTMLElement>("[data-reveal], [data-motion-section] article, #contact > div, footer > div").forEach(element => {
        observer?.observe(element);
      });
    };

    const revealFocused = (event: FocusEvent) => {
      animations.forEach(animation => {
        const target = (animation.effect as KeyframeEffect | null)?.target;
        if (target instanceof Element && target.contains(event.target as Node)) {
          animation.cancel();
          animations.delete(animation);
        }
      });
    };
    setup();
    preference.addEventListener("change", setup);
    document.addEventListener("focusin", revealFocused);
    return () => {
      observer?.disconnect();
      animations.forEach(animation => animation.cancel());
      preference.removeEventListener("change", setup);
      document.removeEventListener("focusin", revealFocused);
    };
  }, []);

  return null;
}
