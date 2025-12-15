"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export function StepThree() {
  const [urlTyped, setUrlTyped] = useState("")
  const [showCelebration, setShowCelebration] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const fullUrl = "myapp.nexlayer.ai"

  const handleStartTyping = () => {
    if (isTyping) return
    setIsTyping(true)
    setUrlTyped("")
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullUrl.length) {
        setUrlTyped(fullUrl.slice(0, index))
        index++
      } else {
        clearInterval(timer)
        setTimeout(() => setShowCelebration(true), 300)
      }
    }, 70)
  }

  const nodes = [
    { x: 10, y: 30, label: "US West", delay: 0 },
    { x: 25, y: 60, label: "US East", delay: 0.1 },
    { x: 50, y: 25, label: "Europe", delay: 0.2 },
    { x: 70, y: 50, label: "Asia", delay: 0.3 },
    { x: 88, y: 35, label: "Japan", delay: 0.4 },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -40, transition: { duration: 0.4 } }}
      className="flex max-w-4xl flex-col items-center text-center"
    >
      {/* Celebration confetti */}
      {showCelebration && <Confetti />}

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mb-6"
      >
        <span className="bg-gradient-to-b from-white/20 to-white/5 bg-clip-text text-[120px] font-bold leading-none tracking-tighter text-transparent md:text-[180px]">
          03
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="mb-4 text-balance text-4xl font-normal tracking-tight text-white md:text-6xl lg:text-7xl"
        style={{ fontFamily: '"Anthropic Serif", Georgia, sans-serif' }}
      >
        Live and global
        <br />
        <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
          in minutes
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12 max-w-lg text-lg text-white/50 md:text-xl"
      >
        Your app is accessible worldwide with zero infrastructure hassle
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-2xl"
      >
        {/* Glow */}
        <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 opacity-50 blur-2xl" />

        {/* Browser */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0f] shadow-2xl">
          {/* Chrome */}
          <div className="flex items-center gap-3 border-b border-white/5 bg-white/[0.02] px-4 py-3">
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <div className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>

            {/* URL bar with typing animation */}
            <div 
              onClick={handleStartTyping}
              className="flex flex-1 items-center gap-2 rounded-lg bg-white/5 px-4 py-2 cursor-pointer hover:bg-white/10 transition-colors"
            >
              <svg className="h-3.5 w-3.5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              {!isTyping && urlTyped.length === 0 ? (
                <span className="font-mono text-sm text-white/40">Click to see your app go live...</span>
              ) : (
                <>
                  <span className="font-mono text-sm text-white">{urlTyped}</span>
                  {isTyping && urlTyped.length < fullUrl.length && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
                      className="h-4 w-[2px] bg-emerald-400"
                    />
                  )}
                  {urlTyped.length === fullUrl.length && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="ml-auto rounded-full bg-emerald-500 px-2 py-0.5 text-[10px] font-semibold uppercase text-white"
                    >
                      Live
                    </motion.span>
                  )}
                </>
              )}
            </div>

            <div className="w-14" />
          </div>

          {/* Content preview */}
          <div className="relative p-6">
            {/* Global nodes visualization */}
            <div className="absolute inset-0 opacity-60">
              {nodes.map((node, i) => (
                <motion.div
                  key={node.label}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.2 + node.delay, type: "spring", damping: 15 }}
                  className="absolute flex flex-col items-center"
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                >
                  {/* Pulse ring */}
                  <motion.div
                    animate={{ scale: [1, 2, 1], opacity: [0.4, 0, 0.4] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
                    className="absolute h-4 w-4 rounded-full bg-emerald-400"
                  />
                  <div className="relative h-3 w-3 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
                  <span className="mt-1 whitespace-nowrap text-[9px] font-medium text-emerald-400/70">
                    {node.label}
                  </span>
                </motion.div>
              ))}

              {/* Connection lines between nodes */}
              <svg className="absolute inset-0 h-full w-full" style={{ opacity: 0.2 }}>
                <motion.line
                  x1="12%"
                  y1="32%"
                  x2="27%"
                  y2="62%"
                  stroke="#34d399"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                />
                <motion.line
                  x1="27%"
                  y1="62%"
                  x2="52%"
                  y2="27%"
                  stroke="#34d399"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1.7, duration: 0.5 }}
                />
                <motion.line
                  x1="52%"
                  y1="27%"
                  x2="72%"
                  y2="52%"
                  stroke="#34d399"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1.9, duration: 0.5 }}
                />
                <motion.line
                  x1="72%"
                  y1="52%"
                  x2="90%"
                  y2="37%"
                  stroke="#34d399"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 2.1, duration: 0.5 }}
                />
              </svg>
            </div>

            {/* App mockup card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="relative z-10 mx-auto max-w-sm rounded-xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-400/40 to-teal-500/40 shadow-lg" />
                <div className="flex-1">
                  <div className="h-3 w-24 rounded bg-white/20" />
                  <div className="mt-2 h-2 w-16 rounded bg-white/10" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-2 w-full rounded bg-white/10" />
                <div className="h-2 w-[80%] rounded bg-white/10" />
                <div className="h-2 w-[60%] rounded bg-white/10" />
              </div>
              <div className="mt-5 flex gap-3">
                <div className="h-9 flex-1 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg" />
                <div className="h-9 flex-1 rounded-lg border border-white/10 bg-white/5" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mt-12 flex items-center gap-8 md:gap-12"
      >
        <StatItem value="< 2min" label="Deploy time" color="text-emerald-400" />
        <div className="h-12 w-px bg-white/10" />
        <StatItem value="Global" label="Edge network" color="text-cyan-400" />
        <div className="h-12 w-px bg-white/10" />
        <StatItem value="99.99%" label="Uptime SLA" color="text-violet-400" />
      </motion.div>
    </motion.div>
  )
}

function StatItem({ value, label, color }: { value: string; label: string; color: string }) {
  return (
    <div className="text-center">
      <div className={`text-2xl font-bold md:text-3xl ${color}`}>{value}</div>
      <div className="mt-1 text-xs text-white/40 md:text-sm">{label}</div>
    </div>
  )
}

function Confetti() {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: 10 + Math.random() * 80,
    color: ["#6366f1", "#22d3ee", "#34d399", "#f59e0b", "#ec4899"][Math.floor(Math.random() * 5)],
    delay: Math.random() * 0.5,
    duration: 3 + Math.random() * 2,
    size: 4 + Math.random() * 8,
    rotation: Math.random() * 720 - 360,
  }))

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: -50, x: `${p.x}%`, opacity: 1, rotate: 0, scale: 1 }}
          animate={{ y: "110vh", opacity: 0, rotate: p.rotation, scale: 0.5 }}
          transition={{ duration: p.duration, delay: p.delay, ease: "linear" }}
          style={{
            position: "absolute",
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            borderRadius: Math.random() > 0.5 ? "50%" : "2px",
          }}
        />
      ))}
    </div>
  )
}
