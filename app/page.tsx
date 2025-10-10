"use client";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { CloudAgentsTrustSection } from "@/components/sections/CloudAgentsTrustSection";
import { FeaturesGridSection } from "@/components/sections/FeaturesGridSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PricingAndFAQSection } from "@/components/sections/PricingAndFAQSection";
import { FAQSection } from "@/components/sections/FAQSection";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <HeroSection />
      <HowItWorksSection />
      <CloudAgentsTrustSection />
      <FeaturesGridSection />
      <PricingAndFAQSection />
      <TestimonialsSection />
      <FAQSection />
    </div>
  );
}