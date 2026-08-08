export default function FeatureCard({ icon, title, description, variant = "cream" }) {
  return (
    <div className={`border border-walla-border rounded-[10px] p-6 ${
      variant === "white" ? "bg-white" : "bg-cream"
    }`}>
      <div className="w-[38px] h-[38px] bg-deep rounded-lg flex items-center justify-center text-teal text-lg mb-3.5">
        {icon}
      </div>
      <div className="font-display font-bold text-[0.97rem] text-deep mb-1.5 tracking-tight">
        {title}
      </div>
      <div className="text-[0.81rem] text-walla-muted leading-[1.65] font-light">
        {description}
      </div>
    </div>
  );
}