import { useState, useContext } from "react"
import { LanguageContext } from "../contexts/LanguageContext"
import translations from "../translations/translations"

function LiaComponent() {
  const [open, setOpen] = useState<number | null>(null)
  const toggle = (id: number) => setOpen(open === id ? null : id)

  const context = useContext(LanguageContext)

  if (!context) throw new Error("LanguageContext not found")
  const { language } = context
  const lia = translations[language].lia

return (
    <section id="lia" className="flex flex-col items-center px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        {lia.heading}
      </h2>
      <div className="max-w-2xl w-full space-y-6">
        {lia.sections.map((steps, index) => (
          <div key={index} className="border rounded-lg">
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-4 py-3 font-semibold text-lg flex justify-between"
            >
              {steps.title}
              <span>{open === index ? "−" : "+"}</span>
            </button>
            {open === index && (
              <div className="px-4 pb-4 text-base leading-relaxed">
                {steps.text ? (
                  <p>{steps.text}</p>
                ) : (
                  <ol className="list-decimal list-inside space-y-2">
                    {steps.steps?.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default LiaComponent
