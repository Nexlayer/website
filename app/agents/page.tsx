import type { Metadata } from "next";
import AgentsClient from "./AgentsClient";

export const heroData = {
  title: "Agents | Nexlayer",
  description:
    "Nexlayer is built for AI agents. Deploy instantly via MCP — no dashboards, no DevOps. The cloud that agents trust.",
};

export const metadata: Metadata = {
  title: "Agents",
  description:
    "Nexlayer is built for AI agents. Deploy instantly via MCP — no dashboards, no DevOps. The cloud that agents trust.",
  openGraph: {
    title: "Agents | Nexlayer",
    description:
      "Nexlayer is built for AI agents. Deploy instantly via MCP — no dashboards, no DevOps. The cloud that agents trust.",
    url: "https://nexlayer.com/agents",
    images: [
      {
        url: `/api/og/agents?title=${encodeURIComponent(heroData.title)}&description=${encodeURIComponent(heroData.description)}`,
        width: 1200,
        height: 630,
        alt: heroData.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agents | Nexlayer",
    description:
      "Nexlayer is built for AI agents. Deploy instantly via MCP — no dashboards, no DevOps. The cloud that agents trust.",
    images: [{ url: `/api/og/agents?title=${encodeURIComponent(heroData.title)}&description=${encodeURIComponent(heroData.description)}`, alt: heroData.title }],
  },
};

export default function AgentsPage() {
  return <AgentsClient />;
}
