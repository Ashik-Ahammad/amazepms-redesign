"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Building2, Home, ShoppingBag, HeartPulse, 
  PackageSearch, GraduationCap, Factory, Globe2, ArrowUpRight
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import Marquee from "react-fast-marquee";
import { cn } from "@/lib/utils";

// --- Data from Original Website ---
const PIE_DATA = [
  { name: 'Residential', value: 33, color: '#4F46E5' }, // Brand Indigo
  { name: 'Commercial', value: 25, color: '#10B981' }, // Emerald
  { name: 'Corporate', value: 12, color: '#3B82F6' }, // Blue
  { name: 'Others', value: 9, color: '#6366F1' }, // Indigo Light
  { name: 'Education', value: 8, color: '#F59E0B' }, // Amber
  { name: 'Retail', value: 8, color: '#8B5CF6' }, // Violet
  { name: 'Manufacturing', value: 5, color: '#EF4444' }, // Red
];

const CLIENT_CATEGORIES = [
  {
    id: "it-commercial",
    title: "IT & Corporate",
    icon: Building2,
    clients: [
      "L & T Ltd", "Tech Mahindra Ltd", "T Hub", "K Raheja IT Park (P) Ltd", 
      "Divyasree NSL Infrastructure", "Nagarjuna Construction Co", "Brigade Enterprises Ltd", 
      "GAR Corporation", "Value Labs LLP", "SATTVA group", "Aparna Infotech",
      "Meenakshi Infrastructures", "RBS", "TCS", "Infosys", "KPMG", "PWC"
    ]
  },
  {
    id: "residential",
    title: "Residential Properties",
    icon: Home,
    clients: [
      "Lodha Group", "SMR Holdings", "Aparna Constructions", "My Home Group",
      "PBEL City", "Cybercity Builders", "Rajapushpa Properties", "NCL Homes",
      "Ramky Estates", "Prestige Estates", "L&T Serene County", "Vamsiram Builders",
      "Jain Housing", "NCC Urban", "Sattva Knowledge City Residential"
    ]
  },
  {
    id: "retail",
    title: "Malls & Retail",
    icon: ShoppingBag,
    clients: [
      "Nexus Mall", "DSL Virtue Mall", "GVK One", "Inorbit Mall", 
      "Sarath City Capital Mall", "L&T Next Galleria", "Manjeera Mall", 
      "IKEA (Facility Partners)", "Metro Cash & Carry", "Reliance Retail"
    ]
  },
  {
    id: "hospitals",
    title: "Hospitals & Healthcare",
    icon: HeartPulse,
    clients: [
      "Rainbow Children's Hospitals", "Care Hospitals", "Apollo Hospitals", 
      "Yashoda Hospitals", "AIG Hospitals", "KIMS Hospitals", 
      "MaxCure Hospitals", "Medicover", "Omega Hospitals"
    ]
  },
  {
    id: "warehousing",
    title: "Warehousing & Logistics",
    icon: PackageSearch,
    clients: [
      "Amazon FCs", "Flipkart Fulfillment", "Swiggy Instamart Stores", 
      "Gati KWE", "Delhivery Hubs", "Reliance Supply Chain", 
      "BigBasket Warehouses", "BlueDart"
    ]
  },
  {
    id: "education",
    title: "Educational Institutes",
    icon: GraduationCap,
    clients: [
      "Oakridge International School", "Chirec Public School", "Silver Oaks",
      "Delhi Public School (DPS)", "Glendale Academy", "BITS Pilani (Campus Fac)", 
      "ISB Hyderabad (Fac Mgmt)", "Narayana Group", "Sri Chaitanya"
    ]
  },
  {
    id: "manufacturing",
    title: "Manufacturing & Heavy",
    icon: Factory,
    clients: [
      "KLR Industries", "Fine Tubes", "Aurobindo Pharma", "Dr. Reddy's Labs",
      "Bharat Dynamics", "Hetero Drugs", "Asian Paints", "ITC Limited"
    ]
  }
];

