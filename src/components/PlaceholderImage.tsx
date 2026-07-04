type PlaceholderImageProps = {
  label: string;
  tone?: "light" | "dark";
  framed?: boolean;
  className?: string;
};

export function PlaceholderImage({
  label,
  tone = "light",
  framed = true,
  className = "",
}: PlaceholderImageProps) {
  const isDark = tone === "dark";

  return (
    <div
      role="img"
      aria-label={`Bildplatzhalter: ${label}`}
      className={`relative flex overflow-hidden ${
        framed ? `border-2 border-dashed ${isDark ? "border-bone/25" : "border-ink/25"}` : ""
      } ${isDark ? "bg-ink text-bone" : "bg-parchment text-ink"} ${className}`}
    >
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: isDark
            ? "linear-gradient(135deg, oklch(0.38 0.14 22 / 0.35), transparent 45%), repeating-linear-gradient(45deg, oklch(0.94 0.02 80 / 0.08) 0 2px, transparent 2px 22px)"
            : "linear-gradient(135deg, oklch(0.82 0.17 78 / 0.24), transparent 42%), repeating-linear-gradient(45deg, oklch(0.14 0.02 40 / 0.08) 0 2px, transparent 2px 22px)",
        }}
      />
      <div className="relative m-auto px-6 py-10 text-center">
        <p
          className={`font-stamp text-xs uppercase tracking-widest ${isDark ? "text-amber-neon" : "text-oxblood"}`}
        >
          Bildplatzhalter
        </p>
        <p className="mt-3 font-display text-5xl uppercase leading-none md:text-6xl">{label}</p>
      </div>
    </div>
  );
}
