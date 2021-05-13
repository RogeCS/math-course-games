import React from "react";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { MenuItems } from "../code/MenuItems";
import { FaTimes } from "react-icons/fa";
import "../assets/styles/components/Sidebar.scss";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div className="sidebar">
      <div
        className={
          isOpen ? "sidebar__container--open" : "sidebar__container--closed"
        }
      >
        <div className="icon" onClick={toggle}>
          <FaTimes />
        </div>
        <section className="sidebar-wrapper">
          <ul className="sidebar-menu">
            {MenuItems.map((item, index) => (
              <LinkS
                className="sidebar-link"
                onClick={toggle}
                key={index}
                to={item.url}
              >
                {item.title}
              </LinkS>
            ))}
          </ul>
          <div className="sidebar-btn-wrap">
            <LinkR onClick={toggle} className="sidebar-route" to="/">
              Entrar
            </LinkR>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Sidebar;
