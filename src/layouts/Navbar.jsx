import React, { useState, useEffect } from "react";
import { Button } from "../components/ui/Button";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [navbarLight, setNavbarLight] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Layanan", href: "#services" },
    { label: "Portofolio", href: "#portfolio" },
    { label: "Kontak", href: "#contact" },
    {label: "Lacak Project", href: "/tracker"}
  ];

const handleScroll = (href) => {
  if (href.startsWith("/")) {
    navigate(href);
    return;
  }

  if (href.startsWith("#")) {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
      }, 100);
    } else {
      const el = document.querySelector(href);
      if (el) {
        window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
      }
    }
  }
};



  useEffect(() => {
    const lightSections = document.querySelectorAll(".bg-godinov-light");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setNavbarLight(true);
          else setNavbarLight(false);
        });
      },
      { rootMargin: "-80px 0px 0px 0px", threshold: 0.1 }
    );

    lightSections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);


  return (
    <header
      className={`navbar fixed top-6 left-0 right-0 z-50 flex justify-center px-4 ${
        navbarLight ? "navbar-light" : "navbar-dark"
      }`}
    >
      <div className="relative w-100 max-w-4xl w-85 md:w-fit">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6">
          <div className="flex items-center justify-between py-3">
            <button
              onClick={() => handleScroll("#home")}
              className="flex items-center gap-2 mr-6"
            >
              <img
                src="/images/logo.webp"
                alt="Godinov"
                className="h-8 w-auto object-contain"
                loading="lazy"
              />
            </button>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleScroll(item.href)}
                  className="text-white/80 hover:text-[#00E5D4] transition-colors font-poppins"
                >
                  {item.label}
                </button>
              ))}

              <Button
                href="https://wa.me/62895610756082/?text=Halo%2C%20saya%20ingin%20konsultasi%20tentang%20proyek%20website%20saya."
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                radius="full"
                size="md"
              >
                Konsultasi Gratis
              </Button>
            </nav>

            <button
              className="md:hidden text-white/80 hover:text-white transition"
              onClick={() => setOpen(!open)}
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg rounded-2xl mt-3 p-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => {
                  handleScroll(item.href);
                  setOpen(false);
                }}
                className="block w-full text-left text-white/85 hover:text-[#00E5D4] transition-colors font-poppins py-2"
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="primary"
              radius="full"
              size="md"
              className="w-full mt-2"
            >
              Konsultasi Gratis
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
