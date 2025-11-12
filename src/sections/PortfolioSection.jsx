import React from "react";
import { Heading, Paragraph } from "../components/ui/Text";
import { ParallaxScroll } from "../components/ParallaxScroll";

// 1. Impor yang dibutuhkan untuk header baru
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react"; // Pastikan Anda sudah npm install lucide-react

// 2. Data portofolio Anda (tetap sama)
const myProjects = [
  {
    title: "Sistem Manajemen Godinov",
    description:
      "Platform manajemen konten internal perusahaan dengan React dan Node.js.",
    link: "https://example.com",
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Aplikasi E-Commerce Cyan",
    description:
      "Aplikasi mobile e-commerce lintas platform menggunakan Flutter.",
    link: "https://example.com",
    src: "https://images.unsplash.com/photo-1557804520-0f3c6b8b9a1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Dashboard Analitik Pro",
    description: "Visualisasi data real-time menggunakan D3.js dan Next.js.",
    link: "https://example.com",
    src: "https://images.unsplash.com/photo-1488190211105-8b0e65682f34?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Platform Booking 'Go'",
    description: "Website booking travel dengan integrasi pembayaran global.",
    link: "https://example.com",
    src: "https://images.unsplash.com/photo-1519389950473-47324b824d5d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Desain UI/UX 'Light'",
    description:
      "Studi kasus dan desain high-fidelity untuk aplikasi perbankan.",
    link: "https://example.com",
    src: "https://images.unsplash.com/photo-1506784983877-4556d365b20b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Karya Fotografi",
    description:
      "Portofolio pribadi untuk menampilkan karya fotografi perjalanan.",
    link: "https://example.com",
    src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// 3. Komponen Section dengan Header Baru
export const PortfolioSection = () => {
  return (
    // Menggunakan style section dari contoh Anda
    <section
      id="portofolio" // Ganti ID menjadi "portofolio"
      className="relative overflow-hidden bg-godinov py-24"
    >
      <div className="relative max-w-6xl mx-auto px-6 z-10">
        {/* Header Baru (diambil dari contoh Anda) */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }} // Animasi hanya berjalan sekali
        >
          {/* "Pill" badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-godinov-bg/5 border border-[#00E5D4] rounded-full mb-4">
            <Sparkles size={16} className="text-godinov-bg/60" />

            {/* Menggunakan komponen <Paragraph> kamu */}
            <Paragraph
              size="sm"
              className="text-godinov-bg/60 uppercase tracking-wider m-0"
            >
              Portofolio
            </Paragraph>
          </div>

          {/* Heading menggunakan komponen <Heading> kamu */}
          <Heading
            size="h2"
            className="text-godinov-bg font-bold leading-tight mb-4"
          >
            Portofolio Proyek
          </Heading>

          {/* Paragraf deskripsi menggunakan <Paragraph> kamu */}
          <Paragraph size="lg" className="text-godinov-bg/70">
            Beberapa karya pilihan yang menunjukkan keahlian saya dalam desain
            dan pengembangan web modern.
          </Paragraph>
        </motion.div>
      </div>

      {/* Render komponen ParallaxScroll (tetap sama) */}
      <ParallaxScroll projects={myProjects} className="h-[50rem]" />
    </section>
  );
};
