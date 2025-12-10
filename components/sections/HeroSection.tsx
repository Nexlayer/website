"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ComparisonSection } from "./ComparisonSection";
import { Cursor } from "../logos/Cursor";
import { ClaudeAI } from "../logos/ClaudeAI";
import { GitHubCopilot } from "../logos/GitHubCopilot";
import { CheckCircle, MessageSquare } from "lucide-react";

const demos = [
  {
    agent: "Cursor",
    agentColor: "#ffffff",
    prompt: "Deploy my Next.js app with a Postgres database to nexlayer",
    responses: ["Detected Next.js 14 + Prisma", "Provisioned Postgres with persistent storage", "Live at yourapp.nexlayer.ai"],
    stack: "Next.js + Postgres"
  },
  {
    agent: "Claude Code",
    agentColor: "#cc785c",
    prompt: "Ship this Python FastAPI with Redis caching to nexlayer",
    responses: ["Configured FastAPI container", "Added Redis sidecar", "API live with auto-SSL"],
    stack: "FastAPI + Redis"
  },
  {
    agent: "GitHub Copilot",
    agentColor: "#22A9F2",
    prompt: "Launch my RAG chatbot with Qdrant vector store to nexlayer",
    responses: ["Set up Qdrant with 10Gi storage", "Mounted OpenAI key as secret", "Chatbot deployed"],
    stack: "LangChain + Qdrant"
  },
];

