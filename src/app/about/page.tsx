import type { Metadata } from "next";
import { About as AboutHero } from "@/components/sections/About";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Shield, Target, Heart, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Amaze Property Management",
  description:
    "Learn about Amaze PMS Pvt Ltd, a division of Action Group founded in 2001, managing 20M+ sq. ft. across India with 15,000+ professionals.",
};

const SEGMENTS = [
  "Corporate Offices / Commercial and IT Parks",
  "Infrastructure and Construction Sites",
  "Educational Institutions",
  "Residential Communities",
  "Hotels and Hospitals",
  "Industries",
  "Malls, Multiplex's and Retail Stores",
  "Manufacturing Units",
  "Special Events",
  "Ware Houses",
  "Pharma",
];

export default function AboutPage() {
  return (
    <main className="pt-20">
      <AboutHero />
      
      {/* Mission, Vision, Values */}
      <section className="py-24 bg-surface-elevated relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(var(--grid-line-color)_1px,transparent_1px),linear-gradient(90deg,var(--grid-line-color)_1px,transparent_1px)] bg-[size:64px_64px] opacity-50" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading badge="Core Principles" title="Our Vision &" titleHighlight="Mission" align="center" className="mb-16" />
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl glass hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-brand" />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted text-sm leading-relaxed">
                To be a leading provider of comprehensive property management solutions in PAN INDIA. We are committed to delivering exceptional services that exceed our clients expectations, while prioritizing technology, sustainability, and the well being of our employees.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl glass hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-brand" />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted text-sm leading-relaxed">
                To transform the property management industry by setting new standards of excellence and innovation. We strive to be recognised for reliable, cost effective, and sustainable services, aiming to enhance the value we bring to our clients business (ATHMA NIRBHAR BHARATH).
              </p>
            </div>
            
            <div className="p-8 rounded-2xl glass hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-brand" />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Values</h3>
              <p className="text-muted text-sm leading-relaxed">
                Our Core Values include respect, integrity, excellence, sustainability, and customer focus. We are committed to conducting business with the highest ethical standards, delivering excellence, promoting sustainability, and prioritizing the needs and satisfaction of our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Segments We Cater To */}
      <section className="py-24 relative bg-background overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading badge="Industries" title="Segments We" titleHighlight="Cater To" align="left" className="mb-12" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {SEGMENTS.map((segment) => (
              <div key={segment} className="flex items-start gap-3 p-4 rounded-xl border border-border bg-surface hover:bg-surface-elevated hover:border-brand/30 transition-all duration-300 group cursor-default">
                <CheckCircle2 className="w-5 h-5 text-muted group-hover:text-brand transition-colors shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">{segment}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
