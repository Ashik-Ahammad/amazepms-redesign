"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
export function Card({ className, variant = "glass", hover = true, glow = false, children, ...props }) {
    const variantStyles = {
        glass: "glass",
        solid: "bg-surface-elevated border border-border",
        gradient: "bg-gradient-to-br from-surface-elevated to-surface border border-border",
    };
    return (<motion.div className={cn("rounded-2xl p-6 relative overflow-hidden", variantStyles[variant], hover && "transition-all duration-500 hover:border-border-light hover:shadow-lg hover:shadow-brand/5", glow && "glow", className)} whileHover={hover ? { y: -4, transition: { duration: 0.3 } } : undefined} {...props}>
      {children}
    </motion.div>);
}
