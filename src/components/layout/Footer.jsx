import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-deep border-t border-white/[0.06] px-5 py-5 flex items-center justify-between flex-wrap gap-3">
      <Link to="/" className="flex flex-col leading-none no-underline">
        <span className="font-display font-extrabold text-[1.2rem] text-teal tracking-tight leading-none">walla!</span>
        <span className="font-body font-semibold text-[0.55rem] text-white/40 tracking-[0.18em] uppercase leading-none mt-0.5">HEALTH</span>
      </Link>
      <span className="text-[0.74rem] text-white/30 font-light">Walla Health Solutions · wallahealth@wallahealth.com

      </span>
      <span className="text-[0.74rem] text-white/30 font-light">
        whywalla.com
      </span>
    </footer>);

}