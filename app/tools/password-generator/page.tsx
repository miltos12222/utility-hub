"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Lock, ArrowLeft, Copy, Check, Sparkles, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function PasswordGeneratorPage() {
  const [password, setPassword] = useState("P@ssw0rd2030!");
  const [length, setLength] = useState(16);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [copied, setCopied] = useState(false);

  const generatePassword = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" + (includeSymbols ? "!@#$%^&*()_+" : "");
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(result);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold">
            <Lock className="w-3.5 h-3.5" /> Security Utility
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Password Generator</h1>
          <p className="text-xs sm:text-sm text-zinc-400">
            Δημιουργήστε ισχυρούς και απόλυτα ασφαλείς κωδικούς πρόσβασης με προσαρμοσμένα κριτήρια.
          </p>
        </div>

        <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 space-y-6 shadow-2xl">
          
          <div className="p-4 rounded-2xl bg-black/60 border border-emerald-500/30 flex items-center justify-between gap-4">
            <span className="text-sm font-mono text-emerald-400 tracking-wider break-all">{password}</span>
            <button 
              onClick={handleCopy}
              className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold transition-all flex items-center gap-1 shrink-0 cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? "Αντιγράφηκε!" : "Αντιγραφή"}</span>
            </button>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono text-zinc-400">
                <span>Μήκος Κωδικού: {length}</span>
              </div>
              <input 
                type="range"
                min="8"
                max="32"
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
            </div>

            <label className="flex items-center gap-3 text-xs font-mono text-zinc-300 cursor-pointer">
              <input 
                type="checkbox"
                checked={includeSymbols}
                onChange={(e) => setIncludeSymbols(e.target.checked)}
                className="w-4 h-4 rounded accent-emerald-500 cursor-pointer"
              />
              <span>Συμπερίληψη Ειδικών Χαρακτήρων (!@#$...)</span>
            </label>

            <button 
              type="button"
              onClick={generatePassword}
              className="w-full py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs sm:text-sm transition-all shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Δημιουργία Νέου Κωδικού</span>
            </button>
          </div>

          <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
            <span>Κρυπτογραφική ασφάλεια</span>
            <span className="text-emerald-400 flex items-center gap-1"><ShieldCheck className="w-4 h-4" /> Client-Side Only</span>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
