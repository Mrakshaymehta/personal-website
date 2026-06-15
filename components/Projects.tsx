import { ArrowUpRight } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <Section
      id="projects"
      label="Projects"
      title="Things I've built"
      intro="Two of my favourite builds — both put LLM agents to work behind a real product surface."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.08}>
            <article className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-surface/60 transition-all duration-300 hover:border-white/20">
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                aria-hidden
              />
              {/* IDE window chrome */}
              <div className="relative flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.02] px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                <span className="ml-2 font-mono text-xs text-white/40">
                  {project.name.toLowerCase()}.tsx
                </span>
              </div>
              <div className="relative p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                    <p className="mt-1 text-sm font-medium text-accent-soft">{project.tagline}</p>
                  </div>
                  {project.links?.[0] && (
                    <a
                      href={project.links[0].href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.name}`}
                      className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl border border-white/10 text-white/60 transition-all hover:border-white/30 hover:text-white"
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  )}
                </div>

                <p className="mt-4 text-[15px] leading-relaxed text-white/65">{project.description}</p>

                <ul className="mt-5 space-y-2.5">
                  {project.highlights.map((h, idx) => (
                    <li key={idx} className="flex gap-3 text-sm leading-relaxed text-white/60">
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-cyan-glow/70" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
