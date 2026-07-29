"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { CheckCircle2, Heart, Shield, TrendingUp, Users } from "lucide-react";

const STRENGTHS = [
  "Managing an area of more than 20 million Sq.ft across different portfolios",
  "All property management and facility services are completely In-house",
  "Immediate availability of back-up staff to handle any emergencies",
  "Yearly training calendars conducted by dedicated Training Officers",
  "Continuous Risk Assessment of Equipment and Operations with recommendations",
  "Internal audits proposing site improvement plans (Power Saving, Manpower Optimization)",
  "Strict adherence to Site-specific SOPs and Checklists for all services",
  "Expert Coordination towards Annual Shutdown Maintenance",
  "Seamless liaison and compliance with Government agencies",
  "Comprehensive Audits: EHS, Security, Technical, Fire & Safety, Process, and Compliance",
  "Efficient AMC Tracking and Negotiations",
];

const WELFARE_BENEFITS = [
  { title: "Diwali Sweets & Festive Gifts", icon: Heart },
  { title: "₹2 Lakhs Health & Life Insurance", icon: Shield },
  { title: "₹10k Funeral Expenses Support", icon: Heart },
  { title: "₹1 Lakh Incident Compensation", icon: Shield },
  { title: "Ranker Students & Staff Rewards (Up to ₹1 Lakh)", icon: TrendingUp },
];

export default function WhyUsPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 sm:py-32 bg-surface relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center relative z-10">
          <SectionHeading badge="The Amaze Advantage" title="Our Core" titleHighlight="Strength" align="center" className="mb-6" />
          <motion.p 
            className="text-muted text-lg leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            With over two decades of excellence, we bring unparalleled scale, in-house expertise, and a deep commitment to our workforce.
          </motion.p>
        </div>
      </section>

      {/* Strengths List */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {STRENGTHS.map((strength, index) => (
              <motion.div 
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-surface-elevated transition-colors duration-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="mt-1 bg-brand/10 p-1.5 rounded-full shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-brand" />
                </div>
                <p className="text-sm font-medium text-foreground/90 leading-relaxed">{strength}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Welfare (Bento Style) */}
      <section className="py-24 bg-surface-elevated relative overflow-hidden">
        <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-96 h-96 bg-brand-glow rounded-full blur-[100px] pointer-events-none opacity-50" />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <SectionHeading badge="Our People First" title="Staff" titleHighlight="Welfare Programs" align="left" className="mb-12" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WELFARE_BENEFITS.map((benefit, index) => (
              <motion.div 
                key={index}
                className="p-6 rounded-2xl glass border border-border group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-6 h-6 text-brand" />
                </div>
                <h4 className="text-lg font-bold text-foreground">{benefit.title}</h4>
              </motion.div>
            ))}
            
            {/* Highlight Card */}
            <motion.div 
              className="p-6 rounded-2xl bg-gradient-to-br from-brand-dark to-brand flex flex-col justify-center sm:col-span-2 lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Users className="w-10 h-10 text-white/80 mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">15,000+ Employees</h4>
              <p className="text-white/80 text-sm">We believe that taking care of our workforce translates directly into superior service for our clients.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
