import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">VIT-AP SkillConnect</div>
      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#search">Search</a>
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
