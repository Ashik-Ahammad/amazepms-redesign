"use client";
import { motion } from "framer-motion";
export function WhatsAppButton() {
    return (<motion.a href="https://wa.me/919908538137" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[100] p-4 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-[0_0_30px_-5px_rgba(37,211,102,0.6)] hover:scale-110 transition-all cursor-pointer flex items-center justify-center group" aria-label="Chat on WhatsApp" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 1 }}>
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 sm:w-8 sm:h-8">
        <path d="M12.031 0C5.385 0 0 5.384 0 12.032c0 2.645.823 5.105 2.298 7.16L.516 24l5.032-1.744a11.977 11.977 0 0 0 6.483 1.868c6.645 0 12.031-5.384 12.031-12.031S18.676 0 12.031 0zm0 21.996a9.852 9.852 0 0 1-5.068-1.401l-.36-.213-3.722 1.29 1.309-3.64-.236-.375A9.857 9.857 0 0 1 2.128 12.03C2.128 6.559 6.56 2.126 12.031 2.126s9.903 4.434 9.903 9.905c0 5.471-4.432 9.904-9.903 9.904zm5.419-7.397c-.297-.149-1.763-.872-2.035-.972-.272-.1-.47-.149-.669.149-.198.298-.767.971-.941 1.17-.173.198-.346.223-.644.074a8.121 8.121 0 0 1-2.39-1.474 8.97 8.97 0 0 1-1.656-2.06c-.173-.298-.019-.46.13-.608.134-.134.298-.348.446-.522.148-.174.198-.298.297-.497.1-.198.05-.372-.025-.521-.074-.149-.669-1.613-.916-2.209-.241-.58-.485-.502-.669-.512a3.8 3.8 0 0 0-.57-.01c-.198 0-.52.074-.792.371-.272.298-1.04 1.017-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.71.308 1.263.491 1.694.63.712.228 1.36.195 1.871.118.572-.086 1.763-.721 2.01-1.42.248-.698.248-1.296.174-1.42-.074-.124-.272-.198-.57-.347z"/>
      </svg>
      {/* Optional Tooltip */}
      <span className="absolute right-[110%] top-1/2 -translate-y-1/2 px-4 py-2 rounded-xl bg-surface-glass-strong border border-border text-sm font-semibold text-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none drop-shadow-md">
        Chat with us
      </span>
    </motion.a>);
}
