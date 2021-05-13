import React from "react";
import Button from "./Button.jsx";

import "../assets/styles/components/InfoSection.scss";

const InfoSection = ({
  id,
  imgStart,
  topLine,
  headline,
  description,
  buttonLabel,
  img,
  alt,
}) => {
  return (
    <div className="info__container" id={id}>
      <div className="info-wrapper">
        <div className="info-row" imgstart={imgStart}>
          <section className="column1">
            <div className="text-wrapper">
              <p className="top-line"> {topLine} </p>
              <h1 className="info-heading">{headline}</h1>
              <h2 className="info-subtitle">{description}</h2>
              <div className="btn-wrap">
                <Button to="home" title={buttonLabel} type="light-button" />
              </div>
            </div>
          </section>
          <section className="column2">
            <div className="img-wrap">
              <img className="img" src={img} alt={alt} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
