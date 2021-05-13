import React from "react";
import { Link } from "react-router-dom";

import "../assets/styles/components/Button.scss";

const Button = ({ title, type, to }) => (
  <Link to={to} className={type}>
    {title}
  </Link>
);

export default Button;
