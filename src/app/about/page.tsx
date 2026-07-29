import type { Metadata } from "next";
import { About as AboutHero } from "@/components/sections/About";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { 
  Shield, Target, Heart, CheckCircle2, Award, Users, 
  Building2, Cpu, UserCheck, ShieldAlert, Sparkles, ArrowRight
} from "lucide-react";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us | Amaze Property Management",
  description:
    "Learn about Amaze PMS Pvt Ltd, a division of Action Group founded in 2001 by Indian Navy Veteran Mr. Subhani Abdul. Managing 20M+ sq. ft. across India with 15,000+ professionals.",
};

const SEGMENTS = [
  "Corporate Offices / IT Parks",
  "Infrastructure & Construction",
  "Educational Institutions",
  "Residential Communities",
  "Hotels & Luxury Resorts",
  "Hospitals & Healthcare",
  "Industrial Facilities",
  "Malls & Retail Stores",
  "Manufacturing Units",
  "Special Event Security",
  "Logistics & Warehouses",
  "Pharma & Cleanrooms",
];

const TIMELINE = [
  {
    year: "2001",
    title: "Foundation of Action Group",
    description: "Founded by Mr. Subhani Abdul, an Indian Navy Veteran & Certified Security Practitioner, starting with specialized guarding services.",
  },
  {
    year: "2008",
    title: "Launch of Amaze PMS",
    description: "Expanded into comprehensive facility management, housekeeping, and MEP services for commercial real estate.",
  },
  {
    year: "2015",
    title: "PAN-India Expansion",
    description: "Established operational hubs across major metro cities, reaching over 10,000+ active workforce and 150+ corporate clients.",
  },
  {
    year: "Present",
    title: "Industry Leader",
    description: "Managing over 20 Million sq. ft. with 15,000+ trained professionals and 200+ top-tier enterprise clients across India.",
  },
];

const DIFFERENTIATORS = [
  {
    icon: UserCheck,
    title: "100% In-House Staff",
    description: "Zero third-party vendor dependency. All 15,000+ professionals are directly hired, background-verified, and trained.",
  },
  {
    icon: Cpu,
    title: "Tech-Enabled PMS Operations",
    description: "Real-time attendance, digital task audits, and centralized ticketing apps for total transparency and efficiency.",
  },
  {
    icon: ShieldAlert,
    title: "Navy-Grade Security Discipline",
    description: "Spearheaded by defense veterans, ensuring unmatched discipline, emergency protocols, and 24/7 rapid response.",
  },
  {
    icon: Sparkles,
    title: "Eco-Friendly & Sustainable",
    description: "Use of green chemical cleaning agents, energy-efficient MEP practices, and sustainable STP/WTP water treatment.",
  },
];

export default function AboutPage() {
  return (
    <main className="pt-20">
      <AboutHero />

      {/* Core Principles: Mission, Vision, Values */}
      <section className="py-24 bg-surface-elevated relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(var(--grid-line-color)_1px,transparent_1px),linear-gradient(90deg,var(--grid-line-color)_1px,transparent_1px)] bg-[size:64px_64px] opacity-40" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading badge="Core Principles" title="Our Vision &" titleHighlight="Mission" align="center" className="mb-16" />
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl glass border border-border hover:border-brand/30 hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center mb-6 text-brand group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Our Mission</h3>
              <p className="text-muted text-sm leading-relaxed">
                To be a leading provider of comprehensive property management solutions in PAN INDIA. We are committed to delivering exceptional services that exceed our clients' expectations, while prioritizing technology, sustainability, and employee well-being.
              </p>
            </div>
            
            <div className="p-8 rounded-3xl glass border border-border hover:border-brand/30 hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center mb-6 text-brand group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Our Vision</h3>
              <p className="text-muted text-sm leading-relaxed">
                To transform the property management industry by setting new standards of excellence and innovation. We strive to be recognized for reliable, cost-effective, and sustainable services, furthering Atmanirbhar Bharat.
              </p>
            </div>
            
            <div className="p-8 rounded-3xl glass border border-border hover:border-brand/30 hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center mb-6 text-brand group-hover:scale-110 transition-transform">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Our Values</h3>
              <p className="text-muted text-sm leading-relaxed">
                Integrity, discipline, operational excellence, and customer-first commitment. We adhere to the highest ethical standards, ensuring transparent execution across all facility operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Profile */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="p-8 md:p-12 rounded-3xl border border-border bg-surface-glass backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full p-2 bg-gradient-to-tr from-brand to-brand-light">
                  <div className="w-full h-full rounded-full bg-surface-elevated flex flex-col items-center justify-center p-6 text-center shadow-inner">
                    <Award className="w-12 h-12 text-brand mb-2" />
                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Leadership</span>
                    <span className="text-lg font-bold text-foreground mt-1">Defense Excellence</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface-glass mb-4">
                  <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted">Founder & Visionary</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Mr. Subhani Abdul
                </h2>
                <p className="text-sm font-semibold text-brand mb-4">
                  Founder & Managing Director — Action Group of Companies
                </p>
                <p className="text-muted leading-relaxed text-sm md:text-base mb-6">
                  An Indian Navy Veteran and Certified Security Practitioner, Mr. Subhani Abdul established Action Group in 2001 with a vision to revolutionize the security and facility management landscape in India. Under his leadership, Amaze PMS has grown into a powerhouse with 15,000+ professionals managing over 20 Million sq. ft. of prime real estate.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="px-4 py-2 rounded-xl bg-surface border border-border text-xs font-medium text-foreground">
                    🎖️ Indian Navy Veteran
                  </div>
                  <div className="px-4 py-2 rounded-xl bg-surface border border-border text-xs font-medium text-foreground">
                    🛡️ Certified Security Practitioner
                  </div>
                  <div className="px-4 py-2 rounded-xl bg-surface border border-border text-xs font-medium text-foreground">
                    🏢 23+ Years Industry Leadership
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Differentiators */}
      <section className="py-24 bg-surface-elevated relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading 
            badge="Why Choose Amaze" 
            title="What Sets Us" 
            titleHighlight="Apart" 
            align="center" 
            className="mb-16" 
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DIFFERENTIATORS.map((diff, i) => (
              <div key={i} className="p-6 rounded-2xl border border-border bg-surface hover:bg-surface-glass hover:border-brand/40 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center mb-5 text-brand">
                  <diff.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{diff.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{diff.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading 
            badge="Our Journey" 
            title="Two Decades of" 
            titleHighlight="Growth" 
            align="center" 
            className="mb-16" 
          />

          <div className="grid md:grid-cols-4 gap-6">
            {TIMELINE.map((item, index) => (
              <div key={index} className="relative p-6 rounded-2xl border border-border bg-surface-glass flex flex-col justify-between">
                <div className="text-3xl font-extrabold text-gradient-brand mb-4">{item.year}</div>
                <div>
                  <h4 className="text-base font-bold text-foreground mb-2">{item.title}</h4>
                  <p className="text-xs text-muted leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Segments We Cater To */}
      <section className="py-24 relative bg-surface-elevated overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading badge="Industries Served" title="Segments We" titleHighlight="Cater To" align="left" className="mb-12" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {SEGMENTS.map((segment) => (
              <div key={segment} className="flex items-center gap-3 p-4 rounded-xl border border-border bg-surface hover:bg-surface-glass hover:border-brand/30 transition-all duration-300 group cursor-default">
                <CheckCircle2 className="w-5 h-5 text-brand shrink-0" />
                <span className="text-sm font-medium text-foreground/90 group-hover:text-foreground transition-colors">{segment}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </main>
  );
}
