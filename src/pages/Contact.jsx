import { useState } from "react";
import { base44 } from "@/api/base44Client";
import HeroSmall from "../components/shared/HeroSmall";
import { CheckCircle } from "lucide-react";

const clinicTypes = ["Medspa", "IV Therapy", "Mobile Wellness", "Concierge Medicine", "Multi-service clinic", "Other"];
const locationOptions = ["1 location", "2–5 locations", "6–15 locations", "16+ locations"];

export default function Contact() {
  const [form, setForm] = useState({
    name: "", email: "", clinic_name: "", clinic_type: "", num_locations: "", challenge: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await base44.entities.DemoRequest.create({ ...form, status: "new" });
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <>
      <HeroSmall
        pill="No pressure. No pitch deck."
        headline='See what Walla does<br>for your <span class="text-teal">clinic.</span>'
        subheadline="20 minutes. An honest look at whether Walla makes sense for how your clinic actually runs — supply chain, inventory, and all."
      />

      <section className="bg-white px-5 py-20">
        <div className="max-w-[540px] mx-auto">
          {submitted ? (
            <div className="text-center py-12">
              <CheckCircle className="w-12 h-12 text-teal mx-auto mb-4" />
              <h2 className="font-display font-bold text-xl text-deep mb-2">Demo request received</h2>
              <p className="text-[0.9rem] text-walla-muted font-light">
                We'll follow up within one business day. No spam, ever.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-[0.81rem] font-medium text-deep mb-1">Your name</label>
                <input
                  className="w-full px-3.5 py-2.5 border border-walla-border rounded-[7px] font-body text-[0.87rem] text-walla-text bg-white outline-none focus:border-teal transition-colors"
                  type="text" placeholder="First and last name" required
                  value={form.name} onChange={handleChange("name")}
                />
              </div>
              <div className="mb-4">
                <label className="block text-[0.81rem] font-medium text-deep mb-1">Email address</label>
                <input
                  className="w-full px-3.5 py-2.5 border border-walla-border rounded-[7px] font-body text-[0.87rem] text-walla-text bg-white outline-none focus:border-teal transition-colors"
                  type="email" placeholder="you@yourclinic.com" required
                  value={form.email} onChange={handleChange("email")}
                />
              </div>
              <div className="mb-4">
                <label className="block text-[0.81rem] font-medium text-deep mb-1">Clinic name</label>
                <input
                  className="w-full px-3.5 py-2.5 border border-walla-border rounded-[7px] font-body text-[0.87rem] text-walla-text bg-white outline-none focus:border-teal transition-colors"
                  type="text" placeholder="Your practice name" required
                  value={form.clinic_name} onChange={handleChange("clinic_name")}
                />
              </div>
              <div className="mb-4">
                <label className="block text-[0.81rem] font-medium text-deep mb-1">Clinic type</label>
                <select
                  className="w-full px-3.5 py-2.5 border border-walla-border rounded-[7px] font-body text-[0.87rem] text-walla-text bg-white outline-none focus:border-teal transition-colors appearance-none"
                  required value={form.clinic_type} onChange={handleChange("clinic_type")}
                >
                  <option value="">Select your clinic type</option>
                  {clinicTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-[0.81rem] font-medium text-deep mb-1">Number of locations</label>
                <select
                  className="w-full px-3.5 py-2.5 border border-walla-border rounded-[7px] font-body text-[0.87rem] text-walla-text bg-white outline-none focus:border-teal transition-colors appearance-none"
                  required value={form.num_locations} onChange={handleChange("num_locations")}
                >
                  <option value="">Select</option>
                  {locationOptions.map((l) => <option key={l} value={l}>{l}</option>)}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-[0.81rem] font-medium text-deep mb-1">Biggest operational challenge right now? (optional)</label>
                <textarea
                  className="w-full px-3.5 py-2.5 border border-walla-border rounded-[7px] font-body text-[0.87rem] text-walla-text bg-white outline-none focus:border-teal transition-colors resize-none"
                  rows={3} placeholder="Vendor chaos, inventory gaps, pricing visibility, Rx management..."
                  value={form.challenge} onChange={handleChange("challenge")}
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-deep text-white font-body text-[0.93rem] font-medium py-3.5 rounded-[7px] hover:bg-mid transition-colors disabled:opacity-60"
              >
                {submitting ? "Submitting..." : "Request a Demo"}
              </button>
              <p className="text-[0.76rem] text-walla-muted text-center mt-3 font-light">
                We follow up within one business day. No spam, ever.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}