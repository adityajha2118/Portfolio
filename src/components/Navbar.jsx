import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const navItems = [
    { href: "#Home", label: "Home" },
    { href: "#About", label: "About" },
    { href: "#Portofolio", label: "Portfolio" },
    { href: "#Contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navItems.map(item => {
        const section = document.querySelector(item.href);
        if (section) {
          return {
            id: item.href.replace("#", ""),
            offset: section.offsetTop - 550,
            height: section.offsetHeight
          };
        }
        return null;
      }).filter(Boolean);

      const currentPosition = window.scrollY;
      const active = sections.find(section =>
        currentPosition >= section.offset &&
        currentPosition < section.offset + section.height
      );

      if (active) setActiveSection(active.id);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      const top = section.offsetTop - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isOpen
          ? "bg-slate-950"
          : scrolled
          ? "bg-slate-950/60 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto px-[5%] lg:px-[10%]">

        {/* 3 COLUMN GRID = TRUE CENTER */}
        <div className="grid grid-cols-3 items-center h-20">

          {/* LEFT EMPTY (BALANCE SPACE) */}
          <div></div>

          {/* CENTER LOGO */}
          <div className="flex justify-center">
            <a
              href="#Home"
              onClick={(e) => scrollToSection(e, "#Home")}
              className="text-white font-semibold text-2xl tracking-wider"
            >
              AJ
            </a>
          </div>

          {/* RIGHT NAV */}
          <div className="flex justify-end items-center">

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="group relative px-1 py-2 text-sm font-medium"
                >
                  <span
                    className={`transition duration-300 ${
                      activeSection === item.href.substring(1)
                        ? "bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent"
                        : "text-gray-400 group-hover:text-white"
                    }`}
                  >
                    {item.label}
                  </span>

                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-sky-400 to-cyan-400 transform origin-left transition-transform duration-300 ${
                      activeSection === item.href.substring(1)
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </a>
              ))}
            </div>

            {/* MOBILE BTN */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-400 hover:text-white transition"
              >
                {isOpen ? <X /> : <Menu />}
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden px-4 py-6 space-y-4 bg-slate-950/80 backdrop-blur-lg">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className={`block px-4 py-3 text-lg ${
                activeSection === item.href.substring(1)
                  ? "bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;