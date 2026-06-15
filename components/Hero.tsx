"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, MapPin, Terminal } from "lucide-react";
import { profile, stats } from "@/lib/data";
import CodeWindow from "./CodeWindow";
import Typewriter from "./Typewriter";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-24">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg" aria-hidden />
      <div className="glow-orb absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-accent/30" aria-hidden />
      <div className="glow-orb absolute -top-20 right-1/4 h-64 w-64 rounded-full bg-cyan-glow/20" aria-hidden />

      <div className="container-px relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* Left: copy */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 font-mono text-xs text-white/70"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            available for hire
          </motion.div>

          <motion.div variants={item} className="mb-3 flex items-center gap-2 font-mono text-sm text-accent-soft">
            <Terminal size={15} />
            <span className="text-white/40">$</span> whoami
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-3 flex h-9 items-center font-mono text-xl text-white/80 sm:text-2xl"
          >
            <span className="text-accent-soft">&gt;&nbsp;</span>
            <Typewriter
              words={[
                "Full-Stack Developer",
                "Backend Engineer",
                "AI / LLM Engineer",
                "Frontend Developer",
                "Problem Solver",
              ]}
            />
          </motion.div>

          <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-white/60">
            {profile.summary}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-soft px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:shadow-accent/40"
            >
              View my work
              <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-white/30 hover:bg-white/10"
            >
              Get in touch
            </a>
            <div className="ml-1 flex items-center gap-1">
              <IconLink href={profile.socials.github} label="GitHub">
                <Github size={18} />
              </IconLink>
              <IconLink href={profile.socials.linkedin} label="LinkedIn">
                <Linkedin size={18} />
              </IconLink>
              <IconLink href={`mailto:${profile.email}`} label="Email">
                <Mail size={18} />
              </IconLink>
            </div>
          </motion.div>

          <motion.div variants={item} className="mt-4 flex items-center gap-2 font-mono text-sm text-white/40">
            <MapPin size={14} />
            {profile.location}
          </motion.div>
        </motion.div>

        {/* Right: code window */}
        <div className="lg:pl-4">
          <CodeWindow />
        </div>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="container-px relative mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4"
      >
        {stats.map((s) => (
          <div key={s.label} className="glass card-hover rounded-2xl p-5">
            <div className="text-2xl font-bold gradient-text sm:text-3xl">{s.value}</div>
            <div className="mt-1 text-sm font-medium text-white/80">{s.label}</div>
            <div className="mt-0.5 text-xs text-white/40">{s.sub}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid h-11 w-11 place-items-center rounded-xl text-white/60 transition-all hover:bg-white/5 hover:text-white"
    >
      {children}
    </a>
  );
}
