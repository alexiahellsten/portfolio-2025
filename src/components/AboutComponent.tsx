import { useContext } from "react"
import { LanguageContext } from "../contexts/LanguageContext" 
import { translations } from "../translations/translations";

function AboutComponent() {
  const context = useContext(LanguageContext);
  if (!context) {
    return null;
  }
  const { language } = context;

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-[#172025] text-white px-4 py-16"
    >
      <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        {translations[language].about.title}
      </h3>
      <p className="max-w-2xl mx-auto text-base md:text-lg text-left leading-relaxed whitespace-pre-line">
        {translations[language].about.text}
      </p>
      <a href="#Lia" className="text-red-300 mt-4">
        {translations[language].about.link}
      </a>
    </section>
  )
}

export default AboutComponent;