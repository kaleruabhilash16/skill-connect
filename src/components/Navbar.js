import { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../assets/images/logo.png"; // Adjust path

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* 📌 Left Div: Logo */}
        <div className="navbar-logo-container">
          <img
            src={logo}
            alt="VIT-AP SkillConnect Logo"
            className="logo-image"
          />
        </div>

        {/* 📍 Right Div: Nav Links */}
        <div className="navbar-links-container">
          <div className="nav-links">
            <a href="/" className="nav-link">
              Home
            </a>
            <a href="/how-it-works" className="nav-link">
              How It Works
            </a>
            <a href="/faq" className="nav-link">
              FAQs
            </a>
            <a href="/about" className="nav-link">
              About Us
            </a>
            <div className="all-btn">
              <button className="login-btn">Login</button>
              <button className="signup-btn">Sign up</button>
            </div>
          </div>

          {/* 📱 Mobile Menu Button */}
          <button
            className="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* 📲 Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
        <div className="mobile-nav-links">
          <a href="/" className="nav-link">
            Home
          </a>
          <a href="/how-it-works" className="nav-link">
            How It Works
          </a>
          <a href="/faq" className="nav-link">
            FAQs
          </a>
          <a href="/about" className="nav-link">
            About Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
