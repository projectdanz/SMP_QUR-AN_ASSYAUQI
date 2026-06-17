import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

import Navbar from "./component/navbar";
import Home from "./Home";
import About from "./page/about";
import Contact from "./page/contact";
import Documentation from "./page/Documentation";
import DocumentationDetail from "./page/DocumentationDetail";

function AppContent() {
  const [showScroll, setShowScroll] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
    { href: "/documentation", label: "News Agenda" },
  ];

  useEffect(() => {
    const titles = {
      "/": "Home - SMP Qur'an Assyauqi Boarding School",
      "/about": "Tentang Kami - SMP Qur'an Assyauqi Boarding School",
      "/contact": "Kontak Kami - SMP Qur'an Assyauqi Boarding School",
      "/documentation":
        "Dokumentasi & Berita - SMP Qur'an Assyauqi Boarding School",
    };

    const currentPath = location.pathname;
    if (currentPath.startsWith("/documentation/")) {
      document.title =
        "Detail Dokumentasi - SMP Qur'an Assyauqi Boarding School";
    } else {
      document.title =
        titles[currentPath] || "SMP Qur'an Assyauqi Boarding School";
    }
  }, [location.pathname]);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar links={navLinks} className="justify-center" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/documentation/:id" element={<DocumentationDetail />} />
      </Routes>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showScroll &&
          (location.pathname === "/about" ||
            location.pathname === "/contact") && (
            <Motion.button
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollTop}
              className="fixed bottom-24 right-6 z-50 p-4 bg-amber-500 text-white rounded-full shadow-2xl hover:bg-amber-600 transition-colors"
              aria-label="Back to Top"
            >
              <FaArrowUp size={20} />
            </Motion.button>
          )}
      </AnimatePresence>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
