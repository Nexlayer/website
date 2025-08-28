"use client"

import { useState } from "react"
import { Button } from "../ui/button"

interface StepProps {
  number: number
  title: string
  description: string
  videoSrc: string
  isActive: boolean
  onClick: () => void
}

const Step = ({ number, title, description, videoSrc, isActive, onClick }: StepProps) => (
  <div
    className={`flex-1 p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
      isActive
        ? "border-cyan-400 bg-cyan-400/5"
        : "border-gray-700 bg-gray-800/20 hover:border-gray-600"
    }`}
    onClick={onClick}
  >
    <div className="flex items-center mb-4">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
        isActive ? "bg-cyan-400 text-black" : "bg-gray-600 text-white"
      }`}>
        {number}
      </div>
      <h3 className={`text-lg font-bold ${isActive ? "text-cyan-400" : "text-white"}`}>
        {title}
      </h3>
    </div>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
)

export const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(1)

  const steps = [
    {
      number: 1,
      title: "Connect Your Repo",
      description: "Link your GitHub repository to Nexlayer with one click",
      videoSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/deploy-production-grade-apps-in-minutes-with-nexlayer-kDjfZ7nBPIjusrpugZb28UDg0VD693.mp4"
    },
    {
      number: 2,
      title: "Deploy Globally",
      description: "Your app is automatically deployed to 200+ global regions",
      videoSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/from-local-to-global-app-EhEDyeKqYNJWXAd3Jzg1kWv2jSZT6V.mp4"
    },
    {
      number: 3,
      title: "Scale Automatically",
      description: "AI agents handle scaling, optimization, and monitoring",
      videoSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/claim-extend-reserve-it-nexlayer-c0LsegwBtzeAtUl3WV8bcGVoruVwSG.mp4"
    }
  ]

  const activeStepData = steps.find(step => step.number === activeStep)

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            See How It Works
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From GitHub to global deployment in three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Steps */}
          <div className="space-y-4">
            {steps.map((step) => (
              <Step
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
                videoSrc={step.videoSrc}
                isActive={activeStep === step.number}
                onClick={() => setActiveStep(step.number)}
              />
            ))}
          </div>

          {/* Video Demo */}
          <div className="relative">
            <div className="bg-gray-800/20 border border-gray-700 rounded-2xl overflow-hidden">
              {activeStepData && (
                <video
                  className="w-full h-96 object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={activeStepData.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            onClick={() => window.open("https://jnsbqhb7fyt.typeform.com/to/a9DtuhOo?utm_source=website&utm_medium=how_it_works_cta&utm_campaign=mcp_onboarding_q3_2025&utm_term=intent_ship_now&utm_content=home_v1", "_blank")}
            className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold px-8 py-4 rounded-full hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
          >
            Try It Now
          </Button>
        </div>
      </div>
    </section>
  )
}
