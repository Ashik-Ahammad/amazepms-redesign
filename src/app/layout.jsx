import { Geist, Geist_Mono } from "next/font/google";
import { LenisProvider } from "@/components/layout/LenisProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/ui/BackToTop";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Toaster } from "react-hot-toast";
import "./globals.css";
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});
const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});
export const metadata = {
    title: "Amaze PMS — Premium Property Management Solutions | PAN India",
    description: "Amaze PMS delivers integrated facility management, security, housekeeping, and maintenance solutions across India. 15,000+ workforce, 200+ clients, 20M+ sq. ft. managed.",
    keywords: "property management, facility management, security services, housekeeping, pest control, horticulture, India",
};
export default function RootLayout({ children, }) {
    return (<html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <LenisProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <BackToTop />
          <WhatsAppButton />
          <Toaster position="bottom-right" toastOptions={{
            className: '!bg-surface-glass-strong !text-foreground !border !border-border !shadow-xl !rounded-2xl',
            style: {
                backdropFilter: 'blur(12px)',
            }
        }}/>
        </LenisProvider>
      </body>
    </html>);
}
