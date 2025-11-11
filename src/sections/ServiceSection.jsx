import React from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";

import { Heading, Paragraph } from "../components/ui/Text";

import { 
  Code,
  Paintbrush,
  Search,
  ShieldCheck,
  ArrowRight
} from "lucide-react";

// --- DATA LAYANAN (dengan tagline baru) ---
const services = [
  {
    icon: Code,
    title: "Web Development",
    tagline: "Performa • Skalabilitas • Estetika",
    desc: "Website dan aplikasi web yang cepat, modern, dan dibangun untuk berkembang mengikuti bisnis Anda."
  },
  {
    icon: Paintbrush,
    title: "UI/UX Design",
    tagline: "Desain Berbasis Empati",
    desc: "Kami menciptakan pengalaman yang mudah dipahami, memuaskan, dan memaksimalkan kenyamanan pengguna."
  },
  {
    icon: Search,
    title: "SEO & Digital Marketing",
    tagline: "Optimasi Berorientasi Hasil",
    desc: "Maksimalkan visibilitas merek Anda dengan pendekatan strategi SEO yang terukur dan berkelanjutan."
  },
  {
    icon: ShieldCheck,
    title: "Maintenance & Support",
    tagline: "Keamanan • Stabilitas • Keandalan",
    desc: "Agar sistem digital Anda tetap lancar, aman, dan siap melayani kebutuhan setiap saat."
  },
];


// --- CARD KOMPONEN BARU (lebih premium) ---
const ServiceCard = ({ icon: Icon, title, tagline, desc }) => (
  <motion.div
    className="group relative p-7 rounded-2xl border border-godinov-bg/10 bg-white/60 backdrop-blur-xl shadow-sm
               cursor-pointer transition-all duration-500 
               hover:border-godinov-cyan/50 hover:shadow-[0_18px_48px_rgba(0,229,212,0.22)]"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
  >
    {/* ICON BADGE */}
    <div className="mb-6 w-14 h-14 rounded-xl flex items-center justify-center
                    bg-gradient-to-br from-godinov-cyan/20 to-godinov-bg/10 
                    border border-godinov-cyan/30 backdrop-blur
                    text-godinov-bg">
      <Icon size={26} />
    </div>

    {/* TITLE */}
    <h3 className="text-xl font-semibold text-godinov-bg tracking-tight mb-1">
      {title}
    </h3>

    {/* TAGLINE */}
    <p className="text-godinov-cyan/80 text-sm font-medium mb-3">
      {tagline}
    </p>

    {/* DESCRIPTION */}
    <Paragraph className="text-godinov-bg/70 leading-relaxed mb-6">
      {desc}
    </Paragraph>

    {/* CTA */}
    <div className="flex items-center gap-2 text-godinov-bg/40 group-hover:text-godinov-cyan 
                    transition-all duration-300">
      <span className="text-sm font-medium">Pelajari lebih lanjut</span>
      <ArrowRight 
        size={18}
        className="transform group-hover:translate-x-1 transition-all duration-300" 
      />
    </div>
  </motion.div>
);


// --- MAIN SECTION ---
export default function ServiceSection() {
  const [emblaRef] = useEmblaCarousel({ align: "start", dragFree: true });

  return (
    <section id="services" className="bg-godinov-light -mt-px py-20 md:py-32 relative overflow-hidden">

      {/* Wave */}
      <div className="wave-godinov-shape"></div>

      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-godinov-bg/5 border border-[#1B0F4E] rounded-full mb-4">
            <Paintbrush size={16} className="text-godinov-bg/60" />
            <Paragraph size="sm" className="text-godinov-bg/60 uppercase tracking-wider !m-0">
              Layanan Kami
            </Paragraph>
          </div>

          <Heading size="h2" className="text-godinov-bg mb-4 tracking-tight leading-tight">
            Solusi Digital yang Tumbuh <br className="hidden md:block" /> Bersama Anda
          </Heading>

          <Paragraph className="text-godinov-bg/70">
            Fokus kami bukan hanya membangun produk — tapi menciptakan nilai yang bertahan.
          </Paragraph>
        </motion.div>


        {/* MOBILE CAROUSEL */}
        <div className="md:hidden" ref={emblaRef}>
          <div className="flex gap-5 pr-6">
            {services.map((s, i) => (
              <div key={i} className="min-w-[85%]">
                <ServiceCard {...s} />
              </div>
            ))}
          </div>
        </div>

        {/* DESKTOP GRID */}
        <div className="hidden md:grid grid-cols-2 gap-8">
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} />
          ))}
        </div>

      </div>
    </section>
  );
}
