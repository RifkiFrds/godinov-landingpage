import React from "react";
import { motion } from "framer-motion";
import { 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin 
} from "lucide-react";
import { Heading, Paragraph } from "../components/ui/Text"; 

// Helper Component kecil untuk link
const FooterLink = ({ href, children }) => (
  <motion.a
    href={href}
    className="text-godinov-bg/70 hover:text-godinov-bg transition-colors duration-200"
    whileHover={{ y: -2 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    {children}
  </motion.a>
);

// Helper Component untuk ikon sosial
const SocialIcon = ({ href, icon: Icon }) => (
  <motion.a
    href={href}
    className="text-godinov-bg/70 hover:text-godinov-bg transition-colors duration-200"
    whileHover={{ scale: 1.1, y: -2 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Icon size={20} />
  </motion.a>
);

export default function Footer() {
  return (
    <footer className="bg-godinov pt-20 pb-10 font-poppins text-godinov-bg">
      <div className="max-w-6xl mx-auto px-6">
        {/* --- Bagian 2: Link Utama Footer --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Kolom Kiri: Logo, Tagline, Sosial */}
          <div className="md:col-span-4 lg:col-span-5">
            <img
              src="/images/logo.png"
              alt="Godinov"
              className="h-8 mb-4"
              onError={(e) =>
                (e.target.src =
                  "https://placehold.co/150x40/FFFFFF/1B0F4E?text=Godinov&font=poppins")
              }
              loading="lazy"
            />
            {/* MENGGUNAKAN KOMPONEN PARAGRAPH */}
            <Paragraph
              size="sm"
              className="text-godinov-bg/80 leading-relaxed max-w-xs"
            >
              Bergerak menuju hasil profesional. Solusi digital yang rapi,
              cepat, dan terarah.
            </Paragraph>
            <div className="flex items-center gap-5 mt-6">
              <SocialIcon href="https://www.instagram.com/godinov.id/" target="_blank" icon={Instagram} />
              <SocialIcon href="#" icon={Linkedin} />
              <SocialIcon href="mailto:godinov.id@gmail.com" icon={Mail} />
            </div>
          </div>

          {/* Kolom Kanan: Navigasi Links */}
          {/* Mengubah sm:grid-cols-4 menjadi sm:grid-cols-3 */}
          <div className="md:col-span-8 lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-godinov-bg mb-4">Perusahaan</h3>
              <nav className="flex flex-col gap-3">
                <FooterLink href="#about">Tentang Kami</FooterLink>
                <FooterLink href="#services">Layanan</FooterLink>
                <FooterLink href="#portfolio">Portofolio</FooterLink>
              </nav>
            </div>

            <div>
              <h3 className="font-semibold text-godinov-bg mb-4">Layanan</h3>
              <nav className="flex flex-col gap-3">
                <FooterLink href="#web-dev">Web Development</FooterLink>
                <FooterLink href="#ui-ux">UI/UX Design</FooterLink>
                <FooterLink href="#seo">SEO</FooterLink>
                <FooterLink href="#maintenance">Maintenance</FooterLink>
              </nav>
            </div>

            {/* --- KOLOM RESOURCES DIHAPUS --- */}

            <div>
              <h3 className="font-semibold text-godinov-bg mb-4">Kontak</h3>
              <div className="flex flex-col gap-3 text-godinov-bg/70">
                <a
                  href="https://wa.me/+6283845663345"
                  target="_blank"
                  className="flex items-center gap-2.5 hover:text-godinov-bg transition-colors"
                >
                  <Phone size={16} />
                  <span>+62 838-4566-3345</span>
                </a>
                <a
                  href="mailto:halo@godinov.com"
                  className="flex items-center gap-3 hover:text-godinov-bg transition-colors"
                >
                  <span>
                    <Mail size={16} />
                  </span>
                  <span>godinov.id@gmail.com</span>
                </a>
                <div className="flex items-start gap-2.5">
                  <MapPin size={16} className="mt-1" />
                  <span>Tangerang, Indonesia</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Bagian 3: Copyright & Legal --- */}
        <div className="border-t border-godinov-bg/20 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          {/* MENGGUNAKAN KOMPONEN PARAGRAPH */}
          <Paragraph size="sm" className="text-godinov-bg/60 mb-4 md:mb-0">
            © {new Date().getFullYear()} Godinov — All Rights Reserved.
          </Paragraph>
          <div className="flex items-center gap-6">
            <a
              href="#privacy"
              className="text-godinov-bg/60 hover:text-godinov-bg transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-godinov-bg/60 hover:text-godinov-bg transition-colors"
            >
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}