"use client"

import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { NexlayerLogo } from "./NexlayerLogo"

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <a href="/" className="flex items-center">
              <NexlayerLogo className="h-7 w-auto" />
            </a>
            <span className="bg-teal-900/50 text-cyan-400 text-xs font-medium px-2 py-1 rounded border border-cyan-400/30">
              🚀 Join the Beta
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              className="bg-white !text-black hover:bg-gray-100 text-sm px-4 py-2 font-medium rounded-lg"
              onClick={() => window.open("https://jnsbqhb7fyt.typeform.com/to/a9DtuhOo?utm_source=website&utm_medium=hero_cta&utm_campaign=mcp_onboarding_q3_2025&utm_term=intent_ship_now&utm_content=home_v1", "_blank")}
            >
              Join the Beta
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
