export default function SectionHeading({ children, className = "" }) {
  return (
    <h2
      className={`font-display font-bold text-deep leading-[1.12] tracking-tight max-w-[600px] mb-3 ${className}`}
      style={{ fontSize: "clamp(1.85rem, 3.2vw, 2.6rem)" }}
    >
      {children}
    </h2>
  );
}