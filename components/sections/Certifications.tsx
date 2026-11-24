
"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  Award,
  CalendarDays,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

import { certifications } from "@/data/certifications";

type CertificationDetails = (typeof certifications)[number] & {
  image?: string;
  certificateNumber?: string;
  validUntil?: string;
  pdfUrl?: string;
};

export default function Certifications() {
  const items = certifications as CertificationDetails[];

  return (
    <section
      id="certifications"
      className="bg-[#151515] px-6 py-24 text-white md:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            Pengembangan Profesional
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Sertifikasi & Pelatihan
            <span className="text-orange-500">.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base">
            Sertifikasi profesional dan program pelatihan intensif yang mencerminkan kompetensi teknis,
            pengetahuan praktis, serta komitmen saya dalam pembelajaran berkelanjutan.
          </p>
        </motion.div>

        {/* Certification Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {items.map((certification, index) => {
            // Gunakan gambar dari data atau gambar BNSP sebagai fallback
            const imageSrc =
              certification.image ||
              (certification.title === "Data Scientist"
                ? "/images/certificates/bnsp-data-scientist.png"
                : undefined);

            // Prioritaskan PDF atau credential URL
            // Jika tidak ada, gunakan gambar sertifikat
            const certificateLink =
              certification.pdfUrl ||
              certification.credentialUrl ||
              imageSrc;

            return (
              <motion.article
                key={`${certification.title}-${index}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#101010] transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-xl hover:shadow-black/20"
              >
                {/* Certificate Image */}
                <div className="relative h-48 overflow-hidden border-b border-white/10 bg-[#1A1A1A]">

                  {imageSrc ? (
                    <Image
                      src={imageSrc}
                      alt={`Certificate: ${certification.title}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#242424] via-[#171717] to-[#101010]">
                      <div className="absolute -right-12 -top-16 h-48 w-48 rounded-full border border-orange-500/10" />

                      <div className="absolute -right-6 -top-10 h-36 w-36 rounded-full border border-orange-500/10" />

                      <div className="relative flex flex-col items-center gap-3">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-500/30 bg-orange-500/10">
                          <Award
                            size={34}
                            className="text-orange-500"
                            strokeWidth={1.5}
                          />
                        </div>

                        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
                          Certificate
                        </span>

                        <span className="max-w-[220px] text-center text-sm font-bold text-white">
                          {certification.issuer}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Year Badge */}
                  {certification.year && (
                    <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full border border-orange-500/30 bg-[#101010]/90 px-3 py-1.5 text-xs font-semibold text-orange-400 backdrop-blur-sm">
                      <CalendarDays size={13} />
                      {certification.year}
                    </div>
                  )}
                </div>

                {/* Certificate Information */}
                <div className="flex flex-1 flex-col p-5">

                  {/* Certificate Title */}
                  <h3 className="min-h-[3.5rem] text-base font-bold leading-snug text-white transition-colors duration-300 group-hover:text-orange-500 md:text-lg">
                    {certification.title}
                  </h3>
                  

                  {/* Issuer */}
                  <p className="mt-2 text-sm text-zinc-400">
                    {certification.issuer}
                  </p>

                  {/* Certificate Number */}
                  {certification.certificateNumber && (
                    <p className="mt-3 break-words text-xs leading-5 text-zinc-500">
                      No. Sertifikat: {certification.certificateNumber}
                    </p>
                  )}

                  {/* Validity */}
                  {certification.validUntil && (
                    <p className="mt-1 text-xs leading-5 text-zinc-500">
                      Berlaku hingga {certification.validUntil}
                    </p>
                  )}

                  {/* Category Badge */}
                  <div className="mt-4 min-h-[2rem]">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-orange-400">
                      <ShieldCheck size={12} />
                      {certification.category}
                    </span>
                  </div>

                  {/* Certificate Link */}
                  <div className="mt-auto border-t border-white/10 pt-4">
                    {certificateLink ? (
                      <a
                        href={certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-orange-500 transition-colors hover:text-orange-400"
                      >
                        Lihat Sertifikat
                        <ExternalLink size={14} />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-orange-500">
                        Lihat Sertifikat
                        <ExternalLink size={14} />
                      </span>
                    )}
                  </div>

                </div>
              </motion.article>
            );
          })}

        </div>
      </div>
    </section>
  );
}
