import { GraduationCap, Sparkles, Trophy } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { education, achievements } from "@/lib/data";

export default function About() {
  return (
    <Section
      id="about"
      label="About"
      title="Engineer across the whole stack"
      intro="I like owning a problem end-to-end — from the database and APIs to the interface a user actually touches — and increasingly, the AI layer that makes a product feel intelligent."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <Reveal className="lg:col-span-2">
          <div className="glass card-hover h-full rounded-2xl p-7">
            <div className="mb-4 inline-flex items-center gap-2 text-accent-soft">
              <Sparkles size={18} />
              <span className="text-sm font-semibold">What I bring</span>
            </div>
            <div className="space-y-4 text-[15px] leading-relaxed text-white/70">
              <p>
                My path is a little unusual — an Electrical &amp; Electronics degree from{" "}
                <span className="text-white">RV College of Engineering</span>, an ML research internship at{" "}
                <span className="text-white">ISRO</span>, and then a hard pivot into software where I&apos;ve
                shipped production websites and AI-agent systems.
              </p>
              <p>
                That mix means I&apos;m comfortable reasoning about systems from first principles — control loops
                and ML pipelines at ISRO, scalable workflow and compliance backends at{" "}
                <span className="text-white">Skypoint</span>, and full ownership of real client products as a
                freelancer.
              </p>
              <p>
                Lately I&apos;m most excited by <span className="text-white">LLM tool-calling agents, RAG, and
                evaluation harnesses</span> — building AI that&apos;s reliable enough to put in front of real
                users, with safety and fallbacks designed in from the start.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col gap-6">
          <Reveal delay={0.1}>
            <div className="glass card-hover rounded-2xl p-6">
              <div className="mb-3 inline-flex items-center gap-2 text-cyan-glow">
                <GraduationCap size={18} />
                <span className="text-sm font-semibold">Education</span>
              </div>
              <h3 className="font-semibold text-white">{education.school}</h3>
              <p className="mt-1 text-sm text-white/60">{education.degree}</p>
              <p className="mt-1 font-mono text-xs text-white/40">{education.period}</p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="glass card-hover rounded-2xl p-6">
              <div className="mb-3 inline-flex items-center gap-2 text-amber-300">
                <Trophy size={18} />
                <span className="text-sm font-semibold">Achievement</span>
              </div>
              {achievements.map((a) => (
                <div key={a.title}>
                  <h3 className="font-semibold text-white">{a.title}</h3>
                  <p className="mt-1 text-sm text-white/60">{a.detail}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
