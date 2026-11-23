
"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Code2 } from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#151515] px-6 py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="mb-4 text-sm font-medium tracking-[0.25em] text-orange-500">
            SELECTED WORKS
          </p>

          <h2 className="text-4xl font-bold text-white md:text-6xl">
            Featured <span className="text-orange-500">Projects.</span>
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-zinc-400">
            A selection of projects that showcase my experience
            in data science, machine learning, computer vision,
            and software development.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group rounded-2xl border border-white/10 bg-[#1B1B1B] p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-500/50 md:p-9"
            >
              {/* Card Header */}
              <div className="mb-10 flex items-center justify-between">
                <span className="text-sm tracking-widest text-orange-500">
                  PROJECT / {project.number}
                </span>

                <span className="text-sm text-zinc-500">
                  {project.year}
                </span>
              </div>

              {/* Project Information */}
              <div className="mb-8">
                <p className="mb-3 text-sm font-medium text-orange-500">
                  {project.category}
                </p>

                <h3 className="mb-4 text-2xl font-bold text-white transition group-hover:text-orange-500 md:text-3xl">
                  {project.title}
                </h3>

                <p className="min-h-24 leading-7 text-zinc-400">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="mb-8 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 px-3 py-2 text-xs text-zinc-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-white/10 pt-5">
                <span className="text-xs tracking-wider text-zinc-500">
                  PROJECT DETAILS
                </span>

                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="flex items-center gap-2 text-sm font-medium text-white transition hover:text-orange-500"
                  >
                    <Code2 size={18} />
                    GitHub
                    <ArrowUpRight size={16} />
                  </a>
                ) : (
                  <span className="text-xs text-zinc-500">
                    Details coming soon
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
