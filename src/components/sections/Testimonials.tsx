"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/constants";
import { Quote } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/3 rounded-full blur-[150px] pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading badge="Testimonials" title="What Our Clients" titleHighlight="Say About Us" description="Hear from the organizations that trust Amaze PMS to manage their most valuable assets." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div key={testimonial.name} className="relative p-7 rounded-2xl border border-border bg-surface-glass hover:border-brand/20 transition-all duration-500 group" custom={i} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Quote className="w-8 h-8 text-brand/20 mb-4 group-hover:text-brand/40 transition-colors duration-300" />
              <p className="text-sm text-muted leading-relaxed mb-6">{testimonial.content}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand to-brand-dark flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{testimonial.avatar}</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-xs text-muted">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
