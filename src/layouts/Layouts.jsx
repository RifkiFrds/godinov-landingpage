import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BubbleWA from "../components/BubbleWA";

export default function Layout() {
  return (
    <div className="font-poppins min-h-screen text-godinov-bg bg-godinov">
      
      {/* Navbar */}
      <Navbar />

      {/* Page Content Wrapped */}
      <main className="pt-[10px]">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
      <BubbleWA />
    </div>
  );
}
