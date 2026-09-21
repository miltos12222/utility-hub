"use client";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0b0c10]/80 backdrop-blur-md border-b border-white/10 px-6 py-4 flex items-center justify-center">
      <div className="max-w-6xl w-full flex items-center justify-between">
        <a href="/" className="font-extrabold text-base sm:text-lg bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent flex items-center gap-2">
          ⚡ Utility Hub <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">v2.0</span>
        </a>

        <div className="flex items-center gap-4">
          <a 
            href="https://www.miltospapageorgiou.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs font-mono text-cyan-400 hover:underline"
          >
            miltospapageorgiou.com
          </a>
        </div>
      </div>
    </header>
  );
}
