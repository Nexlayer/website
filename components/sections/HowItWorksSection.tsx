"use client";

import { motion } from "framer-motion";
import { Terminal, Hexagon, Clock } from "lucide-react";

export const HowItWorksSection = () => {
  const steps = [
    {
      icon: Terminal,
      title: "Agent writes code",
      description: "Cursor, Claude Code, or Copilot builds your app",
      iconColor: "#22d3ee", // Cyan
      bgGradient: "from-cyan-500/20 to-blue-500/20",
      borderColor: "border-cyan-400/30",
    },
    {
      icon: Hexagon,
      title: "Agent deploys via MCP",
      description: "One command to Nexlayer, zero configuration",
      iconColor: "#a855f7", // Purple
      bgGradient: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-400/30",
    },
    {
      icon: Clock,
      title: "Live in production",
      description: "Full-stack app running globally in seconds",
      iconColor: "#10b981", // Emerald
      bgGradient: "from-cyan-500/20 via-teal-500/20 to-emerald-500/20",
      borderColor: "border-transparent",
      borderGradient: "bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400",
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-28 lg:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Headline */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-white mb-3 sm:mb-4 leading-tight" style={{ fontFamily: '"Anthropic Serif", Georgia, sans-serif' }}>
            Agent → Cloud.{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
              One step.
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Your coding agent connects directly to Nexlayer.
          </p>
        </div>

        {/* Three-Step Process */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-6 lg:gap-12 max-w-5xl mx-auto px-4">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={index}
                className="flex items-center w-full md:w-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                {/* Step Card */}
                <div className="flex flex-col items-center text-center flex-1 md:flex-initial">
                  {/* Icon */}
                  {step.borderGradient ? (
                    <motion.div
                      className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl ${step.borderGradient} p-[1px] mb-4 flex-shrink-0`}
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.2 + 0.3,
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                      }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className={`w-full h-full rounded-xl bg-gradient-to-br ${step.bgGradient} flex items-center justify-center relative overflow-hidden`}>
                        {/* Glow effect */}
                        <div
                          className="absolute inset-0 rounded-xl opacity-50 blur-xl"
                          style={{ backgroundColor: step.iconColor }}
                        />
                        <motion.div
                          animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.5, 0.8, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="absolute inset-0 rounded-xl"
                          style={{ backgroundColor: step.iconColor }}
                        />
                        <IconComponent
                          className="w-8 h-8 sm:w-10 sm:h-10 relative z-10"
                          style={{ color: step.iconColor }}
                        />
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-br ${step.bgGradient} border ${step.borderColor} flex items-center justify-center mb-4 flex-shrink-0 relative overflow-hidden`}
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.2 + 0.3,
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                      }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Glow effect */}
                      <div
                        className="absolute inset-0 rounded-xl opacity-50 blur-xl"
                        style={{ backgroundColor: step.iconColor }}
                      />
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute inset-0 rounded-xl"
                        style={{ backgroundColor: step.iconColor }}
                      />
                      <IconComponent
                        className="w-8 h-8 sm:w-10 sm:h-10 relative z-10"
                        style={{ color: step.iconColor }}
                      />
                    </motion.div>
                  )}
                  
                  {/* Title */}
                  <motion.h3
                    className="text-lg sm:text-xl font-bold text-white mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                  >
                    {step.title}
                  </motion.h3>
                  
                  {/* Description */}
                  <motion.p
                    className="text-sm sm:text-base text-white/70 max-w-[280px]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.6 }}
                  >
                    {step.description}
                  </motion.p>
                </div>

                {/* Arrow (not shown after last step) */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden md:block mx-2 lg:mx-4 flex-shrink-0"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.7 }}
                  >
                    <svg
                      className="w-6 h-6 lg:w-8 lg:h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
