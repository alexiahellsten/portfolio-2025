import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactComponent from "../components/ContactComponent";
import Reveal from "../components/Reveal";
import PageTitle from "../components/PageTitle";

function ContactPage() {
  return (
    <>
      <PageTitle page='contact' />
      <Navbar />
      <main>
        <Reveal>
          <ContactComponent />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
export default ContactPage;
