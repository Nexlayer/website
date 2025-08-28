import { Navigation } from "./Navigation"
import { HeroSection } from "./HeroSection"
import { FeaturesSection } from "./FeaturesSection"
import { Footer } from "./Footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navigation />
      
      <main>
        <HeroSection />
        <FeaturesSection />
      </main>

      <Footer />
    </div>
  )
}
