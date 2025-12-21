import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SnakeNode from "./componentstracker/SnakeNode";
import Navbar from "../layouts/Navbar";
import BubbleWA from "../components/BubbleWA";
import { Search, Loader2, AlertTriangle } from "lucide-react";

// --- MOCK DATA TESTER ---
const MOCK_PROJECT = {
  id: "GDN-CYBER",
  client: "Arasaka Corp",
  service: "Cyber Security Web",
  status: "In Progress",
  timeline: [
    { id: 1, title: "Order Confirmed", date: "10 Oct 2024", status: "completed", note: "Encryption keys generated. Contract signed." },
    { id: 2, title: "Blueprint Design", date: "15 Oct 2024", status: "completed", note: "UI/UX wireframes approved by board." },
    { id: 3, title: "Core Development", date: "Sedang Diproses...", status: "current", note: "Injecting React components & API integration." },
    { id: 4, title: "System Audit", date: "Pending", status: "pending", note: "Vulnerability stress test." },
    { id: 5, title: "Deploy to Net", date: "Pending", status: "pending", note: "Final launch sequence." },
  ],
};


export default function TrackingPage() {
  const [orderId, setOrderId] = useState("");
  const [loading, setLoading] = useState(false);
  const [projectData, setProjectData] = useState(null);
  const [error, setError] = useState(false);

  // Scan Line Animation Ref
  const scanLineVariants = {
    scanning: { top: ["0%", "100%", "0%"], opacity: 1, transition: { duration: 2, repeat: Infinity, ease: "linear" } },
    idle: { opacity: 0 }
  };

 //nanti diganti api
  const handleSearch = (e) => {
    e.preventDefault();
    if(!orderId) return;

    setLoading(true);
    setProjectData(null);
    setError(false);

    
    setTimeout(() => {
      setLoading(false);
      if (orderId === "GDN-CYBER") {
        setProjectData(MOCK_PROJECT);
      } else {
        setError(true);
      }
    }, 2000);
  };

  const handleReset = () => {
      setProjectData(null);
      setOrderId("");
  }

  return (
    <section className="min-h-screen bg-godinov text-white flex flex-col items-center justify-center p-6 pt-24 relative overflow-hidden">
      <Navbar />
      {/* Background Ambience*/}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-godinov-cyan/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      </div>

      {/* --- MAIN CARD CONTAINER --- */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
       className={`relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden rounded-3xl
        ${projectData ? "max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3" : "max-w-md w-full flex flex-col"}
      `}
      >
        
        {/* === LEFT PANEL: INPUT & INFO === */}
        <motion.div 
            layout="position" 
            className={`p-10 flex flex-col justify-center relative z-20 ${projectData ? "lg:col-span-1 border-b lg:border-b-0 lg:border-r border-white/10" : "w-full"}`}
        >
             {/* Scanner Overlay Effect */}
             {loading && (
                <motion.div 
                    className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-godinov-cyan/10 to-transparent h-20 w-full z-0"
                    variants={scanLineVariants}
                    animate="scanning"
                />
             )}

            <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"/>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"/>
                    <div className="w-3 h-3 rounded-full bg-green-500"/>
                </div>

                <h2 className="text-3xl font-bold mb-2 tracking-tight text-center">
                  {projectData ? "Project Ditemukan" : "TRACKER GODINOV"}
                </h2>
                <p className="text-white/50 text-sm text-center mb-8">
                  {projectData ? "Detail Project" : "Masukkan ID yang Tertera di Invoice"}
                </p>

                {!projectData ? (
                    // FORM MODE
                    <form onSubmit={handleSearch} className="space-y-6">
                        <div className="relative group">
                            <input 
                                type="text"
                                value={orderId}
                                onChange={(e) => setOrderId(e.target.value)}
                                placeholder="MASUKKAN ID PROJECT..."
                                className="w-full bg-cyan/40 border border-white/20 text-godinov-cyan placeholder-white/20 px-4 py-4 rounded-xl focus:outline-none focus:border-godinov-cyan focus:shadow-[0_0_15px_rgba(0,255,255,0.2)] transition-all font-poppins tracking-wider"
                            />
                            <div className="absolute right-4 top-4 text-white/30">
                                <Search size={20} />
                            </div>
                        </div>

                        <button 
                            type="submit" 
                            disabled={loading}
                            className="w-full border border-godinov-cyan bg-godinov-cyan text-white font-bold py-4 rounded-xl hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group cursor-pointer"
                        >
                            <span className="relative z-10">{loading ? "Mencari Project..." : "Lacak"}</span>
                            {loading && <Loader2 className="animate-spin relative z-10" />}
                        </button>
                    </form>
                ) : (
                    // INFO MODE (After Search)
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <div className="space-y-4 font-Arial text-sm">
                            <div className="bg-black/40 p-4 rounded-lg border border-white/10">
                                <p className="text-godinov-cyan text-xs mb-1">CLIENT</p>
                                <p className="text-white text-lg">{projectData.client}</p>
                            </div>
                            <div className="bg-black/40 p-4 rounded-lg border border-white/10">
                                <p className="text-godinov-cyan text-xs mb-1">TIPE PROJECT</p>
                                <p className="text-white">{projectData.service}</p>
                            </div>
                            <div className="bg-black/40 p-4 rounded-lg border border-white/10">
                                <p className="text-godinov-cyan text-xs mb-1">STATUS SAAT INI</p>
                                <p className="text-green-400 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"/>
                                    {projectData.status}
                                </p>
                            </div>
                        </div>
                        <button 
                            onClick={handleReset}
                            className="mt-8 text-sm text-white/40 hover:text-white "
                        >
                            &lt; Cari ID Lain
                        </button>
                    </motion.div>
                )}

                {/* Error Message */}
                {error && (
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                        className="mt-4 p-3 bg-red-500/10 border border-red-500/50 rounded text-red-400 text-sm flex items-center gap-2 font-mono"
                    >
                        <AlertTriangle size={16} />
                        <span>ID Tidak Ditemukan</span>
                    </motion.div>
                )}
            </div>
        </motion.div>

        {/* === RIGHT PANEL: DRAWER CONTENT (SNAKE TRACKER) === */}
        <AnimatePresence>
          {projectData && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="lg:col-span-2 bg-godinov-cyan relative overflow-hidden flex flex-col"
            >
                {/* Decoration Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>
                
                {/* Content */}
                <div className="relative z-10 p-10 h-[600px] overflow-y-auto custom-scrollbar">
                    <div className="flex items-center justify-between mb-10">
                        <h3 className="text-xl font-bold font-Arial border-l-4 border-godinov-cyan pl-4">
                            TIMELINE
                        </h3>
                        <div className="text-xs font-Arial text-white/30">
                            ID: {projectData.id}
                        </div>
                    </div>

                    <div className="max-w-xl mx-auto pt-4 pb-20">
                         {projectData.timeline.map((item, idx) => (
                            <SnakeNode
                                key={item.id}
                                data={item}
                                index={idx}
                                align={idx % 2 === 0 ? "right" : "left"}
                                isLast={idx === projectData.timeline.length - 1}
                            />
                         ))}
                    </div>
                </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <BubbleWA />
    </section>
  );
}