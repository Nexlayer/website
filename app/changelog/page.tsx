import type { Metadata } from "next";
import { getChangelogEntries } from "@/lib/changelog";
import { ChangelogClient } from "./ChangelogClient";

export const changelogHeroData = {
  title: "Changelog",
  description:
    "Nexlayer is an agent-native cloud platform. These updates improve how apps are deployed, updated, and run — whether triggered by AI coding agent or custom workflows. Works with Cursor, Claude Code, and VS Code with Copilot.",
};

export const metadata: Metadata = {
  title: "Changelog",
  description:
    "See what's new at Nexlayer — product updates, improvements, and new features shipped fast.",
  openGraph: {
    title: "Changelog | Nexlayer",
    description:
      "See what's new at Nexlayer — product updates, improvements, and new features shipped fast.",
    url: "https://nexlayer.com/changelog",
    images: [
      {
        url: `/api/og/changelog?title=${encodeURIComponent(changelogHeroData.title)}&description=${encodeURIComponent(changelogHeroData.description)}`,
        width: 1200,
        height: 630,
        alt: changelogHeroData.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Changelog | Nexlayer",
    description:
      "See what's new at Nexlayer — product updates, improvements, and new features shipped fast.",
    images: [{ url: `/api/og/changelog?title=${encodeURIComponent(changelogHeroData.title)}&description=${encodeURIComponent(changelogHeroData.description)}`, alt: changelogHeroData.title }],
  },
};

export default function ChangelogPage() {
  const entries = getChangelogEntries();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <ChangelogClient heroData={changelogHeroData} entries={entries} />
      </div>
    </div>
  );
}

