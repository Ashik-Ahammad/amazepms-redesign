import { Faq } from "@/components/sections/Faq";
export const metadata = {
    title: "Frequently Asked Questions | Amaze Property Management",
    description: "Find answers to common questions about Amaze PMS property management, workforce size, SOP customization, and PAN India presence.",
};
export default function FaqPage() {
    return (<main className="pt-20">
      <Faq />
    </main>);
}
