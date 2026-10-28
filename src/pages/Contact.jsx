import { useState } from "react";
import HeroSmall from "../components/shared/HeroSmall";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { trackEvent } from "@/lib/consent";

// Web3Forms access key. Safe to keep in front-end code; it only allows sending to the inbox tied to it.
const WEB3FORMS_KEY = "0ebe29a3-1c96-411a-b8a7-e30b9cad9fc7";

// Opt-in language matches the forms on wallahealth.com. Both boxes start unchecked and are optional.
const MARKETING_CONSENT_TEXT = "Send me occasional updates from Walla Health.";
const SMS_CONSENT_TEXT = "Yes, text me about my request at this number: replies to my inquiry, demo or appointment reminders, and account or order updates from Walla Health. Message frequency varies. Message and data rates may apply. Reply STOP to opt out, HELP for help. Consent is not required to use our services.";
const CONSENT_SOURCE = "whywalla.com demo request form";
const TERMS_URL = "https://www.wallahealth.com/legal#terms";

// Field options match the demo form on wallahealth.com.
const clinicTypes = ["Medspa", "IV therapy", "Mobile wellness", "Concierge medicine", "Multi-service clinic", "Other"];
const operatingModels = ["Single location", "Franchise network", "Multi-location", "Mobile nurse operation", "Clinic plus mobile"];
const locationOptions = ["1 location", "2 to 5 locations", "6 to 15 locations", "16+ locations", "Mobile team"];

