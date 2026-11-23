
"use client";

import { motion } from "motion/react";
import { ArrowDownToLine, GraduationCap, BrainCircuit, Code2 } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "Informatics Graduate",
  },
  {
    icon: BrainCircuit,
    title: "Focus Area",
    description: "Data Science & Machine Learning",
  },
  {
    icon: Code2,
    title: "Interest",
    description: "Software Development & Data Analytics",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#151515] px-6 py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="mb-4 text-sm font-medium tracking-[0.25em] text-orange-500">
            GET TO KNOW ME
          </p>

          <h2 className="text-4xl font-bold text-white md:text-6xl">
            About <span className="text-orange-500">Me.</span>
          </h2>
        </motion.div>

        <div className="grid gap-16 md:grid-cols-2">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-7"
          >
            <h3 className="text-2xl font-semibold leading-relaxed text-white md:text-3xl">
              Exploring technology,
              <span className="text-orange-500">
                {" "}understanding data,
              </span>{" "}
              and building meaningful solutions.
            </h3>

            <p className="leading-8 text-zinc-400">
              I am an Informatics graduate from Universitas Muhammadiyah
              Malang with an academic focus on Data Science and Machine
              Learning.
            </p>

            <p className="leading-8 text-zinc-400">
              My interests include data processing, machine learning,
              data analytics, and software development. Through academic
              and personal projects, I have explored different technologies
              to transform data and ideas into practical solutions.
            </p>

            <p className="leading-8 text-zinc-400">
              I enjoy learning new technologies, solving problems, and
              continuously developing my technical and analytical skills.
            </p>

            <a
              href="/cv/CV_Ungga Putra Mahendra.pdf"
              download
              className="inline-flex items-center gap-3 rounded-full border border-orange-500 px-6 py-3 font-medium text-orange-500 transition hover:bg-orange-500 hover:text-black"
            >
              Download CV
              <ArrowDownToLine size={18} />
            </a>
          </motion.div>

          {/* Right Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-5"
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-white/10 bg-[#1C1C1C] p-7 transition duration-300 hover:border-orange-500/50"
                >
                  <div className="flex items-start gap-5">
                    <div className="rounded-xl bg-orange-500/10 p-4 text-orange-500 transition group-hover:bg-orange-500 group-hover:text-black">
                      <Icon size={25} />
                    </div>

                    <div>
                      <p className="mb-2 text-sm text-zinc-500">
                        0{index + 1} / {item.title}
                      </p>

                      <h4 className="text-lg font-semibold text-white">
                        {item.description}
                      </h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
