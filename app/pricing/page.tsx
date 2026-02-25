import type { Metadata } from "next";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQSection } from "@/components/sections/FAQSection";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for Nexlayer. Start free and scale as you grow. No hidden fees, no DevOps overhead — just instant deployment.",
  openGraph: {
    title: "Pricing | Nexlayer",
    description:
      "Simple, transparent pricing for Nexlayer. Start free and scale as you grow. No hidden fees, no DevOps overhead — just instant deployment.",
    url: "https://nexlayer.com/pricing",
  },
  twitter: {
    title: "Pricing | Nexlayer",
    description:
      "Simple, transparent pricing for Nexlayer. Start free and scale as you grow. No hidden fees, no DevOps overhead — just instant deployment.",
  },
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <PricingSection />
      <FAQSection />
    </div>
  );
}
