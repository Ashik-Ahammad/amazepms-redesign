import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";
import { Phone, Mail, MapPin, Clock, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export const metadata: Metadata = {
  title: "Contact Us | Amaze Property Management",
  description:
    "Get in touch with Amaze PMS for property management inquiries, recruitment, career opportunities, or emergency assistance across India.",
};

export default function ContactPage() {
  return (
    <main className="pt-32 pb-24 sm:pb-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          badge="Get In Touch"
          title="Contact Our"
          titleHighlight="Expert Team"
          description="Have questions about our facility management services or looking for a customized proposal? Reach out to us today."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-12">
          {/* Left Column: Info & Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl border border-border bg-surface-glass space-y-6">
              <h3 className="text-xl font-bold text-foreground">Head Office</h3>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center shrink-0 text-brand">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase font-medium tracking-wider mb-1">Address</div>
                  <div className="text-sm font-medium text-foreground leading-relaxed">
                    4th Floor, High Mark Chambers, Khairatabad, Hyderabad - 500004, Telangana, India
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center shrink-0 text-brand">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase font-medium tracking-wider mb-1">24/7 Helpline</div>
                  <a href="tel:9908538137" className="text-base font-bold text-brand-light hover:underline">
                    +91 990 853 8137
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center shrink-0 text-brand">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase font-medium tracking-wider mb-1">Email Inquiries</div>
                  <a href="mailto:info@amazepms.com" className="text-sm font-medium text-foreground hover:text-brand-light">
                    info@amazepms.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center shrink-0 text-brand">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase font-medium tracking-wider mb-1">Working Hours</div>
                  <div className="text-sm font-medium text-foreground">
                    Mon - Sat: 9:00 AM - 6:00 PM (Emergency Desk 24/7)
                  </div>
                </div>
              </div>
            </div>

            {/* Regional Presence Card */}
            <div className="p-8 rounded-3xl border border-border bg-surface-glass">
              <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" /> Regional Presence
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Telangana", "Andhra Pradesh", "Karnataka", "Tamil Nadu", "Odisha"].map((state) => (
                  <span key={state} className="px-3 py-1.5 rounded-full text-xs font-semibold bg-brand/10 text-brand-light border border-brand/20">
                    {state}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form Component */}
          <ContactForm />
        </div>

        {/* Premium Map Section */}
        <div className="mt-24 mb-10 relative">
          <SectionHeading
            badge="Location"
            title="Find Us on"
            titleHighlight="The Map"
            align="center"
            className="mb-12"
          />
          
          <div className="relative w-full h-[500px] rounded-[2rem] overflow-hidden border border-border shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] group">
            {/* Edge Fades for seamless integration */}
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none opacity-50" />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none opacity-50" />
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none opacity-50" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none opacity-50" />
            
            {/* Interactive Overlay to prevent accidental scrolling while looking at the page */}
            <div className="absolute inset-0 bg-background/10 backdrop-blur-[2px] z-20 transition-all duration-300 flex items-center justify-center opacity-100 group-hover:opacity-0 group-hover:pointer-events-none">
              <div className="px-6 py-3 rounded-full bg-surface-glass-strong border border-border shadow-lg text-sm font-semibold flex items-center gap-2 text-foreground transform transition-transform duration-300 group-hover:scale-95">
                <MapPin className="w-4 h-4 text-brand" />
                Hover to interact with map
              </div>
            </div>

            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4530.047296199675!2d78.3725816751661!3d17.439157883456883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e7400a98af%3A0xb86a441596737d73!2sAMAZE%20Property%20Management%20Solutions%20Pvt.%20Ltd!5e1!3m2!1sen!2sbd!4v1785329289157!5m2!1sen!2sbd" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="strict-origin-when-cross-origin"
              className="absolute inset-0 w-full h-full filter grayscale-[0.2] contrast-[1.05] opacity-90 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
