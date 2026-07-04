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
      aria-label={label}
      className={`relative overflow-hidden ${
        framed ? `border-2 ${isDark ? "border-bone/20" : "border-ink/15"}` : ""
      } ${isDark ? "bg-ink text-bone" : "bg-parchment text-ink"} ${className}`}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: isDark
            ? "radial-gradient(circle at 28% 28%, oklch(0.82 0.17 78 / 0.52), transparent 22%), radial-gradient(circle at 70% 42%, oklch(0.48 0.18 25 / 0.52), transparent 30%), linear-gradient(150deg, oklch(0.15 0.03 45) 0%, oklch(0.21 0.05 35) 48%, oklch(0.08 0.02 35) 100%)"
            : "radial-gradient(circle at 30% 22%, oklch(0.86 0.16 80 / 0.62), transparent 24%), radial-gradient(circle at 76% 36%, oklch(0.55 0.16 24 / 0.3), transparent 30%), linear-gradient(145deg, oklch(0.88 0.04 78) 0%, oklch(0.74 0.07 70) 48%, oklch(0.37 0.05 45) 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-55"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent 0 34px, oklch(0.95 0.02 80 / 0.08) 34px 35px), repeating-linear-gradient(0deg, transparent 0 44px, oklch(0.1 0.02 40 / 0.08) 44px 45px)",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/60 to-transparent" />
      <div className="absolute left-5 top-5 h-2 w-16 bg-amber-neon/80 shadow-[0_0_24px_oklch(0.82_0.17_78_/_0.8)]" />
      <div className="absolute bottom-5 right-5 h-20 w-20 border-b-2 border-r-2 border-bone/35" />
    </div>
  );
}
