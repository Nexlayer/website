"use client"

import type React from "react"
import { useEffect, useRef, useState, useCallback } from "react"
import { Cpu, Settings, BarChart3, MessageSquare, Terminal, Layers, Activity, Globe } from "lucide-react"
import CursorLogo from "../CursorLogo"
import ClaudeAI from "../ClaudeAI"
import GitHubCopilot from "../GitHubCopilot"
import Windsurf from "../Windsurf"
import OpenAI from "../OpenAI"
import AgenticCloudOrb from "../AgenticCloudOrb"

type Node = { id: string; label: string; icon?: React.ReactNode }

type Props = {
  sources?: Node[]
  consumers?: Node[]
  centerTitle?: string
  centerHexes?: string[]
  className?: string
}

const ANIM_CONFIG = {
  duration: 2000,
  stagger: 750,
  consumerDelay: 800,
  pulseSize: 5,
  curveControl: 0.4,
  mobileBreakpoint: 768,
}

const defaultSources: Node[] = [
  { id: "cursor", label: "Cursor", icon: <CursorLogo className="h-6 w-6" /> },
  { id: "claude", label: "Claude Code", icon: <MessageSquare className="h-4 w-4" /> },
  { id: "vscode", label: "VS Code (MCP)", icon: <Settings className="h-4 w-4" /> },
  { id: "windsurf", label: "Windsurf", icon: <Terminal className="h-4 w-4" /> },
  { id: "openai", label: "ChatGPT (OpenAI)", icon: <Terminal className="h-4 w-4" /> },
]

const defaultConsumers: Node[] = [
  { id: "fullstack", label: "Full-Stack & SaaS Platforms", icon: <BarChart3 className="h-4 w-4 text-cyan-600" /> },
  { id: "apis", label: "Databases & Backends", icon: <Layers className="h-4 w-4 text-cyan-400" /> },
  { id: "realtime", label: "Real-Time Workers", icon: <Activity className="h-4 w-4 text-cyan-400" /> },
  { id: "Any stack", label: "APIs & AI Services", icon: <Globe className="h-4 w-4 text-cyan-400" /> },
  { id: "agents", label: "Multi-Agent Platforms", icon: <Cpu className="h-4 w-4 text-cyan-400" /> },
]

