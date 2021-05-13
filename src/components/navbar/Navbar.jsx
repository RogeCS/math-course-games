import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import Logo from "../Logo.jsx";

import "../../assets/styles/components/navbar/navbar.scss";

const Navbar = () => {
  const [state, setState] = useState(true);
  const handleClick = () => {
    return setState(!state);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Logo className="navbar-logo" />
      </div>
      <div className="menu-icon" onClick={handleClick}>
        <i className={state ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={state ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
