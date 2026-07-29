"use client";

import { Button } from "@/components/ui/Button";
import { Send } from "lucide-react";

export function ContactForm() {
  return (
    <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl border border-border bg-surface-glass">
      <h3 className="text-2xl font-bold text-foreground mb-2">Send Us a Message</h3>
      <p className="text-sm text-muted mb-8">
        Fill out the form below and our regional representative will get back to you within 24 hours.
      </p>

      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
              Your Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:border-brand transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+91 98765 43210"
              className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:border-brand transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="john@company.com"
              className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:border-brand transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
              Service Required
            </label>
            <select className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:border-brand transition-colors">
              <option>Integrated Facility Management</option>
              <option>Security Services</option>
              <option>Housekeeping & Sanitation</option>
              <option>Pest Control</option>
              <option>Horticulture & Landscaping</option>
              <option>Mechanical & Electrical (MEP)</option>
              <option>Career / Recruitment Inquiry</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
            Property Details & Message
          </label>
          <textarea
            rows={4}
            placeholder="Tell us about your property location, square footage, or specific service requirements..."
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:border-brand transition-colors resize-none"
          />
        </div>

        <Button variant="primary" size="lg" className="w-full sm:w-auto" icon={<Send className="w-4 h-4" />}>
          Submit Inquiry
        </Button>
      </form>
    </div>
  );
}
