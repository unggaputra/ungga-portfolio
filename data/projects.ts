const projects = [
  {
    number: "01",
    title: "Sentiment Analysis using IndoBERTweet",
    category: "Data Science / NLP",
    description:
      "Sentiment classification of public opinions about Generative AI in education using IndoBERTweet.",
    detailDescription:
      "Generative Artificial Intelligence is an artificial intelligence system capable of generating text, images, or other media based on user-provided prompts. This technology has the potential to be applied in various sectors, including education. This study aims to explore public sentiment toward the use of ChatGPT in education. The data were collected, processed, and classified into three class labels to form a dataset ready for the classification process. This study employs the IndoBERTweet model to perform text classification by applying four different data augmentation techniques. The performance of each augmentation technique was then evaluated and compared to identify the most optimal technique for the dataset and research context used in this study. The experimental results show that the back-translation augmentation technique achieved the best performance compared to the other three scenarios, with an accuracy of 86%. On macro average, the model obtained an F1-score of 83%. The model demonstrated the best performance in predicting the netral label with an F1-score of 88%, but still faced limitations in identifying the positive label with an F1-score of 73%, which was influenced by the limited amount of data in the positive category.",
    technologies: ["Python", "IndoBERTweet", "PyTorch", "NLP"],
    year: "2026",
    image: "/images/projects/tugas-akhir-0.png",
    gallery: [
      "/images/projects/tugas-akhir-1.png",
      "/images/projects/tugas-akhir-2.png",
    ],
    featureTitle: "Project Features",
    features: [
      " Mengevaluasi persepsi dan potensi pemanfaatan generative AI dalam kegiatan pembelajaran berdasarkan analisis sentimen teks",
      "Mengidentifikasi faktor apa saja yang memengaruhi serta dampak penerapan generative AI dalam konteks pembelajaran berdasarkan opini masyarakat pada platform X",
      "Mengidentifikasi potensi risiko, isu etika, serta alternatif solusi guna mendorong pemanfaatan generative AI yang bertanggung jawab dalam pendidikan",
    ],
    sourceUrl: "https://eprints.umm.ac.id/id/eprint/34673/",
    sourceLabel: "Lihat Hasil Penelitian",
  },
  {
    number: "02",
    title: "Agricultural Report",
    category: "Web Development",
    description:
      "Aplikasi web pencatatan kelompok tani dengan dashboard produktivitas tanaman, perbandingan varietas bibit, dan pemakaian pupuk.",
    detailDescription:
      "Agricultural Report adalah aplikasi web berbasis Laravel untuk mencatat kegiatan kelompok tani, mulai dari data petani, lahan, desa, bibit, pupuk, riwayat tanam, hingga riwayat pembelian pupuk. Data tersebut diolah menjadi dashboard laporan yang menampilkan produktivitas per hektar, perbandingan varietas bibit, pupuk yang dibeli dibanding yang dipakai, serta penyebab gagal panen. Struktur database dirancang ulang dengan relasi antar tabel yang rapi dan satuan yang seragam. Seluruh data pada demo adalah data dummy.",
    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "Bootstrap",
      "Chart.js",
    ],
    year: "2026",
    image: "/images/projects/agricultural-report.png",
    featureTitle: "Fitur Project",
    features: [
      "Pengelolaan data (CRUD) petani, lahan, lokasi, desa, bibit, dan pupuk",
      "Riwayat tanam dengan beberapa jenis pupuk per musim, lengkap dengan musim dan status tanam (sedang tanam, panen, gagal)",
      "Riwayat pembelian pupuk dengan konversi sak ke kilogram",
      "Produktivitas per hektar menurut tahun dan desa, dengan filter tahun dan jenis tanaman",
      "Perbandingan varietas bibit dan analisis dosis pupuk terhadap hasil panen",
      "Grafik pupuk dibeli dan dipakai per tahun, serta penyebab gagal panen",
    ],
    github:
      "https://github.com/ungghaputra/agricultural-report",
    sourceUrl: "https://agricultural-report.freehosting.dev/",
    sourceLabel: "Lihat Demo Aplikasi",
  },
  {
    number: "03",
    title: "Tanya Jawab Putusan Mahkamah Agung (RAG)",
    category: "Generative AI",
    description:
      "Sistem tanya jawab berbasis RAG yang menjawab pertanyaan dari dokumen putusan Mahkamah Agung.",
    detailDescription:
      "Project ini adalah pengembangan lanjutan dari sistem Temu Kembali Informasi yang sebelumnya berjalan di Google Colab, kini disusun ulang menjadi skrip Python modular yang berjalan di lingkungan lokal. Dokumen putusan dalam format PDF diproses secara batch menjadi database vektor lokal. Saat pengguna mengajukan pertanyaan, sistem mengambil potongan konteks yang paling relevan, lalu Google Gemini merumuskan jawabannya berdasarkan konteks tersebut. Antarmuka chat dibangun dengan Streamlit dan menyimpan session state selama percakapan. Project ini dibuat untuk pembelajaran dan tidak berafiliasi dengan Mahkamah Agung; jawaban yang dihasilkan bukan nasihat hukum.",
    technologies: [
      "Python",
      "LangChain",
      "Google Gemini API",
      "ChromaDB",
      "Streamlit",
    ],
    year: "2026",
    image: "/images/projects/rag-document-qa.png",
    featureTitle: "Fitur Project",
    features: [
      "Pemrosesan massal puluhan dokumen PDF dengan pengaturan jeda waktu (rate limit) untuk membangun database vektor lokal",
      "Retrieval-Augmented Generation: mengambil konteks yang relevan dari putusan sebelum menjawab",
      "Antarmuka chat interaktif dengan Streamlit yang mempertahankan riwayat percakapan",
      "Penyimpanan vektor lokal menggunakan ChromaDB",
    ],
    github:
      "https://github.com/unggaputra/rag-document-qa",
    sourceUrl: "https://unggaputra-tanyaputusan.streamlit.app/",
    sourceLabel: "Lihat Demo Aplikasi",
  },
  {
    number: "04",
    title: "SIBI Sign Language Recognition",
    category: "Computer Vision",
    description:
      "A computer vision project for recognizing Indonesian Sign Language.",
    detailDescription:
      "This project explores Indonesian Sign Language recognition using computer vision techniques. It uses OpenCV and MediaPipe as part of the image processing and recognition workflow.",
    technologies: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "Roboflow",
    ],
    year: "2026",
    image: "/images/projects/sibi-recognition.png",
    gallery: [
      "/images/projects/sibi-documentation-1.png",
      "/images/projects/sibi-documentation-2.png",
    ],
    featureTitle: "Project Features",
    features: [
      "Image processing using OpenCV",
      "Hand landmark detection using MediaPipe",
      "Sign language dataset from Roboflow",
    ],
    github:
      "https://github.com/ungghaputra/sibi-sign-language-recognition",
    sourceUrl: "https://alamat-sumber-asli.com",
    sourceLabel: "View Original Source",
  },
  {
    number: "05",
    title: "Smart IoT-Temperature-Monitoring",
    category: "Internet of Things",
    description:
      "Sistem pemantauan dan pengendalian suhu kandang anak ayam berbasis IoT menggunakan ESP32, sensor DHT22, aplikasi Blynk, dan InfluxDB Cloud untuk pemantauan jarak jauh serta penyimpanan data.",
    detailDescription:
      "Proyek ini merupakan pengembangan alat penghangat kandang anak ayam (chick brooder) yang memanfaatkan ESP32 sebagai mikrokontroler, DHT22 sebagai sensor suhu dan kelembapan, serta modul relay untuk mengendalikan penghangat secara otomatis. Sistem dilengkapi dengan aplikasi Blynk yang memungkinkan peternak memantau kondisi kandang dan mengatur batas bawah serta batas atas suhu melalui perangkat yang terhubung ke internet. InfluxDB Cloud digunakan sebagai media penyimpanan data sensor untuk mendukung pemantauan kondisi kandang.",
    technologies: ["ESP32", "C++", "Blynk", "InfluxDB"],
    year: "2023",
    image: "/images/projects/iot-temperature-monitoring.png",
    gallery: [
      "/images/projects/iot-temperature-monitoring-1.png",
      "/images/projects/iot-temperature-monitoring-2.png",
      "/images/projects/iot-temperature-monitoring-3.png",
      "/images/projects/iot-temperature-monitoring-4.png",
    ],
    featureTitle: "Project Features",
    features: [
      "Real-time temperature monitoring",
      "Automated temperature control",
      "Remote access via Blynk application",
      "Data storage in InfluxDB Cloud"
    ],
    github: "https://github.com/unggaputra/ESP32-IoT-Temperature-Monitoring",
    sourceUrl: "https://github.com/unggaputra/ESP32-IoT-Temperature-Monitoring",
    sourcelabel: "View Original Source",
  },
];

export { projects };
