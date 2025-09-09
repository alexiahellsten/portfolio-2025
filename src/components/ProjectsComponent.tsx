import { useContext } from "react"
import { LanguageContext } from "../contexts/LanguageContext"
import translations from "../translations/translations"

function ProjectsComponent() {

  const context = useContext(LanguageContext);
    if (!context) {
      return null;
    }
    const { language } = context;
  
   const projects = translations[language].projects

  // TODO: Ersätt placeholder med riktiga bilder
  const projectItems = [
    {
      ...projects.items[0],
      img: "https://placehold.co/600x400.png",
      github: "https://github.com/alexiahellsten/airbnb-clone",
      demo: "#",
      tech: ["Angular", "TypeScript", "Express", "SQLite", "Node.js"],
    },
    {
      ...projects.items[1],
      img: "https://placehold.co/600x400.png",
      github: "https://github.com/alexiahellsten/freakyfashion-react",
      demo: "#",
      tech: ["React", "JavaScript", "Tailwind", "Express", "SQLite", "Vite", "Node.js"],
    },
    {
      ...projects.items[2],
      img: "https://placehold.co/600x400.png",
      github: "https://github.com/alexiahellsten/portfolio-2025",
      demo: "#",
      tech: ["React", "TypeScript","Tailwind", "Vite"],
    },
  ]

  return (
    <section id="projects" className="min-h-screen px-4 py-28 bg-[#172025] text-white">
      <h3 className="text-4xl font-bold mb-4 text-center">{projects.heading}</h3>
      <p className="text-center mb-16 text-lg">
        {projects.subheading}
      </p>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projectItems.map((project, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden bg-[#1f2a30] hover:scale-[1.02] transition-transform"
          >
            <div className="relative group">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-52 object-cover"
              />
            </div>

            {/* TODO: Lägg till länkar till Github och demo? */}
            <div className="p-6">
              <h4 className="text-2xl font-semibold mb-2">{project.title}</h4>
              <p className="mb-4 text-md">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="markdown bg-white/10 text-xs px-2 py-1 rounded-full text-red-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectsComponent;