"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Home, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-background pt-20 pb-12 px-6">
      {/* Cinematic Ambient Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-brand/10 rounded-full blur-[120px] pointer-events-none opacity-50" />
      
      <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto text-center">
        
        {/* Animated 404 Graphic */}
        <motion.div 
          className="relative w-40 h-40 sm:w-56 sm:h-56 -mt-10 mb-8 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Animated Rings */}
          <motion.div
            className="absolute inset-0 rounded-full border border-destructive/20"
            animate={{ scale: [1, 1.5, 2], opacity: [1, 0.5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border border-destructive/10"
            animate={{ scale: [1, 1.5, 2], opacity: [1, 0.5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1.5 }}
          />
          
          <div className="relative w-full h-full rounded-full bg-surface-glass border border-border flex items-center justify-center shadow-xl shadow-destructive/10">
            <motion.div
              animate={{ rotate: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <SearchX className="w-16 h-16 sm:w-24 sm:h-24 text-destructive/80" />
            </motion.div>
          </div>
        </motion.div>

        {/* Error Messaging */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-border bg-surface-glass">
            <span className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-muted">Error 404 — Page Not Found</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
            The property you're looking for <br className="hidden sm:block" />
            <span className="text-gradient-brand">isn't in our portfolio.</span>
          </h1>
          
          <p className="text-base sm:text-lg text-muted mb-10 max-w-xl mx-auto leading-relaxed">
            It looks like this page was moved, deleted, or never existed in the first place. Let's get you back to familiar grounds.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              variant="primary" 
              size="lg" 
              href="/" 
              icon={<Home className="w-5 h-5" />}
            >
              Return Home
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              href="/services" 
              icon={<ArrowLeft className="w-5 h-5" />}
            >
              Our Services
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative noise texture to blend with dark mode */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
    </div>
  );
}
