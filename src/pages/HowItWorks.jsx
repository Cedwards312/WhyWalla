import { Package, ClipboardList, Bell, BarChart3, DollarSign, MapPin } from "lucide-react";
import HeroSmall from "../components/shared/HeroSmall";
import SectionTag from "../components/shared/SectionTag";
import SectionHeading from "../components/shared/SectionHeading";
import InsightBox from "../components/shared/InsightBox";
import CtaStrip from "../components/shared/CtaStrip";
import FaqSection from "../components/shared/FaqSection";

const steps = [
  { num: "01", title: "Connect your clinic", desc: "We onboard your existing vendor relationships and Rx sources into Walla. No switching, no disruption to how you already operate." },
  { num: "02", title: "One order. Everything.", desc: "Supplies, prescriptions, and office-use Rx through a single workflow. One invoice. Your inventory updates automatically." },
  { num: "03", title: "The platform learns your clinic", desc: "Walla tracks usage, surfaces reorder alerts, flags pricing opportunities, and gets better at predicting what you need and when." },
];

const capabilities = [
  { icon: <Package className="w-[18px] h-[18px]" />, title: "Supply consolidation", description: "All your vendors, one order, one invoice. Consumables, Rx, and office-use meds in one workflow." },
  { icon: <ClipboardList className="w-[18px] h-[18px]" />, title: "Live inventory tracking", description: "Real-time stock levels across every location. Never find out you're out of something at the wrong moment." },
  { icon: <Bell className="w-[18px] h-[18px]" />, title: "Predictive reorder alerts", description: "Reorder prompts tied to your booking volume and usage history — before you run low, not after." },
  { icon: <BarChart3 className="w-[18px] h-[18px]" />, title: "Spend visibility", description: "Spend by category, vendor, and location in one dashboard. No manual reporting." },
  { icon: <DollarSign className="w-[18px] h-[18px]" />, title: "Pricing anomaly detection", description: "Flags when you're paying more than you should — compared to what other clinics pay for the same products." },
  { icon: <MapPin className="w-[18px] h-[18px]" />, title: "Multi-location dashboard", description: "Manage inventory and ordering across all your locations from one view. No calls, no spreadsheets." },
];

export default function HowItWorks() {
  return (
    <>
      <HeroSmall
        pill="Simple by design"
        headline='You order <span class="text-teal">once.</span><br>We handle the rest.'
        subheadline="No new vendors. No renegotiating contracts. No learning curve. A platform that makes your clinic's procurement and inventory run the way they should."
      />

      <section className="bg-white px-5 py-20">
        <div className="max-w-[1080px] mx-auto">
          <SectionTag>The process</SectionTag>
          <SectionHeading>Three steps from chaos to clarity.</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-6 mb-14">
            {steps.map((s) => (
              <div key={s.num} className="bg-white border border-walla-border rounded-[10px] p-6">
                <div className="font-display font-extrabold text-[2.8rem] text-teal-lt leading-none tracking-tight mb-3">
                  {s.num}
                </div>
                <div className="text-[0.93rem] font-medium text-deep mb-1.5">{s.title}</div>
                <div className="text-[0.81rem] text-walla-muted leading-[1.65] font-light">{s.desc}</div>
              </div>
            ))}
          </div>

          <SectionTag>What the platform does</SectionTag>
          <SectionHeading>Supply chain. Inventory. Insights. Together.</SectionHeading>
          <div className="mt-6">
            <InsightBox label="Platform capabilities" items={capabilities} />
          </div>
        </div>
      </section>

      <FaqSection />

      <CtaStrip
        headline="See it working for your clinic."
        subheadline="A 20-minute demo shows you exactly what Walla looks like on day one."
      />
    </>
  );
}