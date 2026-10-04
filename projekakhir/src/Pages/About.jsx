import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

function About() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SejarahSection />
      <MisiSection />
      <VisiSection />
      <Footer />
    </>
  );
}

export default About;

function HeroSection() {
  return (
    <>
      <div
        className="hero h-[760px]"
        style={{
          backgroundImage: "url('/about.webp')",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-xl">
            <h1 className="mb-5 text-5xl font-bold">Tentang Kami</h1>
            <p className="mb-5 text-xl font-semibold">
              {" "}
              Raso Wong Kito adalah wujud cinta kami pada cita rasa khas
              Palembang. Kami hadir untuk mengangkat kekayaan kuliner lokal agar
              dikenal lebih luas dengan rasa yang otentik dan pelayanan penuh
              kehangatan.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function SejarahSection() {
  return (
    <>
      <div className="py-10 px-4 text-center">
        <h1 className="text-4xl font-bold text-red-800 mb-8">
          SEJARAH RASO WONG KITO
        </h1>

        <div className="tabs tabs-boxed justify-center mb-6 font-bold">
          <a
            href="#tahun2024"
            className="tab tab-active text-black hover:text-yellow-400 transition-colors duration-300 text-xl"
          >
            2024
          </a>
          <a
            href="#tahun2025"
            className="tab tab-active text-black hover:text-yellow-400 transition-colors duration-300 text-xl"
          >
            2025
          </a>
        </div>

        <div className="max-w-195 mx-auto">
          <div id="tahun2024" className="tab-content">
            <img
              loading="lazy"
              decoding="async"
              src="/gif/an1.gif"
              className="mx-auto rounded-lg shadow-2xl w-120 border-2 border-yellow-400"
            />
            <p className="text-gray-700 text-md mt-10">
              Pada tahun 2024, kami berempat memulai perjalanan Raso Wong Kito
              dengan tujuan memperkenalkan kuliner khas Palembang ke khalayak
              yang lebih luas. Awalnya, kami hanya mengandalkan resep
              turun-temurun dan semangat berbagi rasa unik dari kota kami.
              Meskipun penuh tantangan, kami percaya bahwa cita rasa otentik
              Palembang mampu menarik hati banyak orang, terutama mereka yang
              belum pernah mencicipi kelezatan kuliner kami sebelumnya.
            </p>
          </div>

          <div id="tahun2025" className="tab-content">
            <img
              loading="lazy"
              decoding="async"
              src="/gif/an2.gif"
              className="mx-auto rounded-lg shadow-2xl w-120 border-2 border-red-800"
            />
            <p className="text-gray-700 text-md mt-10">
              Memasuki tahun 2025, Raso Wong Kito mulai dikenal dan dipercaya
              oleh pelanggan dari luar Palembang. Berkat konsistensi kami
              menjaga kualitas dan inovasi dalam penyajian, semakin banyak orang
              yang menyukai dan merekomendasikan kuliner kami. Kami bangga dapat
              membawa rasa dan budaya Palembang ke panggung yang lebih besar,
              menjadikan Raso Wong Kito bukan hanya sekedar tempat makan, tapi
              juga simbol kebanggaan warisan kuliner kami.
            </p>
          </div>
        </div>

        <style>{`
        .tab-content {
          display: none;
        }
        /* Tampilkan konten jika sedang ditarget */
        .tab-content:target {
          display: block;
        }
        /* Jika tidak ada target di URL (halaman baru dibuka), tampilkan konten tahun2024 */
        body:not(:has(:target)) .tab-content#tahun2024 {
          display: block;
        }
      `}</style>
      </div>
    </>
  );
}

function MisiSection() {
  return (
    <>
      <div className="hero bg-base-200 h-[80vh]">
        <div className="hero-content flex-col lg:flex-row items-center gap-x-8">
          {/* Gambar */}
          <img
            src="https://t4.ftcdn.net/jpg/02/99/09/05/360_F_299090527_n2chCeSRhq9BJMRoHUZxFDRmZmWJKNwy.jpg"
            className="w-xl rounded-lg shadow-2xl"
          />

          {/* Teks kutipan */}
          <div className="max-w-xl text-center lg:text-left pr-6">
            <p className="font-bold text-red-800 text-2xl mt-4 text-center">
              — Visi Raso Wong Kito —
            </p>
            <p className="text-xl font-semibold text-gray-700 text-justify">
              <span>
                <ImQuotesLeft className="text-red-800 text-2xl mb-6" />
                Menghadirkan kuliner khas Palembang yang otentik, berkualitas,
                sehat, dan penuh cinta. Raso Wong Kito lahir dari kepedulian
                kami terhadap budaya lokal dan semangat untuk mengenalkannya ke
                nusantara. Bukan sekadar usaha, ini adalah wujud cinta kami
                untuk rasa, keluarga, dan masa depan yang tumbuh bersama.
                <div className="flex justify-end">
                  <ImQuotesRight className="text-red-800 text-3xl" />
                </div>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function VisiSection() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.15 },
    );
    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="max-w-screen-lg mx-auto px-4 md:px-8 mt-15 mb-15">
        <div className="text-center mb-12 reveal-on-scroll">
            <h1 className="text-3xl font-bold text-red-800 mb-4">
            — Misi Raso Wong Kito —
          </h1>
          <p className="text-gray-600 text-lg mx-auto max-w-2xl">
            Menjadi pelopor kuliner khas Palembang yang dikenal luas di seluruh
            Indonesia, membangun kebanggaan terhadap budaya lokal, serta
            menghadirkan cita rasa yang otentik sebagai simbol kehangatan,
            kebersamaan, dan warisan kuliner bangsa.
          </p>
        </div>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li className="reveal-on-scroll">
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 text-yellow-400"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">Pertama</time>
              <div className="text-lg font-black text-red-800">
                Mengangkat kuliner khas Palembang
              </div>
              Kami berkomitmen untuk menjaga dan memperkenalkan kekayaan rasa
              dan budaya kuliner Palembang melalui makanan tradisional yang
              diolah dengan sepenuh hati.
            </div>
            <hr />
          </li>
          <li className="reveal-on-scroll">
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 text-yellow-400"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end md:mb-10">
              <time className="font-mono italic">Kedua</time>
              <div className="text-lg font-black text-red-800">
                Menjaga keaslian rasa
              </div>
              Kami menggunakan resep turun-temurun, bahan berkualitas, dan
              metode tradisional agar setiap sajian tetap memiliki rasa yang
              konsisten dan menggugah selera.
            </div>
            <hr />
          </li>
          <li className="reveal-on-scroll">
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 text-yellow-400"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">Ketiga</time>
              <div className="text-lg font-black text-red-800">
                Menguatkan Pondasi Usaha Milik Kami
              </div>
              Usaha ini kami rintis dari nol, dengan tekad untuk membawa cita
              rasa khas Palembang ke tingkat yang lebih tinggi. Semua yang kami
              lakukan berakar dari semangat dan komitmen kami sendiri.
            </div>
            <hr />
          </li>
          <li className="reveal-on-scroll">
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 text-yellow-400"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end md:mb-10">
              <time className="font-mono italic">Keempat</time>
              <div className="text-lg font-black text-red-800">
                Menginspirasi generasi muda
              </div>
              Kami ingin generasi muda bangga dengan budaya sendiri dan
              menjadikan kuliner sebagai jalan untuk menciptakan masa depan yang
              mandiri dan penuh makna.
            </div>
            <hr />
          </li>
        </ul>
      </div>
    </>
  );
}
