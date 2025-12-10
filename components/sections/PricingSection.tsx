"use client";

import { motion } from "framer-motion";

export const PricingSection = () => {
  const pricingPlans = [
    {
      name: "LAUNCH",
      subtitle: "Try it right now",
      price: "Free",
      description: "Perfect for demos & testing",
      features: [
        "5 apps",
        "Apps sleep after 24hrs (wake instantly)",
        "Perfect for demos & testing",
      ],
      cta: "Start shipping",
      ctaLink:
        "https://outgoing-violin-38-staging.authkit.app/sign-up?client_id=client_01JR8JQE546PGK4K2DQCT1299E&redirect_uri=https%3A%2F%2Fapp.nexlayer.io%2Fcallback&authorization_session_id=01K70GFXHVBGK859QR0QEET9WF",
      popular: false,
    },
    {
      name: "SCALE",
      subtitle: "Built to support your first 10,000 users",
      price: "$49",
      period: "/mo",
      description: "Most founders stay here until $10K MRR",
      features: [
        "3 apps running 24/7",
        "3 custom domains",
        "Autoscales automatically",
        "Individual account",
      ],
      cta: "Start Scaling",
      ctaLink:
        "https://outgoing-violin-38-staging.authkit.app/sign-up?client_id=client_01JR8JQE546PGK4K2DQCT1299E&redirect_uri=https%3A%2F%2Fapp.nexlayer.io%2Fcallback&authorization_session_id=01K70GFXHVBGK859QR0QEET9WF",
      popular: true,
    },
    {
      name: "CONQUER",
      subtitle: "Custom pricing",
      description: "For companies with serious needs",
      features: [
        "Team collaboration",
        "Unlimited apps & domains",
        "GPU/TPU support",
        "Dedicated support",
      ],
      cta: "Talk to Sales",
      ctaLink: "mailto:sales@nexlayer.com",
      popular: false,
      enterprise: true,
    },
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-white mb-16 text-center"
        >
          Start free. Scale when you're ready.
        </motion.h2>

        {/* Zero Friction Entry Point */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-12 max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-pink-500/10 border border-cyan-400/30 rounded-xl p-6 sm:p-8 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Just want to test it?
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              Deploy one app anonymously. No signup. Live for 2 hours.
            </p>
            <button
              onClick={() =>
                window.open(
                  "https://app.nexlayer.io/dashboard?tab=mcp",
                  "_blank"
                )
              }
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-400 text-black font-semibold rounded-lg hover:bg-cyan-300 transition-all duration-300 shadow-lg shadow-cyan-400/30 hover:shadow-xl hover:shadow-[#ff10f0]/50"
            >
              Try it now
              <span className="text-lg">→</span>
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex flex-col justify-between relative bg-black border rounded-xl p-8 ${
                plan.popular
                  ? "ring-2 ring-cyan-400 border-gray-700"
                  : "border-gray-700"
              }`}
            >
              <div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-6">{plan.subtitle}</p>
                  {plan.price && (
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
                  )}
                  {plan.description && (
                    <p className="text-gray-300 text-sm italic">
                      {plan.description}
                    </p>
                  )}
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-start gap-3"
                    >
                      <span className="text-cyan-400 -mt-1 text-lg font-bold">
                        ✓
                      </span>
                      <span className="text-white text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? "bg-cyan-400 text-black hover:bg-cyan-300"
                    : "bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
                }`}
                onClick={() => window.open(plan.ctaLink, "_blank")}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

