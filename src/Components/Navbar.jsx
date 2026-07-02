import React, { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import logo from "../assets/BinazyLogo.jpg";

const menuItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#portfolio" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = ({ onGetQuoteClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8 lg:py-4">
        {/* Logo */}
        <a href="#home" onClick={closeMenu} className="flex items-center gap-2">
          <img
            src={logo}
            alt="Binazy logo"
            loading="lazy"
            decoding="async"
            className="h-10 w-10 rounded-full object-cover sm:h-12 sm:w-12"
          />
          <span className="text-xl font-bold text-blue-600 sm:text-2xl">
            Binazy
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 lg:flex">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-medium text-gray-700 transition hover:text-blue-600">
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden items-center gap-6 lg:flex">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Phone size={18} className="text-blue-800" />
            <span>+91 9616185503</span>
          </div>

          <button
            onClick={onGetQuoteClick}
            className="rounded-xl bg-blue-800 px-5 py-3 font-semibold text-white transition hover:bg-blue-900">
            Get Free Quote
          </button>
        </div>

        {/* Mobile CTA */}
        <button
          onClick={onGetQuoteClick}
          className="shrink-0 rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white sm:px-4 lg:hidden">
          Get Quote
        </button>

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gray-200 text-gray-700 transition hover:border-blue-200 hover:text-blue-700 lg:hidden">
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-gray-200 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-700">
                {item.label}
              </a>
            ))}

            <a
              href="tel:+919616185503"
              className="mt-2 flex items-center gap-2 rounded-lg px-3 py-3 text-sm font-medium text-gray-600 transition hover:bg-blue-50 hover:text-blue-700">
              <Phone size={18} className="text-blue-800" />
              +91 9616185503
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
