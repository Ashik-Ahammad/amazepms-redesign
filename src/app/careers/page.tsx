import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Careers | Amaze Property Management",
  description: "Career opportunities at Amaze PMS.",
};

export default function CareersPage() {
  return (
    <main className="pt-32 pb-24 sm:pb-32 overflow-hidden min-h-screen flex items-center justify-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <SectionHeading
          badge="Careers"
          title="Build Your"
          titleHighlight="Career With Us"
          description="Explore opportunities to grow and thrive in the facility management sector."
        />
        <div className="mt-12 p-8 rounded-3xl border border-border bg-surface-glass inline-block">
          <p className="text-muted text-lg">Send your resume to hr@amazepms.com to be considered for future roles.</p>
        </div>
      </div>
    </main>
  );
}
