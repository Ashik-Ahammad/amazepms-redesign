"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps extends Omit<HTMLMotionProps<"div">, "ref" | "children"> {
  children?: React.ReactNode;
  variant?: "glass" | "solid" | "gradient";
  hover?: boolean;
  glow?: boolean;
}

export function Card({
  className,
  variant = "glass",
  hover = true,
  glow = false,
  children,
  ...props
}: CardProps) {
  const variantStyles = {
    glass: "glass",
    solid: "bg-surface-elevated border border-border",
    gradient: "bg-gradient-to-br from-surface-elevated to-surface border border-border",
  };

  return (
    <motion.div
      className={cn(
        "rounded-2xl p-6 relative overflow-hidden",
        variantStyles[variant],
        hover && "transition-all duration-500 hover:border-border-light hover:shadow-lg hover:shadow-brand/5",
        glow && "glow",
        className
      )}
      whileHover={hover ? { y: -4, transition: { duration: 0.3 } } : undefined}
      {...props}
    >
      {children}
    </motion.div>
  );
}
