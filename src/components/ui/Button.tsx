import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "tiffany" | "violet" | "outline" | "danger";
type Size = "sm" | "md" | "lg";

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variantClasses: Record<Variant, string> = {
  primary: "bg-primary text-white hover:bg-primary-shade border-primary",
  secondary: "bg-secondary text-white hover:bg-secondary-shade border-secondary",
  tiffany: "bg-tiffany text-dark-blue hover:bg-tiffany-tint border-tiffany",
  violet: "bg-violet text-white hover:bg-violet-shade border-violet",
  outline: "bg-transparent text-primary hover:bg-primary-pastel border-primary",
  danger: "bg-danger text-white hover:opacity-90 border-danger",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-base",
  lg: "px-8 py-3 text-lg",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-pill border-2 font-semibold transition disabled:cursor-not-allowed disabled:opacity-50 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
