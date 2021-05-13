import React from "react";
import HeroSection from "../components/HeroSection.jsx";
import InfoSection from "../components/InfoSection.jsx";
import { homeObjOne, homeObjTwo } from "../code/infoSectionData.js";

import "../assets/styles/containers/Home.scss";
const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
    </div>
  );
};

export default Home;
