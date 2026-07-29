import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Amaze PMS",
  description: "Learn more about Amaze Property Management Solutions, our legacy, and our mission to provide world-class facility management.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
