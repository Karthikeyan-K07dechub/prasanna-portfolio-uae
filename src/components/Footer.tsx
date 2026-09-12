import Image from "next/image";
import Link from "next/link";
import { Globe, Instagram, Linkedin, Youtube } from "lucide-react";
import { images } from "@/lib/images";

const pages = [
  { label: "About", href: "#about" }, { label: "Expertise", href: "#expertise" },
  { label: "Dechub", href: "#beyond" }, { label: "Selected Work", href: "#work" },
  { label: "Insights", href: "#insights" }, { label: "Contact", href: "#contact" },
];
const social = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/prasanna-el-13a6b27a/", icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/prasanna_el/", icon: Instagram },
  { label: "YouTube", href: "https://www.youtube.com/@PrasannaEL", icon: Youtube },
  { label: "Dechub", href: "https://www.dechub.in/", icon: Globe },
];

export function Footer() {
  return (
    <footer className="border-t border-black/15 bg-white py-8 text-black sm:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_0.8fr]">
          <div>
            <Link href="#hero" className="inline-flex items-center gap-3">
              <Image src={images.avatar} alt="Prasanna EL logo" width={32} height={32} className="h-8 w-8 shrink-0 rounded-full bg-brand object-contain p-1" />
              <span className="text-xl font-semibold">Prasanna EL</span>
            </Link>
            <p className="mt-4 max-w-sm text-base leading-7">Founder of Dechub. Bringing design, marketing, and technology together to help brands grow.</p>
            <a href="mailto:prasanna@dechub.in" className="mt-4 inline-block text-sm underline underline-offset-4">prasanna@dechub.in</a>
          </div>
          <div><h2 className="text-base font-semibold">Explore</h2><ul className="mt-4 space-y-3">{pages.map(item => <li key={item.href}><Link href={item.href} className="text-sm hover:underline">{item.label}</Link></li>)}</ul></div>
          <div><h2 className="text-base font-semibold">Connect</h2><ul className="mt-4 space-y-3">{social.map(item => <li key={item.label}><a href={item.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm hover:underline"><item.icon className="h-4 w-4" aria-hidden="true" />{item.label}</a></li>)}</ul></div>
        </div>
        <p className="mt-10 border-t border-black/15 pt-6 text-sm">© {new Date().getFullYear()} Prasanna EL</p>
      </div>
    </footer>
  );
}
