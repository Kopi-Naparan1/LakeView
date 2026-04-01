import { Link, useLocation } from "react-router-dom";
import { useEffect, useId, useRef, useState } from "react";
import { CloseIcon, MenuIcon } from "../components/Icons.jsx";
import LakeViewCafeLogo from "./LAKE-APO-LOGO.avif";
import { preloadRoute } from "../pages";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Café ", path: "/cafe" },
  { name: "Resthouse", path: "/resthouse" },

  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const panelRef = useRef(null);
  const location = useLocation();

  function handleLinkIntent(path) {
    void preloadRoute(path);
  }

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

  useEffect(() => {
    if (!location.hash) {
      // Force each route change to start at the top (hero) instead of preserving scroll.
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }

    const targetId = decodeURIComponent(location.hash.slice(1));
    if (!targetId) return;

    let attempts = 0;
    const maxAttempts = 12;

    function scrollToHash() {
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      attempts += 1;
      if (attempts < maxAttempts) {
        requestAnimationFrame(scrollToHash);
      }
    }

    scrollToHash();
  }, [location.pathname, location.hash]);

  return (
    <header className="sticky top-0 z-30 w-full border-b shadow-md border-primary bg-background">
      {/* Container */}
      <div className="flex items-center justify-between py-2 site-container">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center transition-transform duration-150 ease-out hover:scale-110"
          onMouseEnter={() => handleLinkIntent("/")}
          onFocus={() => handleLinkIntent("/")}
          onTouchStart={() => handleLinkIntent("/")}
        >
          <img
            src={LakeViewCafeLogo}
            alt="Lake View Cafe Logo"
            className="w-10 h-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="items-center hidden gap-6 text-text md:flex lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onMouseEnter={() => handleLinkIntent(link.path)}
              onFocus={() => handleLinkIntent(link.path)}
              onTouchStart={() => handleLinkIntent(link.path)}
              className={`${
                location.pathname === link.path
                  ? "bg-secondary"
                  : "hover:bg-secondary/40"
              } p-1 text-sm font-medium transition-colors duration-150 ease-out rounded-md lg:text-base`}
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
                onMouseEnter={() => handleLinkIntent(link.path)}
                onFocus={() => handleLinkIntent(link.path)}
                onTouchStart={() => handleLinkIntent(link.path)}
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
