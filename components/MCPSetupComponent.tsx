"use client"

import { useState } from "react"

export const MCPSetupComponent = () => {
  const [activeTab, setActiveTab] = useState("cursor")

  const configurations = {
    cursor: {
      title: "Cursor — .cursor/mcp.json",
      code: `{
  "mcpServers": {
    "nexlayer_mcp": {
      "url": "https://mcp.nexlayer.ai/api/mcp",
      "headers": {
        "Authorization": "Bearer <NEXLAYER_MCP_TOKEN>"
      }
    }
  }
}`,
    },
    claude: {
      title: "Claude — Command Line",
      code: `Claude mcp add nexlayer-mcp https://mcp.nexlayer.ai/api/mcp -e BEARER_TOKEN=<YOUR_NEXLAYER_TOKEN>`,
    },
    other: {
      title: "Other AI coding agents",
      code: `https://mcp.nexlayer.ai/api/mcp`,
    },
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(configurations[activeTab as keyof typeof configurations].code)
  }

  return (
    <div className="group rounded-xl p-6 border border-[#2a2a2a] h-full bg-black hover:bg-black transition-all duration-300 cursor-pointer overflow-hidden">
      {/* Header */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-white mb-4">Setup with your AI agent assistant</h3>
        <p className="text-gray-400">Nexlayer MCP configuration for different AI code editors</p>
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <div className="flex space-x-1 bg-black border border-gray-600 rounded-lg p-1">
          <button
            onClick={() => setActiveTab("cursor")}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
              activeTab === "cursor" ? "bg-gray-700 text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            <img src="/icons/cursor-dark.svg" alt="Cursor" className="w-4 h-4" />
            <span>Cursor</span>
          </button>
          <button
            onClick={() => setActiveTab("claude")}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
              activeTab === "claude" ? "bg-gray-700 text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            <img src="/icons/claude-ai-icon.svg" alt="Claude" className="w-4 h-4" />
            <span>Claude</span>
          </button>
          <button
            onClick={() => setActiveTab("other")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              activeTab === "other" ? "bg-gray-700 text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            Other
          </button>
        </div>
      </div>

      {/* Code Block */}
      <div className="flex-1 flex flex-col">
        <div className="bg-[#191919] rounded-lg border border-gray-600 overflow-hidden flex-1 flex flex-col">
          {/* Code header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-600">
            <span className="text-gray-300 text-sm font-mono">
              {configurations[activeTab as keyof typeof configurations].title}
            </span>
            <button onClick={copyToClipboard} className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </button>
          </div>

          {/* Code content */}
          <div className="p-4 flex-1 overflow-auto">
            <pre className="text-sm text-gray-300 font-mono leading-relaxed whitespace-pre-wrap break-all">
              <code>{configurations[activeTab as keyof typeof configurations].code}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}
