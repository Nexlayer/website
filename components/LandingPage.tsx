"use client"

import { useState, useEffect, useRef } from "react"
import type React from "react"
import { FeaturesSection } from "./sections/FeaturesSection"

// Button component (replacing shadcn/ui button)
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost" | "outline"
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ variant = "default", className = "", children, ...props }) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"

  const variantClasses = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground",
  }

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

// Icon components (replacing lucide-react)
const X = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const Linkedin = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const Github = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

const Rocket = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
)

const TypingEffect = ({ show = true }: { show?: boolean }) => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const fullText = "Deploy this http://github.com/nexlayer/ai-todo-app"
  const typingSpeed = 50 // Twice as fast
  const pauseTime = 1000 // Shorter pause for smoother loop

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    if (!show) {
      setDisplayText("")
      return
    }

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1
        if (nextIndex <= fullText.length) {
          setDisplayText(fullText.slice(0, nextIndex))
          return nextIndex
        } else {
          clearInterval(intervalRef.current!)
          setTimeout(() => {
            setDisplayText("")
            setCurrentIndex(0)
          }, pauseTime)
          return prevIndex
        }
      })
    }, typingSpeed)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [currentIndex, fullText, show])

  if (!show) return null

  return (
    <div className="w-full h-20 text-lg bg-black border-0 text-gray-400 px-6 font-medium flex items-center rounded-2xl">
      <span className="text-gray-400 font-mono">{displayText}</span>
      <span className="text-gray-400 animate-pulse ml-1">|</span>
    </div>
  )
}

