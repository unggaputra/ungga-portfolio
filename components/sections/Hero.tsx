
"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  FolderKanban,
  Send,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#101010] px-6 pb-20 pt-32 md:pt-28"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Orange Glow */}
        <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-orange-500/[0.08] blur-[140px]" />

        <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-orange-500/[0.04] blur-[120px]" />

        {/* Subtle Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Bottom Gradient */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#101010] to-transparent" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 order-2 lg:order-1"
        >
          {/* Introduction */}
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-orange-500" />

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
              Perkenalkan, Saya
            </p>
          </div>

          {/* Name */}
          <h1 className="text-[clamp(3.5rem,8vw,6.8rem)] font-bold leading-[0.95] tracking-[-0.065em] text-white">
            Ungga Putra
            <span className="mt-2 block">
              Mahendra<span className="text-orange-500">.</span>
            </span>
          </h1>

          {/* Profession */}
          <div className="mt-9 max-w-xl">
            <p className="text-lg font-medium leading-relaxed text-zinc-300 md:text-xl">
              Informatics Graduate
              <span className="mx-2 text-orange-500">/</span>
              <span className="text-zinc-400">
                Data Science Enthusiast
              </span>
            </p>

            <p className="mt-5 max-w-lg text-sm leading-7 text-zinc-500 md:text-base">
             Passionate about data, curious about technology, and always eager to build something meaningful.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-orange-500 px-6 py-3.5 font-semibold text-white shadow-[0_4px_20px_rgba(249,115,22,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-orange-400 hover:shadow-[0_8px_30px_rgba(249,115,22,0.3)] active:scale-[0.97]"
            >
              <Send size={17} />

              Hubungi Saya

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3.5 font-semibold text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/60 hover:text-orange-400 active:scale-[0.97]"
            >
              <FolderKanban size={17} />

              Lihat Portofolio

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* Bottom Information */}
          <div className="mt-16 flex flex-wrap items-center gap-3 border-t border-white/10 pt-5">
            <span className="text-xs font-medium tracking-wider text-zinc-600">
              Berlokasi di
            </span>

            <span className="text-xs font-medium text-zinc-400">
              Malang, Indonesia
            </span>

            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>

              <span className="text-xs font-medium text-zinc-300">
                Terbuka Untuk Peluang
              </span>
            </span>

          </div>
        </motion.div>

        {/* Right Content - Profile Image Only */}
        <motion.div
          initial={{ opacity: 0, x: 35, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="relative order-1 flex justify-center lg:order-2 lg:justify-end"
        >
          <div className="relative w-full max-w-[420px]">
            {/* Soft Orange Glow */}
            <div className="absolute inset-8 rounded-full bg-orange-500/[0.12] blur-[90px]" />

            {/* Decorative Frame */}
            <div className="absolute -inset-3 rotate-3 rounded-[2rem] border border-orange-500/25 transition-transform duration-700 hover:rotate-1" />

            {/* Profile Image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#1a1a1a]">
              <Image
                src="/images/profile.JPG"
                alt="Ungga Putra Mahendra"
                fill
                priority
                sizes="(max-width: 768px) 85vw, 420px"
                className="object-cover object-[center_35%]"
              />

              {/* Subtle Image Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/[0.03]" />
            </div>

            {/* Decorative Corner */}
            <div className="absolute -bottom-5 -left-5 hidden h-16 w-16 rounded-2xl border-b border-l border-orange-500/50 md:block" />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to About"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-zinc-600 transition-colors hover:text-orange-500 md:flex"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.25em]">
          Scroll to explore
        </span>

        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}
