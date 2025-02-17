import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="skillconnect-footer">
      {/* 🔹 Left Section */}
      <div className="skillconnect-footer-left">
        <h2>SkillConnect</h2>
        <p>Connecting students, fostering collaboration</p>
      </div>

      {/* 🔗 Features */}
      <div className="skillconnect-footer-links">
        <h3>Features</h3>
        <ul>
          <li>Profile Creation</li>
          <li>AI Chat Assistant</li>
          <li>Team Formation</li>
          <li>Discussion Forum</li>
        </ul>
      </div>

      {/* 🔗 Resources */}
      <div className="skillconnect-footer-links">
        <h3>Resources</h3>
        <ul>
          <li>Documentation</li>
          <li>API Reference</li>
          <li>Support</li>
          <li>Community</li>
        </ul>
      </div>

      {/* 🔗 About */}
      <div className="skillconnect-footer-links">
        <h3>About</h3>
        <ul>
          <li>Our Mission</li>
          <li>Blog</li>
          <li>Careers</li>
          <li>Press</li>
        </ul>
      </div>

      {/* 🔗 Legal */}
      <div className="skillconnect-footer-links">
        <h3>Legal</h3>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
          <li>Cookie Policy</li>
        </ul>
      </div>

      {/* 🌍 Social Media */}
      <div className="skillconnect-footer-social">
        <h3>Connect</h3>
        <div className="skillconnect-social-icons">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
