import Image from "next/image";
import { BRAND } from "@/lib/brand";

export function ProductVisual({
  className = "",
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden ${compact ? "bg-cream-mist" : "bg-transparent"} ${className}`}
      aria-hidden={!compact}
    >
      <div
        className={`relative flex h-full w-full items-center ${
          compact
            ? "justify-center px-2 py-6"
            : "justify-center px-4 py-12 md:translate-x-12 lg:translate-x-16"
        }`}
      >
        <div
          className={`relative ${
            compact
              ? "h-[360px] w-[260px] sm:h-[400px] sm:w-[290px]"
              : "h-[540px] w-[360px] sm:h-[600px] sm:w-[400px] md:h-[680px] md:w-[450px] lg:h-[760px] lg:w-[500px]"
          }`}
        >
          <Image
            src={BRAND.pouch}
            alt={compact ? "GUMO Daily pouch" : ""}
            fill
            priority
            unoptimized
            className="object-contain drop-shadow-[0_28px_48px_rgba(37,60,31,0.22)]"
            sizes="(max-width: 768px) 290px, 500px"
          />
        </div>
      </div>
    </div>
  );
}
