"use client";

import { Terminal, Hexagon, Clock } from "lucide-react";

export const HowItWorksSection = () => {
  const steps = [
    {
      icon: Terminal,
      title: "Agent writes code",
      description: "Cursor, Claude Code, or Copilot builds your app",
    },
    {
      icon: Hexagon,
      title: "Agent deploys via MCP",
      description: "One command to Nexlayer, zero configuration",
    },
    {
      icon: Clock,
      title: "Live in production",
      description: "Full-stack app running globally in seconds",
    },
  ];

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Headline */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 leading-tight">
            Agent to production in one
            <br />
            step
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
            Your coding agent connects directly to infrastructure.
          </p>
        </div>

        {/* Three-Step Process */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-6 lg:gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="flex items-center w-full md:w-auto">
                {/* Step Card */}
                <div className="flex flex-col items-center text-center flex-1 md:flex-initial">
                  {/* Icon */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gray-800 flex items-center justify-center mb-4 flex-shrink-0">
                    <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm sm:text-base text-white/70 max-w-[280px]">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (not shown after last step) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block mx-2 lg:mx-4 flex-shrink-0">
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
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
