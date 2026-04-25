import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/prism-logo.png";

const navItems = [
  { label: "ABOUT US", path: "/about" },
  { label: "OUR SOLUTIONS", path: "/solutions" },
  { label: "NEWS & PUBLICATIONS", path: "/news" },
  { label: "CONTACT", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-40 bg-background shadow-sm w-full">
      {/* Top bar */}
      <div className="max-w-5xl mx-auto w-full flex items-center justify-between h-20 px-4">
        {/* Logo */}
        <Link to="/" className=" flex lg:hidden items-center gap-2">
          <img src={logo} alt="PRISM Institute" className="h-12 md:h-14 " />
        </Link>
        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-10">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="PRISM Institute" className="h-12 md:h-14 " />
          </Link>

          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-[18px] font-medium font-heading tracking-wide transition-colors duration-300 text-black hover:text-[#24519E] ${
                location.pathname === item.path ? "text-[#24519E]" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav — inside the same header so it's part of sticky flow */}
      {open && (
        <nav className="lg:hidden border-t border-border bg-background px-4 pb-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`block py-3 text-[18px] font-medium font-heading tracking-wide transition-colors duration-300 text-black hover:text-[#24519E] ${
                location.pathname === item.path ? "text-[#24519E]" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
