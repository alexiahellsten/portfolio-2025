import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

export default function TechGarden() {
  const context = useContext(LanguageContext);
  if (!context) {
    return null;
  }

  const { language } = context;
  const techgarden = translations[language].techgarden;

  const skillGroups = techgarden.groups;

  const chipClass =
    "inline-flex items-center rounded-full border border-brand-border bg-transparent px-3 py-1.5 text-sm font-medium text-brand-muted transition-colors duration-200 hover:border-accent-primary/40 hover:text-brand-fg";

  return (
    <section
      id='tech-garden'
      className='section'
      aria-labelledby='tech-garden-title'
    >
      <div className='section-inner section-stack'>
        <div className='section-prose'>
          <p className='section-label mb-3'>{techgarden.label}</p>
          <h2
            id='tech-garden-title'
            className='text-2xl font-bold sm:text-3xl md:text-4xl'
          >
            {techgarden.heading}
          </h2>
          <p className='mt-4 text-base leading-relaxed text-brand-muted sm:text-lg'>
            {techgarden.intro}
          </p>
        </div>

        <div className='grid gap-4 sm:grid-cols-2 md:gap-6'>
          {skillGroups.map((group: { title: string; items: string[] }) => (
            <article
              key={group.title}
              className='flex h-full flex-col rounded-3xl border border-brand-border bg-brand-surface p-5 md:p-6'
            >
              <h3 className='text-sm font-semibold uppercase tracking-[0.18em] text-accent-primary'>
                {group.title}
              </h3>
              <div className='mt-4 flex flex-wrap gap-2 md:mt-5'>
                {group.items.map((item: string) => (
                  <span key={item} className={chipClass}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
