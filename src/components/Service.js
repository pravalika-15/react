import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faLaptopCode,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./styles/Hero.css";

const ServiceSection = () => {
  return (
    <section className="service-section" id="services">
      <h2 style={{ textAlign: "center", marginBottom: "3rem" }}>
        OUR <span style={{ color: "#3fd0d4" }}>SERVICES</span>
      </h2>
      <div className="service-container">
        <div className="service-card">
          <div className="service-icon">
            <FontAwesomeIcon icon={faCode} />
          </div>
          <h3 className="service-title">Web Development</h3>
          <p className="service-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
            felis enim. Sed sit amet massa.
          </p>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <FontAwesomeIcon icon={faLaptopCode} />
          </div>
          <h3 className="service-title">Software Development</h3>
          <p className="service-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
            felis enim. Sed sit amet massa.
          </p>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <FontAwesomeIcon icon={faMobileAlt} />
          </div>
          <h3 className="service-title">Mobile Development</h3>
          <p className="service-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
            felis enim. Sed sit amet massa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
