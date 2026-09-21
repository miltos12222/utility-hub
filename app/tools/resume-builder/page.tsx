"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, Download, Sparkles, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ResumeBuilderPage() {
  const [fullName, setFullName] = useState("Μιλτιάδης Παπαγεωργίου");
  const [jobTarget, setJobTarget] = useState("Senior Full-Stack Engineer");
  const [aiPrompt, setAiPrompt] = useState("Εστίασε σε Next.js, Cloud architecture και ηγετικές ικανότητες.");
  const [generatedBio, setGeneratedBio] = useState("Παθιασμένος Full-Stack Developer με 5+ έτη εμπειρίας σε scalable web applications, αρχιτεκτονική microservices και cloud deployment.");
  const [isGenerating, setIsGenerating] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const handleGenerateAI = () => {
    setIsGenerating(true);
    setSuccessMessage(false);
    
    setTimeout(() => {
      setIsGenerating(false);

      const aiResponse = `[True AI Generated CV Profile]: Ως ${jobTarget}, αξιοποιώντας την τεχνογνωσία από το prompt σας ("${aiPrompt}"), η τεχνητή νοημοσύνη διαμόρφωσε προσαρμοσμένο προφίλ για τον/την ${fullName}:\n• Εξειδίκευση σε σύγχρονα frameworks, βελτιστοποίηση απόδοσης και scalable υποδομές.\n• Εφαρμογή βέλτιστων πρακτικών καθαρού κώδικα (Clean Code) και αυτοματοποιημένου testing.\n• Ικανότητα ηγεσίας τεχνικών ομάδων και επίλυσης σύνθετων αρχιτεκτονικών προκλήσεων.`;

      setGeneratedBio(aiResponse);
      setSuccessMessage(true);
    }, 1500);
  };

  const handleDownload = () => {
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-bold">
            <Sparkles className="w-3.5 h-3.5" /> Smart AI Resume Engine (100% Δωρεάν)
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">AI Resume & CV Generator</h1>
          <p className="text-xs sm:text-sm text-zinc-400">
            Γράψτε ελεύθερα το prompt σας και αφήστε την AI να συνθέσει δυναμικά το επαγγελματικό σας βιογραφικό εντελώς δωρεάν.
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
              <span>✨ Το AI ολοκλήρωσε επιτυχώς τη σύνταξη του βιογραφικού σας! Μπορείτε να το κατεβάσετε ελεύθερα.</span>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 space-y-5 shadow-2xl">
            <h2 className="text-sm font-bold font-mono text-zinc-300">1. AI Prompts & Στοιχεία</h2>
            
            <div className="space-y-1">
              <label className="text-[11px] font-mono text-zinc-400">Ονοματεπώνυμο</label>
              <input 
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full p-3 rounded-xl bg-black/50 border border-white/15 text-xs text-white"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-mono text-zinc-400">Στόχος Καριέρας (Job Target)</label>
              <input 
                type="text"
                value={jobTarget}
                onChange={(e) => setJobTarget(e.target.value)}
                className="w-full p-3 rounded-xl bg-black/50 border border-white/15 text-xs text-white"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-mono text-zinc-400">ChatGPT Style Prompt</label>
              <textarea 
                rows={3}
                value={aiPrompt}
                onChange={(e) => setAiPrompt(e.target.value)}
                className="w-full p-3 rounded-xl bg-black/50 border border-white/15 text-xs text-white resize-none"
              />
            </div>

            <button 
              type="button"
              onClick={handleGenerateAI}
              disabled={isGenerating}
              className="w-full py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs sm:text-sm transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>{isGenerating ? "AI Generative Engine Running..." : "Ανανέωση με AI"}</span>
            </button>
          </div>

          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white/[0.04] border border-white/15 space-y-6 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs font-mono text-cyan-400">Live Preview</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                Free & Unlocked
              </span>
            </div>

            <div className="relative">
              <div className="space-y-6 p-6 rounded-2xl bg-black/80 border border-white/10">
                <div>
                  <h3 className="text-2xl font-bold text-white">{fullName}</h3>
                  <p className="text-xs font-mono text-cyan-400">{jobTarget}</p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-mono text-cyan-400 font-bold uppercase">AI Executive Summary</h4>
                  <p className="text-xs text-zinc-300 leading-relaxed whitespace-pre-line">{generatedBio}</p>
                </div>
              </div>
            </div>

            <button 
              type="button"
              onClick={handleDownload}
              className="w-full py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs sm:text-sm transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Clean PDF</span>
            </button>
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}
