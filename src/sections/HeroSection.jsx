import React from "react";
import { useEffect, useRef} from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Heading, Paragraph } from "../components/ui/Text";
import { Button } from "../components/ui/Button";

const AnimatedStat = ({ value, label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const spring = useSpring(0, { mass: 0.8, stiffness: 40, damping: 15 });
  const displayValue = useTransform(spring, (v) => v.toFixed(0));

  useEffect(() => {
    if (isInView) spring.set(value);
  }, [isInView, value, spring]);

  return (
    <div ref={ref} className="text-center">
      <Heading size="h2" className="text-godinov-bg">
        <motion.span>{displayValue}</motion.span>+
      </Heading>
      <Paragraph size="sm" className="text-godinov-bg/70 mt-2">
        {label}
      </Paragraph>
    </div>
  );
};

const AnimatedWords = ({ text, className }) => {
  const words = text.split(" ");

  return (
    <motion.span
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.08 } }
      }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-[0.25em]"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { type: "spring", stiffness: 100, damping: 12 }
            }
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default function HeroSection() {
  
  return (
   <section id="home" className="text-godinov-bg relative min-h-[100vh] flex items-center justify-center text-center overflow-hidden">

      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute -top-1/4 left-1/4 w-1/2 h-1/2 bg-godinov-cyan/10 rounded-full blur-[120px] opacity-70"
          animate={{ scale: [1, 1.1, 1], opacity: [0.7, 0.5, 0.7] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-white/5 rounded-full blur-[100px] opacity-80"
          animate={{ scale: [1, 1.05, 1], x: [0, -20, 0], y: [0, 10, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <Heading size="h1" className="mb-6">
          <AnimatedWords text="Buat Bisnismu Terlihat Profesional di Dunia Digital." />
        </Heading>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Paragraph size="lg" className="max-w-4xl mx-auto mb-10 text-white/80">
            Website rapi, cepat, dan siap pakai — tanpa ribet teknis. Godinov bantu kamu tampil lebih meyakinkan dan siap bersaing.
          </Paragraph>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            as={motion.a}
            href="#services"
            variant="primary"
            size="lg"
            radius="full"
            className="gap-2 group sm:w-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Jelajahi Layanan
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight size={18} />
            </span>
          </Button>

          <Button
            as={motion.a}
            href="#contact"
            variant="secondary"
            size="lg"
            radius="full"
            className="gap-2 group sm:w-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Hubungi Kami
            <Mail size={18} />
          </Button>
        </motion.div>

           {/* === Bagian A: Statistik (4 Kolom) === */}
       <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 max-w-4xl mx-auto mt-14 md:mt-20">
          <AnimatedStat value={100} label="Proyek Selesai" />
          <AnimatedStat value={50} label="Klien Puas" />
          <AnimatedStat value={5} label="Tahun Pengalaman" />
          <AnimatedStat value={10} label="Tim Ahli" />
        </div>
      </div>
    </section>
  );
}
