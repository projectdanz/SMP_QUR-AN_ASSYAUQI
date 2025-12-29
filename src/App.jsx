import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

import Navbar from "./component/navbar";
import Home from "./Home";
import About from "./page/about";
import Contact from "./page/contact";

function App() {
  const [showScroll, setShowScroll] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ];

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
    <Router>
      <Navbar links={navLinks} className="justify-center" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showScroll &&
          (window.location.pathname === "/about" ||
            window.location.pathname === "/contact") && (
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
    </Router>
  );
}

export default App;
