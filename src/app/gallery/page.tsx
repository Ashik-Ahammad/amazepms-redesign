"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import Image from "next/image";

// Placeholder images for the gallery
const IMAGES = Array.from({ length: 8 }).map((_, i) => ({
  id: i,
  src: `https://images.unsplash.com/photo-${1500000000000 + i * 100000}?auto=format&fit=crop&q=80&w=800&h=600`, // Random aesthetic placeholders
  title: `Facility Management Project ${i + 1}`,
  category: i % 2 === 0 ? "Commercial" : "Residential",
}));

// Fallback images since unsplash URLs might 404 with random IDs, I'll use generic reliable placeholders
const RELIABLE_IMAGES = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200", // Office
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200", // Building exterior
  "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=1200", // Cleaning
  "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200", // MEP
  "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1200", // Kitchen/Cleaning
  "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?auto=format&fit=crop&q=80&w=1200", // Security
];

export default function GalleryPage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 sm:py-32 bg-surface relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center relative z-10">
          <SectionHeading badge="Portfolio" title="Our Work in" titleHighlight="Action" align="center" className="mb-6" />
          <motion.p 
            className="text-muted text-lg leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            A visual showcase of our premium property management and facility services deployed across corporate and residential spaces.
          </motion.p>
        </div>
      </section>

      {/* Featured Carousel */}
      <section className="py-12 bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-8 flex justify-between items-end">
          <h2 className="text-2xl font-bold text-foreground">Featured Projects</h2>
          <div className="flex gap-2">
            <button onClick={scrollPrev} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-surface transition-colors cursor-pointer" aria-label="Previous image">
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button onClick={scrollNext} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-surface transition-colors cursor-pointer" aria-label="Next image">
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
        
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex touch-pan-y">
            {RELIABLE_IMAGES.map((src, index) => (
              <div className="embla__slide flex-[0_0_85%] md:flex-[0_0_60%] lg:flex-[0_0_45%] min-w-0 mr-6 pl-4" key={index}>
                <div className={`relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden transition-all duration-500 ${index === selectedIndex ? 'scale-100 opacity-100 ring-2 ring-brand ring-offset-4 ring-offset-background' : 'scale-95 opacity-50'}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={`Gallery Image ${index + 1}`} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-xs font-bold text-white bg-brand px-3 py-1 rounded-full mb-3 inline-block">Featured</span>
                    <h3 className="text-white text-xl font-bold">Facility Operations</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading badge="Gallery" title="Explore Our" titleHighlight="Facilities" align="left" className="mb-12" />
          
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {RELIABLE_IMAGES.map((src, i) => (
              <motion.div 
                key={i}
                className="relative rounded-2xl overflow-hidden group cursor-pointer break-inside-avoid"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={`Grid Image ${i}`} className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Maximize2 className="w-8 h-8 text-white" />
                </div>
              </motion.div>
            ))}
             {RELIABLE_IMAGES.slice().reverse().map((src, i) => (
              <motion.div 
                key={`rev-${i}`}
                className="relative rounded-2xl overflow-hidden group cursor-pointer break-inside-avoid"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={`Grid Image rev ${i}`} className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Maximize2 className="w-8 h-8 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
