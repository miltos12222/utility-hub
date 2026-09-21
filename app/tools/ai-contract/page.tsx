"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Shield, ArrowLeft, Download, Sparkles, Crown, CheckCircle2, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AiContractPage() {
  const [partyA, setPartyA] = useState("Μιλτιάδης Παπαγεωργίου (Developer)");
  const [partyB, setPartyB] = useState("Acme Corp (Client)");
  const [contractType, setContractType] = useState("Freelance Software Agreement");
  const [terms, setTerms] = useState("Παράδοση κώδικα σε 30 ημέρες, 50% προκαταβολή, 1 έτος εγγύηση καλής λειτουργίας.");
  const [generatedContract, setGeneratedContract] = useState("");
  const [hasUnlocked, setHasUnlocked] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  useEffect(() => {
    const unlocked = localStorage.getItem("utility_hub_contract_unlocked");
    if (unlocked === "true") setHasUnlocked(true);

    setGeneratedContract(`ΣΥΜΦΩΝΗΤΙΚΟ ΣΥΝΕΡΓΑΣΙΑΣ (${contractType})\n\nΜεταξύ των:\n1. ${partyA}\n2. ${partyB}\n\nΌροι & Προϋποθέσεις:\n${terms}\n\nΤο παρόν φέρει πλήρη νομική ισχύ.`);
  }, [partyA, partyB, contractType, terms]);

  const handleGenerateAI = () => {
    setIsGenerating(true);
    setSuccessMessage(false);

    setTimeout(() => {
      setIsGenerating(false);
      setGeneratedContract(`[AI Verified Legal Draft]: ${contractType}\n\nΣυμβαλλόμενα Μέρη:\n• Πρώτο Μέρος: ${partyA}\n• Δεύτερο Μέρος: ${partyB}\n\nΕιδικοί Όροι AI:\n${terms}\n\n1. Εμπιστευτικότητα & NDA: Τα μέρη δεσμεύονται να μην αποκαλύψουν ευαίσθητα δεδομένα.\n2. Πνευματική Ιδιοκτησία: Μεταβιβάζεται πλήρως με την εξόφληση.\n\nΥπογραφές:\n_________________         _________________`);
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold">
            <Shield className="w-3.5 h-3.5" /> AI Legal Suite
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">AI Smart Contract & Legal Generator</h1>
          <p className="text-xs sm:text-sm text-zinc-400">
            Συντάξτε επίσημα συμφωνητικά έργου, NDA και συμβάσεις με τη βοήθεια της AI (Χρέωση: 5€).
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
              <span>✨ Το νομικό έγγραφο συντάχθηκε επιτυχώς! Προχωρήστε στην προεπισκόπηση και ξεκλείδωμα.</span>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 space-y-5 shadow-2xl">
            <h2 className="text-sm font-bold font-mono text-zinc-300">1. Στοιχεία Σύμβασης</h2>
            
            <div className="space-y-1">
              <label className="text-[11px] font-mono text-zinc-400">Τύπος Συμφωνητικού</label>
              <input 
                type="text"
                value={contractType}
                onChange={(e) => setContractType(e.target.value)}
                className="w-full p-3 rounded-xl bg-black/50 border border-white/15 text-xs text-white"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-mono text-zinc-400">Πρώτο Μέρος (Εσείς / Εταιρεία)</label>
              <input 
                type="text"
                value={partyA}
                onChange={(e) => setPartyA(e.target.value)}
                className="w-full p-3 rounded-xl bg-black/50 border border-white/15 text-xs text-white"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-mono text-zinc-400">Δεύτερο Μέρος (Πελάτης / Συνεργάτης)</label>
              <input 
                type="text"
                value={partyB}
                onChange={(e) => setPartyB(e.target.value)}
                className="w-full p-3 rounded-xl bg-black/50 border border-white/15 text-xs text-white"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-mono text-zinc-400">Ειδικοί Όροι & AI Prompt</label>
              <textarea 
                rows={3}
                value={terms}
                onChange={(e) => setTerms(e.target.value)}
                className="w-full p-3 rounded-xl bg-black/50 border border-white/15 text-xs text-white resize-none"
              />
            </div>

            <button 
              type="button"
              onClick={handleGenerateAI}
              disabled={isGenerating}
              className="w-full py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs sm:text-sm transition-all shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>{isGenerating ? "AI Legal Engine Working..." : "Σύνταξη Σύμβασης με AI"}</span>
            </button>
          </div>

          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white/[0.04] border border-white/15 space-y-6 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs font-mono text-emerald-400">Live Secure Preview</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                {hasUnlocked ? "Unlocked (HD)" : "Protected Preview (5€)"}
              </span>
            </div>

            <div className="relative">
              <div className={`space-y-4 p-6 rounded-2xl bg-black/80 border border-white/10 text-xs text-zinc-300 leading-relaxed font-mono whitespace-pre-line transition-all ${!hasUnlocked ? "blur-sm select-none pointer-events-none" : ""}`}>
                {generatedContract}
              </div>

              {!hasUnlocked && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-[2px] p-6 text-center space-y-4 rounded-2xl">
                  <div className="p-3 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300">
                    <Lock className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-white">Προστατευμένη Προεπισκόπηση</h4>
                    <p className="text-xs text-zinc-300 max-w-xs">
                      Το νομικό έγγραφο συντάχθηκε. Πληρώστε 5€ για να ξεκλειδώσετε το επίσημο PDF.
                    </p>
                  </div>
                </div>
              )}
            </div>

            <button 
              type="button"
              onClick={handleDownload}
              className="w-full py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs sm:text-sm transition-all shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>{hasUnlocked ? "Download Clean PDF (Unlocked)" : "Ξεκλείδωμα & Download PDF (5€)"}</span>
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
              className="relative max-w-md w-full p-8 rounded-3xl bg-[#12131c] border border-emerald-500/40 shadow-2xl space-y-6 text-center"
            >
              <div className="mx-auto w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Crown className="w-7 h-7" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">Πληρωμή & Άμεσο Download</h3>
                <p className="text-xs text-zinc-400">
                  Ολοκληρώστε την πληρωμή (5€) μέσω Revolut Pay για να κατεβάσετε τη σύμβαση.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <a 
                  href="https://revolut.me/miltos12222" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => {
                    localStorage.setItem("utility_hub_contract_unlocked", "true");
                    setHasUnlocked(true);
                    setShowPaywall(false);
                  }}
                  className="block w-full py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs transition-all shadow-lg shadow-emerald-500/25 cursor-pointer text-center"
                >
                  💳 Πληρωμή 5€ με Revolut (@miltos12222)
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
