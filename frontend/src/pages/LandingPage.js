import React from "react";
import AboutUs from "./Aboutus";
import Banner from "./Banner";
import FeaturesSection from "./FeaturesSection";
import HappyClients from "./HappyClients";
import Header from "./Header";
import Newsletter from "./Newsletter";
import OurProjects from "./OurProjects";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <Banner />
      <FeaturesSection />
      <AboutUs />
      <OurProjects />
      <HappyClients />
      <Newsletter />
    </div>
  );
};

export default LandingPage;
