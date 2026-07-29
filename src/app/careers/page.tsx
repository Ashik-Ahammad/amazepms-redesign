"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Briefcase, Mail, MapPin } from "lucide-react";

const OPENINGS = [
  "Facility Manager",
  "Assistant Facility Manager",
  "Operations Manager",
  "Security Officer",
  "Electrician",
  "Field Officer - Technical",
  "Field Officer - Security",
  "Plumber",
  "Carpenter",
  "Gardener",
  "House Keeping Supervisor",
  "House Keeper",
  "Fire & Safety Technicians",
  "Help Desk Executive",
];

export default function CareersPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 sm:py-32 bg-surface relative overflow-hidden hero-gradient">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center relative z-10">
          <SectionHeading badge="Join Our Team" title="Build Your" titleHighlight="Career" align="center" className="mb-6" />
          <motion.p 
            className="text-muted text-lg leading-relaxed max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Take the next step in your career with Amaze. We are always looking for passionate professionals to join our 15,000+ strong workforce across India.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Button variant="primary" size="lg" href="mailto:careers@amazepms.com" icon={<Mail className="w-5 h-5" />}>
              careers@amazepms.com
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Openings Grid */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl font-bold text-foreground">Current Openings</h2>
            <span className="text-sm font-medium text-brand bg-brand/10 px-3 py-1 rounded-full">{OPENINGS.length} Roles Available</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {OPENINGS.map((job, index) => (
              <motion.div 
                key={index}
                className="group flex flex-col p-6 rounded-xl border border-border bg-surface hover:bg-surface-elevated hover:border-brand/40 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-brand/5 flex items-center justify-center group-hover:bg-brand/10 transition-colors">
                    <Briefcase className="w-5 h-5 text-brand" />
                  </div>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider bg-background px-2 py-1 rounded-md border border-border">Full Time</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-brand transition-colors">{job}</h3>
                <div className="flex items-center gap-2 text-sm text-muted">
                  <MapPin className="w-4 h-4" />
                  <span>PAN India</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-surface-elevated border border-border text-center glass">
            <h3 className="text-2xl font-bold text-foreground mb-4">Don't see a fit?</h3>
            <p className="text-muted mb-8 max-w-xl mx-auto">
              We are continually expanding and always open to reviewing talented individuals. Send us your CV anyway and we'll keep it on file.
            </p>
            <Button variant="secondary" href="mailto:careers@amazepms.com" icon={<Mail className="w-5 h-5" />}>
              Submit Open Application
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
