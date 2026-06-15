import { Github, Linkedin, Mail, Phone, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="container-px scroll-mt-24 py-20 sm:py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-surface/60 p-8 sm:p-14">
          <div
            className="glow-orb absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-accent/20"
            aria-hidden
          />
          <div
            className="glow-orb absolute -top-20 -left-10 h-56 w-56 rounded-full bg-cyan-glow/15"
            aria-hidden
          />

          <div className="relative max-w-2xl">
            <p className="section-label">
              <span className="h-px w-6 bg-accent-soft/60" />
              Contact
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let&apos;s build something together
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/60">
              I&apos;m actively looking for Software Engineer roles across frontend, backend, and AI. If you
              have an interesting problem — or just want to talk shop — my inbox is open.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-soft px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:shadow-accent/40"
              >
                <Mail size={16} />
                {profile.email}
              </a>
              <a
                href={profile.resumeUrl}
                download="Akshay-Mehta-Resume.pdf"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-white/30 hover:bg-white/10"
              >
                Download Resume
                <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-white/50">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <Phone size={16} />
                {profile.phone}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
