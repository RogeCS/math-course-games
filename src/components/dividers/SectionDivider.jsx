import React from "react";

import "../../assets/styles/components/dividers/SectionDivider.scss";

const SectionDivider = ({ heading }) => (
  <div className="right-linear-divider__container">
    <h1 className="right-linear-heading">{heading}</h1>
    <div className="right-linear-divider"></div>
  </div>
);

export default SectionDivider;
