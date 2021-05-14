import React from "react";
import { Link } from "react-router-dom";

import "../assets/styles/components/Logo.scss";
import LogoIcon from "../assets/static/logo-icon-math.png";
import LogoIconLight from "../assets/static/logo-icon-math-light.png";

const Logo = ({ dark }) => (
  <div className="logo">
    <Link to="/" className={`logo__container${dark}`}>
      <img src={dark ? LogoIcon : LogoIconLight} />
      <h1>Math</h1>
    </Link>
  </div>
);
export default Logo;
