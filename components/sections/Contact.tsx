
"use client";

import Footer from "@/components/layout/Footer";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRight,
  Mail,
  X,
  Send,
  LoaderCircle,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const whatsappNumber = "6282228635167";

const whatsappMessage =
  "Halo, Ungga!\n\n" +
  "Perkenalkan, saya [Nama] dari [Nama Perusahaan]. " +
  "Saya melihat portfolio Anda dan tertarik untuk berdiskusi lebih lanjut. " +
  "Apakah Anda sedang terbuka untuk peluang kerja atau kolaborasi?\n\n" +
  "Terima kasih.";

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

const socialLinks = [
  {
    label: "GitHub",
    value: "github.com/unggaputra",
    href: "https://github.com/unggaputra",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/unggaputra",
    href: "https://www.linkedin.com/in/unggaputra/",
    icon: FaLinkedin,
  },
  {
    label: "Instagram",
    value: "instagram.com/unggaputra",
    href: "https://www.instagram.com/unggaputra/",
    icon: FaInstagram,
  },
];

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  // Menutup modal dengan tombol Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !isSending) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, isSending]);

  // Mengunci scroll halaman ketika modal terbuka
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const openModal = () => {
    setStatus(null);
    setIsOpen(true);
  };

  const closeModal = () => {
    if (isSending) return;
    setIsOpen(false);
  };

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (status) {
      setStatus(null);
    }
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setIsSending(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Pesan gagal dikirim."
        );
      }

      setStatus({
        type: "success",
        message: "Pesan berhasil dikirim! Terima kasih sudah menghubungi saya.",
      });

      setForm(initialForm);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Terjadi kesalahan. Silakan coba lagi.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      {/* Contact Section */}
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
              Hubungi Saya
            </p>

            <h2 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-7xl">
              Mari ciptakan sesuatu yang
              <span className="text-orange-500"> bermakna.</span>
            </h2>

            <p className="mt-6 max-w-xl leading-relaxed text-zinc-400">
              Saya selalu terbuka untuk berdiskusi mengenai peluang baru,
              kolaborasi, dan proyek menarik. Jangan ragu untuk menghubungi saya!
            </p>


            {/* Contact Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              {/* Kirim Email Button */}
              <button
                type="button"
                onClick={openModal}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-orange-500 px-5 py-3 font-semibold text-white transition-all duration-300 hover:bg-orange-600"
              >
                <Mail size={18} />
                Kirim Email
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </button>

              {/* Kirim WhatsApp Button */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-green-600 px-5 py-3 font-semibold text-white transition-all duration-300 hover:bg-green-700"
              >
                <FaWhatsapp size={20} />
                Chat WhatsApp
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </div>


            {/* Social Links */}
            <div className="mt-16 border-t border-white/10 pt-8">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Koneksi Jaringan Sosial
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
                      aria-label={social.label}
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

      {/* Contact Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/75 px-4 py-8 backdrop-blur-sm"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                closeModal();
              }
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-modal-title"
              className="relative my-auto w-full max-w-xl rounded-3xl border border-white/10 bg-[#151515] p-6 text-white shadow-2xl sm:p-9"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={closeModal}
                disabled={isSending}
                aria-label="Close contact form"
                className="absolute right-5 top-5 rounded-full border border-white/10 p-2 text-zinc-400 transition-colors hover:border-orange-500 hover:text-orange-500 disabled:opacity-50"
              >
                <X size={20} />
              </button>

              {/* Modal Heading */}
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
                Let's Connect
              </p>

              <h3
                id="contact-modal-title"
                className="pr-10 text-3xl font-bold tracking-tight sm:text-4xl"
              >
                Kirim Pesan
                <span className="text-orange-500">.</span>
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                Isi form di bawah ini. Pesan kamu akan langsung dikirim ke email saya.
              </p>

              {/* Contact Form */}
              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-medium text-zinc-300"
                  >
                    Nama
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Masukkan nama kamu"
                    className="w-full rounded-xl border border-white/10 bg-[#101010] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-orange-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-medium text-zinc-300"
                  >
                    Email
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={254}
                    value={form.email}
                    onChange={handleChange}
                    placeholder="nama@email.com"
                    className="w-full rounded-xl border border-white/10 bg-[#101010] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-orange-500"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="mb-2 block text-sm font-medium text-zinc-300"
                  >
                    Subject
                  </label>

                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    required
                    maxLength={200}
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Topik pesan"
                    className="w-full rounded-xl border border-white/10 bg-[#101010] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-orange-500"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-sm font-medium text-zinc-300"
                  >
                    Pesan
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    maxLength={5000}
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tuliskan pesan kamu..."
                    className="w-full resize-y rounded-xl border border-white/10 bg-[#101010] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-orange-500"
                  />
                </div>

                {/* Status Message */}
                {status && (
                  <div
                    role="status"
                    className={`flex items-start gap-3 rounded-xl border p-4 text-sm ${status.type === "success"
                      ? "border-green-500/20 bg-green-500/10 text-green-400"
                      : "border-red-500/20 bg-red-500/10 text-red-400"
                      }`}
                  >
                    {status.type === "success" ? (
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
                    ) : (
                      <AlertCircle size={18} className="mt-0.5 shrink-0" />
                    )}

                    <p>{status.message}</p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSending}
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-orange-500 px-6 py-4 font-semibold text-white transition-colors hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSending ? (
                    <>
                      <LoaderCircle size={18} className="animate-spin" />
                      Mengirim Pesan...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Kirim Pesan
                      <ArrowUpRight size={18} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <Footer />

    </>
  );
}
