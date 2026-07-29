"use client";

import { forwardRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref" | "children"> {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  icon?: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand text-white hover:bg-brand-light glow relative overflow-hidden",
  secondary:
    "bg-surface-elevated text-foreground border border-border hover:border-border-light hover:bg-white/5",
  ghost: "text-muted hover:text-foreground hover:bg-white/5",
  outline:
    "border border-border-light text-foreground hover:bg-brand/10 hover:border-brand/30",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", icon, children, href, ...props }, ref) => {
    const classes = cn(
      "group inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 cursor-pointer select-none hover:scale-[1.03] active:scale-[0.97]",
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    const content = (
      <div className="relative overflow-hidden flex items-center justify-center">
        <span className="flex items-center gap-2 transform transition-transform duration-[600ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-[150%]">
          {icon}
          {children}
        </span>
        <span className="absolute inset-0 flex items-center justify-center gap-2 transform transition-transform duration-[600ms] ease-[cubic-bezier(0.19,1,0.22,1)] translate-y-[150%] group-hover:translate-y-0">
          {icon}
          {children}
        </span>
      </div>
    );

    if (href) {
      const isAnchor = href.startsWith("#");
      
      if (isAnchor) {
        return (
          <a href={href} className={classes}>
            {content}
            {variant === "primary" && (
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 pointer-events-none" />
            )}
          </a>
        );
      }

      return (
        <Link href={href} className={classes}>
          {content}
          {variant === "primary" && (
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 pointer-events-none" />
          )}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={classes}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
