"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Cursor } from "../../logos/Cursor"
import { ClaudeAI } from "../../logos/ClaudeAI"
import { GitHubCopilot } from "../../logos/GitHubCopilot"

const agents = [
  {
    name: "Cursor",
    subtitle: "AI-first code editor",
    gradient: "from-[#000000] to-[#1a1a1a]",
    icon: Cursor,
  },
  {
    name: "Claude Code",
    subtitle: "Anthropic's coding agent",
    gradient: "from-[#000000] to-[#1a1a1a]",
    icon: ClaudeAI,
  },
  {
    name: "Copilot",
    subtitle: "GitHub's AI pair programmer",
    gradient: "from-[#000000] to-[#2d333b]",
    icon: GitHubCopilot,
  },
]

interface StepOneProps {
  onAgentSelected?: (agent: { name: string; icon: any; gradient: string }) => void
}

export function StepOne({ onAgentSelected }: StepOneProps) {
  const [selectedAgent, setSelectedAgent] = useState(-1)
  const [showConnected, setShowConnected] = useState(false)

  const handleAgentClick = (index: number) => {
    setSelectedAgent(index)
    setShowConnected(true)
    
    // After showing connected, trigger navigation to deploy step
    setTimeout(() => {
      if (onAgentSelected) {
        onAgentSelected(agents[index])
      }
    }, 1500) // Wait 1.5s after connection to show the transition
  }

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
          01
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="mb-4 text-balance text-4xl font-normal tracking-tight text-white md:text-6xl lg:text-7xl"
        style={{ fontFamily: '"Anthropic Serif", Georgia, sans-serif' }}
      >
        Connect your
        <br />
        <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
          favorite agent
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16 max-w-lg text-lg text-white/50 md:text-xl"
      >
        Seamlessly integrate with the AI tools you already love
      </motion.p>

      <div className="flex flex-wrap justify-center gap-4 md:gap-6 items-stretch">
        {agents.map((agent, index) => {
          const IconComponent = agent.icon
          return (
            <motion.button
              key={agent.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4 + index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={() => handleAgentClick(index)}
              className="group relative"
            >
              {/* Glow effect */}
              <motion.div
                animate={{
                  opacity: selectedAgent === index ? 0.6 : 0,
                  scale: selectedAgent === index ? 1 : 0.9,
                }}
                transition={{ duration: 0.4 }}
                className={`absolute -inset-2 rounded-3xl bg-gradient-to-r ${agent.gradient} blur-xl`}
              />

              {/* Card */}
              <div
                className={`relative flex w-44 flex-col items-center gap-4 rounded-2xl border bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-500 md:w-52 md:p-8 h-full ${
                  selectedAgent === index
                    ? "border-white/20 bg-white/[0.08]"
                    : "border-white/5 hover:border-white/10 hover:bg-white/[0.05]"
                }`}
              >
                {/* Icon container with gradient */}
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${agent.gradient} text-white shadow-lg md:h-20 md:w-20 flex-shrink-0 ${agent.name === "Claude Code" ? "[&_path]:fill-white" : ''}`}
                  style={{
                    boxShadow: selectedAgent === index ? `0 20px 40px -10px rgba(99,102,241,0.4)` : undefined,
                  }}
                >
                  <IconComponent className="h-8 w-8 md:h-10 md:w-10" />
                </div>

                <div className="flex flex-col items-center text-center flex-1 justify-center min-h-[60px]">
                  <h3 className="text-lg font-semibold text-white">{agent.name}</h3>
                  <p className="mt-1 text-sm text-white/40">{agent.subtitle}</p>
                </div>

                {/* Connection indicator */}
                <motion.div
                  initial={false}
                  animate={{
                    scale: selectedAgent === index ? 1 : 0,
                    opacity: selectedAgent === index ? 1 : 0,
                  }}
                  transition={{ type: "spring", damping: 20, stiffness: 400 }}
                  className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/40"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
              </div>
            </motion.button>
          )
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: showConnected ? 1 : 0,
          y: showConnected ? 0 : 20,
        }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mt-12 flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-6 py-3 backdrop-blur-xl"
      >
        <motion.div
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50"
        />
        <span className="text-sm font-medium text-emerald-400">
          {selectedAgent >= 0 ? agents[selectedAgent].name : "Agent"} connected
        </span>
      </motion.div>
    </motion.div>
  )
}
