
"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Menu, X, ArrowDownToLine } from "lucide-react";

const navItems = [
  { label: "Beranda", href: "#home" },
  { label: "Tentang Saya", href: "#about" },
  { label: "Portofolio", href: "#projects" },
  { label: "Pendidikan", href: "#education" },
  { label: "Sertifikasi", href: "#certifications" },
  { label: "Kontak", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  // Detect active section
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 40);

        const activationPoint = window.innerHeight * 0.35;
        let currentSection = "#home";

        for (const item of navItems) {
          const section = document.querySelector<HTMLElement>(item.href);

          if (!section) continue;

          if (
            section.getBoundingClientRect().top <= activationPoint
          ) {
            currentSection = item.href;
          } else {
            break;
          }
        }

        // Detect bottom of page
        const isAtBottom =
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 10;

        if (isAtBottom) {
          currentSection = "#contact";
        }

        setActiveSection(currentSection);
        ticking = false;
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <motion.header
      animate={{
        backgroundColor: scrolled
          ? "rgba(16, 16, 16, 0.85)"
          : "rgba(16, 16, 16, 0)",
        borderColor: scrolled
          ? "rgba(255, 255, 255, 0.08)"
          : "rgba(255, 255, 255, 0)",
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 z-50 w-full border-b backdrop-blur-xl"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="text-xl font-bold tracking-tight text-white"
        >
          UPTRANDRA<span className="text-orange-500">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;

            return (
              <motion.a
                key={item.href}
                href={item.href}
                animate={{
                  color: isActive ? "#fb923c" : "#a1a1aa",
                }}
                whileHover={{
                  color: "#fb923c",
                }}
                transition={{
                  color: {
                    duration: 0.35,
                    ease: "easeInOut",
                  },
                }}
                className="relative isolate rounded-full px-4 py-2 text-[13px] font-semibold tracking-normal"
              >
                {/* Active Border */}
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-indicator"
                    className="absolute inset-0 -z-10 rounded-full border border-orange-400/30 bg-orange-500/10 shadow-[0_0_20px_rgba(249,115,22,0.12)]"
                    transition={{
                      type: "spring",
                      stiffness: 160,
                      damping: 25,
                      mass: 1.3,
                    }}
                  />
                )}

                <span className="relative z-10">
                  {item.label}
                </span>
              </motion.a>
            );
          })}
        </div>
        {/* Download CV Button */}
        <a
          href="/cv/CV_Ungga Putra Mahendra.pdf"
          download
          className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/50 hover:bg-orange-500/10 hover:text-orange-500"
        >
          <ArrowDownToLine size={16} />
          Unduh CV
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#101010] px-6 py-5 md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;

              return (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  animate={{
                    color: isActive ? "#fb923c" : "#d4d4d8",
                    borderColor: isActive
                      ? "rgba(251,146,60,0.3)"
                      : "rgba(255,255,255,0)",
                    backgroundColor: isActive
                      ? "rgba(249,115,22,0.1)"
                      : "rgba(255,255,255,0)",
                  }}
                  whileHover={{
                    color: "#fb923c",
                  }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                  }}
                  className="relative isolate rounded-full px-4 py-2 text-[13px] font-medium tracking-normal"
                >
                  {item.label}
                </motion.a>
              );
            })}
          </div>
        </div>
      )}
    </motion.header>
  );
}
