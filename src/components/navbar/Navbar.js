import React, { useState } from "react";
import Logo from "../../assets/stockholm t ab.svg";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav>
      <a href="/">
        <img src={Logo} alt="logo" className="logo" />
      </a>
      <div>
        <ul id="navbar" className={isOpen ? "#navbar active" : "navbar"}>
          <li>
            <a href="/" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="/about">About US </a>
          </li>
          <li>
            <a href="/blog">Blog </a>
          </li>
          <li>
            <a href="/contact">Contact </a>
          </li>
        </ul>
      </div>
      <div id="mobile" onClick={toggleMenu}>
        <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </nav>
  );
};

export default Navbar;
