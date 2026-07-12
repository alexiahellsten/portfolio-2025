import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Languages } from "lucide-react";
import { LanguageContext } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";
import { Button, ButtonLink } from "./Button";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const context = useContext(LanguageContext);
  if (!context) throw new Error("LanguageContext not found");
  const { language, toggleLanguage } = context;
  const ui = translations[language];

  const menuItems = [
    { name: translations[language].menu.about, href: "/about" },
    { name: translations[language].menu.projects, href: "/projects" },
    { name: translations[language].menu.contact, href: "/contact" },
  ];

  return (
    <nav className='top-0 z-50 px-4 pt-4' aria-label={ui.menu.navAriaLabel}>
      <div className='mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full border border-brand-border bg-brand-bg px-4 text-brand-fg sm:px-6'>
        <Link
          to='/'
          className='min-w-0 max-w-[58%] truncate text-base font-bold tracking-wide text-brand-fg sm:max-w-none sm:text-lg md:text-xl'
          aria-label='Alexia Hellsten - Home'
        >
          Alexia Hellsten
        </Link>

        <ul
          className='absolute left-1/2 hidden -translate-x-1/2 items-center gap-3 md:flex'
          role='list'
        >
          {menuItems.map((item) => (
            <li key={item.name}>
              <ButtonLink to={item.href} variant='nav' className='px-4 py-2'>
                {item.name}
              </ButtonLink>
            </li>
          ))}
        </ul>

        <div className='hidden md:block'>
          <div className='flex items-center gap-2'>
            <Button
              onClick={toggleLanguage}
              variant='nav'
              className='gap-2 px-4 py-2'
              aria-label={ui.menu.switchLanguage}
            >
              <Languages className='h-5 w-5' aria-hidden='true' />
              {language === "en" ? "Svenska" : "English"}
            </Button>
          </div>
        </div>

        <div className='relative z-10 flex shrink-0 items-center gap-2 md:hidden'>
          <Button
            type='button'
            variant='icon'
            aria-controls='mobile-menu'
            aria-expanded={menuOpen}
            aria-label={ui.menu.toggleMenu}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? (
              <X className='h-6 w-6' aria-hidden='true' />
            ) : (
              <Menu className='h-6 w-6' aria-hidden='true' />
            )}
          </Button>
        </div>
      </div>

      {menuOpen && (
        <div
          id='mobile-menu'
          className='mx-auto mt-3 max-w-6xl rounded-3xl border border-brand-border bg-brand-bg p-3 text-brand-fg md:hidden'
          role='dialog'
          aria-label={ui.menu.navAriaLabel}
        >
          <ul className='list-none space-y-2' role='list'>
            {menuItems.map((item) => (
              <li key={item.name}>
                <ButtonLink
                  to={item.href}
                  onClick={closeMenu}
                  variant='nav'
                  className='w-full justify-start px-4 py-3 text-left'
                >
                  {item.name}
                </ButtonLink>
              </li>
            ))}
            <li>
              <ButtonLink
                to='#'
                onClick={() => {
                  toggleLanguage();
                  closeMenu();
                }}
                variant='nav'
                className='w-full justify-start gap-2 px-4 py-3 text-left'
                aria-label={ui.menu.switchLanguage}
              >
                <Languages className='h-5 w-5' aria-hidden='true' />
                {language === "en" ? "Svenska" : "English"}
              </ButtonLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
