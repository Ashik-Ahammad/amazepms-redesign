"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Building2, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { STATS } from "@/constants";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const floatingIcons = [
  { Icon: Building2, x: "10%", y: "20%", delay: 0, size: 28 },
  { Icon: Shield, x: "85%", y: "15%", delay: 0.5, size: 24 },
  { Icon: Sparkles, x: "90%", y: "60%", delay: 1, size: 22 },
  { Icon: Building2, x: "5%", y: "65%", delay: 1.5, size: 20 },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(var(--grid-line-color)_1px,transparent_1px),linear-gradient(90deg,var(--grid-line-color)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Floating ambient icons */}
      {floatingIcons.map(({ Icon, x, y, delay, size }, i) => (
        <motion.div
          key={i}
          className="absolute text-brand/10 hidden md:block"
          style={{ left: x, top: y }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            delay,
            ease: "easeInOut",
          }}
        >
          <Icon size={size} />
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-32 sm:py-40">
        <div className="mx-auto max-w-4xl text-center">
          {/* Trusted badge */}
          <motion.div
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-border bg-surface-glass"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-muted">
              Trusted by 300+ partners across India
            </span>
          </motion.div>

          {/* Main headline with staggered word animation */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span variants={wordVariants} className="inline-block text-gradient">
              Redefining{" "}
            </motion.span>
            <motion.span variants={wordVariants} className="inline-block text-gradient-brand">
              Property{" "}
            </motion.span>
            <br className="hidden sm:block" />
            <motion.span variants={wordVariants} className="inline-block text-gradient">
              Management{" "}
            </motion.span>
            <motion.span variants={wordVariants} className="inline-block text-gradient">
              for{" "}
            </motion.span>
            <motion.span variants={wordVariants} className="inline-block text-gradient">
              India
            </motion.span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="mt-7 text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            Comprehensive facility management, security, housekeeping, and
            maintenance solutions — managing over 20 million sq. ft. with a
            15,000+ strong workforce across PAN India.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            <Button
              variant="primary"
              size="lg"
              href="#services"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Explore Services
            </Button>
            <Button variant="secondary" size="lg" href="#about">
              Learn More
            </Button>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.3 + i * 0.1 }}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient-brand tracking-tight">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-muted-foreground/50" />
        </motion.div>
      </div>
    </section>
  );
}
