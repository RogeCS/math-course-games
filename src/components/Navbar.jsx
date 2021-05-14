import React, { useState, useEffect } from "react";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { MenuItems } from "../code/MenuItems";
import { animateScroll as scroll } from "react-scroll";
import { IconContext } from "react-icons/lib";
import { FaBars } from "react-icons/fa";
import Logo from "./Logo.jsx";

import "../assets/styles/components/Navbar.scss";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    return () => {
      setScrollNav({}); // This worked for me
    };
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <IconContext.Provider value={scrollNav ? {} : { color: "#fff" }}>
      <nav className={scrollNav ? "navbar-true" : "navbar-false"}>
        <div className="navbar__container">
          <div className="navbar__container--logo" onClick={toggleHome}>
            <Logo dark={scrollNav ? 1 : 0} />
          </div>
          <div className="mobile-icon" onClick={toggle}>
            <FaBars />
          </div>
          <ul className="navbar-menu">
            {MenuItems.map((item, index) => {
              return (
                <li key={index} className="navbar-item">
                  <LinkS
                    className={`${item.cName}-${scrollNav}`}
                    to={item.url}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    activeClass="active"
                  >
                    {item.title}
                  </LinkS>
                </li>
              );
            })}
          </ul>
          <nav className="navbar-btn">
            <LinkR
              className={scrollNav ? "navbar-btn-link1" : "navbar-btn-link0"}
              to="/courses"
            >
              Entrar
            </LinkR>
          </nav>
        </div>
      </nav>
    </IconContext.Provider>
  );
};

export default Navbar;
