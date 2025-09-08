"use client";

export const PricingAndFAQSection = () => {
  const pricingPlans = [
    {
      name: "Launch Plan",
      subtitle: "Start building instantly",
      price: "Free",
      description: "Perfect for production demos and mvp testing",
      features: [
        "150 minutes free production-ready cloud runtime per deployment",
        "Temporary project URLs",
        "Deploy directly from AI tools (Cursor, Claude Code, Windsurf)",
        "Access to Nexlayer API",
        "Community support",
      ],
      cta: "Start Free",
      ctaLink:
        "https://outgoing-violin-38-staging.authkit.app/sign-up?redirect_uri=https%3A%2F%2Fapp.nexlayer.io%2Fcallback&authorization_session_id=01K4JCGBPZSQKJ6J8XXGZ9QY4Z",
      popular: false,
    },
    {
      name: "Scale Plan",
      subtitle:
        "For AI builders & startup founders launching products that scale",
      price: "$49",
      period: "/mo",
      description: "Everything you need to scale your AI products",
      features: [
        "Enterprise-grade, container-orchestrated infrastructure",
        "Autoscaling to handle any traffic spike",
        "Unlimited production projects — no limits during beta",
        "1 custom domain per production app",
        "Real-time logs to monitor and debug instantly",
        "Premium support via Email, Slack, Google Meets",
      ],
      cta: "Start scaling",
      ctaLink:
        "https://outgoing-violin-38-staging.authkit.app/sign-up?redirect_uri=https%3A%2F%2Fapp.nexlayer.io%2Fcallback&authorization_session_id=01K4JCGBPZSQKJ6J8XXGZ9QY4Z",
      popular: true,
    },
    {
      name: "Conquer plan",
      subtitle: "Enterprise custom pricing",
      description:
        "For enterprises running mission-critical workloads at global scale.",
      features: [
        "Advanced security & compliance",
        "GPU/TPU support",
        "Multi-region unique deployment needs",
        "Dedicated infrastructure",
        "24/7 enterprise support",
        "Designated Technical Account Manager",
        "Custom SLAs",
      ],
      cta: "Contact Sales",
      ctaLink:
        "https://cal.com/nexlayer/nexlayer-enterprise-custom-plan?overlayCalendar=true",
      popular: false,
      enterprise: true,
    },
  ];

  return (
    <section className="max-sm:pb-20 sm:py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Pricing Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Plans & Billing
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Nexlayer offers flexible plans to meet your needs. Choose the plan
              that works best for you and your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`flex flex-col justify-between relative bg-black border border-gray-700 rounded-xl p-8 ${
                  plan.popular ? "ring-2 ring-cyan-400" : ""
                }`}
              >
                <div>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-white text-black px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-6">
                      {plan.subtitle}
                    </p>
                    <div className="mb-6">
                      <span className="text-5xl font-bold text-white">
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-gray-300 text-lg ml-1">
                          {plan.period}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-300 text-sm">{plan.description}</p>
                  </div>

                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-3"
                      >
                        <span className="text-green-400 -mt-1 text-lg font-bold">
                          ✓
                        </span>
                        <span className="text-white text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  className="w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
                  onClick={() => window.open(plan.ctaLink, "_blank")}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* AI Startup Program Section */}
        <div className="mt-16">
          <div className="bg-gray-800/50 border border-gray-600 rounded-lg p-6">
            <div className="sm:flex items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-3">
                  AI Startup Program
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Only 25 founders accepted in 2025 — just 13 spots left. Go
                  from MVP → Cloud in 24h, free. Skip Kubernetes. Skip DevOps
                  hires. Be live & investor-ready today. Includes 12 months
                  Fractional CTO support + $300,000+ value free.
                </p>
              </div>
              <div className="max-sm:mt-5 flex-shrink-0">
                <a
                  href="https://jnsbqhb7fyt.typeform.com/startupprogram?utm_source=nexlayer-website&utm_medium=web&utm_campaign=startup-program&utm_term=nexlayer-startup-program&utm_content=website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  👉 Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
