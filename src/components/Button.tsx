import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-brand-400/60 focus:ring-offset-2 focus:ring-offset-slate-950";

const variants: Record<Variant, string> = {
  primary: "bg-brand-500 text-white hover:bg-brand-400",
  secondary: "bg-white/10 text-white hover:bg-white/15",
  ghost: "bg-transparent text-slate-200 hover:bg-white/10"
};

export function Button({
  variant = "primary",
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; children: ReactNode }) {
  return (
    <button className={[base, variants[variant], className].filter(Boolean).join(" ")} {...props}>
      {children}
    </button>
  );
}

export function LinkButton({
  variant = "secondary",
  children,
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant; children: ReactNode }) {
  return (
    <a className={[base, variants[variant], className].filter(Boolean).join(" ")} {...props}>
      {children}
    </a>
  );
}

