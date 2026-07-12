import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

type ServicesComponentProps = {
  asPage?: boolean;
};

function ServicesComponent({ asPage = false }: ServicesComponentProps) {
  const context = useContext(LanguageContext);
  if (!context) {
    return null;
  }
  const { language } = context;

  const services = translations[language].services;
  const TitleTag = asPage ? "h1" : "h2";

  return (
    <section
      id='strengths'
      className={`section ${asPage ? "section-centered" : ""}`}
      aria-labelledby='strengths-title'
    >
      <div className='section-inner section-stack'>
        <div className='section-prose'>
          <p className='section-label mb-3'>{services.label}</p>
          <TitleTag
            id='strengths-title'
            className='text-2xl font-bold sm:text-3xl md:text-4xl'
          >
            {services.title}
          </TitleTag>
          <p className='mt-4 text-base leading-relaxed text-brand-muted md:text-lg'>
            {services.contactText}
          </p>
        </div>

        <div className='grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3'>
          {services.cards.map(
            (card: { title: string; text: string }, index: number) => (
              <article
                key={card.title}
                className='flex h-full flex-col rounded-3xl border border-brand-border bg-brand-surface p-5 md:p-6'
              >
                <span className='text-xs font-semibold uppercase tracking-[0.28em] text-accent-primary'>
                  0{index + 1}
                </span>
                <h3 className='mt-4 text-lg font-semibold sm:text-xl md:mt-5'>
                  {card.title}
                </h3>
                <p className='mt-3 text-base leading-relaxed text-brand-muted md:mt-4'>
                  {card.text}
                </p>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

export default ServicesComponent;
