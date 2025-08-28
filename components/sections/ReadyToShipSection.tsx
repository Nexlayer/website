"use client"

import { Button } from "../ui/button"

export const ReadyToShipSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-cyan-400/10 to-blue-500/10">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Start Shipping?
        </h2>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Join thousands of developers who are already deploying production applications with Nexlayer. 
          Get started in minutes, not days.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => window.open("https://jnsbqhb7fyt.typeform.com/to/a9DtuhOo?utm_source=website&utm_medium=ready_to_ship_cta&utm_campaign=mcp_onboarding_q3_2025&utm_term=intent_ship_now&utm_content=home_v1", "_blank")}
            className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold px-8 py-4 rounded-full hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 text-lg"
          >
            🚀 Join the Beta
          </Button>
          
          <Button
            onClick={() => window.open("https://docs.nexlayer.io", "_blank")}
            className="border-2 border-gray-600 text-white font-bold px-8 py-4 rounded-full hover:border-gray-500 transition-all duration-300 text-lg"
          >
            📚 Read the Docs
          </Button>
        </div>

        <div className="mt-8 text-gray-400 text-sm">
          <p>No credit card required • Free tier available • Deploy in minutes</p>
        </div>
      </div>
    </section>
  )
}
