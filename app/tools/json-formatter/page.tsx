"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Code, ArrowLeft, Copy, Check, Sparkles, AlertCircle, CheckCircle2 } from "lucide-react";

export default function JsonFormatterPage() {
  const [inputJson, setInputJson] = useState("");
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({ type: null, message: "" });
  const [copied, setCopied] = useState(false);

  const handleFormat = () => {
    if (!inputJson.trim()) {
      setStatus({ type: "error", message: "Το πεδίο είναι κενό!" });
      return;
    }

    try {
      const parsed = JSON.parse(inputJson);
      setInputJson(JSON.stringify(parsed, null, 2));
      setStatus({ type: "success", message: "Έγκυρο JSON! Μορφοποιήθηκε επιτυχώς." });
    } catch (error: any) {
      setStatus({ type: "error", message: `Σφάλμα Συντακτικού (Syntax Error): ${error.message}` });
    }
  };

  const handleMinify = () => {
    if (!inputJson.trim()) return;

    try {
      const parsed = JSON.parse(inputJson);
      setInputJson(JSON.stringify(parsed));
      setStatus({ type: "success", message: "Συμπιέστηκε (Minified) επιτυχώς!" });
    } catch (error: any) {
      setStatus({ type: "error", message: `Σφάλμα Συντακτικού: ${error.message}` });
    }
  };

  const handleCopy = () => {
    if (inputJson) {
      navigator.clipboard.writeText(inputJson);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#e5e7eb] selection:bg-cyan-500/25 selection:text-white flex flex-col justify-between">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 space-y-8 w-full">

        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-cyan-400 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Επιστροφή στα Εργαλεία
        </Link>

        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-bold">
            <Code className="w-3.5 h-3.5" /> Developer Tool
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">JSON Formatter & Validator</h1>
          <p className="text-xs sm:text-sm text-zinc-400">
            Επικολλήστε τον JSON κώδικά σας για άμεσο έλεγχο εγκυρότητας, μορφοποίηση (Pretty Print) ή συμπίεση (Minify).
          </p>
        </div>

        {/* Editor Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 space-y-6 shadow-2xl">

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-mono text-zinc-300">JSON Input / Editor</label>
              <button 
                type="button"
                onClick={() => setInputJson("")}
                className="text-xs font-mono text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer"
              >
                Καθαρισμός
              </button>
            </div>
            <textarea 
              rows={12}
              placeholder='Επικολλήστε εδώ το JSON σας (π.χ. {"name": "Miltos", "student": true})...'
              value={inputJson}
              onChange={(e) => setInputJson(e.target.value)}
              className="w-full p-4 rounded-2xl bg-black/50 border border-white/15 font-mono text-xs sm:text-sm text-amber-300 placeholder:text-zinc-600 focus:outline-none focus:border-amber-500 transition-all resize-y"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button 
              type="button"
              onClick={handleFormat}
              className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs sm:text-sm transition-all shadow-lg shadow-amber-500/20 flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Format / Pretty Print</span>
            </button>

            <button 
              type="button"
              onClick={handleMinify}
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Minify</span>
            </button>

            <button 
              type="button"
              onClick={handleCopy}
              className="ml-auto px-5 py-3 rounded-xl bg-white/5 hover:bg-white/15 text-zinc-300 font-bold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer border border-white/10"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? "Αντιγράφηκε!" : "Αντιγραφή"}</span>
            </button>
          </div>

          {/* Status Message */}
          {status.type && (
            <div className={`p-4 rounded-2xl border flex items-center gap-3 font-mono text-xs ${
              status.type === "success" 
                ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" 
                : "bg-red-500/10 border-red-500/30 text-red-400"
            }`}>
              {status.type === "success" ? <CheckCircle2 className="w-5 h-5 shrink-0" /> : <AlertCircle className="w-5 h-5 shrink-0" />}
              <span>{status.message}</span>
            </div>
          )}

        </div>

      </main>

      <Footer />
    </div>
  );
}
