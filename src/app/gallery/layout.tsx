import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Amaze PMS",
  description: "Take a visual tour of our facilities, operations, and the dedicated teams that power Amaze PMS.",
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
