import React from "react";
import "../assets/styles/components/HeroSection.scss";

function HeroSection() {
  return (
    <div className="hero__container">
      <div className="hero-background"></div>
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
