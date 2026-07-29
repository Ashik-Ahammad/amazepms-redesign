import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Amaze PMS",
  description: "Explore our comprehensive range of facility management services including Security, Housekeeping, and Technical support.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
