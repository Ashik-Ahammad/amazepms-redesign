"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
export function SectionHeading({ badge, title, titleHighlight, description, align = "center", className, }) {
    return (<motion.div className={cn("max-w-3xl mb-16", align === "center" && "mx-auto text-center", className)} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
      {badge && (<motion.span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-brand-light border border-brand/20 bg-brand/5" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
          {badge}
        </motion.span>)}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
        <span className="text-gradient">{title}</span>
        {titleHighlight && (<>
            {" "}
            <span className="text-gradient-brand">{titleHighlight}</span>
          </>)}
      </h2>
      {description && (<motion.p className="mt-5 text-base sm:text-lg text-muted leading-relaxed" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
          {description}
        </motion.p>)}
    </motion.div>);
}
