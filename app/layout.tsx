"use client";

import { useState, useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { motion, AnimatePresence } from "framer-motion";
import { Bookmark, X, Trash2, Box, Sparkles } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface SavedItem {
  id: string;
  title: string;
  type: string;
  content: string;
  date: string;
}

function InlineWorkspaceSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState<SavedItem[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("utility_hub_workspace");
    if (saved) {
      try {
        setItems(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, [isOpen]);

  const removeItem = (id: string) => {
    const updated = items.filter(item => item.id !== id);
    setItems(updated);
    localStorage.setItem("utility_hub_workspace", JSON.stringify(updated));
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-mono text-xs font-bold shadow-[0_0_30px_rgba(6,182,212,0.4)] border border-white/20 backdrop-blur-xl flex items-center gap-2 cursor-pointer"
      >
        <Bookmark className="w-4 h-4 text-cyan-200 animate-pulse" />
        <span>My Workspace ({items.length})</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex justify-end">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ x: "100%", rotateY: -15 }}
              animate={{ x: 0, rotateY: 0 }}
              exit={{ x: "100%", rotateY: -15 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-md h-full bg-[#0b0c10]/90 border-l border-white/10 backdrop-blur-2xl p-6 flex flex-col justify-between shadow-[0_0_50px_rgba(0,0,0,0.8)] z-10 overflow-y-auto select-none"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                      <Box className="w-5 h-5 animate-spin" />
                    </div>
                    <div>
                      <h2 className="text-base font-bold text-white">Interactive Vault</h2>
                      <p className="text-[10px] font-mono text-zinc-400">Το προσωπικό σου cloud ιστορικό</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-3">
                  {items.length === 0 ? (
                    <div className="text-center py-16 space-y-2 text-zinc-500 font-mono text-xs">
                      <Bookmark className="w-8 h-8 mx-auto opacity-30" />
                      <p>Δεν υπάρχουν αποθηκευμένα αντικείμενα ακόμα.</p>
                      <p className="text-[10px] text-zinc-600">Χρησιμοποίησε τα εργαλεία για να αποθηκεύσεις αυτόματα.</p>
                    </div>
                  ) : (
                    items.map((item) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/40 transition-all space-y-2 group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                            {item.type}
                          </span>
                          <span className="text-[10px] font-mono text-zinc-500">{item.date}</span>
                        </div>
                        <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">{item.title}</h4>
                        <p className="text-xs text-zinc-400 line-clamp-2 font-mono bg-black/40 p-2 rounded-lg">{item.content}</p>
                        
                        <div className="flex items-center justify-end gap-2 pt-2 border-t border-white/5">
                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-colors cursor-pointer text-xs flex items-center gap-1 font-mono"
                          >
                            <Trash2 className="w-3.5 h-3.5" /> Διαγραφή
                          </button>
                        </div>
                      </motion.div>
                    ))
                  )}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 text-center">
                <p className="text-[10px] font-mono text-zinc-500">
                  Utility Hub 3D Workspace • 100% Secure Local Vault
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="el"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0b0c10] text-[#e5e7eb]">
        {children}
        <InlineWorkspaceSidebar />
        <Analytics />
      </body>
    </html>
  );
}
