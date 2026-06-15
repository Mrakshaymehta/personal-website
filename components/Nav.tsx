"use client";

import { useEffect, useState } from "react";
import { Menu, X, FileText } from "lucide-react";
import { navLinks, profile } from "@/lib/data";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-white/[0.06] bg-bg/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="container-px flex h-16 items-center justify-between">
        <a href="#top" className="group flex items-center gap-2 font-mono text-sm font-semibold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-accent to-cyan-glow text-bg">
            AM
          </span>
          <span className="text-white/90 transition-colors group-hover:text-white">akshay.dev</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm text-white/60 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            download="Akshay-Mehta-Resume.pdf"
            className="ml-2 inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-all hover:border-accent/60 hover:bg-accent/10"
          >
            <FileText size={15} />
            Resume
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg text-white/80 transition-colors hover:bg-white/5 md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/[0.06] bg-bg/95 backdrop-blur-xl md:hidden">
          <div className="container-px flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.resumeUrl}
              download="Akshay-Mehta-Resume.pdf"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium text-white"
            >
              <FileText size={15} />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
