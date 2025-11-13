import React from "react";
import { Heading, Paragraph } from "../components/ui/Text";
import { ParallaxScroll } from "../components/ParallaxScroll";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import gocari from "../assets/images/portfolio/gocari.png";
import bantenstory from "../assets/images/portfolio/bantenstory.png";
import himti from "../assets/images/portfolio/himti.png";
import kelbelajar from "../assets/images/portfolio/kelbelajar.png";
import naikkelas from "../assets/images/portfolio/naikkelas.png";
import satsetai from "../assets/images/portfolio/satsetai.png";

    const myProjects = [
      {
        title: "GOCARI — Platform Komunitas Kota Tangerang",
        description:
          "Platform komunitas digital untuk edukasi, UMKM, dan kemanusiaan di Kota Tangerang. Menyediakan konten belajar gratis, dukungan digitalisasi UMKM, hingga distribusi bantuan sosial transparan berbasis teknologi Next.js & Supabase.",
        link: "http://gocari-id.netlify.app/",
        images: gocari,
      },
      {
        title: "HIMTI Website Revamp",
        description:
          "Redesain website resmi HIMTI UMT dengan tampilan modern dan fitur lengkap: info acara, pendaftaran lomba, kelompok belajar, data dosen pembina, serta dokumentasi kegiatan. Dibangun dengan React Vite & Tailwind, backend Express API.",
        link: "https://web-himtiumt.vercel.app/",
        images: himti,
      },
      {
        title: "SATSET AI — Productivity Web App",
        description:
          "Aplikasi AI untuk membantu mahasiswa menyelesaikan tugas lebih cepat. Menyediakan ChatBot AI, generator kerangka makalah, dan ringkasan jurnal instan. Dibangun dengan JS + Tailwind + Vite + Netlify Serverless & PWA support.",
        link: "https://satset-ai.netlify.app/",
        images: satsetai,
      },
      {
        title: "HIMTI Learning Group + HIMTIChat AI",
        description:
          "Platform komunitas belajar modern dengan integrasi AI berbasis IBM Granite. Dilengkapi PWA, animasi interaktif, filter mentor dinamis, riwayat chat pintar, voice input, dan export percakapan. Dibuat sebagai SPA React yang sangat optimal.",
        link: "https://kelompok-belajar-himti.netlify.app/",
        images: kelbelajar,
      },
      {
        title: "NaikKelas — Dashboard Perusahaan Trading",
        description:
          "Dashboard administrasi untuk mengelola konten dinamis, profil perusahaan, dan lowongan kerja. Menggunakan React di frontend dan Laravel API sebagai backend untuk pengelolaan data yang solid dan aman.",
        link: "https://naikkelas-dashboard.netlify.app/",
        images: naikkelas,
      },
      {
        title: "Banten Storyteller — Progressive Web App",
        description:
          "PWA modern yang menampilkan cerita inspiratif masyarakat Banten melalui teknologi peta interaktif. Memiliki fitur offline penuh, application shell caching, background sync, dan pengalaman seperti aplikasi native.",
        link: "https://bantenstoryteller.netlify.app/",
        images: bantenstory,
      },
    ];
    
export const PortfolioSection = () => {
  return (
    <section id="portfolio" className="relative overflow-hidden bg-godinov py-24">
      <div className="relative max-w-6xl mx-auto px-6 z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-godinov-bg/5 border border-[#00E5D4] rounded-full mb-4">
            <Sparkles size={16} className="text-godinov-bg/60" />
            <Paragraph
              size="sm"
              className="text-godinov-bg/60 uppercase tracking-wider m-0"
            >
              Portofolio
            </Paragraph>
          </div>

          <Heading size="h2" className="text-godinov-bg font-bold leading-tight mb-4">
            Hasil Karya & Solusi Digital
          </Heading>

          <Paragraph size="lg" className="text-godinov-bg/70">
            Menampilkan berbagai proyek yang telah kami kembangkan — mulai dari
            sistem manajemen perusahaan, aplikasi lintas platform, hingga desain
            antarmuka modern. Setiap proyek dirancang untuk memberikan dampak
            nyata bagi klien dan pengguna.
          </Paragraph>
        </motion.div>
      </div>

      <ParallaxScroll projects={myProjects} className="h-[50rem]" />
    </section>
  );
};
