import SectionTag from "../shared/SectionTag";
import SectionHeading from "../shared/SectionHeading";

// To show a logo instead of the name, add the file to public/partners/
// and set `logo`, e.g. { name: "BD", logo: "/partners/bd.svg" }.
const supplies = [
  { name: "B. Braun" },
  { name: "BD" },
  { name: "MedSource Labs" },
  { name: "Astor Drugs" },
  { name: "Fosun" },
  { name: "Hikma" },
  { name: "McKesson" },
  { name: "TrueCare Biomedix" },
  { name: "Amsino" },
  { name: "ICU Medical" },
];

const pharmacies = [
  { name: "Staska Pharma" },
  { name: "Olympia" },
  { name: "Mycelium" },
  { name: "Casa Pharma" },
  { name: "Meta Pharmacy Services" },
  { name: "ProCompounding" },
  { name: "Camel Compounding" },
];

function Partner({ partner, duplicate }) {
  return (
    <div className={`shrink-0 px-3 ${duplicate ? "motion-reduce:hidden" : ""}`} aria-hidden={duplicate || undefined}>
      <div className="h-16 min-w-[160px] px-6 flex items-center justify-center bg-white border border-walla-border rounded-[10px]">
        {partner.logo ? (
          <img
            src={partner.logo}
            alt={partner.name}
            className="max-h-8 max-w-[130px] object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition"
          />
        ) : (
          <span className="font-display font-bold text-[1rem] text-deep/70 whitespace-nowrap tracking-tight">
            {partner.name}
          </span>
        )}
      </div>
    </div>
  );
}

function PartnerRow({ label, partners, reverse }) {
  return (
    <div className="mb-8 last:mb-0">
      <div className="max-w-[1080px] mx-auto px-5 mb-3 text-[0.75rem] font-medium text-walla-muted uppercase tracking-[0.08em]">
        {label}
      </div>
      <div
        className="group overflow-hidden motion-reduce:overflow-visible"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <div
          className={`flex w-max group-hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:w-auto motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-y-3 ${
            reverse ? "animate-marquee-reverse" : "animate-marquee"
          }`}
        >
          {partners.map((p) => <Partner key={p.name} partner={p} />)}
          {/* Duplicate set makes the loop seamless; hidden from screen readers and reduced-motion users. */}
          {partners.map((p) => <Partner key={`${p.name}-dup`} partner={p} duplicate />)}
        </div>
      </div>
    </div>
  );
}

export default function PartnersSection() {
  return (
    <section className="bg-cream py-16 overflow-hidden">
      <div className="max-w-[1080px] mx-auto px-5 mb-10">
        <SectionTag>Our network</SectionTag>
        <SectionHeading>The suppliers and pharmacies your clinic already relies on.</SectionHeading>
      </div>
      <PartnerRow label="Supplies" partners={supplies} />
      <PartnerRow label="Pharmacies" partners={pharmacies} reverse />
    </section>
  );
}
