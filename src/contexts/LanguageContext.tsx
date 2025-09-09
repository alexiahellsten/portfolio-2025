import { createContext, useState, useEffect } from "react"
import type { ReactNode, ReactElement } from "react"


// Definierar typen för context-värdet
type LanguageContextType = {
  language: "en" | "sv"
  toggleLanguage: () => void
}

// Skapar en context med initialt värde undefined
export const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Definierar typen för props till LanguageProvider
type Props = { children: ReactNode }

// Funktion som hanterar språkval och tillhandahåller context-värdet
export default function LanguageProvider({ children }: Props): ReactElement {
  const [language, setLanguage] = useState<"en" | "sv">(() => {
    const saved = localStorage.getItem("language") as "en" | "sv" | null
    return saved ?? "en"
  })

  // Sparar språkvalet i localStorage när det ändras
  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  // Funktion för att växla mellan engelska och svenska
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "sv" : "en"))
  }

  // Returnerar en context provider med språkdata och funktion för att växla språk
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}


