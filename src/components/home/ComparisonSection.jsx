import { Link } from "react-router-dom";
import { Check, Minus } from "lucide-react";
import SectionTag from "../shared/SectionTag";
import SectionHeading from "../shared/SectionHeading";
import AdvocacyBox from "../shared/AdvocacyBox";

const rows = [
  { feature: "Supply consolidation", walla: true, portrait: true, infusive: true },
  { feature: "Inventory management", walla: true, portrait: false, infusive: false },
  { feature: "Real-time insights", walla: true, portrait: false, infusive: false },
  { feature: "Prescription procurement", walla: true, portrait: false, infusive: false },
  { feature: "Office-use Rx management", walla: true, portrait: false, infusive: false },
  { feature: "Works with existing vendors", walla: true, portrait: false, infusive: true },
  { feature: "Clinic-first advocacy", walla: true, portrait: false, infusive: false },
];

const Icon = ({ val }) =>
  val ? (
    <Check className="w-4 h-4 text-teal mx-auto" />
  ) : (
    <Minus className="w-4 h-4 text-gray-300 mx-auto" />
  );

export default function ComparisonSection() {
  return (
    <section className="bg-white px-5 py-20">
      <div className="max-w-[1080px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left — Advocacy */}
          <div>
            <SectionTag>The Walla difference</SectionTag>
            <SectionHeading>Your advocate. Not another vendor.</SectionHeading>
            <div className="mt-6">
              <AdvocacyBox
                quote="We negotiated 503B pharmacy pricing for a clinic before they were even a customer."
                body="Walla earned nothing from that call. The clinic saved thousands. This is what being an advocate actually looks like — not a tagline on a website."
                stats={[
                  { value: "20%+", label: "Cost savings, first clinic" },
                  { value: "2–3 hrs", label: "Daily time recovered" },
                  { value: "3–4×", label: "Wallet share post-adoption" },
                ]}
              />
            </div>
          </div>

          {/* Right — Comparison */}
          <div>
            <SectionTag>How we compare</SectionTag>
            <SectionHeading>What Walla covers that others don't.</SectionHeading>
            <div className="overflow-x-auto mt-6 mb-4">
              <table className="w-full border-collapse min-w-[480px]">
                <thead>
                  <tr>
                    <th className="text-[0.79rem] font-medium text-walla-muted px-4 py-3 text-left border-b border-walla-border">Feature</th>
                    <th className="text-[0.84rem] font-display font-bold text-deep px-4 py-3 text-center border-b border-walla-border">Walla</th>
                    <th className="text-[0.79rem] font-medium text-walla-muted px-4 py-3 text-center border-b border-walla-border">Portrait</th>
                    <th className="text-[0.79rem] font-medium text-walla-muted px-4 py-3 text-center border-b border-walla-border">Infusive</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-teal/[0.04]" : ""}>
                      <td className="text-[0.85rem] text-walla-text px-4 py-3 border-b border-walla-border">
                        {row.feature}
                      </td>
                      <td className="text-center px-4 py-3 border-b border-walla-border">
                        <Icon val={row.walla} />
                      </td>
                      <td className="text-center px-4 py-3 border-b border-walla-border">
                        <Icon val={row.portrait} />
                      </td>
                      <td className="text-center px-4 py-3 border-b border-walla-border">
                        <Icon val={row.infusive} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Link
              to="/contact"
              className="inline-block bg-teal text-deep font-body text-[0.9rem] font-medium px-7 py-3 rounded-[6px] no-underline hover:opacity-90 transition-opacity mt-4"
            >
              See Walla in action
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}