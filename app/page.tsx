"use client"
import { Navigation } from "@/components/Navigation"
import { HeroSection } from "@/components/HeroSection"
import { HowItWorksSection } from "@/components/HowItWorksSection"
import { FeaturesGridSection } from "@/components/FeaturesGridSection"
import { FeaturesSection } from "@/components/FeaturesSection"
import { Footer } from "@/components/Footer"
import { TestimonialsSection } from "@/components/TestimonialsSection"

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
