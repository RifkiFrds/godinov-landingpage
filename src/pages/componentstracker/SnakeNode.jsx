import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Clock, Loader2 } from "lucide-react";

const SnakeNode = ({ data, index, isLast, align }) => {
  const isCompleted = data.status === "completed";
  const isCurrent = data.status === "current";
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative flex items-center justify-between w-full mb-12 z-10 ${
        align === "left" ? "flex-row-reverse" : "flex-row"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* TEXT */}
      <motion.div
        initial={{ opacity: 0, x: align === "left" ? 20 : -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 + index * 0.1 }}
        className={`w-[40%] ${align === "left" ? "text-right" : "text-left"}`}
      >
        <h4 
          className={`font-bold font-mono text-sm tracking-wider ${
            isCurrent 
              ? "text-godinov-cyan border rounded-lg p-2 border-white" 
              : "text-white"
          }`}
        >
          {data.title}
        </h4>
        <p className="text-[10px] text-white/50 uppercase tracking-widest mt-1">
          {data.date}
        </p>
      </motion.div>

      {/* NODE & LINE */}
      <div className="relative flex flex-col items-center justify-center w-[20%]">
        {!isLast && (
          <div className="absolute top-8 w-[1px] h-[calc(100%+3rem)] bg-white/10">
            {(isCompleted || isCurrent) && (
              <motion.div
                className="w-full bg-godinov-cyan shadow-[0_0_8px_cyan]"
                initial={{ height: "0%" }}
                animate={{ height: "100%" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              />
            )}
          </div>
        )}

        <div 
          className={`relative z-20 w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-[#050505]
            ${isCompleted ? "border-godinov-cyan text-godinov-cyan" : "text-white/30"}
            ${isCurrent ? "border-godinov-cyan text-godinov-cyan shadow-[0_0_15px_rgba(0,255,255,0.4)]" : ""}
          `}
        >
          {isCompleted ? (
            <Check size={16} />
          ) : isCurrent ? (
            <Loader2 size={16} className="animate-spin" />
          ) : (
            <Clock size={16} />
          )}
          
          {/* WAVE ANIMATION */}
          {isCurrent && (
            <>
              <motion.div 
                className="absolute inset-0 rounded-full border border-godinov-cyan" 
                animate={{ scale: [1, 1.8], opacity: [0.8, 0] }} 
                transition={{ duration: 1.5, repeat: Infinity }} 
              />
              <motion.div 
                className="absolute inset-0 rounded-full border border-godinov-cyan" 
                animate={{ scale: [1, 1.4], opacity: [0.8, 0] }} 
                transition={{ duration: 1.5, delay: 0.5, repeat: Infinity }} 
              />
            </>
          )}
        </div>
      </div>

      {/* HOVER NOTE */}
      <div 
        className={`w-[40%] relative flex ${
          align === "left" ? "justify-start" : "justify-end"
        }`}
      >
        <AnimatePresence>
          {isHovered && data.note && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              className={`absolute top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-md border border-godinov-cyan/30 p-4 rounded-sm w-48 z-50 shadow-[0_0_20px_rgba(0,255,255,0.1)]
                ${align === "left" ? "left-0" : "right-0"}
              `}
            >
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-godinov-cyan" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-godinov-cyan" />
              
              <p className="text-xs text-godinov-cyan/80 font-mono mb-1">
                Detail:
              </p>
              <p className="text-xs text-white/80 leading-relaxed font-sans">
                {data.note}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SnakeNode;