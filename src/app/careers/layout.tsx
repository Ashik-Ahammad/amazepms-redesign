import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Amaze PMS",
  description: "Join the Amaze PMS team. Explore our current job openings and build a rewarding career in facility management.",
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
