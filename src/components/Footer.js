import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <a href="/">Home</a>
        <a href="#hero">About</a>
        <a href="#services">Services</a>
        <a href="#featured">Featured</a>
        <a href="#gallery">Gallery</a>
      </div>
      <div className="footer__social-icons">
        <a href="#">
          <FontAwesomeIcon icon={faFacebookF} className="footer__social-icon" />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faTwitter} className="footer__social-icon" />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faInstagram} className="footer__social-icon" />
        </a>
      </div>
      <div className="footer__copyright">
        copyright &copy; BackRoads Travel tours Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
