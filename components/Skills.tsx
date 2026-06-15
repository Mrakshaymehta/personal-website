import Section from "./Section";
import Reveal from "./Reveal";
import { skillGroups } from "@/lib/data";

const T = {
  key: "text-[#7dd3fc]",
  str: "text-[#a5e887]",
  kw: "text-[#c084fc]",
  punc: "text-white/50",
  com: "text-white/35",
  var: "text-[#f8fafc]",
};

// camelCase keys for each group, aligned to skillGroups order
const keys = ["languages", "backend", "frontend", "databases", "cloud", "ai"];

export default function Skills() {
  return (
    <Section
      id="skills"
      label="Skills"
      title="My toolbox"
      intro="The languages, frameworks, and platforms I reach for to ship reliable software — as I'd declare them in code."
    >
      <Reveal>
        <div className="overflow-hidden rounded-xl border border-white/[0.1] bg-[#0c0c12] shadow-2xl shadow-black/40">
          {/* title bar */}
          <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.02] px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            <span className="ml-2 font-mono text-xs text-white/40">stack.ts</span>
          </div>

          {/* code */}
          <div className="overflow-x-auto p-5 font-mono text-[13px] leading-7 sm:text-sm">
            <pre className="grid grid-cols-[auto_1fr] gap-x-5">
              <code className="select-none text-right text-white/20">
                {Array.from({ length: skillGroups.length + 3 }, (_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </code>
              <code className="whitespace-pre-wrap">
                <div>
                  <span className={T.com}>{"// what I build with"}</span>
                </div>
                <div>
                  <span className={T.kw}>export const</span>{" "}
                  <span className={T.var}>stack</span> <span className={T.punc}>=</span>{" "}
                  <span className={T.punc}>{"{"}</span>
                </div>
                {skillGroups.map((group, gi) => (
                  <div key={group.label} className="pl-5">
                    <span className={T.key}>{keys[gi] ?? "misc"}</span>
                    <span className={T.punc}>: [</span>
                    {group.items.map((item, ii) => (
                      <span key={item}>
                        <span className={`${T.str} rounded transition-colors hover:bg-white/5`}>
                          {`'${item}'`}
                        </span>
                        {ii < group.items.length - 1 && <span className={T.punc}>, </span>}
                      </span>
                    ))}
                    <span className={T.punc}>],</span>
                  </div>
                ))}
                <div>
                  <span className={T.punc}>{"};"}</span>
                </div>
              </code>
            </pre>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
