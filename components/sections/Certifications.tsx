
"use client";

import { motion } from "motion/react";
import { Award, ArrowUpRight } from "lucide-react";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="bg-[#151515] px-6 py-24 text-white md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            Professional Development
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Certifications<span className="text-orange-500">.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
            Professional certifications that reflect my commitment
            to continuous learning and developing technical skills.
          </p>
        </motion.div>

        {/* Certification Cards */}
        <div className="grid gap-5 md:grid-cols-2">
          {certifications.map((certification, index) => (
            <motion.div
              key={certification.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              className="group flex min-h-64 flex-col justify-between rounded-2xl border border-white/10 bg-[#1A1A1A] p-7 transition-all duration-300 hover:border-orange-500/50"
            >
              <div className="flex items-start justify-between">
                <div className="rounded-xl bg-orange-500/10 p-3 text-orange-500">
                  <Award size={28} />
                </div>

                <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  {certification.category}
                </span>
              </div>

              <div className="mt-10">
                <h3 className="text-2xl font-bold">
                  {certification.title}
                </h3>

                <p className="mt-2 text-sm text-zinc-400">
                  {certification.issuer}
                </p>

                {certification.year && (
                  <p className="mt-3 text-sm text-orange-500">
                    {certification.year}
                  </p>
                )}
              </div>

              {certification.credentialUrl && (
                <a
                  href={certification.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-orange-500"
                >
                  View Credential
                  <ArrowUpRight size={16} />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
