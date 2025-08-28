"use client"

import { useState, useEffect } from "react"
import { MCPSetupComponent } from "../MCPSetupComponent"

export const HowItWorksSection = () => {
  const [isFullscreen, setIsFullscreen] = useState(false)

  const toggleFullscreen = (videoElement: HTMLVideoElement) => {
    if (!document.fullscreenElement) {
      videoElement
        .requestFullscreen()
        .then(() => {
          setIsFullscreen(true)
        })
        .catch((err) => {
          console.error("Error attempting to enable fullscreen:", err)
        })
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false)
      })
    }
  }

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
    }
  }, [])

  return (
    <section style={{ backgroundColor: "#191919" }} className="px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">See how it works</h2>
          <p className="text-xl text-gray-400">From AI-generated code to a live production-grade app in 5 minutes.</p>
        </div>

        <div className="space-y-16">
          {/* Step 1 - MCP Setup */}
          <div className="flex items-center gap-12">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-white mb-4 text-left">
                1. Connect your coding agent to Nexlayer
              </h3>
              <p className="text-lg text-gray-400 text-left mb-4">
                Generate a token and link Cursor, Claude Code, Windsurf or any AI coding agent — one line, and you're
                connected.
              </p>
              <div className="flex items-center gap-4 mb-6"></div>
            </div>
            <div className="flex-1">
              <MCPSetupComponent />
            </div>
          </div>

          {/* Step 2 - Deploy from AI Editor */}
          <div className="flex items-center gap-12">
            <div className="flex-1">
              <div className="relative group">
                <video className="w-full rounded-xl border border-gray-700" autoPlay loop muted playsInline>
                  <source
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/deploy-production-grade-apps-in-minutes-with-nexlayer-kDjfZ7nBPIjusrpugZb28UDg0VD693.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>

                <button
                  onClick={(e) => {
                    const video = e.currentTarget.previousElementSibling as HTMLVideoElement
                    toggleFullscreen(video)
                  }}
                  className="absolute bottom-4 right-4 bg-black/70 hover:bg-black/90 text-white px-3 py-2 rounded-lg flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm font-medium"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                    />
                  </svg>
                  Fullscreen
                </button>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-white mb-4 text-right">2. Deploy with one prompt.</h3>
              <p className="text-lg text-gray-400 text-right">
                Type: "Deploy my app https://github.com/repo to nexlayer".
              </p>
            </div>
          </div>

          {/* Step 3 - App Goes Live */}
          <div className="flex items-center gap-12">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-white mb-4 text-left">
                3. Share your live URL with the world.
              </h3>
              <p className="text-lg text-gray-400">
                Your app is now live and auto-scaling for free. Claim it, extend it or reserve to keep it running.
              </p>
            </div>
            <div className="flex-1">
              <div className="relative group">
                <video className="w-full rounded-xl border border-gray-700" autoPlay loop muted playsInline>
                  <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/from-local-to-global-app-EhEDyeKqYNJWXAd3Jzg1kWv2jSZT6V.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                <button
                  onClick={(e) => {
                    const video = e.currentTarget.previousElementSibling as HTMLVideoElement
                    toggleFullscreen(video)
                  }}
                  className="absolute bottom-4 right-4 bg-black/70 hover:bg-black/90 text-white px-3 py-2 rounded-lg flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm font-medium"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                    />
                  </svg>
                  Fullscreen
                </button>
              </div>
            </div>
          </div>

          {/* Step 4 - Claim and Extend */}
          <div className="flex items-center gap-12">
            <div className="flex-1">
              <div className="relative group">
                <video className="w-full rounded-xl border border-gray-700" autoPlay loop muted playsInline>
                  <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/claim-extend-reserve-it-nexlayer-c0LsegwBtzeAtUl3WV8bcGVoruVwSG.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                <button
                  onClick={(e) => {
                    const video = e.currentTarget.previousElementSibling as HTMLVideoElement
                    toggleFullscreen(video)
                  }}
                  className="absolute bottom-4 right-4 bg-black/70 hover:bg-black/90 text-white px-3 py-2 rounded-lg flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm font-medium"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                    />
                  </svg>
                  Fullscreen
                </button>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-white mb-4 text-right">
                Step 4: claim it, extend it and reserve it.
              </h3>
              <p className="text-lg text-gray-400 text-right">
                Claim it to keep it live, share with friends, or reserve it to scale it globally in one click.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
