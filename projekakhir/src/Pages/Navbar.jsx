import { FiCoffee } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white text-black shadow-lg"
            : "bg-transparent text-white"
        }`}
      >
        <div
          className={`${
            isScrolled ? "py-2" : "py-6"
          } font-medium transition-all duration-300`}
        >
          <div className="text-center w-full">
            <h1
              className={`font-bold transition-all duration-300 ${
                isScrolled ? "text-xl" : "text-2xl"
              }`}
            >
              RASO WONG KITO
            </h1>
            <p
              className={`transition-all duration-300 ${
                isScrolled ? "text-[10px]" : "text-xs"
              }`}
            >
              Macam-Macam Kuliner Kota Palembang
            </p>

            {/* Mobile Navigation */}
            <div className="flex justify-center lg:hidden">
              <ul
                className={`flex space-x-6 text-sm pt-5 transition-colors duration-300 ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                <li>
                  <Link to="/" className="hover:text-yellow-400 transition-colors duration-100">
                    Beranda
                  </Link>
                </li>
                <li>
                  <Link to="/tentang" className="hover:text-yellow-400 transition-colors duration-100">
                    Tentang Kami
                  </Link>
                </li>
                <li>
                  <Link to="/kuliner" className="hover:text-yellow-400 transition-colors duration-100">
                    Kuliner
                  </Link>
                </li>
                <li>
                  <Link to="/kontak" className="hover:text-yellow-400 transition-colors duration-100">
                    Kontak
                  </Link>
                </li>
              </ul>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex justify-center">
              <ul
                className={`flex space-x-6 text-sm pt-5 transition-colors duration-300 ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                <li>
                  <Link to="/" className="hover:text-yellow-400 transition-colors duration-100">
                    Beranda
                  </Link>
                </li>
                <li>
                  <Link to="/tentang" className="hover:text-yellow-400 transition-colors duration-100">
                    Tentang Kami
                  </Link>
                </li>
                <li>
                  <Link to="/kuliner" className="hover:text-yellow-400 transition-colors duration-100">
                    Kuliner
                  </Link>
                </li>
                <li>
                  <Link to="/kontak" className="hover:text-yellow-400 transition-colors duration-100">
                    Kontak
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
