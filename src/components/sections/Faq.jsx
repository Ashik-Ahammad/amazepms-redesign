"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ChevronDown } from "lucide-react";
function AccordionItem({ question, answer, isOpen, onToggle, }) {
    return (<div className="border-b border-border last:border-b-0">
      <button onClick={onToggle} className="w-full flex items-center justify-between py-5 text-left group cursor-pointer">
        <span className="text-sm sm:text-base font-medium text-foreground group-hover:text-brand-light transition-colors duration-200 pr-4">
          {question}
        </span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="shrink-0">
          <ChevronDown className="w-5 h-5 text-muted"/>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden">
            <p className="pb-5 text-sm text-muted leading-relaxed">{answer}</p>
          </motion.div>)}
      </AnimatePresence>
    </div>);
}
export function Faq() {
    const [openIndex, setOpenIndex] = useState(0);
    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (<section id="faq" className="relative py-24 sm:py-32 bg-surface overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/3 rounded-full blur-[120px] pointer-events-none"/>
      <div className="relative z-10 mx-auto max-w-3xl px-6 lg:px-8">
        <SectionHeading badge="FAQ" title="Frequently Asked" titleHighlight="Questions" description="Everything you need to know about our property management services."/>

        <motion.div className="rounded-2xl border border-border bg-background p-6 sm:p-8" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          {/* HARDCODED FAQ ITEMS - NO .map() */}
          <AccordionItem question="What types of properties do you manage?" answer="We manage a wide range of properties including commercial complexes, IT parks, residential societies, industrial facilities, hospitals, educational institutions, and government buildings across PAN India. Our portfolio spans over 20 million sq. ft." isOpen={openIndex === 0} onToggle={() => toggle(0)}/>
          <AccordionItem question="How large is your workforce?" answer="Amaze PMS has a 15,000+ strong workforce of trained professionals deployed across India. Our team includes security personnel, housekeeping staff, technical engineers, horticulturists, pest control specialists, and management executives." isOpen={openIndex === 1} onToggle={() => toggle(1)}/>
          <AccordionItem question="Do you provide customized service packages?" answer="Yes, absolutely. We offer fully customizable service packages tailored to each client's unique requirements. We develop site-specific SOPs, checklists, and service level agreements to ensure our solutions align perfectly with your operational needs." isOpen={openIndex === 2} onToggle={() => toggle(2)}/>
          <AccordionItem question="What is your geographical coverage?" answer="We operate PAN India with strong presence across Telangana, Andhra Pradesh, Karnataka, Tamil Nadu, and Odisha. Our headquarters are in Hyderabad, and we continue to expand our footprint across the country." isOpen={openIndex === 3} onToggle={() => toggle(3)}/>
          <AccordionItem question="How do you ensure quality of service?" answer="We maintain quality through regular internal audits, site-specific SOPs, yearly training calendars conducted by Training Officers, risk assessments, and comprehensive reporting. Our internal team audits each site regularly and proposes improvement plans." isOpen={openIndex === 4} onToggle={() => toggle(4)}/>
          <AccordionItem question="What employee welfare programs do you offer?" answer="We believe in taking care of our workforce. Our staff welfare programs include Diwali celebrations, gifts on Holi, rewards on Ugadi, health insurance, 10K funeral expenses, 1 lakh compensation, Ranker students & staff rewards up to 25 thousand." isOpen={openIndex === 5} onToggle={() => toggle(5)}/>
        </motion.div>
      </div>
    </section>);
}
