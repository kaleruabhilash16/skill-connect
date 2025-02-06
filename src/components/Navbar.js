import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const scrollToHowItWorks = () => {
    document
      .getElementById("how-it-works")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="logo">VIT-AP SkillConnect</div>
      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <button onClick={scrollToHowItWorks} className="nav-button">
            How It Works
          </button>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#forum">Forum</a>
        </li>
        <li className="user-icon">👤</li>
      </ul>
    </nav>
  );
};

export default Navbar;
