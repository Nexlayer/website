"use client"

import type React from "react"
import { useEffect, useRef, useState, useCallback } from "react"
import { Cpu, Settings, BarChart3, MessageSquare, Terminal, Layers, Activity, Globe } from "lucide-react"
import CursorLogo from "../CursorLogo"
import AnimationSection from "./AnimationSection"

type Node = { id: string; label: string; icon?: React.ReactNode }

type Props = {
  sources?: Node[]
  consumers?: Node[]
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

export const CloudAgentsTrustSection: React.FC<Props> = ({
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
      const centerLeftX = centerRect.left + centerRect.width / 2 - 90 - containerRect.left

      const controlX = sourceX + (centerLeftX - sourceX) * ANIM_CONFIG.curveControl

      const sourcePath = `M ${sourceX} ${sourceY} C ${controlX} ${sourceY}, ${controlX} ${centerLeftY}, ${centerLeftX} ${centerLeftY}`
      newPaths.push({ source: sourcePath, consumer: "" })
    })

    consumerNodes.forEach((consumerNode, consumerIndex) => {
      const consumerRect = consumerNode.getBoundingClientRect()
      const consumerY = consumerRect.top + consumerRect.height / 2 - containerRect.top
      const consumerX = consumerRect.left - containerRect.left

      const centerRightY = centerRect.top + centerRect.height / 2 - containerRect.top + (consumerIndex - 1.5) * 20
      const centerRightX = centerRect.left + centerRect.width / 2 + 90 - containerRect.left

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

      const pulses = svgRef.current?.querySelectorAll(".pulse")
      pulses?.forEach((pulse, index) => {
        const path = svgRef.current?.querySelector(`path[data-path="${index}"]`) as SVGPathElement
        if (!path) return

        const pathLength = path.getTotalLength()
        const isConsumer = index >= sources.length * 2
        const isReverse = index >= sources.length && index < sources.length * 2

        let delay = 0
        let staggerDelay = 0

        if (isConsumer) {
          delay = ANIM_CONFIG.consumerDelay
          staggerDelay = ((index - sources.length * 2) % sources.length) * ANIM_CONFIG.stagger
        } else if (isReverse) {
          delay = ANIM_CONFIG.duration * 0.6
          staggerDelay = ((index - sources.length) % sources.length) * ANIM_CONFIG.stagger
        } else {
          staggerDelay = (index % sources.length) * ANIM_CONFIG.stagger
        }

        const progress = ((elapsed - delay - staggerDelay) % ANIM_CONFIG.duration) / ANIM_CONFIG.duration

        if (progress >= 0) {
          const actualProgress = isReverse ? 1 - progress : progress
          const point = path.getPointAtLength(actualProgress * pathLength)
          const circle = pulse as SVGCircleElement
          circle.setAttribute("cx", point.x.toString())
          circle.setAttribute("cy", point.y.toString())
          circle.setAttribute("opacity", "1")
        } else {
          const circle = pulse as SVGCircleElement
          circle.setAttribute("opacity", "0")
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
  }, [paths, sources.length])

  useEffect(() => {
    const timer = setTimeout(calculatePaths, 100)
    return () => clearTimeout(timer)
  }, [calculatePaths])

  return (
    <AnimationSection
      sources={sources}
      consumers={consumers}
      className={className}
      isMobile={isMobile}
      paths={paths}
      containerRef={containerRef}
      svgRef={svgRef}
      ANIM_CONFIG={ANIM_CONFIG}
    />
  )
}
