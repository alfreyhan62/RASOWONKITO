import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Product() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.1 },
    );
    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <HeroProduct />
      <SectionProduct1 />
      <SectionProduct2 />
      <SectionProduct3 />
      <Footer />
    </>
  );
}

export default Product;

function HeroProduct() {
  return (
    <>
      <div
        className="hero h-[760px]"
        style={{
          backgroundImage: "url('/hero2.jpg')",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Lezatnya Kuliner Wong Kito
            </h1>
            <p className="mb-5 text-xl font-semibold">
              Cita rasa khas Palembang yang menggoda selera temukan makanan
              favoritmu dan kenali keunikan setiap hidangan!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function SectionProduct1() {
  return (
    <>
      <section class="text-center py-12">
        <h2 class="reveal-on-scroll text-red-700 text-5xl font-extrabold uppercase mb-8">
          Makanan Khas Palembang
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto px-4 ">
          <div class="reveal-on-scroll bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
            <img
              src="/menu/pempek.jpg"
              alt="Pempek"
              class="w-full h-48 object-cover"
            />
            <div class="p-4">
              <h3 class="text-xl font-bold text-gray-800">Pempek</h3>
              <p class="text-lg text-yellow-400 font-semibold mt-2">Rp 15.000</p>
              <p class="text-sm text-gray-600 mt-1">
                Pempek ikan tenggiri khas Palembang, disajikan dengan cuko asli.
              </p>
              <a
                href="https://wa.me/6283157241563?&text=Permisi,Kak,Mau,Order"
                target="blank"
                class="mt-4 inline-block px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 transition"
              >
                Beli Sekarang
              </a>
            </div>
          </div>

          <div class="reveal-on-scroll bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
            <img
              src="/menu/tekwan.jpg"
              alt="Tekwan"
              class="w-full h-48 object-cover"
            />
            <div class="p-4">
              <h3 class="text-xl font-bold text-gray-800">Tekwan</h3>
              <p class="text-lg text-yellow-400 font-semibold mt-2">Rp 12.000</p>
              <p class="text-sm text-gray-600 mt-1">
                bulatan kecil-kecil dari campuran daging ikan dan tepung
                tapioka.
              </p>
              <a
                href="https://wa.me/6283157241563?&text=Permisi,Kak,Mau,Order"
                target="blank"
                class="mt-4 inline-block px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 transition"
              >
                Beli Sekarang
              </a>
            </div>
          </div>

          <div class="reveal-on-scroll bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
            <img
              src="/menu/mie celor.jpg"
              alt="Mie Celor"
              class="w-full h-48 object-cover"
            />
            <div class="p-4">
              <h3 class="text-xl font-bold text-gray-800">Mie Celor</h3>
              <p class="text-lg text-yellow-400 font-semibold mt-2">Rp 12.000</p>
              <p class="text-sm text-gray-600 mt-1">
                Mie dengan kuah santan kental, telur, dan udang khas Palembang.
              </p>
              <a
                href="https://wa.me/6283157241563?&text=Permisi,Kak,Mau,Order"
                target="blank"
                class="mt-4 inline-block px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 transition"
              >
                Beli Sekarang
              </a>
            </div>
          </div>

          <div class="reveal-on-scroll bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
            <img
              src="/menu/laksan.jpg"
              alt="Laksan"
              class="w-full h-48 object-cover"
            />
            <div class="p-4">
              <h3 class="text-xl font-bold text-gray-800">Laksan</h3>
              <p class="text-lg text-yellow-400 font-semibold mt-2">Rp 12.000</p>
              <p class="text-sm text-gray-600 mt-1">
                Mirip pempek, berbentuk pipih oval dan disajikan dengan kuah
                santan.
              </p>
              <a
                href="https://wa.me/6283157241563?&text=Permisi,Kak,Mau,Order"
                target="blank"
                class="mt-4 inline-block px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 transition"
              >
                Beli Sekarang
              </a>
            </div>
          </div>

          <div class="reveal-on-scroll bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
            <img
              src="/menu/pindang.jpg"
              alt="Pindang Patin"
              class="w-full h-48 object-cover"
            />
            <div class="p-4">
              <h3 class="text-xl font-bold text-gray-800">Pindang Patin</h3>
              <p class="text-lg text-yellow-400 font-semibold mt-2">Rp 35.000</p>
              <p class="text-sm text-gray-600 mt-1">
                hidangan khas yang menggabungkan rasa asam, gurih, dan pedas.
              </p>
              <a
                href="https://wa.me/6283157241563?&text=Permisi,Kak,Mau,Order"
                target="blank"
                class="mt-4 inline-block px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 transition"
              >
                Beli Sekarang
              </a>
            </div>
          </div>

          <div class="reveal-on-scroll bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
            <img
              src="/menu/burgo.jpg"
              alt="Burgo"
              class="w-full h-48 object-cover"
            />
            <div class="p-4">
              <h3 class="text-xl font-bold text-gray-800">Burgo</h3>
              <p class="text-lg text-yellow-400 font-semibold mt-2">Rp 15.000</p>
              <p class="text-sm text-gray-600 mt-1">
                Makanan khas Palembang dari adonan tepung beras yang dikukus dan
                digulung.
              </p>
              <a
                href="https://wa.me/6283157241563?&text=Permisi,Kak,Mau,Order"
                target="blank"
                class="mt-4 inline-block px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 transition"
              >
                Beli Sekarang
              </a>
            </div>
          </div>
          <div class="reveal-on-scroll bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
            <img
              src="/menu/kojo.jpg"
              alt="Bolu Kojo"
              class="w-full h-48 object-cover"
            />
            <div class="p-4">
              <h3 class="text-xl font-bold text-gray-800">Bolu Kojo</h3>
              <p class="text-lg text-yellow-400 font-semibold mt-2">Rp 25.000</p>
              <p class="text-sm text-gray-600 mt-1">
                Kue basah tradisional yang manis, legit, dan bertekstur lembut.
              </p>
              <a
                href="https://wa.me/6283157241563?&text=Permisi,Kak,Mau,Order"
                target="blank"
                class="mt-4 inline-block px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 transition"
              >
                Beli Sekarang
              </a>
            </div>
          </div>
          <div class="reveal-on-scroll bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
            <img
              src="/menu/martabak.jpg"
              alt="Martabak Kari"
              class="w-full h-48 object-cover"
            />
            <div class="p-4">
              <h3 class="text-xl font-bold text-gray-800">Martabak Kari</h3>
              <p class="text-lg text-yellow-400 font-semibold mt-2">Rp 14.000</p>
              <p class="text-sm text-gray-600 mt-1">
                Martabak khas Palembang berisi telur dan disajikan dengan kuah
                kari.
              </p>
              <a
                href="https://wa.me/6283157241563?&text=Permisi,Kak,Mau,Order"
                target="blank"
                class="mt-4 inline-block px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 transition"
              >
                Beli Sekarang
              </a>
            </div>
          </div>
          <div class="reveal-on-scroll bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
            <img
              src="/menu/tempoyak.jpg"
              alt="Pindang Patin"
              class="w-full h-48 object-cover"
            />
            <div class="p-4">
              <h3 class="text-xl font-bold text-gray-800">Tempoyak</h3>
              <p class="text-lg text-yellow-400 font-semibold mt-2">Rp 20.000</p>
              <p class="text-sm text-gray-600 mt-1">
                Makanan khas Palembang dari durian fermentasi dengan garam.
              </p>
              <a
                href="https://wa.me/6283157241563?&text=Permisi,Kak,Mau,Order"
                target="blank"
                class="mt-4 inline-block px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 transition"
              >
                Beli Sekarang
              </a>
            </div>
          </div>

          <div class="reveal-on-scroll bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
            <img
              src="/menu/kemplang.jpg"
              alt="Kemplang Ikan"
              class="w-full h-48 object-cover"
            />
            <div class="p-4">
              <h3 class="text-xl font-bold text-gray-800">Kemplang Ikan</h3>
              <p class="text-lg text-yellow-400 font-semibold mt-2">Rp 10.000</p>
              <p class="text-sm text-gray-600 mt-1">
                Kerupuk khas Palembang dari ikan, tepung tapioka, dan bumbu
                pilihan.
              </p>
              <a
                href="https://wa.me/6283157241563?&text=Permisi,Kak,Mau,Order"
                target="blank"
                class="mt-4 inline-block px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 transition"
              >
                Beli Sekarang
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function SectionProduct2() {
  return (
    <>
      <section className="text-center py-12">
        <h2 className="reveal-on-scroll text-red-700 text-5xl font-extrabold uppercase mb-8">
          Minuman Khas Palembang
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          <div className="reveal-on-scroll bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
            <img
              src="/menu/es kacang.jpg"
              alt="Es Kacang Merah"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800">
                Es Kacang Merah
              </h3>
              <p className="text-lg text-yellow-400 font-semibold mt-2">
                Rp 12.000
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Minuman segar berisi kacang merah manis dengan sirup dan es
                serut.
              </p>
              <a
                href="https://wa.me/6283157241563?&text=Permisi,Kak,Mau,Order"
                target="blank"
                class="mt-4 inline-block px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 transition"
              >
                Beli Sekarang
              </a>
            </div>
          </div>

          <div className="reveal-on-scroll bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
            <img
              src="/menu/es jagung.jpg"
              alt="Es Jagung"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800">Es Jagung</h3>
              <p className="text-lg text-yellow-400 font-semibold mt-2">
                Rp 10.000
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Minuman khas dengan jagung manis, susu kental, dan es serut.
              </p>
              <a
                href="https://wa.me/6283157241563?&text=Permisi,Kak,Mau,Order"
                target="blank"
                class="mt-4 inline-block px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 transition"
              >
                Beli Sekarang
              </a>
            </div>
          </div>

          <div className="reveal-on-scroll bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
            <img
              src="/menu/es sugus.jpg"
              alt="Es Sugus"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800">Es Sugus</h3>
              <p className="text-lg text-yellow-400 font-semibold mt-2">
                Rp 9.000
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Minuman es warna-warni dengan rasa manis dan segar seperti
                permen sugus.
              </p>
              <a
                href="https://wa.me/6283157241563?&text=Permisi,Kak,Mau,Order"
                target="blank"
                class="mt-4 inline-block px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 transition"
              >
                Beli Sekarang
              </a>
            </div>
          </div>

          <div className="reveal-on-scroll bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
            <img
              src="/menu/sop durian.jpg"
              alt="Sop Durian"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800">Sop Durian</h3>
              <p className="text-lg text-yellow-400 font-semibold mt-2">
                Rp 17.000
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Perpaduan durian segar, susu, dan topping lainnya yang nikmat
                dan dingin.
              </p>
              <a
                href="https://wa.me/6283157241563?&text=Permisi,Kak,Mau,Order"
                target="blank"
                class="mt-4 inline-block px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 transition"
              >
                Beli Sekarang
              </a>
            </div>
          </div>

          <div className="reveal-on-scroll bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
            <img
              src="/menu/teh secang.jpg"
              alt="Teh Secang"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800">Teh Secang</h3>
              <p className="text-lg text-yellow-400 font-semibold mt-2">
                Rp 8.000
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Minuman herbal tradisional berwarna merah dari kayu secang yang
                menyehatkan.
              </p>
              <a
                href="https://wa.me/6283157241563?&text=Permisi,Kak,Mau,Order"
                target="blank"
                class="mt-4 inline-block px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 transition"
              >
                Beli Sekarang
              </a>
            </div>
          </div>

          <div className="reveal-on-scroll bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
            <img
              src="/menu/teh selasih pandan.jpg"
              alt="Teh Selasih Pandan"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800">
                Teh Selasih Pandan
              </h3>
              <p className="text-lg text-yellow-400 font-semibold mt-2">
                Rp 11.000
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Campuran teh pandan harum dengan biji selasih, menyegarkan dan
                kaya manfaat.
              </p>
              <a
                href="https://wa.me/6283157241563?&text=Permisi,Kak,Mau,Order"
                target="blank"
                class="mt-4 inline-block px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 transition"
              >
                Beli Sekarang
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function SectionProduct3() {
  return (
    <>
      <section class="text-center py-12"></section>
    </>
  );
}
