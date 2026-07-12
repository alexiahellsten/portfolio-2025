import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";
import { ButtonLink } from "../components/Button";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";
import Reveal from "../components/Reveal";

function NotFound() {
  const context = useContext(LanguageContext);

  if (!context) {
    return null;
  }

  const { language } = context;
  const notFound = translations[language].notFound;

  return (
    <>
      <PageTitle page='notFound' />
      <Navbar />
      <Reveal>
        <main className='min-h-screen flex items-center justify-center bg-brand-bg px-6 py-16 text-center text-brand-fg'>
          <div className='max-w-xl space-y-6'>
            <p className='text-sm uppercase tracking-[0.3em] text-accent-primary'>
              {notFound.label}
            </p>
            <h1 className='text-4xl sm:text-5xl font-bold'>
              {notFound.heading}
            </h1>
            <p className='text-base sm:text-lg text-brand-muted'>
              {notFound.text}
            </p>
            <ButtonLink to='/'>{notFound.button}</ButtonLink>
          </div>
        </main>
      </Reveal>
      <Footer />
    </>
  );
}

export default NotFound;
