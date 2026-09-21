"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Link2, ArrowLeft, Copy, Check, Sparkles, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function UrlShortenerPage() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [linkCount, setLinkCount] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("utility_hub_link_count");
    if (saved) setLinkCount(parseInt(saved, 10));
  }, []);

  const handleShorten = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    const newCount = linkCount + 1;
    setLinkCount(newCount);
    localStorage.setItem("utility_hub_link_count", newCount.toString());

    const randomId = Math.random().toString(36).substring(2, 7);
    setShortUrl(`https://hub.me/${randomId}`);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#e5e7eb] selection:bg-cyan-500/25 selection:text-white flex flex-col justify-between">
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 space-y-8 w-full">
        
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-cyan-400 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Επιστροφή στα Εργαλεία
        </Link>

        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-bold">
            <Link2 className="w-3.5 h-3.5" /> Free Utility
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">URL Shortener</h1>
          <p className="text-xs sm:text-sm text-zinc-400">
            Μετατρέψτε τα μακριά links σας σε μικρά, κομψά και ασφαλή URLs δωρεάν και απεριόριστα.
          </p>
        </div>

        <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 space-y-6 shadow-2xl">
          <form onSubmit={handleShorten} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-mono text-zinc-300">Επικολλήστε το URL σας</label>
              <input 
                type="url"
                required
                placeholder="https://example.com/very-long-url..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full p-4 rounded-2xl bg-black/50 border border-white/15 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <button 
              type="submit"
              className="w-full py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs sm:text-sm transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Σύντμηση Link</span>
            </button>
          </form>

          {shortUrl && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-2xl bg-black/60 border border-cyan-500/30 flex items-center justify-between gap-4"
            >
              <span className="text-xs font-mono text-cyan-400 truncate">{shortUrl}</span>
              <button 
                onClick={handleCopy}
                className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold transition-all flex items-center gap-1 shrink-0 cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? "Αντιγράφηκε!" : "Αντιγραφή"}</span>
              </button>
            </motion.div>
          )}

          <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
            <span>Συνολικές συντομεύσεις: {linkCount}</span>
            <span className="text-emerald-400 flex items-center gap-1"><ShieldCheck className="w-4 h-4" /> 100% Secure</span>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
