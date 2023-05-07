import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./styles/Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h1>
          Back{" "}
          <span className="roads" style={{ color: "#3fd0d4" }}>
            Roads
          </span>
        </h1>
      </div>
      <ul className="navbar__links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="navbar__social-icons">
        <a href="#">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <div className="navbar__hamburger">
        <FontAwesomeIcon icon={faBars} />
      </div>
    </nav>
  );
}

export default Navbar;
