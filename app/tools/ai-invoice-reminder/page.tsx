"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowLeft, Send, Copy, Check, FileText, Download, DollarSign, Clock, Building } from "lucide-react";

export default function AiInvoiceReminderTool() {
  const [clientName, setClientName] = useState("");
  const [invoiceDetails, setInvoiceDetails] = useState("");
  const [daysLate, setDaysLate] = useState("");
  const [tone, setTone] = useState("Polite & Friendly");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ emailSubject: string; emailBody: string; shortMessage: string } | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !invoiceDetails || !daysLate) return;

    setLoading(true);
    setResult(null);

    setTimeout(() => {
      setResult({
        emailSubject: `Υπενθύμιση Πληρωμής - Τιμολόγιο ${invoiceDetails} (${clientName})`,
        emailBody: `Αγαπητή/έ ${clientName},\n\nΕλπίζω να είστε καλά.\n\nΣας υπενθυμίζω ότι το τιμολόγιο ${invoiceDetails} παρουσιάζει καθυστέρηση ${daysLate} ημερών από την αρχική ημερομηνία λήξης του.\n\nΚαθώς η εργασία έχει ολοκληρωθεί και παραδοθεί επιτυχώς, θα εκτιμούσα ιδιαίτερα αν μπορούσατε να προχωρήσετε στην τακτοποίηση της εξόφλησης έως τις επόμενες ημέρες.\n\nΑν έχει ήδη γίνει η κατάθεση, παρακαλώ αγνοήστε το παρόν μήνυμα.\n\nΜε εκτίμηση,\n[Το Όνομά σας]`,
        shortMessage: `Γεια σου ${clientName}, σε σχέση με το τιμολόγιο ${invoiceDetails} που έχει καθυστέρηση ${daysLate} ημερών, θα μπορούσες να το ελέγξεις σύντομα για την εξόφληση; Ευχαριστώ πολύ!`
      });
      setLoading(false);
    }, 1200);
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#e5e7eb] selection:bg-cyan-500/25 selection:text-white flex flex-col justify-between overflow-x-hidden relative">
      
      {/* BACKGROUND GLOW ORBS */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 space-y-12 w-full relative z-10">
        
        {/* BACK LINK & HEADER */}
        <div className="space-y-6">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Πίσω στην πλατφόρμα
          </Link>

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
              <Sparkles className="w-3.5 h-3.5 animate-spin" /> Finance AI Utility • 100% Free
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              AI Invoice & Payment Reminder
            </h1>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              Δημιουργήστε επαγγελματικά μηνύματα υπενθύμισης πληρωμής για απλήρωτα τιμολόγια και κατεβάστε τα σε PDF.
            </p>
          </div>
        </div>

        {/* GENERATOR FORM */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl space-y-6"
        >
          <form onSubmit={handleGenerate} className="space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono text-zinc-300 flex items-center gap-2">
                  <Building className="w-4 h-4 text-emerald-400" /> Όνομα Πελάτη / Εταιρείας
                </label>
                <input 
                  type="text"
                  required
                  placeholder="π.χ. TechCorp AE"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-xs sm:text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-zinc-300 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-cyan-400" /> Ποσό & Αριθμός Τιμολογίου
                </label>
                <input 
                  type="text"
                  required
                  placeholder="π.χ. 1,200€ (Τιμολόγιο #42)"
                  value={invoiceDetails}
                  onChange={(e) => setInvoiceDetails(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-xs sm:text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono text-zinc-300 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400" /> Ημέρες Καθυστέρησης
                </label>
                <input 
                  type="text"
                  required
                  placeholder="π.χ. 15 ημέρες μετά τη λήξη"
                  value={daysLate}
                  onChange={(e) => setDaysLate(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-xs sm:text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-zinc-300 flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-purple-400" /> Τόνος Επικοινωνίας
                </label>
                <select
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-xs sm:text-sm text-white focus:outline-none focus:border-emerald-500 transition-all"
                >
                  <option value="Polite & Friendly" className="bg-[#12131c]">Polite & Friendly (Φιλική υπενθύμιση)</option>
                  <option value="Firm & Professional" className="bg-[#12131c]">Firm & Professional (Αυστηρή & Επαγγελματική)</option>
                  <option value="Strict / Legal" className="bg-[#12131c]">Strict / Legal (Τελική ειδοποίηση)</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-400 hover:to-cyan-500 text-white font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(16,185,129,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Sparkles className="w-5 h-5 animate-spin" />
                  <span>Σύνταξη AI Υπενθύμισης...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Παραγωγή Υπενθύμισης Πληρωμής</span>
                </>
              )}
            </button>

          </form>

          {/* RESULTS DISPLAY WITH FADING & PDF DOWNLOAD */}
          {result && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6 pt-6 border-t border-white/10"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <h3 className="text-sm font-mono text-emerald-400 font-bold uppercase tracking-wider">
                  ✨ Το μήνυμα υπενθύμισης είναι έτοιμο:
                </h3>
                <button
                  onClick={handleDownloadPDF}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 text-emerald-400 text-xs font-mono font-bold transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4" /> Λήψη / Εκτύπωση σε PDF
                </button>
              </div>

              {/* 1. Email Subject */}
              <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                <span className="text-xs font-mono text-zinc-400 font-bold">1. Θέμα Email</span>
                <p className="text-xs sm:text-sm text-zinc-200 font-mono bg-white/5 p-2 rounded-lg">{result.emailSubject}</p>
              </div>

              {/* 2. Email Body */}
              <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-400 font-bold">2. Κύριο Κείμενο Email</span>
                  <button
                    onClick={() => copyToClipboard(result.emailBody, "body")}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-emerald-400 transition-colors cursor-pointer"
                  >
                    {copiedField === "body" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedField === "body" ? "Αντιγράφηκε!" : "Αντιγραφή"}</span>
                  </button>
                </div>
                <p className="text-xs sm:text-sm text-zinc-200 whitespace-pre-wrap leading-relaxed">{result.emailBody}</p>
              </div>

              {/* 3. Short Message */}
              <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-400 font-bold">3. Σύντομο Μήνυμα (Chat / LinkedIn / Viber)</span>
                  <button
                    onClick={() => copyToClipboard(result.shortMessage, "short")}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-emerald-400 transition-colors cursor-pointer"
                  >
                    {copiedField === "short" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedField === "short" ? "Αντιγράφηκε!" : "Αντιγραφή"}</span>
                  </button>
                </div>
                <p className="text-xs sm:text-sm text-zinc-200 whitespace-pre-wrap leading-relaxed">{result.shortMessage}</p>
              </div>

            </motion.div>
          )}

        </motion.div>

      </main>

      <Footer />
    </div>
  );
}
