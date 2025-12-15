"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { StepOne } from "./StepOne"
import { StepTwo } from "./StepTwo"
import { StepThree } from "./StepThree"

export function HowItWorksDemo() {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedAgent, setSelectedAgent] = useState<{ name: string; icon: any; gradient: string } | null>(null)

  const steps = [
    { id: 1, label: "Connect", color: "from-indigo-500 to-violet-500" },
    { id: 2, label: "Deploy", color: "from-cyan-400 to-blue-500" },
    { id: 3, label: "Live", color: "from-emerald-400 to-teal-500" },
  ]

  const handleStepClick = (index: number) => {
    setCurrentStep(index)
  }

  const handleAgentSelected = (agent: { name: string; icon: any; gradient: string }) => {
    setSelectedAgent(agent)
    setCurrentStep(1) // Navigate to deploy step
  }

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Step Navigation Pills */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12 flex items-center justify-center gap-1"
      >
        {steps.map((step, index) => (
          <button
            key={step.id}
            onClick={() => handleStepClick(index)}
            className={`relative rounded-full px-5 py-2 text-sm font-medium transition-all duration-500 cursor-pointer ${
              currentStep === index ? "text-white" : "text-white/50 hover:text-white/80"
            }`}
          >
            {currentStep === index && (
              <motion.div
                layoutId="activeStep"
                className={`absolute inset-0 rounded-full bg-gradient-to-r ${step.color}`}
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
              />
            )}
            <span className="relative z-10">{step.label}</span>
          </button>
        ))}
      </motion.div>

      {/* Step Content */}
      <div className="relative w-full min-h-[500px] md:min-h-[600px] flex flex-col items-center">
        <AnimatePresence mode="wait">
          {currentStep === 0 && <StepOne key="step-one" onAgentSelected={handleAgentSelected} />}
          {currentStep === 1 && <StepTwo key="step-two" selectedAgent={selectedAgent} />}
          {currentStep === 2 && <StepThree key="step-three" />}
        </AnimatePresence>
      </div>
    </div>
  )
}
