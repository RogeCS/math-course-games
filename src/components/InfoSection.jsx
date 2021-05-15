import React from "react";
import Button from "./Button.jsx";

import "../assets/styles/components/InfoSection.scss";

const InfoSection = ({
  id,
  bgColor,
  Text,
  TextDesc,
  topLine,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  startImg,
  url,
}) => {
  return (
    <div className={`info__container-${bgColor}`} id={id}>
      <div className="info-wrapper">
        <div className={`info-row${startImg}`}>
          <section className="column1">
            <div className="text-wrapper">
              <p className="top-line"> {topLine} </p>
              <h1 className={`info-heading-${Text}`}>{headline}</h1>
              <h2 className={`info-subtitle-${TextDesc}`}>{description}</h2>
              <div className="btn-wrap">
                <Button to={url} title={buttonLabel} type="light-button" />
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
