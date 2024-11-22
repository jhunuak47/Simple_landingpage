import React from "react";
import "./FeaturesSection.css";

const FeaturesSection = () => {
  const whyChooseUsItems = [
    {
      icon: "/images/home.svg", // Replace with your actual icon path
      title: "House",
      description: "We help you find the best homes suited to your needs.",
    },
    {
      icon: "/images/paintbrush-2.svg", // Replace with your actual icon path
      title: "Design",
      description: "Creative design solutions for modern living spaces.",
      hasArrow: true, // Add the arrow to this specific grid item
    },
    {
      icon: "/images/circle-dollar-sign.svg", // Replace with your actual icon path
      title: "Marketing",
      description: "Innovative strategies to market your property effectively.",
    },
  ];

  return (
    <div className="features-section">
      {/* Next Section */}
      <div className="next-section">
        <div className="text-content">
          <h2>Explore Endless Opportunities</h2>
          <p>
            Discover the best strategies to maximize your growth and take your business to the next level.
            Let us help you make a mark in the industry.
          </p>
        </div>
        <div className="image-content">
          <div className="circle large-circle">
            <img src="\images\Ellipse 11.svg" alt="Large Circle" />
          </div>
          <div className="circle medium-circle top">
            <img src="\images\Ellipse 12.svg" alt="Medium Circle 1" />
          </div>
          <div className="circle medium-circle bottom">
            <img src="\images\Ellipse 13.svg" alt="Medium Circle 2" />
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose-us">
        <h2 className="section-heading">Why Choose Us</h2>
        <div className="heading-underline"></div>
        <div className="grid-container">
          {whyChooseUsItems.map((item, index) => (
            <div className="grid-item" key={index}>
              <img src={item.icon} alt={item.title} className="icon" />
              <h3 className="item-title">{item.title}</h3>
              <p className="item-description">{item.description}</p>
              {item.hasArrow && (
                <img
                  src="/images/Subtract-1.svg"
                  alt="Arrow"
                  className="arrow-icon"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
