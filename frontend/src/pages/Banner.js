import axios from "axios";
import React, { useState } from "react";
import "./Banner.css";

const Banner = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    areaCity: "", // Ensure this matches the backend field name
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Save contact form data
      const contactResponse = await axios.post("https://flipr-backend.herokuapp.com/api/contacts", formData);
      console.log("Saved contact:", contactResponse.data);

      // Submit to the newsletter subscription API
      const subscribeResponse = await axios.post("https://flipr-backend.herokuapp.com/api/subscribers", {
        email: formData.email,
      });
      console.log("Newsletter subscription:", subscribeResponse.data);

      alert("Form submitted successfully!");
      setFormData({ fullName: "", email: "", mobile: "", areaCity: "" }); // Reset form
    } catch (err) {
      alert("Failed to submit form. Please try again.");
      console.error(err);
    }
  };

  const backgroundImageStyle = {
    backgroundImage: `url(/images/young-couple-blueprints.svg)`, // Updated path
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "50px",
    color: "white",
  };

  return (
    <div className="banner" style={backgroundImageStyle}>
      {/* Left Side Text */}
      <div className="banner-text">
        <h1>Your Journey to Success Starts Here!</h1>
        <p>
          Counseling, Designing, Marketing – All in one place.
          Let us guide you to achieve your goals with our expertise.
        </p>
      </div>

      {/* Contact Form on Right Side */}
      <div className="contact-form-container">
        <h3>Get a Free Consultation</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile No"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="areaCity"  // Ensure this matches the backend field name
            placeholder="Area City"
            value={formData.areaCity}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Banner;
