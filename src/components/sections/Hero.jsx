"use client";
import { motion, useMotionValue, useTransform, animate, useSpring } from "framer-motion";
import { ArrowRight, ChevronDown, Building2, Shield, Sparkles, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { STATS } from "@/constants";
import { useEffect, useRef } from "react";

/**
 * AnimatedStat Component
 * Smoothly animates a number from 0 to its target value using Framer Motion.
 * Parses the raw string (e.g., "20M+") to extract the number and the suffix.
 * 
 * @param {Object} props
 * @param {string} props.value - The raw stat value to animate (e.g., "15,000+")
 * @param {string} props.label - The label for the stat
 */
function AnimatedStat({ value, label }) {
    const numMatches = value.match(/\d+/);
    const targetNum = numMatches ? parseInt(numMatches[0], 10) : 0;
    const suffix = value.replace(/\d+/g, "");
    const count = useMotionValue(0);
    const display = useTransform(count, (latest) => Math.round(latest).toLocaleString() + suffix);

    useEffect(() => {
        if (targetNum > 0) {
            const controls = animate(count, targetNum, {
                duration: 2.5,
                ease: "easeOut",
                delay: 1.5
            });
            return controls.stop;
        }
    }, [targetNum, count]);

    return (
        <div className="text-3xl md:text-5xl font-black text-foreground tracking-tighter mb-2">
            {targetNum > 0 ? <motion.span>{display}</motion.span> : value}
        </div>
    );
}

/**
 * Animation Configuration
 * Pre-defined variants for Framer Motion to keep components clean.
 */
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        },
    },
};

const textVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(15px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
};

// Define ambient floating icons around the hero
const floatingIcons = [
    { Icon: Building2, x: "12%", y: "25%", delay: 0, size: 32 },
    { Icon: Shield, x: "82%", y: "18%", delay: 0.5, size: 28 },
    { Icon: Sparkles, x: "88%", y: "65%", delay: 1, size: 24 },
    { Icon: MapPin, x: "8%", y: "60%", delay: 1.5, size: 26 },
];

/**
 * Hero Component
 * The main premium landing section of the website.
 * Features Apple-inspired typography, glassmorphism, and mouse-reactive elements.
 */
export function Hero() {
    // Parallax mouse effect refs and springs
    const containerRef = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const smoothX = useSpring(mouseX, { damping: 50, stiffness: 400 });
    const smoothY = useSpring(mouseY, { damping: 50, stiffness: 400 });

    /**
     * Handle mouse move to create a subtle parallax effect on floating elements
     */
    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / 25;
        const y = (e.clientY - top - height / 2) / 25;
        mouseX.set(x);
        mouseY.set(y);
    };

    return (
        <section 
            id="home" 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
        >
            {/* 1. Dynamic Mesh/Blob Gradient Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div 
                    className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] rounded-full bg-brand/20 blur-[120px] mix-blend-normal dark:mix-blend-screen"
                    animate={{ x: [0, 100, 0], y: [0, 50, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                    className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[100px] mix-blend-normal dark:mix-blend-screen"
                    animate={{ x: [0, -80, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />
            </div>

            {/* Subtle Grid overlay for texture */}
            <div className="absolute inset-0 bg-[linear-gradient(var(--grid-line-color)_1px,transparent_1px),linear-gradient(90deg,var(--grid-line-color)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none" />

            {/* 2. Parallax Floating Elements */}
            {floatingIcons.map(({ Icon, x, y, delay, size }, i) => (
                <motion.div 
                    key={i} 
                    className="absolute hidden md:flex items-center justify-center w-16 h-16 rounded-2xl glass-strong text-brand shadow-2xl"
                    style={{ 
                        left: x, top: y,
                        x: smoothX, y: smoothY
                    }} 
                    animate={{ y: [0, -15, 0] }} 
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
                >
                    <Icon size={size} strokeWidth={1.5} />
                </motion.div>
            ))}

            {/* 3. Main Content Container */}
            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-32 sm:py-40 flex flex-col items-center">
                
                {/* Premium Glass Pill Badge */}
                <motion.div 
                    className="inline-flex items-center gap-3 mb-10 px-5 py-2.5 rounded-full glass-strong shadow-lg relative overflow-hidden group cursor-pointer"
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand"></span>
                    </span>
                    <span className="text-xs sm:text-sm font-semibold tracking-wide text-foreground relative">
                        Setting the new standard in Property Management
                    </span>
                </motion.div>

                {/* Typography-First Headline */}
                <motion.h1 
                    className="text-center max-w-5xl text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter leading-[1.05]"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={textVariants} className="text-foreground">
                        Elevate your property.
                    </motion.div>
                    <motion.div variants={textVariants} className="text-muted-foreground mt-2">
                        Empower your future.
                    </motion.div>
                </motion.h1>

                {/* Subheadline */}
                <motion.p 
                    className="mt-8 text-lg sm:text-xl md:text-2xl text-muted-foreground text-center max-w-3xl font-medium leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    World-class facility management, security, and maintenance solutions. 
                    Managing <span className="text-foreground font-semibold">20M+ sq. ft.</span> with unparalleled precision across India.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div 
                    className="mt-12 flex flex-col sm:flex-row items-center gap-5"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    <Button variant="primary" size="lg" href="#services" className="rounded-full shadow-xl shadow-brand/20">
                        Explore Services <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                    <Button variant="secondary" size="lg" href="/contact" className="rounded-full glass">
                        Contact Sales
                    </Button>
                </motion.div>

                {/* 4. Interactive Glassmorphic Stats Row */}
                <motion.div 
                    className="mt-24 w-full grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                >
                    {STATS.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            className="flex flex-col items-center justify-center p-8 rounded-[2rem] glass hover:bg-white/10 dark:hover:bg-white/5 transition-colors duration-500 group"
                            whileHover={{ y: -5, scale: 1.02 }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.4 + i * 0.1 }}
                        >
                            <AnimatedStat value={stat.value} label={stat.label} />
                            <div className="mt-2 text-sm md:text-base text-muted-foreground font-medium tracking-wide group-hover:text-foreground transition-colors">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div 
                className="absolute bottom-6 left-1/2 -translate-x-1/2 cursor-pointer"
                animate={{ y: [0, 8, 0], opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <ChevronDown className="w-8 h-8 text-muted-foreground hover:text-foreground transition-colors" />
            </motion.div>
        </section>
    );
}
