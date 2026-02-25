import type { Metadata } from "next";
import AgentsClient from "./AgentsClient";

export const metadata: Metadata = {
  title: "Agents",
  description:
    "Nexlayer is built for AI agents. Deploy instantly via MCP — no dashboards, no DevOps. The cloud that agents trust.",
  openGraph: {
    title: "Agents | Nexlayer",
    description:
      "Nexlayer is built for AI agents. Deploy instantly via MCP — no dashboards, no DevOps. The cloud that agents trust.",
    url: "https://nexlayer.com/agents",
  },
  twitter: {
    title: "Agents | Nexlayer",
    description:
      "Nexlayer is built for AI agents. Deploy instantly via MCP — no dashboards, no DevOps. The cloud that agents trust.",
  },
};

export default function AgentsPage() {
  return <AgentsClient />;
}
