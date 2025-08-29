import React from "react";
import ClaudeAI from "../ClaudeAI"
import GitHubCopilot from "../GitHubCopilot"
import Windsurf from "../Windsurf"
import OpenAI from "../OpenAI"
import AgenticCloudOrb from "../AgenticCloudOrb"
import CursorLogo from "../CursorLogo"

interface Node {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

interface AnimationSectionProps {
  sources: Node[];
  consumers: Node[];
  className?: string;
  isMobile: boolean;
  paths: { source: string; consumer: string }[];
  containerRef: React.RefObject<HTMLDivElement>;
  svgRef: React.RefObject<SVGSVGElement>;
  ANIM_CONFIG: {
    pulseSize: number;
  };
}

function AnimationSection({
  sources,
  consumers,
  className = "",
  isMobile,
  paths,
  containerRef,
  svgRef,
  ANIM_CONFIG,
}: AnimationSectionProps) {
  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-black ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-sm font-medium text-cyan-400 mb-4 tracking-wider uppercase">
            Agents are the new developers.
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Cloud Agents Trust.™
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Nexlayer is the agent-native cloud — the runtime for AI-built apps,
            APIs, and platforms. One repo, one prompt, production in minutes.
          </p>
        </div>

        {/* Flow Diagram */}
        <div ref={containerRef} className="relative">
          {/* Section Labels */}
          <div className="flex max-sm:flex-col justify-between gap-8 mb-12">
            <div className="flex items-center justify-center lg:justify-start">
              <div className="w-8 h-px bg-gradient-to-r from-[#23B6CB] to-blue-500 mr-3"></div>
              <div className="text-sm font-medium text-gray-500 tracking-wider uppercase">
                Agents build
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium text-gray-500 tracking-wider uppercase">
                Nexlayer ships
              </div>
            </div>
            <div className="flex items-center justify-center lg:justify-end">
              <div className="text-sm font-medium text-gray-500 tracking-wider uppercase">
                Production in minutes.
              </div>
              <div className="w-8 h-px bg-gradient-to-r from-blue-500 to-indigo-500 ml-3"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-20 relative">
            {/* Left Column - Sources */}
            <div className="space-y-6 flex flex-col items-start">
              {sources.map((source, index) => {
                if (source.id === "cursor") {
                  return (
                    <div
                      key={source.id}
                      data-source={index}
                      role="group"
                      className="flex items-center justify-start w-[64px] h-[100px]"
                    >
                      <CursorLogo className="h-16 w-16" />
                    </div>
                  );
                } else if (source.id === "claude") {
                  return (
                    <div
                      key={source.id}
                      data-source={index}
                      role="group"
                      className="flex items-center justify-start w-[64px] h-[100px]"
                    >
                      <ClaudeAI className="h-16 w-16" />
                    </div>
                  );
                } else if (source.id === "vscode") {
                  return (
                    <div
                      key={source.id}
                      data-source={index}
                      role="group"
                      className="flex items-center justify-start w-[64px] h-[100px]"
                    >
                      <GitHubCopilot className="h-16 w-16" />
                    </div>
                  );
                } else if (source.id === "windsurf") {
                  return (
                    <div
                      key={source.id}
                      data-source={index}
                      role="group"
                      className="flex items-center justify-start w-[64px] h-[100px]"
                    >
                      <Windsurf className="h-16 w-16" />
                    </div>
                  );
                } else if (source.id === "openai") {
                  return (
                    <div
                      key={source.id}
                      data-source={index}
                      role="group"
                      className="flex items-center justify-start w-[64px] h-[100px]"
                    >
                      <OpenAI className="h-16 w-16" />
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={source.id}
                      data-source={index}
                      role="group"
                      className="group rounded-xl border border-[#23B6CB]/20 bg-[#23B6CB]/5 p-4 text-center hover:border-[#23B6CB]/30 transition-all duration-300 w-[240px] h-[100px] flex flex-col justify-center"
                    >
                      <div className="flex items-center justify-center gap-2 mb-2 text-[#23B6CB]">
                        <div className="p-1.5 rounded-lg bg-[#23B6CB]/10">
                          {source.icon}
                        </div>
                      </div>
                      <div className="text-sm font-medium text-white">
                        {source.label}
                      </div>
                    </div>
                  );
                }
              })}
            </div>

            <div className="max-md:hidden relative flex items-center justify-center">
              <div data-center className="flex items-center justify-center">
                <AgenticCloudOrb />
              </div>
            </div>

            {/* Right Column - Consumers */}
            <div className="space-y-6 flex flex-col items-end">
              {consumers.map((consumer, index) => (
                <div
                  key={consumer.id}
                  data-consumer={index}
                  role="group"
                  className="group rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-4 text-center hover:border-indigo-500/30 transition-all duration-300 w-[240px] h-[100px] flex flex-col justify-center ml-8"
                >
                  <div className="flex items-center justify-center gap-2 mb-2 text-indigo-400">
                    <div className="p-1.5 rounded-lg bg-indigo-500/10">
                      {consumer.icon}
                    </div>
                  </div>
                  <div className="text-sm font-medium text-white">
                    {consumer.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SVG Connections */}
          {!isMobile && (
            <svg
              ref={svgRef}
              className="absolute inset-0 pointer-events-none"
              style={{ width: "100%", height: "100%" }}
              aria-hidden="true"
            >
              <defs>
                <linearGradient
                  id="source-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#23B6CB" />
                  <stop offset="100%" stopColor="rgba(59,130,246,1)" />
                </linearGradient>
                <linearGradient
                  id="consumer-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="rgba(59,130,246,1)" />
                  <stop offset="100%" stopColor="rgba(99,102,241,1)" />
                </linearGradient>
                <filter id="pulse-glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {paths.map((pathData, index) => (
                <g key={index}>
                  {/* Source path */}
                  {pathData.source && (
                    <>
                      <path
                        d={pathData.source}
                        stroke="url(#source-gradient)"
                        strokeWidth="1"
                        fill="none"
                        opacity="0.25"
                        data-path={index}
                      />
                      <circle
                        className="pulse"
                        r={ANIM_CONFIG.pulseSize}
                        fill="url(#source-gradient)"
                        filter="url(#pulse-glow)"
                        opacity="0"
                      />
                      <path
                        d={pathData.source}
                        stroke="url(#source-gradient)"
                        strokeWidth="1"
                        fill="none"
                        opacity="0"
                        data-path={index + sources.length}
                      />
                      <circle
                        className="pulse"
                        r={ANIM_CONFIG.pulseSize}
                        fill="url(#source-gradient)"
                        filter="url(#pulse-glow)"
                        opacity="0"
                      />
                    </>
                  )}

                  {/* Consumer path */}
                  {pathData.consumer && (
                    <>
                      <path
                        d={pathData.consumer}
                        stroke="url(#consumer-gradient)"
                        strokeWidth="1"
                        fill="none"
                        opacity="0.25"
                        data-path={index + sources.length * 2} // Updated index to account for reverse paths
                      />
                      <circle
                        className="pulse"
                        r={ANIM_CONFIG.pulseSize}
                        fill="url(#consumer-gradient)"
                        filter="url(#pulse-glow)"
                        opacity="0"
                      />
                    </>
                  )}
                </g>
              ))}
            </svg>
          )}
        </div>

        {/* Apple-style feature strip with horizontal steps */}
      </div>
    </section>
  );
}

export default AnimationSection;
