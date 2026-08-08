import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";

export default function HomeHero() {
  return (
    <section className="bg-deep overflow-hidden">
      <div className="px-5 pt-20 sm:pt-24">
        <div className="max-w-[1080px] mx-auto">
          <div className="inline-flex items-center gap-1.5 bg-teal/[0.12] border border-teal/[0.22] text-teal text-[0.73rem] font-medium tracking-[0.07em] uppercase px-3 py-1 rounded-full mb-6">
            <ShieldCheck className="w-3.5 h-3.5" />
            Built for clinic operators. Not vendors.
          </div>
          <h1
            className="font-display font-extrabold text-white leading-[1.05] tracking-tight max-w-[720px] mb-5"
            style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.2rem)" }}
          >
            Order once.<br />
            Know everything.<br />
            <span className="text-teal">Grow faster.</span>
          </h1>
          <p className="text-[1rem] text-white/[0.58] max-w-[520px] leading-[1.78] font-light mb-4">
            Walla consolidates your supply chain, automates inventory tracking, and surfaces real-time insights — so your team stops managing vendors and starts focusing on patients.
          </p>
          <p className="text-[0.88rem] text-white/[0.42] max-w-[460px] leading-[1.72] font-light mb-10">
            In 20 minutes you'll know exactly how much Walla saves your clinic — and whether it's worth switching. No pitch, no pressure.
          </p>
          <div className="flex gap-3 flex-wrap mb-14">
            <Link
              to="/contact"
              className="bg-teal text-deep font-body text-[0.9rem] font-medium px-7 py-3 rounded-[6px] no-underline hover:opacity-90 transition-opacity"
            >
              Book a Free Demo
            </Link>
            <Link
              to="/why-walla"
              className="bg-transparent text-white/[0.68] font-body text-[0.9rem] px-5 py-3 rounded-[6px] border border-white/[0.17] no-underline hover:text-white hover:border-white/[0.42] transition-all"
            >
              Why clinic operators choose Walla
            </Link>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-1 sm:grid-cols-4 border-t border-white/[0.07]">
            {[
              { value: "20%+", label: "Average cost reduction" },
              { value: "6–8 hrs", label: "Recovered per week, per location" },
              { value: "1", label: "Platform: supplies + Rx + inventory" },
              { value: "Real-time", label: "Inventory visibility across locations" },
            ].map((stat, i) => (
              <div
                key={i}
                className={`py-6 px-5 ${i > 0 ? "sm:border-l border-t sm:border-t-0 border-white/[0.07]" : ""}`}
              >
                <div className="font-display font-extrabold text-[2.2rem] text-teal leading-none tracking-tight mb-1">
                  {stat.value}
                </div>
                <div className="text-[0.78rem] text-white/[0.38] font-light">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Clinic types bar */}
      <div className="bg-white/[0.025] border-t border-white/[0.06] px-5 py-4">
        <div className="max-w-[1080px] mx-auto flex items-center gap-6 flex-wrap">
          <span className="text-[0.7rem] text-white/[0.28] tracking-[0.09em] uppercase whitespace-nowrap">
            Serving
          </span>
          <div className="flex gap-2 flex-wrap">
            {["Medspas", "IV Therapy", "Mobile Wellness", "Concierge Medicine", "Multi-location Clinics"].map((type) => (
              <span
                key={type}
                className="bg-white/[0.045] border border-white/[0.07] text-white/[0.35] text-[0.73rem] px-3 py-1 rounded"
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}