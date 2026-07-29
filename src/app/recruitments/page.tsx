"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { Search, ShieldCheck, GraduationCap, ClipboardCheck } from "lucide-react";

const STAGES = [
  {
    title: "STAGE - 1: Initiation",
    content: ["Getting connected with the client", "Understanding the client requirement", "Site Survey & studying the existing processes", "Submission of service & commercial proposal"],
  },
  {
    title: "STAGE - 2: Planning & Contracting",
    content: ["Contract confirmation by the client", "Resource planning, recruitment & training", "Preparation of site specific SOP's", "Finalizing the service agreement"],
  },
  {
    title: "STAGE - 3: Deployment",
    content: ["Deployment of contract start up team", "Parallel deployment of security force", "Taking over from the existing service provider", "Supervision and co-ordination by field staff"],
  },
  {
    title: "STAGE - 4: Operations & Review",
    content: ["Close monitoring by the operations team", "Review of security posture & procedures", "Site specific training", "Feedback & Suggestions from client"],
  }
];

export default function RecruitmentsPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-24 sm:py-32 bg-surface relative overflow-hidden hero-gradient">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gradient">Our Recruitment & </span>
            <span className="text-gradient-brand">Deployment Strategy</span>
          </motion.h1>
          <motion.p 
            className="text-muted text-lg leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            We ensure the highest quality of service through rigorous manpower sourcing, strict background verification under expert supervision, and continuous skill development.
          </motion.p>
        </div>
      </section>

      {/* Core Strategies */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl glass border border-border group hover:border-brand/30 transition-all duration-300">
              <Search className="w-8 h-8 text-brand mb-4" />
              <h3 className="text-lg font-bold mb-3">Manpower Sourcing</h3>
              <p className="text-sm text-muted">Dedicated regional teams across PAN India, Job Melas, and strong employee referral networks ensure a continuous stream of talent.</p>
            </div>
            <div className="p-6 rounded-2xl glass border border-border group hover:border-brand/30 transition-all duration-300">
              <ShieldCheck className="w-8 h-8 text-brand mb-4" />
              <h3 className="text-lg font-bold mb-3">Background Verification</h3>
              <p className="text-sm text-muted">Strict antecedent verification carried out by our in-house background check team under the supervision of a retired police officer.</p>
            </div>
            <div className="p-6 rounded-2xl glass border border-border group hover:border-brand/30 transition-all duration-300">
              <GraduationCap className="w-8 h-8 text-brand mb-4" />
              <h3 className="text-lg font-bold mb-3">Skill Development</h3>
              <p className="text-sm text-muted">Affiliated with NSDC. Comprehensive training for Security, MEP, and Housekeeping at our corporate and branch facilities.</p>
            </div>
            <div className="p-6 rounded-2xl glass border border-border group hover:border-brand/30 transition-all duration-300">
              <ClipboardCheck className="w-8 h-8 text-brand mb-4" />
              <h3 className="text-lg font-bold mb-3">Regular Audits</h3>
              <p className="text-sm text-muted">MMR, QBR, Bi-Annual, and Annual audits covering Security, Engineering, Soft Services, EHS, and Safety protocols.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Functional Approach Timeline */}
      <section className="py-24 bg-surface-elevated relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <SectionHeading badge="Methodology" title="Our Functional" titleHighlight="Approach" align="center" className="mb-20" />
          
          <div className="relative border-l-2 border-border ml-4 md:ml-1/2 md:border-l-0">
            {/* Desktop Center Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
            
            {STAGES.map((stage, index) => (
              <motion.div 
                key={stage.title}
                className={`relative flex items-center justify-between md:justify-normal w-full mb-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-brand ring-4 ring-background z-10 glow" />
                
                {/* Content Card */}
                <div className="w-[calc(100%-2rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl glass ml-8 md:ml-0 hover:bg-surface transition-colors duration-300">
                  <h4 className="text-lg font-bold text-brand-light mb-4">{stage.title}</h4>
                  <ul className="space-y-3">
                    {stage.content.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2 shrink-0" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
