import { Link } from "react-router-dom";
import { useEffect, useId, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { LakeViewCafeLogo } from "../assets/BrandLogo.jsx";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "/menu" },
  { name: "Gallery", path: "/gallery" },
  { name: "Reservation", path: "/reservation" },
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
    <header className="sticky top-0 z-30 w-full border-b border-primary bg-background shadow-md">
      {/* Container */}
      <div className="site-container flex items-center justify-between py-2">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center hover:scale-110 transition-transform duration-150 ease-out"
        >
          <LakeViewCafeLogo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 text-text md:flex lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="rounded-md p-1 text-sm font-medium lg:text-base hover:bg-secondary transition-colors duration-150 ease-out"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-text hover:bg-secondary transition-colors duration-150 ease-out md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-controls={menuId}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
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
          <div className="flex items-center justify-between border-b border-secondary px-4 py-4">
            <span className="font-display text-lg text-text">Menu</span>

            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="rounded-md p-2 hover:bg-secondary transition-colors duration-150 ease-out"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="mt-2 flex flex-col gap-4 px-4 text-text">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="border-b border-secondary p-2 text-base font-medium rounded-md hover:text-primary hover:bg-secondary transition-colors duration-150 ease-out"
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
