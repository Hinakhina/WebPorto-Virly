import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "./assets/VKA.png";

import { NavLink, Link } from "react-router-dom";


const links = [
  { to: "/", label: "AboutMe" },
  { to: "/project", label: "Projects" },
  { to: "/contact", label: "ContactMe" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky inset-x-0 top-0 z-50 bg-[#EFF2F9] shadow-md">
      <div className="relative mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center h-full">
            <img
              src={logo}
              alt="Logo"
              className="h-full w-auto object-contain"
            />
          </div>

          <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 space-x-8">
            {links.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"} // so "/" isn't active on other routes
                className={({ isActive }) =>
                  `px-2 py-1 hover:text-sky-600 ${isActive ? "text-sky-600" : "text-gray-900"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="md:hidden p-2 m-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="text-white" />
              ) : (
                <Menu className="text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isMenuOpen && (
        <div className="md:hidden w-full bg-[#EFF2F9] border-t border-gray-200 shadow-md px-4 py-4">
          <div className="space-y-3">
            {links.map((link) => (
              <Link
                to={link.to}
                key={link.to}
                className="block hover:text-sky-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-black hover:font-bold font-semibold">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
