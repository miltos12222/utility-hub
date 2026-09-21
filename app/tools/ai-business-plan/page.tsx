"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, Download, Sparkles, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AIBusinessPlanPage() {
  const [businessName, setBusinessName] = useState("Utility Hub AI");
  const [industry, setIndustry] = useState("SaaS & Cloud Solutions");
  const [aiPrompt, setAiPrompt] = useState("Εστίασε σε B2B scalable μοντέλα εσόδων και χαμηλό κόστος υποδομής.");
  const [generatedPlan, setGeneratedPlan] = useState("Executive Summary: Η επιχείρηση στοχεύει στην αγορά αυτοματοποιημένων micro-SaaS εργαλείων με έμφαση στην ταχύτητα, την ασφάλεια και τη μηδενική τριβή για τον τελικό χρήστη.");
  const [isGenerating, setIsGenerating] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const handleGenerateAI = () => {
    setIsGenerating(true);
    setSuccessMessage(false);
    
    setTimeout(() => {
      setIsGenerating(false);
      setGeneratedPlan(`[AI Business Plan - 3 Year Projections]: Για την εταιρεία ${businessName} στον κλάδο ${industry} με βάση το prompt ("${aiPrompt}"):\n1. Έτος 1: Ανάπτυξη βασικών λειτουργιών και διείσδυση στην αγορά.\n2. Έτος 2: Επέκταση υποδομών, αυτοματοποίηση και scaling.\n3. Έτος 3: Κερδοφορία, monetization strategies και B2B συνεργασίες.`);
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-bold">
            <Sparkles className="w-3.5 h-3.5" /> AI Startup Business Plan (100% Free)
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">AI Startup Business Plan</h1>
          <p className="text-xs sm:text-sm text-zinc-400">Δημιουργήστε επαγγελματικό επενδυτικό Business Plan 3ετίας εντελώς δωρεάν.</p>
        </div>

        <AnimatePresence>
          {successMessage && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-center font-mono text-xs font-bold flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>✨ Το AI ολοκλήρωσε επιτυχώς τη σύνταξη του Business Plan!</span>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 p-6 rounded-3xl bg-white/[0.03] border border-white/10 space-y-5 shadow-2xl">
            <h2 className="text-sm font-bold font-mono text-zinc-300">Παράμετροι Επιχείρησης</h2>
            <div className="space-y-1">
              <label className="text-[11px] font-mono text-zinc-400">Όνομα Startup</label>
              <input type="text" value={businessName} onChange={(e) => setBusinessName(e.target.value)} className="w-full p-3 rounded-xl bg-black/50 border border-white/15 text-xs text-white" />
            </div>
            <div className="space-y-1">
              <label className="text-[11px] font-mono text-zinc-400">Κλάδος (Industry)</label>
              <input type="text" value={industry} onChange={(e) => setIndustry(e.target.value)} className="w-full p-3 rounded-xl bg-black/50 border border-white/15 text-xs text-white" />
            </div>
            <div className="space-y-1">
              <label className="text-[11px] font-mono text-zinc-400">AI Prompt</label>
              <textarea rows={3} value={aiPrompt} onChange={(e) => setAiPrompt(e.target.value)} className="w-full p-3 rounded-xl bg-black/50 border border-white/15 text-xs text-white resize-none" />
            </div>
            <button type="button" onClick={handleGenerateAI} disabled={isGenerating} className="w-full py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer">
              <Sparkles className="w-4 h-4" />
              <span>{isGenerating ? "Generating..." : "Δημιουργία με AI"}</span>
            </button>
          </div>

          <div className="lg:col-span-7 p-6 rounded-3xl bg-white/[0.04] border border-white/15 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs font-mono text-cyan-400">Live Preview</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">Free</span>
            </div>
            <div className="space-y-6 p-6 rounded-2xl bg-black/80 border border-white/10">
              <h3 className="text-xl font-bold text-white">{businessName}</h3>
              <p className="text-xs text-zinc-300 leading-relaxed whitespace-pre-line">{generatedPlan}</p>
            </div>
            <button type="button" onClick={() => window.print()} className="w-full py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer">
              <Download className="w-4 h-4" />
              <span>Download Plan (PDF)</span>
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
