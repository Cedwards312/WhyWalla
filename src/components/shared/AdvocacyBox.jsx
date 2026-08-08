export default function AdvocacyBox({ quote, body, stats }) {
  return (
    <div className="bg-deep rounded-xl p-6 sm:p-10">
      <div className="font-display text-[1.4rem] font-bold text-white leading-[1.32] tracking-tight mb-3 border-l-[3px] border-teal pl-4">
        "{quote}"
      </div>
      <div className="text-[0.88rem] text-white/[0.52] leading-[1.78] font-light">
        {body}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-7">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white/[0.04] border border-white/[0.07] rounded-lg px-4 py-3"
          >
            <div className="font-display font-extrabold text-[1.8rem] text-teal leading-none tracking-tight mb-0.5">
              {stat.value}
            </div>
            <div className="text-[0.77rem] text-white/[0.38] font-light">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}