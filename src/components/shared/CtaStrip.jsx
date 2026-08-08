import { Link } from "react-router-dom";

export default function CtaStrip({ headline, subheadline, buttonText = "Book a Free Demo" }) {
  return (
    <section className="bg-deep px-5 py-16 text-center">
      <div className="max-w-[1080px] mx-auto">
        <h2
          className="font-display font-bold text-white leading-[1.12] tracking-tight mx-auto mb-3"
          style={{ fontSize: "clamp(1.85rem, 3.2vw, 2.6rem)" }}
        >
          {headline}
        </h2>
        {subheadline && (
          <p className="text-[0.97rem] text-white/50 max-w-[480px] mx-auto leading-[1.78] font-light mb-8">
            {subheadline}
          </p>
        )}
        <Link
          to="/contact"
          className="inline-block bg-teal text-deep font-body text-[0.9rem] font-medium px-7 py-3 rounded-[6px] no-underline hover:opacity-90 transition-opacity"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}