import type { Metadata } from "next";
import { ServicesBento } from "@/components/sections/ServicesBento";
import { Features } from "@/components/sections/Features";

export const metadata: Metadata = {
  title: "Integrated Services | Amaze Property Management",
  description:
    "Explore our facility management, security, housekeeping, pest control, horticulture, MEP, swimming pool, and fire safety services.",
};

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <ServicesBento />
      <Features />
    </main>
  );
}
