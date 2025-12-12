"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { ClaudeAI } from "../logos/ClaudeAI";

export const FeaturesGridSection = () => {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [displayedPrompt, setDisplayedPrompt] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showAgentResponse, setShowAgentResponse] = useState(false);
  const [showOutcome, setShowOutcome] = useState(false);

  const techPrompts: Record<string, string> = {
    "FastAPI": "Deploy my FastAPI app with a health endpoint to nexlayer",
    "Next.js": "Ship my Next.js frontend to nexlayer",
    "PostgreSQL": "Add a Postgres database to my app on nexlayer",
    "LangChain": "Deploy my LangChain with Pinecone to nexlayer",
    "Redis": "Add Redis caching to my API on nexlayer",
    "Django": "Deploy my Django app to nexlayer",
    "Flask": "Ship my Flask API to nexlayer",
    "Express": "Deploy my Express.js backend to nexlayer",
    "React": "Deploy my React app to nexlayer",
    "MongoDB": "Add a MongoDB database to my app on nexlayer",
    "Qdrant": "Deploy my app with Qdrant vector store to nexlayer",
    "Pinecone": "Add Pinecone vector database to my app on nexlayer",
    "Weaviate": "Deploy with Weaviate vector store to nexlayer",
    "Chroma": "Add Chroma vector database to nexlayer",
    "Supabase": "Connect my app to Supabase on nexlayer",
    "Neon": "Add Neon Postgres database to nexlayer",
    "LlamaIndex": "Deploy my LlamaIndex app to nexlayer",
    "CrewAI": "Ship my CrewAI multi-agent system to nexlayer",
    "Hono": "Deploy my Hono API to nexlayer",
    "Go": "Ship my Go application to nexlayer",
    "Rust": "Deploy my Rust service to nexlayer",
    "Ruby": "Ship my Ruby app to nexlayer",
    "PHP": "Deploy my PHP application to nexlayer",
    "Java": "Ship my Java backend to nexlayer",
  };

  const frameworks = [
    "Next.js",
    "React",
    "Django",
    "Flask",
    "FastAPI",
    "Express",
    "Hono",
    "Go",
    "Rust",
    "Ruby",
    "PHP",
    "Java",
  ];

  const databases = [
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Qdrant",
    "Pinecone",
    "Weaviate",
    "Chroma",
    "Supabase",
    "Neon",
    "LangChain",
    "LlamaIndex",
    "CrewAI",
  ];

  const handleTechClick = (tech: string) => {
    if (techPrompts[tech]) {
      const isSameTech = selectedTech === tech;
      setSelectedTech(isSameTech ? null : tech);
      
      if (!isSameTech) {
        // Reset animation state
        setDisplayedPrompt("");
        setIsTyping(true);
        setShowAgentResponse(false);
        setShowOutcome(false);
      }
    }
  };

  // Animation sequence when a tech is selected
  useEffect(() => {
    if (!selectedTech || !techPrompts[selectedTech]) return;

    const prompt = techPrompts[selectedTech];
    let index = 0;
    
    // Phase 1: Type the prompt
    const typeInterval = setInterval(() => {
      if (index < prompt.length) {
        setDisplayedPrompt(prompt.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        
        // Phase 2: Show agent response
        setTimeout(() => {
          setShowAgentResponse(true);
          
          // Phase 3: Show deployment outcome
          setTimeout(() => {
            setShowOutcome(true);
          }, 1000);
        }, 500);
      }
    }, 30);

    return () => clearInterval(typeInterval);
  }, [selectedTech]);

  return (
    <section id="ship-any-tech" className="px-4 py-20 bg-black">
        <div className="max-w-6xl mx-auto">
        <div className="ship-any-tech-section-inner">
          <h2 className="ship-any-tech-heading" style={{ fontFamily: '"Anthropic Serif", Georgia, sans-serif' }}>
            Any stack. Any service.{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
              One platform.
            </span>
            </h2>
          <p className="ship-any-tech-subhead">
            Whatever your agent builds — containers, databases, vector stores, or APIs.Nexlayer runs and wires it together automatically.
          </p>

          {/* First Row - Frameworks & Languages */}
          <div className="ship-any-tech-marquee-container">
            <div
              className="ship-any-tech-marquee-track"
              style={{
                animationDirection: "normal",
                animationDuration: "50s",
              }}
            >
              {frameworks.map((tech, index) => (
                <span
                  key={index}
                  className="ship-any-tech-marquee-item"
                  onClick={() => handleTechClick(tech)}
                  style={{ cursor: techPrompts[tech] ? "pointer" : "default" }}
                >
                  {tech}
                </span>
              ))}
              {/* Duplicate for seamless loop */}
              {frameworks.map((tech, index) => (
                <span
                  key={`dup-${index}`}
                  className="ship-any-tech-marquee-item"
                  onClick={() => handleTechClick(tech)}
                  style={{ cursor: techPrompts[tech] ? "pointer" : "default" }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="ship-any-tech-marquee-divider"></div>

          {/* Second Row - Databases & AI Tools */}
          <div className="ship-any-tech-marquee-container">
            <div
              className="ship-any-tech-marquee-track"
              style={{
                animationDirection: "reverse",
                animationDuration: "50s",
              }}
            >
              {databases.map((tech, index) => (
                <span
                  key={index}
                  className="ship-any-tech-marquee-item"
                  onClick={() => handleTechClick(tech)}
                  style={{ cursor: techPrompts[tech] ? "pointer" : "default" }}
                >
                  {tech}
                </span>
              ))}
              {/* Duplicate for seamless loop */}
              {databases.map((tech, index) => (
                <span
                  key={`dup-${index}`}
                  className="ship-any-tech-marquee-item"
                  onClick={() => handleTechClick(tech)}
                  style={{ cursor: techPrompts[tech] ? "pointer" : "default" }}
                >
                  {tech}
                </span>
              ))}
            </div>
            </div>

          {/* Educational Message - Animated Interaction */}
          <AnimatePresence>
            {selectedTech && techPrompts[selectedTech] && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mt-12 max-w-2xl mx-auto"
              >
                <div className="bg-black border border-gray-800 rounded-xl p-8 text-left">
                  <div className="space-y-6">
                    {/* User Prompt */}
                    <div className="space-y-2">
                      <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                        You
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "#f472b6" }} />
                        <div className="flex-1">
                          <span className="font-medium text-white">
                            Tell your agent: "
                            <span className="font-mono" style={{ color: "#f472b6" }}>
                              {displayedPrompt}
                              {isTyping && (
                                <span className="inline-block w-0.5 h-4 ml-1 animate-pulse" style={{ backgroundColor: "#f472b6" }} />
                              )}
                            </span>
                            "
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Agent Response */}
                    {showAgentResponse && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-2"
                      >
                        <div className="text-xs text-gray-500 uppercase tracking-wider mb-1 flex items-center gap-2">
                          <ClaudeAI className="w-4 h-4" />
                          Claude
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "#a78bfa" }} />
                          <div className="flex-1">
                            <span style={{ color: "#a78bfa" }} className="font-medium">
                              Reviewing your project structure, then proceeding with Nexlayer deployment.
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Deployment Outcome */}
                    {showOutcome && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-2"
                      >
                        <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                          Outcome
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: "#38bdf8" }} />
                          <div className="flex-1">
                            <div style={{ color: "#38bdf8" }} className="font-medium space-y-1">
                              <div>Deployment successful.</div>
                              <div className="text-sm mt-2">
                                Deployment details: <span className="font-mono text-cyan-300">www.my-awesome-app.nexlayer.ai</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Documentation Button */}
          <div className="mt-12">
            <a
              href="https://docs.nexlayer.com/"
                      target="_blank"
                      rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2.5 bg-black border border-gray-700 text-gray-400 text-sm font-medium rounded-full hover:border-gray-600 hover:text-gray-300 transition-all duration-300"
            >
              Documentation
            </a>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        #ship-any-tech .ship-any-tech-section-inner {
          text-align: center;
        }

        #ship-any-tech .ship-any-tech-heading {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 400;
          letter-spacing: -0.03em;
          margin-bottom: 1rem;
          color: white;
        }

        #ship-any-tech .ship-any-tech-accent {
          color: #22d3ee;
        }

        #ship-any-tech .ship-any-tech-subhead {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 4rem;
        }

        .ship-any-tech-marquee-container {
          overflow: hidden;
          margin: 0 -2rem;
          padding: 2rem 0;
        }

        .ship-any-tech-marquee-track {
          display: flex;
          gap: 1rem;
          animation: ship-any-tech-marquee 60s linear infinite;
        }

        .ship-any-tech-marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes ship-any-tech-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .ship-any-tech-marquee-item {
          flex-shrink: 0;
          padding: 0.75rem 1.5rem;
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.6);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 100px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          user-select: none;
        }

        .ship-any-tech-marquee-item:hover {
          color: white;
          background: rgba(255, 255, 255, 0.08);
          border-color: #22d3ee;
          box-shadow: 0 0 30px rgba(34, 211, 238, 0.15);
          transform: scale(1.05);
        }

        .ship-any-tech-marquee-divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.06),
            transparent
          );
          margin: 1rem 0;
        }

        #ship-any-tech .ship-any-tech-any-docker-row {
          margin-top: 3rem;
        }

        #ship-any-tech .ship-any-tech-any-docker {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.875rem 1.75rem;
          font-size: 0.875rem;
          color: #22d3ee;
          background: rgba(34, 211, 238, 0.05);
          border: 1px solid rgba(34, 211, 238, 0.2);
          border-radius: 100px;
          transition: all 0.3s ease;
        }

        #ship-any-tech .ship-any-tech-any-docker:hover {
          background: rgba(34, 211, 238, 0.1);
          border-color: #22d3ee;
        }
      `,
        }}
      />
    </section>
  );
};
