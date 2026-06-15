import { ArrowUpRight } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <Section
      id="experience"
      label="Experience"
      title="Where I've worked"
      intro="From space-grade ML research to healthcare AI platforms and production client work."
    >
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-white/10 to-transparent sm:left-[9px]" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <Reveal key={exp.company} delay={i * 0.05}>
              <div className="relative pl-8 sm:pl-12">
                {/* Dot */}
                <span
                  className={`absolute left-0 top-1.5 grid h-4 w-4 place-items-center rounded-full border-2 sm:h-5 sm:w-5 ${
                    exp.current
                      ? "border-accent bg-accent/20"
                      : "border-white/30 bg-bg"
                  }`}
                >
                  {exp.current && <span className="h-1.5 w-1.5 rounded-full bg-accent" />}
                </span>

                <div className="glass card-hover rounded-2xl p-6">
                  <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                      <p className="text-accent-soft">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-xs text-white/50">{exp.period}</p>
                      <p className="text-xs text-white/40">{exp.location}</p>
                    </div>
                  </div>

                  {exp.links && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {exp.links.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-cyan-glow transition-colors hover:border-cyan-glow/40 hover:bg-cyan-glow/5"
                        >
                          {l.label}
                          <ArrowUpRight size={12} />
                        </a>
                      ))}
                    </div>
                  )}

                  <ul className="mt-4 space-y-2.5">
                    {exp.points.map((p, idx) => (
                      <li key={idx} className="flex gap-3 text-sm leading-relaxed text-white/65">
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent-soft/70" />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.stack.map((s) => (
                      <span key={s} className="chip">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
