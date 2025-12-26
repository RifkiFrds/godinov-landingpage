import React from "react";
import { Heading, Paragraph } from "../components/ui/Text";
import { ParallaxScroll } from "../components/ParallaxScroll";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { usePortfolio } from "../hooks/usePortfolio";

export const PortfolioSection = () => {
  const { data: projects, isLoading, isError } = usePortfolio();

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

          <Heading size="h2" className="text-godinov-bg font-bold mb-4">
            Hasil Karya & Solusi Digital
          </Heading>

          <Paragraph size="lg" className="text-godinov-bg/70">
            Menampilkan berbagai proyek yang telah kami kembangkan dengan fokus
            pada kualitas, performa, dan dampak nyata bagi pengguna.
          </Paragraph>
        </motion.div>
      </div>

      {/* STATE */}
      {isLoading && (
        <p className="text-center text-godinov-bg/60">
          Memuat portofolio...
        </p>
      )}

      {isError && (
        <p className="text-center text-red-400">
          Gagal memuat data portofolio
        </p>
      )}

      {!isLoading && projects?.length > 0 && (
        <ParallaxScroll projects={projects} className="h-[50rem]" />
      )}
    </section>
  );
};
