import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/AboutComponent";
import Projects from "../components/ProjectsComponent";
import TechGarden from "../components/TechGarden";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import PageTitle from "../components/PageTitle";

function Home() {
  return (
    <>
      <PageTitle page='home' />
      <Navbar />
      <main>
        <Reveal>
          <Hero />
        </Reveal>
        <Reveal>
          <Services />
        </Reveal>
        <Reveal>
          <Projects />
        </Reveal>
        <Reveal>
          <TechGarden />
        </Reveal>
        <Reveal>
          <About />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}

export default Home;
