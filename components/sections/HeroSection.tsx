"use client";

import { useState } from "react";
import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { TypingEffect } from "../shared/TypingEffect";
import { ComparisonSection } from "./ComparisonSection";
import { Cursor } from "../logos/Cursor";
import { ClaudeAI } from "../logos/ClaudeAI";
import { VisualStudioCode } from "../logos/VisualStudioCode";
import { GitHubCopilot } from "../logos/GitHubCopilot";

export const HeroSection = () => {
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  return (
    <>
      <section className="px-4 py-20 bg-black">
        <div className="text-center mx-auto">
          <h1 className="mt-12 sm:mt-20 text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-white mb-8 leading-[0.85] font-bold max-w-6xl mx-auto px-4 tracking-tight text-center whitespace-nowrap">
          From AI code to live app.
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12 sm:mb-16 lg:mb-20 font-light max-w-3xl mx-auto px-4 leading-relaxed">
            The easiest way to deploy AI-built products in minutes.
            <br />
            Any language. Any framework. Any stack.
          </p>

          {/* Main Input Area */}
          <div className="max-w-4xl mx-auto mb-8 sm:mb-12 px-4">
            <div className="bg-black rounded-xl sm:rounded-2xl border-2 border-gray-600 p-1 shadow-lg">
              {/* Logo Tabs */}
              <div className="flex items-center justify-center gap-4 px-3 sm:px-4 pt-3 pb-2">
                <div className="flex items-center gap-3">
                  <Link href="https://outgoing-violin-38-staging.authkit.app/?client_id=client_01JR8JQE546PGK4K2DQCT1299E&redirect_uri=https%3A%2F%2Fapp.nexlayer.io%2Fcallback&authorization_session_id=01K77EBJCJN5AKYHP2FDZSXKQ3">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-800/50 border border-gray-700 hover:bg-gray-700/50 cursor-pointer transition-colors">
                      <Cursor className="w-4 h-4 text-white" />
                      <span className="text-xs text-gray-300 font-medium">Cursor</span>
                    </div>
                  </Link>
                  <Link href="https://outgoing-violin-38-staging.authkit.app/?client_id=client_01JR8JQE546PGK4K2DQCT1299E&redirect_uri=https%3A%2F%2Fapp.nexlayer.io%2Fcallback&authorization_session_id=01K77EBJCJN5AKYHP2FDZSXKQ3">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-800/50 border border-gray-700 hover:bg-gray-700/50 cursor-pointer transition-colors">
                      <ClaudeAI className="w-4 h-4" />
                      <span className="text-xs text-gray-300 font-medium">Claude</span>
                    </div>
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <Link href="https://outgoing-violin-38-staging.authkit.app/?client_id=client_01JR8JQE546PGK4K2DQCT1299E&redirect_uri=https%3A%2F%2Fapp.nexlayer.io%2Fcallback&authorization_session_id=01K77EBJCJN5AKYHP2FDZSXKQ3">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-800/50 border border-gray-700 hover:bg-gray-700/50 cursor-pointer transition-colors">
                      <VisualStudioCode className="w-4 h-4" />
                      <span className="text-xs text-gray-300 font-medium">VS Code</span>
                    </div>
                  </Link>
                  <Link href="https://outgoing-violin-38-staging.authkit.app/?client_id=client_01JR8JQE546PGK4K2DQCT1299E&redirect_uri=https%3A%2F%2Fapp.nexlayer.io%2Fcallback&authorization_session_id=01K77EBJCJN5AKYHP2FDZSXKQ3">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-800/50 border border-gray-700 hover:bg-gray-700/50 cursor-pointer transition-colors">
                      <GitHubCopilot className="w-4 h-4" />
                      <span className="text-xs text-gray-300 font-medium">Copilot</span>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="relative">
                <TypingEffect show={true} />
                <input
                  type="text"
                  value={userInput}
                  onChange={handleInputChange}
                  className="absolute inset-0 w-full h-20 text-lg bg-black border-0 text-white px-6 font-medium flex items-center outline-none font-mono opacity-0 rounded-2xl text-wrap"
                  placeholder=""
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between px-3 sm:px-4 pb-4 gap-3 sm:gap-0">
                <div className="flex items-center space-x-4">
                  {/* Removed Attach and Import buttons as per previous request */}
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <Link href="https://docs.nexlayer.com/">
                    <Button
                      className="w-full sm:w-auto px-4 py-2 rounded-full flex items-center justify-center gap-2 transition-all duration-300 text-white shadow-md hover:shadow-lg bg-gray-700 hover:bg-gray-600"
                    >
                      <span className="text-sm text-white font-bold">
                        View documentation
                      </span>
                    </Button>
                  </Link>
                  <Link href="https://outgoing-violin-38-staging.authkit.app/sign-up?client_id=client_01JR8JQE546PGK4K2DQCT1299E&redirect_uri=https%3A%2F%2Fapp.nexlayer.io%2Fcallback&authorization_session_id=01K70GFXHVBGK859QR0QEET9WF">
                    <Button
                      className="w-full sm:w-auto px-4 py-2 rounded-full flex items-center justify-center gap-2 transition-all duration-300 text-white shadow-md hover:shadow-lg"
                      style={{ backgroundColor: "#28B8CD" }}
                    >
                      <span className="text-sm text-black font-bold">
                        Get started
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>

            </div>
          </div>

          {/* Social Proof Section */}
          <div className="max-w-4xl mx-auto mb-4 sm:mb-16 lg:mb-20 text-center px-4">
            <p className="text-gray-400 text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 font-medium tracking-wide">
              Built by a team who've scaled products for millions at
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-12 opacity-60">
              {/* Google Logo */}
              <div className="flex items-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BbwvJ2gUosbcGWO7KGm2kRZnB08PIw.png"
                  alt="Google"
                  className="h-8 sm:h-10 w-auto"
                />
              </div>

              {/* IBM Logo */}
              <div className="flex items-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-m7c19LlD4LJefDOOuJLMWxWqkcPmAL.png"
                  alt="IBM"
                  className="h-6 sm:h-8 w-auto"
                />
              </div>

              {/* MIT Logo */}
              <div className="flex items-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hSE4jSsjQGcWW0cbgDHaEKmtEgXK1l.png"
                  alt="MIT"
                  className="h-6 sm:h-8 w-auto"
                />
              </div>

              {/* ADP Logo */}
              <div className="flex items-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-N428ig9VCIaw0G5IipFov5uqk6edkk.png"
                  alt="ADP"
                  className="h-6 sm:h-8 w-auto"
                />
              </div>

              {/* Experian Logo */}
              <div className="flex items-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BL0T5WZyd4LqMhTnBuGLoqtd6h6j8z.png"
                  alt="Experian"
                  className="h-6 sm:h-8 w-auto"
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
