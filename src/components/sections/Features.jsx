"use client";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BarChart3, Users, ClipboardCheck, ShieldCheck, HeartHandshake, Cog, TrendingUp, Building, } from "lucide-react";
const features = [
    { icon: BarChart3, title: "20M+ Sq. Ft. Managed", description: "Managing an area of more than 20 million sq. ft. across different portfolios with precision and expertise." },
    { icon: Users, title: "All Services In-House", description: "Complete control over quality—all services are delivered in-house by our trained 15,000+ workforce." },
    { icon: ClipboardCheck, title: "Site-Specific SOPs", description: "Customized Standard Operating Procedures and checklists tailored for each client's unique requirements." },
    { icon: ShieldCheck, title: "Risk Assessment", description: "Comprehensive risk assessment of equipment and operations with recommended measures for continuous improvement." },
    { icon: HeartHandshake, title: "Staff Welfare Programs", description: "Festival celebrations, insurance coverage, performance rewards, and compensation programs to retain top talent." },
    { icon: Cog, title: "Regular Audits & Reports", description: "Internal teams audit each site regularly and propose improvement plans to reduce costs and enhance efficiency." },
    { icon: TrendingUp, title: "AMC Tracking", description: "Proactive Annual Maintenance Contract tracking and negotiation, ensuring equipment longevity and cost savings." },
    { icon: Building, title: "Government Liaison", description: "Seamless coordination with government agencies and regulatory bodies for compliance and approvals." },
];
const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.06 } } };
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};
export function Features() {
    return (<section id="why-us" className="relative py-24 sm:py-32 bg-surface overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-brand/5 rounded-full blur-[120px] pointer-events-none"/>
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading badge="Our Strength" title="Why Choose" titleHighlight="Amaze PMS?" description="With over two decades of operational excellence, we bring unmatched expertise, workforce, and commitment to every property we manage."/>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
          {features.map((feature) => (<motion.div key={feature.title} className="group relative p-6 rounded-2xl border border-border bg-background hover:bg-surface-glass hover:border-brand/15 transition-all duration-500" variants={itemVariants}>
              <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center mb-4 group-hover:bg-brand/15 transition-colors duration-300">
                <feature.icon className="w-5 h-5 text-brand-light"/>
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-2 tracking-tight">{feature.title}</h3>
              <p className="text-xs text-muted leading-relaxed">{feature.description}</p>
            </motion.div>))}
        </motion.div>
      </div>
    </section>);
}
