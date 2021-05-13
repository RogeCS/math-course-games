import React from "react";
import Navbar from "./navbar/Navbar.jsx";

import "../assets/styles/components/Header.scss";

const Header = () => (
  <div className="header">
    <div className="grid__container">
      <Navbar />
    </div>
  </div>
);
export default Header;
