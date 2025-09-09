"use client";

// import { title } from "process"; // Not used, can be removed
import { useState } from "react";

type ConfigType = { title: string; code?: string; steps?: string[] };

export const MCPSetupComponent = () => {
  const [activeTab, setActiveTab] = useState("cursor");

  const configurations: Record<string, ConfigType> = {
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
      code: `claude mcp add nexlayer-mcp --transport sse https://mcp.nexlayer.ai/api/mcp --header "Authorization: Bearer <YOUR_NEXLAYER_TOKEN>"`,
    },
    vscode: {
      title: "VS Code",
      steps: [
        "Open the Command Palette in VS Code 2 (Ctrl+Shift+P on Windows/Linux, Cmd+Shift+P on macOS)",
        'Search and select the "MCP: Add Server" command',
        "Select HTTP (HTTP or Server-Sent Events)",
        "Enter 'https://mcp.nexlayer.ai/api/mcp' for the Server URL",
        "Enter 'nexlayer-mcp' for the Server ID",
        "In the nexlayer-mcp object, add the following lines of code:",
        '',
        "Save and begin prompting with Github Copilot!",
      ],
    },
    other: {
      title: "Other AI coding agents",
      code: `https://mcp.nexlayer.ai/api/mcp`,
    },
  };

  // Removed misplaced return and code block. The main return is below.

  // Helper to safely get code string
  const getActiveCode = () => {
    const config = configurations[activeTab as keyof typeof configurations];
    return config && config.code ? config.code : '';
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(getActiveCode());
  };

  return (
    <div className="group h-full transition-all duration-300 cursor-pointer overflow-hidden">
      {/* Header */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-white mb-4">
          Setup with your AI agent assistant
        </h3>
        <p className="text-gray-400">
          Nexlayer MCP configuration for different AI code editors
        </p>
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <div className="flex space-x-1 bg-black border border-gray-600 rounded-lg p-1 overflow-x-auto">
          <button
            onClick={() => setActiveTab("cursor")}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all flex-shrink-0 ${
              activeTab === "cursor"
                ? "bg-gray-700 text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <img
              src="/icons/cursor-dark.svg"
              alt="Cursor"
              className="w-4 h-4"
            />
            <span>Cursor</span>
          </button>
          <button
            onClick={() => setActiveTab("claude")}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all flex-shrink-0 ${
              activeTab === "claude"
                ? "bg-gray-700 text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <img
              src="/icons/claude-ai-icon.svg"
              alt="Claude"
              className="w-4 h-4"
            />
            <span>Claude</span>
          </button>
          <button
            onClick={() => setActiveTab("vscode")}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all flex-shrink-0 ${
              activeTab === "vscode"
                ? "bg-gray-700 text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <img src="/icons/vs-code.svg" alt="VS Code" className="w-4 h-4" />
            <span>VS Code</span>
          </button>
          <button
            onClick={() => setActiveTab("other")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all flex-shrink-0 ${
              activeTab === "other"
                ? "bg-gray-700 text-white"
                : "text-gray-400 hover:text-white"
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
            <button
              onClick={copyToClipboard}
              className="text-gray-400 hover:text-white transition-colors"
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
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </button>
          </div>

          {/* Code content */}
          <div className="p-4 flex-1 overflow-auto">
            {activeTab === "vscode" ? (
              <div className="space-y-2">
                <div className="text-gray-300 font-semibold mb-2">
                  Nexlayer MCP Setup Instructions for VS Code:
                </div>
                <ol className="space-y-1">
                  {configurations.vscode.steps?.map((step, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-6 min-w-[1.5rem] text-right pr-2 font-bold text-gray-300 select-none">
                        {idx + 1}.
                      </span>
                      <span className="flex-1 text-gray-300 whitespace-pre-line">
                        {step}
                        {idx === 6 && (
                          <div style={{ background: '#18181b', color: '#fff', borderRadius: '8px', padding: '12px', fontFamily: 'monospace', fontSize: '13px', margin: '10px 0 0 0', overflowX: 'auto', border: '1px solid #333' }}>
                            <pre style={{ margin: 0 }}>
                              {`"nexlayer-mcp": {
  "url": "https://mcp.nexlayer.ai/api/mcp",
  "type": "http",
  "headers": {
    "Authorization": "Bearer <NEXLAYER_MCP_TOKEN>"
  }
}`}
                            </pre>
                          </div>
                        )}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            ) : (
              <pre className="text-sm text-gray-300 font-mono leading-relaxed whitespace-pre-wrap break-all">
                <code>
                  {getActiveCode()}
                </code>
              </pre>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
