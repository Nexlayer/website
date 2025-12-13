"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-black">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-4 sm:mb-6"
          style={{ fontFamily: '"Anthropic Serif", Georgia, sans-serif' }}
        >
          Ready to ship?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto px-4"
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
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-400 to-teal-500 text-black font-semibold rounded-lg hover:from-cyan-300 hover:to-teal-400 transition-all duration-300 shadow-lg shadow-cyan-400/30 hover:shadow-xl hover:shadow-cyan-400/50 hover:scale-105 min-h-[44px] w-full sm:w-auto"
          >
            <Zap className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm sm:text-base">Deploy Now - Free</span>
          </a>

          {/* Secondary CTA Button */}
          <a
            href="https://cal.com/nexlayer/30min?overlayCalendar=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-black border border-gray-700 text-white font-semibold rounded-lg hover:border-gray-600 hover:bg-gray-900 transition-all duration-300 min-h-[44px] w-full sm:w-auto"
          >
            <span className="text-sm sm:text-base">Book demo</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

