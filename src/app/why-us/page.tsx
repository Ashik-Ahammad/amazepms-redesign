import type { Metadata } from "next";
import { Features } from "@/components/sections/Features";
import { Testimonials } from "@/components/sections/Testimonials";

export const metadata: Metadata = {
  title: "Why Choose Us | Amaze Property Management",
  description:
    "Discover our 20M+ sq. ft. managed portfolio, site-specific SOPs, in-house workforce, regular audits, and staff welfare commitment.",
};

export default function WhyUsPage() {
  return (
    <main className="pt-20">
      <Features />
      <Testimonials />
    </main>
  );
}
