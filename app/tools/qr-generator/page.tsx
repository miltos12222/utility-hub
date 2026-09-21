"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { QrCode, ArrowLeft, Download, Wifi, Globe, Mail } from "lucide-react";

export default function QrGeneratorPage() {
  const [qrType, setQrType] = useState("url");
  const [inputValue, setInputValue] = useState("https://www.miltospapageorgiou.com");
  const [wifiSsid, setWifiSsid] = useState("");
  const [wifiPass, setWifiPass] = useState("");

  const getQRData = () => {
    if (qrType === "url") return inputValue || "https://www.miltospapageorgiou.com";
    if (qrType === "wifi") return `WIFI:S:${wifiSsid};T:WPA;P:${wifiPass};;`;
    if (qrType === "email") return `mailto:${inputValue}`;
    return inputValue;
  };

  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(getQRData())}&color=00f2fe&bgcolor=0b0c10`;

  const handleDownload = async () => {
    try {
      const response = await fetch(qrImageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `miltos-qrcode-${qrType}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading QR code", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#e5e7eb] selection:bg-cyan-500/25 selection:text-white flex flex-col justify-between">
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 space-y-8 w-full">
        
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-cyan-400 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Επιστροφή στα Εργαλεία
        </Link>

        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-mono font-bold">
            <QrCode className="w-3.5 h-3.5" /> 2030 Advanced QR Engine
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Smart QR Code Generator</h1>
          <p className="text-xs sm:text-sm text-zinc-400">
            Δημιουργήστε δυναμικά QR codes για Websites, Wi-Fi Networks και Emails με ένα κλικ.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 shadow-2xl items-center">
          
          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-2">
              <button 
                onClick={() => setQrType("url")}
                className={`py-2.5 rounded-xl font-mono text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer ${qrType === "url" ? "bg-pink-500 text-black font-bold" : "bg-white/5 text-zinc-400"}`}
              >
                <Globe className="w-3.5 h-3.5" /> URL
              </button>
              <button 
                onClick={() => setQrType("wifi")}
                className={`py-2.5 rounded-xl font-mono text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer ${qrType === "wifi" ? "bg-pink-500 text-black font-bold" : "bg-white/5 text-zinc-400"}`}
              >
                <Wifi className="w-3.5 h-3.5" /> Wi-Fi
              </button>
              <button 
                onClick={() => setQrType("email")}
                className={`py-2.5 rounded-xl font-mono text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer ${qrType === "email" ? "bg-pink-500 text-black font-bold" : "bg-white/5 text-zinc-400"}`}
              >
                <Mail className="w-3.5 h-3.5" /> Email
              </button>
            </div>

            {qrType === "url" && (
              <div className="space-y-2">
                <label className="block text-xs font-mono text-zinc-300">Website URL</label>
                <input 
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="w-full p-3.5 rounded-2xl bg-black/50 border border-white/15 text-sm text-white focus:outline-none focus:border-pink-500"
                />
              </div>
            )}

            {qrType === "wifi" && (
              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="block text-xs font-mono text-zinc-300">Wi-Fi Name (SSID)</label>
                  <input 
                    type="text"
                    placeholder="MyHomeWiFi"
                    value={wifiSsid}
                    onChange={(e) => setWifiSsid(e.target.value)}
                    className="w-full p-3 rounded-xl bg-black/50 border border-white/15 text-sm text-white"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-xs font-mono text-zinc-300">Wi-Fi Password</label>
                  <input 
                    type="text"
                    placeholder="secretpassword"
                    value={wifiPass}
                    onChange={(e) => setWifiPass(e.target.value)}
                    className="w-full p-3 rounded-xl bg-black/50 border border-white/15 text-sm text-white"
                  />
                </div>
              </div>
            )}

            {qrType === "email" && (
              <div className="space-y-2">
                <label className="block text-xs font-mono text-zinc-300">Email Address</label>
                <input 
                  type="email"
                  placeholder="miltos@example.com"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="w-full p-3.5 rounded-2xl bg-black/50 border border-white/15 text-sm text-white"
                />
              </div>
            )}

            <button 
              type="button"
              onClick={handleDownload}
              className="w-full py-4 rounded-2xl bg-pink-500 hover:bg-pink-400 text-black font-bold text-xs sm:text-sm transition-all shadow-lg shadow-pink-500/25 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download QR (PNG)</span>
            </button>
          </div>

          <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-black/40 border border-white/10 space-y-4">
            <div className="p-3 bg-white rounded-2xl shadow-inner">
              <img src={qrImageUrl} alt="QR Code Preview" className="w-48 h-48 object-contain" />
            </div>
            <span className="text-[11px] font-mono text-zinc-400">⚡ Live 2030 Generator</span>
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}
