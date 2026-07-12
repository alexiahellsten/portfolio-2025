import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { LanguageContext } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

export type PageKey = "home" | "about" | "projects" | "contact" | "notFound";

type PageTitleProps = {
  page: PageKey;
};

export default function PageTitle({ page }: PageTitleProps) {
  const context = useContext(LanguageContext);
  if (!context) {
    return null;
  }

  const { language } = context;
  const title = translations[language].meta.titles[page];

  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}
