import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recruitments & Training | Amaze PMS",
  description: "Learn about our rigorous recruitment protocols and continuous training programs at Amaze PMS.",
};

export default function RecruitmentsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
