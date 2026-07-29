import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Clients | Amaze PMS",
  description: "See the elite brands and corporations that trust Amaze PMS for their facility management needs across India.",
};

export default function ClientsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
