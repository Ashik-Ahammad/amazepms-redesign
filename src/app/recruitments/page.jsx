"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ShieldCheck, Search, GraduationCap, ClipboardCheck, ShieldAlert, CheckCircle2, Fingerprint, LockKeyhole, ArrowRight, Heart, HardHat, Wrench, Sparkles, Scale, Leaf, Siren, LayoutList, CheckSquare, Target, BookOpen } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
const STAGES = [
    {
        title: "Initiation & Profiling",
        content: ["Client requirement analysis", "Threat & risk assessment", "Site survey & existing process study", "Proposal submission & approval"],
    },
    {
        title: "Secure Planning & Contracting",
        content: ["Contract confirmation", "Resource planning & targeted recruitment", "Preparation of site-specific SOPs", "Finalizing service level agreements (SLAs)"],
    },
    {
        title: "Deployment & Integration",
        content: ["Deployment of contract start-up team", "Parallel deployment of security force", "Smooth handover from existing providers", "Supervision by senior field commanders"],
    },
    {
        title: "Operations & Strict Review",
        content: ["24/7 monitoring via command center", "Review of security posture & procedures", "Continuous on-site tactical training", "Monthly Management Reviews (MMR)"],
    }
];
const TRAINING_MODULES = [
    {
        id: "security",
        title: "Security & Safety",
        icon: ShieldCheck,
        color: "from-blue-500/20 to-indigo-500/20",
        modules: [
            "Physical Fitness & Drills",
            "Gate House Operations (Entry/Exit)",
            "Patrolling Procedures & Perimeters",
            "Command Control Centre Operations",
            "Fire & Safety Management",
            "First Aid & Emergency Response",
            "Traffic & Parking Management",
            "Material Movement Tracking",
            "Incident Reporting & Documentation",
            "Grooming & Professional Conduct"
        ]
    },
    {
        id: "mep",
        title: "Engineering (MEP)",
        icon: Wrench,
        color: "from-amber-500/20 to-orange-500/20",
        modules: [
            "Environment, Health & Safety (EHS)",
            "Prevention of Sexual Harassment (POSH)",
            "Critical Equipment Troubleshooting",
            "Shutdown Operations & Protocols",
            "LOTO (Lockout-Tagout) Procedures",
            "Toolbox Talks & Safety Meetings",
            "Incident/Accident Investigation",
            "Permit to Work (PTW) Systems",
            "Predictive & Preventive Maintenance",
            "Sustainability & Energy Conservation"
        ]
    },
    {
        id: "housekeeping",
        title: "Soft Services",
        icon: Sparkles,
        color: "from-emerald-500/20 to-teal-500/20",
        modules: [
            "Hygiene & Grooming Standards",
            "Color Coding & Zoning Systems",
            "Advanced Chemical Usage & Safety",
            "Specialized Machinery Operations",
            "Biomedical & Hazardous Waste Disposal",
            "Deep Cleaning & Sanitization Protocols",
            "Pest Control Sensitization",
            "Infection Prevention & Control (IPC)",
            "Escalation Matrix & Supervision",
            "Customer Etiquette & Politeness"
        ]
    }
];
const AUDITS = [
    { title: "Physical Security Audit", icon: ShieldAlert },
    { title: "Engineering & MEP Audit", icon: Wrench },
    { title: "Soft Services & Cleaning Audit", icon: Sparkles },
    { title: "Environment, Health & Safety (EHS)", icon: HardHat },
    { title: "Energy & Sustainability Audit", icon: Leaf },
    { title: "Statutory Compliance & Legal", icon: Scale },
    { title: "Risk & Threat Vulnerability", icon: Siren },
    { title: "Site Quality Assurance", icon: CheckSquare },
    { title: "SOP & Policy Adherence", icon: BookOpen },
    { title: "Monthly Management Review (MMR)", icon: LayoutList },
    { title: "Quarterly Business Review (QBR)", icon: Target },
    { title: "Bi-Annual Performance Audit", icon: ClipboardCheck },
    { title: "Annual Contract & SLA Audit", icon: ShieldCheck },
    { title: "Vendor Risk Assessment", icon: Search },
    { title: "Fire & Life Safety Audit", icon: LockKeyhole },
    { title: "Emergency Response Drills", icon: Siren },
];
export default function RecruitmentsPage() {
    const [activeTab, setActiveTab] = useState("security");
    return (<main className="pt-20 bg-background text-foreground selection:bg-brand/30">
      
      {/* 1. The "Fortress" Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"/>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/20 rounded-full blur-[120px] pointer-events-none"/>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Typography */}
            <div>
              <motion.div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 mb-6" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"/>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">100% Background Verified</span>
              </motion.div>
              
              <motion.h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
                Uncompromising Security. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light via-brand to-indigo-400">
                  Elite Personnel.
                </span>
              </motion.h1>
              
              <motion.p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }}>
                Our recruitment and deployment strategy is built on military-grade discipline. We source, strictly verify, and rigorously train our manpower to ensure your assets are protected by the absolute best.
              </motion.p>
              
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="flex flex-wrap gap-4">
                <Button href="/contact" variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4"/>}>
                  Request Staffing
                </Button>
                <Button href="#audits" variant="outline" size="lg" className="border-white/20 bg-white/5 hover:bg-white/10 text-white" icon={<LockKeyhole className="w-4 h-4"/>}>
                  View Protocols
                </Button>
              </motion.div>
            </div>

            {/* Right Visual (The Shield) */}
            <div className="relative flex justify-center lg:justify-end">
              <motion.div className="relative w-72 h-72 sm:w-96 sm:h-96" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: "easeOut" }}>
                {/* Rotating Security Rings */}
                <motion.div className="absolute inset-0 rounded-full border border-dashed border-brand/40" animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}/>
                <motion.div className="absolute inset-4 rounded-full border border-brand/20"/>
                <motion.div className="absolute inset-8 rounded-full border border-brand/60" animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}/>
                
                {/* Central Shield Container */}
                <div className="absolute inset-12 rounded-full bg-slate-900/80 border border-brand/30 backdrop-blur-xl flex flex-col items-center justify-center shadow-[0_0_60px_-15px_rgba(79,70,229,0.5)]">
                  <ShieldCheck className="w-24 h-24 text-brand-light drop-shadow-[0_0_15px_rgba(99,102,241,0.5)] mb-2"/>
                  <span className="text-xs font-bold text-slate-400 tracking-widest uppercase">Secured Protocol</span>
                </div>

                {/* Floating Trust Metrics */}
                <motion.div className="absolute -top-4 -right-4 bg-slate-900 border border-white/10 px-4 py-2 rounded-xl shadow-xl flex items-center gap-2" animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                  <Fingerprint className="w-5 h-5 text-emerald-400"/>
                  <span className="text-xs font-bold text-white">Biometric Verified</span>
                </motion.div>
                
                <motion.div className="absolute bottom-12 -left-8 bg-slate-900 border border-white/10 px-4 py-2 rounded-xl shadow-xl flex items-center gap-2" animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
                  <ShieldAlert className="w-5 h-5 text-rose-400"/>
                  <span className="text-xs font-bold text-white">Zero Breaches</span>
                </motion.div>

              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Pillars of Trust (Core Strategies) */}
      <section className="py-24 bg-background relative border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading badge="Core Strategies" title="The Pillars of" titleHighlight="Trust" align="center" className="mb-16"/>
          
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }}
              className="relative p-8 rounded-3xl border border-border bg-surface hover:bg-surface-elevated transition-all duration-300 group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-full blur-2xl group-hover:bg-brand/10 transition-colors"/>
              <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Search className="w-7 h-7 text-brand"/>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Strategic Sourcing</h3>
              <p className="text-sm text-muted leading-relaxed">
                Dedicated regional teams actively source talent across Telangana, Andhra Pradesh, Tamil Nadu, Karnataka, UP, Bihar, Jharkhand, North East & Odisha via Job Melas and verified employee referral networks.
              </p>
            </motion.div>
            
            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: 0.2 }}
              className="relative p-8 rounded-3xl border border-border bg-surface hover:bg-surface-elevated transition-all duration-300 group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-colors"/>
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Fingerprint className="w-7 h-7 text-emerald-500"/>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Rigorous Verification</h3>
              <p className="text-sm text-muted leading-relaxed">
                Strict antecedent and police verification is conducted prior to deployment by our in-house background check team, supervised directly by a retired police officer.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Skill Development Modules */}
      <section className="py-24 bg-surface relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading badge="NSDC Affiliated" title="Specialized Skill" titleHighlight="Conditioning" align="center" className="mb-16"/>
          
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {TRAINING_MODULES.map((tab) => (<button key={tab.id} onClick={() => setActiveTab(tab.id)} className={cn("flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300", activeTab === tab.id
                ? "bg-brand text-white shadow-lg shadow-brand/20 scale-105"
                : "bg-background border border-border text-muted hover:text-foreground hover:border-brand/30")}>
                <tab.icon className="w-4 h-4"/>
                {tab.title}
              </button>))}
          </div>

          {/* Tab Content */}
          <div className="relative min-h-[400px]">
            {TRAINING_MODULES.map((tab) => (activeTab === tab.id && (<motion.div key={tab.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="grid sm:grid-cols-2 gap-4">
                  {tab.modules.map((module, i) => (<div key={i} className="flex items-start gap-3 p-5 rounded-2xl glass border border-border hover:border-brand/30 hover:-translate-y-1 transition-all duration-300">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-tr ${tab.color} flex items-center justify-center shrink-0`}>
                        <CheckCircle2 className="w-4 h-4 text-foreground/80"/>
                      </div>
                      <span className="text-sm font-medium text-foreground leading-relaxed mt-1">{module}</span>
                    </div>))}
                </motion.div>)))}
          </div>
        </div>
      </section>

      {/* 4. Secure Deployment Pipeline */}
      <section className="py-32 bg-surface-elevated relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay"/>
        
        <div className="mx-auto max-w-5xl px-6 lg:px-8 relative z-10">
          <SectionHeading badge="Methodology" title="Secure Deployment" titleHighlight="Pipeline" align="center" className="mb-24"/>
          
          <div className="relative border-l-2 border-border/50 ml-6 md:ml-1/2 md:border-l-0">
            {/* Glowing Laser Center Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-border/50 -translate-x-1/2"/>
            <motion.div className="hidden md:block absolute left-1/2 top-0 w-[2px] bg-gradient-to-b from-brand via-brand-light to-brand -translate-x-1/2" initial={{ height: "0%" }} whileInView={{ height: "100%" }} viewport={{ once: true }} transition={{ duration: 2, ease: "easeInOut" }}/>
            
            {STAGES.map((stage, index) => (<motion.div key={stage.title} className={`relative flex items-center justify-between md:justify-normal w-full mb-20 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
                {/* Status Dot (Locks into place) */}
                <div className="absolute left-[-11px] md:left-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full bg-background border-4 border-brand shadow-[0_0_20px_rgba(99,102,241,0.6)] flex items-center justify-center z-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-light"/>
                </div>
                
                {/* Content Card */}
                <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-4rem)] p-8 rounded-3xl border border-white/5 bg-background/50 backdrop-blur-md hover:bg-surface-glass hover:border-brand/30 transition-all duration-300 ml-10 md:ml-0 shadow-lg">
                  <div className="text-xs font-black uppercase tracking-widest text-brand mb-2">Stage 0{index + 1}</div>
                  <h4 className="text-xl font-bold text-foreground mb-6">{stage.title}</h4>
                  
                  <ul className="space-y-4">
                    {stage.content.map((item, i) => (<li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0"/>
                        <span className="text-sm font-medium text-muted-foreground">{item}</span>
                      </li>))}
                  </ul>
                </div>
              </motion.div>))}
          </div>
        </div>
      </section>

      {/* 5. Comprehensive Audit Matrix */}
      <section id="audits" className="py-24 bg-background relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading badge="Quality Assurance" title="Comprehensive" titleHighlight="Audit Matrix" align="center" className="mb-16"/>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {AUDITS.map((audit, i) => (<motion.div key={i} 
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-20px" }} transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-xl border border-border bg-surface hover:bg-brand/5 hover:border-brand/30 transition-all duration-300 group cursor-default">
                <div className="w-8 h-8 rounded-lg bg-surface-elevated group-hover:bg-brand/10 flex items-center justify-center shrink-0 transition-colors">
                  <audit.icon className="w-4 h-4 text-muted group-hover:text-brand transition-colors"/>
                </div>
                <span className="text-sm font-bold text-foreground/80 group-hover:text-foreground transition-colors">{audit.title}</span>
              </motion.div>))}
          </div>
        </div>
      </section>

      {/* 6. Compliance Banner */}
      <section className="py-16 bg-brand-dark relative overflow-hidden border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-8">
            100% Statutory Compliant & Certified Operations
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 opacity-80">
            <div className="flex flex-col items-center gap-2">
              <ShieldCheck className="w-8 h-8 text-emerald-400"/>
              <span className="text-xs font-bold text-white uppercase tracking-wider">Police Verified</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ClipboardCheck className="w-8 h-8 text-blue-400"/>
              <span className="text-xs font-bold text-white uppercase tracking-wider">Labour Laws Compliant</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Heart className="w-8 h-8 text-rose-400"/>
              <span className="text-xs font-bold text-white uppercase tracking-wider">ESIC & PF Registered</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <GraduationCap className="w-8 h-8 text-amber-400"/>
              <span className="text-xs font-bold text-white uppercase tracking-wider">NSDC Training Partner</span>
            </div>
          </div>
        </div>
      </section>

    </main>);
}
