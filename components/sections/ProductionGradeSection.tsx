"use client"

import { motion } from "framer-motion"
import { BarChart3, Clock, Shield, Plus, ArrowRight, Globe, Layers, CheckCircle } from "lucide-react"
import { ClaudeAI } from "../logos/ClaudeAI"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

const yourCodeTags = ["Next.js", "FastAPI", "Express", "Go", "Rust", "Django"]
const managedServicesTags = ["Supabase", "Neon", "Pinecone", "OpenAI", "Stripe"]

const pillars = [
  {
    icon: BarChart3,
    label: "Scale",
    title: "Auto-scaling everything",
    description:
      "Containers scale with traffic. Service connections stay reliable. From 1 user to millions—automatically.",
  },
  {
    icon: Clock,
    label: "Speed",
    title: "90-second orchestration",
    description: "Apps deploy faster than any platform. External services connect instantly. Ship at AI speed.",
  },
  {
    icon: Shield,
    label: "Trust",
    title: "Enterprise-grade, invisible",
    description: "Secrets managed. Connections secured. Failover handled. You ship—we keep it alive.",
  },
]

export const ProductionGradeSection = () => {
  return (
    <section id="production-grade-planet-scale" className="bg-black py-16 sm:py-20 md:py-24 lg:py-36 px-4 sm:px-5 md:px-6 overflow-hidden">
      <motion.div
        className="max-w-[1100px] mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div className="text-center mb-12 sm:mb-16 md:mb-20" variants={itemVariants}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-normal tracking-tight leading-[1.1] mb-8 text-balance" style={{ fontFamily: '"Anthropic Serif", Georgia, sans-serif' }}>
            <span className="text-white">Planet-scale. </span>
            <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_60px_rgba(0,229,191,0.15)]">Invisible by design.</span>
          </h2>
          <p className="text-sm sm:text-base md:text-[17px] text-gray-400 max-w-[680px] mx-auto leading-relaxed px-4">
            Run your own containers <span className="text-white font-semibold">and</span> connect managed services—all wired together automatically.
          </p>
        </motion.div>

        {/* Two Worlds */}
        <motion.div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 sm:gap-6 mb-10 sm:mb-12 md:mb-16 lg:mb-20" variants={itemVariants}>
          {/* Your Code Card */}
          <div className="bg-[#08080a] border border-white/[0.06] p-6 sm:p-8 md:p-10 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none">
            <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.12em] text-purple-400 mb-3 sm:mb-4">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-purple-400" />
              Your Code
            </div>
            <h3 className="text-lg sm:text-xl md:text-[22px] font-bold tracking-tight mb-2 sm:mb-3 text-white">Self-hosted containers</h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-4 sm:mb-6">
              Deploy your own apps, APIs, and services. Any language, any framework. We orchestrate and scale them.
            </p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {yourCodeTags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] sm:text-xs px-2 sm:px-3 py-1 sm:py-1.5 bg-[#101012] border border-white/[0.06] rounded-md text-gray-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Connector */}
          <div className="flex flex-col items-center justify-center bg-[#08080a] border-x-0 md:border-x border-y md:border-y-0 border-white/[0.06] py-4 sm:py-6 md:py-0 md:px-6 relative">
            <motion.div
              className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-400 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(0,229,191,0.15)]"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-black" strokeWidth={2.5} />
            </motion.div>
            <span className="mt-2 sm:mt-3 text-[10px] sm:text-[11px] text-emerald-400 font-semibold uppercase tracking-[0.1em]">
              Unified
            </span>
          </div>

          {/* Managed Services Card */}
          <div className="bg-[#08080a] border border-white/[0.06] p-6 sm:p-8 md:p-10 rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none">
            <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.12em] text-blue-400 mb-3 sm:mb-4">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-400" />
              Managed Services
            </div>
            <h3 className="text-lg sm:text-xl md:text-[22px] font-bold tracking-tight mb-2 sm:mb-3 text-white">
              External APIs & databases
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-4 sm:mb-6">
              Connect Supabase, Neon, Pinecone, OpenAI—any external service. We wire them into your app automatically.
            </p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {managedServicesTags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] sm:text-xs px-2 sm:px-3 py-1 sm:py-1.5 bg-[#101012] border border-white/[0.06] rounded-md text-gray-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Unified Block - Chat Interface */}
        <motion.div
          className="bg-gradient-to-b from-[#08080a] to-black border border-white/[0.06] rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-14 mb-12 sm:mb-16 md:mb-20 relative overflow-hidden"
          variants={itemVariants}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(0,229,191,0.06)_0%,transparent_60%)] pointer-events-none" />

          {/* Header */}
          <div className="text-center mb-6 sm:mb-8 relative px-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight mb-2 sm:mb-3 text-white" style={{ fontFamily: '"Anthropic Serif", Georgia, sans-serif' }}>
              See it in action
            </h3>
            <p className="text-sm sm:text-base text-gray-400 max-w-[600px] mx-auto leading-relaxed">
              Your agent and Nexlayer working together—like a senior engineer pair programming with you.
            </p>
          </div>

          {/* Chat Interface */}
          <div className="bg-[#0a0a0a] border border-white/[0.08] rounded-xl overflow-hidden relative">
            {/* Chat Header */}
            <div className="flex items-center justify-between px-3 py-2 sm:px-4 sm:py-3 border-b border-white/[0.06] bg-[#08080a]">
              <div className="flex items-center gap-1.5 sm:gap-2 flex-1 min-w-0">
                <div className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-white font-medium truncate">Claude Code + Connect to Nexlayer via MCP</span>
              </div>
              <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-emerald-400/20 border border-emerald-400/30 rounded-full text-[9px] sm:text-[10px] font-semibold text-emerald-400 uppercase tracking-wider flex-shrink-0 ml-2">
                LIVE
              </span>
            </div>

            {/* Chat Messages */}
            <div className="p-4 sm:p-6 space-y-4 min-h-[300px] sm:min-h-[400px]">
              {/* User Message */}
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden flex-shrink-0">
                  <img 
                    src="/user-avatar.png" 
                    alt="User" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-[#101012] border border-white/[0.06] rounded-lg px-3 py-2 sm:px-4 sm:py-3 max-w-[85%] sm:max-w-[80%]">
                  <p className="text-xs sm:text-sm text-gray-300">Deploy my app to Nexlayer.</p>
                </div>
              </div>

              {/* Claude MCP Message */}
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center flex-shrink-0 relative">
                  <ClaudeAI className="w-[36px] h-[36px] sm:w-[48px] sm:h-[48px]" />
                  <span className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-emerald-400 rounded-full border border-[#0a0a0a]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-gray-400 font-medium">Claude</span>
                    <span className="px-1.5 py-0.5 bg-emerald-400/20 border border-emerald-400/30 rounded text-[9px] text-emerald-400 font-semibold uppercase">
                      MCP
                    </span>
                  </div>
                  <div className="bg-[#101012] border border-white/[0.06] rounded-lg px-3 py-2 sm:px-4 sm:py-3">
                    <p className="text-xs sm:text-sm text-gray-300">
                      Generated <code className="text-emerald-400">nexlayer.yaml</code> with 3 pods: frontend, api, redis. Supabase connected via env var. Validating with Nexlayer...
                    </p>
                  </div>
                </div>
              </div>

              {/* Nexlayer Validation Error */}
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center flex-shrink-0">
                  <img src="/nexlayer-logo-icon-transparent.svg" alt="Nexlayer" className="w-[36px] h-[36px] sm:w-[48px] sm:h-[48px]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-gray-400 font-medium">Nexlayer</span>
                  </div>
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg px-3 py-2 sm:px-4 sm:py-3">
                    <p className="text-xs sm:text-sm text-red-400 mb-2">
                      Validation failed: Redis pod missing <code className="text-red-300">servicePorts</code>. Required for inter-pod networking.
                    </p>
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs text-red-400/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                      Config invalid
                    </div>
                  </div>
                </div>
              </div>

              {/* Claude MCP Fix */}
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center flex-shrink-0 relative">
                  <ClaudeAI className="w-[36px] h-[36px] sm:w-[48px] sm:h-[48px]" />
                  <span className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-emerald-400 rounded-full border border-[#0a0a0a]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-gray-400 font-medium">Claude</span>
                    <span className="px-1.5 py-0.5 bg-emerald-400/20 border border-emerald-400/30 rounded text-[9px] text-emerald-400 font-semibold uppercase">
                      MCP
                    </span>
                  </div>
                  <div className="bg-[#101012] border border-white/[0.06] rounded-lg px-3 py-2 sm:px-4 sm:py-3 mb-2">
                    <p className="text-xs sm:text-sm text-gray-300">
                      Fixed: Added <code className="text-emerald-400">servicePorts: [6379]</code> to Redis pod. Re-validating...
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] sm:text-xs text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Config valid — deploying
                  </div>
                </div>
              </div>

              {/* Nexlayer Success */}
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center flex-shrink-0">
                  <img src="/nexlayer-logo-icon-transparent.svg" alt="Nexlayer" className="w-[36px] h-[36px] sm:w-[48px] sm:h-[48px]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-gray-400 font-medium">Nexlayer</span>
                  </div>
                  <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg px-3 py-2 sm:px-4 sm:py-3">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" strokeWidth={2} />
                      <p className="text-xs sm:text-sm font-semibold text-emerald-400">Deployed to production</p>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs text-emerald-400/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      https://my-app.nexlayer.ai
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Three Feature Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16 lg:mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "0px" }}
        >
          {/* Card 1 */}
          <motion.div 
            className="bg-[#08080a] border border-white/[0.06] rounded-2xl p-6 sm:p-8 md:p-10 lg:p-14 text-left"
            variants={itemVariants}
          >
            <div className="text-emerald-400 font-semibold text-base sm:text-lg mb-3 sm:mb-4">01</div>
            <h4 className="text-white font-bold text-xl sm:text-2xl mb-3 sm:mb-4">Generates valid configs</h4>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Your agent knows the Nexlayer schema. It creates deployment configs that actually work—no guessing, no copy-pasting from docs.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            className="bg-[#08080a] border border-white/[0.06] rounded-2xl p-6 sm:p-8 md:p-10 lg:p-14 text-left"
            variants={itemVariants}
          >
            <div className="text-emerald-400 font-semibold text-base sm:text-lg mb-3 sm:mb-4">02</div>
            <h4 className="text-white font-bold text-xl sm:text-2xl mb-3 sm:mb-4">Validates before deploy</h4>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Before anything goes live, your agent checks the config against Nexlayer's validation. Catches errors before they cost you time.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            className="bg-[#08080a] border border-white/[0.06] rounded-2xl p-6 sm:p-8 md:p-10 lg:p-14 text-left"
            variants={itemVariants}
          >
            <div className="text-emerald-400 font-semibold text-base sm:text-lg mb-3 sm:mb-4">03</div>
            <h4 className="text-white font-bold text-xl sm:text-2xl mb-3 sm:mb-4">Self-corrects with context</h4>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              When something fails, Nexlayer sends back detailed context. Your agent reads it, understands it, and fixes it—automatically.
            </p>
          </motion.div>
        </motion.div>

        {/* Three Pillars */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden mb-10 sm:mb-12 md:mb-16"
          variants={itemVariants}
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.label}
              className="bg-[#08080a] p-6 sm:p-8 md:p-10 transition-colors hover:bg-[#101012]"
              whileHover={{ backgroundColor: "#101012" }}
            >
              <div className="w-9 h-9 sm:w-11 sm:h-11 relative mb-4 sm:mb-5">
                <div className="absolute inset-0 bg-emerald-400/10 rounded-xl" />
                <pillar.icon className="w-9 h-9 sm:w-11 sm:h-11 p-2 sm:p-2.5 text-emerald-400 relative" />
              </div>
              <div className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.15em] text-emerald-400 mb-2 sm:mb-2.5">
                {pillar.label}
              </div>
              <h3 className="text-[15px] sm:text-[17px] font-semibold tracking-tight mb-2 sm:mb-2.5 leading-tight text-white">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-gray-500 leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing */}
        <motion.div className="text-center pt-8 sm:pt-12 border-t border-white/[0.06] px-4" variants={itemVariants}>
          <p className="text-sm sm:text-[15px] text-gray-500 mb-2">This isn't hosting. This isn't glue code.</p>
          <p className="text-lg sm:text-xl md:text-2xl font-normal tracking-tight text-white" style={{ fontFamily: '"Anthropic Serif", Georgia, sans-serif' }}>
            This is <span className="text-emerald-400">production as a native capability for AI agents to ship your software.</span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
