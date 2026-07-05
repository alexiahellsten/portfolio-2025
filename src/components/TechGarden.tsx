import Pill from "./Pill";
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

  return (
    <section className='max-w-4xl mx-auto p-6 md:p-12 lg:p-20 my-16 bg-brand-surface-alt text-white'>
      <h2 className='text-3xl sm:text-4xl font-bold mb-4'>
        {techgarden.heading}
      </h2>

      <div className='text-base md:text-lg text-left leading-relaxed'>
        <h3 className='font-semibold mt-8'>{techgarden.subheading1}</h3>
        <p className='py-4'>
          <Pill>JavaScript</Pill> <Pill>TypeScript</Pill> <Pill>C#</Pill>{" "}
          <Pill>HTML</Pill> <Pill>CSS</Pill> <Pill>Sass</Pill>{" "}
          <Pill>Tailwind CSS</Pill> <Pill>Material UI</Pill>{" "}
        </p>

        <h3 className='font-semibold mt-4'>{techgarden.subheading2}</h3>
        <p className='py-4'>
          <Pill>React</Pill> <Pill>Next.js (React framework)</Pill>{" "}
          <Pill>Angular</Pill>
        </p>

        <h3 className='font-semibold mt-4'>{techgarden.subheading3}</h3>
        <p className='py-4'>
          <Pill>Node.js (Express)</Pill> <Pill>ASP.NET Core</Pill>{" "}
          <Pill>MongoDB (Mongoose)</Pill> <Pill>SQLite</Pill>
        </p>

        <h3 className='font-semibold mt-4'>{techgarden.subheading4}</h3>
        <p className='py-4'>
          <Pill>Git</Pill> <Pill>GitHub</Pill> <Pill>Azure DevOps</Pill>{" "}
          <Pill>Postman</Pill>
        </p>

        <h3 className='font-semibold mt-4'>{techgarden.subheading5}</h3>
        <p className='py-4'>
          <Pill>Cypress</Pill>
        </p>

        <h3 className='font-semibold mt-4'>{techgarden.subheading6}</h3>
        <p className='py-4'>
          <Pill>Figma</Pill>
        </p>

        <h3 className='font-semibold mt-4'>{techgarden.subheading7}</h3>
        <p className='py-4'>
          <Pill>Eleventy (11ty)</Pill> <Pill>Handlebars</Pill>{" "}
          <Pill>Nunjucks</Pill> <Pill>EJS</Pill>
        </p>
      </div>
    </section>
  );
}
