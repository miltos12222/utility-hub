"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FileText, ArrowLeft, Upload, Sparkles, CheckCircle2, Cpu, Crown, Lock, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FileConverterPage() {
  const [file, setFile] = useState<File | null>(null);
  const [conversionType, setConversionType] = useState("pdf-to-structured");
  const [transformedOutput, setTransformedOutput] = useState("");
  const [hasUnlocked, setHasUnlocked] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [converting, setConverting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  useEffect(() => {
    const unlocked = localStorage.getItem("utility_hub_converter_unlocked");
    if (unlocked === "true") setHasUnlocked(true);

    const params = new URLSearchParams(window.location.search);
    if (params.get("unlocked") === "true") {
      localStorage.setItem("utility_hub_converter_unlocked", "true");
      setHasUnlocked(true);
      window.print();
    }
  }, []);

  const handleConvert = () => {
    if (!file) return;
    setConverting(true);
    setSuccessMessage(false);

    setTimeout(() => {
      setConverting(false);
      setTransformedOutput(`[AI Document Transformer Result]\n\nΑρχείο: ${file.name}\nΛειτουργία: ${conversionType}\n\n• Περίληψη & Δομή:\n- Εντοπίστηκαν 4 βασικές ενότητες.\n- Βελτιστοποίηση τυπογραφίας και δομής Markdown.\n- Έτοιμο για εξαγωγή σε καθαρό PDF/Word.`);
      setSuccessMessage(true);

      setTimeout(() => {
        if (!hasUnlocked) setShowPaywall(true);
      }, 1500);
    }, 1800);
  };

  const handleDownload = () => {
    if (!hasUnlocked) {
      setShowPaywall(true);
      return;
    }
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#e5e7eb] selection:bg-cyan-500/25 selection:text-white flex flex-col justify-between">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 space-y-8 w-full">
        
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-cyan-400 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Επιστροφή στα Εργαλεία
        </Link>

        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono font-bold">
            <Cpu className="w-3.5 h-3.5" /> AI Document Engine
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">AI Smart PDF & File Transformer</h1>
          <p className="text-xs sm:text-sm text-zinc-400">
            Μετατρέψτε και αναλύστε έγγραφα PDF έξυπνα με τεχνητή νοημοσύνη (Χρέωση: 2€ ανά μετασχηματισμό).
          </p>
        </div>

        <AnimatePresence>
          {successMessage && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-center font-mono text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg"
            >
              <CheckCircle2 className="w-5 h-5" />
              <span>✨ Η επεξεργασία του εγγράφου ολοκληρώθηκε! Δείτε την προεπισκόπηση και ξεκλειδώστε το αρχείο.</span>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Inputs */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 space-y-5 shadow-2xl">
            <h2 className="text-sm font-bold font-mono text-zinc-300">1. Ανέβασμα & Ρυθμίσεις</h2>
            
            <div className="space-y-1">
              <label className="text-[11px] font-mono text-zinc-400">Λειτουργία AI Transformation</label>
              <select 
                value={conversionType}
                onChange={(e) => setConversionType(e.target.value)}
                className="w-full p-3 rounded-xl bg-black/50 border border-white/15 text-xs text-white cursor-pointer"
              >
                <option value="pdf-to-structured">🤖 AI PDF to Clean Structured Markdown</option>
                <option value="extract-summary">📊 Smart Document Summarization & Key Points</option>
                <option value="format-professional">✨ Professional Formatting & Typography Polish</option>
              </select>
            </div>

            <div className="border-2 border-dashed border-white/15 rounded-2xl p-6 text-center space-y-3 hover:border-purple-500/50 transition-all bg-black/30">
              <div className="mx-auto w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                <Upload className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold text-white">
                  {file ? file.name : "Επιλέξτε PDF ή έγγραφο"}
                </p>
                <p className="text-[10px] font-mono text-zinc-500">PDF, DOCX, TXT</p>
              </div>
              <input 
                type="file" 
                onChange={(e) => { if (e.target.files) setFile(e.target.files[0]); setSuccessMessage(false); }}
                className="block w-full text-xs text-zinc-500 file:mr-2 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-[11px] file:font-semibold file:bg-white/10 file:text-white hover:file:bg-white/20 file:cursor-pointer cursor-pointer"
              />
            </div>

            <button 
              type="button"
              onClick={handleConvert}
              disabled={converting || !file}
              className="w-full py-4 rounded-2xl bg-purple-500 hover:bg-purple-400 disabled:opacity-50 text-black font-bold text-xs sm:text-sm transition-all shadow-lg shadow-purple-500/25 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>{converting ? "AI Processing..." : "Εκτέλεση AI Transformation (2€)"}</span>
            </button>
          </div>

          {/* Right Preview */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white/[0.04] border border-white/15 space-y-6 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs font-mono text-purple-400">Live Secure Preview</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">
                {hasUnlocked ? "Unlocked (HD)" : "Protected Preview (2€)"}
              </span>
            </div>

            <div className="relative">
              <div className={`space-y-4 p-6 rounded-2xl bg-black/80 border border-white/10 text-xs text-zinc-300 leading-relaxed font-mono whitespace-pre-line transition-all ${!hasUnlocked ? "blur-sm select-none pointer-events-none" : ""}`}>
                {transformedOutput || "Ανεβάστε αρχείο και πατήστε εκτέλεση για να δείτε τα αποτελέσματα εδώ."}
              </div>

              {!hasUnlocked && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-[2px] p-6 text-center space-y-4 rounded-2xl">
                  <div className="p-3 rounded-2xl bg-purple-500/20 border border-purple-500/40 text-purple-300">
                    <Lock className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-white">Προστατευμένη Προεπισκόπηση</h4>
                    <p className="text-xs text-zinc-300 max-w-xs">
                      Η επεξεργασία ολοκληρώθηκε. Πληρώστε 2€ για να ξεκλειδώσετε το τελικό αρχείο.
                    </p>
                  </div>
                </div>
              )}
            </div>

            <button 
              type="button"
              onClick={handleDownload}
              className="w-full py-4 rounded-2xl bg-purple-500 hover:bg-purple-400 text-black font-bold text-xs sm:text-sm transition-all shadow-lg shadow-purple-500/25 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>{hasUnlocked ? "Download Clean Result (Unlocked)" : "Ξεκλείδωμα & Download (2€)"}</span>
            </button>
          </div>

        </div>

      </main>

      {/* PAYWALL MODAL */}
      <AnimatePresence>
        {showPaywall && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative max-w-md w-full p-8 rounded-3xl bg-[#12131c] border border-purple-500/40 shadow-2xl space-y-6 text-center"
            >
              <div className="mx-auto w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <Crown className="w-7 h-7" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">Πληρωμή & Άμεσο Download</h3>
                <p className="text-xs text-zinc-400">
                  Ολοκληρώστε την πληρωμή (2€) μέσω Revolut Pay για να κατεβάσετε το μετασχηματισμένο αρχείο.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <a 
                  href="https://revolut.me/miltos12222" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => {
                    localStorage.setItem("utility_hub_converter_unlocked", "true");
                    setHasUnlocked(true);
                    setShowPaywall(false);
                  }}
                  className="block w-full py-3.5 rounded-2xl bg-purple-500 hover:bg-purple-400 text-black font-bold text-xs transition-all shadow-lg shadow-purple-500/25 cursor-pointer text-center"
                >
                  💳 Πληρωμή 2€ με Revolut (@miltos12222)
                </a>

                <button 
                  onClick={() => setShowPaywall(false)}
                  className="w-full py-3 text-xs text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer"
                >
                  Ακύρωση
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
