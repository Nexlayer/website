"use client";

import { ContentRenderer } from "./ContentRenderer";
import type { ChangelogEntry as ChangelogEntryType } from "@/lib/changelog";

interface ChangelogEntryProps {
  entry: ChangelogEntryType;
}

export const ChangelogEntry = ({ entry }: ChangelogEntryProps) => {
  return (
    <article className="relative pb-12 sm:pb-16 last:pb-0">
      {/* Mobile layout: stacked */}
      <div className="sm:hidden">
        {/* Timeline dot and date row */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0" />
          <span className="text-gray-500 text-sm">{entry.date}</span>
        </div>
        
        {/* Content */}
        <div className="pl-5 border-l-2 border-[#222222] ml-[3px]">
          <h2 className="text-xl font-bold text-white mb-3">
            {entry.title}
          </h2>
          
          <blockquote className="border-l-2 border-[#333333] pl-4 mb-4">
            <p className="text-gray-400 text-sm">
              {entry.summary}
            </p>
          </blockquote>
          
          <ContentRenderer content={entry.content} />
        </div>
      </div>

      {/* Desktop layout: side by side */}
      <div className="hidden sm:flex gap-12 lg:gap-20">
        {/* Left side - Date with timeline */}
        <div className="relative flex-shrink-0 w-36 lg:w-44">
          {/* Timeline dot */}
          <div className="absolute left-0 top-1.5 w-2 h-2 bg-cyan-400 rounded-full" />
          {/* Timeline line */}
          <div className="absolute left-[3px] top-4 bottom-0 w-[2px] bg-[#222222]" />
          {/* Date */}
          <div className="text-gray-500 text-sm pl-6">
            {entry.date}
          </div>
        </div>
        
        {/* Right side - Content */}
        <div className="flex-1 max-w-3xl">
          <h2 className="text-2xl font-bold text-white mb-4">
            {entry.title}
          </h2>
          
          {/* Summary quote */}
          <blockquote className="border-l-2 border-[#333333] pl-4 mb-6">
            <p className="text-gray-400">
              {entry.summary}
            </p>
          </blockquote>
          
          {/* Content */}
          <ContentRenderer content={entry.content} />
        </div>
      </div>
    </article>
  );
};
