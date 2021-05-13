import React from "react";
import { Link } from "react-router-dom";

import "../assets/styles/components/Logo.scss";
import LogoIcon from "../assets/static/logo-icon-math.png";

const Logo = () => (
  <div className="logo">
    <Link to="/" className="logo__container">
      <img src={LogoIcon} />
      <h1>Math</h1>
    </Link>
  </div>
);
export default Logo;
