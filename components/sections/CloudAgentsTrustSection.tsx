"use client"

import { Button } from "../ui/button"

interface TrustCardProps {
  title: string
  description: string
  icon: React.ReactNode
  stats?: string
}

const TrustCard = ({ title, description, icon, stats }: TrustCardProps) => (
  <div className="bg-gray-800/20 border border-gray-700 rounded-2xl p-8 hover:border-gray-600 transition-all duration-300">
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center mr-4">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        {stats && <p className="text-cyan-400 font-semibold">{stats}</p>}
      </div>
    </div>
    <p className="text-gray-400">{description}</p>
  </div>
)

export const CloudAgentsTrustSection = () => {
  const trustData = [
    {
      title: "Production Ready",
      description: "Deploy production-grade applications with enterprise-level reliability and performance.",
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      stats: "99.9% Uptime"
    },
    {
      title: "Global Scale",
      description: "Automatic global deployment with edge optimization and intelligent routing.",
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      stats: "200+ Regions"
    },
    {
      title: "Security First",
      description: "Built-in security, compliance, and privacy controls for enterprise applications.",
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      stats: "SOC 2 Type II"
    },
    {
      title: "AI-Powered",
      description: "Intelligent agents handle deployment, scaling, and optimization automatically.",
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      stats: "Auto-Optimized"
    }
  ]

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            The Cloud Agents Trust
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Built for the most demanding applications with enterprise-grade reliability and performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {trustData.map((item, index) => (
            <TrustCard
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
              stats={item.stats}
            />
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={() => window.open("https://jnsbqhb7fyt.typeform.com/to/a9DtuhOo?utm_source=website&utm_medium=trust_cta&utm_campaign=mcp_onboarding_q3_2025&utm_term=intent_ship_now&utm_content=home_v1", "_blank")}
            className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold px-8 py-4 rounded-full hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
          >
            Trust Your Agents
          </Button>
        </div>
      </div>
    </section>
  )
}
