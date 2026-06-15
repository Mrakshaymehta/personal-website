"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import { profile, projects, experiences, skillGroups, education } from "@/lib/data";

type Line = { type: "input" | "output"; content: React.ReactNode };

const HELP = [
  ["help", "show available commands"],
  ["about", "who is Akshay?"],
  ["skills", "list the tech stack"],
  ["projects", "see what I've built"],
  ["experience", "where I've worked"],
  ["education", "my background"],
  ["socials", "find me online"],
  ["resume", "download my resume"],
  ["clear", "clear the terminal"],
];

export default function Terminal() {
  const [history, setHistory] = useState<Line[]>([
    {
      type: "output",
      content: (
        <div className="text-white/55">
          Welcome to akshay.dev — type <Cmd>help</Cmd> to get started.
        </div>
      ),
    },
  ]);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const print = (content: React.ReactNode) =>
    setHistory((h) => [...h, { type: "output", content }]);

  const run = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    setHistory((h) => [
      ...h,
      { type: "input", content: raw },
    ]);
    if (cmd) setCmdHistory((c) => [...c, raw]);

    switch (cmd) {
      case "":
        break;
      case "help":
        print(
          <div className="space-y-0.5">
            {HELP.map(([c, d]) => (
              <div key={c} className="flex gap-3">
                <Cmd>{c.padEnd(11)}</Cmd>
                <span className="text-white/50">{d}</span>
              </div>
            ))}
          </div>
        );
        break;
      case "about":
        print(<div className="max-w-2xl text-white/70">{profile.summary}</div>);
        break;
      case "whoami":
        print(
          <span className="text-white/70">
            {profile.name} — {profile.role} · {profile.tagline}
          </span>
        );
        break;
      case "skills":
        print(
          <div className="space-y-1">
            {skillGroups.map((g) => (
              <div key={g.label} className="flex flex-wrap gap-x-2">
                <span className="text-cyan-glow">{g.label}:</span>
                <span className="text-white/70">{g.items.join(", ")}</span>
              </div>
            ))}
          </div>
        );
        break;
      case "projects":
        print(
          <div className="space-y-1.5">
            {projects.map((p) => (
              <div key={p.name}>
                <span className="text-accent-soft">{p.name}</span>{" "}
                <span className="text-white/40">— {p.tagline}</span>
                <div className="text-white/50">
                  {"   "}stack: {p.stack.join(", ")}
                </div>
              </div>
            ))}
            <div className="text-white/40">→ scroll up to the Projects section for details.</div>
          </div>
        );
        break;
      case "experience":
        print(
          <div className="space-y-1">
            {experiences.map((e) => (
              <div key={e.company}>
                <span className="text-accent-soft">{e.company}</span>{" "}
                <span className="text-white/40">
                  — {e.role} ({e.period})
                </span>
              </div>
            ))}
          </div>
        );
        break;
      case "education":
        print(
          <div className="text-white/70">
            <span className="text-accent-soft">{education.school}</span>
            <div className="text-white/50">
              {education.degree} · {education.period}
            </div>
          </div>
        );
        break;
      case "socials":
        print(
          <div className="space-y-0.5">
            <div>
              <span className="text-cyan-glow">github  </span>
              <a className="text-white/70 underline-offset-2 hover:underline" href={profile.socials.github} target="_blank" rel="noreferrer">
                {profile.socials.github}
              </a>
            </div>
            <div>
              <span className="text-cyan-glow">linkedin</span>{" "}
              <a className="text-white/70 underline-offset-2 hover:underline" href={profile.socials.linkedin} target="_blank" rel="noreferrer">
                {profile.socials.linkedin}
              </a>
            </div>
            <div>
              <span className="text-cyan-glow">email   </span>
              <a className="text-white/70 underline-offset-2 hover:underline" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </div>
          </div>
        );
        break;
      case "resume":
        print(<span className="text-emerald-400">↓ downloading resume…</span>);
        if (typeof window !== "undefined") {
          const a = document.createElement("a");
          a.href = profile.resumeUrl;
          a.download = "Akshay-Mehta-Resume.pdf";
          a.click();
        }
        break;
      case "sudo":
      case "sudo su":
        print(<span className="text-amber-300">Nice try. You already have root to my portfolio 😎</span>);
        break;
      case "ls":
        print(
          <span className="text-white/70">
            about/ experience/ projects/ skills/ contact/ resume.pdf
          </span>
        );
        break;
      case "clear":
        setHistory([]);
        return;
      default:
        print(
          <span className="text-red-400/90">
            command not found: {cmd} — type <Cmd>help</Cmd> for options
          </span>
        );
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      run(input);
      setInput("");
      setHistIdx(-1);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistory.length) {
        const idx = histIdx < 0 ? cmdHistory.length - 1 : Math.max(0, histIdx - 1);
        setHistIdx(idx);
        setInput(cmdHistory[idx]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (histIdx >= 0) {
        const idx = histIdx + 1;
        if (idx >= cmdHistory.length) {
          setHistIdx(-1);
          setInput("");
        } else {
          setHistIdx(idx);
          setInput(cmdHistory[idx]);
        }
      }
    }
  };

  return (
    <section id="terminal" className="container-px scroll-mt-24 py-20 sm:py-28">
      <Reveal>
        <p className="section-label">
          <span className="text-white/30">$</span> ./explore.sh
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span className="text-accent-soft">#</span> Explore via terminal
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60">
          Prefer the command line? So do I. Type a command below — start with{" "}
          <span className="font-mono text-accent-soft">help</span>.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        <div
          onClick={() => inputRef.current?.focus()}
          className="overflow-hidden rounded-xl border border-white/[0.1] bg-[#0a0a0f] shadow-2xl shadow-black/40"
        >
          {/* title bar */}
          <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.02] px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            <span className="ml-2 font-mono text-xs text-white/40">akshay@portfolio: ~</span>
          </div>

          {/* body */}
          <div
            ref={scrollRef}
            className="h-80 overflow-y-auto p-4 font-mono text-[13px] leading-relaxed sm:text-sm"
          >
            {history.map((line, i) =>
              line.type === "input" ? (
                <div key={i} className="flex gap-2">
                  <Prompt />
                  <span className="text-white/90">{line.content}</span>
                </div>
              ) : (
                <div key={i} className="mb-2 mt-0.5">
                  {line.content}
                </div>
              )
            )}

            {/* live input */}
            <div className="flex items-center gap-2">
              <Prompt />
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                spellCheck={false}
                autoComplete="off"
                aria-label="Terminal input"
                className="flex-1 bg-transparent text-white/90 caret-accent-soft outline-none placeholder:text-white/25"
                placeholder="type a command…"
              />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Prompt() {
  return (
    <span className="flex-shrink-0 select-none">
      <span className="text-emerald-400">akshay</span>
      <span className="text-white/40">@</span>
      <span className="text-cyan-glow">portfolio</span>
      <span className="text-white/40">:~$</span>
    </span>
  );
}

function Cmd({ children }: { children: React.ReactNode }) {
  return <span className="whitespace-pre text-accent-soft">{children}</span>;
}
