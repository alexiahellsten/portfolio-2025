import Pill from "./Pill";

export default function TechGarden() {
  return (
    <section className="max-w-4xl mx-auto p-20 my-16">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">🌼 My Ever-Growing Tech Garden</h2>

      <div className="text-base md:text-lg text-left leading-relaxed">
        <h3 className="font-semibold mt-8">Languages & Styling Frameworks:</h3>
        <p className="py-4">🌾 <Pill>JavaScript</Pill> <Pill>TypeScript</Pill> <Pill>HTML</Pill> <Pill>CSS</Pill> <Pill>Sass</Pill> <Pill>Tailwind</Pill> <Pill>Bulma</Pill></p>

        <h3 className="font-semibold mt-4">Front-End Libraries and Frameworks:</h3>
        <p className="py-4">🌻 <Pill>React</Pill> <Pill>Angular</Pill></p>

        <h3 className="font-semibold mt-4">Back-End & Databases:</h3>
        <p className="py-4">🌲 <Pill>Node.js</Pill> <Pill>Express</Pill> <Pill>MongoDB</Pill> <Pill>Mongoose</Pill> <Pill>SQLite</Pill></p>

        <h3 className="font-semibold mt-4">Dev Tools & Testing:</h3>
        <p className="py-4">🐞 <Pill>Git</Pill> <Pill>Cypress</Pill> <Pill>Postman</Pill> <Pill>Figma</Pill></p>

        <h3 className="font-semibold mt-4">Templating & Static Sites:</h3>
        <p className="py-4">🍃 <Pill>11ty</Pill> <Pill>Handlebars</Pill> <Pill>Nunjucks</Pill> <Pill>EJS</Pill></p>
      </div>
    </section>
  );
}
