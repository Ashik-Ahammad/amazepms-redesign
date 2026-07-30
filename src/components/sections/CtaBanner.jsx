"use client";
import { motion } from "framer-motion";
import { Phone, ArrowUpRight } from "lucide-react";
export function CtaBanner() {
    return (<section className="bg-surface relative py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <motion.div className="relative rounded-[2rem] bg-gradient-to-r from-brand-dark via-brand to-brand-light p-8 sm:p-12 overflow-hidden shadow-[0_20px_50px_-12px_rgba(79,70,229,0.3)]" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/10 blur-3xl -translate-y-1/2 translate-x-1/4"/>
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 blur-2xl translate-y-1/2 -translate-x-1/4"/>

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Phone className="w-5 h-5 text-white/80"/>
                <span className="text-white/80 text-sm font-medium">
                  Call For More Info
                </span>
              </div>
              <a href="tel:9908538137" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                990 853 8137
              </a>
            </div>

            <div className="text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Call Us For Our Services
              </h3>
            </div>

            <motion.a href="tel:9908538137" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-brand-dark font-bold text-sm hover:bg-white/90 transition-colors shadow-lg" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Contact Us
              <ArrowUpRight className="w-5 h-5"/>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>);
}
