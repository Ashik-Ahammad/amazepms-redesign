import type { Metadata } from "next";
import { About } from "@/components/sections/About";
import { Features } from "@/components/sections/Features";

export const metadata: Metadata = {
  title: "About Us | Amaze Property Management",
  description:
    "Learn about Amaze PMS Pvt Ltd, a division of Action Group founded in 2001, managing 20M+ sq. ft. across India with 15,000+ professionals.",
};

export default function AboutPage() {
  return (
    <main className="pt-20">
      <About />
      <Features />
    </main>
  );
}
