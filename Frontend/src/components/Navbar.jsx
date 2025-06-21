import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolling ? "scrolling" : ""}`}>
      <div className="container">
        <button onClick={toggleMenu} className="menu-button">
          {isOpen ? <FiX className="close-icon" /> : <FiMenu color="#4CAF50" />}
        </button>

        <div className="logo">
          <img src="/logo.png" alt="CropWise Logo" />
          <span className="logo-text">CropWise</span>
        </div>

        <ul className={`nav-links ${scrolling ? "scrolling-text" : ""}`}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about-us">About Us</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      {isOpen && <div className="overlay show" onClick={toggleMenu}></div>}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <ul className="mobile-nav-links">
          <li>
            <a href="#home" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about-us" onClick={toggleMenu}>
              About Us
            </a>
          </li>
          <li>
            <a href="#services" onClick={toggleMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
