import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionProps = {
  id: string;
  label: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

export default function Section({ id, label, title, intro, children }: SectionProps) {
  return (
    <section id={id} className="container-px scroll-mt-24 py-20 sm:py-28">
      <Reveal>
        <p className="section-label">
          <span className="text-white/30">$</span> cat {label.toLowerCase()}.md
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span className="text-accent-soft">#</span> {title}
        </h2>
        {intro && <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60">{intro}</p>}
      </Reveal>
      <div className="mt-12">{children}</div>
    </section>
  );
}