export default function Contact() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", clinic_name: "", clinic_type: "", operating_model: "", num_locations: "", best_time: "", challenge: "",
    marketing_opt_in: false, sms_opt_in: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (field) => (e) => setForm({ ...form, [field]: e.target.value });
  const handleCheck = (field) => (e) => setForm({ ...form, [field]: e.target.checked });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.target.botcheck?.checked) return;
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Demo request: ${form.clinic_name || form.name}`,
          from_name: "whywalla.com",
          replyto: form.email,
          ...form,
          marketing_opt_in: form.marketing_opt_in ? "Yes" : "No",
          sms_opt_in: form.sms_opt_in ? "Yes" : "No",
          marketing_consent_text: form.marketing_opt_in ? MARKETING_CONSENT_TEXT : "",
          sms_consent_text: form.sms_opt_in ? SMS_CONSENT_TEXT : "",
          consent_source: CONSENT_SOURCE,
          consent_page: window.location.href,
          consent_timestamp: new Date().toISOString(),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) throw new Error(data.message || "Send failed");
      trackEvent("generate_lead", { clinic_type: form.clinic_type, num_locations: form.num_locations });
      setSubmitted(true);
    } catch {
      setError("Something went wrong sending your request. Please try again, or email cedwards@wallahealth.com.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <HeroSmall
        pill="No pressure. No pitch deck."
        headline='See what Walla does<br>for your <span class="text-teal">clinic.</span>'
        subheadline="20 minutes. An honest look at whether Walla makes sense for how your clinic actually runs: supply chain, inventory, and all."
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
                <label className="block text-[0.81rem] font-medium text-deep mb-1" htmlFor="contact-name">Your name</label>
                <input
                  className="w-full px-3.5 py-2.5 border border-walla-border rounded-[7px] font-body text-[0.87rem] text-walla-text bg-white outline-none focus:border-teal transition-colors"
                  id="contact-name" type="text" placeholder="First and last name" required
                  value={form.name} onChange={handleChange("name")}
                />
              </div>
              <div className="mb-4">
                <label className="block text-[0.81rem] font-medium text-deep mb-1" htmlFor="contact-email">Work email</label>
                <input
                  className="w-full px-3.5 py-2.5 border border-walla-border rounded-[7px] font-body text-[0.87rem] text-walla-text bg-white outline-none focus:border-teal transition-colors"
                  id="contact-email" type="email" placeholder="you@yourclinic.com" required
                  value={form.email} onChange={handleChange("email")}
                />
              </div>
              <div className="mb-4">
                <label className="block text-[0.81rem] font-medium text-deep mb-1" htmlFor="contact-phone">
                  Phone{form.sms_opt_in ? "" : " (optional)"}
                </label>
                <input
                  className="w-full px-3.5 py-2.5 border border-walla-border rounded-[7px] font-body text-[0.87rem] text-walla-text bg-white outline-none focus:border-teal transition-colors"
                  id="contact-phone" type="tel" placeholder="(555) 555-5555" autoComplete="tel"
                  required={form.sms_opt_in}
                  value={form.phone} onChange={handleChange("phone")}
                />
              </div>
              <div className="mb-4">
                <label className="block text-[0.81rem] font-medium text-deep mb-1" htmlFor="contact-clinic">Clinic name</label>
                <input
                  className="w-full px-3.5 py-2.5 border border-walla-border rounded-[7px] font-body text-[0.87rem] text-walla-text bg-white outline-none focus:border-teal transition-colors"
                  id="contact-clinic" type="text" placeholder="Your practice name" required
                  value={form.clinic_name} onChange={handleChange("clinic_name")}
                />
              </div>
              <div className="mb-4">
                <label className="block text-[0.81rem] font-medium text-deep mb-1" htmlFor="contact-type">Clinic type</label>
                <select
                  className="w-full px-3.5 py-2.5 border border-walla-border rounded-[7px] font-body text-[0.87rem] text-walla-text bg-white outline-none focus:border-teal transition-colors appearance-none"
                  id="contact-type" required value={form.clinic_type} onChange={handleChange("clinic_type")}
                >
                  <option value="">Select one</option>
                  {clinicTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-[0.81rem] font-medium text-deep mb-1" htmlFor="contact-operating">How you operate</label>
                <select
                  className="w-full px-3.5 py-2.5 border border-walla-border rounded-[7px] font-body text-[0.87rem] text-walla-text bg-white outline-none focus:border-teal transition-colors appearance-none"
                  id="contact-operating" value={form.operating_model} onChange={handleChange("operating_model")}
                >
                  <option value="">Select one</option>
                  {operatingModels.map((m) => <option key={m} value={m}>{m}</option>)}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-[0.81rem] font-medium text-deep mb-1" htmlFor="contact-locations">Number of locations or nurses</label>
                <select
                  className="w-full px-3.5 py-2.5 border border-walla-border rounded-[7px] font-body text-[0.87rem] text-walla-text bg-white outline-none focus:border-teal transition-colors appearance-none"
                  id="contact-locations" required value={form.num_locations} onChange={handleChange("num_locations")}
                >
                  <option value="">Select one</option>
                  {locationOptions.map((l) => <option key={l} value={l}>{l}</option>)}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-[0.81rem] font-medium text-deep mb-1" htmlFor="contact-best-time">Best time to reach you</label>
                <input
                  className="w-full px-3.5 py-2.5 border border-walla-border rounded-[7px] font-body text-[0.87rem] text-walla-text bg-white outline-none focus:border-teal transition-colors"
                  id="contact-best-time" type="text" placeholder="e.g. Weekday mornings"
                  value={form.best_time} onChange={handleChange("best_time")}
                />
              </div>
              <div className="mb-4">
                <label className="block text-[0.81rem] font-medium text-deep mb-1" htmlFor="contact-challenge">Biggest operational challenge right now? (optional)</label>
                <textarea
                  className="w-full px-3.5 py-2.5 border border-walla-border rounded-[7px] font-body text-[0.87rem] text-walla-text bg-white outline-none focus:border-teal transition-colors resize-none"
                  id="contact-challenge" rows={3} placeholder="Vendor chaos, inventory gaps, pricing visibility, Rx management..."
                  value={form.challenge} onChange={handleChange("challenge")}
                />
              </div>
              <div className="mb-3 flex items-start gap-2.5">
                <input
                  id="contact-marketing" type="checkbox"
                  className="mt-[3px] h-4 w-4 shrink-0 accent-forest"
                  checked={form.marketing_opt_in} onChange={handleCheck("marketing_opt_in")}
                />
                <label htmlFor="contact-marketing" className="text-[0.8rem] text-walla-text leading-[1.6]">
                  {MARKETING_CONSENT_TEXT} (Optional)
                </label>
              </div>
              <div className="mb-5 flex items-start gap-2.5">
                <input
                  id="contact-sms" type="checkbox"
                  className="mt-[3px] h-4 w-4 shrink-0 accent-forest"
                  checked={form.sms_opt_in} onChange={handleCheck("sms_opt_in")}
                />
                <label htmlFor="contact-sms" className="text-[0.8rem] text-walla-text leading-[1.6]">
                  {SMS_CONSENT_TEXT} See our{" "}
                  <Link to="/privacy#text-messages" className="text-forest underline underline-offset-2">Privacy Policy</Link>. (Optional)
                </label>
              </div>
              <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
              {error && (
                <p role="alert" className="text-[0.85rem] font-medium text-mid bg-cream border border-walla-border rounded-[7px] px-3 py-2 text-center mb-3">{error}</p>
              )}
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
              <p className="text-[0.72rem] text-walla-muted text-center mt-2 font-light">
                By submitting, you agree to receive emails and calls from Walla Health about your demo request.
                We only text you if you check the text message box. See our{" "}
                <Link to="/privacy" className="underline underline-offset-2 hover:text-deep">Privacy Policy</Link> and{" "}
                <a href={TERMS_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-deep">Terms</a>.
                Please don't include patient information.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}