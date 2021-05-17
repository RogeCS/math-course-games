import React from "react";
import ScrollToTop from "../code/scrollToTop";
import Header from "../components/Header.jsx";
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
    <div className="home">
      <Header />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
    </div>
  );
};

export default Home;
