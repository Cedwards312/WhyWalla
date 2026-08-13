import { ShieldCheck, Eye, Pill, ClipboardList, BarChart3, Users } from "lucide-react";
import HeroSmall from "../components/shared/HeroSmall";
import SectionTag from "../components/shared/SectionTag";
import SectionHeading from "../components/shared/SectionHeading";
import FeatureCard from "../components/shared/FeatureCard";
import AdvocacyBox from "../components/shared/AdvocacyBox";
import CtaStrip from "../components/shared/CtaStrip";

const cards = [
  { icon: <ShieldCheck className="w-[18px] h-[18px]" />, title: "We advocate, not extract", desc: "We've proactively negotiated 503B pharmacy pricing for clinics even when we earned zero margin. Your savings come first — always." },
  { icon: <Eye className="w-[18px] h-[18px]" />, title: "Full pricing transparency", desc: "No markup surprises. No hidden fees. You see exactly what you pay and exactly what you save versus your current vendor setup." },
  { icon: <Pill className="w-[18px] h-[18px]" />, title: "Rx included from day one", desc: "Prescription procurement and office-use Rx are part of the platform — not an add-on. No other supply platform covers both." },
  { icon: <ClipboardList className="w-[18px] h-[18px]" />, title: "Inventory that watches itself", desc: "Real-time stock levels across every location. The platform tells you when to reorder before a stock-out disrupts patient care." },
  { icon: <BarChart3 className="w-[18px] h-[18px]" />, title: "Insights you can act on", desc: "Spend by vendor, category, and location in one dashboard. Know where every dollar is going without pulling a single report." },
  { icon: <Users className="w-[18px] h-[18px]" />, title: "Built from real clinic pain", desc: "Every feature maps to a real workflow problem that clinic operators described to us directly — not a roadmap meeting." },
];

export default function WhyWalla() {
  return (
    <>
      <HeroSmall
        pill="The Walla difference"
        headline='We are your <span class="text-teal">advocate.</span><br>Not your vendor.'
        subheadline="Most supply platforms are built to maximize what you spend. Walla is built to protect what you earn — and to give you the visibility to manage it."
      />

      <section className="bg-white px-5 py-20">
        <div className="max-w-[1080px] mx-auto">
          <SectionTag>Why operators choose Walla</SectionTag>
          <SectionHeading>Six things that make us genuinely different.</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6 mb-10">
            {cards.map((c) => (
              <FeatureCard key={c.title} icon={c.icon} title={c.title} description={c.desc} variant="white" />
            ))}
          </div>
          <AdvocacyBox
            quote="Before Walla, I had a full-time job just managing where everything was coming from."
            body="Now that time goes back to patients. That's what Walla is designed to produce — not just operational efficiency, but better care driven by a less-stressed clinical team."
            stats={[
              { value: "20%+", label: "Average cost savings" },
              { value: "6–8 hrs", label: "Weekly time recovered" },
              { value: "Real-time", label: "Inventory visibility" },
            ]}
          />
        </div>
      </section>

      <CtaStrip
        headline="Ready to work with a platform built for you?"
        subheadline="20 minutes. No slide deck. Just an honest look at whether Walla fits your clinic."
      />
    </>
  );
}