import { Package, ClipboardList, BarChart3, Bell, DollarSign, TrendingUp, MapPin, Cpu } from "lucide-react";
import SectionTag from "../shared/SectionTag";
import SectionHeading from "../shared/SectionHeading";
import FeatureCard from "../shared/FeatureCard";
import InsightBox from "../shared/InsightBox";

const pillars = [
  { icon: <Package className="w-[18px] h-[18px]" />, title: "Supply chain", desc: "Supplies, prescriptions, and office-use Rx consolidated into one order. No vendor juggling, no missed invoices." },
  { icon: <ClipboardList className="w-[18px] h-[18px]" />, title: "Inventory management", desc: "Track stock levels across every location in real time. Get reorder alerts before you run out — not after." },
  { icon: <BarChart3 className="w-[18px] h-[18px]" />, title: "Real-time insights", desc: "See spend by category, vendor, and location. Know where your money is going and where you're overpaying." },
];

const insightItems = [
  { icon: <Bell className="w-[18px] h-[18px]" />, title: "Reorder before you run out", description: "Watches your usage patterns and tells you when to reorder — matched to your booking volume." },
  { icon: <ClipboardList className="w-[18px] h-[18px]" />, title: "Auto-inventory on delivery", description: "Updates your stock levels automatically as soon as an order is confirmed delivered — no manual counting." },
  { icon: <TrendingUp className="w-[18px] h-[18px]" />, title: "Learns your clinic's rhythm", description: "Fewer stockouts, less waste, better spend forecasting — the longer you use it." },
  { icon: <MapPin className="w-[18px] h-[18px]" />, title: "Multi-location visibility", description: "One dashboard for all your locations. See what each site has, needs, and spends." },
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          {pillars.map((p) => (
            <FeatureCard key={p.title} icon={p.icon} title={p.title} description={p.desc} />
          ))}
        </div>
        <InsightBox
          label={
            <span className="flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" /> How the platform gets smarter over time
            </span>
          }
          items={insightItems}
        />
      </div>
    </section>
  );
}