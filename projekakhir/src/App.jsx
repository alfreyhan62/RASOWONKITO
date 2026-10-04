import { useEffect } from "react";
import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Product from "./Pages/Product";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

function PageRoutes() {
  const { pathname } = useLocation();

  return (
    <main key={pathname} className="page-transition">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kuliner" element={<Product />} />
        <Route path="/tentang" element={<About />} />
        <Route path="/kontak" element={<Contact />} />
      </Routes>
    </main>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <PageRoutes />
    </Router>
  );
}

export default App;
