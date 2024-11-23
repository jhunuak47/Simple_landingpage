import axios from "axios";
import React, { useState } from "react";
import "./Newsletter.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  // Handle email input change
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://flipr-backend.herokuapp.com/api/subscribers", { email }) // Make sure this matches your backend API
      .then((response) => {
        alert("Subscribed successfully!");
        setEmail(""); // Clear the input field
      })
      .catch((error) => {
        alert("Error subscribing. Please try again.");
        console.error(error);
      });
  };

  // Inline style for background image
  const backgroundImageStyle = {
    backgroundImage: `url(/images/Rectangle.svg)`, // Replace with the correct path
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textAlign: "center",
    flexDirection: "column",
  };

  return (
    <div className="newsletter-section">
      {/* Background Image inline styling */}
      <div className="newsletter-background" style={backgroundImageStyle}>
        <div className="newsletter-text">
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter and never miss an update!</p>
        </div>
        {/* Subscription Form */}
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-menu">
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Testimonial</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-subscribe">
          <input type="email" placeholder="Subscribe to our newsletter" />
          <button>Subscribe</button>
        </div>
      </footer>

      <div className="footer-bottom">
        <div className="footer-left">
          <p>Phone: 8210534119</p>
        </div>
        <div className="footer-center">
          <img src="/images/logo.svg" alt="Logo" className="footer-logo" />
        </div>
        <div className="footer-right">
          <div className="social-icons">
            <img src="/images/Group-1.svg" alt="Twitter" className="social-icon" />
            <img src="/images/Frame.svg" alt="Facebook" className="social-icon" />
            <img src="/images/Group.svg" alt="Instagram" className="social-icon" />
            <img src="/images/linkedin.svg" alt="LinkedIn" className="social-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
