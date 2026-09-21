"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Palette, ArrowLeft, Copy, Check, Pipette } from "lucide-react";

export default function ColorPalettePage() {
  const [customColor, setCustomColor] = useState("#66fcf1");
  const [copiedText, setCopiedText] = useState<string | null>(null);

  // Helper to convert HEX to RGB
  const hexToRgb = (hex: string) => {
    let cleanedHex = hex.replace("#", "");
    if (cleanedHex.length === 3) {
      cleanedHex = cleanedHex.split("").map(c => c + c).join("");
    }
    const num = parseInt(cleanedHex, 16);
    if (isNaN(num)) return "0, 0, 0";
    const r = (num >> 16) & 255;
    const g = (num >> 8) & 255;
    const b = num & 255;
    return `${r}, ${g}, ${b}`;
  };

  const palette = [
    { hex: "#0b0c10", name: "Deep Void", rgb: "11, 12, 16" },
    { hex: "#1f2833", name: "Dark Slate", rgb: "31, 40, 51" },
    { hex: "#c5c6c7", name: "Light Steel", rgb: "197, 198, 199" },
    { hex: "#66fcf1", name: "Neon Cyan", rgb: "102, 252, 241" },
    { hex: "#45a29e", name: "Muted Teal", rgb: "69, 162, 158" },
    { hex: "#a855f7", name: "Electric Purple", rgb: "168, 85, 247" },
    { hex: "#ec4899", name: "Vivid Pink", rgb: "236, 72, 153" },
    { hex: "#10b981", name: "Emerald Green", rgb: "16, 185, 129" }
  ];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#e5e7eb] selection:bg-cyan-500/25 selection:text-white flex flex-col justify-between">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 space-y-8 w-full">
        
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-cyan-400 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Επιστροφή στα Εργαλεία
        </Link>

        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-bold">
            <Palette className="w-3.5 h-3.5" /> 2030 Design Suite
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Color Palette & Custom Inspector</h1>
          <p className="text-xs sm:text-sm text-zinc-400">
            Επιλέξτε χρώμα με τον picker ή πληκτρολογήστε τον δικό σας HEX κωδικό για άμεση ανάλυση.
          </p>
        </div>

        {/* CUSTOM COLOR INSPECTOR */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 space-y-6 shadow-2xl">
          <h2 className="text-sm font-bold font-mono text-indigo-300 flex items-center gap-2">
            <Pipette className="w-4 h-4" /> Live Custom Color Inspector
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
            
            <div className="flex items-center gap-4">
              <input 
                type="color"
                value={customColor}
                onChange={(e) => setCustomColor(e.target.value)}
                className="w-16 h-16 rounded-2xl bg-transparent border-2 border-white/20 cursor-pointer shrink-0"
              />
              <div className="space-y-1 w-full">
                <label className="text-[10px] font-mono text-zinc-400">Εισαγωγή HEX Code</label>
                <input 
                  type="text"
                  value={customColor}
                  onChange={(e) => setCustomColor(e.target.value)}
                  placeholder="#000000"
                  className="w-full px-3 py-2 rounded-xl bg-black/50 border border-white/20 font-mono text-sm text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div className="sm:col-span-2 flex flex-col sm:flex-row items-center gap-4 justify-between">
              <div className="space-y-1 font-mono text-xs">
                <div className="text-zinc-400">HEX: <span className="text-white font-bold">{customColor}</span></div>
                <div className="text-zinc-400">RGB: <span className="text-indigo-300 font-bold">{hexToRgb(customColor)}</span></div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button 
                  onClick={() => handleCopy(customColor)}
                  className="flex-1 sm:flex-none py-3 px-4 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-black font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-indigo-500/20"
                >
                  {copiedText === customColor ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedText === customColor ? "Αντιγράφηκε!" : "Αντιγραφή HEX"}</span>
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* CURATED PALETTE */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 space-y-6 shadow-2xl">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <h2 className="text-sm font-bold font-mono text-zinc-300">Curated 2030 SaaS Palette</h2>
            <span className="text-xs font-mono text-indigo-400">Κλικ για αντιγραφή</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {palette.map((item, idx) => (
              <div 
                key={idx}
                onClick={() => handleCopy(item.hex)}
                className="group p-4 rounded-2xl bg-black/40 border border-white/10 hover:border-indigo-500/50 transition-all cursor-pointer space-y-3 shadow-lg"
              >
                <div 
                  className="w-full h-24 rounded-xl border border-white/10 shadow-inner transition-transform group-hover:scale-105" 
                  style={{ backgroundColor: item.hex }}
                />
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">{item.name}</span>
                    {copiedText === item.hex ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-zinc-500 group-hover:text-indigo-400" />}
                  </div>
                  <div className="text-[11px] font-mono text-zinc-400">{item.hex}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
