
"use client";

import Footer from "@/components/layout/Footer";
import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUp,
  ArrowUpRight,
  Mail,
  MapPin,
  Send,
  MessageCircle,
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
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/unggaputra/",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/unggaputra",
    icon: FaGithub,
  },
  {
    label: "Instagram",
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
  const [form, setForm] = useState(initialForm);
  const [isSending, setIsSending] = useState(false);

  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

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

    if (status) setStatus(null);
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
        message:
          "Pesan berhasil dikirim! Terima kasih sudah menghubungi saya.",
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
      <section
        id="contact"
        className="bg-[#101010] px-6 py-24 text-white md:py-32"
      >
        <div className="mx-auto max-w-7xl">

          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
              Kontak & Koneksi
            </p>

            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
              Hubungi Saya
              <span className="text-orange-500">.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-400">
              Saya terbuka untuk berbagai peluang, kolaborasi,
              dan diskusi menarik. Silakan hubungi saya melalui
              formulir atau informasi kontak yang tersedia.
            </p>
          </motion.div>

          {/* Contact Layout */}
          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[0.95fr_1.05fr]">

            {/* LEFT: CONTACT INFORMATION */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 space-y-5 lg:order-1"
            >

              {/* WhatsApp */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-[#171313] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-500/40 hover:shadow-[0_8px_25px_rgba(34,197,94,0.08)]"
              >
                <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-green-500/15 text-green-500 transition-colors group-hover:bg-green-500/25">
                  <FaWhatsapp size={27} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="mb-1 text-xs font-semibold text-zinc-500">
                    WHATSAPP
                  </p>

                  <p className="text-lg font-bold text-white">
                    0822-2863-5167
                  </p>
                </div>

                <ArrowUpRight
                  size={20}
                  className="shrink-0 text-zinc-500 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-green-500"
                />
              </a>

              {/* Email */}
              <a
                href="mailto:unggaputra@gmail.com"
                className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-[#171313] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-[0_8px_25px_rgba(249,115,22,0.08)]"
              >
                <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-orange-500/15 text-orange-500 transition-colors group-hover:bg-orange-500/25">
                  <Mail size={26} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="mb-1 text-xs font-semibold text-zinc-500">
                    EMAIL RESMI
                  </p>

                  <p className="break-all text-base font-bold text-white">
                    unggaputra@gmail.com
                  </p>
                </div>

                <ArrowUpRight
                  size={20}
                  className="shrink-0 text-zinc-500 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-orange-500"
                />
              </a>

              {/* Location */}
              <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-[#171313] p-6">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-sky-500/15 text-sky-400">
                  <MapPin size={26} />
                </div>

                <div className="min-w-0">
                  <p className="mb-1 text-xs font-semibold text-zinc-500">
                    DOMISILI / LOKASI
                  </p>

                  <p className="text-base font-bold text-white">
                    Malang, Jawa Timur, Indonesia
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="rounded-2xl border border-white/10 bg-[#171313] p-6">
                <div className="mb-5 flex items-center gap-3">
                  <MessageCircle
                    size={19}
                    className="text-orange-500"
                  />

                  <h3 className="font-bold text-white">
                    Koneksi Jaringan Sosial
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;

                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm font-medium text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/50 hover:bg-orange-500/10 hover:text-orange-500"
                      >
                        <Icon size={16} />
                        {social.label}

                        <ArrowUpRight
                          size={13}
                          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* RIGHT: EMAIL FORM */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 rounded-3xl border border-white/10 bg-[#171313] p-6 shadow-xl md:p-9 lg:order-2"
            >
              <div className="mb-8">
                <div className="mb-4 flex items-center gap-3">
                  <Mail
                    size={22}
                    className="text-orange-500"
                  />

                  <h3 className="text-2xl font-bold">
                    Kirim Pesan
                  </h3>
                </div>

                <p className="text-sm leading-relaxed text-zinc-400">
                  Isi formulir di bawah ini untuk mengirimkan
                  pesan secara langsung ke email saya.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* Name and Email */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-sm font-semibold text-zinc-300"
                    >
                      Nama Lengkap
                      <span className="text-orange-500"> *</span>
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
                      placeholder="Contoh: Budi Santoso"
                      className="w-full rounded-xl border border-white/10 bg-[#100e0e] px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-zinc-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/30"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-sm font-semibold text-zinc-300"
                    >
                      Alamat Email
                      <span className="text-orange-500"> *</span>
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
                      className="w-full rounded-xl border border-white/10 bg-[#100e0e] px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-zinc-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/30"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="mb-2 block text-sm font-semibold text-zinc-300"
                  >
                    Subjek / Topik
                    <span className="text-orange-500"> *</span>
                  </label>

                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    required
                    maxLength={200}
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Contoh: Diskusi Proyek Web Enterprise"
                    className="w-full rounded-xl border border-white/10 bg-[#100e0e] px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-zinc-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/30"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-sm font-semibold text-zinc-300"
                  >
                    Pesan Anda
                    <span className="text-orange-500"> *</span>
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    maxLength={5000}
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Ceritakan gambaran kebutuhan sistem, pertanyaan, atau ide proyek Anda di sini..."
                    className="w-full resize-y rounded-xl border border-white/10 bg-[#100e0e] px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-zinc-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/30"
                  />
                </div>

                {/* Status */}
                {status && (
                  <div
                    role="status"
                    className={`flex items-start gap-3 rounded-xl border p-4 text-sm ${status.type === "success"
                      ? "border-green-500/20 bg-green-500/10 text-green-400"
                      : "border-red-500/20 bg-red-500/10 text-red-400"
                      }`}
                  >
                    {status.type === "success" ? (
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0"
                      />
                    ) : (
                      <AlertCircle
                        size={18}
                        className="mt-0.5 shrink-0"
                      />
                    )}

                    <p>{status.message}</p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSending}
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-orange-500 px-6 py-4 font-semibold text-white shadow-[0_4px_18px_rgba(249,115,22,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-orange-400 hover:shadow-[0_8px_25px_rgba(249,115,22,0.3)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSending ? (
                    <>
                      <LoaderCircle
                        size={18}
                        className="animate-spin"
                      />
                      Mengirim Pesan...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Kirim Pesan
                      <ArrowUpRight
                        size={18}
                        className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Back to Top Button */}
      <motion.a
        href="#home"
        title="Kembali ke atas"
        aria-label="Kembali ke atas"
        whileHover={{ y: -5, scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-7 right-7 z-[999] flex size-12 items-center justify-center rounded-full border border-orange-400/30 bg-orange-500 text-white shadow-[0_4px_20px_rgba(249,115,22,0.3)] transition-colors duration-300 hover:bg-orange-400"
      >
        <ArrowUp size={22} />
      </motion.a>
      <Footer />
    </>
  );
}
