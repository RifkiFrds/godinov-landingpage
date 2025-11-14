import React from "react";
import { motion } from "framer-motion";
import { Heading, Paragraph } from "../components/ui/Text";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../components/ui/Button";

const packages = [
  {
    image: "/images/pricing/bronze.png",
    title: "Bronze",
    price: "Rp 500K – 1 Juta",
    desc: "Cocok untuk UMKM atau personal brand yang ingin mulai tampil profesional.",
    features: [
      "Landing Page / Profil",
      "Desain Clean",
      "Mobile Responsive",
      "Gratis Konsultasi"
    ],
    highlight: false
  },
  {
    image: "/images/pricing/silver.png",
    title: "Silver",
    price: "Rp 1.1 – 3 Juta",
    desc: "Paket ideal untuk bisnis yang ingin tampilan lebih serius dan siap scale.",
    features: [
      "Halaman Lebih Banyak",
      "UI/UX Professional",
      "Integrasi WA / Form",
      "SEO On-Page Dasar"
    ],
    highlight: true
  },
  {
    image: "/images/pricing/gold.png",
    title: "Gold",
    price: "Custom / Negosiasi",
    desc: "Solusi premium dengan fitur dan sistem sesuai kebutuhan Anda.",
    features: [
      "Custom Fitur & Sistem",
      "UX Research & Workshop",
      "Maintenance & Support",
      "Full Team Collaboration"
    ],
    highlight: false
  }
];

export default function PricingSection() {
  return (
    <section id="paket" className="relative overflow-hidden bg-godinov-light py-24">

      <div className="relative max-w-6xl mx-auto px-6 z-10">
        
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-godinov-bg/5 border border-[#1B0F4E]/10 rounded-full mb-4">
            <Sparkles size={16} className="text-godinov-bg/60" />
            <Paragraph size="sm" className="text-godinov-bg/60 uppercase tracking-wider !m-0">
              Paket Layanan
            </Paragraph>
          </div>

          <Heading size="h2" className="text-godinov-bg leading-tight mb-4">
            Pilih Paket Sesuai Kebutuhan Anda
          </Heading>
          <Paragraph className="text-godinov-bg/70">
            Tersedia pilihan fleksibel untuk setiap fase perkembangan bisnis Anda.
          </Paragraph>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((p, i) => (
            <motion.div
              key={i}
              className={`relative rounded-2xl p-7 backdrop-blur-xl cursor-pointer transition-all duration-500
              ${
                p.highlight
                  ? "bg-white/80 border border-godinov-cyan/40 shadow-[0_18px_48px_rgba(0,229,212,0.25)] scale-[1.03]"
                  : "bg-white/60 border border-godinov-bg/10 shadow-sm hover:border-godinov-cyan/40 hover:shadow-[0_18px_48px_rgba(0,229,212,0.18)]"
              }`}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              whileHover={{ translateY: -6 }}
            >
              {p.highlight && (
                <div className="absolute -top-4 inset-x-0 flex justify-center">
                  <div className="px-4 py-1.5 text-xs font-medium rounded-full
                                  border border-godinov-cyan/40 bg-godinov-cyan/10 backdrop-blur-md
                                  shadow-[0_4px_12px_rgba(0,229,212,0.35)] text-godinov-bg">
                    ⭐ Best Value
                  </div>
                </div>
              )}

              {/* Image */}
              <div className="w-full h-36 flex justify-center mb-6">
                <img src={p.image} alt={p.title} className="h-full object-contain drop-shadow-md" loading="lazy" />
              </div>

              {/* Title + Price */}
              <h3 className="text-xl font-semibold text-godinov-bg tracking-tight">{p.title}</h3>
              <p className="text-godinov-cyan font-semibold mt-1 mb-4">{p.price}</p>

              {/* Desc */}
              <Paragraph className="text-godinov-bg/70 mb-6 leading-relaxed">{p.desc}</Paragraph>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {p.features.map((f, index) => (
                  <li key={index} className="flex items-center gap-3 text-godinov-bg/70">
                    <Check size={18} className="text-godinov-cyan" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                href="https://wa.me/6288294799116"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                radius="lg"
                size="md"
                className="flex items-center gap-2 font-medium"
              >
                Konsultasi Gratis Sekarang
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="wave-penutup-shape"></div>
    </section>
  );
}
