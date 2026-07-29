"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ALL_SERVICES_EXTENDED } from "@/constants";
import * as LucideIcons from "lucide-react";

const gradients = [
  "from-blue-500/20 to-indigo-500/20",
  "from-emerald-500/20 to-teal-500/20",
  "from-violet-500/20 to-purple-500/20",
  "from-amber-500/20 to-orange-500/20",
  "from-rose-500/20 to-pink-500/20",
  "from-cyan-500/20 to-blue-500/20",
];

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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {ALL_SERVICES_EXTENDED.map((service, index) => {
            const Icon = (LucideIcons as any)[service.icon] || LucideIcons.CheckCircle;
            const gradient = gradients[index % gradients.length];
            // Assign col-span-2 to a few strategic items to maintain the bento feel
            const span = (index === 0 || index === 7 || index === 14) ? "sm:col-span-2" : "";

            return (
              <motion.div
                key={service.title}
                className={`group relative rounded-2xl border border-border bg-surface-glass p-6 sm:p-8 overflow-hidden transition-all duration-500 hover:border-brand/20 hover:shadow-xl hover:shadow-brand/5 ${span}`}
                variants={cardVariants}
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
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
