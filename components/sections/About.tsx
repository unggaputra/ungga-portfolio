
"use client";

import { motion } from "motion/react";
import {
  ArrowDownToLine,
  GraduationCap,
  BrainCircuit,
  Code2,
  ChartNoAxesCombined,
  Wrench,
  CheckCircle2,
  Database,
  Code,
  Layers,
  GitBranch,
} from "lucide-react";

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

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    skills: ["Python", "PHP", "JavaScript", "TypeScript"],
  },
  {
    title: "Data Science & Machine Learning",
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
    title: "Data & Analytics",
    icon: ChartNoAxesCombined,
    skills: ["Tableau", "Looker Studio", "Power BI", "Git", "GitHub"],
  },
  {
    title: "Development & Tools",
    icon: Wrench,
    skills: ["Next.js", "React", "Laravel", "OpenCV", "ESP32"],
  },
];

const projectExperiences = [
  {
    title: "Generative AI Sentiment Analysis",
    description:
      "Mengembangkan model klasifikasi sentimen terhadap Generative AI dalam bidang pendidikan menggunakan IndoBERTweet. Meliputi preprocessing data, augmentasi teks, pelatihan model, dan evaluasi performa.",
  },
  {
    title: "SIBI Sign Language Recognition",
    description:
      "Mengembangkan sistem pengenalan bahasa isyarat SIBI menggunakan Python, OpenCV, dan MediaPipe, dengan dataset yang diproses melalui Roboflow.",
  },
  {
    title: "Smart IoT Monitoring System",
    description:
      "Mengembangkan sistem monitoring suhu dan kelembapan berbasis ESP32 dan sensor DHT22, dengan integrasi Blynk dan InfluxDB untuk pemantauan data secara berkala.",
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

        {/* About Content */}
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

        {/* Specialization & Project Experience */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-10"
          >
            <p className="mb-4 text-sm font-medium tracking-[0.25em] text-orange-500">
              TECHNICAL EXPERTISE
            </p>

            <h3 className="text-3xl font-bold text-white md:text-4xl">
              Specialization &{" "}
              <span className="text-orange-500">Experience.</span>
            </h3>

            <p className="mt-5 max-w-2xl leading-8 text-zinc-400">
              Technologies, tools, and technical capabilities that I have
              explored and applied through academic and personal projects.
            </p>
          </motion.div>

          <div className="grid items-stretch gap-6 lg:grid-cols-2">
            {/* Skills Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl border border-white/10 bg-[#1C1515] p-6 md:p-9"
            >
              <div className="mb-8 flex items-center gap-3">
                <span className="h-6 w-2 rounded-full bg-orange-500" />
                <h3 className="text-xl font-bold text-white">
                  Specialization & Tech Stack
                </h3>
              </div>

              <div className="space-y-6">
                {skillCategories.map((category, index) => {
                  const Icon = category.icon;

                  return (
                    <div
                      key={category.title}
                      className={
                        index !== skillCategories.length - 1
                          ? "border-b border-white/10 pb-6"
                          : ""
                      }
                    >
                      <div className="mb-4 flex items-center gap-3">
                        <Icon
                          size={19}
                          className="text-orange-500"
                        />

                        <h4 className="font-semibold text-white">
                          {category.title}
                        </h4>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full border border-white/10 bg-[#151515] px-3 py-1.5 text-xs font-medium text-zinc-400 transition duration-300 hover:border-orange-500/50 hover:text-orange-400"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Project Experience Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl border border-white/10 bg-[#1C1515] p-6 md:p-9"
            >
              <div className="mb-8 flex items-center gap-3">
                <span className="h-6 w-2 rounded-full bg-emerald-400" />
                <h3 className="text-xl font-bold text-white">
                  Project Experience
                </h3>
              </div>

              <div className="space-y-5">
                {projectExperiences.map((project) => (
                  <div
                    key={project.title}
                    className="rounded-xl border border-white/10 bg-[#151313] p-4 transition duration-300 hover:border-emerald-400/40"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2
                        size={20}
                        className="mt-0.5 shrink-0 text-emerald-400"
                      />

                      <div>
                        <h4 className="text-sm font-semibold leading-6 text-white">
                          {project.title}
                        </h4>

                        <p className="mt-2 text-sm leading-6 text-zinc-400">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
