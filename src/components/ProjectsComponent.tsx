function Projects() {

  // TODO: Ersätt placeholder med riktiga bilder
  const projects = [
    {
      title: "Airbnb Clone",
      desc: "A school project where we made a clone of Airbnb using Angular, Express and SQLite.",
      img: "https://placehold.co/600x400.png",
      github: "https://github.com/alexiahellsten/airbnb-clone",
      demo: "#",
      tech: ["Angular", "Express", "SQLite"],
    },
    {
      title: "Freaky Fashion",
      desc: "A full-stack e-commerce store built with React, Tailwind, Express and SQLite.",
      img: "https://placehold.co/600x400.png",
      github: "https://github.com/alexiahellsten/freakyfashion-react",
      demo: "#",
      tech: ["React", "Tailwind", "Express", "SQLite"],
    },
    {
      title: "Portfolio Website",
      desc: "My personal portfolio built with React and Tailwind.",
      img: "https://placehold.co/600x400.png",
      github: "https://github.com/alexiahellsten/portfolio-2025",
      demo: "#",
      tech: ["React", "Tailwind", "Vite"],
    },
  ]

  return (
    <section id="projects" className="min-h-screen px-4 py-28 bg-[#172025] text-white">
      <h3 className="text-4xl font-bold mb-4 text-center">My Projects</h3>
      <p className="text-center mb-16 text-lg">
        These are some projects I've been working on recently
      </p>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
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
                {project.tech.map((tech, index) => (
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

export default Projects;