"use client"

import { Navigation } from "@/components/layout/Navigation"
import { HeroSection } from "@/components/sections/HeroSection"
import { ComparisonSection } from "@/components/sections/ComparisonSection"
import { CloudAgentsTrustSection } from "@/components/sections/CloudAgentsTrustSection"
import { HowItWorksSection } from "@/components/sections/HowItWorksSection"
import { FeaturesSection } from "@/components/sections/FeaturesSection"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { ReadyToShipSection } from "@/components/sections/ReadyToShipSection"
import { Footer } from "@/components/layout/Footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navigation />

      <main>
        <HeroSection />
        <ComparisonSection />
        <CloudAgentsTrustSection />
        <HowItWorksSection />
        <FeaturesSection />
        <TestimonialsSection />
        <ReadyToShipSection />
      </main>

      <Footer />
    </div>
  )
}
