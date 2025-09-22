import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "./assets/VKA.png";

const navList = [
  { href: "#aboutme", label: "AboutMe" },
  { href: "#projects", label: "Projects" },
  { href: "#contacts", label: "Contacts" },
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
            {navList.map((link) => (
              <a
                href={link.href}
                key={link.href}
                className=""
              >
                <span className="text-black hover:underline hover:font-bold transition font-semibold">
                  {link.label}
                </span>
              </a>
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
            {navList.map((link) => (
              <a
                href={link.href}
                key={link.href}
                className="block hover:text-sky-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-black hover:font-bold font-semibold">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
