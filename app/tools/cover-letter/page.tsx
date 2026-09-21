"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Mail, ArrowLeft, Download, Sparkles, Crown, CheckCircle2, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CoverLetterPage() {
  const [jobTitle, setJobTitle] = useState("Senior Frontend Engineer");
  const [company, setCompany] = useState("Google");
  const [applicantName, setApplicantName] = useState("Μιλτιάδης Παπαγεωργίου");
  const [aiPrompt, setAiPrompt] = useState("Τονίστε την εμπειρία μου σε React, TypeScript και το πάθος μου για open source projects.");
  const [generatedLetter, setGeneratedLetter] = useState("");
  const [hasUnlocked, setHasUnlocked] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  useEffect(() => {
    const unlocked = localStorage.getItem("utility_hub_cover_unlocked");
    if (unlocked === "true") setHasUnlocked(true);

    // Initial letter content
    setGeneratedLetter(`Αγαπητοί υπεύθυνοι προσλήψεων στη ${company},\n\nΜε μεγάλο ενδιαφέρον διάβαζα την αγγελία για τη θέση ${jobTitle}. Με βάση το προφίλ μου και τις οδηγίες: "${aiPrompt}", θεωρώ πως μπορώ να προσφέρω άμεση αξία στην ομάδα σας.\n\nΕυχαριστώ πολύ,\n${applicantName}`);
  }, [company, jobTitle, applicantName, aiPrompt]);

  const handleGenerateAI = () => {
    setIsGenerating(true);
    setSuccessMessage(false);

    setTimeout(() => {
      setIsGenerating(false);
      setGeneratedLetter(`Αγαπητοί υπεύθυνοι προσλήψεων στη ${company},\n\nΩς έμπειρος ${jobTitle}, παρακολούθησα με ενθουσιασμό την πορεία σας. Σύμφωνα με το AI prompt σας: "${aiPrompt}", η τεχνογνωσία μου ευθυγραμμίζεται απόλυτα με τα ζητούμενά σας.\n\nΑνυπομονώ να συζητήσουμε από κοντά.\n\nΜε εκτίμηση,\n${applicantName}`);
      setSuccessMessage(true);

      setTimeout(() => {
        if (!hasUnlocked) setShowPaywall(true);
      }, 1800);
    }, 1500);
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-mono font-bold">
            <Sparkles className="w-3.5 h-3.5" /> True AI Cover Letter Engine
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">AI Cover Letter Generator</h1>
          <p className="text-xs sm:text-sm text-zinc-400">
            Δώστε το prompt σας και συνθέστε μια επαγγελματική συνοδευτική επιστολή υπογεγραμμένη από εσάς.
          </p>
        </div>

        {/* Success Feedback Banner */}
        <AnimatePresence>
          {successMessage && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-center font-mono text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg"
            >
              <CheckCircle2 className="w-5 h-5" />
              <span>✨ Η επιστολή συντάχθηκε επιτυχώς από την AI! Προχωρήστε στην προεπισκόπηση και ξεκλείδωμα.</span>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Inputs */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 space-y-5 shadow-2xl">
            <h2 className="text-sm font-bold font-mono text-zinc-300">1. AI Prompts & Στοιχεία</h2>
            
            <div className="space-y-1">
              <label className="text-[11px] font-mono text-zinc-400">Ονοματεπώνυμο (Υπογραφή)</label>
              <input 
                type="text"
                value={applicantName}
                onChange={(e) => setApplicantName(e.target.value)}
                className="w-full p-3 rounded-xl bg-black/50 border border-white/15 text-xs text-white"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[11px] font-mono text-zinc-400">Θέση (Job Title)</label>
                <input 
                  type="text"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  className="w-full p-3 rounded-xl bg-black/50 border border-white/15 text-xs text-white"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[11px] font-mono text-zinc-400">Εταιρεία (Company)</label>
                <input 
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full p-3 rounded-xl bg-black/50 border border-white/15 text-xs text-white"
                />
              </div>
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
              className="w-full py-4 rounded-2xl bg-pink-500 hover:bg-pink-400 text-black font-bold text-xs sm:text-sm transition-all shadow-lg shadow-pink-500/25 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>{isGenerating ? "AI Generating Letter..." : "Ανανέωση με AI"}</span>
            </button>
          </div>

          {/* Right Preview */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white/[0.04] border border-white/15 space-y-6 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs font-mono text-pink-400">Live Secure Preview</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-pink-500/10 text-pink-300 border border-pink-500/20">
                {hasUnlocked ? "Unlocked (HD)" : "Protected Preview (2€)"}
              </span>
            </div>

            <div className="relative">
              <div className={`space-y-4 p-6 rounded-2xl bg-black/80 border border-white/10 text-xs text-zinc-300 leading-relaxed font-mono whitespace-pre-line transition-all ${!hasUnlocked ? "blur-sm select-none pointer-events-none" : ""}`}>
                {generatedLetter}
              </div>

              {!hasUnlocked && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-[2px] p-6 text-center space-y-4 rounded-2xl">
                  <div className="p-3 rounded-2xl bg-pink-500/20 border border-pink-500/40 text-pink-300">
                    <Lock className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-white">Προστατευμένη Προεπισκόπηση</h4>
                    <p className="text-xs text-zinc-300 max-w-xs">
                      Η συνοδευτική επιστολή συντάχθηκε. Πληρώστε 2€ για να ξεκλειδώσετε το καθαρό PDF.
                    </p>
                  </div>
                </div>
              )}
            </div>

            <button 
              type="button"
              onClick={handleDownload}
              className="w-full py-4 rounded-2xl bg-pink-500 hover:bg-pink-400 text-black font-bold text-xs sm:text-sm transition-all shadow-lg shadow-pink-500/25 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>{hasUnlocked ? "Download Clean PDF (Unlocked)" : "Ξεκλείδωμα & Download PDF (2€)"}</span>
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
              className="relative max-w-md w-full p-8 rounded-3xl bg-[#12131c] border border-pink-500/40 shadow-2xl space-y-6 text-center"
            >
              <div className="mx-auto w-14 h-14 rounded-2xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400">
                <Crown className="w-7 h-7" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">Πληρωμή & Άμεσο Download</h3>
                <p className="text-xs text-zinc-400">
                  Ολοκληρώστε την πληρωμή (2€) μέσω Revolut Pay για να κατεβάσετε την επιστολή σας.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <a 
                  href="https://revolut.me/miltos12222" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => {
                    localStorage.setItem("utility_hub_cover_unlocked", "true");
                    setHasUnlocked(true);
                    setShowPaywall(false);
                  }}
                  className="block w-full py-3.5 rounded-2xl bg-pink-500 hover:bg-pink-400 text-black font-bold text-xs transition-all shadow-lg shadow-pink-500/25 cursor-pointer text-center"
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
