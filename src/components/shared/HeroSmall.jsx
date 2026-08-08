export default function HeroSmall({ pill, headline, subheadline }) {
  return (
    <section className="bg-deep px-5 pt-16 pb-12 overflow-hidden">
      <div className="max-w-[1080px] mx-auto">
        {pill && (
          <div className="inline-flex items-center gap-1.5 bg-teal/[0.12] border border-teal/[0.22] text-teal text-[0.73rem] font-medium tracking-[0.07em] uppercase px-3 py-1 rounded-full mb-6">
            {pill}
          </div>
        )}
        <h1
          className="font-display font-extrabold text-white leading-[1.05] tracking-tight max-w-[720px] mb-5"
          style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
          dangerouslySetInnerHTML={{ __html: headline }}
        />
        {subheadline && (
          <p className="text-[1rem] text-white/[0.58] max-w-[520px] leading-[1.78] font-light">
            {subheadline}
          </p>
        )}
      </div>
    </section>
  );
}