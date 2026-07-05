import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Languages } from "lucide-react";
import { LanguageContext } from "../contexts/LanguageContext";
import translations from "../translations/translations";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const context = useContext(LanguageContext);
  if (!context) throw new Error("LanguageContext not found");
  const { language, toggleLanguage } = context;

  const menuItems = [
    { name: translations[language].menu.about, href: "/about" },
    { name: translations[language].menu.projects, href: "/projects" },
    { name: translations[language].menu.contact, href: "/contact" },
  ];

  return (
    <nav className='inset-x-0 top-0 z-50'>
      <div
        className='mx-auto flex items-center justify-between px-6 h-16
      bg-brand-bg text-accent-light'
      >
        <Link to='/'>
          <h1 className='text-2xl font-bold'>Alexia Hellsten</h1>
        </Link>

        <ul className='hidden md:flex gap-6 list-none items-center absolute left-1/2 transform -translate-x-1/2'>
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className='px-3 py-2 rounded-full text-md font-medium transition text-accent-light hover:bg-white hover:text-black'
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className='hidden md:block'>
          <button
            onClick={toggleLanguage}
            className='flex items-center gap-2 px-3 py-2 rounded-full text-md font-medium transition text-accent-light hover:bg-white hover:text-black'
          >
            <Languages className='h-5 w-5' />
            {language === "en" ? "Svenska" : "English"}
          </button>
        </div>

        <div className='flex items-center gap-2 md:hidden'>
          <button
            type='button'
            className='inline-flex items-center justify-center h-10 w-10 rounded-full transition text-accent-light hover:bg-white hover:text-black'
            aria-controls='mobile-menu'
            aria-expanded={menuOpen}
            aria-label='Toggle menu'
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? (
              <X className='h-6 w-6' />
            ) : (
              <Menu className='h-6 w-6' />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div id='mobile-menu' className='bg-brand-bg md:hidden'>
          <ul className='list-none px-6 py-3 space-y-1'>
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className='block px-3 py-2 rounded-md text-base font-medium transition text-accent-light hover:bg-white hover:text-black'
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={() => {
                  toggleLanguage();
                  closeMenu();
                }}
                className='flex items-center gap-2 w-full px-3 py-2 rounded-md text-base font-medium transition text-accent-light hover:bg-white hover:text-black'
              >
                <Languages className='h-5 w-5' />
                {language === "en" ? "Svenska" : "English"}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
