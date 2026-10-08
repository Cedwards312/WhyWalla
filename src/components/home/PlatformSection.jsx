import { useEffect, useRef, useState } from "react";
import { Package, ClipboardList, BarChart3 } from "lucide-react";
import SectionTag from "../shared/SectionTag";
import SectionHeading from "../shared/SectionHeading";
import FeatureCard from "../shared/FeatureCard";

const pillars = [
  { icon: <Package className="w-[18px] h-[18px]" />, title: "Order better", desc: "Supplies, prescriptions, and office-use Rx consolidated into one order. No vendor juggling, no missed invoices.", clip: "order-better" },
  { icon: <ClipboardList className="w-[18px] h-[18px]" />, title: "Stock smarter", desc: "Track stock levels across every location in real time. Get reorder alerts before you run out — not after.", clip: "stock-smarter" },
  { icon: <BarChart3 className="w-[18px] h-[18px]" />, title: "Spend less", desc: "See spend by category, vendor, and location. Know where your money is going and where you're overpaying.", clip: "spend-less" },
];

function prefersReducedMotion() {
  try {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch {
    return false;
  }
}

export default function PlatformSection() {
  const [active, setActive] = useState(0);
  const [reduceMotion] = useState(prefersReducedMotion);
  const current = pillars[active];
  const videoRef = useRef(null);

  // React sets `muted` as a property, not the attribute Chrome's autoplay
  // policy checks, so autoPlay alone stays paused. Mute and start it here.
  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduceMotion) return;
    video.muted = true;
    video.play().catch(() => {});
  }, [active, reduceMotion]);

  return (
    <section className="bg-cream px-5 py-20">
      <div className="max-w-[1080px] mx-auto">
        <SectionTag>The platform</SectionTag>
        <SectionHeading>Three things your clinic needs. One place to manage them.</SectionHeading>
        <p className="text-[0.97rem] text-walla-muted max-w-[500px] leading-[1.78] font-light mb-10">
          Supply chain consolidation, intelligent inventory management, and real-time insights — working together so you always know what you have, what you need, and what you're spending.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {pillars.map((p, i) => (
            <button
              key={p.title}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={i === active}
              className={`text-left rounded-[10px] transition-all ${
                i === active ? "ring-2 ring-teal shadow-md" : "opacity-70 hover:opacity-100"
              }`}
            >
              <FeatureCard icon={p.icon} title={p.title} description={p.desc} />
            </button>
          ))}
        </div>

        <div className="mt-6 rounded-xl overflow-hidden border border-walla-border bg-white shadow-xl">
          <div className="flex items-center gap-1.5 px-4 py-2.5 bg-cream border-b border-walla-border">
            <span className="w-2.5 h-2.5 rounded-full bg-walla-border" />
            <span className="w-2.5 h-2.5 rounded-full bg-walla-border" />
            <span className="w-2.5 h-2.5 rounded-full bg-walla-border" />
            <span className="ml-3 text-[0.72rem] text-walla-muted">{current.title} — the Walla platform</span>
          </div>
          <video
            key={current.clip}
            ref={videoRef}
            src={`/media/${current.clip}.mp4`}
            poster={`/media/${current.clip}.jpg`}
            width={1600}
            height={1000}
            controls={reduceMotion}
            muted
            playsInline
            preload="metadata"
            onEnded={() => setActive((active + 1) % pillars.length)}
            aria-label={`Screen recording of the Walla platform: ${current.title}`}
            className="block w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
