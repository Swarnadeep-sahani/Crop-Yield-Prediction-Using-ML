import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="/logo.png" alt="CropWise Logo" />
          <div className="text-container">
            <span className="logo-text">CropWise</span>
            <p>Empowering farmers with technology for a sustainable future.</p>
            <p>
              Contact us: <u>info@cropwise.com</u>
            </p>
            <p>
              Customer Support: <u>+1-800-123-4567</u>
            </p>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#vision">Vision</a>
            </li>
            <li>
              <a href="#mission">Mission</a>
            </li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} SmartFarm. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
