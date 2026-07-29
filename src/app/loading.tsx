"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background/80 backdrop-blur-3xl">
      <motion.div
        className="relative flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Pulsing rings */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-brand/20"
          animate={{ scale: [1, 1.5, 2], opacity: [1, 0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-brand/10"
          animate={{ scale: [1, 1.5, 2], opacity: [1, 0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
        />

        {/* Core Icon Container */}
        <div className="relative w-20 h-20 rounded-2xl bg-surface-glass border border-border flex items-center justify-center shadow-xl shadow-brand/10 z-10 overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-brand/20 to-transparent opacity-50" />
          
          <motion.div
            animate={{ 
              y: [0, -5, 0],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Building2 className="w-8 h-8 text-brand" />
          </motion.div>
        </div>
      </motion.div>

      {/* Loading Text */}
      <motion.div 
        className="mt-8 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="text-lg font-semibold tracking-wide text-foreground">
          AMAZE <span className="text-brand">PMS</span>
        </div>
        <div className="flex items-center gap-1 text-sm text-muted">
          <span className="animate-pulse">Loading experience</span>
          <span className="flex gap-0.5">
            <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0 }}>.</motion.span>
            <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}>.</motion.span>
            <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }}>.</motion.span>
          </span>
        </div>
      </motion.div>
    </div>
  );
}
