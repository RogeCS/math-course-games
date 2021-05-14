import React from "react";
import Video from "../assets/videos/production ID_5198161.mp4";
import "../assets/styles/components/HeroSection.scss";
function HeroSection() {
  return (
    <div className="hero__container">
      <div className="hero-background">
        <video
          className="hero-vid"
          src={Video}
          autoPlay
          loop
          muted
          type="video/mp4"
        />
      </div>
      <section className="hero-content">
        <h1 className="hero-title">Intenta una nueva forma de aprender</h1>
        <p className="hero-description">
          Desarrolla un pensamiento lógico matemático de manera interactiva, no
          aprendas a resolver, aprende a razonar!
        </p>
      </section>
    </div>
  );
}

export default HeroSection;
