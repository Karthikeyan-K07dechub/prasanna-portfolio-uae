"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Youtube, Instagram, Menu, X } from "lucide-react";
import { images } from "@/lib/images";
import { PrimaryButton } from "./ui/Button";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const dismiss = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    const outside = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setMenuOpen(false);
    };
    const resize = () => { if (window.innerWidth >= 1024) setMenuOpen(false); };
    window.addEventListener("keydown", dismiss);
    window.addEventListener("pointerdown", outside);
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("keydown", dismiss);
      window.removeEventListener("pointerdown", outside);
      window.removeEventListener("resize", resize);
    };
  }, [menuOpen]);

  return (
    <nav ref={navRef} aria-label="Main navigation" className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-2xl border border-black/5 bg-cod-gray/95 px-3 py-3 shadow-[inset_0_0_0_1px_rgba(115,26,202,0.05)] backdrop-blur-xl sm:px-6 sm:py-4">
        <Link href="#hero" onClick={() => setMenuOpen(false)} className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Image
            src={images.avatar}
            alt="Prasanna EL logo"
            width={36}
            height={36}
            className="h-9 w-9 shrink-0 rounded-full bg-[#731aca] object-contain object-center p-1"
          />
          <span className="whitespace-nowrap text-base font-bold tracking-tight sm:text-xl">PRASANNA EL</span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex min-h-11 items-center text-sm font-medium text-black transition-colors hover:text-black"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex items-center gap-1">
            <a href="https://www.linkedin.com/in/prasanna-el-13a6b27a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="inline-flex h-11 w-11 items-center justify-center text-black">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/prasanna_el/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="inline-flex h-11 w-11 items-center justify-center text-black">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://www.youtube.com/@PrasannaEL" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="inline-flex h-11 w-11 items-center justify-center text-black">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
          <PrimaryButton href="#contact" className="!h-auto !rounded-full !px-6 !py-3 !text-sm">
            Book Prasanna
          </PrimaryButton>
        </div>
        <button ref={toggleRef} type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)} className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-black/15 focus-visible:outline-2 focus-visible:outline-offset-2 lg:hidden">
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {menuOpen && (
        <div id="mobile-navigation" className="mx-auto mt-2 max-h-[calc(100dvh-7rem)] max-w-6xl overflow-y-auto rounded-2xl border border-black/15 bg-white p-4 shadow-lg lg:hidden">
          {navLinks.map(link => <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="flex min-h-11 items-center rounded-lg px-3 font-medium hover:bg-brand/5">{link.label}</Link>)}
          <div className="my-3 flex flex-wrap gap-2 border-t border-black/10 pt-3">
            {[
              { label: "LinkedIn", href: "https://www.linkedin.com/in/prasanna-el-13a6b27a/", Icon: Linkedin },
              { label: "Instagram", href: "https://www.instagram.com/prasanna_el/", Icon: Instagram },
              { label: "YouTube", href: "https://www.youtube.com/@PrasannaEL", Icon: Youtube },
            ].map(({ label, href, Icon }) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-black/15"><Icon className="h-5 w-5" /></a>)}
          </div>
          <Link href="#contact" onClick={() => setMenuOpen(false)} className="btn-primary w-full">Book Prasanna</Link>
        </div>
      )}
    </nav>
  );
}