export default function LandingPage() {
  const [userInput, setUserInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setUserInput(value)
    setIsTyping(value.length > 0)
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <svg width="120" height="28" viewBox="0 0 2880 551.3" className="h-7 w-auto">
                <defs>
                  <style>{`.cls-1 { fill: #fff; } .cls-2 { fill: #22b7cb; }`}</style>
                </defs>
                <g>
                  <path
                    className="cls-2"
                    d="M293.24,126.6V0L0,158.84v337.86l233.72-126.61v126.62l293.23-158.86V0l-233.71,126.6ZM233.72,158.84v143.56l-174.2,94.37v-202.48l174.2-94.37v58.92ZM467.43,302.4l-174.19,94.37v-202.48l174.19-94.37v202.48Z"
                  />
                  <g>
                    <path
                      className="cls-1"
                      d="M956.43,333.77h-1c-63.07-96.85-125.65-187.24-188.72-279.12h-65.57v387.39h62.59V167.4h.98c63.09,95.37,126.66,183.76,188.73,274.66h65.55V54.66h-62.57v279.12Z"
                    />
                    <path
                      className="cls-1"
                      d="M1218.22,397.84c-43.21,0-77.48-28.81-81.95-77.97h209.09v-17.38c0-104.29-67.05-144.52-131.12-144.52-80.45,0-137.57,62.09-137.57,147s60.59,145.52,141.55,145.52c62.57,0,110.26-34.26,129.12-82.95l-55.12-21.84c-12.92,31.79-39.74,52.14-74,52.14ZM1213.74,208.63c34.26,0,68.04,18.86,72.02,69.03h-146.52c6.95-40.73,33.78-69.03,74.5-69.03Z"
                    />
                    <path
                      className="cls-1"
                      d="M1531.62,301.49l91.88-135.58h-66.55l-63.57,98.33h-1l-63.57-98.33h-68.53l92.38,135.58v1c-30.8,46.19-61.59,92.86-92.38,139.56h68.04c21.36-32.78,42.71-65.57,64.06-98.85h1c21.36,33.28,42.71,66.06,64.07,98.85h67.05c-31.29-46.7-62.08-93.38-92.88-139.56v-1Z"
                    />
                    <path
                      className="cls-1"
                      d="M2065.43,254.3c0-65.05-46.19-96.34-108.76-96.34c-51.66,0-101.33,21.36-118.21,77.48l55.14,18.86c9.43-32.27,32.28-48.16,60.09-48.16,31.79,0,51.65,19.36,51.65,42.7,0,25.83-24.83,27.82-83.43,40.23-49.67,10.43-92.38,31.29-92.38,83.43s44.2,77.97,91.38,77.97c40.23,0,72.5-20.36,87.91-51.15h1c0,15.89,1.48,28.81,5.46,42.71h59.1c-5.46-21.86-8.93-40.73-8.93-86.42v-101.33ZM2005.83,336.25c0,30.8-26.33,68.54-69.04,68.54-25.32,0-42.7-12.41-42.7-34.26,0-26.81,29.79-37.75,54.62-43.21,21.36-4.47,42.71-10.43,57.12-17.88v26.81Z"
                    />
                    <path
                      className="cls-1"
                      d="M2230.31,373.01h-.98c-25.33-72.52-49.18-139.56-74.5-207.1h-64.57l108.26,285.57-38.74,99.82h61.59l146.5-385.39h-63.07c-24.83,67.05-49.17,134.58-74.5,207.1Z"
                    />
                    <path
                      className="cls-1"
                      d="M2526.36,397.84c-43.21,0-77.48-28.81-81.95-77.97h209.09v-17.38c0-104.29-67.05-144.52-131.12-144.52-80.45,0-137.57,62.09-137.57,147s60.59,145.52,141.55,145.52c62.57,0,110.26-34.26,129.12-82.95l-55.12-21.84c-12.92,31.79-39.74,52.14-74,52.14ZM2521.89,208.63c34.26,0,68.04,18.86,72.02,69.03h-146.52c6.95-40.73,33.78-69.03,74.5-69.03Z"
                    />
                    <path
                      className="cls-1"
                      d="M2852.19,157.96c-38.25,0-67.55,24.33-81.45,54.62h-1.99v-46.67h-57.62v276.14h58.61v-114.73c0-45.19,13.91-104.3,76.48-104.3,8.95,0,23.35,1.5,33.78,5.47v-65.57c-9.94-3.96-18.88-4.96-27.81-4.96Z"
                    />
                    <path
                      className="cls-1"
                      d="M1777.39,387.47c-16.3,0-27.49-3.5-33.54-10.52-6.07-7.01-9.1-19.8-9.1-38.37V54.66h-62.54v288.47c0,24.26,3.31,43.69,9.95,58.27,6.63,14.59,16.86,25.01,30.7,31.27,13.83,6.25,31.55,9.38,53.16,9.38h10.52c3.98,0,7.96-.2,11.94-.57,3.98-.38,6.91-.76,8.81-1.14v-54.01c-3.04.38-6.07.67-9.10.85-3.04.2-6.64.28-10.8.28Z"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div className="flex items-center space-x-4">
              <X className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
              <Linkedin className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
              <Github className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
              <Button variant="ghost" className="text-gray-300 hover:text-white text-sm font-medium">
                Sign in
              </Button>
              <Button className="bg-white text-black hover:bg-transparent hover:border-cyan-400 hover:border-2 hover:text-cyan-400 text-sm px-4 py-2 font-medium rounded-lg transition-all duration-300">
                Sign up
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="flex-1 flex flex-col items-center justify-center px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            {/* Gradient Heart Icon */}
            <div className="mb-12"></div>

            <h1 className="text-5xl text-white mb-6 leading-tight lg:text-6xl font-medium font-sans sm:text-5xl">
              AI built your app. Now ship it.
            </h1>

            <p className="text-xl text-gray-400 mb-16 font-normal">
              Not a preview link. Not a sandbox. Nexlayer deploys your app to real, scalable production-ready
              infrastructure — in seconds. No Dockerfile. No config. No cloud ops.
            </p>

            {/* Main Input Area */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="bg-black rounded-2xl border-2 border-gray-600 p-1 shadow-lg">
                <div className="relative">
                  {!isTyping && !isFocused && <TypingEffect show={!isTyping && !isFocused} />}
                  {(isTyping || isFocused) && (
                    <input
                      type="text"
                      value={userInput}
                      onChange={handleInputChange}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                      className="w-full h-20 text-lg bg-black border-0 text-white px-6 font-medium flex items-center outline-none font-mono rounded-2xl"
                      placeholder=""
                      autoFocus={isFocused}
                    />
                  )}
                  {!isTyping && (
                    <input
                      type="text"
                      value={userInput}
                      onChange={handleInputChange}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                      className="absolute inset-0 w-full h-20 text-lg bg-black border-0 text-white px-6 font-medium flex items-center outline-none font-mono opacity-0 rounded-2xl"
                      placeholder=""
                    />
                  )}
                </div>

                <div className="flex items-center justify-between px-4 pb-4">
                  <div className="flex items-center space-x-4">
                    {/* Removed Attach and Import buttons as per previous request */}
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-2">
                      <Button
                        disabled={!userInput.trim()}
                        className={`text-sm px-4 py-2 font-medium rounded-lg border-0 transition-all duration-300 ${
                          userInput.trim()
                            ? "bg-[#23B6CB] hover:bg-[#1da5b8] text-white shadow-[0_0_10px_rgba(35,182,203,0.3)] hover:shadow-[0_0_15px_rgba(35,182,203,0.5)]"
                            : "bg-gray-600 text-gray-400 cursor-not-allowed"
                        }`}
                        style={!userInput.trim() ? { cursor: "not-allowed" } : {}}
                      >
                        <Rocket className={`w-4 h-4 mr-2 ${userInput.trim() ? "" : "opacity-50"}`} />
                        Deploy
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Proof Section */}
            <div className="max-w-4xl mx-auto mb-20 text-center">
              <p className="text-gray-400 text-lg mb-8">Built by a team who've scaled products for millions at</p>
              <div className="flex items-center justify-center space-x-12 opacity-60">
                {/* Google Logo */}
                <div className="flex items-center">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LeRv8DZO6pR5VUcWRMBGI7EZ9EkWDL.png"
                    alt="Google"
                    className="h-8 w-auto"
                  />
                </div>

                {/* IBM Logo */}
                <div className="flex items-center">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-m7c19LlD4LJefDOOuJLMWxWqkcPmAL.png"
                    alt="IBM"
                    className="h-8 w-auto"
                  />
                </div>

                {/* MIT Logo */}
                <div className="flex items-center">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hSE4jSsjQGcWW0cbgDHaEKmtEgXK1l.png"
                    alt="MIT"
                    className="h-8 w-auto"
                  />
                </div>
              </div>
            </div>

            {/* Example Prompts */}
          </div>
        </section>

        {/* Supporting Copy */}

        {/* Features Section */}
        <FeaturesSection />

        {/* 3-Part Minimal Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Invisible Infrastructure */}
            <div className="group rounded-xl p-8 border border-[#2a2a2a] flex flex-col min-h-[500px] hover:bg-[#1a1a1a] transition-all duration-300 cursor-pointer">
              <h3 className="text-2xl font-semibold mb-4">Invisible Infrastructure</h3>
              <p className="text-gray-400 mb-8 flex-grow">
                No IaC bloat. No DevOps stress. Just deployment that feels like magic.
              </p>

              {/* Abstract visual element */}
              <div className="flex-grow flex items-center justify-center mb-8">
                <div className="relative w-full h-48">
                  <svg
                    className="w-full h-full opacity-30 group-hover:opacity-60 transition-all duration-300"
                    viewBox="0 0 200 150"
                  >
                    <path
                      d="M20 75 Q60 25 100 75 T180 75"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      className="group-hover:stroke-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(34,183,203,0.6)] transition-all duration-300"
                    />
                    <path
                      d="M40 100 Q80 50 120 100 T200 100"
                      stroke="currentColor"
                      strokeWidth="1"
                      fill="none"
                      className="group-hover:stroke-cyan-400 group-hover:drop-shadow-[0_0_6px_rgba(34,183,203,0.4)] transition-all duration-300"
                    />
                    <circle
                      cx="100"
                      cy="75"
                      r="3"
                      fill="currentColor"
                      className="group-hover:fill-cyan-400 group-hover:drop-shadow-[0_0_10px_rgba(34,183,203,0.8)] transition-all duration-300"
                    />
                    <circle
                      cx="60"
                      cy="50"
                      r="2"
                      fill="currentColor"
                      className="group-hover:fill-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(34,183,203,0.6)] transition-all duration-300"
                    />
                    <circle
                      cx="140"
                      cy="50"
                      r="2"
                      fill="currentColor"
                      className="group-hover:fill-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(34,183,203,0.6)] transition-all duration-300"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* AI-Native by Design */}
            <div className="group rounded-xl p-8 border border-[#2a2a2a] flex flex-col min-h-[500px] hover:bg-[#1a1a1a] transition-all duration-300 cursor-pointer">
              <h3 className="text-2xl font-semibold mb-4">AI-Native by Design</h3>
              <p className="text-gray-400 mb-8 flex-grow">
                Built for agents, not just engineers.
                <br />
                Deployed by Liz. Operated by protocol.
                <br />
                Production, without humans in the loop.
              </p>

              {/* Abstract visual element */}
              <div className="flex-grow flex items-center justify-center mb-8">
                <div className="relative w-full h-48">
                  <svg
                    className="w-full h-full opacity-30 group-hover:opacity-60 transition-all duration-300"
                    viewBox="0 0 200 150"
                  >
                    <rect
                      x="40"
                      y="40"
                      width="120"
                      height="80"
                      rx="4"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      className="group-hover:stroke-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(34,183,203,0.6)] transition-all duration-300"
                    />
                    <rect
                      x="50"
                      y="50"
                      width="100"
                      height="8"
                      rx="2"
                      fill="currentColor"
                      opacity="0.3"
                      className="group-hover:fill-cyan-400 group-hover:opacity-70 group-hover:drop-shadow-[0_0_6px_rgba(34,183,203,0.4)] transition-all duration-300"
                    />
                    <rect
                      x="50"
                      y="65"
                      width="80"
                      height="8"
                      rx="2"
                      fill="currentColor"
                      opacity="0.3"
                      className="group-hover:fill-cyan-400 group-hover:opacity-70 group-hover:drop-shadow-[0_0_6px_rgba(34,183,203,0.4)] transition-all duration-300"
                    />
                    <rect
                      x="50"
                      y="80"
                      width="60"
                      height="8"
                      rx="2"
                      fill="currentColor"
                      opacity="0.3"
                      className="group-hover:fill-cyan-400 group-hover:opacity-70 group-hover:drop-shadow-[0_0_6px_rgba(34,183,203,0.4)] transition-all duration-300"
                    />
                    <rect
                      x="50"
                      y="95"
                      width="90"
                      height="8"
                      rx="2"
                      fill="currentColor"
                      opacity="0.3"
                      className="group-hover:fill-cyan-400 group-hover:opacity-70 group-hover:drop-shadow-[0_0_6px_rgba(34,183,203,0.4)] transition-all duration-300"
                    />
                    <circle
                      cx="170"
                      cy="50"
                      r="8"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      className="group-hover:stroke-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(34,183,203,0.6)] transition-all duration-300"
                    />
                    <circle
                      cx="170"
                      cy="70"
                      r="8"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      className="group-hover:stroke-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(34,183,203,0.6)] transition-all duration-300"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* From Builders to Businesses */}
            <div className="group rounded-xl p-8 border border-[#2a2a2a] flex flex-col min-h-[500px] hover:bg-[#1a1a1a] transition-all duration-300 cursor-pointer">
              <h3 className="text-2xl font-semibold mb-4">From Builders to Businesses</h3>
              <p className="text-gray-400 mb-8 flex-grow">
                MVPs, SaaS, research tools, dashboards.
                <br />
                If it's code, it runs here.
                <br />
                If it runs here, it's ready to scale.
              </p>

              {/* Abstract visual element */}
              <div className="flex-grow flex items-center justify-center mb-8">
                <div className="relative w-full h-48">
                  <svg
                    className="w-full h-full opacity-30 group-hover:opacity-60 transition-all duration-300"
                    viewBox="0 0 200 150"
                  >
                    <rect
                      x="30"
                      y="30"
                      width="140"
                      height="90"
                      rx="6"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      className="group-hover:stroke-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(34,183,203,0.6)] transition-all duration-300"
                    />
                    <rect
                      x="50"
                      y="50"
                      width="35"
                      height="20"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1"
                      fill="none"
                      className="group-hover:stroke-cyan-400 group-hover:drop-shadow-[0_0_6px_rgba(34,183,203,0.4)] transition-all duration-300"
                    />
                    <rect
                      x="95"
                      y="50"
                      width="35"
                      height="20"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1"
                      fill="none"
                      className="group-hover:stroke-cyan-400 group-hover:drop-shadow-[0_0_6px_rgba(34,183,203,0.4)] transition-all duration-300"
                    />
                    <rect
                      x="140"
                      y="50"
                      width="20"
                      height="20"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1"
                      fill="none"
                      className="group-hover:stroke-cyan-400 group-hover:drop-shadow-[0_0_6px_rgba(34,183,203,0.4)] transition-all duration-300"
                    />
                    <line
                      x1="50"
                      y1="85"
                      x2="130"
                      y2="85"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="group-hover:stroke-cyan-400 group-hover:drop-shadow-[0_0_6px_rgba(34,183,203,0.4)] transition-all duration-300"
                    />
                    <line
                      x1="50"
                      y1="95"
                      x2="100"
                      y2="95"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="group-hover:stroke-cyan-400 group-hover:drop-shadow-[0_0_6px_rgba(34,183,203,0.4)] transition-all duration-300"
                    />
                    <line
                      x1="50"
                      y1="105"
                      x2="120"
                      y2="105"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="group-hover:stroke-cyan-400 group-hover:drop-shadow-[0_0_6px_rgba(34,183,203,0.4)] transition-all duration-300"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Centered Visual */}

        {/* Just Deploy to Build */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Just Deploy to Build</h2>
            <p className="text-xl text-gray-400 mb-12">No configuration. No complexity. Just results.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-[#1a1a1a] rounded-lg p-6 border border-[#2a2a2a]">
                <h3 className="text-lg font-semibold mb-3">Instant Deployment</h3>
                <p className="text-gray-400">From GitHub to live in seconds</p>
              </div>
              <div className="bg-[#1a1a1a] rounded-lg p-6 border border-[#2a2a2a]">
                <h3 className="text-lg font-semibold mb-3">Auto Scaling</h3>
                <p className="text-gray-400">Handles traffic spikes automatically</p>
              </div>
              <div className="bg-[#1a1a1a] rounded-lg p-6 border border-[#2a2a2a]">
                <h3 className="text-lg font-semibold mb-3">Zero Config</h3>
                <p className="text-gray-400">Works with any framework</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t border-[#2a2a2a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-8">
            {/* Nexlayer Logo with Glow Effect */}
            <div className="relative">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-full blur-3xl opacity-30"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <svg width="48" height="48" viewBox="0 0 2880 551.3" className="w-16 h-16">
                    <defs>
                      <style>{`.cls-1 { fill: #fff; } .cls-2 { fill: #22b7cb; }`}</style>
                    </defs>
                    <g>
                      <path
                        className="cls-2 drop-shadow-[0_0_8px_rgba(34,183,203,0.6)]"
                        d="M293.24,126.6V0L0,158.84v337.86l233.72-126.61v126.62l293.23-158.86V0l-233.71,126.6ZM233.72,158.84v143.56l-174.2,94.37v-202.48l174.2-94.37v58.92ZM467.43,302.4l-174.19,94.37v-202.48l174.19-94.37v202.48Z"
                      />
                      <g>
                        <path
                          className="cls-1"
                          d="M956.43,333.77h-1c-63.07-96.85-125.65-187.24-188.72-279.12h-65.57v387.39h62.59V167.4h.98c63.09,95.37,126.66,183.76,188.73,274.66h65.55V54.66h-62.57v279.12Z"
                        />
                        <path
                          className="cls-1"
                          d="M1218.22,397.84c-43.21,0-77.48-28.81-81.95-77.97h209.09v-17.38c0-104.29-67.05-144.52-131.12-144.52-80.45,0-137.57,62.09-137.57,147s60.59,145.52,141.55,145.52c62.57,0,110.26-34.26,129.12-82.95l-55.12-21.84c-12.92,31.79-39.74,52.14-74,52.14ZM1213.74,208.63c34.26,0,68.04,18.86,72.02,69.03h-146.52c6.95-40.73,33.78-69.03,74.5-69.03Z"
                        />
                        <path
                          className="cls-1"
                          d="M1531.62,301.49l91.88-135.58h-66.55l-63.57,98.33h-1l-63.57-98.33h-68.53l92.38,135.58v1c-30.8,46.19-61.59,92.86-92.38,139.56h68.04c21.36-32.78,42.71-65.57,64.06-98.85h1c21.36,33.28,42.71,66.06,64.07,98.85h67.05c-31.29-46.7-62.08-93.38-92.88-139.56v-1Z"
                        />
                        <path
                          className="cls-1"
                          d="M2065.43,254.3c0-65.05-46.19-96.34-108.76-96.34c-51.66,0-101.33,21.36-118.21,77.48l55.14,18.86c9.43-32.27,32.28-48.16,60.09-48.16,31.79,0,51.65,19.36,51.65,42.7,0,25.83-24.83,27.82-83.43,40.23-49.67,10.43-92.38,31.29-92.38,83.43s44.2,77.97,91.38,77.97c40.23,0,72.5-20.36,87.91-51.15h1c0,15.89,1.48,28.81,5.46,42.71h59.1c-5.46-21.86-8.93-40.73-8.93-86.42v-101.33ZM2005.83,336.25c0,30.8-26.33,68.54-69.04,68.54-25.32,0-42.7-12.41-42.7-34.26,0-26.81,29.79-37.75,54.62-43.21,21.36-4.47,42.71-10.43,57.12-17.88v26.81Z"
                        />
                        <path
                          className="cls-1"
                          d="M2230.31,373.01h-.98c-25.33-72.52-49.18-139.56-74.5-207.1h-64.57l108.26,285.57-38.74,99.82h61.59l146.5-385.39h-63.07c-24.83,67.05-49.17,134.58-74.5,207.1Z"
                        />
                        <path
                          className="cls-1"
                          d="M2526.36,397.84c-43.21,0-77.48-28.81-81.95-77.97h209.09v-17.38c0-104.29-67.05-144.52-131.12-144.52-80.45,0-137.57,62.09-137.57,147s60.59,145.52,141.55,145.52c62.57,0,110.26-34.26,129.12-82.95l-55.12-21.84c-12.92,31.79-39.74,52.14-74,52.14ZM2521.89,208.63c34.26,0,68.04,18.86,72.02,69.03h-146.52c6.95-40.73,33.78-69.03,74.5-69.03Z"
                        />
                        <path
                          className="cls-1"
                          d="M2852.19,157.96c-38.25,0-67.55,24.33-81.45,54.62h-1.99v-46.67h-57.62v276.14h58.61v-114.73c0-45.19,13.91-104.3,76.48-104.3,8.95,0,23.35,1.5,33.78,5.47v-65.57c-9.94-3.96-18.88-4.96-27.81-4.96Z"
                        />
                        <path
                          className="cls-1"
                          d="M1777.39,387.47c-16.3,0-27.49-3.5-33.54-10.52-6.07-7.01-9.1-19.8-9.1-38.37V54.66h-62.54v288.47c0,24.26,3.31,43.69,9.95,58.27,6.63,14.59,16.86,25.01,30.7,31.27,13.83,6.25,31.55,9.38,53.16,9.38h10.52c3.98,0,7.96-.2,11.94-.57,3.98-.38,6.91-.76,8.81-1.14v-54.01c-3.04.38-6.07.67-9.10.85-3.04.2-6.64.28-10.8.28Z"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
