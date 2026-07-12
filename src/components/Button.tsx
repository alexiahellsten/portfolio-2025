import { forwardRef } from "react";
import { Link, type LinkProps } from "react-router-dom";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Variant = "primary" | "secondary" | "ghost" | "nav" | "icon";

const baseClasses =
  "inline-flex items-center justify-center rounded-full text-sm font-medium " +
  "transition-colors focus:outline-none focus-visible:ring-2 " +
  "focus-visible:ring-accent-cta focus-visible:ring-offset-2 " +
  "focus-visible:ring-offset-brand-bg disabled:opacity-50 disabled:pointer-events-none";

const variantClasses: Record<Variant, string> = {
  primary: "bg-accent-cta text-black border border-transparent px-5 py-2.5",
  secondary:
    "bg-transparent text-brand-fg border border-brand-border px-5 py-2.5",
  ghost: "bg-transparent text-brand-fg border border-transparent px-5 py-2.5",
  nav: "bg-transparent text-brand-muted border border-transparent px-4 py-2",
  icon: "bg-transparent text-brand-fg border border-transparent h-10 w-10 shrink-0 p-0",
};

function getClasses(variant: Variant, className?: string) {
  return twMerge(baseClasses, variantClasses[variant], className);
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  children: ReactNode;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className, children, ...rest }, ref) => (
    <button ref={ref} className={getClasses(variant, className)} {...rest}>
      {children}
    </button>
  ),
);
Button.displayName = "Button";

type ButtonLinkProps = Omit<LinkProps, "className"> & {
  variant?: Variant;
  children: ReactNode;
  className?: string;
};

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ variant = "primary", className, children, ...rest }, ref) => (
    <Link ref={ref} className={getClasses(variant, className)} {...rest}>
      {children}
    </Link>
  ),
);
ButtonLink.displayName = "ButtonLink";
