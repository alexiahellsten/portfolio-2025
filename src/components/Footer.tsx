import { Mail } from "lucide-react"
import { useContext } from "react"
import { LanguageContext } from "../contexts/LanguageContext"
import translations from "../translations/translations"

export default function Footer() {

   // Hämtar språket från kontexten
  const context = useContext(LanguageContext);
    if (!context) {
      return null;
    }
    
  const { language } = context;

  // Hämtar översättningar för footer-komponenten
  const footer = translations[language].footer
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#172025] text-white py-6 text-center bottom-0 w-full">
      <section className="flex flex-col md:flex-row justify-center md:justify-between mb-4 px-4">
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <a href={`mailto:${footer.email}`} className="flex items-center gap-x-2 mb-1">
              <Mail className="h-5 w-5" />
              <h3 className="text-lg font-semibold">{footer.contactHeading}</h3>
            </a>
            <a href={`mailto:${footer.email}`}><p>{footer.email}</p></a>
        </div>

        <div className="text-center md:text-right">
          <p>
            {footer.copyright(year)}
          </p>
        </div>
      </section>
    </footer>
  )
}
