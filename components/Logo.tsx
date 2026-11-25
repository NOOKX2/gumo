import { BRAND } from "@/lib/brand";

export function Logo({
  className = "",
  variant = "mark",
  priority = false,
}: {
  className?: string;
  variant?: "mark" | "wordmark" | "cream";
  priority?: boolean;
}) {
  const src =
    variant === "cream"
      ? BRAND.wordmarkCream
      : variant === "wordmark"
        ? BRAND.wordmarkSvg
        : BRAND.markSvg;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt="GUMO"
      className={`h-full w-full object-contain object-left ${className}`}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      draggable={false}
    />
  );
}
