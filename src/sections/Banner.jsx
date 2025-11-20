import React from "react";
import { motion} from "framer-motion";
import Marquee from "react-fast-marquee"; 
import {
  SiReact,
  SiNodedotjs,
  SiLaravel,
  SiCodeigniter,
  SiExpress,
  SiNextdotjs,
  SiFigma,
  SiTailwindcss,
  SiFramer,
} from "react-icons/si"; 
import { Heading, Paragraph } from "../components/ui/Text"; 
import { Cpu } from "lucide-react"; 

const techLogos = [
  { icon: SiNodedotjs, name: "Node.JS" },
  { icon: SiReact, name: "React" },
  { icon: SiExpress, name: "Express.JS" },
  { icon: SiNextdotjs, name: "Next.JS" },
  { icon: SiLaravel, name: "Laravel" },
  { icon: SiCodeigniter, name: "CodeIgniter" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
  { icon: SiFigma, name: "Figma" },
  { icon: SiFramer, name: "Framer" },
];

export default function Banner() {
  return (
    <section className="text-godinov-bg py-10 md:py-20 relative overflow-hidden">

      <div className="max-w-6xl mx-auto px-10">
       <div className="mt-3 md:mt-6">

          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white/10 rounded-full border border-[#00E5D4] backdrop-blur-sm mb-4">
              <Cpu size={16} className="text-[#00E5D4]" />
              <Paragraph 
                size="sm" 
                className="text-godinov-bg/60 tracking-widest uppercase !m-0"
              >
                Teknologi yang Kami Kuasai
              </Paragraph>
            </div>
          </div>

          <Marquee
            className="rounded-full"
            gradientWidth={100}
            speed={40}
            pauseOnHover={true}
          >
            {techLogos.map((tech) => (
              <div key={tech.name} className="flex items-center gap-4 mx-10">
                <tech.icon size={24} className="text-godinov-bg/70" />
                <span className="text-lg font-medium text-godinov-bg/80">
                  {tech.name}
                </span>
              </div>
            ))}
          </Marquee>

        </div>
      </div>
    </section>
  );
}
