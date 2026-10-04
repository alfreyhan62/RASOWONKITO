import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

function Home() {
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
      <Navbar />
      <HeroSection />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </>
  );
}

export default Home;

function HeroSection() {
  return (
    <>
      <div
        className="hero h-[760px]"
        style={{
          backgroundImage: "url('/home.jpg')",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Rasakan Lezatnya</h1>
            <p className="mb-5 text-xl font-semibold">
              Temukan cita rasa khas dari Kota Palembang yang menggoda selera,
              hanya di sini!
            </p>
            <Link to="/kuliner">
              <button className="btn bg-red-800 text-white shadow-none rounded-2xl hover:bg-yellow-400 hover:text-black">
                Jelajahi Kuliner
                <IoIosArrowForward />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

function Section2() {
  return (
    <>
      <div className="hero bg-base-200 h-[80vh]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* Gambar tetap */}
          <img
            src="https://bams.jambiprov.go.id/wp-content/uploads/2023/10/Jembatan-Ampera-1.png"
            className="w-xl rounded-lg shadow-2xl"
          />

          {/* Teks kutipan dengan icon */}
          <div className="max-w-xl text-center lg:text-left pr-6">
            <p className="text-xl font-semibold text-gray-700 text-justify">
              <span>
                <ImQuotesLeft className="text-red-800 text-2xl mb-6" />
                Makan bukan hanya tentang mengisi perut, tapi juga merasakan
                hangatnya rasa yang membawa pulang kenangan akan rumah. Setiap
                suapan adalah cerita yang mengikat hati dan jiwa.
                <div className="flex justify-end">
                  <ImQuotesRight className="text-red-800 text-3xl" />
                </div>
              </span>
            </p>
            <p className="font-bold text-red-800 text-lg">— Raso Wong Kito.</p>
          </div>
        </div>
      </div>
    </>
  );
}

function Section3() {
  return (
    <>
      <div className="text-center my-10 mt-20 reveal-on-scroll">
        <h1 className="text-3xl font-bold mb-2">Kenapa Harus Kami?</h1>
        <p className="text-gray-600 text-lg mx-auto max-w-2xl">
          Kami bertekad membawa kekayaan kuliner Palembang yang legendaris ke
          seluruh penjuru Indonesia, menghadirkan cita rasa autentik yang
          menggugah selera dan membangkitkan kenangan.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 px-4">
        {/* Card 1 */}
        <div className="card reveal-on-scroll bg-base-100 w-80 shadow-md border border-gray-100 rounded-xl transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
          <figure className="p-4">
            <img
              src="https://i.pinimg.com/736x/55/ee/c4/55eec412da158bf3c5ea773a9715791e.jpg"
              alt="Global Reach"
              className="rounded-xl h-48 object-cover"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Jangkauan Nasional</h2>
            <p>
              Dari Palembang ke seluruh Indonesia, kami menghadirkan cita rasa
              khas dengan pengiriman cepat dan terpercaya.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card reveal-on-scroll bg-base-100 w-80 shadow-md border border-gray-100 rounded-xl transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
          <figure className="p-4">
            <img
              src="https://i.pinimg.com/736x/41/b2/a8/41b2a8fa086538cad0cce2a9f0afcfc6.jpg"
              alt="Quality Assurance"
              className="rounded-xl h-48 object-cover"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Kualitas Terjamin</h2>
            <p>
              Bahan pilihan dan proses higienis memastikan setiap gigitan tetap
              otentik dan berkualitas tinggi.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card reveal-on-scroll bg-base-100 w-80 shadow-md border border-gray-100 rounded-xl transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
          <figure className="p-4">
            <img
              src="https://i.pinimg.com/736x/00/3d/d0/003dd07235aff66e23c4c3218706b156.jpg"
              alt="Sustainability"
              className="rounded-xl h-48 object-cover"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Dipercaya Banyak Orang</h2>
            <p>
              Banyak pelanggan telah membuktikan kualitas dan rasa produk kami.
              Testimoni mereka menjadi dorongan untuk terus menjaga keaslian
              cita rasa Palembang.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function Section4() {
  return (
    <div className="my-10 text-center px-4 mt-20">
      <h1 className="text-3xl font-bold mb-10">Apa Kata Mereka?</h1>

      {/* Carousel wrapper */}
      <div className="carousel w-full max-w-5xl h-72 md:h-96 mx-auto rounded-3xl shadow-2xl">
        {/* Slide 1 */}
        <div id="slide1" tabIndex={0} className="carousel-item relative w-full">
          <img
            src="/testimoni/1.png"
            className="w-full h-72 md:h-96 object-cover rounded-3xl"
            alt="Slide 1"
          />
          <div className="absolute inset-y-1/2 left-2 right-2 flex justify-between transform -translate-y-1/2">
            <button
              onClick={() => document.getElementById("slide4").scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" })}
              className="btn btn-sm btn-circle bg-white text-black hover:bg-gray-300"
            >
              ❮
            </button>
            <button
              onClick={() => document.getElementById("slide2").scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" })}
              className="btn btn-sm btn-circle bg-white text-black hover:bg-gray-300"
            >
              ❯
            </button>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" tabIndex={0} className="carousel-item relative w-full">
          <img
            src="/testimoni/2.png"
            className="w-full h-72 md:h-96 object-cover rounded-3xl"
            alt="Slide 2"
          />
          <div className="absolute inset-y-1/2 left-2 right-2 flex justify-between transform -translate-y-1/2">
            <button
              onClick={() => document.getElementById("slide1").scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" })}
              className="btn btn-sm btn-circle bg-white text-black hover:bg-gray-300"
            >
              ❮
            </button>
            <button
              onClick={() => document.getElementById("slide3").scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" })}
              className="btn btn-sm btn-circle bg-white text-black hover:bg-gray-300"
            >
              ❯
            </button>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" tabIndex={0} className="carousel-item relative w-full">
          <img
            src="/testimoni/3.png"
            className="w-full h-72 md:h-96 object-cover rounded-3xl"
            alt="Slide 3"
          />
          <div className="absolute inset-y-1/2 left-2 right-2 flex justify-between transform -translate-y-1/2">
            <button
              onClick={() => document.getElementById("slide2").scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" })}
              className="btn btn-sm btn-circle bg-white text-black hover:bg-gray-300"
            >
              ❮
            </button>
            <button
              onClick={() => document.getElementById("slide4").scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" })}
              className="btn btn-sm btn-circle bg-white text-black hover:bg-gray-300"
            >
              ❯
            </button>
          </div>
        </div>

        {/* Slide 4 */}
        <div id="slide4" tabIndex={0} className="carousel-item relative w-full">
          <img
            src="/testimoni/4.png"
            className="w-full h-72 md:h-96 object-cover rounded-3xl"
            alt="Slide 4"
          />
          <div className="absolute inset-y-1/2 left-2 right-2 flex justify-between transform -translate-y-1/2">
            <button
              onClick={() => document.getElementById("slide3").scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" })}
              className="btn btn-sm btn-circle bg-white text-black hover:bg-gray-300"
            >
              ❮
            </button>
            <button
              onClick={() => document.getElementById("slide1").scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" })}
              className="btn btn-sm btn-circle bg-white text-black hover:bg-gray-300"
            >
              ❯
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex w-full justify-center gap-2 py-4">
        {[1, 2, 3, 4].map((n) => (
          <button
            key={n}
            onClick={() => document.getElementById(`slide${n}`).scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" })}
            className="btn btn-xs rounded-2xl"
          >
            {n}
          </button>
        ))}
      </div>
    </div>
  );
}
