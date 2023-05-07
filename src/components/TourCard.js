import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const TourCard = ({ title, image, description, date }) => {
  return (
    <div className="card">
      <div className="date">{date}</div>
      <img src={image} alt={title} />
      <div className="tour-info">
        <h4>{title}</h4>
        <div className="underline"></div>
        <p>{description}</p>
        <div className="location">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <span>New York, USA</span>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
