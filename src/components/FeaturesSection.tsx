import { FeatureCard } from "./FeatureCard"
import { FullWidthCard } from "./FullWidthCard"

export const FeaturesSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          title="Invisible Infrastructure"
          description="No IaC scripts. No DevOps dashboards. Just real infrastructure, fully managed — from repo to production in seconds."
        >
          <svg
            className="w-full h-full opacity-30 group-hover:opacity-60 transition-all duration-300"
            viewBox="0 0 200 150"
          >
            <path
              d="M20 75 Q60 25 100 75 T180 75"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="group-hover:stroke-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(34,183,203,0.6)] transition-all duration-300"
            />
            <path
              d="M40 100 Q80 50 120 100 T200 100"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              className="group-hover:stroke-cyan-400 group-hover:drop-shadow-[0_0_6px_rgba(34,183,203,0.4)] transition-all duration-300"
            />
            <circle
              cx="100"
              cy="75"
              r="3"
              fill="currentColor"
              className="group-hover:fill-cyan-400 group-hover:drop-shadow-[0_0_10px_rgba(34,183,203,0.8)] transition-all duration-300"
            />
            <circle
              cx="60"
              cy="50"
              r="2"
              fill="currentColor"
              className="group-hover:fill-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(34,183,203,0.6)] transition-all duration-300"
            />
            <circle
              cx="140"
              cy="50"
              r="2"
              fill="currentColor"
              className="group-hover:fill-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(34,183,203,0.6)] transition-all duration-300"
            />
          </svg>
        </FeatureCard>

        <FeatureCard
          title="Built for Agents"
          description="Cursor wrote the code. Claude added the backend.<br />Now Nexlayer gives them the power to deploy it — end-to-end."
        >
          <svg
            className="w-full h-full opacity-30 group-hover:opacity-60 transition-all duration-300"
            viewBox="0 0 200 150"
          >
            <rect
              x="40"
              y="40"
              width="120"
              height="80"
              rx="4"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="group-hover:stroke-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(34,183,203,0.6)] transition-all duration-300"
            />
            <rect
              x="50"
              y="50"
              width="100"
              height="8"
              rx="2"
              fill="currentColor"
              opacity="0.3"
              className="group-hover:fill-cyan-400 group-hover:opacity-70 group-hover:drop-shadow-[0_0_6px_rgba(34,183,203,0.4)] transition-all duration-300"
            />
            <rect
              x="50"
              y="65"
              width="80"
              height="8"
              rx="2"
              fill="currentColor"
              opacity="0.3"
              className="group-hover:fill-cyan-400 group-hover:opacity-70 group-hover:drop-shadow-[0_0_6px_rgba(34,183,203,0.4)] transition-all duration-300"
            />
            <rect
              x="50"
              y="80"
              width="60"
              height="8"
              rx="2"
              fill="currentColor"
              opacity="0.3"
              className="group-hover:fill-cyan-400 group-hover:opacity-70 group-hover:drop-shadow-[0_0_6px_rgba(34,183,203,0.4)] transition-all duration-300"
            />
            <rect
              x="50"
              y="95"
              width="90"
              height="8"
              rx="2"
              fill="currentColor"
              opacity="0.3"
              className="group-hover:fill-cyan-400 group-hover:opacity-70 group-hover:drop-shadow-[0_0_6px_rgba(34,183,203,0.4)] transition-all duration-300"
            />
            <circle
              cx="170"
              cy="50"
              r="8"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="group-hover:stroke-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(34,183,203,0.6)] transition-all duration-300"
            />
            <circle
              cx="170"
              cy="70"
              r="8"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="group-hover:stroke-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(34,183,203,0.6)] transition-all duration-300"
            />
          </svg>
        </FeatureCard>

        <FeatureCard
          title="From Prompt to Production"
          description="Agents don't preview. They ship.<br />Nexlayer runs what works — securely, globally, and at scale.<br />If it's real software, it gets a real URL."
        >
          <svg
            className="w-full h-full opacity-30 group-hover:opacity-60 transition-all duration-300"
            viewBox="0 0 200 150"
          >
            <rect
              x="30"
              y="30"
              width="140"
              height="90"
              rx="6"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="group-hover:stroke-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(34,183,203,0.6)] transition-all duration-300"
            />
            <rect
              x="50"
              y="50"
              width="35"
              height="20"
              rx="2"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              className="group-hover:stroke-cyan-400 group-hover:drop-shadow-[0_0_6px_rgba(34,183,203,0.4)] transition-all duration-300"
            />
            <rect
              x="95"
              y="50"
              width="35"
              height="20"
              rx="2"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              className="group-hover:stroke-cyan-400 group-hover:drop-shadow-[0_0_6px_rgba(34,183,203,0.4)] transition-all duration-300"
            />
            <rect
              x="140"
              y="50"
              width="20"
              height="20"
              rx="2"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              className="group-hover:stroke-cyan-400 group-hover:drop-shadow-[0_0_6px_rgba(34,183,203,0.4)] transition-all duration-300"
            />
            <line
              x1="50"
              y1="85"
              x2="130"
              y2="85"
              stroke="currentColor"
              strokeWidth="1"
              className="group-hover:stroke-cyan-400 group-hover:drop-shadow-[0_0_6px_rgba(34,183,203,0.4)] transition-all duration-300"
            />
            <line
              x1="50"
              y1="95"
              x2="100"
              y2="95"
              stroke="currentColor"
              strokeWidth="1"
              className="group-hover:stroke-cyan-400 group-hover:drop-shadow-[0_0_6px_rgba(34,183,203,0.4)] transition-all duration-300"
            />
            <line
              x1="50"
              y1="105"
              x2="120"
              y2="105"
              stroke="currentColor"
              strokeWidth="1"
              className="group-hover:stroke-cyan-400 group-hover:drop-shadow-[0_0_6px_rgba(34,183,203,0.4)] transition-all duration-300"
            />
          </svg>
        </FeatureCard>
      </div>

      {/* Two Full-Width Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
        <FullWidthCard
          title="Production-Ready by Default — for Agents and Humans"
          description="Whether deployed by an AI agent or a developer, every Nexlayer app runs in its own isolated runtime. No shared infra. No cross-app leakage. Just secure, production-grade infrastructure that's ready the moment you hit deploy."
          subtitle="Built for a world where agents write code — and humans expect it to be safe."
        >
          <svg
            className="w-full h-full opacity-30 group-hover:opacity-60 transition-all duration-300"
            viewBox="0 0 300 120"
          >
            <circle
              cx="60"
              cy="40"
              r="15"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="group-hover:stroke-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(34,183,203,0.6)] transition-all duration-300"
            />
            <circle
              cx="60"
              cy="40"
              r="8"
              fill="currentColor"
              opacity="0.3"
              className="group-hover:fill-cyan-400 group-hover:opacity-70 transition-all duration-300"
            />
            <circle
              cx="120"
              cy="40"
              r="15"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="group-hover:stroke-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(34,183,203,0.6)] transition-all duration-300"
            />
            <circle
              cx="120"
              cy="40"
              r="8"
              fill="currentColor"
              opacity="0.3"
              className="group-hover:fill-cyan-400 group-hover:opacity-70 transition-all duration-300"
            />
            
            <rect
              x="200"
              y="20"
              width="80"
              height="40"
              rx="8"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="group-hover:stroke-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(34,183,203,0.6)] transition-all duration-300"
            />
            
            <path
              d="M240 10 L250 10 L250 15 L245 20 L235 20 L235 15 Z"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              className="group-hover:stroke-cyan-400 group-hover:drop-shadow-[0_0_6px_rgba(34,183,203,0.4)] transition-all duration-300"
            />
            
            <path
              d="M80 40 L180 40"
              stroke="currentColor"
              strokeWidth="1"
              markerEnd="url(#arrowhead)"
              className="group-hover:stroke-cyan-400 transition-all duration-300"
            />
            <path
              d="M140 40 L180 40"
              stroke="currentColor"
              strokeWidth="1"
              markerEnd="url(#arrowhead)"
              className="group-hover:stroke-cyan-400 transition-all duration-300"
            />
            
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" className="group-hover:fill-cyan-400 transition-all duration-300" />
              </marker>
            </defs>
          </svg>
        </FullWidthCard>

        <FullWidthCard
          title="Built to Scale What Works — Fast"
          description="Nexlayer turns your code into a high-performance application, runs it on global infrastructure, and returns a live URL in seconds. If your code runs locally, Nexlayer ships it — optimized for speed, built to scale."
          subtitle="Real performance. Global reach. From localhost to launch, instantly."
        >
          <svg
            className="w-full h-full opacity-30 group-hover:opacity-60 transition-all duration-300"
            viewBox="0 0 300 120"
          >
            <rect
              x="20"
              y="30"
              width="50"
              height="30"
              rx="4"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="group-hover:stroke-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(34,183,203,0.6)] transition-all duration-300"
            />
            <text x="45" y="48" textAnchor="middle" className="text-xs fill-current group-hover:fill-cyan-400 transition-all duration-300">GH</text>
            
            <path
              d="M110 35 L120 45 L115 45 L125 55 L115 45 L120 45 Z"
              fill="currentColor"
              className="group-hover:fill-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(34,183,203,0.6)] transition-all duration-300"
            />
            
            <circle
              cx="180"
              cy="45"
              r="20"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="group-hover:stroke-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(34,183,203,0.6)] transition-all duration-300"
            />
            <path
              d="M160 45 Q180 25 200 45 Q180 65 160 45"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              className="group-hover:stroke-cyan-400 transition-all duration-300"
            />
            <path
              d="M160 45 Q180 35 200 45 Q180 55 160 45"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              className="group-hover:stroke-cyan-400 transition-all duration-300"
            />
            
            <rect
              x="220"
              y="35"
              width="60"
              height="20"
              rx="10"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              className="group-hover:stroke-cyan-400 group-hover:drop-shadow-[0_0_6px_rgba(34,183,203,0.4)] transition-all duration-300"
            />
            <text x="250" y="47" textAnchor="middle" className="text-xs fill-current group-hover:fill-cyan-400 transition-all duration-300">URL</text>
            
            <path
              d="M80 40 L100 40"
              stroke="currentColor"
              strokeWidth="2"
              className="group-hover:stroke-cyan-400 transition-all duration-300"
            />
            <path
              d="M80 45 L95 45"
              stroke="currentColor"
              strokeWidth="1"
              className="group-hover:stroke-cyan-400 transition-all duration-300"
            />
            <path
              d="M80 50 L90 50"
              stroke="currentColor"
              strokeWidth="1"
              className="group-hover:stroke-cyan-400 transition-all duration-300"
            />
            
            <path
              d="M140 40 L160 40"
              stroke="currentColor"
              strokeWidth="2"
              className="group-hover:stroke-cyan-400 transition-all duration-300"
            />
            <path
              d="M145 45 L160 45"
              stroke="currentColor"
              strokeWidth="1"
              className="group-hover:stroke-cyan-400 transition-all duration-300"
            />
            <path
              d="M150 50 L160 50"
              stroke="currentColor"
              strokeWidth="1"
              className="group-hover:stroke-cyan-400 transition-all duration-300"
            />
            
            <path
              d="M200 45 L220 45"
              stroke="currentColor"
              strokeWidth="2"
              className="group-hover:stroke-cyan-400 transition-all duration-300"
            />
          </svg>
        </FullWidthCard>
      </div>
    </section>
  )
}
