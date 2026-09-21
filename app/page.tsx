"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Link2, FileText, Lock, QrCode, Sparkles, 
  Search, ArrowRight, Zap, Palette, Mail, Briefcase, Shield, Cpu, TrendingUp, Box, Send, DollarSign
} from "lucide-react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const tools = [
    {
      title: "AI Invoice & Payment Reminder",
      desc: "Δημιουργήστε επαγγελματικές υπενθυμίσεις πληρωμής για απλήρωτα τιμολόγια με δυνατότητα PDF.",
      icon: <DollarSign className="w-6 h-6 text-emerald-400" />,
      href: "/tools/ai-invoice-reminder",
      category: "Business",
      tag: "100% Free"
    },
    {
      title: "AI LinkedIn Outreach",
      desc: "Δημιουργήστε έξυπνα, non-spammy μηνύματα δικτύωσης και πωλήσεων για το LinkedIn.",
      icon: <Send className="w-6 h-6 text-cyan-400" />,
      href: "/tools/ai-outreach",
      category: "Career",
      tag: "100% Free"
    },
    {
      title: "AI Startup Business Plan",
      desc: "Επαγγελματικό επενδυτικό Business Plan 3ετίας και financial model με τη βοήθεια της AI.",
      icon: <TrendingUp className="w-6 h-6 text-cyan-400" />,
      href: "/tools/ai-business-plan",
      category: "Business",
      tag: "100% Free"
    },
    {
      title: "AI Smart Contract Generator",
      desc: "Συντάξτε επίσημα νομικά συμφωνητικά έργου και NDA με τη βοήθεια της AI.",
      icon: <Shield className="w-6 h-6 text-emerald-400" />,
      href: "/tools/ai-contract",
      category: "Business",
      tag: "100% Free"
    },
    {
      title: "AI Proposal & Scope Generator",
      desc: "Συντάξτε επαγγελματικές προσφορές έργων και χρονοδιαγράμματα για πελάτες.",
      icon: <Briefcase className="w-6 h-6 text-amber-400" />,
      href: "/tools/ai-proposal",
      category: "Business",
      tag: "100% Free"
    },
    {
      title: "AI Resume Builder",
      desc: "Δημιουργήστε επαγγελματικό βιογραφικό και κατεβάστε το σε PDF άμεσα.",
      icon: <FileText className="w-6 h-6 text-purple-400" />,
      href: "/tools/resume-builder",
      category: "Career",
      tag: "100% Free"
    },
    {
      title: "AI Cover Letter",
      desc: "Δημιουργήστε προσαρμοσμένη συνοδευτική επιστολή για αιτήσεις εργασίας.",
      icon: <Mail className="w-6 h-6 text-pink-400" />,
      href: "/tools/cover-letter",
      category: "Career",
      tag: "100% Free"
    },
    {
      title: "AI Smart PDF & File Transformer",
      desc: "Μετατρέψτε και αναλύστε έγγραφα έξυπνα με προηγμένη τεχνητή νοημοσύνη.",
      icon: <Cpu className="w-6 h-6 text-purple-400" />,
      href: "/tools/file-converter",
      category: "Files",
      tag: "100% Free"
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
      
      {/* 3D BACKGROUND GLOW ORBS WITH ADVANCED ANIMATION */}
      <motion.div 
        animate={{ 
          scale: [1, 1.25, 1],
          opacity: [0.1, 0.22, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-500/15 rounded-full blur-[140px] pointer-events-none" 
      />

      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 space-y-20 w-full relative z-10">
        
        {/* 3D HERO SECTION WITH INTERACTIVE TILT OBJECT */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto space-y-8 perspective-1000"
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
            Δωρεάν καθημερινά utilities και προηγμένες 3D AI υπηρεσίες, διαθέσιμες σε όλους χωρίς περιορισμούς.
          </p>

          {/* INTERACTIVE 3D ROTATING CUBE / MODEL OBJECT */}
          <div className="flex justify-center pt-2">
            <motion.div
              drag
              dragConstraints={{ left: -50, right: 50, top: -30, bottom: 30 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              animate={{ rotate: [0, 360] }}
              transition={{ rotate: { duration: 25, repeat: Infinity, ease: "linear" } }}
              className="w-32 h-32 rounded-3xl bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-emerald-500/20 border border-white/20 backdrop-blur-xl shadow-[0_0_40px_rgba(6,182,212,0.3)] flex flex-col items-center justify-center cursor-grab active:cursor-grabbing group relative"
            >
              <div className="absolute inset-0 rounded-3xl bg-cyan-400/5 animate-ping pointer-events-none" />
              <Box className="w-10 h-10 text-cyan-400 group-hover:scale-125 transition-transform duration-300" />
              <span className="text-[10px] font-mono text-cyan-300 mt-2 font-bold tracking-widest uppercase">3D Interactive</span>
            </motion.div>
          </div>
        </motion.section>

        {/* SEARCH BAR WITH SCROLL REVEAL */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto px-2"
        >
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-500" />
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
              <input 
                type="text"
                placeholder="Αναζήτηση εργαλείου (π.χ. Invoice Reminder, LinkedIn, Business Plan)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-[#12131c] border border-white/15 text-xs sm:text-sm placeholder:text-zinc-500 focus:outline-none focus:border-cyan-500 transition-all text-white shadow-2xl"
              />
            </div>
          </div>
        </motion.section>

        {/* 3D TILT TOOLS GRID WITH SCROLL REVEAL */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.04,
                  rotateX: 3,
                  rotateY: 3,
                  boxShadow: "0 25px 50px -12px rgba(6, 182, 212, 0.25)"
                }}
                whileTap={{ scale: 0.96 }}
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
                      <span className="text-[10px] font-mono px-2.5 py-1 rounded-full border bg-emerald-500/10 text-emerald-300 border-emerald-500/20">
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
        </motion.section>

      </main>

      <Footer />
    </div>
  );
}
