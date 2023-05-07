import "./styles//Hero.css";
import backgroundImage from "../images/pexels-gordon-plant-14744796.jpg";

function Hero() {
  return (
    <div
      id="hero"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
      }}
    >
      <div className="para">
        <p style={{ fontSize: "4rem" }}>CONTINUE EXPLORING</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam,
        </p>
        <div
          className=""
          style={{
            textAlign: "center",
          }}
        >
          <button>Explore Tours</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
