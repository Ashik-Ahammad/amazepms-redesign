"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { Building2 } from "lucide-react";

// Generate placeholder clients for the marquee
const CLIENTS = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  name: `Enterprise Client ${i + 1}`,
}));

export default function ClientsPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 sm:py-32 bg-surface relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center relative z-10">
          <SectionHeading badge="Our Network" title="Trusted by" titleHighlight="300+ Clients" align="center" className="mb-6" />
          <motion.p 
            className="text-muted text-lg leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            We are proud to partner with leading organizations across PAN India, delivering exceptional property management solutions tailored to diverse industries.
          </motion.p>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-24 bg-background overflow-hidden border-y border-border">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">A Glimpse of Our Partners</span>
        </div>
        
        {/* Row 1: Left to Right */}
        <div className="mb-8">
          <Marquee gradient={false} speed={40} direction="left" autoFill>
            {CLIENTS.map((client) => (
              <div key={`row1-${client.id}`} className="mx-4 sm:mx-8 px-8 py-6 flex items-center justify-center gap-3 rounded-2xl border border-border bg-surface-elevated/50 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 min-w-[250px]">
                <Building2 className="w-8 h-8 text-brand/60" />
                <span className="font-bold text-foreground/80">{client.name}</span>
              </div>
            ))}
          </Marquee>
        </div>

        {/* Row 2: Right to Left */}
        <div>
          <Marquee gradient={false} speed={35} direction="right" autoFill>
            {CLIENTS.map((client) => (
              <div key={`row2-${client.id}`} className="mx-4 sm:mx-8 px-8 py-6 flex items-center justify-center gap-3 rounded-2xl border border-border bg-surface-elevated/50 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 min-w-[250px]">
                <Building2 className="w-8 h-8 text-brand-light/60" />
                <span className="font-bold text-foreground/80">{client.name}</span>
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      {/* Stats Callout */}
      <section className="py-32 bg-surface-elevated relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-brand-dark via-brand to-brand-light text-white shadow-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to upgrade your facility?</h2>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Join hundreds of satisfied enterprises relying on our integrated management solutions.
            </p>
            <button className="px-8 py-4 rounded-full bg-white text-brand-dark font-bold hover:scale-105 transition-transform duration-300">
              Contact Us Today
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
