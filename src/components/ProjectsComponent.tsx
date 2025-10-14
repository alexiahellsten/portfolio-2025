import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import translations from "../translations/translations";

function ProjectsComponent() {
  const context = useContext(LanguageContext);

  if (!context) return null;
  const { language } = context;

  const projects = translations[language].projects;

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

  return (
    <section
      id="projects"
      className="min-h-screen px-4 py-28 bg-[#172025] text-white"
    >
      <h3 className="text-4xl font-bold mb-4 text-center">
        {projects.heading}
      </h3>
      <p className="text-center mb-16 text-lg">{projects.subheading}</p>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projectItems.map((project, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden bg-[#1f2a30] hover:scale-[1.02] transition-transform flex flex-col h-full"
          >
            <div className="relative group">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-52 object-cover"
              />
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h4 className="text-2xl font-semibold mb-2">{project.title}</h4>
              <p className="mb-4 text-md">{project.desc}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="markdown bg-white/10 text-xs px-2 py-1 rounded-full text-red-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex justify-between font-semibold">
                {project.github && (
                  <a
                    href={project.github}
                    className="text-red-200 hover:underline"
                  >
                    GitHub
                  </a>
                )}
                {project.demo && project.demo !== "#" && (
                  <a
                    href={project.demo}
                    className="text-red-200 hover:underline"
                  >
                    Demo
                  </a>
                )}
              </div>
              {project.videos && project.videos.length > 0 && (
                <p className="text-gray-400 text-sm">{project.videodemo}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsComponent;
