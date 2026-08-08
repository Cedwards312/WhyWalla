import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Why Walla", path: "/why-walla" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-deep sticky top-0 z-50">
      <div className="max-w-[1080px] mx-auto flex items-center justify-between px-5 py-4">
        <Link to="/" className="flex flex-col leading-none no-underline">
          <span className="font-display font-extrabold text-[1.45rem] text-teal tracking-tight leading-none">walla!</span>
          <span className="font-body font-semibold text-[0.6rem] text-white/50 tracking-[0.18em] uppercase leading-none mt-0.5">HEALTH</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[0.84rem] font-body px-3 py-2 rounded-[5px] transition-all no-underline ${
                location.pathname === link.path
                  ? "text-teal"
                  : "text-white/60 hover:text-white hover:bg-white/[0.07]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden md:inline-block bg-teal text-deep font-body text-[0.84rem] font-medium px-4 py-2 rounded-[5px] no-underline hover:opacity-90 transition-opacity"
          >
            Book a Demo
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white/70 hover:text-white"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/[0.06] px-5 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`block text-[0.9rem] font-body py-2.5 no-underline ${
                location.pathname === link.path
                  ? "text-teal"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="block mt-2 bg-teal text-deep text-center font-body text-[0.87rem] font-medium px-4 py-2.5 rounded-[5px] no-underline"
          >
            Book a Demo
          </Link>
        </div>
      )}
    </nav>
  );
}