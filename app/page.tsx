"use client";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { CloudAgentsTrustSection } from "@/components/sections/CloudAgentsTrustSection";
import { FeaturesGridSection } from "@/components/sections/FeaturesGridSection";
import { ProductionGradeSection } from "@/components/sections/ProductionGradeSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { CTASection } from "@/components/sections/CTASection";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <HeroSection />
      <div className="hidden">
        <CloudAgentsTrustSection />
      </div>
      <HowItWorksSection />
      <ProductionGradeSection />
      <FeaturesGridSection />
      <SocialProofSection />
      <CTASection />
    </div>
  );
}