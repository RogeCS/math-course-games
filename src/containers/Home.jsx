import React from "react";
import ScrollToTop from "../code/scrollToTop";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import HeroSection from "../components/HeroSection.jsx";
import InfoSection from "../components/InfoSection.jsx";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../code/infoSectionData.js";

import "../assets/styles/containers/Home.scss";
const Home = () => {
  ScrollToTop();
  return (
    <>
      <Header />
      <div className="home">
        <HeroSection />
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />
        <InfoSection {...homeObjThree} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
