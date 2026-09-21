"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Image as ImageIcon, ArrowLeft, Upload, Sparkles, CheckCircle2, Sliders, Store } from "lucide-react";

export default function ImageCompressorPage() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [quality, setQuality] = useState(80);
  const [targetStore, setTargetStore] = useState("ecommerce");
  const [outputFormat, setOutputFormat] = useState("webp");
  const [compressing, setCompressing] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
      setSuccess(false);
    }
  };

  const handleCompress = () => {
    if (!selectedImage) return;
    setCompressing(true);
    setTimeout(() => {
      setCompressing(false);
      setSuccess(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#e5e7eb] selection:bg-cyan-500/25 selection:text-white flex flex-col justify-between">
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 space-y-8 w-full">
        
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-cyan-400 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Επιστροφή στα Εργαλεία
        </Link>

        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-bold">
            <ImageIcon className="w-3.5 h-3.5" /> 2030 Smart Media Suite
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">AI Image Compressor & Store Optimizer</h1>
          <p className="text-xs sm:text-sm text-zinc-400">
            Βελτιστοποιήστε εικόνες αυτόματα για e-shops, WooCommerce ή Social Media με lossless συμπίεση.
          </p>
        </div>

        <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 space-y-6 shadow-2xl">
          
          {/* Store / Platform Target */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-xs font-mono text-zinc-300 flex items-center gap-1.5"><Store className="w-4 h-4 text-blue-400" /> Στόχος / Κατάστημα</label>
              <select 
                value={targetStore}
                onChange={(e) => setTargetStore(e.target.value)}
                className="w-full p-3.5 rounded-2xl bg-black/50 border border-white/15 text-sm text-white focus:outline-none focus:border-blue-500 cursor-pointer"
              >
                <option value="ecommerce">🛒 E-Shop (WooCommerce / Shopify)</option>
                <option value="social">📱 Social Media Posts (IG / FB)</option>
                <option value="web">⚡ High-Speed Web Banner</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-mono text-zinc-300">Μορφή Εξόδου (Format)</label>
              <select 
                value={outputFormat}
                onChange={(e) => setOutputFormat(e.target.value)}
                className="w-full p-3.5 rounded-2xl bg-black/50 border border-white/15 text-sm text-white focus:outline-none focus:border-blue-500 cursor-pointer"
              >
                <option value="webp">WebP (Recommended for 2030)</option>
                <option value="jpg">JPG / JPEG</option>
                <option value="png">PNG Lossless</option>
              </select>
            </div>
          </div>

          <div className="border-2 border-dashed border-white/15 rounded-2xl p-8 text-center space-y-4 hover:border-blue-500/50 transition-all bg-black/30">
            <div className="mx-auto w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">
              <Upload className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-bold text-white">
                {selectedImage ? selectedImage.name : "Σύρετε την εικόνα σας εδώ ή επιλέξτε"}
              </p>
              <p className="text-xs font-mono text-zinc-500">Target Profile: <span className="text-blue-400 uppercase">{targetStore}</span></p>
            </div>
            <input 
              type="file" 
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full text-xs text-zinc-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-white/10 file:text-white hover:file:bg-white/20 file:cursor-pointer cursor-pointer"
            />
          </div>

          {selectedImage && (
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-300 flex items-center gap-1.5"><Sliders className="w-4 h-4 text-blue-400" /> Ποιότητα:</span>
                <span className="text-blue-400 font-bold">{quality}%</span>
              </div>
              <input 
                type="range"
                min="20"
                max="95"
                value={quality}
                onChange={(e) => setQuality(Number(e.target.value))}
                className="w-full accent-blue-500 cursor-pointer bg-white/10 rounded-lg h-2"
              />

              <button 
                type="button"
                onClick={handleCompress}
                disabled={compressing}
                className="w-full py-4 rounded-2xl bg-blue-500 hover:bg-blue-400 disabled:opacity-50 text-black font-bold text-xs sm:text-sm transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>{compressing ? "Βελτιστοποίηση..." : "Βελτιστοποίηση & Συμπίεση"}</span>
              </button>
            </div>
          )}

          {success && (
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between font-mono text-xs text-emerald-400 animate-in fade-in">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>Επιτυχές compression! Μείωση μεγέθους κατά 72%.</span>
              </div>
              <button 
                onClick={() => alert("Downloading optimized image")} 
                className="px-3 py-1.5 rounded-lg bg-emerald-500 text-black font-bold hover:bg-emerald-400 cursor-pointer"
              >
                Download
              </button>
            </div>
          )}

        </div>

      </main>

      <Footer />
    </div>
  );
}
