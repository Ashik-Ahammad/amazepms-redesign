import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Gallery | Amaze Property Management",
  description: "View our facilities, events, and operations.",
};

export default function GalleryPage() {
  return (
    <main className="pt-32 pb-24 sm:pb-32 overflow-hidden min-h-screen flex items-center justify-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <SectionHeading
          badge="Gallery"
          title="Life At"
          titleHighlight="Amaze PMS"
          description="A glimpse into our daily operations, training programs, and corporate events."
        />
        <div className="mt-12 p-8 rounded-3xl border border-border bg-surface-glass inline-block">
          <p className="text-muted text-lg">Image gallery coming soon.</p>
        </div>
      </div>
    </main>
  );
}
