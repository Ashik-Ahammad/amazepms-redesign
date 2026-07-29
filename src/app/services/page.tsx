import type { Metadata } from "next";
import { ServicesBento } from "@/components/sections/ServicesBento";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Building2, Shield, Wrench, Sparkles, Sprout, Briefcase, Droplets } from "lucide-react";

export const metadata: Metadata = {
  title: "Integrated Services | Amaze Property Management",
  description:
    "Explore our facility management, security, housekeeping, pest control, horticulture, MEP, swimming pool, and fire safety services.",
};

const ADDITIONAL_SERVICES = [
  { name: "Pest Control", icon: Shield },
  { name: "Help Desk Management", icon: Briefcase },
  { name: "Gardening & Horticulture", icon: Sprout },
  { name: "Swimming Pool Maintenance", icon: Droplets },
  { name: "Club House Management", icon: Building2 },
  { name: "Facade Cleaning", icon: Sparkles },
  { name: "Tenant Management", icon: Building2 },
  { name: "Home & Office Repairs", icon: Wrench },
  { name: "Events and Promotions", icon: Briefcase },
  { name: "Payroll Management", icon: Briefcase },
  { name: "Parking Management", icon: Building2 },
];

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
  return (
    <main className="pt-20">
      <ServicesBento />

      {/* Comprehensive Services List */}
      <section className="py-24 bg-surface relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/3 rounded-full blur-[120px] pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <SectionHeading badge="Comprehensive Portfolio" title="More Services We" titleHighlight="Offer" align="left" className="mb-12" />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {ADDITIONAL_SERVICES.map((service, i) => (
              <div key={i} className="flex flex-col p-6 rounded-2xl border border-border bg-background hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-md">
                <service.icon className="w-8 h-8 text-brand mb-4 opacity-80" />
                <span className="text-sm font-semibold text-foreground">{service.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Partners */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading badge="Our Network" title="Our Service" titleHighlight="Partners" align="center" className="mb-16" />
          
          <div className="grid md:grid-cols-3 gap-8">
            {PARTNERS.map((partner, i) => (
              <div key={i} className="relative p-8 rounded-3xl border border-border glass overflow-hidden group">
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${partner.color}`} />
                <h3 className="text-xl font-bold mb-4 mt-2 group-hover:text-brand transition-colors">{partner.name}</h3>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  {partner.services}
                </p>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground bg-surface-elevated inline-block px-3 py-1 rounded-full border border-border">
                  Action Group
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
