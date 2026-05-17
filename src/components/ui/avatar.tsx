import Image from "next/image";
import type { ReactNode } from "react";

type Size = 24 | 32 | 40 | 48 | 64 | 80 | 120;

const SIZE: Record<
  Size,
  { box: string; text: string; icon: number; border: string }
> = {
  24: { box: "size-6", text: "text-2xs font-bold", icon: 16, border: "border-2" },
  32: { box: "size-8", text: "text-xs font-semibold", icon: 24, border: "border-2" },
  40: { box: "size-10", text: "text-sm font-semibold", icon: 32, border: "border-2" },
  48: { box: "size-12", text: "text-md font-medium", icon: 32, border: "border-2" },
  64: { box: "size-16", text: "text-xl font-medium", icon: 40, border: "border-2" },
  80: { box: "size-20", text: "text-display-sm font-normal", icon: 56, border: "border-2" },
  120: { box: "size-30", text: "text-display-md font-normal", icon: 80, border: "border-4" },
};

type AvatarProps = {
  size?: Size;
  square?: boolean;
  src?: string;
  alt?: string;
  initials?: string;
  ring?: boolean;
  className?: string;
};

export function Avatar({
  size = 40,
  square = false,
  src,
  alt = "",
  initials,
  ring = false,
  className = "",
}: AvatarProps) {
  const s = SIZE[size];
  const radius = square ? (size === 120 ? "rounded-md" : "rounded-sm") : "rounded-full";
  const ringClass = ring
    ? `outline ${size === 120 ? "outline-2" : "outline-1"} -outline-offset-1 outline-gray-950/20`
    : "";

  const base = `relative inline-flex shrink-0 items-center justify-center overflow-hidden bg-gray-100 border-white ${s.box} ${s.border} ${radius} ${ringClass} ${className}`;

  if (src) {
    return (
      <span className={`${base} bg-white`}>
        <Image src={src} alt={alt} fill sizes={`${size}px`} className="object-cover" />
      </span>
    );
  }

  if (initials) {
    return (
      <span className={base}>
        <span className={`${s.text} text-gray-950 leading-none`}>{initials}</span>
      </span>
    );
  }

  return (
    <span className={base} aria-label={alt || "User"}>
      <UserIcon size={s.icon} />
    </span>
  );
}

function UserIcon({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="text-gray-950"
    >
      <path
        d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
        fill="currentColor"
      />
    </svg>
  );
}

export function AvatarGroup({
  stacked = true,
  children,
  className = "",
}: {
  stacked?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex items-start ${stacked ? "*:not-last:-me-1" : "gap-1"} ${className}`}
    >
      {children}
    </div>
  );
}
