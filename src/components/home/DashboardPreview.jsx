import { LayoutGrid, Package, FileText, Timer, ShoppingCart, MapPin } from "lucide-react";

// Simplified recreation of the demo app dashboard (demo.wallahealth.com) for the home hero.
const kpis = [
  { label: "Pending orders", value: "2", sub: "4 orders total", icon: Package, bar: "bg-teal-lt", tint: "bg-cream text-forest" },
  { label: "Prescriptions", value: "1", sub: "4 prescriptions total", icon: FileText, bar: "bg-teal", tint: "bg-cream text-mid" },
  { label: "Avg time to ship", value: "2.5d", sub: "Across 2 shipped orders", icon: Timer, bar: "bg-forest", tint: "bg-cream text-forest" },
  { label: "Saved carts", value: "2", sub: "Active carts", icon: ShoppingCart, bar: "bg-mid", tint: "bg-cream text-mid" },
];

const orders = [
  { id: "ORD-4501", vendor: "Olympia · Tampa, Bayshore", status: "Pending", meta: "Oct 14 · $287.00", dot: "bg-teal-lt" },
  { id: "ORD-4495", vendor: "B. Braun · Sarasota, Main St", status: "Processing", meta: "Oct 13 · $136.00", dot: "bg-teal" },
  { id: "ORD-4482", vendor: "Casa Pharma · Tampa, Bayshore", status: "Shipped", meta: "Oct 11 · $207.00", dot: "bg-forest" },
  { id: "ORD-4417", vendor: "McKesson · Tampa, Bayshore", status: "Delivered", meta: "Sep 24 · $123.50", dot: "bg-mid" },
];

export default function DashboardPreview() {
  return (
    <div
      role="img"
      aria-label="Walla dashboard showing pending orders, prescriptions, average time to ship, saved carts and recent orders across two clinic locations"
      className="w-full max-w-[520px] mx-auto rounded-xl bg-white shadow-[0_30px_80px_-20px_rgba(69,199,191,0.35)] ring-1 ring-white/10 overflow-hidden select-none"
    >
      {/* Browser bar */}
      <div className="flex items-center gap-2 px-3 py-2 bg-cream border-b border-walla-border">
        <span className="w-2.5 h-2.5 rounded-full bg-walla-border" />
        <span className="w-2.5 h-2.5 rounded-full bg-walla-border" />
        <span className="w-2.5 h-2.5 rounded-full bg-walla-border" />
        <span className="ml-2 flex-1 bg-white rounded px-2.5 py-0.5 text-[0.62rem] text-walla-muted truncate">
          demo.wallahealth.com/dashboard
        </span>
      </div>

      {/* App header */}
      <div className="flex items-center gap-3 px-4 py-2.5 border-b border-walla-border">
        <span className="font-display font-extrabold text-[0.95rem] text-teal leading-none">walla!</span>
        <span className="flex items-center gap-1 bg-teal/10 text-mid text-[0.6rem] font-semibold px-2 py-1 rounded">
          <LayoutGrid className="w-3 h-3" /> Dashboard
        </span>
        <span className="hidden sm:inline text-[0.6rem] text-walla-muted">Clinical</span>
        <span className="hidden sm:inline text-[0.6rem] text-walla-muted">Operations</span>
        <span className="hidden sm:inline text-[0.6rem] text-walla-muted">Insights</span>
      </div>

      <div className="p-4 bg-cream/60">
        <div className="font-display font-extrabold text-[1rem] text-deep leading-tight">Welcome, Dana Reyes, NP</div>
        <div className="flex items-center gap-1 text-[0.62rem] text-walla-muted mt-0.5 mb-3">
          <MapPin className="w-3 h-3" /> All my locations · overview across 2 locations
        </div>

        <div className="grid grid-cols-2 gap-2.5 mb-3">
          {kpis.map(({ label, value, sub, icon: Icon, bar, tint }) => (
            <div key={label} className="relative bg-white rounded-lg border border-walla-border p-2.5 overflow-hidden">
              <span className={`absolute inset-x-0 top-0 h-[3px] ${bar}`} />
              <div className="flex items-start justify-between">
                <div className="text-[0.52rem] font-semibold text-walla-muted uppercase tracking-[0.06em]">{label}</div>
                <span className={`w-5 h-5 rounded flex items-center justify-center ${tint}`}>
                  <Icon className="w-3 h-3" />
                </span>
              </div>
              <div className="font-display font-extrabold text-[1.25rem] text-deep leading-none mt-1">{value}</div>
              <div className="text-[0.55rem] text-walla-muted mt-1">{sub}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg border border-walla-border">
          <div className="flex items-center justify-between px-3 py-2 border-b border-walla-border">
            <span className="text-[0.68rem] font-semibold text-deep">Recent orders</span>
            <span className="text-[0.58rem] text-mid font-medium">All orders ›</span>
          </div>
          {orders.map((o) => (
            <div key={o.id} className="flex items-center gap-2 px-3 py-1.5 border-b border-walla-border last:border-b-0">
              <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${o.dot}`} />
              <div className="flex-1 min-w-0">
                <div className="text-[0.62rem] font-semibold text-deep leading-tight">{o.id}</div>
                <div className="text-[0.55rem] text-walla-muted truncate">{o.vendor}</div>
              </div>
              <div className="text-right shrink-0">
                <div className="text-[0.58rem] text-walla-text leading-tight">{o.status}</div>
                <div className="text-[0.55rem] text-walla-muted">{o.meta}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
