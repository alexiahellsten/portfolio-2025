import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

function ServicesComponent() {
  const context = useContext(LanguageContext);
  if (!context) {
    return null;
  }
  const { language } = context;

  const services = translations[language].services;

  return (
    <section
      id='services'
      className='min-h-screen flex flex-col items-center justify-center bg-brand-bg text-white px-4 py-16'
    >
      <div className='mb-8 max-w-2xl text-center'>
        <h3 className='text-3xl md:text-4xl font-bold mb-8 text-center'>
          {services.title}
        </h3>
        <p className='text-small'>{services.missingService}</p>
        <p>{services.contactText}</p>
      </div>
      <article className='flex flex-col md:flex-row gap-10 mb-12 text-lg md:text-xl text-center'>
        {services.cards.map((card: { title: string; text: string }) => (
          <div
            key={card.title}
            className='flex flex-1 flex-col max-w-sm mx-auto bg-brand-surface p-6 rounded-lg justify-center align-center'
          >
            <h4 className='font-semibold'>{card.title}</h4>
            <p className='text-base md:text-lg leading-relaxed whitespace-pre-line'>
              {card.text}
            </p>
          </div>
        ))}
      </article>
    </section>
  );
}

export default ServicesComponent;
