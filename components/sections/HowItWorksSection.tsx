"use client";

import { useState } from "react";
import { MCPSetupComponent } from "../MCPSetupComponent";

export const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Connect your coding agent to Nexlayer",
      description:
        "Generate a token and link Cursor, Claude Code, Windsurf or any AI coding agent — one line, and you're connected.",
      videoSrc: null, // Uses MCPSetupComponent instead
      component: <MCPSetupComponent />,
    },
    {
      id: 2,
      title: "Deploy with one prompt.",
      description: 'Type: "Deploy my app https://github.com/repo to nexlayer".',
      videoSrc:
        "/deploy-production.mp4",
    },
    {
      id: 3,
      title: "Share your live URL with the world.",
      description:
        "Your app is now live and auto-scaling for free. Claim it, extend it or reserve to keep it running.",
      videoSrc:
        "/from-local-to-global-app.mp4",
    },
    {
      id: 4,
      title: "Claim it, extend it and reserve it.",
      description:
        "Claim it to keep it live, share with friends, or reserve it to scale it globally in one click.",
      videoSrc:
        "/claim-extend.mp4",
    },
  ];

  const activeStepData = steps.find((step) => step.id === activeStep);

  return (
    <section className="py-16 md:py-24 lg:py-28" style={{ backgroundColor: "#191919" }}>
      <div className="max-w-[1250px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            See How It Works
          </h2>
          <p className="text-xl text-gray-400">
            From AI-generated code to a live production-grade app in 5 minutes.
          </p>
        </div>

        <div className="flex max-lg:flex-col max-[385px]:gap-44 max-[410px]:gap-36 max-[475px]:gap-28 gap-12 lg:gap-6 items-start">
          {/* Steps */}
          <div className="space-y-4 w-full lg:w-[40%] h-[600px] flex flex-col justify-between">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`flex-1 p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                  activeStep === step.id
                    ? "border-cyan-400 bg-black"
                    : "border-gray-700 bg-black hover:border-gray-600"
                }`}
                onClick={() => setActiveStep(step.id)}
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                      activeStep === step.id
                        ? "bg-cyan-400 text-black"
                        : "bg-gray-600 text-white"
                    }`}
                  >
                    {step.id}
                  </div>
                  <h3
                    className={`text-lg font-bold ${
                      activeStep === step.id ? "text-cyan-400" : "text-white"
                    }`}
                  >
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Video Demo */}
          <div className="relative w-full lg:w-[60%]">
            <div className="bg-black md:min-h-[396px] border border-gray-700 rounded-2xl overflow-hidden group">
              {activeStepData?.component ? (
                <div className="w-full h-full p-6">
                  {activeStepData.component}
                </div>
              ) : activeStepData?.videoSrc ? (
                <>
                  <video
                    key={activeStepData.videoSrc} 
                    className="w-full h-full object-contain"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload ="auto"
                  >
                    <source src={activeStepData.videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  <button
                    onClick={(e) => {
                      const video = e.currentTarget
                        .previousElementSibling as HTMLVideoElement;
                      if (!document.fullscreenElement) {
                        video.requestFullscreen().catch((err) => {
                          console.error(
                            "Error attempting to enable fullscreen:",
                            err
                          );
                        });
                      } else {
                        document.exitFullscreen();
                      }
                    }}
                    className="absolute bottom-4 right-4 bg-black/70 hover:bg-black/90 text-white px-3 py-2 rounded-lg flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm font-medium"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                      />
                    </svg>
                    Fullscreen
                  </button>
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Select a step to view content
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() =>
              window.open(
                "https://jnsbqhb7fyt.typeform.com/to/a9DtuhOo?utm_source=website&utm_medium=how_it_works_cta&utm_campaign=mcp_onboarding_q3_2025&utm_term=intent_ship_now&utm_content=home_v1",
                "_blank"
              )
            }
            className="bg-cyan-400 text-black font-bold px-8 py-4 rounded-lg hover:bg-cyan-500 transition-all duration-300"
          >
            Try the beta!
          </button>
          <p className="text-gray-400 text-sm mt-3">
            Free to try in beta — deploy without signup. Claim it later if you
            want.
          </p>
        </div>
      </div>
    </section>
  );
};
