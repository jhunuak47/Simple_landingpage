import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/images/logo.svg" alt="Logo" />
      </div>
      <div className="menu">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#testimonials">Testimonial</a>
          </li>
          <li className="contact-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
