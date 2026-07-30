"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
export function LenisProvider({ children }) {
    const lenisRef = useRef(null);
    const pathname = usePathname();
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            touchMultiplier: 2,
            infinite: false,
        });
        lenisRef.current = lenis;
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        // Handle anchor link clicks for smooth scroll
        const handleAnchorClick = (e) => {
            const target = e.target;
            const anchor = target.closest("a[href^='#']");
            if (anchor) {
                e.preventDefault();
                const href = anchor.getAttribute("href");
                if (href && href !== "#") {
                    const el = document.querySelector(href);
                    if (el) {
                        lenis.scrollTo(el, { offset: -80 });
                    }
                }
            }
        };
        document.addEventListener("click", handleAnchorClick);
        return () => {
            lenis.destroy();
            document.removeEventListener("click", handleAnchorClick);
        };
    }, []);
    // Reset scroll to top on route change
    useEffect(() => {
        if (lenisRef.current) {
            lenisRef.current.scrollTo(0, { immediate: true });
        }
        else {
            window.scrollTo(0, 0);
        }
    }, [pathname]);
    return <>{children}</>;
}
