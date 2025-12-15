"use client";

import { HowItWorksDemo } from "./how-it-works/HowItWorksDemo";

export const HowItWorksSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-28 lg:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Headline */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-white mb-3 sm:mb-4 leading-tight" style={{ fontFamily: '"Anthropic Serif", Georgia, sans-serif' }}>
            How it works
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Your coding agent connects directly to Nexlayer.
          </p>
        </div>

        {/* Interactive Demo */}
        <HowItWorksDemo />
      </div>
    </section>
  );
};
