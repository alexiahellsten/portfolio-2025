import { createContext, useState, useEffect } from "react";
import type { ReactNode, ReactElement } from "react";

type LanguageContextType = {
  language: "en" | "sv";
  toggleLanguage: () => void;
};

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

type Props = { children: ReactNode };

export default function LanguageProvider({ children }: Props): ReactElement {
  const [language, setLanguage] = useState<"en" | "sv">(() => {
    const saved = localStorage.getItem("language") as "en" | "sv" | null;
    return saved ?? "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
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
