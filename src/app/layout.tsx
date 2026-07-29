import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LenisProvider } from "@/components/layout/LenisProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { BackToTop } from "@/components/ui/BackToTop";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amaze PMS — Premium Property Management Solutions | PAN India",
  description:
    "Amaze PMS delivers integrated facility management, security, housekeeping, and maintenance solutions across India. 15,000+ workforce, 300+ clients, 20M+ sq. ft. managed.",
  keywords:
    "property management, facility management, security services, housekeeping, pest control, horticulture, India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <LenisProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <CustomCursor />
          <BackToTop />
        </LenisProvider>
      </body>
    </html>
  );
}
