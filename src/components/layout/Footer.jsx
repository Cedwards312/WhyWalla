import { Link } from "react-router-dom";
import { openCookieSettings } from "@/lib/consent";

export default function Footer() {
  return (
    <footer className="bg-deep border-t border-white/[0.06] px-5 py-5 flex items-center justify-between flex-wrap gap-3">
      <Link to="/" className="flex flex-col leading-none no-underline">
        <span className="font-display font-extrabold text-[1.2rem] text-teal tracking-tight leading-none">walla!</span>
        <span className="font-body font-semibold text-[0.55rem] text-teal-lt tracking-[0.18em] uppercase leading-none mt-0.5">HEALTH</span>
      </Link>
      <span className="text-[0.74rem] text-white/65 font-light">
        Walla Health Solutions · wallahealth@wallahealth.com ·{" "}
        <a href="tel:+18665662696" className="hover:text-white transition-colors">866-566-2696</a> · Local{" "}
        <a href="tel:+17278536400" className="hover:text-white transition-colors">727-853-6400</a>
      </span>
      <span className="text-[0.74rem] text-white/65 font-light flex items-center gap-4">
        <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
        <button type="button" onClick={openCookieSettings} className="hover:text-white transition-colors">
          Cookie settings
        </button>
        <span>wallahealth.com</span>
      </span>
    </footer>);

}
