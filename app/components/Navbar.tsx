"use client";

import Link from "next/link";
import { Zap, ExternalLink } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0b0c10]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <Zap className="w-5 h-5" />
          </div>
          <span className="font-extrabold text-sm sm:text-base tracking-tight text-white">
            Utility Hub <span className="text-cyan-400 font-mono text-xs">v2.0</span>
          </span>
        </Link>

        {/* LIVE CONNECTED BADGE & ECOSYSTEM LINK */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Live Connected</span>
          </div>

          <a 
            href="https://miltospapageorgiou.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/[0.05] border border-white/10 hover:border-cyan-500/50 text-xs font-mono text-zinc-300 hover:text-cyan-400 transition-all cursor-pointer shadow-lg"
          >
            <span>Ο Όμιλος / Μύλος</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>
    </header>
  );
}
