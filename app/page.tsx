"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Link2, FileText, Lock, Code, QrCode, Sparkles, 
  Heart, Search, ArrowRight, Zap, CheckCircle2, Crown, Image as ImageIcon, Palette, Mail, Briefcase, Shield, Cpu, TrendingUp 
} from "lucide-react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const tools = [
    {
      title: "AI Startup Business Plan",
      desc: "Επαγγελματικό επενδυτικό Business Plan 3ετίας και financial model (High-Ticket: 12€).",
      icon: <TrendingUp className="w-6 h-6 text-cyan-400" />,
      href: "/tools/ai-business-plan",
      category: "Business",
      tag: "12€ High-Ticket"
    },
    {
      title: "AI Smart Contract Generator",
      desc: "Συντάξτε επίσημα νομικά συμφωνητικά έργου και NDA με τη βοήθεια της AI (Premium: 5€).",
      icon: <Shield className="w-6 h-6 text-emerald-400" />,
      href: "/tools/ai-contract",
      category: "Business",
      tag: "5€ Pay-per-use"
    },
    {
      title: "AI Proposal & Scope Generator",
      desc: "Συντάξτε επαγγελματικές προσφορές έργων και χρονοδιαγράμματα για πελάτες (Premium: 4€).",
      icon: <Briefcase className="w-6 h-6 text-amber-400" />,
      href: "/tools/ai-proposal",
      category: "Business",
      tag: "4€ Pay-per-use"
    },
    {
      title: "AI Resume Builder",
      desc: "Δημιουργήστε επαγγελματικό βιογραφικό και κατεβάστε το σε PDF (Premium: 3€).",
      icon: <FileText className="w-6 h-6 text-purple-400" />,
      href: "/tools/resume-builder",
      category: "Career",
      tag: "3€ Pay-per-use"
    },
    {
      title: "AI Cover Letter",
      desc: "Δημιουργήστε προσαρμοσμένη συνοδευτική επιστολή για αιτήσεις εργασίας (Premium: 2€).",
      icon: <Mail className="w-6 h-6 text-pink-400" />,
      href: "/tools/cover-letter",
      category: "Career",
      tag: "2€ Pay-per-use"
    },
    {
      title: "AI Smart PDF & File Transformer",
      desc: "Μετατρέψτε και αναλύστε έγγραφα έξυπνα με προηγμένη τεχνητή νοημοσύνη (Premium: 2€).",
      icon: <Cpu className="w-6 h-6 text-purple-400" />,
      href: "/tools/file-converter",
      category: "Files",
      tag: "2€ Pay-per-use"
    },
    {
      title: "URL Shortener",
      desc: "Μετατρέψτε τα μακριά links σας σε μικρά, κομψά και ασφαλή URLs.",
      icon: <Link2 className="w-6 h-6 text-cyan-400" />,
      href: "/tools/url-shortener",
      category: "Links",
      tag: "100% Free"
    },
    {
      title: "Password Generator",
      desc: "Δημιουργήστε ισχυρούς και απόλυτα ασφαλείς κωδικούς πρόσβασης με ένα κλικ.",
      icon: <Lock className="w-6 h-6 text-emerald-400" />,
      href: "/tools/password-generator",
      category: "Security",
      tag: "100% Free"
    },
    {
      title: "QR Code Generator",
      desc: "Δημιουργήστε προσαρμοσμένα QR codes για Websites, Wi-Fi και Emails.",
      icon: <QrCode className="w-6 h-6 text-pink-400" />,
      href: "/tools/qr-generator",
      category: "Links",
      tag: "100% Free"
    },
    {
      title: "Color Palette Extractor",
      desc: "Εξερευνήστε παλέτες και δοκιμάστε custom χρώματα με live inspector.",
      icon: <Palette className="w-6 h-6 text-indigo-400" />,
      href: "/tools/color-palette",
      category: "Developer",
      tag: "100% Free"
    }
  ];

  const filteredTools = tools.filter(tool => 
    tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#e5e7eb] selection:bg-cyan-500/25 selection:text-white flex flex-col justify-between overflow-x-hidden relative">
      
      {/* 3D BACKGROUND GLOW ORBS */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />

      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 space-y-16 w-full relative z-10">
        
        {/* 3D HERO SECTION */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-6 perspective-1000"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold tracking-wider uppercase shadow-[0_0_20px_rgba(6,182,212,0.15)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" /> Next-Gen 3D AI Platform • 2030 Standard
          </motion.div>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            Εργαλεία τεχνητής νοημοσύνης, <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.3)]">
              σχεδιασμένα για το μέλλον.
            </span>
          </h1>

          <p className="text-zinc-400 text-xs sm:text-base leading-relaxed px-2">
            Δωρεάν καθημερινά utilities και προηγμένες 3D AI υπηρεσίες με άμεση προστατευμένη προεπισκόπηση και πληρωμή μέσω Revolut.
          </p>
        </motion.section>

        {/* SEARCH BAR */}
        <section className="max-w-xl mx-auto px-2">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-500" />
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
              <input 
                type="text"
                placeholder="Αναζήτηση εργαλείου (π.χ. Business Plan, Contract, PDF)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-[#12131c] border border-white/15 text-xs sm:text-sm placeholder:text-zinc-500 focus:outline-none focus:border-cyan-500 transition-all text-white shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* 3D TILT TOOLS GRID */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 px-2">
            <h2 className="text-lg sm:text-xl font-bold flex items-center gap-2">
              <Zap className="w-5 h-5 text-cyan-400 animate-bounce" /> Πλατφόρμα Υπηρεσιών ({filteredTools.length})
            </h2>
            <span className="text-xs font-mono text-zinc-500">3D Interactive Cards</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool, idx) => (
              <motion.div
                key={idx}
                whileHover={{ 
                  y: -8, 
                  scale: 1.03,
                  rotateX: 2,
                  rotateY: 2,
                  boxShadow: "0 20px 40px -15px rgba(6, 182, 212, 0.2)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="h-full"
              >
                <Link 
                  href={tool.href}
                  className="group relative p-6 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/60 hover:bg-white/[0.06] transition-all duration-300 flex flex-col justify-between space-y-4 h-full shadow-2xl overflow-hidden backdrop-blur-md"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="space-y-3 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-2xl bg-black/40 border border-white/10 group-hover:scale-110 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-300 shadow-lg">
                        {tool.icon}
                      </div>
                      <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full border ${tool.tag.includes("Free") ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/20" : tool.tag.includes("High-Ticket") ? "bg-cyan-500/10 text-cyan-300 border-cyan-500/20 shadow-[0_0_10px_rgba(6,182,212,0.2)]" : "bg-purple-500/10 text-purple-300 border-purple-500/20"}`}>
                        {tool.tag}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                      {tool.title}
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-cyan-400" />
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">{tool.desc}</p>
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500 relative z-10">
                    <span>Κατηγορία: {tool.category}</span>
                    <span className="text-cyan-400 flex items-center gap-1 font-bold group-hover:translate-x-1 transition-transform">Άμεση χρήση &rarr;</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
