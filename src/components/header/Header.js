import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Logo from "../../assets/stockholm t ab.svg";

const Header = () => {
  // State to manage the collapse state of the navbar
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  // Function to toggle the collapse state of the navbar
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand brand" to="/">
          <img src={Logo} alt="Logo" className="logo" />
        </Link>
        {/* Toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon toggler-icon"></span>
        </button>
        {/* Close button (only appears when menu is open) */}
        {!isNavCollapsed && (
          <button
            className="close close-btn btn"
            type="button"
            aria-label="Close"
            onClick={handleNavCollapse}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        )}
        {/* Navbar links */}
        <div
          className={`${
            isNavCollapsed ? "collapse" : ""
          } navbar-collapse justify-content-center`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
