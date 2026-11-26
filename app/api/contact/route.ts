
import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // Ambil konfigurasi environment
    const apiKey = process.env.RESEND_API_KEY;
    const emailFrom = process.env.EMAIL_FROM;
    const contactEmail = process.env.CONTACT_EMAIL;

    // Validasi konfigurasi
    if (!apiKey || !emailFrom || !contactEmail) {
      console.error("Email configuration is incomplete.");

      return NextResponse.json(
        { message: "Konfigurasi email belum lengkap." },
        { status: 500 }
      );
    }

    // Inisialisasi Resend
    const resend = new Resend(apiKey);

    // Ambil data formulir
    const body = await request.json();

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const subject = String(body.subject ?? "").trim();
    const message = String(body.message ?? "").trim();

    // Validasi input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: "Semua field wajib diisi." },
        { status: 400 }
      );
    }

    if (
      name.length > 100 ||
      subject.length > 200 ||
      message.length > 5000
    ) {
      return NextResponse.json(
        { message: "Input terlalu panjang." },
        { status: 400 }
      );
    }

    // Validasi format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Format email tidak valid." },
        { status: 400 }
      );
    }

    // Kirim email menggunakan Resend
    const { data, error } = await resend.emails.send({
      from: emailFrom,
      to: [contactEmail],
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `
Nama: ${name}
Email: ${email}
Subject: ${subject}

Pesan:
${message}
      `,
    });

    // Tangani error Resend
    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { message: "Email gagal dikirim. Silakan coba lagi." },
        { status: 500 }
      );
    }

    console.log("Email successfully sent:", data?.id);

    return NextResponse.json({
      message: "Pesan berhasil dikirim!",
    });

  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { message: "Terjadi kesalahan pada server." },
      { status: 500 }
    );
  }
}
