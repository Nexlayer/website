"use client";

import { Search, Bell } from "lucide-react";

interface ChangelogHeaderProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export const ChangelogHeader = ({ searchQuery, onSearchChange }: ChangelogHeaderProps) => {
  return (
    <div className="flex flex-col gap-4 mb-8 sm:mb-12">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl sm:text-3xl font-bold text-white">Changelog</h1>
        <button className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-[#111111] border border-[#222222] rounded-lg text-gray-500 hover:text-white hover:border-[#333333] transition-colors">
          <Bell className="w-4 h-4" />
        </button>
      </div>
      
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="bg-[#111111] border border-[#222222] rounded-lg pl-10 pr-12 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 w-full sm:w-64"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-gray-500">
          <kbd className="text-xs bg-[#1a1a1a] px-1.5 py-0.5 rounded border border-[#333333]">⌘K</kbd>
        </div>
      </div>
    </div>
  );
};
