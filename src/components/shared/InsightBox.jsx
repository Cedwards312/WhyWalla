export default function InsightBox({ label, items }) {
  return (
    <div className="bg-deep rounded-xl p-6 sm:p-10">
      <div className="text-[0.7rem] font-medium text-teal tracking-[0.1em] uppercase mb-5">
        {label}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-white/[0.045] border border-white/[0.07] rounded-lg p-4"
          >
            <div className="text-teal text-lg mb-2">{item.icon}</div>
            <div className="text-[0.87rem] font-medium text-white mb-1">{item.title}</div>
            <div className="text-[0.78rem] text-white/[0.45] leading-[1.6] font-light">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}