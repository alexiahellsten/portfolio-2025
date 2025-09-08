import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  const menuItems = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav className="inset-x-0 top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
        <Link to="/">
          <h1 className="text-2xl font-bold">Alexia Hellsten</h1>
        </Link>

        {/* Desktop-meny */}
        <ul className="hidden md:flex gap-6 list-none items-center">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="px-3 py-2 rounded-full text-md font-medium hover:bg-[#172025] hover:text-white transition"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobil */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Hamburgare */}
          <button
            type="button"
            className="inline-flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#172025] hover:text-white transition"
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobil */}
      {menuOpen && (
        <div id="mobile-menu" className="md:hidden">
          <ul className="list-none px-6 py-3 space-y-1">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#172025] hover:text-white transition"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
