import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Bell, Package, LayoutDashboard, Users, Warehouse, Truck, Droplet, Sparkles, Car } from "lucide-react";
import DashboardPreview from "../components/home/DashboardPreview";
import SectionTag from "../components/shared/SectionTag";
import SectionHeading from "../components/shared/SectionHeading";
import FeatureCard from "../components/shared/FeatureCard";
import CtaStrip from "../components/shared/CtaStrip";

// Landing page for paid ad traffic. Intentionally not linked from the
// navbar or footer. The homepage stays platform-first.

const CTA_TEXT = "See how Walla would work for your clinic";

const pains = [
  { num: "01", title: "Vendor sprawl", desc: "Saline from one supplier, vitamins from another, consumables from a third. Every one has its own login, minimums, and invoices." },
  { num: "02", title: "Stockouts", desc: "You find out you're out of something when a patient is already in the chair, or when a mobile team is already on the road." },
  { num: "03", title: "Procurement time", desc: "Clinical staff spend hours every week comparing prices, placing orders, and chasing shipments instead of treating patients." },
];

const features = [
  { icon: <Bell className="w-[18px] h-[18px]" />, title: "Low-stock alerts and reorder suggestions", desc: "Walla watches your stock levels and usage and tells you what to reorder before you run out, not after." },
  { icon: <Package className="w-[18px] h-[18px]" />, title: "One place to order, track, and see spend", desc: "IV solutions, consumables, and Rx in a single order. Track every shipment and see spend by vendor, category, and location." },
  { icon: <LayoutDashboard className="w-[18px] h-[18px]" />, title: "Practice management included", desc: "Supplies are where Walla starts, not where it stops. Practice management comes with the platform, so your supply closet isn't another separate system." },
];

const costPoints = [
  { icon: <Users className="w-[18px] h-[18px]" />, value: "100+", label: "Clinic locations buying together", desc: "Pooled purchasing volume gets you rates that a single clinic can't negotiate alone." },
  { icon: <Warehouse className="w-[18px] h-[18px]" />, value: "22", label: "Distribution centers", desc: "Supplies ship from close to you, so you don't pay to move them across the country." },
  { icon: <Truck className="w-[18px] h-[18px]" />, value: "2-day", label: "Delivery", desc: "Order on Monday, restock by Wednesday. Less inventory sitting on your shelves." },
];

const audiences = [
  { icon: <Droplet className="w-[18px] h-[18px]" />, title: "IV clinics", desc: "Keep fluids, vitamins, and infusion supplies stocked across every chair and every location." },
  { icon: <Sparkles className="w-[18px] h-[18px]" />, title: "Med spas", desc: "Consumables and office-use Rx alongside the rest of your clinic operations, in one platform." },
  { icon: <Car className="w-[18px] h-[18px]" />, title: "Mobile IV operators", desc: "Know what every kit and vehicle needs before the next shift, without a back-office supply run." },
];

export default function Supplies() {
  useEffect(() => {
    const previous = document.title;
    document.title = "IV & Med Spa Supplies | Walla";
    return () => { document.title = previous; };
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="bg-deep overflow-hidden px-5 pt-20 sm:pt-24 pb-16">
        <div className="max-w-[1080px] mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_460px] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-teal/[0.12] border border-teal/[0.22] text-teal text-[0.73rem] font-medium tracking-[0.07em] uppercase px-3 py-1 rounded-full mb-6">
              Run your practice. Not your supply closet.
            </div>
            <h1
              className="font-display font-extrabold text-white leading-[1.05] tracking-tight max-w-[720px] mb-5"
              style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)" }}
            >
              IV and med spa supplies, <span className="text-teal">without the supply closet headaches.</span>
            </h1>
            <p className="text-[1rem] text-white/75 max-w-[520px] leading-[1.78] font-light mb-10">
              Walla puts ordering, inventory, and practice management in one platform, so your team spends less time on supplies and more time with patients.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-teal text-deep font-body text-[0.9rem] font-medium px-7 py-3 rounded-[6px] no-underline hover:opacity-90 transition-opacity"
            >
              {CTA_TEXT}
            </Link>
          </div>
          <DashboardPreview />
        </div>
      </section>

      {/* The problem */}
      <section className="bg-white px-5 py-20">
        <div className="max-w-[1080px] mx-auto">
          <SectionTag>The problem</SectionTag>
          <SectionHeading>Your supply closet shouldn't be a second job.</SectionHeading>
          <p className="text-[0.97rem] text-walla-muted max-w-[500px] leading-[1.78] font-light mb-10">
            Most clinics piece their supplies together from a handful of vendors and a spreadsheet. It works until it doesn't.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-walla-border border border-walla-border rounded-xl overflow-hidden">
            {pains.map((p) => (
              <div key={p.num} className="bg-white p-6">
                <div className="font-display font-extrabold text-[2.2rem] text-teal-lt leading-none tracking-tight mb-3">
                  {p.num}
                </div>
                <div className="text-[0.93rem] font-medium text-deep mb-1.5">{p.title}</div>
                <div className="text-[0.81rem] text-walla-muted leading-[1.65] font-light">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Walla handles it */}
      <section className="bg-cream px-5 py-20">
        <div className="max-w-[1080px] mx-auto">
          <SectionTag>How Walla handles it</SectionTag>
          <SectionHeading>One platform for ordering, inventory, and practice management.</SectionHeading>
          <p className="text-[0.97rem] text-walla-muted max-w-[500px] leading-[1.78] font-light mb-10">
            Stop managing vendors one by one. Walla gives you a single place to run the supply side of your clinic, and the rest of it too.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {features.map((f) => (
              <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.desc} variant="white" />
            ))}
          </div>
        </div>
      </section>

      {/* Why it costs less */}
      <section className="bg-white px-5 py-20">
        <div className="max-w-[1080px] mx-auto">
          <SectionTag>Why it costs less</SectionTag>
          <SectionHeading>Better software, and a better price as proof.</SectionHeading>
          <p className="text-[0.97rem] text-walla-muted max-w-[560px] leading-[1.78] font-light mb-10">
            And because 100+ clinic locations buy together, you can pay <span className="font-medium text-deep">up to 30% less</span> than buying on your own.
          </p>
          <div className="bg-deep rounded-xl p-6 sm:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {costPoints.map((c) => (
                <div key={c.label} className="bg-white/[0.04] border border-white/[0.07] rounded-lg p-5">
                  <div className="text-teal mb-3">{c.icon}</div>
                  <div className="font-display font-extrabold text-[2rem] text-teal leading-none tracking-tight mb-1">
                    {c.value}
                  </div>
                  <div className="text-[0.87rem] font-medium text-white mb-1.5">{c.label}</div>
                  <div className="text-[0.78rem] text-white/70 leading-[1.6] font-light">{c.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-cream px-5 py-20">
        <div className="max-w-[1080px] mx-auto">
          <SectionTag>Who it's for</SectionTag>
          <SectionHeading>Built for clinics that run on IV and aesthetic supplies.</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-8">
            {audiences.map((a) => (
              <FeatureCard key={a.title} icon={a.icon} title={a.title} description={a.desc} variant="white" />
            ))}
          </div>
        </div>
      </section>

      <CtaStrip
        headline="Run your practice. Not your supply closet."
        subheadline="20 minutes. A look at how Walla would fit the way your clinic orders, stocks, and runs today."
        buttonText={CTA_TEXT}
      />
    </>
  );
}
