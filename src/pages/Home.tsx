import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/AboutComponent";
import Footer from "../components/Footer";
import TechGarden from "../components/TechGarden";
import Services from "../components/Services";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <TechGarden />
      <Footer />
    </>
  );
}

export default Home;
