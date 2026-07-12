import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

type AboutComponentProps = {
  asPage?: boolean;
};

function AboutComponent({ asPage = false }: AboutComponentProps) {
  const context = useContext(LanguageContext);

  if (!context) {
    return null;
  }
  const { language } = context;
  const about = translations[language].about;
  const TitleTag = asPage ? "h1" : "h2";

  return (
    <section
      id='about'
      className={`section ${asPage ? "section-centered" : ""}`}
      aria-labelledby='about-title'
    >
      <div className='section-inner'>
        <p className='section-label mb-3'>{about.label}</p>
        <TitleTag
          id='about-title'
          className='text-2xl font-bold sm:text-3xl md:text-4xl'
        >
          {about.title}
        </TitleTag>

        <ul className='mt-6 space-y-3 text-base leading-relaxed text-brand-muted md:mt-8 md:space-y-4 md:text-lg'>
          {about.highlights.map((item: string) => (
            <li key={item} className='flex gap-3'>
              <span
                className='mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-primary'
                aria-hidden='true'
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className='mt-6 text-base leading-relaxed text-brand-muted md:mt-8 md:text-lg'>
          {about.aside}
        </p>
      </div>
    </section>
  );
}

export default AboutComponent;
