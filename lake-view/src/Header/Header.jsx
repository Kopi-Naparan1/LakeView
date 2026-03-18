import { Link } from "react-router-dom";
import { useEffect, useId, useRef, useState } from "react";
import { CloseIcon, MenuIcon } from "../components/Icons.jsx";
import { LakeViewCafeLogo } from "../assets/BrandLogo.jsx";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Café", path: "/cafe" },
  { name: "Resthouse", path: "/resthouse" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const panelRef = useRef(null);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setMenuOpen(false);
    }

    function onMouseDown(e) {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      window.addEventListener("keydown", onKeyDown);
      window.addEventListener("mousedown", onMouseDown);
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("mousedown", onMouseDown);
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-30 w-full border-b shadow-md border-primary bg-background">
      {/* Container */}
      <div className="flex items-center justify-between py-2 site-container">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center transition-transform duration-150 ease-out hover:scale-110"
        >
          <LakeViewCafeLogo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="items-center hidden gap-6 text-text md:flex lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="p-1 text-sm font-medium transition-colors duration-150 ease-out rounded-md lg:text-base hover:bg-secondary"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center p-2 transition-colors duration-150 ease-out rounded-md text-text hover:bg-secondary md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-controls={menuId}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <CloseIcon size={22} strokeWidth={1.5} />
          ) : (
            <MenuIcon size={22} strokeWidth={1.5} />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        id={menuId}
        className={`fixed inset-0 z-40 md:hidden ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-150 ease-out ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Drawer Panel */}
        <div
          ref={panelRef}
          className={`absolute right-0 top-0 h-full w-[80%] max-w-xs bg-background shadow-xl transition-transform duration-200 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-secondary">
            <span className="text-lg font-display text-text">Menu</span>

            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="p-2 transition-colors duration-150 ease-out rounded-md hover:bg-secondary"
              aria-label="Close menu"
            >
              <CloseIcon size={20} strokeWidth={1.5} />
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="flex flex-col gap-4 px-4 mt-2 text-text">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="p-2 text-base font-medium transition-colors duration-150 ease-out border-b rounded-md border-secondary hover:text-primary hover:bg-secondary"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
