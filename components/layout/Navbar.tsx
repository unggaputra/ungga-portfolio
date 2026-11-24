
"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certification", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
        <a href="#home" className="text-xl font-bold tracking-tight text-white">
          UPTRANDRA<span className="text-orange-500">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-400 transition-colors hover:text-orange-500"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#101010] px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-zinc-300 transition-colors hover:text-orange-500"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </motion.header>
  );
}
