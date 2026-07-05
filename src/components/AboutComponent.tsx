import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { LanguageContext } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

function AboutComponent() {
  const context = useContext(LanguageContext);
  if (!context) {
    return null;
  }
  const { language } = context;
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";

  const about = translations[language].about;

  return (
    <section
      id='about'
      className='min-h-screen flex flex-col items-center justify-center bg-brand-bg text-white px-4 py-16'
    >
      <h3 className='text-3xl md:text-4xl font-bold mb-8 text-center'>
        {about.title}
      </h3>
      <p className='max-w-2xl mx-auto text-base md:text-lg text-left leading-relaxed whitespace-pre-line'>
        {about.text}
      </p>
      {isAboutPage && (
        <Link to='/projects' className='text-accent-light mt-14'>
          {about.link}
        </Link>
      )}
    </section>
  );
}

export default AboutComponent;
