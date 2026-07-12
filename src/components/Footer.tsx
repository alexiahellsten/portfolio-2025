import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { FaLinkedin } from "react-icons/fa6";

import { ArrowUpRightIcon, MailIcon, HeartIcon } from "lucide-react";

type SocialLink = {
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  labelKey: "githubAria" | "linkedinAria" | "emailAria";
};

const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/alexiahellsten",
    icon: SiGithub,
    labelKey: "githubAria",
  },
  {
    href: "https://www.linkedin.com/in/alexia-hellsten-41b51213a",
    icon: FaLinkedin,
    labelKey: "linkedinAria",
  },
  {
    href: "mailto:hello@alexiahellsten.dev",
    icon: MailIcon,
    labelKey: "emailAria",
  },
];

export default function Footer() {
  const context = useContext(LanguageContext);
  if (!context) {
    return null;
  }

  const { language } = context;

  const footer = translations[language].footer;
  const year = new Date().getFullYear();
  const [beforeHeart, afterHeart] = footer.copyright(year).split("{heart}");

  return (
    <footer className='relative z-10 border-t border-brand-border bg-brand-surface px-4 py-10 text-brand-fg'>
      <div className='mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end'>
        <div className='max-w-xl'>
          <p className='text-xs font-semibold uppercase tracking-[0.34em] text-accent-primary'>
            {footer.contactHeading}
          </p>
          <a
            href={`mailto:${footer.email}`}
            aria-label={footer.emailAria}
            className='group mt-3 inline-flex items-center gap-2 text-2xl font-semibold tracking-tight text-brand-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-surface rounded-sm sm:text-3xl'
          >
            {footer.email}
            <ArrowUpRightIcon
              aria-hidden='true'
              className='h-5 w-5 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100'
            />
          </a>

          <nav
            className='mt-6 flex items-center gap-3'
            aria-label={footer.socialAria}
          >
            {socialLinks.map(({ href, icon: Icon, labelKey }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  href.startsWith("mailto:") ? undefined : "noopener noreferrer"
                }
                aria-label={footer[labelKey]}
                className='inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-border text-brand-muted transition-colors duration-200 hover:border-accent-primary hover:text-accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-surface'
              >
                <Icon aria-hidden='true' className='h-5 w-5' />
              </a>
            ))}
          </nav>
        </div>

        <div className='md:justify-self-end'>
          <p className='max-w-sm text-sm leading-6 text-brand-muted md:text-right'>
            {beforeHeart}
            <HeartIcon
              aria-hidden='true'
              className='inline h-4 w-4 -translate-y-0.5 fill-accent-cta text-accent-cta'
            />
            {afterHeart}
          </p>
        </div>
      </div>
    </footer>
  );
}
