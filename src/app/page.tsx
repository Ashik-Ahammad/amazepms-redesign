import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { ServicesBento } from "@/components/sections/ServicesBento";
import { Features } from "@/components/sections/Features";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { CtaBanner } from "@/components/sections/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <ServicesBento />
      <Features />
      <Testimonials />
      <Faq />
      <CtaBanner />
    </>
  );
}
