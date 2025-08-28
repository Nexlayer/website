"use client"

import { useState } from "react"
import { Button } from "../ui/button"

interface ComparisonCardProps {
  title: string
  description: string
  features: string[]
  isActive: boolean
  onClick: () => void
}

const ComparisonCard = ({ title, description, features, isActive, onClick }: ComparisonCardProps) => (
  <div
    className={`flex-1 p-8 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
      isActive
        ? "border-cyan-400 bg-cyan-400/5"
        : "border-gray-700 bg-gray-800/20 hover:border-gray-600"
    }`}
    onClick={onClick}
  >
    <h3 className={`text-2xl font-bold mb-4 ${isActive ? "text-cyan-400" : "text-white"}`}>
      {title}
    </h3>
    <p className="text-gray-400 mb-6">{description}</p>
    <ul className="space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start space-x-3">
          <div className={`w-2 h-2 rounded-full mt-2 ${isActive ? "bg-cyan-400" : "bg-gray-500"}`} />
          <span className="text-gray-300">{feature}</span>
        </li>
      ))}
    </ul>
  </div>
)

export const ComparisonSection = () => {
  const [activeTab, setActiveTab] = useState<"without" | "with">("without")

  const comparisonData = {
    without: {
      title: "Without Nexlayer",
      description: "Traditional deployment process",
      features: [
        "Manual infrastructure setup",
        "Complex configuration management",
        "Hours of debugging and troubleshooting",
        "Multiple deployment environments to manage",
        "Security and compliance overhead",
        "Scaling challenges and bottlenecks"
      ]
    },
    with: {
      title: "With Nexlayer",
      description: "Agent-native cloud deployment",
      features: [
        "One-click deployment from GitHub",
        "Automatic infrastructure provisioning",
        "Intelligent error handling and resolution",
        "Global deployment with edge optimization",
        "Built-in security and compliance",
        "Automatic scaling and performance optimization"
      ]
    }
  }

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ship Real Software
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See the difference between traditional deployment and agent-native cloud deployment
          </p>
        </div>

        <div className="flex gap-6 mb-12">
          <ComparisonCard
            title={comparisonData.without.title}
            description={comparisonData.without.description}
            features={comparisonData.without.features}
            isActive={activeTab === "without"}
            onClick={() => setActiveTab("without")}
          />
          <ComparisonCard
            title={comparisonData.with.title}
            description={comparisonData.with.description}
            features={comparisonData.with.features}
            isActive={activeTab === "with"}
            onClick={() => setActiveTab("with")}
          />
        </div>

        <div className="text-center">
          <Button
            onClick={() => window.open("https://jnsbqhb7fyt.typeform.com/to/a9DtuhOo?utm_source=website&utm_medium=comparison_cta&utm_campaign=mcp_onboarding_q3_2025&utm_term=intent_ship_now&utm_content=home_v1", "_blank")}
            className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold px-8 py-4 rounded-full hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
          >
            Start Shipping Today
          </Button>
        </div>
      </div>
    </section>
  )
}
