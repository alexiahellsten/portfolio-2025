import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../components/AboutComponent";
import Reveal from "../components/Reveal";
import PageTitle from "../components/PageTitle";

function AboutPage() {
  return (
    <>
      <PageTitle page='about' />
      <Navbar />
      <main>
        <Reveal>
          <About asPage />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
export default AboutPage;
