import { useState } from "react"
import { Button } from "./ui/button"
import { Rocket } from "./icons"
import { TypingEffect } from "./TypingEffect"

export const HeroSection = () => {
  const [userInput, setUserInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setUserInput(value)
    setIsTyping(value.length > 0)
  }

  return (
    <section className="flex-1 flex flex-col items-center justify-center px-4 py-20">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-12"></div>

        <h1 className="text-5xl text-white mb-6 leading-tight lg:text-6xl font-medium font-sans sm:text-5xl">
          AI that ships real software. 
        </h1>

        <p className="text-xl text-gray-400 mb-16 font-normal">
          Whatever your agent builds, Nexlayer deploys it to real production-ready 
infrastructure with zero config, no Dockerfiles, and no cloud dashboards.
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
            <div className="flex items-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BbwvJ2gUosbcGWO7KGm2kRZnB08PIw.png"
                alt="Google"
                className="h-10 w-auto"
              />
            </div>
            <div className="flex items-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-m7c19LlD4LJefDOOuJLMWxWqkcPmAL.png"
                alt="IBM"
                className="h-8 w-auto"
              />
            </div>
            <div className="flex items-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hSE4jSsjQGcWW0cbgDHaEKmtEgXK1l.png"
                alt="MIT"
                className="h-8 w-auto"
              />
            </div>
            <div className="flex items-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-N428ig9VCIaw0G5IipFov5uqk6edkk.png"
                alt="ADP"
                className="h-8 w-auto"
              />
            </div>
            <div className="flex items-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BL0T5WZyd4LqMhTnBuGLoqtd6h6j8z.png"
                alt="Experian"
                className="h-8 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
