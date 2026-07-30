"use client";

import { ServicesBento } from "@/components/sections/ServicesBento";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ServicesThreeStack } from "@/components/sections/ServicesThreeStack";
import { motion } from "framer-motion";
const PARTNERS = [
    {
        name: "Amaze Property Management Solutions Pvt Ltd",
        services: "PMS Services, Housekeeping, MEP, Gardening, Pest Control Services",
        color: "from-brand-dark to-brand",
    },
    {
        name: "Action & Protection Security Force",
        services: "Security Services, Fire Training, Escort Services, Event Security, Help Desk Services",
        color: "from-slate-800 to-slate-600",
    },
    {
        name: "Action Facility Services Pvt Ltd",
        services: "Home Services, Deep Cleaning Services, Support Staff, Project Cleaning, Sofa, Carpet Cleaning Services",
        color: "from-emerald-700 to-emerald-500",
    }
];
export default function ServicesPage() {
    return (<main className="pt-0">
      {/* 3D WebGL Hero Stack (Replaces Carousel & Bento in Hero) */}
      <ServicesThreeStack />

      <ServicesBento />

      {/* Service Partners */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading badge="Our Network" title="Our Service" titleHighlight="Partners" align="center" className="mb-16"/>
          
          <div className="grid md:grid-cols-3 gap-8">
            {PARTNERS.map((partner, i) => (<motion.div key={i} 
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative p-8 rounded-3xl border border-border glass overflow-hidden group">
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${partner.color}`}/>
                <h3 className="text-xl font-bold mb-4 mt-2 group-hover:text-brand transition-colors">{partner.name}</h3>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  {partner.services}
                </p>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground bg-surface-elevated inline-block px-3 py-1 rounded-full border border-border">
                  Action Group
                </div>
              </motion.div>))}
          </div>
        </div>
      </section>
      <CtaBanner />
    </main>);
}