export const HeroSection = () => {
  const [currentDemo, setCurrentDemo] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [showResponse, setShowResponse] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const demo = demos[currentDemo];
    const text = demo.prompt;
    let index = 0;
    setDisplayedText('');
    setShowResponse(false);
    setIsTyping(true);

    const typeInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        setTimeout(() => setShowResponse(true), 400);
        setTimeout(() => setCurrentDemo((prev) => (prev + 1) % demos.length), 4000);
      }
    }, 28);

    return () => clearInterval(typeInterval);
  }, [currentDemo]);

  const currentAgent = demos[currentDemo];

  const getAgentIcon = () => {
    switch (currentAgent.agent) {
      case "Cursor":
        return <Cursor className="w-4 h-4" />;
      case "Claude Code":
        return <ClaudeAI className="w-4 h-4" />;
      case "GitHub Copilot":
        return <GitHubCopilot className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <>
      <section className="px-4 py-20 bg-black">
        <div className="text-center mx-auto">
          {/* Top Label */}
          <div className="mt-12 sm:mt-20 mb-8 flex justify-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/20">
              <span className="text-white/80 text-sm font-medium">NEXLAYER</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white mb-6 leading-[0.95] font-bold max-w-5xl mx-auto px-4 tracking-[-0.03em] text-center">
            Ship anything
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">your agent can build.</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-400 mb-14 font-normal max-w-2xl mx-auto px-4 leading-relaxed text-center">
          Connect your coding agent to Nexlayer via MCP. Deploy full-stack apps in 90 seconds. No YAML. No DevOps. Just ship.
          </p>

          {/* Agent Icons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8">
            <Link 
              href="https://app.nexlayer.io/dashboard?tab=mcp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gray-800/50 border border-gray-700 hover:bg-gray-700/50 hover:border-gray-600 transition-all duration-200 cursor-pointer"
            >
              <Cursor className="w-4 h-4 text-white" />
              <span className="text-sm text-gray-300 font-medium">Connect to Cursor</span>
            </Link>
            <Link 
              href="https://app.nexlayer.io/dashboard?tab=mcp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gray-800/50 border border-gray-700 hover:bg-gray-700/50 hover:border-gray-600 transition-all duration-200 cursor-pointer"
            >
              <ClaudeAI className="w-4 h-4" />
              <span className="text-sm text-gray-300 font-medium">Connect to Claude Code</span>
            </Link>
            <Link 
              href="https://app.nexlayer.io/dashboard?tab=mcp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gray-800/50 border border-gray-700 hover:bg-gray-700/50 hover:border-gray-600 transition-all duration-200 cursor-pointer"
            >
              <GitHubCopilot className="w-4 h-4" />
              <span className="text-sm text-gray-300 font-medium">Connect to Copilot</span>
            </Link>
          </div>

          <p className="text-center mt-6 mb-8 text-sm sm:text-base text-gray-400">
            Just ask in natural language. Your agent talks to Nexlayer. You ship.
          </p>

          {/* Animated Terminal Demo */}
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes slideIn { from { opacity: 0; transform: translateX(-12px); } to { opacity: 1; transform: translateX(0); } }
            @keyframes progress { 0% { width: 0%; } 100% { width: 100%; } }
          `}} />
          <div className="max-w-4xl mx-auto mb-12 px-4">
            <div style={{ background: 'rgba(8, 8, 8, 0.95)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden', boxShadow: `0 0 0 1px rgba(255,255,255,0.05), 0 0 80px ${currentAgent.agentColor}20, 0 40px 80px rgba(0,0,0,0.6)` }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 20px', background: 'rgba(0,0,0,0.6)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27ca40' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px', flexShrink: 0 }}>
                    {getAgentIcon()}
                  </div>
                  <span style={{ fontSize: '13px', color: currentAgent.agentColor, fontWeight: '600' }}>{currentAgent.agent}</span>
                  <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>→ Nexlayer MCP</span>
                </div>
                <div style={{ padding: '5px 14px', background: 'rgba(39, 202, 64, 0.15)', borderRadius: '100px', fontSize: '11px', color: '#27ca40', letterSpacing: '0.5px', fontWeight: '500' }}>{currentAgent.stack}</div>
              </div>

              <div style={{ padding: '32px', minHeight: '260px', fontFamily: "'JetBrains Mono', monospace" }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '28px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: `linear-gradient(135deg, ${currentAgent.agentColor}, ${currentAgent.agentColor}99)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: `0 4px 20px ${currentAgent.agentColor}30` }}>
                    <MessageSquare size={18} color="#000" />
                  </div>
                  <div style={{ flex: 1, paddingTop: '4px' }}>
                    <div style={{ fontSize: '15px', color: '#fff', lineHeight: '1.5' }}>
                      "{displayedText}{isTyping && <span style={{ color: currentAgent.agentColor }}>|</span>}"
                    </div>
                  </div>
                </div>

                {showResponse && (
                  <div style={{ marginLeft: '50px' }}>
                    {currentAgent.responses.map((r, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', marginBottom: '8px', background: 'rgba(0, 170, 192, 0.04)', borderLeft: '3px solid #00AAC0', borderRadius: '0 8px 8px 0', animation: `slideIn 0.35s ease-out ${i * 0.12}s both` }}>
                        <CheckCircle size={16} style={{ color: '#00AAC0', flexShrink: 0 }} />
                        <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)' }}>{r}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div style={{ height: '3px', background: 'rgba(255,255,255,0.05)', overflow: 'hidden' }}>
                <div style={{ height: '100%', background: `linear-gradient(90deg, ${currentAgent.agentColor}, #00AAC0)`, animation: 'progress 4s linear infinite' }} />
              </div>
            </div>
          </div>

          {/* Social Proof Section */}
          <div className="max-w-4xl mx-auto mb-4 sm:mb-16 lg:mb-20 text-center px-4">
            <p className="text-gray-400 text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 font-medium tracking-wide">
              Built by a team who've scaled products for millions at
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-12 opacity-60">
              {/* Google Logo */}
              <div className="flex items-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BbwvJ2gUosbcGWO7KGm2kRZnB08PIw.png"
                  alt="Google"
                  className="h-8 sm:h-10 w-auto"
                />
              </div>

              {/* IBM Logo */}
              <div className="flex items-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-m7c19LlD4LJefDOOuJLMWxWqkcPmAL.png"
                  alt="IBM"
                  className="h-6 sm:h-8 w-auto"
                />
              </div>

              {/* MIT Logo */}
              <div className="flex items-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hSE4jSsjQGcWW0cbgDHaEKmtEgXK1l.png"
                  alt="MIT"
                  className="h-6 sm:h-8 w-auto"
                />
              </div>

              {/* ADP Logo */}
              <div className="flex items-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-N428ig9VCIaw0G5IipFov5uqk6edkk.png"
                  alt="ADP"
                  className="h-6 sm:h-8 w-auto"
                />
              </div>

              {/* Experian Logo */}
              <div className="flex items-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BL0T5WZyd4LqMhTnBuGLoqtd6h6j8z.png"
                  alt="Experian"
                  className="h-6 sm:h-8 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ComparisonSection />
    </>
  );
};
