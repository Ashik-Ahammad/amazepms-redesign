"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { ALL_SERVICES_EXTENDED } from "@/constants";
import Image from "next/image";

export function ServicesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: true,
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-border bg-surface-glass">
              <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Comprehensive Portfolio
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Explore Our <span className="text-gradient-brand">Expertise</span>
            </h2>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex gap-3">
            <button
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
              className="w-12 h-12 rounded-full border border-border bg-surface-glass hover:bg-surface-elevated hover:border-brand/40 flex items-center justify-center text-foreground transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
              className="w-12 h-12 rounded-full border border-border bg-surface-glass hover:bg-surface-elevated hover:border-brand/40 flex items-center justify-center text-foreground transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Embla Carousel Viewport */}
        <div className="overflow-hidden -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 py-4" ref={emblaRef}>
          <div className="flex touch-pan-y touch-pinch-zoom gap-6">
            {ALL_SERVICES_EXTENDED.map((service, index) => {
              // Dynamically get the Lucide icon based on the string name
              const Icon = (LucideIcons as any)[service.icon] || LucideIcons.Building2;

              return (
                <motion.div
                  key={service.title}
                  className="relative flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_25%] h-[400px] rounded-[2rem] overflow-hidden group cursor-grab active:cursor-grabbing border border-border/50 shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Background Image with Slow Zoom on Hover */}
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transform transition-transform duration-[2000ms] ease-out group-hover:scale-110 saturate-[1.1] contrast-[1.1] brightness-90"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Cinematic Dark Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/40 to-transparent mix-blend-multiply pointer-events-none opacity-90 group-hover:opacity-70 transition-opacity duration-1000" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,transparent_30%,rgba(0,0,0,0.6)_100%)] pointer-events-none" />

                  {/* Content Container */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    {/* Icon Float */}
                    <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-5 transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-110 group-hover:bg-brand/80">
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 transform transition-transform duration-500 group-hover:-translate-y-1">
                      {service.title}
                    </h3>
                    
                    {/* Description - reveals slowly on hover, or always partially visible */}
                    <div className="overflow-hidden">
                      <p className="text-white/70 text-sm leading-relaxed transform transition-all duration-500 line-clamp-2">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
