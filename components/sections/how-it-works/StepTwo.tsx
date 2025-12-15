"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { CheckCircle, Circle } from "lucide-react"

const deploymentSteps = [
  { id: "reviewing", label: "Reviewing your project stack", completed: true },
  { id: "validating", label: "Validating configuration", completed: true },
  { id: "deploying", label: "Deploy to Nexlayer...", completed: false, active: true },
]

interface StepTwoProps {
  selectedAgent?: { name: string; icon: any; gradient: string } | null
}

export function StepTwo({ selectedAgent }: StepTwoProps) {
  const [progress, setProgress] = useState(0)
  const [isDeploying, setIsDeploying] = useState(false)

  const handleDeploy = () => {
    setIsDeploying(true)
    setProgress(0)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 100)
  }

  const AgentIcon = selectedAgent?.icon
  const agentGradient = selectedAgent?.gradient || "from-[#000000] to-[#1a1a1a]"
  const agentName = selectedAgent?.name || "Claude Code"

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -40, transition: { duration: 0.4 } }}
      className="flex max-w-5xl flex-col items-center text-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mb-6"
      >
        <span className="bg-gradient-to-b from-white/20 to-white/5 bg-clip-text text-[120px] font-bold leading-none tracking-tighter text-transparent md:text-[180px]">
          02
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="mb-4 text-balance text-4xl font-normal tracking-tight text-white md:text-6xl lg:text-7xl"
        style={{ fontFamily: '"Anthropic Serif", Georgia, sans-serif' }}
      >
        One prompt.{" "}
        <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
          Ship anything.
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12 max-w-lg text-lg text-white/50 md:text-xl"
      >
        Whatever your coding agent can build, Nexlayer can deploy
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-2xl"
      >
        {/* Glow */}
        <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-r from-cyan-500/20 via-teal-500/20 to-emerald-500/20 opacity-50 blur-2xl" />

        {/* Terminal/Console */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0f] shadow-2xl">
          {/* Chrome */}
          <div className="flex items-center gap-3 border-b border-white/5 bg-white/[0.02] px-4 py-3">
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <div className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>

            {/* Title bar */}
            <div className="flex flex-1 items-center gap-2 rounded-lg bg-white/5 px-4 py-2">
              <div className="flex items-center gap-2">
                {AgentIcon ? (
                  <div className={`h-5 w-5 rounded-lg bg-gradient-to-br ${agentGradient} flex items-center justify-center flex-shrink-0 ${agentName === "Claude Code" ? "[&_path]:fill-white" : ''}`}>
                    <AgentIcon className="h-3 w-3" />
                  </div>
                ) : (
                  <div className="h-5 w-5 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <span className="text-[10px] text-purple-400">YOU</span>
                  </div>
                )}
                <span className="text-sm text-white/60">{selectedAgent ? selectedAgent.name : "AI Coding Agent"}</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            {/* Deploy button */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-9 w-9 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-xs text-purple-400 font-semibold">YOU</span>
              </div>
              <button 
                onClick={handleDeploy}
                disabled={isDeploying}
                className="px-6 py-2.5 rounded-lg bg-gray-800/50 border border-gray-700 text-white text-sm font-medium hover:bg-gray-700/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Deploy to Nexlayer
              </button>
            </div>

            {/* Deployment steps */}
            <div className="space-y-3">
              {deploymentSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                  className="flex items-center gap-3"
                >
                  {/* Agent icon for "Reviewing your project stack" step */}
                  {step.id === "reviewing" && AgentIcon ? (
                    <div className={`h-6 w-6 rounded-lg bg-gradient-to-br ${agentGradient} flex items-center justify-center flex-shrink-0 ${agentName === "Claude Code" ? "[&_path]:fill-white" : ''}`}>
                      <AgentIcon className="h-4 w-4" />
                    </div>
                  ) : step.completed ? (
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20">
                      <CheckCircle className="h-4 w-4 text-emerald-400" />
                    </div>
                  ) : step.active ? (
                    <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-cyan-400">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                        className="h-2 w-2 rounded-full bg-cyan-400"
                      />
                    </div>
                  ) : (
                    <Circle className="h-6 w-6 text-gray-600" />
                  )}
                  <span className={`text-sm ${step.completed ? "text-white/60" : step.active ? "text-cyan-400" : "text-gray-500"}`}>
                    {step.label}
                  </span>
                  {step.active && isDeploying && (
                    <div className="flex-1 h-1.5 rounded-full bg-gray-800 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
