import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock the page when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT", href: "#about" },
    { name: "SERVICES", href: "#services" },
    { name: "WORK", href: "#work" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          THE <span>NOISE</span> CLUB.
        </a>

        {/* Desktop Navigation */}
        <div className="navbar-links">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="navbar-link">
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="navbar-cta-wrapper">
          <a href="#contact" className="navbar-cta">
            LET'S TALK
            <ArrowUpRight className="navbar-cta-icon" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="mobile-menu-button"
          aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className="menu-icon" />
          ) : (
            <Menu className="menu-icon" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mobile-menu"
          >
            <div className="mobile-menu-links">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="mobile-menu-link"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-project-button"
            >
              START A PROJECT
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;