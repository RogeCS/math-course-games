import React from "react";
import "../assets/styles/components/HeroSection.scss";

function HeroSection() {
  return (
    <div className="hero__container">
      <div className="hero-background"></div>
      <section className="hero-content">
        <h1 className="hero-title">Mates para todos</h1>
        <p className="hero-description">
          Mejora en temas de matemáticas realizando diferentes ejercicios
          mientras aprendes de manera interactiva
        </p>
      </section>
    </div>
  );
}

export default HeroSection;
