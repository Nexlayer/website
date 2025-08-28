import { useState, useEffect, useRef } from "react"

interface TypingEffectProps {
  show?: boolean
}

export const TypingEffect = ({ show = true }: TypingEffectProps) => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const fullText = "Deploy this http://github.com/nexlayer/ai-todo-app"
  const typingSpeed = 50
  const pauseTime = 1000

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
