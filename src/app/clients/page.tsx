import type { Metadata } from "next";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Testimonials } from "@/components/sections/Testimonials";

export const metadata: Metadata = {
  title: "Our Clients & Case Studies | Amaze Property Management",
  description:
    "Trusted by 300+ clients across India including Mahindra World City, CBRE, Kalpataru, Wipro, and Adani.",
};

export default function ClientsPage() {
  return (
    <main className="pt-20">
      <TrustedBy />
      <Testimonials />
    </main>
  );
}
