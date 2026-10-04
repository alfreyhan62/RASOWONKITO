import React from "react";
import { FaWhatsapp, FaFacebook, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="footer footer-horizontal footer-center bg-red-800 text-primary-content py-4 gap-2 text-sm">
        <aside>
          <img src="/logo-RWK.png" className="inline-block w-18 h-18" />
          <p className="font-bold text-white">
            Palembang Rasa Nusantara
            <br />
            Mewujudkan rasa, menyatukan selera.
          </p>
        </aside>
        <nav className="mt-2 mb-2">
          <div className="grid grid-flow-col gap-4 text-2xl text-white">
            {/* WhatsApp */}
            <a
              href="https://wa.me/6283157241563?&text=Permisi,Kak,Mau,Order🙏"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="hover:text-gray-300" />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/1CA7Shi3d7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="hover:text-gray-300" />
            </a>

            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=Raso_WongKito@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="hover:text-gray-300" />
            </a>
          </div>
        </nav>
        <p className="text-white">
          Copyright © {new Date().getFullYear()} - Semua hak cipta dilindungi.
        </p>
      </footer>
    </>
  );
}

export default Footer;
