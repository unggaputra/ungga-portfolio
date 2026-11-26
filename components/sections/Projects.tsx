
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRight,
  Check,
  Code2,
  ExternalLink,
  Eye,
  Info,
  X,
} from "lucide-react";

import { projects } from "@/data/projects";

type ProjectDetails = (typeof projects)[number] & {
  image?: string;
  detailDescription?: string;
  gallery?: string[];
  features?: string[];
  featureTitle?: string;
  sourceUrl?: string;
  sourceLabel?: string;
};

export default function Projects() {
  const items = projects as ProjectDetails[];

  const [selectedProject, setSelectedProject] =
    useState<ProjectDetails | null>(null);

  // Tutup modal dengan tombol Escape
  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    // Mencegah halaman di belakang modal ikut scroll
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section
      id="projects"
      className="bg-[#101010] px-6 py-24 text-white md:py-32"
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
            Portofolio
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Proyek Unggulan
            <span className="text-orange-500">.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base">
            Kumpulan proyek pilihan yang menampilkan pengalaman saya di bidang
            data science, machine learning, dan pengembangan perangkat lunak.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((project, index) => (
            <motion.article
              key={`${project.number}-${project.title}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: (index % 3) * 0.1,
              }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#151515] transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-xl hover:shadow-black/20"
            >

              {/* Project Preview */}
              <div className="group/preview relative h-48 overflow-hidden border-b border-white/10 bg-[#1A1A1A]">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`Preview of ${project.title}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-all duration-500 group-hover/preview:scale-105 group-hover/preview:blur-[2px]"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#242424] via-[#171717] to-[#101010]">
                    <Code2
                      size={40}
                      className="text-orange-500"
                      strokeWidth={1.5}
                    />
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover/preview:bg-black/50 group-hover/preview:opacity-100">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="pointer-events-auto inline-flex items-center gap-1 rounded-full border border-orange-500/40 bg-[#101010]/90 px-4.5 py-2 text-sm font-semibold text-orange-400 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-orange-500 hover:text-white"
                  >
                    <Eye size={17} />
                    Lihat Detail
                  </button>
                </div>

                {/* Project Year */}
                {project.year && (
                  <div className="pointer-events-none absolute right-3 top-3 z-20 rounded-full border border-orange-500/30 bg-[#101010]/90 px-3 py-1.5 text-xs font-semibold text-orange-400 backdrop-blur-sm">
                    {project.year}
                  </div>
                )}
              </div>

              {/* Project Information */}
              <div className="flex flex-1 flex-col p-5">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-orange-500">
                  {project.category}
                </p>

                <h3 className="min-h-[2rem] text-base font-bold leading-snug text-white transition-colors duration-300 md:text-lg">
                  {project.title}
                </h3>

                <p className="min-h-[6rem] text-sm leading-6 text-zinc-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2 pb-3">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Detail Button & Source Link */}
                <div className="mt-auto border-t border-white/10 pt-3">
                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-orange-500 transition-colors hover:text-orange-400"
                    >
                      <Info size={14} />
                      Detail Proyek
                    </button>

                    {project.sourceUrl && (
                      <a
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
                      >
                        {project.sourceLabel || "View Source"}
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            key="project-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm md:p-8"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`${selectedProject.title} project details`}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/10 bg-[#151515] shadow-2xl shadow-black/50"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white transition-colors hover:border-orange-500/40 hover:text-orange-500"
              >
                <X size={20} />
              </button>

              {/* Main Project Image */}
              <div className="relative h-56 overflow-hidden bg-[#1A1A1A] sm:h-72 md:h-96">
                {selectedProject.image ? (
                  <Image
                    src={selectedProject.image}
                    alt={`Preview of ${selectedProject.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 900px"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <Code2 size={48} className="text-orange-500" />
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-black/20" />
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-10">
                {/* Category and Year */}
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
                    {selectedProject.category}
                  </span>

                  {selectedProject.year && (
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-400">
                      {selectedProject.year}
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h2 className="text-2xl font-bold leading-tight text-white md:text-4xl">
                  {selectedProject.title}
                </h2>

                {/* Project Description */}
                <p className="mt-5 text-sm leading-7 text-zinc-400 md:text-base">
                  {selectedProject.detailDescription ||
                    selectedProject.description}
                </p>



                {/* Documentation Gallery */}
                {selectedProject.gallery &&
                  selectedProject.gallery.length > 0 && (
                    <div className="mt-10">
                      <h3 className="mb-4 text-lg font-bold text-white">
                        Project Documentation
                      </h3>

                      <div className="columns-1 gap-4 sm:columns-2">
                        {selectedProject.gallery.map((image, imageIndex) => (
                          <div
                            key={`${image}-${imageIndex}`}
                            className="mb-4 break-inside-avoid overflow-hidden rounded-xl border border-white/10 bg-[#1A1A1A]"
                          >
                            <Image
                              src={image}
                              alt={`${selectedProject.title} documentation ${imageIndex + 1}`}
                              width={1200}
                              height={900}
                              sizes="(max-width: 640px) 100vw, 50vw"
                              className="h-auto w-full object-contain transition-transform duration-500 hover:scale-[1.02]"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}


                {/* Project Features */}
                {selectedProject.features &&
                  selectedProject.features.length > 0 && (
                    <div className="mt-10">
                      <h3 className="mb-5 text-lg font-bold text-white">
                        {selectedProject.featureTitle ||
                          "Key Features"}
                      </h3>

                      <ul className="space-y-3">
                        {selectedProject.features.map((feature, featureIndex) => (
                          <li
                            key={`${feature}-${featureIndex}`}
                            className="flex items-start gap-3 text-sm leading-6 text-zinc-400 md:text-base"
                          >
                            <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-500/10 text-orange-500">
                              <Check size={13} strokeWidth={3} />
                            </span>

                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                {/* GitHub Link */}
                {selectedProject.github && (
                  <div className="mt-8">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-3 text-sm font-semibold text-orange-400 transition-colors hover:bg-orange-500 hover:text-white"
                    >
                      View on GitHub
                      <ExternalLink size={16} />
                    </a>
                  </div>
                )}

                {/* Technologies - Bottom Section */}
                <div className="mt-10 border-t border-white/10 pt-6">
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                    Technologies Used
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-orange-500/20 bg-orange-500/5 px-3 py-1.5 text-xs font-medium text-orange-400"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
