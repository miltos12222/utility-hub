"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowLeft, Send, Copy, Check, Briefcase, UserCheck, MessageSquare } from "lucide-react";

export default function AiOutreachTool() {
  const [targetRole, setTargetRole] = useState("");
  const [userOffer, setUserOffer] = useState("");
  const [tone, setTone] = useState("Professional & Direct");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ connection: string; pitch: string; followUp: string } | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!targetRole || !userOffer) return;

    setLoading(true);
    setResult(null);

    setTimeout(() => {
      setResult({
        connection: `Γεια σου [Όνομα], είδα το ενδιαφέρον προφίλ σου ως ${targetRole}. Ως ειδικός στο ${userOffer}, πιστεύω ότι θα είχαμε εξαιρετικό κοινό ενδιαφέρον να συνδεθούμε!`,
        pitch: `Γεια σου [Όνομα],\n\nΠαρατήρησα ότι ως ${targetRole} πιθανότατα αντιμετωπίζεις προκλήσεις γύρω από την κλιμάκωση και την αποδοτικότητα.\n\nΒοηθάω επαγγελματίες να λύσουν ακριβώς αυτό το ζήτημα μέσω ${userOffer}. Πρόσφατα πετύχαμε σημαντικά αποτελέσματα σε αντίστοιχες περιπτώσεις.\n\nΘα σε ενδιέφερε ένα σύντομο 5λεπτο chat αυτή την εβδομάδα για να δούμε αν υπάρχει συνέργεια;\n\nΜε εκτίμηση,\n[Το Όνομά σου]`,
        followUp: `Γεια σου [Όνομα], επαναφέρω το μήνυμά μου καθώς φαντάζομαι ότι ο φόρτος εργασίας σου είναι μεγάλος. Θα είχε αξία για σένα να σου στείλω ένα γρήγορο case study για το πώς μπορούμε να συνεργαστούμε στο ${userOffer};`
      });
      setLoading(false);
    }, 1200);
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#e5e7eb] selection:bg-cyan-500/25 selection:text-white flex flex-col justify-between overflow-x-hidden relative">
      
      {/* BACKGROUND GLOW ORBS */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 space-y-12 w-full relative z-10">
        
        {/* BACK LINK & HEADER */}
        <div className="space-y-6">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Ππισω στην πλατφόρμα
          </Link>

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold">
              <Sparkles className="w-3.5 h-3.5 animate-spin" /> LinkedIn AI Growth Tool • 100% Free
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              AI LinkedIn Outreach & Pitch Generator
            </h1>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              Δημιουργήστε έξυπνα, non-spammy μηνύματα δικτύωσης και πωλήσεων για το LinkedIn σε δευτερόλεπτα.
            </p>
          </div>
        </div>

        {/* GENERATOR FORM */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl space-y-6"
        >
          <form onSubmit={handleGenerate} className="space-y-6">
            
            <div className="space-y-2">
              <label className="text-xs font-mono text-zinc-300 flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-cyan-400" /> Στόχος / Ποιον στοχεύετε (π.χ. HR Recruiter σε Tech Startup, CMO σε e-shop)
              </label>
              <input 
                type="text"
                required
                placeholder="π.χ. Talent Acquisition Manager σε Software House"
                value={targetRole}
                onChange={(e) => setTargetRole(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-xs sm:text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-cyan-500 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-zinc-300 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-purple-400" /> Τι προσφέρετε / Η υπηρεσία ή δεξιότητά σας
              </label>
              <input 
                type="text"
                required
                placeholder="π.χ. Fullstack Next.js Development / Growth Marketing υπηρεσίες"
                value={userOffer}
                onChange={(e) => setUserOffer(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-xs sm:text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-cyan-500 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-zinc-300 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400" /> Τονικότητα Μηνύματος (Tone)
              </label>
              <select
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-500 transition-all"
              >
                <option value="Professional & Direct" className="bg-[#12131c]">Professional & Direct</option>
                <option value="Friendly & Casual" className="bg-[#12131c]">Friendly & Casual</option>
                <option value="Short & Punchy" className="bg-[#12131c]">Short & Punchy</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(6,182,212,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Sparkles className="w-5 h-5 animate-spin" />
                  <span>Δημιουργία AI Outreach...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Παραγωγή LinkedIn Pitches</span>
                </>
              )}
            </button>

          </form>

          {/* RESULTS DISPLAY */}
          {result && (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6 pt-6 border-t border-white/10"
            >
              <h3 className="text-sm font-mono text-cyan-400 font-bold uppercase tracking-wider">
                ✨ Τα αποτελέσματα σας είναι έτοιμα:
              </h3>

              {/* 1. Connection Request */}
              <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-400 font-bold">1. Σημείωμα Πρόσκλησης (Connection Request - 300 χαρακτήρες)</span>
                  <button
                    onClick={() => copyToClipboard(result.connection, "conn")}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-cyan-400 transition-colors cursor-pointer"
                  >
                    {copiedField === "conn" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedField === "conn" ? "Αντιγράφηκε!" : "Αντιγραφή"}</span>
                  </button>
                </div>
                <p className="text-xs sm:text-sm text-zinc-200 whitespace-pre-wrap leading-relaxed">{result.connection}</p>
              </div>

              {/* 2. Value-First Pitch */}
              <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-400 font-bold">2. Κύριο Μήνυμα Προσφοράς (Value-First Pitch)</span>
                  <button
                    onClick={() => copyToClipboard(result.pitch, "pitch")}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-cyan-400 transition-colors cursor-pointer"
                  >
                    {copiedField === "pitch" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedField === "pitch" ? "Αντιγράφηκε!" : "Αντιγραφή"}</span>
                  </button>
                </div>
                <p className="text-xs sm:text-sm text-zinc-200 whitespace-pre-wrap leading-relaxed">{result.pitch}</p>
              </div>

              {/* 3. Follow Up */}
              <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-400 font-bold">3. Μήνυμα Υπενθύμισης (Follow-Up)</span>
                  <button
                    onClick={() => copyToClipboard(result.followUp, "follow")}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-cyan-400 transition-colors cursor-pointer"
                  >
                    {copiedField === "follow" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedField === "follow" ? "Αντιγράφηκε!" : "Αντιγραφή"}</span>
                  </button>
                </div>
                <p className="text-xs sm:text-sm text-zinc-200 whitespace-pre-wrap leading-relaxed">{result.followUp}</p>
              </div>

            </motion.div>
          )}

        </motion.div>

      </main>

      <Footer />
    </div>
  );
}
