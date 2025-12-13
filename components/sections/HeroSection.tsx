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
  const [currentAgentIndex, setCurrentAgentIndex] = useState(0);

  const agents = [
    { name: "Cursor", icon: Cursor, color: "#ffffff" },
    { name: "Claude", icon: ClaudeAI, color: "#C15F3C" },
    { name: "Copilot", icon: GitHubCopilot, color: "#22A9F2" },
  ];

  // Rotate agents in hero heading
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAgentIndex((prev) => (prev + 1) % agents.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

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
      <section className="px-4 sm:px-6 py-12 sm:py-16 md:py-20 bg-black">
        <div className="text-center mx-auto">
          {/* Top Label */}
          <div className="mt-12 sm:mt-20 mb-8 flex justify-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/20">
              <span className="text-white/80 text-sm font-medium">NEXLAYER</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-4 sm:mb-6 leading-[1.1] sm:leading-[0.95] font-normal max-w-5xl mx-auto px-4 tracking-[-0.03em] text-center" style={{ fontFamily: '"Anthropic Serif", Georgia, sans-serif' }}>
            <span className="block sm:inline">Ship anything from</span>{" "}
            <span className="inline-flex items-center gap-1.5 sm:gap-2 justify-center flex-wrap">
              {(() => {
                const AgentIcon = agents[currentAgentIndex].icon;
                const currentAgent = agents[currentAgentIndex];
                return (
                  <>
                    <AgentIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10 flex-shrink-0" />
                    <span style={{ color: currentAgent.color }}>
                      {currentAgent.name}
                    </span>
                  </>
                );
              })()}
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-400 mb-14 font-normal max-w-2xl mx-auto px-4 leading-relaxed text-center">
          Tell your AI agent what to ship. Nexlayer handles the rest. Deploy production-ready apps directly from your coding agent—no DevOps, no YAML, no friction.
          </p>

          {/* Agent Icons */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 px-4">
            <Link 
              href="https://app.nexlayer.io/dashboard?tab=mcp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-gray-800/50 border border-gray-700 hover:bg-gray-700/50 hover:border-gray-600 transition-all duration-200 cursor-pointer min-h-[44px]"
            >
              <Cursor className="w-4 h-4 text-white flex-shrink-0" />
              <span className="text-xs sm:text-sm text-gray-300 font-medium whitespace-nowrap">Connect to Cursor</span>
            </Link>
            <Link 
              href="https://app.nexlayer.io/dashboard?tab=mcp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-gray-800/50 border border-gray-700 hover:bg-gray-700/50 hover:border-gray-600 transition-all duration-200 cursor-pointer min-h-[44px]"
            >
              <ClaudeAI className="w-4 h-4 flex-shrink-0" />
              <span className="text-xs sm:text-sm text-gray-300 font-medium whitespace-nowrap">Connect to Claude Code</span>
            </Link>
            <Link 
              href="https://app.nexlayer.io/dashboard?tab=mcp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-gray-800/50 border border-gray-700 hover:bg-gray-700/50 hover:border-gray-600 transition-all duration-200 cursor-pointer min-h-[44px]"
            >
              <GitHubCopilot className="w-4 h-4 flex-shrink-0" />
              <span className="text-xs sm:text-sm text-gray-300 font-medium whitespace-nowrap">Connect to Copilot</span>
            </Link>
          </div>


          {/* Animated Terminal Demo */}
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes slideIn { from { opacity: 0; transform: translateX(-12px); } to { opacity: 1; transform: translateX(0); } }
            @keyframes progress { 0% { width: 0%; } 100% { width: 100%; } }
          `}} />
          <div className="max-w-4xl mx-auto mb-8 sm:mb-12 px-4">
            <div style={{ background: 'rgba(8, 8, 8, 0.95)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden', boxShadow: `0 0 0 1px rgba(255,255,255,0.05), 0 0 80px ${currentAgent.agentColor}20, 0 40px 80px rgba(0,0,0,0.6)` }} className="sm:rounded-2xl">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px', background: 'rgba(0,0,0,0.6)', borderBottom: '1px solid rgba(255,255,255,0.08)' }} className="sm:px-4 sm:py-3.5">
                <div style={{ display: 'flex', gap: '6px' }} className="sm:gap-2">
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }} className="sm:w-3 sm:h-3" />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }} className="sm:w-3 sm:h-3" />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27ca40' }} className="sm:w-3 sm:h-3" />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }} className="sm:gap-2 flex-1 min-w-0 ml-2">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '18px', height: '18px', flexShrink: 0 }} className="sm:w-5 sm:h-5">
                    {getAgentIcon()}
                  </div>
                  <span style={{ fontSize: '11px', color: currentAgent.agentColor, fontWeight: '600' }} className="sm:text-sm truncate">{currentAgent.agent}</span>
                  <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }} className="sm:text-sm hidden sm:inline">→ Nexlayer MCP</span>
                </div>
                <div style={{ padding: '4px 10px', background: 'rgba(39, 202, 64, 0.15)', borderRadius: '100px', fontSize: '9px', color: '#27ca40', letterSpacing: '0.5px', fontWeight: '500' }} className="sm:px-3 sm:py-1.5 sm:text-xs flex-shrink-0 ml-1">{currentAgent.stack}</div>
              </div>

              <div style={{ padding: '20px', minHeight: '200px', fontFamily: "'JetBrains Mono', monospace" }} className="sm:p-8 sm:min-h-[260px]">
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '20px' }} className="sm:gap-3.5 sm:mb-7">
                  <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: `linear-gradient(135deg, ${currentAgent.agentColor}, ${currentAgent.agentColor}99)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: `0 4px 20px ${currentAgent.agentColor}30` }} className="sm:w-9 sm:h-9 sm:rounded-[10px]">
                    <MessageSquare size={16} color="#000" style={{ width: '16px', height: '16px' }} className="sm:w-[18px] sm:h-[18px]" />
                  </div>
                  <div style={{ flex: 1, paddingTop: '4px' }}>
                    <div style={{ fontSize: '13px', color: '#fff', lineHeight: '1.5' }} className="sm:text-[15px]">
                      "{displayedText}{isTyping && <span style={{ color: currentAgent.agentColor }}>|</span>}"
                    </div>
                  </div>
                </div>

                {showResponse && (
                  <div style={{ marginLeft: '0px' }} className="sm:ml-[50px]">
                    {currentAgent.responses.map((r, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 12px', marginBottom: '6px', background: 'rgba(0, 170, 192, 0.04)', borderLeft: '3px solid #00AAC0', borderRadius: '0 8px 8px 0', animation: `slideIn 0.35s ease-out ${i * 0.12}s both` }} className="sm:gap-3 sm:px-4 sm:py-3 sm:mb-2">
                        <CheckCircle size={14} style={{ color: '#00AAC0', flexShrink: 0, width: '14px', height: '14px' }} className="sm:w-4 sm:h-4" />
                        <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.85)' }} className="sm:text-sm">{r}</span>
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
          <div className="max-w-4xl mx-auto mb-4 sm:mb-12 md:mb-16 lg:mb-20 text-center px-4">
            <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 md:mb-10 font-medium tracking-wide">
              Built by a team who've scaled products for millions at
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 opacity-60">
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
                  className="h-8 sm:h-10 w-auto"
                />
              </div>

              {/* MIT Logo */}
              <div className="flex items-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hSE4jSsjQGcWW0cbgDHaEKmtEgXK1l.png"
                  alt="MIT"
                  className="h-8 sm:h-10 w-auto"
                />
              </div>

              {/* HubSpot Logo */}
              <div className="flex items-center">
                <img
                  src="/logos/hubspot-logo.png"
                  alt="HubSpot"
                  className="h-8 sm:h-10 w-auto"
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
