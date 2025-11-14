import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const messages = [
  "Konsultasi Gratis",
  "Tanya Proyek?",
  "Chat Kami Sekarang"
];

export default function BubbleWA() {
  const [index, setIndex] = useState(0);

  // Loop pesan tiap 2.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex items-end gap-3">

      {/* LOOPING TEXT BUBBLE */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 20, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 20, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
          className="hidden md:block bg-white/90 backdrop-blur-xl border border-godinov-bg/10 px-4 py-2 rounded-xl shadow-md text-[#1B0F4E] text-sm font-medium"
        >
          {messages[index]}
        </motion.div>
      </AnimatePresence>

      {/* WA BUTTON */}
      <motion.a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-xl bg-godinov-cyan flex items-center justify-center text-godinov-bg
                   shadow-[0_8px_35px_rgba(0,229,212,0.45)] hover:shadow-[0_8px_45px_rgba(0,229,212,0.7)]
                   transition-all duration-300"
      >
        <img 
    src="/images/logo-wa.png"
    alt="WhatsApp" 
    className="w-12 h-12 object-contain"
    loading="lazy"
  />
      </motion.a>

    </div>
  );
}
