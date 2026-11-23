
"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Mail, Code2 } from "lucide-react";

const socialLinks = [
  {
    label: "GitHub",
    value: "github.com/ungghaputra",
    href: "https://github.com/ungghaputra",
    icon: Code2,
  },
];

export default function Contact() {
  return (
    <>
      <section
        id="contact"
        className="bg-[#101010] px-6 py-24 text-white md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-[#151515] p-8 md:p-16"
          >
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
              Get In Touch
            </p>

            <h2 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-7xl">
              Let's create something
              <span className="text-orange-500"> meaningful.</span>
            </h2>

            <p className="mt-6 max-w-xl leading-relaxed text-zinc-400">
              I'm always open to discussing new opportunities,
              collaborations, and interesting projects.
              Feel free to get in touch!
            </p>

            <a
              href="mailto:unggaputra@gmail.com"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-orange-500 px-7 py-4 font-semibold text-white transition-all hover:bg-orange-600"
            >
              <Mail size={18} />
              Let's Talk
              <ArrowUpRight size={18} />
            </a>

            <div className="mt-16 border-t border-white/10 pt-8">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Connect With Me
              </p>

              <div className="flex flex-wrap gap-6">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-orange-500"
                    >
                      <Icon size={18} />
                      {social.label}
                      <ArrowUpRight
                        size={14}
                        className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#101010] px-6 py-7 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-sm font-bold tracking-tight">
            UNGGA<span className="text-orange-500">.</span>
          </p>

          <p className="text-xs text-zinc-500">
            © 2026 Ungga Putra. All rights reserved.
          </p>

          <a
            href="#home"
            className="text-xs text-zinc-400 transition-colors hover:text-orange-500"
          >
            Back to Top ↑
          </a>
        </div>
      </footer>
    </>
  );
}
