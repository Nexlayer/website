import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { CloudAgentsTrustSection } from "@/components/sections/CloudAgentsTrustSection";
import { FeaturesGridSection } from "@/components/sections/FeaturesGridSection";
import { ProductionGradeSection } from "@/components/sections/ProductionGradeSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { CTASection } from "@/components/sections/CTASection";

export const heroData = {
  title: "Ship anything from Cursor",
  description:
    "Tell your AI agent what to ship. Nexlayer handles the rest. Deploy production-ready apps directly from your coding agent—no DevOps, no YAML, no friction.",
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <HeroSection heroData={heroData} />
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