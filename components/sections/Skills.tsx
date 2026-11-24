
"use client";

import { motion } from "motion/react";
import {
  Code2,
  BrainCircuit,
  ChartNoAxesCombined,
  Wrench,
} from "lucide-react";

const skillCategories = [
  {
    number: "01",
    title: "Programming",
    description: "Languages for building applications and processing data.",
    icon: Code2,
    skills: ["Python", "PHP", "JavaScript", "TypeScript"],
  },
  {
    number: "02",
    title: "Data Science & ML",
    description: "Tools and techniques for data analysis and machine learning.",
    icon: BrainCircuit,
    skills: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "PyTorch",
      "TensorFlow",
      "NLP",
    ],
  },
  {
    number: "03",
    title: "Data & Analytics",
    description: "Tools for visualization, reporting, and version control.",
    icon: ChartNoAxesCombined,
    skills: ["Tableau", "Looker Studio", "Power BI", "Git", "GitHub"],
  },
  {
    number: "04",
    title: "Development & Tools",
    description: "Frameworks and technologies for software development.",
    icon: Wrench,
    skills: ["Next.js", "React", "Laravel", "OpenCV", "ESP32"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#101010] px-6 py-28 md:py-36">
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="mb-4 text-sm font-medium tracking-[0.25em] text-orange-500">
            WHAT I WORK WITH
          </p>

          <h2 className="text-4xl font-bold text-white md:text-6xl">
            Skills & <span className="text-orange-500">Expertise.</span>
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-zinc-400">
            A collection of technologies, tools, and technical skills
            I have explored and applied through projects and continuous learning.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group rounded-2xl border border-white/10 bg-[#181818] p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-500/50 md:p-9"
              >
                <div className="mb-7 flex items-center justify-between">
                  <div className="rounded-xl bg-orange-500/10 p-4 text-orange-500">
                    <Icon size={26} />
                  </div>

                  <span className="text-sm text-zinc-600">
                    {category.number}
                  </span>
                </div>

                <h3 className="mb-3 text-2xl font-semibold text-white group-hover:text-orange-500">
                  {category.title}
                </h3>

                <p className="mb-7 text-sm leading-7 text-zinc-400">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 transition hover:border-orange-500 hover:text-orange-500"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
