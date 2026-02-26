import type { Metadata } from "next";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQSection } from "@/components/sections/FAQSection";

export const pricingHeroData = {
  title: "Start free. Scale when you're ready.",
  description:
    "Start free and scale as you grow. No hidden fees, no DevOps overhead — just instant deployment.",
};

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for Nexlayer. Start free and scale as you grow. No hidden fees, no DevOps overhead — just instant deployment.",
  openGraph: {
    title: "Pricing | Nexlayer",
    description:
      "Simple, transparent pricing for Nexlayer. Start free and scale as you grow. No hidden fees, no DevOps overhead — just instant deployment.",
    url: "https://nexlayer.com/pricing",
    images: [
      {
        url: `/api/og/pricing?title=${encodeURIComponent(pricingHeroData.title)}&description=${encodeURIComponent(pricingHeroData.description)}`,
        width: 1200,
        height: 630,
        alt: pricingHeroData.title,
      },
    ],
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
      <PricingSection heroData={pricingHeroData} />
      <FAQSection />
    </div>
  );
}
