import { Link } from "react-router-dom"
import { useContext } from "react"
import { LanguageContext } from "../contexts/LanguageContext"
import translations from "../translations/translations"

export default function Hero() {

 // Hämtar språket från kontexten
  const context = useContext(LanguageContext)
  if (!context) throw new Error("LanguageContext not found")
  const { language } = context

  // Hämtar översättningar för hero-komponenten
  const hero = translations[language].hero

  return (
    <section className="h-screen flex flex-col justify-center items-center text-center">
      <h2 className="text-5xl font-bold mb-4">{hero.title}</h2>

      <div>
      <span className="text-xl">{hero.subtitle}</span>
      <span className="text-xl font-semibold">{hero.location}</span>
      </div>
      <span className="mt-2">{hero.period}</span>
      <Link to="/projects" className="text-white px-6 py-3 rounded-full font-semibold bg-[#172025] hover:bg-[#2f3e46] transition mt-6">{hero.button}</Link>
    </section>
  )
}
