import { Link } from "react-router-dom";
import SectionTag from "../shared/SectionTag";
import SectionHeading from "../shared/SectionHeading";

const pains = [
  { num: "01", title: "Vendor overload", desc: "10+ accounts, 10+ logins, 10+ invoices — for supplies that should come together in one order." },
  { num: "02", title: "Inventory blind spots", desc: "No real-time view of what you have or need. You find out you're out of something when a patient is already in the chair." },
  { num: "03", title: "Pricing you can't see", desc: "You're paying retail while larger networks quietly get better rates. No one tells you unless you ask." },
  { num: "04", title: "Hours disappearing", desc: "Clinical staff spending 2–3 hours a day on ordering tasks that add zero value to patient outcomes." },
];

export default function PainSection() {
  return (
    <section className="bg-white px-5 py-20">
      <div className="max-w-[1080px] mx-auto">
        <SectionTag>The problem</SectionTag>
        <SectionHeading>Running a clinic shouldn't feel like firefighting.</SectionHeading>
        <p className="text-[0.97rem] text-walla-muted max-w-[500px] leading-[1.78] font-light mb-10">
          Most wellness clinics are losing thousands every month — not from bad patient care, but from a procurement and inventory system nobody designed for them.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-walla-border border border-walla-border rounded-xl overflow-hidden mb-10">
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
        <Link
          to="/how-it-works"
          className="inline-block bg-teal text-deep font-body text-[0.9rem] font-medium px-7 py-3 rounded-[6px] no-underline hover:opacity-90 transition-opacity"
        >
          See how Walla fixes this
        </Link>
      </div>
    </section>
  );
}