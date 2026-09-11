import type { ReactNode } from "react";

export function PortfolioSection({ id, eyebrow, title, description, children, tinted = false }: {
  id: string; eyebrow: string; title: ReactNode; description?: string; children: ReactNode; tinted?: boolean;
}) {
  return (
    <section id={id} className={`scroll-mt-32 border-t border-black/10 py-16 sm:py-20 lg:py-24 ${tinted ? "bg-brand/5" : "bg-white"}`}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl sm:mb-12">
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-black">
            <span className="h-px w-8 bg-brand" aria-hidden="true" />{eyebrow}
          </p>
          <h2 className="text-4xl font-medium leading-tight tracking-tight text-black sm:text-5xl lg:text-6xl">{title}</h2>
          {description && <p className="mt-5 max-w-2xl text-base leading-7 text-black sm:text-lg sm:leading-8">{description}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
