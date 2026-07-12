import { createContext } from "react";

export type LanguageContextType = {
  language: "en" | "sv";
  toggleLanguage: () => void;
};

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);
