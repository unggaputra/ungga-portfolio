
"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  CalendarDays,
  Award,
  ArrowUpRight,
} from "lucide-react";

export default function Education() {
  return (
    <section
      id="education"
      className="bg-[#101010] px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            Latar Belakang Akademis
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            Pendidikan<span className="text-orange-500">.</span>
          </h2>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group mx-auto max-w-2xl rounded-2xl border border-white/10 bg-[#151515] p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/50 md:p-7"
        >
          {/* Logo and University Information */}
          <div className="flex items-start gap-4">
            {/* University Logo */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white p-2">
              <Image
                src="/images/umm-logo.png"
                alt="Universitas Muhammadiyah Malang Logo"
                width={56}
                height={56}
                className="h-full w-full object-contain"
              />
            </div>

            {/* University Details */}
            <div className="min-w-0 flex-1">
              {/* Study Period */}
              <div className="flex items-center gap-2 text-sm font-medium text-white">
                <CalendarDays size={15} />
                <span>2020 – 2026</span>
              </div>

              {/* University Name */}
              <h3 className="mt-2 text-lg font-bold leading-snug text-white md:text-xl transition-colors group-hover:text-orange-500">
                Universitas Muhammadiyah Malang
              </h3>
            </div>
          </div>

          {/* Degree and GPA */}
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <Award size={17} />
              <span>S1 – Informatika (S.Kom)</span>
            </div>

            <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-400">
              IPK: 3.83
            </span>
          </div>

          {/* Education Description */}
          <p className="mt-5 text-sm leading-6 text-zinc-500 md:text-base md:leading-7">
            Menempuh pendidikan Informatika dengan peminatan utama
             di Data Science dan machine learning, didukung kemampuan
             lintas bidang IT seperti pengembangan aplikasi dan web,
             manajemen basis data, serta IT support untuk menjawab
             berbagai kebutuhan teknis secara praktis.
          </p>

          {/* Official Website */}
          <div className="mt-6 border-t border-zinc-200 pt-5">
            <a
              href="https://www.umm.ac.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-orange-500 transition-colors hover:text-orange-400"
            >
              Kunjungi Website Resmi

              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
