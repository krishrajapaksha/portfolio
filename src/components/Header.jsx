import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "WORK", path: "/" },
    { label: "ABOUT", path: "/about" },
    { label: "CONTACT", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent pointer-events-none">
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center pointer-events-auto z-10">
          <img src="/logo.svg" alt="Logo" className="w-10 h-10" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-zinc-600 font-semibold tracking-widest pointer-events-auto">
          {navItems.map(({ label, path }, idx) => (
            <Link
              key={idx}
              to={path}
              className={`hover:text-cyan-400 transition ${
                location.pathname === path ? "text-white" : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-12 h-12 text-white bg-[#111518] hover:bg-[#1b2125] transition pointer-events-auto z-10"
          onClick={() => setNavOpen(!navOpen)}
        >
          <span className="material-symbols-rounded text-3xl">
            {navOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {navOpen && (
        <div className="md:hidden bg-[#111518]/80 backdrop-blur-sm text-white flex flex-col items-center py-6 gap-6 pointer-events-auto -mt-21">
          {navItems.map(({ label, path }, idx) => (
            <Link
              key={idx}
              to={path}
              className="text-lg font-semibold hover:text-cyan-400 transition text-zinc-600"
              style={{
                color: location.pathname === path ? "white" : undefined,
              }}
              onClick={() => setNavOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
