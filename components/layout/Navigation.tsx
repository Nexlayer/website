"use client"

import { useState, useEffect } from "react"
import { Button } from "../ui/button"
import { NexlayerLogo } from "../NexlayerLogo"

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
        <div className="flex justify-between items-center h-14 sm:h-16">
          <div className="flex items-center space-x-2">
            <a href="/" className="flex items-center">
              <NexlayerLogo className="h-6 sm:h-7 w-auto" />
            </a>
            <span className="bg-teal-900/50 text-cyan-400 text-xs font-medium px-2 py-1 rounded border border-cyan-400/30">
              <span className="max-[374px]:hidden">🚀 Join</span> Beta
            </span>
          </div>

          {/* Center Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="https://jnsbqhb7fyt.typeform.com/startupprogram?utm_source=nexlayer-website&utm_medium=web&utm_campaign=startup-program&utm_term=nexlayer-startup-program&utm_content=website"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyan-400 text-sm font-medium transition-colors duration-300"
            >
              Startup Program
            </a>
            <a
              href="https://discord.gg/U9N23Zzd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyan-400 text-sm font-medium transition-colors duration-300"
            >
              Support
            </a>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <a
              href="https://docs.nexlayer.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyan-400 text-xs sm:text-sm font-medium transition-colors duration-300"
            >
              Documentation
            </a>
            <Button
              className="bg-white !text-black hover:bg-transparent hover:border-cyan-400 hover:border-2 border-2 hover:!text-cyan-400 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 font-medium rounded-lg transition-all duration-300"
              onClick={() => window.open("https://outgoing-violin-38-staging.authkit.app/sign-up?redirect_uri=https%3A%2F%2Fapp.nexlayer.io%2Fcallback&authorization_session_id=01K4JKPDTWM8VM5W1MMK7RQRRK", "_blank")}
            >
              <span className="hidden sm:inline">Start free beta</span>
              <span className="sm:hidden">Free beta</span>
            </Button>
            <a
              href="https://outgoing-violin-38-staging.authkit.app/?redirect_uri=https%3A%2F%2Fapp.nexlayer.io%2Fcallback&authorization_session_id=01K45MN092W5FFWBEAPXVEPR8N"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyan-400 text-xs sm:text-sm font-medium transition-colors duration-300"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
