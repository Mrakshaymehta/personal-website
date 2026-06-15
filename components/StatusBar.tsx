"use client";

import { GitBranch, Check, Circle, Bell, Wifi } from "lucide-react";

export default function StatusBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 hidden h-7 items-center justify-between border-t border-white/[0.06] bg-[#0a0a10]/95 px-3 font-mono text-[11px] text-white/55 backdrop-blur-md sm:flex">
      {/* Left cluster */}
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1.5 rounded bg-accent/20 px-2 py-0.5 text-accent-soft">
          <GitBranch size={12} />
          main
        </span>
        <span className="flex items-center gap-1 transition-colors hover:text-white">
          <Check size={12} className="text-emerald-400" /> 0 errors
        </span>
        <span className="hidden items-center gap-1 md:flex">
          <span className="text-amber-300/80">⚠</span> 0 warnings
        </span>
        <span className="hidden items-center gap-1.5 lg:flex">
          <Wifi size={12} className="text-emerald-400" /> deployed
        </span>
      </div>

      {/* Right cluster */}
      <div className="flex items-center gap-3">
        <span className="hidden md:inline">TypeScript React</span>
        <span className="hidden lg:inline">UTF-8</span>
        <span className="hidden lg:inline">LF</span>
        <span className="hidden md:inline">Spaces: 2</span>
        <span className="flex items-center gap-1.5 text-emerald-400">
          <Circle size={8} className="fill-emerald-400" /> available for work
        </span>
        <Bell size={12} className="hidden text-white/40 sm:inline" />
      </div>
    </div>
  );
}
