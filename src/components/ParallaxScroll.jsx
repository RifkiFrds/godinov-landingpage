import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "../lib/utils";

export const ParallaxScroll = ({ projects, className }) => {
  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  // Efek parallax antar kolom
  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -150]);

  // Pisahkan data jadi 3 kolom
  const third = Math.ceil(projects.length / 3);
  const firstPart = projects.slice(0, third);
  const secondPart = projects.slice(third, 2 * third);
  const thirdPart = projects.slice(2 * third);

  // Komponen tampilan proyek
  const ProjectCard = ({ project, style }) => (
    <motion.div
      style={style}
      className="relative group overflow-hidden rounded-3xl shadow-2xl"
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {/* Gambar */}
        <img
          src={project.images}
          alt={project.title}
          className="w-full h-[22rem] md:h-[24rem] xl:h-[26rem] object-cover rounded-3xl transition-transform duration-500 group-hover:scale-[1.04]"
          loading="lazy"
        />

        {/* Efek glass reflection */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-70 transition duration-500 rounded-3xl pointer-events-none" />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

        {/* Konten teks */}
        <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-6 group-hover:translate-y-0">
          <h3 className="text-xl font-semibold text-white mb-2 drop-shadow-lg">
            {project.title}
          </h3>
          <p className="text-sm text-gray-200 line-clamp-3">
            {project.description}
          </p>
          <div className="flex items-center text-white font-medium mt-3 text-sm">
            Lihat Proyek
            <ArrowUpRight className="ml-1 h-4 w-4" />
          </div>
        </div>
      </a>
    </motion.div>
  );

  return (
    <div
      ref={gridRef}
      className={cn(
        "h-[50rem] w-full overflow-y-auto items-start no-scrollbar",
        className
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 max-w-7xl mx-auto py-40 px-4 sm:px-8 md:px-12">
        {/* KOLOM 1 */}
        <div className="grid gap-12">
          {firstPart.map((project, idx) => (
            <ProjectCard key={"col1-" + idx} project={project} style={{ y: translateFirst }} />
          ))}
        </div>

        {/* KOLOM 2 */}
        <div className="grid gap-12">
          {secondPart.map((project, idx) => (
            <ProjectCard key={"col2-" + idx} project={project} style={{ y: translateSecond }} />
          ))}
        </div>

        {/* KOLOM 3 */}
        <div className="grid gap-12">
          {thirdPart.map((project, idx) => (
            <ProjectCard key={"col3-" + idx} project={project} style={{ y: translateThird }} />
          ))}
        </div>
      </div>
    </div>
  );
};
