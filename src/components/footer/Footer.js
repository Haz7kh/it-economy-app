import React from "react";
import Logo from "../../assets/stockholm t ab.svg";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Link className="navbar-brand brand" to="/">
              <img src={Logo} alt="Logo" />
            </Link>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              auctor eros nec neque varius, quis tincidunt ex pharetra.
            </p>
          </div>
          <div className="col-md-6">
            <h3>Contact Us</h3>
            <p>Address: folkparken, Haninge, 136 40</p>
            <p>Email: info@stockholmtab.com</p>
            <p>Phone: +46 12 345 678</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
