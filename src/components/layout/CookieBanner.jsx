import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getConsent, setConsent, onOpenCookieSettings } from "@/lib/consent";

export default function CookieBanner() {
  const [open, setOpen] = useState(() => !getConsent() && !navigator.globalPrivacyControl);

  useEffect(() => onOpenCookieSettings(() => setOpen(true)), []);

  if (!open) return null;

  const choose = (choice) => {
    setConsent(choice);
    setOpen(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-[640px] bg-deep border border-white/[0.1] rounded-[10px] shadow-2xl px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-4"
    >
      <p className="text-[0.8rem] text-white/70 font-light leading-[1.6] flex-1">
        We use cookies to measure site traffic and the performance of our ads. No patient health
        information is collected. See our{" "}
        <Link to="/privacy" className="text-teal underline underline-offset-2">Privacy Policy</Link>.
      </p>
      <div className="flex gap-2 shrink-0">
        <button
          type="button"
          onClick={() => choose("denied")}
          className="font-body text-[0.8rem] font-medium text-white/80 border border-white/20 px-4 py-2 rounded-[7px] hover:border-white/40 transition-colors"
        >
          Decline
        </button>
        <button
          type="button"
          onClick={() => choose("granted")}
          className="font-body text-[0.8rem] font-medium text-deep bg-teal px-4 py-2 rounded-[7px] hover:opacity-90 transition-opacity"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
