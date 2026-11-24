export interface Certification {
  title: string;
  issuer: string;
  category: string;
  year?: string;
  credentialUrl?: string;
  image?: string;
  certificateNumber?: string;
  validUntil?: string;
  pdfUrl?: string;
}

export const certifications: Certification[] = [
  {
    title: "Data Scientist",
    issuer: "BNSP Certification",
    category: "Sertifikasi Kompetensi",
    year: "2026",
    image: "/images/certificates/bnsp-data-scientist.png",
    certificateNumber: "04.0681/LSP-DKS/SRTF/IX/2026",
    validUntil: "2029",
    pdfUrl: "https://drive.google.com/file/d/1hEJ0nKQWuaLN1quNWSBmKuW7SngOZRHX/view?usp=drive_link",
  },
  {
    title: "Getting Started with Data",
    issuer: "IBM SkillsBuild",
    category: "Pelatihan",
    year: "2026",
    image: "/images/certificates/GSWD.png",
    credentialUrl: "https://www.credly.com/earner/earned/badge/b0496fc0-a88f-452a-a2b8-4fff97a7dc9a",
  },
  {
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco",
    category: "Pelatihan",
    year: "2023",
    image: "/images/certificates/CCNASRWE.png",
    credentialUrl: "https://www.credly.com/badges/9aa7823a-e2d1-4846-a8ba-5a75a7f311ab/linked_in_profile",
  },
  {
    title: "Keamanan IT: Pertahanan terhadap Kejahatan Digital",
    issuer: "Google (via Coursera)",
    category: "Pelatihan",
    year: "2022",
    image: "/images/certificates/keamanan-it.png",
    certificateNumber: "4ZRQ83HYJ7HH",
    pdfUrl: "https://coursera.org/verify/4ZRQ83HYJ7HH",
  },
  {
    title: "Administrasi Sistem dan Layanan Infrastruktur TI",
    issuer: "Google (via Coursera)",
    category: "Pelatihan",
    year: "2022",
    image: "/images/certificates/administrasi-sistem.png",
    certificateNumber: "JQPUJ2T97PTQ",
    pdfUrl: "https://coursera.org/verify/JQPUJ2T97PTQ",
  },
  {
    title: "Seluk Beluk Jaringan Komputer",
    issuer: "Google (via Coursera)",
    category: "Pelatihan",
    year: "2022",
    image: "/images/certificates/seluk-beluk-jaringan-komputer.png",
    certificateNumber: "GGFUTVX43KTM",
    pdfUrl: "https://coursera.org/verify/GGFUTVX43KTM",
  },
  {
    title: "Dasar-Dasar Dukungan Teknis",
    issuer: "Google (via Coursera)",
    category: "Pelatihan",
    year: "2022",
    image: "/images/certificates/dasar-dasar-dukungan-teknis.png",
    certificateNumber: "JX59NZN7B449",
    pdfUrl: "https://coursera.org/verify/JX59NZN7B449",
  },
  {
    title: "Work In Tech Soft Skills Training",
    issuer: "QED Research Consulting & Yayasan Plan International Indonesia (INCO Academy Work in Tech)",
    category: "Pelatihan",
    year: "2022",
    image: "/images/certificates/inco-academy.png",
    pdfUrl: "https://drive.google.com/file/d/1Pt96SH8wnQ3mrpPuSC4yeOWIt_f6vn1c/view?usp=sharing",
  },
  {
    title: "Memulai Pemrograman Dengan Python",
    issuer: "Dicoding Indonesia",
    category: "Pelatihan",
    year: "2022",
    image: "/images/certificates/dicoding2.png",
    certificateNumber: "RVZK637MOZD5",
    validUntil: "2025",
    credentialUrl: "https://www.dicoding.com/certificates/RVZK637MOZD5",
  },
  {
    title: "Belajar Dasar Visualisasi Data",
    issuer: "Dicoding Indonesia",
    category: "Pelatihan",
    year: "2022",
    image: "/images/certificates/dicoding1.png",
    certificateNumber: "JLX1GLVKJZ72",
    validUntil: "2025",
    credentialUrl: "https://www.dicoding.com/certificates/JLX1GLVKJZ72",
  },
  {
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco",
    category: "Pelatihan",
    year: "2022",
    image: "/images/certificates/CCNAITN.png",
    credentialUrl: "https://www.credly.com/badges/294e4cc3-f59c-4d2f-ac78-8d09c07d0f42?source=linked_in_profile",
  },
  

];