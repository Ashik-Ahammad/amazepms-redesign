import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { About } from "@/components/sections/About";
import { ServicesBento } from "@/components/sections/ServicesBento";
import { Features } from "@/components/sections/Features";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <About />
      <ServicesBento />
      <Features />
      <Testimonials />
      <Faq />
    </>
  );
}
