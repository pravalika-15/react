import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServiceSection from "./components/Service";
import FeaturedTours from "./components/Featured";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

config.autoAddCss = false;

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ServiceSection />
      <FeaturedTours />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
