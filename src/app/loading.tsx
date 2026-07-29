"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Wrench } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      
      {/* Central Loading Container */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Core Pillars Animation */}
        <div className="flex items-center gap-6 mb-8">
          <motion.div
            className="flex flex-col items-center gap-2"
            animate={{ opacity: [0.2, 1, 0.2], y: [0, -5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
          >
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
              <ShieldCheck className="w-6 h-6 text-blue-500" />
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col items-center gap-2"
            animate={{ opacity: [0.2, 1, 0.2], y: [0, -5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
              <Sparkles className="w-6 h-6 text-emerald-500" />
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col items-center gap-2"
            animate={{ opacity: [0.2, 1, 0.2], y: [0, -5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
          >
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
              <Wrench className="w-6 h-6 text-orange-500" />
            </div>
          </motion.div>
        </div>

        {/* Logo Text with Shimmer */}
        <div className="relative inline-block overflow-hidden pb-1">
          <h1 className="text-3xl sm:text-4xl font-black tracking-tighter text-foreground/10 dark:text-foreground/5">
            AMAZE<span className="text-brand/10">PMS</span>
          </h1>
          
          <motion.h1 
            className="absolute top-0 left-0 text-3xl sm:text-4xl font-black tracking-tighter text-foreground"
            initial={{ clipPath: "polygon(0 0, 0 100%, 0 100%, 0 0)" }}
            animate={{ clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 0)" }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
          >
            AMAZE<span className="text-brand">PMS</span>
          </motion.h1>
        </div>

        {/* Loading Bar */}
        <div className="w-48 h-1 bg-border rounded-full mt-6 overflow-hidden relative">
          <motion.div 
            className="absolute inset-y-0 left-0 bg-brand rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Dynamic Status Text */}
        <div className="mt-4 text-xs font-semibold tracking-widest text-muted-foreground uppercase flex items-center gap-2">
          <motion.span
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          >
            Initializing Facilities
          </motion.span>
          <span className="flex gap-0.5">
            <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0 }}>.</motion.span>
            <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}>.</motion.span>
            <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }}>.</motion.span>
          </span>
        </div>
        
      </div>
    </div>
  );
}
