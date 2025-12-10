"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
        {
    question: "What happens when my free app goes to sleep?",
    answer:
      "It wakes up instantly when someone visits. No data lost. Your app is just paused, not deleted.",
        },
        {
    question: "Can I use my own domain?",
    answer:
      "Yes. On the $49 plan you get 3 custom domains. Enterprise plans include unlimited domains.",
  },
        {
    question: "What if I need to collaborate with my team?",
    answer:
      "Right now everyone gets their own account. Team features (shared projects, permissions) are on Enterprise. Join our waitlist for team features coming soon.",
        },
        {
    question: "Is this actually production-ready?",
    answer:
      "Yes. Same infrastructure that handles millions of users. Auto-scaling, monitoring, security — all handled. We run production workloads for companies you've heard of.",
        },
        {
    question: "What stacks can I deploy?",
    answer:
      "Any stack your agent can build — frontend, backend, APIs, databases, vector stores, or workers.\n\n1. If it runs in a container, it runs on Nexlayer.\n\n2. If it's an external API service, we wire it up automatically.",
        },
        {
    question: "How is Nexlayer different from Lovable, Vercel, or AWS?",
    answer:
      "Lovable builds your MVP. Vercel hosts frontends. AWS makes you become DevOps. Nexlayer is the first cloud your AI coding agent can ship to enterprise-grade production scale— any stack, any service, in one step.",
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-black px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-white mb-16 text-center"
        >
          Questions?
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-black border border-gray-800 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-900 transition-colors"
              >
                <span className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-300 leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
