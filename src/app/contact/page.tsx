import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";
import { Phone, Mail, MapPin, Clock, ShieldCheck } from "lucide-react";

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
      </div>
    </main>
  );
}
