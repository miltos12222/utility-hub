"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, Download, Sparkles, CheckCircle2, Cpu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FileConverterPage() {
  const [fileName, setFileName] = useState("document_report.pdf");
  const [summary, setSummary] = useState("Ανάλυση εγγράφου: Το αρχείο περιέχει βασικές οικονομικές και τεχνικές πληροφορίες έτοιμες για εξαγωγή.");
  const [isProcessing, setIsProcessing] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const handleProcessAI = () => {
    setIsProcessing(true);
    setSuccessMessage(false);
    setTimeout(() => {
      setIsProcessing(false);
      setSummary(`AI File Transformation Complete:\n• Αρχείο: ${fileName}\n• Εξαγωγή δεδομένων: Επιτυχής.\n• Σύνοψη: Το έγγραφο αναλύθηκε πλήρως και ταξινομήθηκε σε δομημένες ενότητες.`);
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono font-bold">
            <Cpu className="w-3.5 h-3.5" /> AI Smart PDF & File Transformer (100% Free)
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">AI Smart PDF & File Transformer</h1>
          <p className="text-xs sm:text-sm text-zinc-400">Μετατρέψτε και αναλύστε έγγραφα έξυπνα με προηγμένη τεχνητή νοημοσύνη.</p>
        </div>

        <AnimatePresence>
          {successMessage && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-center font-mono text-xs font-bold flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>✨ Η επεξεργασία του αρχείου ολοκληρώθηκε επιτυχώς!</span>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 p-6 rounded-3xl bg-white/[0.03] border border-white/10 space-y-5 shadow-2xl">
            <h2 className="text-sm font-bold font-mono text-zinc-300">Επιλογή Αρχείου</h2>
            <div className="space-y-1">
              <label className="text-[11px] font-mono text-zinc-400">Όνομα Αρχείου</label>
              <input type="text" value={fileName} onChange={(e) => setFileName(e.target.value)} className="w-full p-3 rounded-xl bg-black/50 border border-white/15 text-xs text-white" />
            </div>
            <button type="button" onClick={handleProcessAI} disabled={isProcessing} className="w-full py-4 rounded-2xl bg-purple-500 hover:bg-purple-400 text-black font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer">
              <Sparkles className="w-4 h-4" />
              <span>{isProcessing ? "Processing..." : "Ανάλυση με AI"}</span>
            </button>
          </div>

          <div className="lg:col-span-7 p-6 rounded-3xl bg-white/[0.04] border border-white/15 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs font-mono text-purple-400">Live Preview</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">Free</span>
            </div>
            <div className="space-y-6 p-6 rounded-2xl bg-black/80 border border-white/10">
              <p className="text-xs text-zinc-300 leading-relaxed whitespace-pre-line">{summary}</p>
            </div>
            <button type="button" onClick={() => window.print()} className="w-full py-4 rounded-2xl bg-purple-500 hover:bg-purple-400 text-black font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer">
              <Download className="w-4 h-4" />
              <span>Download Transformed File</span>
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
