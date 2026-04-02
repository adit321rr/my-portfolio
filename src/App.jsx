import React, { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
// Tambahkan baris ini (sesuaikan nama file fotomu jika bukan saya.jpg)
import fotoProfil from "./assets/saya2.jpg";

export default function App() {
  // 1. STATE UNTUK MENGONTROL TAMPILAN PROJECT
  const [showAllProjects, setShowAllProjects] = useState(false);

  // --- KUMPULAN DATA PROJECT ---
  const projectsData = [
    {
      title: "WaveNet Arabic Voice Control",
      category: "Deep Learning",
      badgeStyle: "text-blue-400 bg-blue-500/10",
      description:
        "Pengembangan sistem kontrol suara berbahasa Arab berbasis arsitektur WaveNet untuk menggerakkan karakter dalam Endless Runner Game. (Tugas Akhir)",
      link: "#",
      linkText: "View Details →",
    },
    {
      title: "Air Quality Dashboard",
      category: "Data Analysis",
      badgeStyle: "text-orange-400 bg-orange-500/10",
      description:
        "Dashboard interaktif (Jupyter Notebook / Python) untuk memvisualisasikan kualitas udara. (Submission Dicoding Analisis Data).",
      link: "https://github.com/adit321rr/air-quality-dashboard",
      linkText: "View GitHub →",
    },
    {
      title: "Finance Dashboard",
      category: "Full Stack Web",
      badgeStyle: "text-emerald-400 bg-emerald-500/10",
      description:
        "Aplikasi pencatatan arus kas interaktif menggunakan JavaScript. Dilengkapi dengan kalkulasi otomatis.",
      link: "https://github.com/adit321rr/FinanceDasbord-",
      linkText: "View GitHub →",
    },
    {
      title: "Trading Setup Validator",
      category: "Fintech Tools",
      badgeStyle: "text-purple-400 bg-purple-500/10",
      description:
        "Utilitas trading mandiri yang dibangun dengan TypeScript untuk memvalidasi setup sebelum eksekusi.",
      link: "https://github.com/adit321rr/trading-setup-validator",
      linkText: "View GitHub →",
    },
    {
      title: "Crypto Watchlist Lite",
      category: "Fintech Tools",
      badgeStyle: "text-purple-400 bg-purple-500/10",
      description:
        "Aplikasi ringan untuk memantau pergerakan harga aset kripto favorit menggunakan TypeScript.",
      link: "https://github.com/adit321rr/crypto-watchlist-lite",
      linkText: "View GitHub →",
    },
    {
      title: "Bookshelf API",
      category: "Backend Dev",
      badgeStyle: "text-rose-400 bg-rose-500/10",
      description:
        "RESTful API menggunakan JavaScript untuk mengelola data buku secara lengkap (operasi CRUD).",
      link: "https://github.com/adit321rr/bookshelf-api",
      linkText: "View GitHub →",
    },
    {
      title: "Bookshelf App",
      category: "Frontend Web",
      badgeStyle: "text-cyan-400 bg-cyan-500/10",
      description:
        "Aplikasi antarmuka manajemen rak buku interaktif yang dibangun menggunakan JavaScript.",
      link: "https://github.com/adit321rr/bookshelf-app",
      linkText: "View GitHub →",
    },
    {
      title: "Personal Notes App",
      category: "Frontend Web",
      badgeStyle: "text-cyan-400 bg-cyan-500/10",
      description:
        "Aplikasi catatan pribadi yang responsif dan interaktif untuk menyimpan ide-ide penting.",
      link: "https://github.com/adit321rr/personal-notes-app",
      linkText: "View GitHub →",
    },
    {
      title: "ASAH Capstone Project",
      category: "Machine Learning",
      badgeStyle: "text-blue-400 bg-blue-500/10",
      description:
        "Proyek kolaborasi penyelesaian program ASAH (Dicoding x Accenture) dengan fokus implementasi Machine Learning.",
      link: "#",
      linkText: "View Details →",
    },
  ];

  const displayedProjects = showAllProjects
    ? projectsData
    : projectsData.slice(0, 6);

  // --- ANIMASI VARIANTS (Framer Motion) ---
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500/30 scroll-smooth">
      {/* Navbar Sederhana */}
      <nav className="sticky top-0 z-50 flex items-center justify-between bg-slate-950/80 p-6 mx-auto max-w-7xl backdrop-blur-md border-b border-slate-800/50">
        <div className="text-2xl font-bold tracking-tighter text-blue-500">
          NA.
        </div>
        <ul className="flex gap-8 text-sm font-medium text-slate-400">
          <li>
            <a
              href="#about"
              className="transition hover:text-blue-400 cursor-pointer"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="transition hover:text-blue-400 cursor-pointer"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="transition hover:text-blue-400 cursor-pointer"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <main className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <motion.div initial="hidden" animate="visible" variants={fadeUpVariant}>
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight md:text-8xl">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Nasyrun Adetiya
            </span>
            .
          </h1>
          <h2 className="mb-8 max-w-4xl text-2xl font-light leading-relaxed text-slate-300 md:text-5xl">
            Machine Learning Engineer, Data Analyst, & Full Stack Developer.
          </h2>
          <p className="mb-12 max-w-2xl text-lg leading-relaxed text-slate-500">
            Membangun sistem cerdas, menganalisis data kompleks, dan merancang
            aplikasi web modern secara menyeluruh (end-to-end). Mari ciptakan
            solusi teknologi yang berdampak.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-blue-600 px-8 py-3 font-semibold text-white shadow-lg transition-all hover:bg-blue-500 hover:shadow-blue-500/25"
            >
              Lihat Project
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-700 bg-transparent px-8 py-3 font-semibold text-slate-300 transition-all hover:bg-slate-800 hover:text-white"
            >
              Hubungi Saya
            </a>
            <a
              href="/cv.pdf"
              download="CV_Nasyrun_Adetiya.pdf"
              className="rounded-full border border-blue-500/50 bg-blue-500/10 px-8 py-3 font-semibold text-blue-400 transition-all hover:bg-blue-500 hover:text-white"
            >
              Download CV ↓
            </a>
          </div>
        </motion.div>
      </main>

      {/* Tech Stack Section */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
        >
          <p className="mb-6 text-sm font-semibold tracking-widest text-slate-500 uppercase">
            Tech Stack & Tools
          </p>
          <div className="flex flex-wrap gap-4">
            {[
              "Python",
              "PyTorch",
              "Pandas",
              "React JS",
              "React Native",
              "TypeScript",
              "Node.js",
              "Tailwind CSS",
              "MQL5",
            ].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-lg border border-slate-800 bg-slate-900/50 px-5 py-2.5 text-sm font-medium text-slate-300 shadow-sm transition hover:border-blue-500/50 hover:text-blue-400"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="border-t border-slate-800 bg-slate-900/20 py-24"
      >
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
          >
            <h2 className="text-3xl font-bold mb-6 text-slate-100">About Me</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed text-lg">
              <p>
                Halo! Aku seorang lulusan Teknik Informatika dari Universitas
                Darussalam Gontor. Saat ini aku mengeksplorasi peluang teknologi
                dan berdomisili di Jogja.
              </p>
              <p>
                Ketertarikanku sangat luas, mulai dari merancang model Deep
                Learning dan arsitektur MLOps, membedah data di market
                finansial, hingga membangun aplikasi web Full Stack yang tangguh
                dan responsif.
              </p>
              <p>
                Di luar penulisan kode dan analisis data, aku rutin menghabiskan
                waktu di gym untuk menjaga stamina, atau bereksperimen dengan
                kamera menangkap momen visual dalam format profesional RAW/LOG.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-square rounded-2xl bg-gradient-to-tr from-slate-800 to-slate-900 border border-slate-700/50 flex items-center justify-center shadow-2xl relative overflow-hidden group w-full max-w-md mx-auto"
          >
            <img
              src={fotoProfil}
              alt="Foto Profil Nasyrun Adetiya"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-24 mx-auto max-w-7xl px-6 border-t border-slate-800"
      >
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          className="text-3xl font-bold mb-12 text-slate-100"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              className="rounded-2xl flex flex-col justify-between border border-slate-800 bg-slate-900/50 p-8 transition-all hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div>
                <div className="mb-4 flex gap-2">
                  <span
                    className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${project.badgeStyle}`}
                  >
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="flex gap-4 mt-auto">
                <a
                  href={project.link}
                  target={project.link !== "#" ? "_blank" : "_self"}
                  rel={project.link !== "#" ? "noopener noreferrer" : ""}
                  className="text-sm font-semibold text-blue-400 hover:text-blue-300"
                >
                  {project.linkText}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {projectsData.length > 6 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="rounded-full border border-slate-700 bg-transparent px-8 py-3 font-semibold text-slate-300 transition-all hover:bg-slate-800 hover:text-white"
            >
              {showAllProjects ? "Show Less" : "View More Projects"}
            </button>
          </div>
        )}
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="border-t border-slate-800 bg-slate-950 py-24"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          className="mx-auto max-w-4xl px-6 text-center"
        >
          <h2 className="text-3xl font-bold mb-6 text-slate-100">
            Mari Berkolaborasi
          </h2>
          <p className="text-slate-400 mb-10 leading-relaxed text-lg">
            Tertarik untuk berdiskusi tentang peluang karir, project
            open-source, atau sekadar mengobrol tentang pengembangan Full Stack
            dan MLOps? Kotak masukku selalu terbuka.
          </p>
          <a
            href="mailto:nasyrunadetiya1@gmail.com"
            className="inline-block rounded-full bg-slate-100 px-10 py-4 font-bold text-slate-900 shadow-lg transition-all hover:bg-slate-300 hover:scale-105"
          >
            Kirim Email
          </a>
          <div className="mt-16 flex justify-center gap-8 border-t border-slate-800/50 pt-8 text-slate-500">
            <a
              href="https://github.com/adit321rr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/nasyrun-adetiya-14b4a428b/"
              className="hover:text-slate-300 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/nasrun_aditiya/"
              className="hover:text-slate-300 transition-colors"
            >
              Instagram
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-slate-600 bg-slate-950">
        © 2026 Nasyrun Adetiya. Built with React & Tailwind.
      </footer>
    </div>
  );
}
