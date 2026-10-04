import Navbar from "./Navbar";
import Footer from "./Footer";

import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp, FaFacebook } from "react-icons/fa";

import React, { useEffect, useState } from "react";
import { db } from "../Firebase";
import { collection, addDoc } from "firebase/firestore";

import Swal from "sweetalert2";

function Contact() {
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
      <HeroContact />
      <ContactSection2 />
      <ContactSection />
      <Footer />
    </>
  );
}

export default Contact;

function HeroContact() {
  return (
    <>
      <div
        className="hero h-[760px]"
        style={{
          backgroundImage: "url('/herocontact.jpg')",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-xl">
            <h1 className="mb-5 text-5xl font-bold">Hubungi Kami</h1>
            <p className="mb-5 text-xl font-semibold">
              Punya pertanyaan, saran, atau ingin memesan langsung? Kami siap
              melayani Anda dengan sepenuh hati. Silakan hubungi kami melalui
              WhatsApp atau media sosial!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subjek: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simpan data ke Firestore
      await addDoc(collection(db, "contacts"), formData);
      Swal.fire({
        title: "Sukses!",
        text: "Terima Kasih Pesannya!",
        icon: "success",
      });
      setFormData({ name: "", email: "", subjek: "", message: "" }); // Reset form
    } catch (error) {
      console.error("Error submitting form: ", error);
      alert("Terjadi kesalahan. Silakan coba lagi.");
    }
  };

  return (
    <>
      <section className="py-20 bg-base-200 text-gray-800">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="reveal-on-scroll">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Hubungi Kami
            </h2>
            <p className="mb-6">
              Punya pertanyaan atau ingin memesan? Hubungi kami melalui
              informasi berikut:
            </p>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center">
                <span className="mr-3">
                  <MdOutlineMail />
                </span>
                <a
                  target="blank"
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=Raso_WongKito@gmail.com"
                >
                  Raso_WongKito@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <span className="mr-3">
                  <FaFacebook />
                </span>
                <a
                  target="blank"
                  href="https://www.facebook.com/aidil.saputra.315390?rdid=fTV5ddfwWah0ripV&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CA7Shi3d7%2F#"
                >
                  Raso WongKito
                </a>
              </li>
              <li className="flex items-center">
                <span className="mr-3">
                  <FaWhatsapp />
                </span>
                <span>+62 831-5724-1563</span>
              </li>
            </ul>

            <div className="mt-6 ml-2">
              <img src="/qr.jpeg" alt="QR Code" className="w-50 rounded-md" />
            </div>
          </div>

          <div className="reveal-on-scroll">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Masukkan Nama"
                  className="p-3 w-full border border-gray-300 rounded bg-white text-gray-800 placeholder-gray-500"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Masukkan Email @ "
                  className="p-3 w-full border border-gray-300 rounded bg-white text-gray-800 placeholder-gray-500"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <input
                type="text"
                name="subjek"
                placeholder="Masukkan Subjek"
                className="p-3 w-full border border-gray-300 rounded bg-white text-gray-800 placeholder-gray-500"
                required
                value={formData.subjek}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Pesan Anda"
                className="p-3 w-full h-32 border border-gray-300 rounded bg-white text-gray-800 placeholder-gray-500"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button
                type="submit"
                className="px-6 py-6 btn bg-red-800 text-white shadow-none rounded-2xl hover:bg-yellow-400 hover:text-black"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactSection2() {
  return (
    <>
      <section className="py-20 bg-white text-gray-800">
        <div className="max-w-7xl mx-auto px-4 shadow-2xl">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Lokasi Kami</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.4084537614845!2d104.73008487472961!3d-2.984031696992036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b75ec487f021d%3A0x63054012aa39de4f!2sPOLITEKNIK%20NEGERI%20SRIWIJAYA%20(POLSRI)!5e0!3m2!1sid!2sid!4v1748577666084!5m2!1sid!2sid"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </section>
    </>
  );
}
