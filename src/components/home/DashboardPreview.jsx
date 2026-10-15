import { LayoutGrid, Package, FileText, Timer, ShoppingCart, MapPin } from "lucide-react";

// Simplified recreation of the demo app dashboard (demo.wallahealth.com) for the home hero.
const kpis = [
  { label: "Pending orders", value: "2", sub: "4 orders total", icon: Package, bar: "bg-amber-400", tint: "bg-amber-50 text-amber-500" },
  { label: "Prescriptions", value: "1", sub: "4 prescriptions total", icon: FileText, bar: "bg-teal", tint: "bg-teal/10 text-mid" },
  { label: "Avg time to ship", value: "2.5d", sub: "Across 2 shipped orders", icon: Timer, bar: "bg-indigo-500", tint: "bg-indigo-50 text-indigo-500" },
  { label: "Saved carts", value: "2", sub: "Active carts", icon: ShoppingCart, bar: "bg-emerald-500", tint: "bg-emerald-50 text-emerald-500" },
];

const orders = [
  { id: "ORD-4501", vendor: "Olympia · Tampa — Bayshore", status: "Pending", meta: "Oct 14 · $287.00", dot: "bg-amber-400" },
  { id: "ORD-4495", vendor: "B. Braun · Sarasota — Main St", status: "Processing", meta: "Oct 13 · $136.00", dot: "bg-blue-500" },
  { id: "ORD-4482", vendor: "Casa Pharma · Tampa — Bayshore", status: "Shipped", meta: "Oct 11 · $207.00", dot: "bg-indigo-500" },
  { id: "ORD-4417", vendor: "McKesson · Tampa — Bayshore", status: "Delivered", meta: "Sep 24 · $123.50", dot: "bg-emerald-500" },
];

export default function DashboardPreview() {
  return (
    <div
      role="img"
      aria-label="Walla dashboard showing pending orders, prescriptions, average time to ship, saved carts and recent orders across two clinic locations"
      className="w-full max-w-[520px] mx-auto rounded-xl bg-white shadow-[0_30px_80px_-20px_rgba(69,199,191,0.35)] ring-1 ring-white/10 overflow-hidden select-none"
    >
      {/* Browser bar */}
      <div className="flex items-center gap-2 px-3 py-2 bg-slate-100 border-b border-slate-200">
        <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
        <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
        <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
        <span className="ml-2 flex-1 bg-white rounded px-2.5 py-0.5 text-[0.62rem] text-slate-500 truncate">
          demo.wallahealth.com/dashboard
        </span>
      </div>

      {/* App header */}
      <div className="flex items-center gap-3 px-4 py-2.5 border-b border-slate-100">
        <span className="font-display font-extrabold text-[0.95rem] text-teal leading-none">walla!</span>
        <span className="flex items-center gap-1 bg-teal/10 text-mid text-[0.6rem] font-semibold px-2 py-1 rounded">
          <LayoutGrid className="w-3 h-3" /> Dashboard
        </span>
        <span className="hidden sm:inline text-[0.6rem] text-slate-500">Clinical</span>
        <span className="hidden sm:inline text-[0.6rem] text-slate-500">Operations</span>
        <span className="hidden sm:inline text-[0.6rem] text-slate-500">Insights</span>
      </div>

      <div className="p-4 bg-slate-50/60">
        <div className="font-display font-extrabold text-[1rem] text-[#0d1b2a] leading-tight">Welcome, Dana Reyes, NP</div>
        <div className="flex items-center gap-1 text-[0.62rem] text-slate-500 mt-0.5 mb-3">
          <MapPin className="w-3 h-3" /> All my locations · overview across 2 locations
        </div>

        <div className="grid grid-cols-2 gap-2.5 mb-3">
          {kpis.map(({ label, value, sub, icon: Icon, bar, tint }) => (
            <div key={label} className="relative bg-white rounded-lg border border-slate-200 p-2.5 overflow-hidden">
              <span className={`absolute inset-x-0 top-0 h-[3px] ${bar}`} />
              <div className="flex items-start justify-between">
                <div className="text-[0.52rem] font-semibold text-slate-500 uppercase tracking-[0.06em]">{label}</div>
                <span className={`w-5 h-5 rounded flex items-center justify-center ${tint}`}>
                  <Icon className="w-3 h-3" />
                </span>
              </div>
              <div className="font-display font-extrabold text-[1.25rem] text-[#0d1b2a] leading-none mt-1">{value}</div>
              <div className="text-[0.55rem] text-slate-500 mt-1">{sub}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg border border-slate-200">
          <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100">
            <span className="text-[0.68rem] font-semibold text-[#0d1b2a]">Recent orders</span>
            <span className="text-[0.58rem] text-mid font-medium">All orders ›</span>
          </div>
          {orders.map((o) => (
            <div key={o.id} className="flex items-center gap-2 px-3 py-1.5 border-b border-slate-100 last:border-b-0">
              <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${o.dot}`} />
              <div className="flex-1 min-w-0">
                <div className="text-[0.62rem] font-semibold text-[#0d1b2a] leading-tight">{o.id}</div>
                <div className="text-[0.55rem] text-slate-500 truncate">{o.vendor}</div>
              </div>
              <div className="text-right shrink-0">
                <div className="text-[0.58rem] text-slate-700 leading-tight">{o.status}</div>
                <div className="text-[0.55rem] text-slate-500">{o.meta}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
