
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#101010] px-6 pt-28 pb-16"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 md:grid-cols-2">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 space-y-7 md:order-1"
        >
          <p className="text-sm font-medium tracking-[0.25em] text-orange-500">
            Halo semua, Saya
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
            Ungga Putra Mahendra
        
            <span className="text-orange-500">.</span>
          </h1>

          <h2 className="max-w-xl text-xl font-medium text-zinc-300 md:text-2xl">
            Informatics Graduate & Data Science Enthusiast.
          </h2>

          <p className="max-w-lg leading-8 text-zinc-400">
            I explore data-driven solutions through machine learning,
            data analysis, and software development. Passionate about
            transforming ideas and data into meaningful solutions.
          </p>

          <div className="flex flex-wrap gap-4 pt-3">
            <Link
              href="#projects"
              className="inline-flex items-center gap-3 rounded-full bg-orange-500 px-7 py-4 font-semibold text-black transition hover:bg-orange-400"
            >
              View Projects
              <ArrowUpRight size={18} />
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-4 font-semibold text-white transition hover:border-orange-500 hover:text-orange-500"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>

        {/* Right Content - Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="order-1 flex justify-center md:order-2"
        >
          <div className="relative h-[380px] w-[300px] md:h-[520px] md:w-[400px]">

            <div className="absolute inset-0 translate-x-5 translate-y-5 rounded-2xl border border-orange-500/50" />

            <div className="relative h-full w-full overflow-hidden rounded-2xl bg-zinc-800">
              <Image
                src="/images/profile.JPG"
                alt="Portrait of Ungga Putra Mahendra"
                fill
                priority
                sizes="(max-width: 768px) 300px, 400px"
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-5 -left-5 rounded-xl border border-white/10 bg-[#1A1A1A] px-5 py-4 shadow-xl">
              <p className="text-sm text-zinc-400">Focus Area</p>
              <p className="font-semibold text-white">
                Data & Technology
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
