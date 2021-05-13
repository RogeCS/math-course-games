import React from "react";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { MenuItems } from "../code/MenuItems";
import { FaBars } from "react-icons/fa";
import Logo from "./Logo.jsx";

import "../assets/styles/components/Navbar.scss";

const Navbar = ({ toggle }) => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__container--logo">
          <Logo />
        </div>
        <div className="mobile-icon" onClick={toggle}>
          <FaBars />
        </div>
        <ul className="navbar-menu">
          {MenuItems.map((item, index) => {
            return (
              <li key={index} className="navbar-item">
                <LinkS className={item.cName} to={item.url}>
                  {item.title}
                </LinkS>
              </li>
            );
          })}
        </ul>
        <nav className="navbar-btn">
          <LinkR className="navbar-btn-link" to="/">
            Entrar
          </LinkR>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
