import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Amaze PMS",
  description: "Get in touch with Amaze PMS for any queries regarding our facility management services.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
