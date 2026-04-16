import { useState } from "react";
import { Menu, X } from "lucide-react";
import universityLogo from "@/assets/university-logo.png";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src={universityLogo}
            alt="Logo"
            width={48}
            height={48}
            className="rounded-full bg-primary-foreground p-1"
          />
          <span className="text-xl font-bold text-primary-foreground hidden sm:block">
            An AI-Driven Centralized Career Development Platform
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={`#${link.id}`}
                className="text-primary-foreground/80 hover:text-secondary transition-colors font-medium"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <ul className="md:hidden bg-primary border-t border-primary-foreground/10 px-4 pb-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={`#${link.id}`}
                className="block py-3 text-primary-foreground/80 hover:text-secondary transition-colors font-medium"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;