import React from "react";
import TourCard from "./TourCard";
import tour1 from "../images/pexels-gordon-plant-14744194.jpg";
import tour2 from "../images/pexels-gordon-plant-14744643.jpg";
import tour3 from "../images/pexels-gordon-plant-14744772.jpg";
import tour4 from "../images/pexels-ì¤ì­-ì¤-10422410.jpg";
import "./styles/TourCard.css";

const FeaturedTours = () => {
  const toursData = [
    {
      title: "Tour 1",
      image: tour1,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "Jan 01, 2023",
    },
    {
      title: "Tour 2",
      image: tour2,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "Feb 01, 2023",
    },
    {
      title: "Tour 3",
      image: tour3,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "Mar 01, 2023",
    },
    {
      title: "Tour 4",
      image: tour4,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "Apr 01, 2023",
    },
    {
      title: "Tour 5",
      image: tour3,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "Mar 01, 2022",
    },
    {
      title: "Tour 6",
      image: tour4,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "Apr 01, 2022",
    },
  ];

  return (
    <section className="featured-tours" id="featured">
      <h2>
        FEATURED <span style={{ color: "#3fd0d4" }}>TOURS</span>
      </h2>
      <div className="tours-container">
        {toursData.map((tour, index) => (
          <TourCard
            key={index}
            title={tour.title}
            image={tour.image}
            description={tour.description}
            date={tour.date}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedTours;
