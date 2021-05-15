import React from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "../code/MenuItemsUser";
import { FaTimes } from "react-icons/fa";
import "../assets/styles/components/Sidebar.scss";

const SidebarUser = ({ isOpen, toggle }) => {
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
              <Link
                className="sidebar-link"
                onClick={toggle}
                key={index}
                to={item.url}
              >
                {item.title}
              </Link>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};
export default SidebarUser;
