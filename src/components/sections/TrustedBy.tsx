"use client";

import { motion } from "framer-motion";
import { TRUSTED_CLIENTS } from "@/constants";

export function TrustedBy() {
  return (
    <section id="clients" className="relative py-16 border-y border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.p
          className="text-center text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Trusted by 200+ leading organizations across India
        </motion.p>

        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

          {/* Infinite scroll ticker */}
          <motion.div
            className="flex items-center gap-16"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {/* Double the items for seamless loop */}
            {[...TRUSTED_CLIENTS, ...TRUSTED_CLIENTS].map((client, i) => (
              <div
                key={`${client}-${i}`}
                className="flex-shrink-0 flex items-center justify-center h-12 px-8"
              >
                <span className="text-lg sm:text-xl font-bold tracking-wide text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors duration-300 whitespace-nowrap select-none">
                  {client}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
