"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckCircle2, Users, Globe, Award } from "lucide-react";

const highlights = [
  {
    icon: Users,
    text: "15,000+ strong workforce across India",
  },
  {
    icon: Globe,
    text: "300+ clients from diverse industries",
  },
  {
    icon: Award,
    text: "Founded in 2001 — over two decades of excellence",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-brand/5 blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div>
            <SectionHeading
              badge="About Us"
              title="A Legacy of"
              titleHighlight="Excellence"
              align="left"
              className="mb-8"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-muted leading-relaxed mb-5">
                Amaze PMS Pvt Ltd (AMAZE) is a Property Management division of
                ACTION GROUP of Companies, founded in the year 2001 by Mr.
                Subhash Abdul — a veteran from the Indian Navy, a Certified
                Security Practitioner, and a renowned name in the service
                industry.
              </p>
              <p className="text-muted leading-relaxed mb-8">
                Amaze has its Head Quarters in Hyderabad, Telangana — PAN INDIA,
                providing Property Management Solutions to leading clientele with
                a 15,000+ strong strength of professionals. We specialize in
                offering comprehensive Integrated Property Management Services
                such as Housekeeping, MEP, Horticulture, Security, Pest Control,
                Swimming Pool Maintenance, and more.
              </p>
            </motion.div>

            {/* Highlight Pills */}
            <div className="space-y-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.text}
                  className="flex items-center gap-3 p-3 rounded-xl border border-border bg-surface-glass hover:border-brand/20 transition-colors duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                >
                  <div className="w-9 h-9 rounded-lg bg-brand/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-brand-light" />
                  </div>
                  <span className="text-sm font-medium text-foreground/90">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Abstract geometric composition */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand/10 to-brand-dark/10 border border-border" />

              {/* Floating cards */}
              <motion.div
                className="absolute top-8 left-8 right-8 p-6 rounded-2xl glass"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand to-brand-dark flex items-center justify-center">
                    <span className="text-white font-bold text-sm">AG</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">
                      Action Group
                    </div>
                    <div className="text-xs text-muted">Estd. 2001</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-surface-elevated">
                    <div className="text-lg font-bold text-brand-light">20M+</div>
                    <div className="text-xs text-muted">Sq. ft. Managed</div>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-elevated">
                    <div className="text-lg font-bold text-accent-emerald">PAN</div>
                    <div className="text-xs text-muted">India Presence</div>
                  </div>
                </div>
              </motion.div>

              {/* Check badges */}
              <motion.div
                className="absolute bottom-12 left-8 right-8 p-5 rounded-2xl glass"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  Our Standards
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent-emerald" />
                    <span className="text-sm text-foreground/80">Site-specific SOPs & Checklists</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent-emerald" />
                    <span className="text-sm text-foreground/80">Regular Audits & Reports</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent-emerald" />
                    <span className="text-sm text-foreground/80">Yearly Training Programs</span>
                  </div>
                </div>
              </motion.div>

              {/* Decorative dots */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 grid grid-cols-4 gap-1.5 opacity-20">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-brand" />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
