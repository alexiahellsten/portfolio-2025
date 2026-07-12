import { useState, useEffect } from "react";
import type { ReactNode, ReactElement } from "react";
import { LanguageContext } from "./LanguageContext";

type Props = { children: ReactNode };

export default function LanguageProvider({ children }: Props): ReactElement {
  const [language, setLanguage] = useState<"en" | "sv">(() => {
    const saved = localStorage.getItem("language") as "en" | "sv" | null;
    const lang = saved ?? "en";
    document.documentElement.lang = lang;
    return lang;
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "sv" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
