import React from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { MenuItems } from "../code/MenuItemsUser";
import { FaBars } from "react-icons/fa";
import Logo from "./Logo.jsx";

import "../assets/styles/components/Navbar.scss";

const NavbarUser = ({ toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <nav className={"navbar-true"}>
      <div className="navbar__container">
        <div className="navbar__container--logo">
          <Logo dark={1} />
        </div>
        <div className="mobile-icon" onClick={toggle}>
          <FaBars />
        </div>
        <ul className="navbar-menu">
          {MenuItems.map((item, index) => {
            return (
              <li key={index} className="navbar-item">
                <Link className={`${item.cName}-true`} to={item.url}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavbarUser;
