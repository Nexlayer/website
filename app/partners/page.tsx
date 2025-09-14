"use client"

import { Button } from "../../components/ui/button"
import { Card } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { Navigation } from "../../components/layout/Navigation"
import { StellarStackLogo, TekiesoftLogo } from "../../components/logos/partners"

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Hire a Nexlayer Partner
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Whether you're just getting started with Nexlayer or looking to implement advanced functionality, 
            our partners have the expertise and industry knowledge to deliver the right solution.
          </p>
          <Button 
            className="bg-transparent border-2 border-cyan-400 text-cyan-400 hover:!bg-cyan-400 hover:!text-black px-8 py-3 text-lg font-medium rounded-lg transition-all duration-300"
            onClick={() => document.getElementById('partners-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Meet our partners
          </Button>
          <div className="mt-6">
            <a 
              href="mailto:partnerships@nexlayer.com"
              className="text-white hover:text-cyan-400 text-sm font-medium transition-colors duration-300"
            >
              Are you a builder or agency? Apply to become a partner →
            </a>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-400 text-black rounded-lg flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Describe Your Project</h3>
              <p className="text-gray-300">
                Tell us about your project vision and core features to build
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-400 text-black rounded-lg flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Get Paired</h3>
              <p className="text-gray-300">
                We match your application with the perfect builder or you can contact expert builders directly
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-400 text-black rounded-lg flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Build Your Project</h3>
              <p className="text-gray-300">
                Your expert builder brings your vision to life
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-400 text-black rounded-lg flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-3">Maintain Control</h3>
              <p className="text-gray-300">
                Edit your project with Nexlayer anytime and re-engage with expert builders as needed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners-section" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">
            Meet our Nexlayer Partners
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Connect directly with our partners below. Can't find the right fit?{" "}
            <span className="text-cyan-400">Let us help match you</span> with the perfect partner.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Partner 1 */}
            <Card className="bg-gray-900 border-gray-700 p-6 relative">
              <Badge className="absolute top-4 right-4 bg-orange-500 text-white">
                Preferred Partner
              </Badge>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4 p-2">
                  <StellarStackLogo width={32} height={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">StellarStack</h3>
                  <p className="text-gray-400 text-sm">British Columbia, Canada • English</p>
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <p className="text-white"><span className="text-gray-400">Budget:</span> Starting from $1500</p>
                <p className="text-white"><span className="text-gray-400">Hourly Rate:</span> $55/hr</p>
                <p className="text-cyan-400"><span className="text-gray-400">Website:</span>www.stellarstack.co/</p>
                <p className="text-cyan-400"><span className="text-gray-400">Nexlayer Projects:</span>37</p>
              </div>
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-2">Key Services:</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• Rapid MVP Development</li>
                  <li>• AUI/UX Design</li>
                  <li>• Full-Stack Application Development</li>
                  <li>• API integrations</li>
                  <li>• AI/LLM model integration</li>
                  <li>• Cloud infrastructure management</li>
                </ul>
              </div>
              <Button 
                className="w-full bg-transparent border-2 border-cyan-400 text-cyan-400 hover:!bg-cyan-400 hover:!text-black font-medium transition-all duration-300"
                onClick={() => window.open('mailto:partnerships@nexlayer.com?subject=Hiring StellarStack for my Nexlayer project', '_blank')}
              >
                Contact
              </Button>
            </Card>

            {/* Partner 2 */}
            <Card className="bg-gray-900 border-gray-700 p-6 relative">
              <Badge className="absolute top-4 right-4 bg-orange-500 text-white">
                Preferred Partner
              </Badge>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4 p-2">
                  <TekiesoftLogo width={32} height={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Tekiesoft</h3>
                  <p className="text-gray-400 text-sm">Atlanta, Georgia • English</p>
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <p className="text-white"><span className="text-gray-400">Budget:</span> Starting from $3,000</p>
                <p className="text-white"><span className="text-gray-400">Hourly Rate:</span>$100/hr</p>
                <p className="text-cyan-400"><span className="text-gray-400">Website:</span>www.tekiesoft.com</p>
                <p className="text-cyan-400"><span className="text-gray-400">Nexlayer Projects:</span>23</p>
              </div>
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-2">Key Services:</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• CI/CD Pipelines for automated deployments</li>
                  <li>• Cloud Cost Optimization</li>
                  <li>• Data pipeline architecture</li>
                  <li>• Custom AI integrations</li>
                  <li>• Scaling guidance</li>
                  <li>• Startup-Ready Security</li>
                </ul>
              </div>
              <Button 
                className="w-full bg-transparent border-2 border-cyan-400 text-cyan-400 hover:!bg-cyan-400 hover:!text-black font-medium transition-all duration-300"
                onClick={() => window.open('mailto:partnerships@nexlayer.com?subject=Hiring Tekiesoft for my Nexlayer project', '_blank')}
              >
                Contact
              </Button>
            </Card>

            {/* Become a Partner Card */}
            <Card className="bg-gray-900 border-gray-700 p-6 border-2 border-dashed border-cyan-400/50 hover:border-cyan-400 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Become a Partner</h3>
                  <p className="text-gray-400 text-sm">Join our partner network</p>
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <p className="text-white"><span className="text-gray-400">Benefits:</span> Preferred partner status</p>
                <p className="text-white"><span className="text-gray-400">Support:</span> Dedicated partner resources</p>
                <p className="text-cyan-400"><span className="text-gray-400">Growth:</span> Access to our client network</p>
                <p className="text-cyan-400"><span className="text-gray-400">Training:</span> Nexlayer expertise certification</p>
              </div>
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-2">What we're looking for:</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• Proven development experience</li>
                  <li>• Strong client communication</li>
                  <li>• Nexlayer platform expertise</li>
                  <li>• Portfolio of successful projects</li>
                  <li>• Commitment to quality delivery</li>
                </ul>
              </div>
              <Button 
                className="w-full bg-transparent border-2 border-cyan-400 text-cyan-400 hover:!bg-cyan-400 hover:!text-black font-medium transition-all duration-300"
                onClick={() => window.open('mailto:partnerships@nexlayer.com?subject=Looking to become a Nexlayer partner?', '_blank')}
              >
                Apply Now
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
