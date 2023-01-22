import React, { useState } from "react";
import Menu from "../Menu/Menu";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="navbar">
        <div className="navbar-brand">VIC</div>
        <div className="navbar-menu">
          <Menu action={handleToggle}/>
        </div>
        <div className="navbar-hamburger" onClick={handleToggle}>
          <div className={`navbar-hamburger-line ${isOpen ? "open" : ""}`} />
          <div className={`navbar-hamburger-line ${isOpen ? "open" : ""}`} />
          <div className={`navbar-hamburger-line ${isOpen ? "open" : ""}`} />
        </div>
      </div>
      <div className={`navbar-side-drawer ${isOpen ? "open" : ""}`}>
        <button className="navbar-side-drawer-close" onClick={handleToggle}>X</button>
        <Menu action={handleToggle}/>
      </div>
    </nav>
  );
};

export default Navbar;
