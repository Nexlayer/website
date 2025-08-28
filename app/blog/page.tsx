import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import Link from "next/link"

const featuredPosts = [
  {
    id: 1,
    title: "Nexlayer Launch — From Prompt to Production in 60 Seconds",
    description:
      "Introducing the world's first agent-native infrastructure platform that deploys AI-built apps instantly.",
    author: "Nexlayer Team",
    avatar: "/nexlayer-logo-icon-transparent.svg",
    readTime: "3 minutes read",
  },
  {
    id: 2,
    title: "The Cloud Agents Trust™ — Why We're Building the Agent-Native Future",
    description: "How we're creating infrastructure specifically designed for AI agents to build and deploy software.",
    author: "Nexlayer Team",
    avatar: "/nexlayer-logo-icon-transparent.svg",
    readTime: "4 minutes read",
  },
  {
    id: 3,
    title: "Our MCP Standard — How AI Agents Ship Apps Without DevOps",
    description:
      "The Model Context Protocol that eliminates traditional deployment complexity for AI-generated applications.",
    author: "Nexlayer Team",
    avatar: "/nexlayer-logo-icon-transparent.svg",
    readTime: "5 minutes read",
  },
  {
    id: 4,
    title: "One-File Deploys: Killing the YAML Headache Forever",
    description: "Say goodbye to complex configuration files and hello to single-file deployments that just work.",
    author: "Nexlayer Team",
    avatar: "/nexlayer-logo-icon-transparent.svg",
    readTime: "3 minutes read",
  },
]

const allPosts = [
  {
    id: 5,
    title: "Setting Up Your AI Coding Agents — Cursor, Claude Code, and Windsurf for Instant Shipping",
    description:
      "Complete guide to configuring your AI development environment for maximum productivity with Nexlayer.",
    author: "Nexlayer Team",
    avatar: "/nexlayer-logo-icon-transparent.svg",
    readTime: "6 minutes read",
  },
  {
    id: 6,
    title: "Kubernetes Without the Pain — How Nexlayer Auto-Scales for You",
    description: "Intelligent auto-scaling that adapts to your application's needs without manual intervention.",
    author: "Nexlayer Team",
    avatar: "/nexlayer-logo-icon-transparent.svg",
    readTime: "4 minutes read",
  },
  {
    id: 7,
    title: "How Nexlayer Cuts Infra Costs by 90% for AI Startups",
    description: "Real case studies showing dramatic cost reductions through intelligent resource optimization.",
    author: "Nexlayer Team",
    avatar: "/nexlayer-logo-icon-transparent.svg",
    readTime: "5 minutes read",
  },
  {
    id: 8,
    title: "Security by Default — Zero-Trust for AI-Built Software",
    description: "How we ensure every AI-generated application meets enterprise security standards automatically.",
    author: "Nexlayer Team",
    avatar: "/nexlayer-logo-icon-transparent.svg",
    readTime: "4 minutes read",
  },
  {
    id: 9,
    title: "From Hackathon to Global Launch in 24 Hours — A Nexlayer Customer Story",
    description: "How one team went from idea to production deployment in record time using our platform.",
    author: "Nexlayer Team",
    avatar: "/nexlayer-logo-icon-transparent.svg",
    readTime: "3 minutes read",
  },
  {
    id: 10,
    title: "How [Startup Name] Went from Local MVP to Paying Customers with Nexlayer",
    description: "A detailed case study of rapid scaling and customer acquisition through agent-native infrastructure.",
    author: "Nexlayer Team",
    avatar: "/nexlayer-logo-icon-transparent.svg",
    readTime: "6 minutes read",
  },
  {
    id: 11,
    title: "From MVP to Millions — How AI-Native Apps Go Global Overnight",
    description: "The infrastructure patterns that enable instant global scaling for AI-generated applications.",
    author: "Nexlayer Team",
    avatar: "/nexlayer-logo-icon-transparent.svg",
    readTime: "5 minutes read",
  },
  {
    id: 12,
    title: "Why Enterprises Will Rely on Agent-Native Infrastructure",
    description: "The fundamental shift happening in enterprise software development and deployment strategies.",
    author: "Nexlayer Team",
    avatar: "/nexlayer-logo-icon-transparent.svg",
    readTime: "7 minutes read",
  },
  {
    id: 13,
    title: "What's Next for Nexlayer — Upcoming Launches and Roadmap to 2030",
    description: "Our vision for the future of AI-native infrastructure and the features coming next.",
    author: "Nexlayer Team",
    avatar: "/nexlayer-logo-icon-transparent.svg",
    readTime: "8 minutes read",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#191919]">
      <Navigation />

      <main className="pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-16">
            <h1 className="text-4xl font-bold text-white mb-4">Blog</h1>
            <p className="text-gray-400 text-lg">Compiled notes from the team</p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Featured</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`}>
                  <article className="bg-black border border-gray-800 rounded-xl p-6 hover:bg-gray-800 transition-colors cursor-pointer h-full flex flex-col">
                    <h3 className="text-xl font-semibold text-white mb-3">{post.title}</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed flex-grow">{post.description}</p>

                    <div className="flex items-center gap-3 mt-auto">
                      <img src={post.avatar || "/placeholder.svg"} alt={post.author} className="w-8 h-8 rounded-full" />
                      <div className="flex flex-col">
                        <span className="text-sm text-gray-300">By {post.author}</span>
                        <span className="text-xs text-gray-500">{post.readTime}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-8">All posts</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {allPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`}>
                  <article className="bg-black border border-gray-800 rounded-xl p-6 hover:bg-gray-800 transition-colors cursor-pointer h-full flex flex-col">
                    <h3 className="text-lg font-semibold text-white mb-3">{post.title}</h3>
                    <p className="text-gray-400 mb-6 text-sm leading-relaxed flex-grow">{post.description}</p>

                    <div className="flex items-center gap-3 mt-auto">
                      <img src={post.avatar || "/placeholder.svg"} alt={post.author} className="w-8 h-8 rounded-full" />
                      <div className="flex flex-col">
                        <span className="text-sm text-gray-300">By {post.author}</span>
                        <span className="text-xs text-gray-500">{post.readTime}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
