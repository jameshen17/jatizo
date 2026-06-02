type SectionHeadingProps = {
  title: string;
  intro?: string;
  align?: "left" | "center";
};

export function SectionHeading({ title, intro, align = "left" }: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-2xl space-y-4 ${alignment}`}>
      <p className="text-sm uppercase tracking-[0.24em] text-stone">{title}</p>
      {intro ? <p className="max-w-2xl text-lg leading-8 text-stone sm:text-xl">{intro}</p> : null}
    </div>
  );
}