export const FeaturesSection: React.FC<Props> = ({
  sources = defaultSources,
  consumers = defaultConsumers,
  className = "",
}) => {
  const svgRef = useRef<SVGSVGElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()
  const [isMobile, setIsMobile] = useState(false)
  const [paths, setPaths] = useState<{ source: string; consumer: string }[]>([])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < ANIM_CONFIG.mobileBreakpoint)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const calculatePaths = useCallback(() => {
    if (!containerRef.current || isMobile) return

    const container = containerRef.current
    const sourceNodes = container.querySelectorAll("[data-source]")
    const consumerNodes = container.querySelectorAll("[data-consumer]")
    const centerBox = container.querySelector("[data-center]")

    if (!centerBox) return

    const centerRect = centerBox.getBoundingClientRect()
    const containerRect = container.getBoundingClientRect()

    const newPaths: { source: string; consumer: string }[] = []

    sourceNodes.forEach((sourceNode, sourceIndex) => {
      const sourceRect = sourceNode.getBoundingClientRect()
      const sourceY = sourceRect.top + sourceRect.height / 2 - containerRect.top
      const sourceX = sourceRect.right - containerRect.left

      const centerLeftY = centerRect.top + centerRect.height / 2 - containerRect.top + (sourceIndex - 1.5) * 20
      const centerLeftX = centerRect.left + centerRect.width / 2 - 90 - containerRect.left // Reduced distance from 106px to 90px to bring connections right up against the orb

      const controlX = sourceX + (centerLeftX - sourceX) * ANIM_CONFIG.curveControl

      const sourcePath = `M ${sourceX} ${sourceY} C ${controlX} ${sourceY}, ${controlX} ${centerLeftY}, ${centerLeftX} ${centerLeftY}`
      newPaths.push({ source: sourcePath, consumer: "" })
    })

    consumerNodes.forEach((consumerNode, consumerIndex) => {
      const consumerRect = consumerNode.getBoundingClientRect()
      const consumerY = consumerRect.top + consumerRect.height / 2 - containerRect.top
      const consumerX = consumerRect.left - containerRect.left

      const centerRightY = centerRect.top + centerRect.height / 2 - containerRect.top + (consumerIndex - 1.5) * 20
      const centerRightX = centerRect.left + centerRect.width / 2 + 90 - containerRect.left // Reduced distance from 106px to 90px to bring connections right up against the orb

      const controlX = centerRightX + (consumerX - centerRightX) * ANIM_CONFIG.curveControl

      const consumerPath = `M ${centerRightX} ${centerRightY} C ${controlX} ${centerRightY}, ${controlX} ${consumerY}, ${consumerX} ${consumerY}`

      if (newPaths[consumerIndex]) {
        newPaths[consumerIndex].consumer = consumerPath
      }
    })

    setPaths(newPaths)
  }, [isMobile])

  useEffect(() => {
    if (isMobile || paths.length === 0) return

    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime

      // Update pulse positions along paths
      const pulses = svgRef.current?.querySelectorAll(".pulse")
      pulses?.forEach((pulse, index) => {
        const path = svgRef.current?.querySelector(`path[data-path="${index}"]`) as SVGPathElement
        if (!path) return

        const pathLength = path.getTotalLength()
        const isConsumer = index >= sources.length * 2 // Updated to account for reverse pulses
        const isReverse = index >= sources.length && index < sources.length * 2 // Check if this is a reverse pulse

        let delay = 0
        let staggerDelay = 0

        if (isConsumer) {
          delay = ANIM_CONFIG.consumerDelay
          staggerDelay = ((index - sources.length * 2) % sources.length) * ANIM_CONFIG.stagger
        } else if (isReverse) {
          delay = ANIM_CONFIG.duration * 0.6 // Start reverse when forward is 60% complete
          staggerDelay = ((index - sources.length) % sources.length) * ANIM_CONFIG.stagger
        } else {
          // Forward pulses
          staggerDelay = (index % sources.length) * ANIM_CONFIG.stagger
        }

        const progress = ((elapsed - delay - staggerDelay) % ANIM_CONFIG.duration) / ANIM_CONFIG.duration

        if (progress >= 0) {
          const actualProgress = isReverse ? 1 - progress : progress
          const point = path.getPointAtLength(actualProgress * pathLength)
          pulse.setAttribute("cx", point.x.toString())
          pulse.setAttribute("cy", point.y.toString())
          pulse.setAttribute("opacity", (Math.sin(progress * Math.PI) * (isReverse ? 0.6 : 1)).toString()) // Make reverse pulses slightly dimmer
        }
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [paths, isMobile, sources.length])

  useEffect(() => {
    const timer = setTimeout(calculatePaths, 100)
    return () => clearTimeout(timer)
  }, [calculatePaths])

  return (
    <>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[rgba(25,25,25,1)]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              From prototype to production.<br />
              Ship apps that run real businesses.
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Most platforms stop at websites and previews. Nexlayer ships full-stack, frontends,
              backends, databases, vectors DBs, APIs, and AI services — live in minutes, ready to serve real users.
            </p>
          </div>

          {/* Comparison Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-6 sm:mb-16">
            {/* Traditional PaaS - Left Side */}
            <div className="relative">
              <div className="border border-gray-700 rounded-2xl p-8 h-full bg-neutral-800">
                <div className="mb-6">
                  <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-medium">
                    Traditional clouds
                  </span>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Fragile Deploys</h4>
                      <p className="text-gray-400 text-sm">
                        Broken webhooks, flaky CI/CD, and “zero-downtime” that still causes downtime.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Scaling Breaks Apps</h4>
                      <p className="text-gray-400 text-sm">
                        Cold starts, memory limits, brittle exports — fine for prototypes, fails at scale.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Database Headaches</h4>
                      <p className="text-gray-400 text-sm">
                        Locked-in services, weak scaling, and painful migrations that break production.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Static Websites Only</h4>
                      <p className="text-gray-400 text-sm">
                        Optimized for websites, not production APIs, AI services, or multi-service apps.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Unpredictable Costs</h4>
                      <p className="text-gray-400 text-sm">Surprise overages and opaque billing that punish growth.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Nexlayer - Right Side */}
            <div className="relative">
              <div className="border rounded-2xl p-8 h-full border-gray-600 text-white bg-black">
                <div className="mb-6">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Nexlayer
                  </span>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold mb-2 text-white">Autonomous Deploys</h4>
                      <p className="text-sm text-slate-400">One prompt, production-ready in minutes.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Agent-Native Runtime</h4>
                      <p className="text-sm text-slate-400">
                        Built for AI agents - works with Cursor, Claude, or any AI coding assistant
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Full-Stack by Default</h4>
                      <p className="text-sm text-slate-400">
                        APIs, agents, backends, and databases - all production-ready
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Control Without Complexity</h4>
                      <p className="text-sm text-slate-400">
                        Describe your stack in Nexlayer YAML — we abstract infra complexity like networking, but you
                        keep precision.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Predictable Pricing</h4>
                      <p className="text-sm text-slate-400">
                        Free for testing, then $49/mo flat for always-on production apps
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Centered Headline */}
          <div className="text-center">
            
          </div>
        </div>
      </section>

      <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-black ${className}`}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="text-sm font-medium text-cyan-400 mb-4 tracking-wider uppercase">
              Agents are the new developers.
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">The Cloud Agents Trust.™</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Nexlayer is the agent-native cloud — the runtime for AI-built apps, APIs, and platforms. One repo, one
              prompt, production in minutes.
            </p>
          </div>

          {/* Flow Diagram */}
          <div ref={containerRef} className="relative">
            {/* Section Labels */}
            <div className="flex max-sm:flex-col justify-between gap-8 mb-12">
              <div className="flex items-center justify-center lg:justify-start">
                <div className="w-8 h-px bg-gradient-to-r from-[#23B6CB] to-blue-500 mr-3"></div>
                <div className="text-sm font-medium text-gray-500 tracking-wider uppercase">Agents build</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-gray-500 tracking-wider uppercase">Nexlayer ships</div>
              </div>
              <div className="flex items-center justify-center lg:justify-end">
                <div className="text-sm font-medium text-gray-500 tracking-wider uppercase">Production in minutes.</div>
                <div className="w-8 h-px bg-gradient-to-r from-blue-500 to-indigo-500 ml-3"></div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-20 relative">
              {/* Left Column - Sources */}
              <div className="space-y-6 flex flex-col items-start">
                {sources.map((source, index) => {
                  if (source.id === "cursor") {
                    return (
                      <div
                        key={source.id}
                        data-source={index}
                        role="group"
                        className="flex items-center justify-start w-[64px] h-[100px]"
                      >
                        <CursorLogo className="h-16 w-16" />
                      </div>
                    )
                  } else if (source.id === "claude") {
                    return (
                      <div
                        key={source.id}
                        data-source={index}
                        role="group"
                        className="flex items-center justify-start w-[64px] h-[100px]"
                      >
                        <ClaudeAI className="h-16 w-16" />
                      </div>
                    )
                  } else if (source.id === "vscode") {
                    return (
                      <div
                        key={source.id}
                        data-source={index}
                        role="group"
                        className="flex items-center justify-start w-[64px] h-[100px]"
                      >
                        <GitHubCopilot className="h-16 w-16" />
                      </div>
                    )
                  } else if (source.id === "windsurf") {
                    return (
                      <div
                        key={source.id}
                        data-source={index}
                        role="group"
                        className="flex items-center justify-start w-[64px] h-[100px]"
                      >
                        <Windsurf className="h-16 w-16" />
                      </div>
                    )
                  } else if (source.id === "openai") {
                    return (
                      <div
                        key={source.id}
                        data-source={index}
                        role="group"
                        className="flex items-center justify-start w-[64px] h-[100px]"
                      >
                        <OpenAI className="h-16 w-16" />
                      </div>
                    )
                  } else {
                    return (
                      <div
                        key={source.id}
                        data-source={index}
                        role="group"
                        className="group rounded-xl border border-[#23B6CB]/20 bg-[#23B6CB]/5 p-4 text-center hover:border-[#23B6CB]/30 transition-all duration-300 w-[240px] h-[100px] flex flex-col justify-center"
                      >
                        <div className="flex items-center justify-center gap-2 mb-2 text-[#23B6CB]">
                          <div className="p-1.5 rounded-lg bg-[#23B6CB]/10">{source.icon}</div>
                        </div>
                        <div className="text-sm font-medium text-white">{source.label}</div>
                      </div>
                    )
                  }
                })}
              </div>

              <div className="max-md:hidden relative flex items-center justify-center">
                <div data-center className="flex items-center justify-center">
                  <AgenticCloudOrb />
                </div>
              </div>

              {/* Right Column - Consumers */}
              <div className="space-y-6 flex flex-col items-end">
                {consumers.map((consumer, index) => (
                  <div
                    key={consumer.id}
                    data-consumer={index}
                    role="group"
                    className="group rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-4 text-center hover:border-indigo-500/30 transition-all duration-300 w-[240px] h-[100px] flex flex-col justify-center ml-8"
                  >
                    <div className="flex items-center justify-center gap-2 mb-2 text-indigo-400">
                      <div className="p-1.5 rounded-lg bg-indigo-500/10">{consumer.icon}</div>
                    </div>
                    <div className="text-sm font-medium text-white">{consumer.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* SVG Connections */}
            {!isMobile && (
              <svg
                ref={svgRef}
                className="absolute inset-0 pointer-events-none"
                style={{ width: "100%", height: "100%" }}
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="source-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#23B6CB" />
                    <stop offset="100%" stopColor="rgba(59,130,246,1)" />
                  </linearGradient>
                  <linearGradient id="consumer-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(59,130,246,1)" />
                    <stop offset="100%" stopColor="rgba(99,102,241,1)" />
                  </linearGradient>
                  <filter id="pulse-glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {paths.map((pathData, index) => (
                  <g key={index}>
                    {/* Source path */}
                    {pathData.source && (
                      <>
                        <path
                          d={pathData.source}
                          stroke="url(#source-gradient)"
                          strokeWidth="1"
                          fill="none"
                          opacity="0.25"
                          data-path={index}
                        />
                        <circle
                          className="pulse"
                          r={ANIM_CONFIG.pulseSize}
                          fill="url(#source-gradient)"
                          filter="url(#pulse-glow)"
                          opacity="0"
                        />
                        <path
                          d={pathData.source}
                          stroke="url(#source-gradient)"
                          strokeWidth="1"
                          fill="none"
                          opacity="0"
                          data-path={index + sources.length}
                        />
                        <circle
                          className="pulse"
                          r={ANIM_CONFIG.pulseSize}
                          fill="url(#source-gradient)"
                          filter="url(#pulse-glow)"
                          opacity="0"
                        />
                      </>
                    )}

                    {/* Consumer path */}
                    {pathData.consumer && (
                      <>
                        <path
                          d={pathData.consumer}
                          stroke="url(#consumer-gradient)"
                          strokeWidth="1"
                          fill="none"
                          opacity="0.25"
                          data-path={index + sources.length * 2} // Updated index to account for reverse paths
                        />
                        <circle
                          className="pulse"
                          r={ANIM_CONFIG.pulseSize}
                          fill="url(#consumer-gradient)"
                          filter="url(#pulse-glow)"
                          opacity="0"
                        />
                      </>
                    )}
                  </g>
                ))}
              </svg>
            )}
          </div>

          {/* Apple-style feature strip with horizontal steps */}
        </div>
      </section>
    </>
  )
}
