import React from "react";
import "./styles/Gallery.css";
const Gallery = () => {
  return (
    <section id="gallery">
      <h2 style={{ textAlign: "center" }}>
        OUR <span style={{ color: "#3fd0d4" }}>GALLERY</span>
      </h2>
      <section className="gallery">
        <div className="gallery-item">
          <img
            src="https://images.pexels.com/photos/12488389/pexels-photo-12488389.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            alt="img"
          />
        </div>
        <div className="gallery-item">
          <img
            src="https://images.pexels.com/photos/14348172/pexels-photo-14348172.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            alt="Img"
          />
        </div>
        <div className="gallery-item">
          <img
            src="https://images.pexels.com/photos/16401186/pexels-photo-16401186.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            alt="Img"
          />
        </div>
        <div className="gallery-item">
          <img
            src="https://images.pexels.com/photos/13118843/pexels-photo-13118843.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            alt="Img"
          />
        </div>
        <div className="gallery-item">
          <img
            src="https://images.pexels.com/photos/14963651/pexels-photo-14963651.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            alt="Img"
          />
        </div>
        {/* <div className="gallery-item">
        <img
          src="https://images.pexels.com/photos/14430268/pexels-photo-14430268.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
          alt="Img"
        />
      </div> */}
      </section>
    </section>
  );
};

export default Gallery;
