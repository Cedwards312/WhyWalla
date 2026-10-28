import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import SectionTag from "./SectionTag";
import SectionHeading from "./SectionHeading";
import { Link } from "react-router-dom";

const faqs = {
  onboarding: {
    label: "Getting started",
    items: [
      { q: "How long does onboarding take?", a: "Most clinics are fully onboarded within a week. We handle the vendor connection setup on our end. You share your current supplier list and we map everything into the platform. Your team can start ordering through Walla with minimal disruption to daily operations." },
      { q: "Will my staff need to learn a complicated new system?", a: "No. The platform is designed for clinical staff who need things fast and simple, not for supply chain managers. Most users are comfortable placing orders independently within their first week. We also provide onboarding support so no one is figuring it out alone." },
      { q: "Is Walla a good fit for a single-location clinic?", a: "Yes. The time savings and cost reduction are meaningful even at one location. Our first clinic saved over 20% on supply costs and recovered 2–3 hours per day. Multi-location clinics get additional value from the consolidated dashboard, but single-location operators see real results from day one." },
    ],
  },
  supply: {
    label: "Supply chain",
    items: [
      { q: "What types of products can I order through Walla?", a: "Medical supplies and consumables (needles, syringes, PPE, IV supplies), prescriptions, and office-use Rx, all through one platform. If your clinic orders it regularly, Walla can handle it." },
      { q: "What happens if a vendor is out of stock on something I need?", a: "Because Walla has relationships with multiple vendors across product categories, we can source alternatives quickly when a primary supplier has a shortage. You get notified immediately and we surface substitute options so patient care isn't disrupted." },
      { q: "What categories of vendors are included?", a: "IV solutions, medications, stem cell therapies, clinical consumables, and 503A and 503B compounding pharmacies. We also evaluate additional vendors and value-added services based on what our clinics ask for." },
    ],
  },
  inventory: {
    label: "Inventory",
    items: [
      { q: "How does Walla track inventory across multiple locations?", a: "Every location gets its own inventory view within a shared dashboard. You can see stock levels at each site in real time, compare what locations have on hand, and place orders for specific locations or all of them from one screen." },
      { q: "How does Walla know when to suggest a reorder?", a: "The platform watches your historical usage patterns and compares them against your current stock levels and upcoming booking volume. When a product is trending toward a stock-out before your next typical reorder window, Walla surfaces a reorder alert. Over time the suggestions get more accurate as the platform learns your clinic's rhythm." },
      { q: "Does inventory update automatically when I receive an order?", a: "Yes. When an order is fulfilled and received, inventory levels update automatically. You can also manually adjust counts if needed, for example after a physical count or if products are transferred between locations." },
    ],
  },
  pricing: {
    label: "Pricing & savings",
    items: [
      { q: "How does Walla save clinics money on supplies?", a: "A few ways. First, we leverage collective purchasing volume across our clinic network to negotiate better rates than individual clinics can get alone. Second, we proactively flag when you're paying above market for a product. Third, we've negotiated pharmacy contract pricing for clinics directly, even when Walla earned nothing from the outcome." },
      { q: "What does Walla cost?", a: "There's no software fee today. Walla earns a margin on the supplies, prescriptions, and office-use products you order through the platform, and that's built into the price you see before you order. We'll walk through your numbers in the demo. We're not interested in a relationship where you're paying us more than you're saving." },
      { q: "Are there any hidden fees or markups on products?", a: "No hidden fees. Full pricing transparency is a core part of how Walla operates. Walla's margin is built into the product price you see up front, so you know exactly what you pay for every product and exactly what you save versus your previous pricing. No surprises, no mystery fees added to your invoice." },
    ],
  },
  rx: {
    label: "Prescriptions & Rx",
    items: [
      { q: "What's the difference between prescriptions and office-use Rx in Walla?", a: "Prescriptions in Walla refers to patient-specific prescription procurement: ordering and managing Rx that your providers dispense to patients. Office-use Rx covers the medications your clinical team uses during treatments, like lidocaine, vitamin infusions, and similar in-clinic therapeutics." },
      { q: "Does Walla handle compounded medications?", a: "Yes. We work with licensed compounding pharmacies and can manage compounded Rx procurement through the platform alongside your standard supplies. Compliance requirements vary by state and product, and we navigate those with you during onboarding." },
      { q: "How does Walla handle controlled substances?", a: "Controlled substance ordering requires DEA compliance and specific documentation workflows. Walla supports the procurement process and tracks ordering history, but the prescribing and dispensing responsibilities remain with your licensed providers and DEA-registered facility, as required by law." },
    ],
  },
};

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-walla-border last:border-0">
      <button
        className="w-full flex items-center justify-between gap-4 py-4 text-left"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span className="text-[0.93rem] font-medium text-deep leading-snug">{q}</span>
        <span className="shrink-0 w-5 h-5 rounded-full bg-teal-lt flex items-center justify-center">
          {open ? <Minus className="w-3 h-3 text-mid" /> : <Plus className="w-3 h-3 text-mid" />}
        </span>
      </button>
      {open && (
        <p className="text-[0.83rem] text-walla-muted leading-[1.72] font-light pb-4 pr-8">
          {a}
        </p>
      )}
    </div>
  );
}

export default function FaqSection() {
  const [activeCategory, setActiveCategory] = useState("onboarding");
  const categories = Object.keys(faqs);

  return (
    <section className="bg-cream px-5 py-20">
      <div className="max-w-[1080px] mx-auto">
        <SectionTag>Common questions</SectionTag>
        <SectionHeading>Everything clinic operators ask before their first demo.</SectionHeading>
        <p className="text-[0.9rem] text-walla-muted mb-10 font-light">
          If your question isn't here, bring it to the demo. We'd rather answer it directly.
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Category nav + CTA */}
          <div className="lg:w-52 shrink-0 flex flex-col gap-4">
            <div className="flex flex-row lg:flex-col gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-left text-[0.82rem] font-medium px-3 py-2 rounded-[6px] transition-colors ${
                    activeCategory === cat
                      ? "bg-deep text-white"
                      : "text-walla-muted hover:text-deep hover:bg-white"
                  }`}
                >
                  {faqs[cat].label}
                </button>
              ))}
            </div>

            <div className="hidden lg:block mt-4 bg-deep rounded-[10px] p-5">
              <div className="text-[0.82rem] font-semibold text-white mb-1.5">Still have questions?</div>
              <div className="text-[0.75rem] text-white/75 leading-[1.6] mb-4 font-light">
                Bring them to the demo. 20 minutes, no slide deck, just honest answers.
              </div>
              <Link
                to="/contact"
                className="inline-block bg-teal text-deep text-[0.78rem] font-medium px-4 py-2 rounded-[6px] no-underline hover:opacity-90 transition-opacity"
              >
                Book a free demo
              </Link>
            </div>
          </div>

          {/* Accordion */}
          <div className="flex-1 bg-white rounded-[12px] px-6 py-2 shadow-sm border border-walla-border">
            {faqs[activeCategory].items.map((item, i) => (
              <FaqItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}