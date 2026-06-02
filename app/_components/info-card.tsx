type InfoCardProps = {
  title: string;
  text: string;
  tone?: "default" | "tinted" | "dark";
  eyebrow?: string;
  stat?: string;
  className?: string;
};

export function InfoCard({
  title,
  text,
  tone = "default",
  eyebrow,
  stat,
  className = ""
}: InfoCardProps) {
  const toneClass =
    tone === "dark"
      ? "border-white/10 bg-charcoal text-white shadow-glow"
      : tone === "tinted"
        ? "border-accent/20 bg-paperAlt/90"
        : "border-line/90 bg-paper/95";

  const textClass = tone === "dark" ? "text-white/72" : "text-stone";
  const titleClass = tone === "dark" ? "text-white" : "text-ink";
  const eyebrowClass = tone === "dark" ? "text-white/60" : "text-stone";
  const statClass = tone === "dark" ? "text-white" : "text-ink";
  const titleSpacingClass = stat || eyebrow ? "mt-4" : "";

  return (
    <article
      className={`rounded-[1.6rem] border p-7 shadow-card transition duration-300 hover:-translate-y-1 ${toneClass} ${className}`.trim()}
    >
      {eyebrow ? <p className={`text-xs uppercase tracking-[0.22em] ${eyebrowClass}`}>{eyebrow}</p> : null}
      {stat ? <p className={`mt-4 text-3xl font-semibold tracking-tight ${statClass}`}>{stat}</p> : null}
      <h3 className={`${titleSpacingClass} text-xl font-medium tracking-tight ${titleClass}`.trim()}>{title}</h3>
      <p className={`mt-4 text-base leading-7 ${textClass}`}>{text}</p>
    </article>
  );
}
