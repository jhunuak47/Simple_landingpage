import React from "react";
import "./Aboutus.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Three images */}
      <div className="images-container">
        <div className="image-item diagonal-image">
          <img
            src="\images\pexels-andres-ayrton-6578391.svg" // Replace with your image path
            alt="House Icon"
            className="about-image"
          />
        </div>
        <div className="image-item">
          <img
            src="\images\pexels-brett-sayles-2881232.svg" // Replace with your image path
            alt="Design Icon"
            className="about-image"
          />
        </div>
        <div className="image-item">
          <img
            src="\images\pexels-fauxels-3182834.svg" // Replace with your image path
            alt="Marketing Icon"
            className="about-image"
          />
        </div>
      </div>

      {/* About Us heading */}
      <h2 className="section-heading">About Us</h2>
      <div className="heading-underline"></div>

      {/* Paragraph content */}
      <p className="about-description">
        We are a leading provider of innovative solutions, specializing in
        real estate, design, and marketing. Our mission is to bring creativity
        and efficiency together to deliver the best services for our clients.
        With a dedicated team and a vision for success, we aim to create value
        and drive growth in every project we undertake.
      </p>
    </div>
  );
};

export default AboutUs;
