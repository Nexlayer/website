"use client";

import { useState, useEffect } from "react";
import {
  ChangelogHeader,
  ChangelogEntry,
} from "@/components/changelog";
import type { ChangelogEntry as ChangelogEntryType } from "@/lib/changelog";

interface ChangelogClientProps {
  entries: ChangelogEntryType[];
}

export function ChangelogClient({ entries, heroData }: ChangelogClientProps & { heroData: { title: string; description: string } }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredEntries, setFilteredEntries] = useState<ChangelogEntryType[]>(entries);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredEntries(entries);
    } else {
      const query = searchQuery.toLowerCase();
      setFilteredEntries(
        entries.filter(
          (entry) =>
            entry.title.toLowerCase().includes(query) ||
            entry.summary.toLowerCase().includes(query) ||
            entry.date.toLowerCase().includes(query)
        )
      );
    }
  }, [searchQuery, entries]);

  return (
    <>
      {/* Header */}
      <ChangelogHeader
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        heroData={heroData}
      />
      
      {/* Changelog entries */}
      <div className="space-y-0">
        {filteredEntries.map((entry) => (
          <ChangelogEntry key={entry.slug} entry={entry} />
        ))}
      </div>
      
      {filteredEntries.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-500">No changelog entries found matching &quot;{searchQuery}&quot;</p>
        </div>
      )}
    </>
  );
}
