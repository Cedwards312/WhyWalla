import { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import SectionTag from "../shared/SectionTag";
import SectionHeading from "../shared/SectionHeading";

const capabilities = [
  {
    title: "Predictive ordering",
    desc: "Walla AI learns your usage and booking volume, then tells you what to reorder and when — before you run out, not after.",
    panel: {
      label: "Suggested reorders",
      rows: [
        { name: "LR 1,000mL", note: "Runs out in ~6 days", action: "Reorder 2 cs" },
        { name: "IV catheters", note: "Runs out in ~9 days", action: "Reorder 1 box" },
        { name: "Vitamin D3", note: "Runs out in ~12 days", action: "Reorder 10" },
      ],
    },
  },
  {
    title: "Inventory management",
    desc: "Stock levels update automatically as orders are delivered, so every location's count is current without anyone counting shelves.",
    panel: {
      label: "Stock by location",
      bars: [
        { name: "Downtown", level: 82 },
        { name: "Westside", level: 46 },
        { name: "Mobile unit", level: 21 },
      ],
    },
  },
  {
    title: "Waste & expiration checks",
    desc: "Walla AI flags product nearing expiration and suggests where to use or move it first, so less ends up in the bin.",
    panel: {
      label: "Expiring within 30 days",
      rows: [
        { name: "Vitamin D3", note: "Expires in 11 days", action: "Use first" },
        { name: "NaCl 1,000mL", note: "Expires in 18 days", action: "Move to Downtown" },
        { name: "LR 1,000mL", note: "Expires in 27 days", action: "Use first" },
      ],
    },
  },
];

function Panel({ panel }) {
  return (
    <div className="bg-deep rounded-xl p-6 sm:p-8 shadow-xl">
      <div className="flex items-center gap-1.5 text-[0.7rem] font-medium text-teal tracking-[0.1em] uppercase mb-5">
        <Sparkles className="w-3.5 h-3.5" /> {panel.label}
      </div>
      {panel.rows && (
        <div className="space-y-3">
          {panel.rows.map((row) => (
            <div
              key={row.name}
              className="flex items-center justify-between gap-4 bg-white/[0.045] border border-white/[0.07] rounded-lg px-4 py-3"
            >
              <div>
                <div className="text-[0.87rem] font-medium text-white">{row.name}</div>
                <div className="text-[0.75rem] text-white/[0.45] font-light">{row.note}</div>
              </div>
              <span className="shrink-0 bg-teal/[0.12] border border-teal/[0.22] text-teal text-[0.72rem] font-medium px-2.5 py-1 rounded">
                {row.action}
              </span>
            </div>
          ))}
        </div>
      )}
      {panel.bars && (
        <div className="space-y-5">
          {panel.bars.map((bar) => (
            <div key={bar.name}>
              <div className="flex justify-between text-[0.8rem] mb-1.5">
                <span className="text-white font-medium">{bar.name}</span>
                <span className={bar.level < 30 ? "text-teal" : "text-white/[0.45]"}>
                  {bar.level < 30 ? "Reorder suggested" : `${bar.level}% stocked`}
                </span>
              </div>
              <div className="h-2 rounded-full bg-white/[0.07] overflow-hidden">
                <div className="h-full rounded-full bg-teal" style={{ width: `${bar.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function AiSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-gradient-to-br from-teal-lt/60 via-cream to-white px-5 py-20">
      <div className="max-w-[1080px] mx-auto">
        <SectionTag>Walla AI</SectionTag>
        <SectionHeading>The AI that helps your clinic order ahead, stock smarter, and waste less.</SectionHeading>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mt-10">
          <div>
            {capabilities.map((c, i) => {
              const isActive = i === active;
              return (
                <button
                  key={c.title}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-expanded={isActive}
                  className={`block w-full text-left border-l-[3px] pl-5 py-3 mb-2 transition-colors ${
                    isActive ? "border-mid" : "border-walla-border hover:border-teal"
                  }`}
                >
                  <span
                    className={`font-mono tracking-wide block transition-colors ${
                      isActive ? "text-deep" : "text-walla-muted/60 hover:text-walla-muted"
                    }`}
                    style={{ fontSize: "clamp(1.25rem, 2.2vw, 1.6rem)" }}
                  >
                    {c.title}
                  </span>
                  {isActive && (
                    <span className="block text-[0.93rem] text-walla-text leading-[1.7] font-light mt-2 max-w-[460px]">
                      {c.desc}
                    </span>
                  )}
                </button>
              );
            })}
            <Link
              to="/contact"
              className="inline-block bg-teal text-deep font-body text-[0.9rem] font-medium px-7 py-3 rounded-[6px] no-underline hover:opacity-90 transition-opacity mt-6"
            >
              See Walla AI in action
            </Link>
          </div>

          <Panel panel={capabilities[active].panel} />
        </div>
      </div>
    </section>
  );
}
