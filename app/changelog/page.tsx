import { getChangelogEntries } from "@/lib/changelog";
import { ChangelogClient } from "./ChangelogClient";

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

