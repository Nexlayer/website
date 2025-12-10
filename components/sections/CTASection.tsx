"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
        >
          Ready to ship?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
        >
          Connect your coding agent and deploy your first app in 90 seconds. Free forever to start.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary CTA Button */}
          <a
            href="https://app.nexlayer.io/dashboard?tab=mcp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-400 to-teal-500 text-white font-semibold rounded-lg hover:from-cyan-300 hover:to-teal-400 hover:text-black transition-all duration-300 shadow-lg shadow-cyan-400/30 hover:shadow-xl hover:shadow-cyan-400/50 hover:scale-105"
          >
            <Zap className="w-5 h-5" />
            Deploy Now - Free
          </a>

          {/* Secondary CTA Button */}
          <a
            href="https://cal.com/nexlayer/30min?overlayCalendar=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-black border border-gray-700 text-white font-semibold rounded-lg hover:border-gray-600 hover:bg-gray-900 transition-all duration-300"
          >
            Book demo
          </a>
        </motion.div>
      </div>
    </section>
  );
};

