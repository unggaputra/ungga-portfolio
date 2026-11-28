
"use client";

import { motion } from "motion/react";
import {
  GraduationCap,
  BrainCircuit,
  Award,
  BriefcaseBusiness,
  Code,
  ChartNoAxesCombined,
  Wrench,
  CheckCircle2,
} from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Pendidikan",
    description: "Lulusan Informatika · IPK 3,83",
  },
  {
    icon: Award,
    title: "Sertifikasi",
    description: "Data Scientist Bersertifikat BNSP",
  },
  {
    icon: BriefcaseBusiness,
    title: "Pengalaman",
    description: "Data Science & Dukungan Bisnis",
  },
];

const skillCategories = [
  {
    title: "Pemrograman & Data",
    icon: Code,
    skills: ["Python", "SQL", "R", "C++"],
  },
  {
    title: "Pengembangan Web",
    icon: Code,
    skills: [
      "Laravel",
      "PHP",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "Data Science & Machine Learning",
    icon: BrainCircuit,
    skills: [
      "Data Preprocessing",
      "EDA",
      "Analisis Statistik",
      "Machine Learning",
      "Evaluasi Model",
      "NLP",
    ],
  },
  {
    title: "Analitik Data & BI",
    icon: ChartNoAxesCombined,
    skills: [
      "Looker Studio",
      "Visualisasi Data",
      "Data Blending",
      "Dashboard KPI",
      "Pelaporan Data",
    ],
  },
  {
    title: "Pengembangan & Tools",
    icon: Wrench,
    skills: [
      "LangChain",
      "ChromaDB",
      "Gemini API",
      "Streamlit",
      "OpenCV",
      "MediaPipe",
      "Roboflow",
      "ESP32",
      "Blynk",
      "InfluxDB",
    ],
  },
];

const projectExperiences = [
  {
    title: "Analisis Sentimen Generative AI",
    description:
      "Menganalisis lebih dari 4.000 data media sosial berbahasa Indonesia mengenai Generative AI dalam bidang pendidikan menggunakan IndoBERTweet. Membandingkan empat teknik augmentasi teks dengan akurasi terbaik sebesar 86% melalui Back Translation.",
  },
  {
    title: "Asisten AI untuk Dokumen Putusan Mahkamah Agung",
    description:
      "Membangun sistem Retrieval-Augmented Generation (RAG) menggunakan LangChain, ChromaDB, dan Gemini API untuk menjawab pertanyaan berdasarkan dokumen putusan Mahkamah Agung, dilengkapi antarmuka percakapan menggunakan Streamlit.",
  },
  {
    title: "Dashboard Business Intelligence",
    description:
      "Mengintegrasikan dataset klien, proyek, dan tim menggunakan metode data blending di Looker Studio. Mengembangkan dashboard interaktif untuk memantau beban kerja tim, tren pendapatan klien, dan penyelesaian proyek.",
  },
  {
    title: "Pengenalan Bahasa Isyarat SIBI",
    description:
      "Mengembangkan prototipe pengenalan gestur tangan menggunakan Python, OpenCV, dan MediaPipe. Mengeksplorasi dataset Roboflow yang terdiri dari sekitar 3.430 gambar dengan 49 kelas gestur.",
  },
  {
    title: "Sistem Monitoring Kandang Ayam Berbasis IoT",
    description:
      "Membangun sistem pemantauan dan pengendalian suhu berbasis ESP32 menggunakan sensor DHT22 dan relay. Mengintegrasikan Blynk untuk pemantauan jarak jauh serta InfluxDB Cloud untuk penyimpanan data historis.",
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
            TENTANG SAYA
          </p>

          <h2 className="text-4xl font-bold text-white md:text-6xl">
            Mengenal Lebih <span className="text-orange-500">Dekat.</span>
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
              Tertarik pada data,
              <span className="text-orange-500">
                {" "}menyukai teknologi,
              </span>{" "}
              dan senang membangun solusi yang bermanfaat.
            </h3>

            <p className="leading-8 text-zinc-400">
              Saya merupakan lulusan S1 Informatika dari
              Universitas Muhammadiyah Malang dengan IPK 3,83
              dan sertifikasi Data Scientist dari BNSP.
            </p>

            <p className="leading-8 text-zinc-400">
              Saya mulai mengeksplorasi bidang pengolahan
              data sejak semester 5 melalui komunitas dan
              berbagai proyek. Sejak itu, saya mempelajari
              pengolahan data, analisis statistik, machine
              learning, dan visualisasi data melalui proyek
              NLP, web scraping, serta Business Intelligence.
            </p>

            <p className="leading-8 text-zinc-400">
              Selain mengerjakan proyek teknis, saya juga
              memiliki pengalaman dalam komunikasi pelanggan,
              pengelolaan data administrasi, dan pelaporan
              penjualan. Saya senang mempelajari teknologi
              baru, menyelesaikan masalah, dan mengembangkan
              ide menjadi solusi yang dapat diterapkan.
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
              KEMAMPUAN PROFESIONAL
            </p>

            <h3 className="text-3xl font-bold text-white md:text-4xl">
              Keahlian &{" "}
              <span className="text-orange-500">
                Pengalaman.
              </span>
            </h3>

            <p className="mt-5 max-w-2xl leading-8 text-zinc-400">
              Berbagai teknologi, perangkat, dan kemampuan
              teknis yang telah saya pelajari serta terapkan
              melalui proyek akademik, mandiri, dan pengalaman
              praktis.
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
                  Keahlian & Teknologi
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
                  Pengalaman Proyek
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
