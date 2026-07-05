import { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { LanguageContext } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

function NotFound() {
  const context = useContext(LanguageContext);

  if (!context) {
    return null;
  }

  const { language } = context;
  const notFound = translations[language].notFound;

  return (
    <>
      <Navbar />
      <main className='min-h-screen flex items-center justify-center px-6 py-16 bg-brand-bg text-white text-center'>
        <div className='max-w-xl space-y-6'>
          <p className='text-sm uppercase tracking-[0.3em] text-accent-light'>
            {notFound.label}
          </p>
          <h1 className='text-4xl sm:text-5xl font-bold'>{notFound.heading}</h1>
          <p className='text-base sm:text-lg text-stone-300'>{notFound.text}</p>
          <Link
            to='/'
            className='inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold text-black bg-accent hover:bg-white transition-colors'
          >
            {notFound.button}
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default NotFound;
