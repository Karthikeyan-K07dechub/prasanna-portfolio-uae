import Image from "next/image";
import Link from "next/link";
import { Globe, Instagram, Linkedin, Send, Youtube } from "lucide-react";
import { images } from "@/lib/images";

const pages = [
  { label: "Home", href: "#hero" },
  { label: "Speaking", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Done-For-You", href: "#beyond" },
  { label: "Media Kit", href: "#media-kit" },
  { label: "Contact", href: "#contact" },
];

const social = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/prasanna-el-13a6b27a/", icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/prasanna_el/", icon: Instagram },
  { label: "YouTube", href: "https://www.youtube.com/@PrasannaEL", icon: Youtube },
  { label: "Dechub", href: "https://dechub.in/", icon: Globe },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-4 pb-8 pt-14 md:px-16">
      <div className="relative mx-auto max-w-7xl space-y-10">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src={images.avatar}
                alt="Prasanna EL"
                width={32}
                height={32}
                className="h-8 w-8 shrink-0 rounded-full bg-[#6A14D1] object-contain object-center p-1"
              />
              <span className="text-xl font-semibold">Prasanna EL</span>
            </div>
            <p className="text-sm leading-5 text-oslo-gray">
              AI Expert • International Speaker • Founder of{" "}
              <a href="https://dechub.in/" className="text-white/90 hover:underline">
                Dechub
              </a>
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Pages</h4>
            <ul className="mt-4 space-y-2">
              {pages.map((page) => (
                <li key={page.href}>
                  <Link href={page.href} className="text-sm text-oslo-gray transition-colors hover:text-white">
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Social</h4>
            <ul className="mt-4 space-y-3">
              {social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-oslo-gray transition-colors hover:text-white"
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Stay Updated</h4>
            <form className="mt-4 space-y-2">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="w-full rounded-full border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder:text-oslo-gray focus:outline-none focus:ring-1 focus:ring-white/20"
                />
                <button
                  type="submit"
                  className="inline-flex shrink-0 items-center gap-2 rounded-full bg-red-ribbon px-4 py-2 text-sm font-medium"
                >
                  Subscribe
                  <Send className="h-4 w-4" />
                </button>
              </div>
              <p className="text-xs text-oslo-gray/60">No spam. Unsubscribe any time.</p>
            </form>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-oslo-gray/60 md:flex-row">
          <p>© 2026 Prasanna EL</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
