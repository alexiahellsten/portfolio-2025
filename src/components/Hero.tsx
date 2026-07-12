import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";
import { ButtonLink } from "./Button";

export default function Hero() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("LanguageContext not found");
  const { language } = context;

  const hero = translations[language].hero;

  return (
    <section
      className='relative flex min-h-[calc(100svh-4rem)] items-center justify-center px-4 py-16 text-brand-fg md:py-20'
      aria-labelledby='hero-title'
    >
      <div
        className='pointer-events-none absolute inset-0 overflow-hidden'
        aria-hidden='true'
      >
        <div className='absolute -top-40 left-1/4 h-150 w-150 rounded-full bg-[rgba(5,48,51,0.18)] blur-3xl' />
        <div className='absolute top-1/3 right-1/4 h-125 w-125 rounded-full bg-[rgba(11,74,79,0.12)] blur-3xl' />
      </div>

      <div className='relative mx-auto w-full max-w-6xl'>
        <div className='mx-auto max-w-4xl rounded-3xl border border-brand-border bg-brand-surface backdrop-blur-md px-5 py-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:px-10 sm:py-14'>
          <div className='flex flex-col items-center text-center'>
            <p className='section-label mb-4'>{hero.badge}</p>

            <h1
              id='hero-title'
              className='text-3xl font-bold leading-tight sm:text-4xl md:text-5xl'
            >
              {hero.title}
            </h1>

            <p className='mt-5 max-w-2xl text-base leading-relaxed text-brand-muted sm:text-lg md:text-xl'>
              {hero.subtitle}
            </p>

            <p className='mt-3 text-sm text-brand-muted'>{hero.location}</p>

            <p className='mt-4 flex items-center justify-center gap-2 text-sm font-medium text-brand-fg'>
              <span
                className='h-2 w-2 shrink-0 rounded-full bg-accent-cta'
                aria-hidden='true'
              />
              {hero.availability}
            </p>

            <ButtonLink to='/projects' className='mt-8'>
              {hero.button}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
