import { Heart, ExternalLink, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#0b0c10] py-12 px-4 sm:px-6 lg:px-8 mt-20 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        
        <div className="space-y-1">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-mono text-zinc-400">
            <span>Crafted with passion by</span>
            <span className="text-cyan-400 font-bold">Miltos Papageorgiou</span>
          </div>
          <p className="text-[11px] text-zinc-600 font-mono">
            © 2030 Utility Hub • Open-Source Micro-SaaS • Zero Ads, Zero Paywalls.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a 
            href="https://miltospapageorgiou.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/40 text-xs font-mono text-zinc-300 hover:text-cyan-400 transition-all shadow-md"
          >
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Οικοσύστημα Παπαγεωργίου</span>
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>
        </div>

      </div>
    </footer>
  );
}
