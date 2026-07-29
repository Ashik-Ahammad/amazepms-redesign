"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Mail, MapPin, X, User, Phone, Link as LinkIcon, Send } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

const OPENINGS = [
  "Facility Manager",
  "Assistant Facility Manager",
  "Operations Manager",
  "Security Officer",
  "Electrician",
  "Field Officer - Technical",
  "Field Officer - Security",
  "Plumber",
  "Carpenter",
  "Gardener",
  "House Keeping Supervisor",
  "House Keeper",
  "Fire & Safety Technicians",
  "Help Desk Executive",
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.phone || !formData.resume) {
      toast.error("Please fill in all required fields.");
      return;
    }
    
    // Simulate API call
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success(`Application submitted for ${selectedJob}! We will contact you soon.`, {
        icon: '🎉',
        style: {
          borderRadius: '12px',
          background: 'hsl(var(--surface-elevated))',
          color: 'hsl(var(--foreground))',
          border: '1px solid hsl(var(--border))',
        },
      });
      setSelectedJob(null);
      setFormData({ name: "", email: "", phone: "", resume: "" });
    }, 1000);
  };

  const handleClose = () => {
    setSelectedJob(null);
    setFormData({ name: "", email: "", phone: "", resume: "" });
  };

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 sm:py-32 bg-surface relative overflow-hidden hero-gradient">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center relative z-10">
          <SectionHeading badge="Join Our Team" title="Build Your" titleHighlight="Career" align="center" className="mb-6" />
          <motion.p 
            className="text-muted text-lg leading-relaxed max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Take the next step in your career with Amaze. We are always looking for passionate professionals to join our 15,000+ strong workforce across India.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Button variant="primary" size="lg" href="mailto:careers@amazepms.com" icon={<Mail className="w-5 h-5" />}>
              careers@amazepms.com
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Openings Grid */}
      <section className="py-24 bg-background relative z-0">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-12 gap-4">
            <h2 className="text-2xl font-bold text-foreground">Current Openings</h2>
            <span className="text-sm font-medium text-brand bg-brand/10 px-4 py-1.5 rounded-full border border-brand/20 w-fit">{OPENINGS.length} Roles Available</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {OPENINGS.map((job, index) => (
              <motion.div 
                key={index}
                onClick={() => setSelectedJob(job)}
                className="group flex flex-col p-6 rounded-2xl border border-border bg-surface hover:bg-surface-elevated hover:border-brand/40 hover:shadow-xl hover:shadow-brand/5 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center group-hover:bg-brand group-hover:text-white text-brand transition-colors duration-300">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider bg-background px-3 py-1.5 rounded-full border border-border group-hover:border-brand/20 transition-colors">Full Time</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-brand transition-colors">{job}</h3>
                <div className="flex items-center gap-2 text-sm text-muted font-medium mt-auto">
                  <MapPin className="w-4 h-4" />
                  <span>PAN India</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <motion.div 
            className="mt-20 p-8 sm:p-12 rounded-3xl bg-surface-elevated border border-border text-center glass relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-brand/5 pointer-events-none" />
            <h3 className="text-2xl font-bold text-foreground mb-4 relative z-10">Don't see a fit?</h3>
            <p className="text-muted mb-8 max-w-xl mx-auto relative z-10">
              We are continually expanding and always open to reviewing talented individuals. Send us your CV anyway and we'll keep it on file.
            </p>
            <div className="relative z-10">
              <Button variant="secondary" href="mailto:careers@amazepms.com" icon={<Mail className="w-5 h-5" />}>
                Submit Open Application
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Modal */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
            />
            
            {/* Modal Content */}
            <motion.div 
              className="relative w-full max-w-lg bg-surface border border-border rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              {/* Header */}
              <div className="p-6 sm:p-8 bg-surface-elevated border-b border-border relative">
                <button 
                  onClick={handleClose}
                  className="absolute top-6 right-6 p-2 rounded-full hover:bg-background text-muted hover:text-foreground transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand mb-4">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-1">Apply for {selectedJob}</h2>
                <div className="flex items-center gap-2 text-sm text-muted">
                  <MapPin className="w-4 h-4" />
                  <span>PAN India • Full Time</span>
                </div>
              </div>

              {/* Form */}
              <div className="p-6 sm:p-8 overflow-y-auto">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Full Name *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground">
                        <User className="w-5 h-5" />
                      </div>
                      <input 
                        type="text" 
                        required
                        className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Email Address *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground">
                        <Mail className="w-5 h-5" />
                      </div>
                      <input 
                        type="email" 
                        required
                        className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Phone Number *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground">
                        <Phone className="w-5 h-5" />
                      </div>
                      <input 
                        type="tel" 
                        required
                        className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Resume Drive PDF Link *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground">
                        <LinkIcon className="w-5 h-5" />
                      </div>
                      <input 
                        type="url" 
                        required
                        className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all"
                        placeholder="https://drive.google.com/..."
                        value={formData.resume}
                        onChange={(e) => setFormData({...formData, resume: e.target.value})}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 text-right">Make sure the link is viewable by anyone.</p>
                  </div>

                  <div className="pt-4">
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-brand hover:bg-brand-light text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Submit Application</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
