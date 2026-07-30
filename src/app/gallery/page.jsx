"use client";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
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
const TEAM_IMAGES = [
    { src: "/images/gallery/corporate.png", title: "Corporate Facility Team" },
    { src: "/images/gallery/security.png", title: "Security Personnel" },
    { src: "/images/gallery/housekeeping.png", title: "Housekeeping Staff" },
    { src: "/images/gallery/training.png", title: "Staff Training Session" },
    { src: "/images/gallery/engineering.png", title: "Engineering & MEP Team" },
    { src: "/images/gallery/management.png", title: "Management Team" },
    { src: "/images/gallery/sanitization.png", title: "Sanitization Experts" },
    { src: "/images/gallery/briefing.png", title: "Operations Briefing" }
];
export default function GalleryPage() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const scrollPrev = useCallback(() => {
        if (emblaApi)
            emblaApi.scrollPrev();
    }, [emblaApi]);
    const scrollNext = useCallback(() => {
        if (emblaApi)
            emblaApi.scrollNext();
    }, [emblaApi]);
    const onSelect = useCallback(() => {
        if (!emblaApi)
            return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi, setSelectedIndex]);
    useEffect(() => {
        if (!emblaApi)
            return;
        // eslint-disable-next-line react-hooks/set-state-in-effect
        onSelect();
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);
    }, [emblaApi, onSelect]);
    return (<main className="pt-20">
      {/* Hero */}
      <section className="py-24 sm:py-32 bg-surface relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center relative z-10">
          <SectionHeading badge="Portfolio" title="Our Work in" titleHighlight="Action" align="center" className="mb-6"/>
          <motion.p className="text-muted text-lg leading-relaxed max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
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
              <ChevronLeft className="w-5 h-5 text-foreground"/>
            </button>
            <button onClick={scrollNext} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-surface transition-colors cursor-pointer" aria-label="Next image">
              <ChevronRight className="w-5 h-5 text-foreground"/>
            </button>
          </div>
        </div>
        
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex touch-pan-y">
            {RELIABLE_IMAGES.map((src, index) => (<div className="embla__slide flex-[0_0_85%] md:flex-[0_0_60%] lg:flex-[0_0_45%] min-w-0 mr-6 pl-4" key={index}>
                <div className={`relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden transition-all duration-500 ${index === selectedIndex ? 'scale-100 opacity-100 ring-2 ring-brand ring-offset-4 ring-offset-background' : 'scale-95 opacity-50'}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={`Gallery Image ${index + 1}`} className="absolute inset-0 w-full h-full object-cover" loading="lazy"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"/>
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-xs font-bold text-white bg-brand px-3 py-1 rounded-full mb-3 inline-block">Featured</span>
                    <h3 className="text-white text-xl font-bold">Facility Operations</h3>
                  </div>
                </div>
              </div>))}
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading badge="Gallery" title="Explore Our" titleHighlight="Facilities" align="left" className="mb-12"/>
          
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {RELIABLE_IMAGES.map((src, i) => (<motion.div key={i} className="relative rounded-2xl overflow-hidden group cursor-pointer break-inside-avoid transition-opacity duration-500 transform-gpu" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={`Grid Image ${i}`} className="block w-full h-auto object-cover transform-gpu group-hover:scale-105 transition-transform duration-700 ease-out will-change-transform" loading="lazy"/>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Maximize2 className="w-8 h-8 text-white transform-gpu scale-50 group-hover:scale-100 transition-transform duration-500"/>
                </div>
              </motion.div>))}
          </div>
        </div>
      </section>

      {/* Team Gallery Grid */}
      <section className="py-24 bg-background border-t border-border relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading badge="Our Workforce" title="The Team Behind" titleHighlight="The Excellence" align="center" className="mb-16"/>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {TEAM_IMAGES.map((image, i) => (<motion.div key={i} className="relative group rounded-2xl overflow-hidden aspect-[4/5] bg-surface-elevated border border-border cursor-pointer shadow-sm transition-opacity duration-500 transform-gpu" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={image.src} alt={image.title} className="block w-full h-full object-cover transform-gpu group-hover:scale-105 transition-transform duration-700 ease-out will-change-transform" loading="lazy"/>
                
                {/* Premium Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"/>
                
                {/* Text Content */}
                <div className="absolute inset-x-0 bottom-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="w-8 h-1 bg-brand mb-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"/>
                  <h3 className="text-white font-bold text-lg leading-snug">{image.title}</h3>
                </div>
              </motion.div>))}
          </div>
        </div>
      </section>
    </main>);
}