export default function ClientsPage() {
  const [activeCategory, setActiveCategory] = useState("it-commercial");

  return (
    <main className="pt-20 bg-background text-foreground selection:bg-brand/30">
      
      {/* 1. Global Trust Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-surface">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand/30 bg-brand/10 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Globe2 className="w-5 h-5 text-brand" />
            <span className="text-sm font-bold uppercase tracking-widest text-brand">Trusted by 100+ Enterprise Partners</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Empowering <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-emerald-500">Industry Leaders</span>
          </motion.h1>
          
          <motion.p 
            className="text-muted text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            From towering IT parks to premium residential enclaves, our world-class facility management and security protocols protect the absolute best.
          </motion.p>
        </div>
      </section>

      {/* 2. Simple Market Share (Recharts) */}
      <section className="py-24 bg-background border-y border-border relative overflow-hidden">
        <motion.div 
          className="mx-auto max-w-7xl px-6 lg:px-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <SectionHeading badge="Market Share" title="Our Footprint" titleHighlight="Across Sectors" align="center" className="mb-16" />
          
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            {/* Left: Simple Pie Chart */}
            <div className="h-[400px] w-full relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={PIE_DATA}
                    cx="50%"
                    cy="50%"
                    innerRadius={90}
                    outerRadius={140}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {PIE_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => [`${value}%`, "Market Share"]}
                    contentStyle={{ backgroundColor: 'hsl(var(--surface))', borderColor: 'hsl(var(--border))', borderRadius: '8px', color: 'hsl(var(--foreground))' }}
                    itemStyle={{ fontWeight: 'bold' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Right: Legend / List */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Sector Breakdown</h3>
              <div className="flex flex-col gap-3">
                {PIE_DATA.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-xl border border-border bg-surface hover:border-brand/30 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="font-semibold text-foreground">{item.name}</span>
                    </div>
                    <span className="font-bold text-lg" style={{ color: item.color }}>{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. Partner Directory (Bento Tabs) */}
      <section className="py-32 bg-surface-elevated relative">
        <motion.div 
          className="mx-auto max-w-7xl px-6 lg:px-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <SectionHeading badge="Client Directory" title="Our Premium" titleHighlight="Partners" align="center" className="mb-16" />
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {CLIENT_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300",
                  activeCategory === category.id 
                    ? "bg-brand text-white shadow-lg scale-105 border border-brand"
                    : "bg-background border border-border text-muted hover:text-foreground hover:border-brand/50 hover:bg-surface"
                )}
              >
                <category.icon className="w-4 h-4" />
                {category.title}
              </button>
            ))}
          </div>

          {/* Client Grid */}
          <div className="min-h-[400px]">
            {CLIENT_CATEGORIES.map((category) => (
              activeCategory === category.id && (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                >
                  {category.clients.map((client, idx) => (
                    <motion.div 
                      key={idx} 
                      className="group relative flex items-center justify-between p-4 rounded-2xl border border-border bg-background hover:bg-surface hover:border-brand/50 transition-all duration-300 cursor-default overflow-hidden"
                      whileHover={{ y: -2 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-brand/0 via-brand/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      <span className="text-sm font-semibold text-foreground/80 group-hover:text-foreground transition-colors relative z-10">{client}</span>
                      <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-brand transition-colors relative z-10 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0" />
                    </motion.div>
                  ))}
                </motion.div>
              )
            ))}
          </div>
        </motion.div>
      </section>

      {/* 4. Infinite Marquee */}
      <section className="py-20 bg-background relative overflow-hidden border-t border-border">
        <motion.div 
          className="mx-auto max-w-7xl px-6 lg:px-8 text-center mb-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-bold tracking-widest text-muted uppercase">Trusted By Leading Enterprises</p>
        </motion.div>
        
        {/* CSS Mask for smooth gradient fade on left and right edges */}
        <motion.div 
          className="relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Marquee gradient={false} speed={40} className="py-4">
            {[...CLIENT_CATEGORIES[0].clients, ...CLIENT_CATEGORIES[1].clients, ...CLIENT_CATEGORIES[2].clients].map((client, idx) => (
              <div key={idx} className="flex items-center gap-8 mx-8 group cursor-default">
                <span className="text-2xl md:text-4xl font-extrabold text-foreground/10 dark:text-foreground/5 uppercase tracking-wider whitespace-nowrap select-none group-hover:text-foreground/80 transition-colors duration-300">
                  {client}
                </span>
                <span className="text-brand/20 group-hover:text-brand transition-colors duration-300 text-xl">✦</span>
              </div>
            ))}
          </Marquee>
        </motion.div>
      </section>

    </main>
  );
}
