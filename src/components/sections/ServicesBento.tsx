"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SERVICES } from "@/constants";
import {
  Building2,
  ShieldCheck,
  Sparkles,
  Bug,
  TreePine,
  Wrench,
  Waves,
  Flame,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Building2,
  ShieldCheck,
  Sparkles,
  Bug,
  TreePine,
  Wrench,
  Waves,
  Flame,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export function ServicesBento() {
  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          badge="Our Services"
          title="Integrated Property"
          titleHighlight="Management Solutions"
          description="From security to horticulture, we deliver end-to-end facility management services tailored to your property's unique needs."
        />

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                className={`group relative rounded-2xl border border-border bg-surface-glass p-6 sm:p-8 overflow-hidden transition-all duration-500 hover:border-brand/20 hover:shadow-xl hover:shadow-brand/5 ${
                  service.span || ""
                }`}
                variants={cardVariants}
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-5 group-hover:bg-brand/20 transition-colors duration-300">
                    {Icon && (
                      <Icon className="w-6 h-6 text-brand-light group-hover:text-brand transition-colors duration-300" />
                    )}
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-2 tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-sm text-muted leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover arrow */}
                  <div className="mt-5 flex items-center gap-1 text-xs font-medium text-brand-light opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <span>Learn more</span>
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </div>
                </div>

                {/* Corner decoration */}
                <div className="absolute -bottom-2 -right-2 w-24 h-24 rounded-full bg-brand/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
