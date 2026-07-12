import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

type ProjectsComponentProps = {
  asPage?: boolean;
};

function ProjectsComponent({ asPage = false }: ProjectsComponentProps) {
  const context = useContext(LanguageContext);

  if (!context) return null;
  const { language } = context;

  const projects = translations[language].projects;

  const chipClass =
    "inline-flex items-center rounded-full border border-brand-border bg-brand-surface-alt px-3 py-1.5 text-xs font-medium text-brand-muted transition-colors duration-200 hover:border-accent-primary/40 hover:text-brand-fg";

  const projectItems = [
    {
      ...projects.items[0],
      img: "images/portfolio.png",
      github: "https://github.com/alexiahellsten/portfolio-2025",
      demo: "https://alexiahellsten.vercel.app",
      tech: ["React", "TypeScript", "Tailwind", "Vite"],
    },
    {
      ...projects.items[1],
      img: "images/freakyfashion.png",
      github: "https://github.com/alexiahellsten/freakyfashion-react",
      demo: "https://freakyfashion-react.vercel.app",
      tech: [
        "React",
        "JavaScript",
        "Tailwind",
        "Express",
        "SQLite",
        "Vite",
        "Node.js",
      ],
    },
    {
      ...projects.items[2],
      img: "images/airbnb-clone.png",
      github: "https://github.com/alexiahellsten/airbnb-clone",
      demo: "#",
      videos: [
        "https://github.com/user-attachments/assets/063ab090-65fe-4fdd-a776-d61a809dcae8",
        "https://github.com/user-attachments/assets/943537a4-9b43-4cba-8b39-59ecb505dd7e",
        "https://github.com/user-attachments/assets/5ff6e9df-9ffa-4adf-b9e6-620203fc72eb",
      ],
      tech: ["Angular", "TypeScript", "Express", "SQLite", "Node.js"],
    },
  ];

  const TitleTag = asPage ? "h1" : "h2";

  return (
    <section
      id='projects'
      className={`section ${asPage ? "section-centered" : ""}`}
      aria-labelledby='projects-title'
    >
      <div className='section-inner section-stack'>
        <div className='section-prose'>
          <p className='section-label mb-3'>{projects.label}</p>
          <TitleTag
            id='projects-title'
            className='text-2xl font-bold sm:text-3xl md:text-4xl'
          >
            {projects.heading}
          </TitleTag>
          <p className='mt-4 text-base leading-relaxed text-brand-muted sm:text-lg'>
            {projects.subheading}
          </p>
        </div>

        <div className='grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3'>
          {projectItems.map((project) => (
            <div
              key={project.title}
              className='group flex h-full flex-col overflow-hidden rounded-3xl border border-brand-border bg-brand-surface'
            >
              <div className='relative aspect-16/10 w-full overflow-hidden'>
                <img
                  src={project.img}
                  alt={project.imageAlt}
                  loading='lazy'
                  className='h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105'
                />
              </div>

              <div className='flex flex-1 flex-col p-5 md:p-6'>
                <h3 className='text-xl font-semibold sm:text-2xl'>
                  {project.title}
                </h3>
                <p className='mt-3 text-base leading-relaxed text-brand-muted md:mt-4'>
                  {project.desc}
                </p>

                <div className='mt-6 flex flex-wrap gap-2 md:mt-8'>
                  {project.tech.map((tech: string, techIndex: number) => (
                    <span key={techIndex} className={chipClass}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className='mt-8 flex items-center justify-between gap-4 border-t border-brand-border pt-5 font-semibold md:mt-10'>
                  {project.github && (
                    <a
                      href={project.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label={projects.githubAria(project.title)}
                      className='inline-flex items-center gap-2 text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-surface rounded-sm'
                    >
                      {project.GithubText}
                    </a>
                  )}
                  {project.demo && project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label={projects.demoAria(project.title)}
                      className='inline-flex items-center gap-2 text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-surface rounded-sm'
                    >
                      {project.demoText}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsComponent;
