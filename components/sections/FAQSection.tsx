"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"

export const FAQSection = () => {
  const faqCategories = [
    {
      id: "getting-started",
      title: "Getting Started",
      icon: "🚀",
      questions: [
        {
          question: "What happens after my 2hr and 30min free deploy ends?",
          answer: "Your app automatically shuts down. Just redeploy if you want to keep testing, or upgrade to Scale for persistent, production-grade execution."
        },
        {
          question: "How do I deploy?",
          answer: "Deploy directly from AI tools via MCP (Cursor, Claude Code, Windsurf, etc.) — or from your existing pipelines like GitHub Actions, custom CI/CD, or even curl. Nexlayer integrates with your workflow so execution is seamless."
        }
      ]
    },
    {
      id: "pricing-value",
      title: "Pricing & Value",
      icon: "$",
      questions: [
        {
          question: "Why $49/mo — isn't that cheap for a production cloud?",
          answer: "Yes — because Nexlayer is optimized for AI-driven software development. It's built on the same powerful, secure, and scalable orchestration technology trusted by Google, Apple, Spotify, Unity, and Cursor — but delivered without the infra complexity of AWS, GCP, or Azure, and without the cost of hiring a team of DevOps engineers or Kubernetes experts. Nexlayer gives that same big-tech execution power to AI builders and startup founders everywhere, regardless of geography."
        },
        {
          question: "What does 'beta' mean for me as a user?",
          answer: "During beta, you get generous execution limits and direct support as we refine Nexlayer with developer feedback. Pricing and features will only get stronger after launch — so early adopters lock in the best value."
        }
      ]
    },
    {
      id: "tech-features",
      title: "Tech & Features",
      icon: "⚙️",
      questions: [
        {
          question: "Is Nexlayer just hosting?",
          answer: "No. Nexlayer is an intelligent execution layer. Hosting platforms keep your code online. Nexlayer connects directly with AI coding tools and CI/CD, normalizes any stack, and executes it instantly in production — without cold starts, lock-in, or infra overhead."
        },
        {
          question: "How is Nexlayer different from Vercel, Render, or Railway?",
          answer: "Nexlayer isn't limited to frontends or serverless functions. There are no cold starts, no lock-in, and no framework restrictions. If it builds in a Dockerfile, Nexlayer executes it: APIs, workers, schedulers, WebSockets, or full-stack apps in any language. Or skip containers and connect directly via API strings to services like Supabase or Neon."
        },
        {
          question: "Do I get custom domains?",
          answer: "Yes. Bring your own domains, powered by Nexlayer's native DNS with instant global propagation — no external config required."
        },
        {
          question: "How do I manage environment variables and secrets?",
          answer: "Nexlayer doesn't yet provide a built-in secret manager. We recommend securing secrets through your repo or CI/CD provider (e.g., GitHub Secrets, 1Password, Doppler, or Vault). Same best practice used by platforms like Lovable. Our team can guide you if needed."
        }
      ]
    },
    {
      id: "security-scale",
      title: "Security & Scale",
      icon: "🛡️",
      questions: [
        {
          question: "Where do my apps run?",
          answer: "By default, your applications run on Nexlayer's AI-native Cloud Platform in the US East region. With Nexlayer's native DNS and edge routing, your apps are globally accessible with low-latency DNS resolution. Multi-region deployments and regional selection are available for customers on the Conquer (Enterprise)."
        },
        {
          question: "What about security?",
          answer: "Every app executes in isolated containers with production-grade networking. Enterprise customers can unlock advanced security, compliance, and dedicated resources."
        },
        {
          question: "What if my startup grows fast?",
          answer: "Each application executes independently and scales automatically. For custom AI workloads including GPUs/TPUs needs, multi-region scale, or compliance, you can upgrade to Conquer (Enterprise) and talk to one of our senior Nexlayer Engineers."
        }
      ]
    }
  ]

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-400 mb-2">Questions? We got answers.</p>
          <p className="text-cyan-400">
            Don't see your answer?{" "}
            <a 
              href="https://cal.com/nexlayer/30min" 
              className="underline hover:text-cyan-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Talk to Nexlayer Engineer
            </a>
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqCategories.flatMap((category) => 
              category.questions.map((faq, index) => (
                <AccordionItem 
                  key={`${category.id}-${index}`} 
                  value={`${category.id}-${index}`} 
                  className="border border-gray-700 rounded-lg px-6"
                  style={{ backgroundColor: '#1E1E1E' }}
                >
                  <AccordionTrigger className="text-left text-white hover:text-cyan-400 py-6">
                    <div className="flex items-center gap-3">
                      <span className="text-cyan-400 text-lg">{'>'}</span>
                      {faq.question}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pb-6 pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))
            )}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
