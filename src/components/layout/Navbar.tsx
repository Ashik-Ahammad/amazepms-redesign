"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_LINKS } from "@/constants";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/30 backdrop-blur-3xl saturate-200 border-b border-transparent shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] py-3 dark:bg-background/10 dark:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.02)]"
            : "bg-transparent border-b border-transparent py-5 shadow-none"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
      >
        <nav className="w-full px-4 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group relative h-10 w-48 transition-transform duration-300 hover:scale-[1.02]">
            <Image 
              src="/nav-dark-logo.png" 
              alt="Amaze PMS" 
              fill
              className="object-contain object-left block dark:hidden"
              priority
            />
            <Image 
              src="/nav-logo.png" 
              alt="Amaze PMS" 
              fill
              className="object-contain object-left hidden dark:block"
              priority
            />
          </Link>

          {/* Desktop Right Side (Links + CTA) */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Desktop Links */}
            <div className="flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative whitespace-nowrap px-1.5 lg:px-2 xl:px-3 py-2 text-[13px] xl:text-sm font-medium transition-colors duration-300 group ${
                      isActive ? "text-brand-light font-semibold" : "text-muted hover:text-foreground"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-brand rounded-full transition-all duration-300 ${
                        isActive ? "w-6" : "w-0 group-hover:w-6"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Button
                variant="primary"
                size="sm"
                href="/contact"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Get Started
              </Button>
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              className="relative w-10 h-10 flex items-center justify-center text-foreground"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-2">
              {NAV_LINKS.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={`text-2xl font-semibold transition-colors ${
                        isActive ? "text-brand-light font-bold" : "text-muted hover:text-foreground"
                      }`}
                      onClick={() => setIsMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: NAV_LINKS.length * 0.05 }}
                className="mt-6"
              >
                <Button
                  variant="primary"
                  size="lg"
                  href="/contact"
                  onClick={() => setIsMobileOpen(false)}
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  Get Started
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
