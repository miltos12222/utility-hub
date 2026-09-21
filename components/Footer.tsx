export default function Footer() {
  return (
    <footer className="py-12 px-6 text-center text-xs font-mono text-zinc-500 border-t border-white/10 max-w-6xl mx-auto w-full space-y-4">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a 
          href="https://www.miltospapageorgiou.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-cyan-400 hover:text-cyan-300 font-bold transition-all inline-flex items-center gap-2"
        >
          ☕ Buy me a Coffee / Support
        </a>
      </div>
      
      <p className="flex items-center justify-center gap-2">
        <span>Crafted with passion by</span>
        <a 
          href="https://www.miltospapageorgiou.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-300 underline font-bold transition-colors"
        >
          Miltos Papageorgiou
        </a>
        <span className="text-zinc-600">(Ref: miltos12222)</span>
      </p>
      
      <p className="text-[11px] text-zinc-600">
        © 2030 Utility Hub • Open-Source Micro-SaaS • Zero Ads, Zero Paywalls.
      </p>
    </footer>
  );
}
