"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Users, Globe, Award } from "lucide-react";
const highlights = [
    {
        icon: Users,
        text: "15,000+ strong workforce across India",
    },
    {
        icon: Globe,
        text: "200+ clients from diverse industries",
    },
    {
        icon: Award,
        text: "Founded in 2001 — over two decades of excellence",
    },
];
export function About() {
    return (<section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-brand/5 blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"/>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div>
            <SectionHeading badge="About Us" title="A Legacy of" titleHighlight="Excellence" align="left" className="mb-8"/>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              <p className="text-muted leading-relaxed mb-5">
                Amaze PMS Pvt Ltd (AMAZE) is a Property Management division of ACTION GROUP of Companies founded in the year 2001 by Mr. Subhani Abdul a veteran from the Indian Navy, a Certified Security Practitioner, and a renowned name in the Service Industry.
              </p>
              <p className="text-muted leading-relaxed mb-8">
                Amaze has its Head Quarters in Cyberabad, Telangana - INDIA, providing Property Management Solutions PAN INDIA, partnering with leading clientele with 15000 + strong strength of professionals. We specialize in offering comprehensive integrated Property Management Services such as Housekeeping, MEP (Mechanical, Electrical, Plumbing), Security, Pest Control, Gardening, STP & WTP, Parking, Swimming Pool Maintenance, office support services, deep cleaning services etc all these services are inhouse.
              </p>
            </motion.div>

            {/* Highlight Pills */}
            <div className="space-y-3">
              {highlights.map((item, i) => (<motion.div key={item.text} className="flex items-center gap-3 p-3 rounded-xl border border-border bg-surface-glass hover:border-brand/20 transition-colors duration-300" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}>
                  <div className="w-9 h-9 rounded-lg bg-brand/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-brand-light"/>
                  </div>
                  <span className="text-sm font-medium text-foreground/90">
                    {item.text}
                  </span>
                </motion.div>))}
            </div>
          </div>

          {/* Right Column - Visual Images */}
          <div className="relative h-[450px] sm:h-[550px] w-full max-w-lg mx-auto lg:max-w-none mt-10 lg:mt-0">
            {/* Decorative Background Element */}
            <div className="absolute -inset-4 sm:-inset-8 border border-border/40 rounded-[3rem] -rotate-6 bg-surface-glass/20 pointer-events-none"/>
            
            {/* Decorative dots top left */}
            <div className="absolute -top-8 -left-8 w-24 h-24 grid grid-cols-4 gap-2 opacity-30 z-0">
              {Array.from({ length: 16 }).map((_, i) => (<div key={i} className="w-1.5 h-1.5 rounded-full bg-brand"/>))}
            </div>

            {/* Image 2 (Logo/Shield - Background/Top Right) */}
            <motion.div className="absolute top-0 right-0 w-[70%] h-[75%] rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] z-0 bg-surface-elevated cursor-pointer" initial={{ opacity: 0, x: 20, y: -20 }} whileInView={{ opacity: 1, x: 0, y: 0 }} whileHover={{ scale: 1.04, zIndex: 20, transition: { duration: 0.5, ease: "easeOut" } }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
              <div className="absolute inset-0 bg-black/10 z-10 hover:bg-transparent transition-colors duration-500 pointer-events-none"/>
              <Image src="/about.png" alt="Action Group Logo" fill className="object-cover saturate-[0.9]" sizes="(max-width: 768px) 100vw, 50vw"/>
            </motion.div>

            {/* Image 1 (Group Photo - Foreground/Bottom Left) */}
            <motion.div className="absolute bottom-0 left-0 w-[70%] h-[75%] rounded-3xl overflow-hidden border border-white/20 shadow-[0_30px_60px_-15px_rgba(79,70,229,0.5)] ring-1 ring-black/5 z-10 cursor-pointer" initial={{ opacity: 0, x: -20, y: 20 }} whileInView={{ opacity: 1, x: 0, y: 0 }} whileHover={{ scale: 1.04, zIndex: 20, transition: { duration: 0.5, ease: "easeOut" } }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}>
              {/* Vignette & Cinematic Overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,rgba(0,0,0,0.6)_100%)] z-10 pointer-events-none opacity-80 hover:opacity-40 transition-opacity duration-500"/>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-brand-light/20 z-10 mix-blend-overlay opacity-50 pointer-events-none"/>
              
              <Image src="/about1.png" alt="Amaze PMS Team" fill className="object-cover contrast-[1.1] saturate-[1.05] brightness-95" sizes="(max-width: 768px) 100vw, 50vw"/>
            </motion.div>

            {/* Decorative dots bottom right */}
            <div className="absolute -bottom-8 -right-8 w-24 h-24 grid grid-cols-4 gap-2 opacity-30 z-0 hidden sm:grid">
              {Array.from({ length: 16 }).map((_, i) => (<div key={i} className="w-1.5 h-1.5 rounded-full bg-brand"/>))}
            </div>
          </div>
        </div>
      </div>
    </section>);
}
