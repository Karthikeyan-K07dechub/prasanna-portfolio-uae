import Image from "next/image";
import Link from "next/link";
import { Linkedin, Youtube, Instagram } from "lucide-react";
import { images } from "@/lib/images";
import { PrimaryButton } from "./ui/Button";

const navLinks = [
  { label: "Speaking", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-6 md:px-[210px]">
      <div className="flex items-center justify-between rounded-2xl border border-black/5 bg-cod-gray/80 px-6 py-4 shadow-[inset_0_0_0_1px_rgba(115,26,202,0.05)] backdrop-blur-xl">
        <Link href="#hero" className="flex items-center gap-3">
          <Image
            src={images.avatar}
            alt="Prasanna EL logo"
            width={36}
            height={36}
            className="h-9 w-9 shrink-0 rounded-full bg-[#731aca] object-contain object-center p-1"
          />
          <span className="text-xl font-bold tracking-tight">PRASANNA EL</span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-black transition-colors hover:text-black"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-6 lg:flex">
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/prasanna-el-13a6b27a/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-black">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/prasanna_el/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-black">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://www.youtube.com/@PrasannaEL" target="_blank" rel="noopener noreferrer" className="text-black hover:text-black">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
          <PrimaryButton href="#contact" className="!h-auto !rounded-full !px-6 !py-3 !text-sm">
            Book Prasanna
          </PrimaryButton>
        </div>
      </div>
    </nav>
  );
}
