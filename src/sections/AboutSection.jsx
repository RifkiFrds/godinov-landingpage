import React from "react";
import { motion } from "framer-motion";
import LottiePlayer from 'react-lottie-player';  
import { Heading, Paragraph } from "../components/ui/Text"; 
import {  
  Zap,         
  LayoutGrid,   
  Lightbulb,    
  Rocket       
} from "lucide-react";

// --- Helper Component kecil untuk Misi (UI Modern) ---
const MissionItem = ({ icon: Icon, title, children }) => (
  <motion.div
    className="flex items-start gap-3"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.3 }}
  >
    <div className="flex-shrink-0 bg-white/10 p-2.5 rounded-lg mt-1 border border-white/20">
      <Icon size={18} className="text-godinov-cyan" />
    </div>
    <div>
      <h4 className="font-semibold text-white/90 text-lg mb-0.5">{title}</h4>
      <Paragraph size="sm" className="!m-0 text-white/70">
        {children}
      </Paragraph>
    </div>
  </motion.div>
);

export default function AboutSection() {
  return (
    <section id="about" className="text-white py-10 md:py-22 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* --- Bagian Kiri: Teks & CTA --- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="lg:order-1"
        >
          {/* --- 2. JUDUL "PILL" MODERN --- */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/10 rounded-full border border-[#00E5D4] backdrop-blur-sm mb-4">
            <Zap size={16} className="text-[#00E5D4]" />
            <Paragraph size="sm" className="text-white/80 tracking-wider !m-0">
              Godinov — Gerak di Era Digital
            </Paragraph>
          </div>

          {/* Heading Utama (Slogan) */}
          <Heading size="h2" className="mb-6">
            Bergerak Menuju Hasil Profesional.
          </Heading>

          {/* Visi (Dibuat lebih menonjol) */}
          <div className="my-6 p-4 border-l-4 border-godinov-cyan bg-white/5 backdrop-blur-sm rounded-r-lg">
            <Heading size="h4" className="!text-xl text-white/90 mb-2">Visi Kami</Heading>
            <Paragraph className="!text-lg text-white/80 italic">
              "Mendorong transformasi digital dengan solusi inovatif yang menciptakan perubahan nyata dan positif."
            </Paragraph>
          </div>

          {/* Misi */}
          <div className="mb-10 mt-5">
            <Heading size="h4" className="text-white/90 mb-5 !text-2xl md:!text-3xl">
              Misi Kami:
            </Heading>
            
            {/* --- 3. IKON MISI DINAMIS --- */}
            <div className="space-y-5">
              <MissionItem icon={LayoutGrid} title="Layanan Digital Terdepan">
                Menyediakan layanan digital terdepan seperti pembuatan website dan pengembangan aplikasi.
              </MissionItem>
              
              <MissionItem icon={Lightbulb} title="Inovasi & Kolaborasi">
                Mendorong digitalisasi melalui pendekatan inovatif berbasis teknologi dan kolaborasi.
              </MissionItem>
              
              <MissionItem icon={Rocket} title="Ekosistem Profesional">
                Membangun ekosistem kerja cerdas, cepat, dan profesional.
              </MissionItem>
            </div>
          </div>
        </motion.div>

        {/* --- Bagian Kanan: Lottie Animation --- */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
          className="relative lg:order-2 flex justify-center items-center p-4 lg:p-0"
        >
          {/* Glow Background */}
          <div className="absolute -inset-16 bg-gradient-to-tr from-[#00E5D4]/40 via-[#6AFBF0]/20 to-transparent blur-[90px] rounded-full pointer-events-none" />

          <LottiePlayer
            path="/lottie/about-illustration.json"
            loop
            play
            className="relative drop-shadow-[0_10px_40px_rgba(0,229,212,0.35)]"
            style={{ width: '100%', maxWidth: '500px' }}
          />
        </motion.div>
      </div>
    </section>
  );
}