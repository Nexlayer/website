import type { Metadata } from "next";
import { getChangelogEntries } from "@/lib/changelog";
import { ChangelogClient } from "./ChangelogClient";

export const metadata: Metadata = {
  title: "Changelog",
  description:
    "See what's new at Nexlayer — product updates, improvements, and new features shipped fast.",
  openGraph: {
    title: "Changelog | Nexlayer",
    description:
      "See what's new at Nexlayer — product updates, improvements, and new features shipped fast.",
    url: "https://nexlayer.com/changelog",
  },
  twitter: {
    title: "Changelog | Nexlayer",
    description:
      "See what's new at Nexlayer — product updates, improvements, and new features shipped fast.",
  },
};

export default function ChangelogPage() {
  const entries = getChangelogEntries();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <ChangelogClient entries={entries} />
      </div>
    </div>
  );
}

