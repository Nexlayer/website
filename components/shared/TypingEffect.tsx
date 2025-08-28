"use client"

import { useState, useEffect, useRef } from "react"

interface TypingEffectProps {
  show?: boolean
  text?: string
  typingSpeed?: number
  pauseTime?: number
}

export const TypingEffect = ({ 
  show = true, 
  text = "Deploy this http://github.com/nexlayer/ai-todo-app",
  typingSpeed = 50,
  pauseTime = 1000
}: TypingEffectProps) => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

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
        if (nextIndex <= text.length) {
          setDisplayText(text.slice(0, nextIndex))
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
  }, [currentIndex, text, show, typingSpeed, pauseTime])

  if (!show) return null

  return (
    <div className="w-full h-20 text-lg bg-black border-0 text-gray-400 px-6 font-medium flex items-center rounded-2xl">
      {displayText}
      <span className="animate-pulse">|</span>
    </div>
  )
}
