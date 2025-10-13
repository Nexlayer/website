"use client"

import { useState, useEffect, useRef } from "react"

interface TypingEffectProps {
  show?: boolean
}

export const TypingEffect = ({ show = true }: TypingEffectProps) => {
  const [displayText, setDisplayText] = useState("")
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  
  const messages = [
    "Install the Nexlayer connector for Cursor, Claude Code, or VSCode w/Copilot.",
    "Installation complete.",
    "Deploy my project to Nexlayer.",
    "🎉 Deployment Successful!\nYour app is live https://your-app.alpha.nexlayer.ai"
  ]
  
  const typingSpeed = 50
  const pauseTime = 2000 // Pause between messages

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    if (!show) {
      setDisplayText("")
      setCurrentMessageIndex(0)
      return
    }

    const currentMessage = messages[currentMessageIndex]
    let charIndex = 0

    const typeChar = () => {
      if (charIndex < currentMessage.length) {
        setDisplayText(currentMessage.slice(0, charIndex + 1))
        charIndex++
        timeoutRef.current = setTimeout(typeChar, typingSpeed)
      } else {
        // Message complete, pause then clear and move to next
        timeoutRef.current = setTimeout(() => {
          setDisplayText("") // Clear instantly
          setCurrentMessageIndex(prev => (prev + 1) % messages.length)
        }, pauseTime)
      }
    }

    // Start typing immediately
    setDisplayText("")
    typeChar()

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [currentMessageIndex, show])

  if (!show) return null

  return (
    <div
      className="w-full h-20 max-[420px]:text-sm text-lg bg-black border-0 text-gray-400 px-6 font-medium flex items-center rounded-2xl"
      style={{
        wordBreak: "break-word",
        overflowWrap: "anywhere"
      }}
    >
      <div className="flex items-center w-full">
        <span className="text-gray-400 font-mono whitespace-pre-line text-left">{displayText}</span>
        {displayText && <span className="text-gray-400 animate-pulse ml-1">|</span>}
      </div>
    </div>
  )
}
