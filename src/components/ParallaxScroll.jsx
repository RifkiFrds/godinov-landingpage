import React from "react";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react"; // Impor ikon
import { cn } from "../lib/utils";

// Komponen sekarang menerima 'projects' bukan 'images'
export const ParallaxScroll = ({ projects, className }) => {
  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(projects.length / 3);
  const firstPart = projects.slice(0, third);
  const secondPart = projects.slice(third, 2 * third);
  const thirdPart = projects.slice(2 * third);

  return (
    <div
      className={cn("h-[40rem] items-start overflow-y-auto w-full", className)}
      ref={gridRef}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10">
        {/* KOLOM 1 */}
        <div className="grid gap-10">
          {firstPart.map((project, idx) => (
            <motion.div
              style={{ y: translateFirst }}
              key={"grid-1" + idx}
              className="relative group" // Tambahkan 'relative' dan 'group'
            >
              <a
                href={project.link} // Tambahkan link di sini
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src={project.src} // Gunakan project.src
                  className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 shadow-xl"
                  height="400"
                  width="400"
                  alt={project.title} // Gunakan project.title untuk alt text
                />

                {/* Overlay saat hover */}
                <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />

                {/* Konten Teks saat hover */}
                <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-4">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-200 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center text-white font-medium mt-3 text-sm">
                    Lihat Proyek
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* KOLOM 2 */}
        <div className="grid gap-10">
          {secondPart.map((project, idx) => (
            <motion.div
              style={{ y: translateSecond }}
              key={"grid-2" + idx}
              className="relative group" // Tambahkan 'relative' dan 'group'
            >
              <a
                href={project.link} // Tambahkan link di sini
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src={project.src} // Gunakan project.src
                  className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 shadow-xl"
                  height="400"
                  width="400"
                  alt={project.title} // Gunakan project.title untuk alt text
                />

                {/* Overlay saat hover */}
                <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />

                {/* Konten Teks saat hover */}
                <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-4">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-200 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center text-white font-medium mt-3 text-sm">
                    Lihat Proyek
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* KOLOM 3 */}
        <div className="grid gap-10">
          {thirdPart.map((project, idx) => (
            <motion.div
              style={{ y: translateThird }}
              key={"grid-3" + idx}
              className="relative group" // Tambahkan 'relative' dan 'group'
            >
              <a
                href={project.link} // Tambahkan link di sini
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src={project.src} // Gunakan project.src
                  className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 shadow-xl"
                  height="400"
                  width="400"
                  alt={project.title} // Gunakan project.title untuk alt text
                />

                {/* Overlay saat hover */}
                <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />

                {/* Konten Teks saat hover */}
                <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-4">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-200 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center text-white font-medium mt-3 text-sm">
                    Lihat Proyek
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
