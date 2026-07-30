"use client";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/constants";
import { Quote } from "lucide-react";
import Marquee from "react-fast-marquee";
export function Testimonials() {
    return (<section className="relative py-24 sm:py-32 overflow-hidden bg-background">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[150px] pointer-events-none"/>
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 mb-16 text-center">
        <SectionHeading badge="Testimonials" title="What Our Clients" titleHighlight="Say About Us" description="Hear from the top-tier organizations that trust Amaze PMS to manage their most valuable assets." align="center"/>
      </div>

      {/* 3D Continuous Moving Cards Wrapper */}
      <div className="relative w-full py-16 group" style={{ perspective: "2000px" }}>
        {/* Edge Fade Gradients for smooth disappearing effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none"/>
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none"/>

        {/* 3D Transform Container - Statically rotated for a perfect 3D ribbon effect */}
        <div className="[transform:rotateX(12deg)_rotateY(-6deg)_rotateZ(2deg)]">
          
          {/* Single Row - Moves Left */}
          <Marquee gradient={false} speed={40} direction="left" pauseOnHover={true} className="py-8 overflow-visible">
            {TESTIMONIALS.map((testimonial) => (<div key={testimonial.name} className="mx-4 sm:mx-6 relative w-[320px] sm:w-[380px] h-[300px] p-8 rounded-3xl border border-border/60 bg-surface-glass-strong hover:bg-surface-elevated hover:border-brand/50 hover:-translate-y-4 hover:scale-105 hover:shadow-[0_30px_60px_-15px_rgba(79,70,229,0.3)] transition-all duration-500 ease-out flex flex-col justify-between cursor-grab active:cursor-grabbing z-10 hover:z-50">
                <div>
                  <Quote className="w-10 h-10 text-brand/30 mb-5"/>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed line-clamp-4">{testimonial.content}</p>
                </div>
                <div className="flex items-center gap-4 pt-5 mt-4 border-t border-border/50">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand to-brand-dark flex items-center justify-center shrink-0 shadow-inner">
                    <span className="text-white text-sm font-bold">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">{testimonial.name}</div>
                    <div className="text-xs font-medium text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs font-semibold text-brand-light mt-0.5">{testimonial.company}</div>
                  </div>
                </div>
              </div>))}
          </Marquee>

        </div>
      </div>
    </section>);
}
