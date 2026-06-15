"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/** Syntax-highlight token helpers (Tailwind text colors) */
const T = {
  key: "text-[#7dd3fc]", // light blue — keys
  str: "text-[#a5e887]", // green — strings
  kw: "text-[#c084fc]", // purple — keywords
  fn: "text-[#fbbf24]", // amber — functions
  num: "text-[#fb923c]", // orange — numbers
  com: "text-white/35", // comments
  punc: "text-white/50", // punctuation
  var: "text-[#f8fafc]", // variables
};

function Dot({ color }: { color: string }) {
  return <span className={`h-3 w-3 rounded-full ${color}`} />;
}

export default function CodeWindow({ filename = "akshay.ts" }: { filename?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full"
      style={{ perspective: 1000 }}
    >
      {/* glow behind window */}
      <div className="glow-orb absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-accent/20 to-cyan-glow/10" aria-hidden />

      <div className="overflow-hidden rounded-xl border border-white/[0.1] bg-[#0c0c12] shadow-2xl shadow-black/50">
        {/* Title bar */}
        <div className="flex items-center gap-3 border-b border-white/[0.06] bg-white/[0.02] px-4 py-3">
          <div className="flex items-center gap-2">
            <Dot color="bg-[#ff5f57]" />
            <Dot color="bg-[#febc2e]" />
            <Dot color="bg-[#28c840]" />
          </div>
          <div className="flex items-center gap-2 text-xs text-white/40">
            <span className="rounded-md bg-white/[0.04] px-2.5 py-1 font-mono text-white/70">
              {filename}
            </span>
          </div>
        </div>

        {/* Code body */}
        <div className="overflow-x-auto p-5 font-mono text-[13px] leading-6 sm:text-sm">
          <pre className="grid grid-cols-[auto_1fr] gap-x-4">
            <code className="select-none text-right text-white/20">
              {Array.from({ length: 16 }, (_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </code>
            <code className="whitespace-pre">
              <Line>
                <S c={T.com}>{"// Software Engineer — Frontend · Backend · AI"}</S>
              </Line>
              <Line>
                <S c={T.kw}>const</S> <S c={T.var}>akshay</S> <S c={T.punc}>=</S>{" "}
                <S c={T.punc}>{"{"}</S>
              </Line>
              <Line indent={1}>
                <S c={T.key}>name</S>
                <S c={T.punc}>:</S> <S c={T.str}>{"'Akshay Mehta'"}</S>
                <S c={T.punc}>,</S>
              </Line>
              <Line indent={1}>
                <S c={T.key}>role</S>
                <S c={T.punc}>:</S> <S c={T.str}>{"'Software Engineer'"}</S>
                <S c={T.punc}>,</S>
              </Line>
              <Line indent={1}>
                <S c={T.key}>based</S>
                <S c={T.punc}>:</S> <S c={T.str}>{"'Bengaluru, India'"}</S>
                <S c={T.punc}>,</S>
              </Line>
              <Line indent={1}>
                <S c={T.key}>focus</S>
                <S c={T.punc}>:</S> <S c={T.punc}>[</S>
                <S c={T.str}>{"'frontend'"}</S>
                <S c={T.punc}>,</S> <S c={T.str}>{"'backend'"}</S>
                <S c={T.punc}>,</S> <S c={T.str}>{"'ai-agents'"}</S>
                <S c={T.punc}>],</S>
              </Line>
              <Line indent={1}>
                <S c={T.key}>stack</S>
                <S c={T.punc}>:</S> <S c={T.punc}>[</S>
                <S c={T.str}>{"'React'"}</S>
                <S c={T.punc}>,</S> <S c={T.str}>{"'Next.js'"}</S>
                <S c={T.punc}>,</S> <S c={T.str}>{"'Spring Boot'"}</S>
                <S c={T.punc}>,</S>
              </Line>
              <Line indent={3}>
                <S c={T.str}>{"'Node.js'"}</S>
                <S c={T.punc}>,</S> <S c={T.str}>{"'FastAPI'"}</S>
                <S c={T.punc}>,</S> <S c={T.str}>{"'Python'"}</S>
                <S c={T.punc}>],</S>
              </Line>
              <Line indent={1}>
                <S c={T.key}>ships</S>
                <S c={T.punc}>:</S> <S c={T.kw}>async</S>{" "}
                <S c={T.punc}>(</S>
                <S c={T.var}>idea</S>
                <S c={T.punc}>)</S> <S c={T.punc}>{"=>"}</S> <S c={T.punc}>{"{"}</S>
              </Line>
              <Line indent={2}>
                <S c={T.kw}>const</S> <S c={T.var}>product</S> <S c={T.punc}>=</S>{" "}
                <S c={T.kw}>await</S> <S c={T.fn}>build</S>
                <S c={T.punc}>(</S>
                <S c={T.var}>idea</S>
                <S c={T.punc}>)</S>
                <S c={T.punc}>;</S>
              </Line>
              <Line indent={2}>
                <S c={T.kw}>return</S> <S c={T.var}>product</S>
                <S c={T.punc}>.</S>
                <S c={T.fn}>withAI</S>
                <S c={T.punc}>().</S>
                <S c={T.fn}>shipToProd</S>
                <S c={T.punc}>();</S>
              </Line>
              <Line indent={1}>
                <S c={T.punc}>{"},"}</S>
              </Line>
              <Line indent={1}>
                <S c={T.key}>rank</S>
                <S c={T.punc}>:</S> <S c={T.str}>{"'Top 4% — Flipkart GRID 6.0'"}</S>
                <S c={T.punc}>,</S>
              </Line>
              <Line indent={1}>
                <S c={T.key}>openToWork</S>
                <S c={T.punc}>:</S> <S c={T.kw}>true</S>
                <S c={T.punc}>,</S>
              </Line>
              <Line>
                <S c={T.punc}>{"};"}</S>
                <span className="ml-1 inline-block h-4 w-[8px] translate-y-[2px] animate-pulse bg-accent-soft/80" />
              </Line>
            </code>
          </pre>
        </div>
      </div>
    </motion.div>
  );
}

function Line({ children, indent = 0 }: { children: ReactNode; indent?: number }) {
  return <div style={{ paddingLeft: `${indent * 1.25}rem` }}>{children}</div>;
}

function S({ c, children }: { c: string; children: ReactNode }) {
  return <span className={c}>{children}</span>;
}
