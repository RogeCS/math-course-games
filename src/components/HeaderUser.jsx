import React, { useState } from "react";
import NavbarUser from "./NavbarUser.jsx";
import SidebarUser from "./SidebarUser.jsx";

import "../assets/styles/components/Header.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="header">
      <SidebarUser isOpen={isOpen} toggle={toggle} />
      <NavbarUser toggle={toggle} />
    </div>
  );
};
export default Header;
