import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Recruitments | Amaze Property Management",
  description: "Join our team of 15000+ professionals.",
};

export default function RecruitmentsPage() {
  return (
    <main className="pt-32 pb-24 sm:pb-32 overflow-hidden min-h-screen flex items-center justify-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <SectionHeading
          badge="Join Our Team"
          title="Current"
          titleHighlight="Recruitments"
          description="We are constantly looking for talented individuals to join our growing facility management family."
        />
        <div className="mt-12 p-8 rounded-3xl border border-border bg-surface-glass inline-block">
          <p className="text-muted text-lg">No active openings at the moment. Please check back later or visit the Careers page.</p>
        </div>
      </div>
    </main>
  );
}
