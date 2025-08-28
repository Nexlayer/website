"use client"
import { Navigation } from "@/components/layout/Navigation"
import { HeroSection } from "@/components/sections/HeroSection"
import { HowItWorksSection } from "@/components/sections/HowItWorksSection"
import { FeaturesGridSection } from "@/components/sections/FeaturesGridSection"
import { FeaturesSection } from "@/components/sections/FeaturesSection"
import { Footer } from "@/components/layout/Footer"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navigation />

      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <FeaturesGridSection />
        <TestimonialsSection />
      </main>

      <Footer />
    </div>
  )
}
