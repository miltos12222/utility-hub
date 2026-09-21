"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, Download, Sparkles, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CoverLetterPage() {
  const [role, setRole] = useState("Senior Frontend Developer");
  const [company, setCompany] = useState("Tech Company");
  const [generatedLetter, setGeneratedLetter] = useState("Αγαπητή ομάδα,\nΜε ενδιαφέρει ιδιαίτερα η θέση εργασίας σας και θεωρώ ότι η εμπειρία μου ταιριάζει απόλυτα στις απαιτήσεις σας.");
  const [isGenerating, setIsGenerating] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const handleGenerateAI = () => {
    setIsGenerating(true);
    setSuccessMessage(false);
    setTimeout(() => {
      setIsGenerating(false);
      setGeneratedLetter(`Αξιότιμοι υπεύθυνοι προσλήψεων στην ${company},\n\nΜεγάλος ενθουσιασμός με διακατέχει για την ανοιχτή θέση ${role}. Με πολυετή εμπειρία σε Next.js, TypeScript και cloud architectures, είμαι έτοιμος να συμβάλω άμεσα στην επιτυχία της ομάδας σας.`);
      setSuccessMessage(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#e5e7eb] selection:bg-cyan-500/25 selection:text-white flex flex-col justify-between">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 space-y-8 w-full">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-cyan-400 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Επιστροφή στα Εργαλεία
        </Link>
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-mono font-bold">
            <Sparkles className="w-3.5 h-3.5" /> AI Cover Letter Generator (100% Free)
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">AI Cover Letter</h1>
          <p className="text-xs sm:text-sm text-zinc-400">Δημιουργήστε προσαρμοσμένη συνοδευτική επιστολή εντελώς δωρεάν.</p>
        </div>

        <AnimatePresence>
          {successMessage && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-center font-mono text-xs font-bold flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>✨ Η επιστολή δημιουργήθηκε επιτυχώς!</span>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 p-6 rounded-3xl bg-white/[0.03] border border-white/10 space-y-5 shadow-2xl">
            <h2 className="text-sm font-bold font-mono text-zinc-300">Στοιχεία Αίτησης</h2>
            <div className="space-y-1">
              <label className="text-[11px] font-mono text-zinc-400">Θέση Εργασίας</label>
              <input type="text" value={role} onChange={(e) => setRole(e.target.value)} className="w-full p-3 rounded-xl bg-black/50 border border-white/15 text-xs text-white" />
            </div>
            <div className="space-y-1">
              <label className="text-[11px] font-mono text-zinc-400">Εταιρεία</label>
              <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} className="w-full p-3 rounded-xl bg-black/50 border border-white/15 text-xs text-white" />
            </div>
            <button type="button" onClick={handleGenerateAI} disabled={isGenerating} className="w-full py-4 rounded-2xl bg-pink-500 hover:bg-pink-400 text-black font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer">
              <Sparkles className="w-4 h-4" />
              <span>{isGenerating ? "Generating..." : "Δημιουργία Επιστολής"}</span>
            </button>
          </div>

          <div className="lg:col-span-7 p-6 rounded-3xl bg-white/[0.04] border border-white/15 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs font-mono text-pink-400">Live Preview</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">Free</span>
            </div>
            <div className="space-y-6 p-6 rounded-2xl bg-black/80 border border-white/10">
              <p className="text-xs text-zinc-300 leading-relaxed whitespace-pre-line">{generatedLetter}</p>
            </div>
            <button type="button" onClick={() => window.print()} className="w-full py-4 rounded-2xl bg-pink-500 hover:bg-pink-400 text-black font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer">
              <Download className="w-4 h-4" />
              <span>Download Letter (PDF)</span>
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
