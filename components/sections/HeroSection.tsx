"use client";

import { useState } from "react";
import React from "react";
import { Button } from "../ui/button";
import { TypingEffect } from "../shared/TypingEffect";
import { ComparisonSection } from "./ComparisonSection";

export const HeroSection = () => {
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleDeploy = () => {
    window.open(
      "https://jnsbqhb7fyt.typeform.com/to/a9DtuhOo?utm_source=website&utm_medium=hero_cta&utm_campaign=mcp_onboarding_q3_2025&utm_term=intent_ship_now&utm_content=home_v1",
      "_blank"
    );
  };

  return (
    <>
      <section className="px-4 py-20 bg-black">
        <div className="text-center mx-auto">

          <h1
            className="mt-12 sm:mt-20 text-5xl sm:text-[75px] text-white mb-6 leading-tight font-medium"
          >
            <span>The first </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold">
              agent-native cloud
            </span>
          </h1>

          <p className="text-xl text-gray-400 mb-16 font-normal max-w-3xl mx-auto">
            From github repo to production in minutes — no infra setup, no
            configs, no humans in the loop. 5,000+ apps live. The next is yours.
          </p>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-black rounded-2xl border-2 border-gray-600 p-1 shadow-lg">
              <div className="flex items-center gap-1 px-4 pt-3 pb-2"></div>

              <div className="relative">
                <TypingEffect show={true} />
                <input
                  type="text"
                  value={userInput}
                  onChange={handleInputChange}
                  className="absolute inset-0 w-full h-20 text-lg bg-black border-0 text-white px-6 font-medium flex items-center outline-none font-mono opacity-0 rounded-2xl"
                  placeholder=""
                />
              </div>

              <div className="flex items-center justify-between px-4 pb-4">
                <div className="flex items-center space-x-4">
                  {/* Removed Attach and Import buttons as per previous request */}
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    onClick={handleDeploy}
                    className="px-4 py-2 rounded-full flex items-center justify-center gap-2 transition-all duration-300 text-white shadow-md hover:shadow-lg"
                    style={{ backgroundColor: "#28B8CD" }}
                  >
                    <span className="text-sm text-black font-bold">
                      Get Beta Access
                    </span>
                  </Button>
                </div>
              </div>

              <div className="flex justify-center px-4 pb-2">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-800/50 border border-gray-700">
                  <span className="text-xs text-gray-300 font-medium">
                    Nexlayer is in early beta. Start shipping → Give feedback →
                    Help shape the future of the agent-native cloud.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Proof Section */}
          <div className="max-w-4xl mx-auto mb-6 sm:mb-20 text-center">
            <p className="text-gray-400 text-lg mb-8">
              Built by a team who've scaled products for millions at
            </p>
            <div className="flex items-center justify-center space-x-2 sm:space-x-12 opacity-60">
              {/* Google Logo */}
              <div className="flex items-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BbwvJ2gUosbcGWO7KGm2kRZnB08PIw.png"
                  alt="Google"
                  className="h-10 w-auto"
                />
              </div>

              {/* IBM Logo */}
              <div className="flex items-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-m7c19LlD4LJefDOOuJLMWxWqkcPmAL.png"
                  alt="IBM"
                  className="h-8 w-auto"
                />
              </div>

              {/* MIT Logo */}
              <div className="flex items-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hSE4jSsjQGcWW0cbgDHaEKmtEgXK1l.png"
                  alt="MIT"
                  className="h-8 w-auto"
                />
              </div>

              {/* ADP Logo */}
              <div className="flex items-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-N428ig9VCIaw0G5IipFov5uqk6edkk.png"
                  alt="ADP"
                  className="h-8 w-auto"
                />
              </div>

              {/* Experian Logo */}
              <div className="flex items-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BL0T5WZyd4LqMhTnBuGLoqtd6h6j8z.png"
                  alt="Experian"
                  className="h-8 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ComparisonSection />
    </>
  );
};
