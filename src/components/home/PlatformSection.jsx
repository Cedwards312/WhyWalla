import { Package, ClipboardList, BarChart3 } from "lucide-react";
import SectionTag from "../shared/SectionTag";
import SectionHeading from "../shared/SectionHeading";
import FeatureCard from "../shared/FeatureCard";

const pillars = [
  { icon: <Package className="w-[18px] h-[18px]" />, title: "Order better", desc: "Supplies, prescriptions, and office-use Rx consolidated into one order. No vendor juggling, no missed invoices." },
  { icon: <ClipboardList className="w-[18px] h-[18px]" />, title: "Stock smarter", desc: "Track stock levels across every location in real time. Get reorder alerts before you run out — not after." },
  { icon: <BarChart3 className="w-[18px] h-[18px]" />, title: "Spend less", desc: "See spend by category, vendor, and location. Know where your money is going and where you're overpaying." },
];

export default function PlatformSection() {
  return (
    <section className="bg-cream px-5 py-20">
      <div className="max-w-[1080px] mx-auto">
        <SectionTag>The platform</SectionTag>
        <SectionHeading>Three things your clinic needs. One place to manage them.</SectionHeading>
        <p className="text-[0.97rem] text-walla-muted max-w-[500px] leading-[1.78] font-light mb-10">
          Supply chain consolidation, intelligent inventory management, and real-time insights — working together so you always know what you have, what you need, and what you're spending.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {pillars.map((p) => (
            <FeatureCard key={p.title} icon={p.icon} title={p.title} description={p.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}