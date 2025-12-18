"use client";

import { useMemo } from "react";
import { VideoPlayer } from "./VideoPlayer";
import { MarkdownContent } from "./MarkdownContent";

interface ContentRendererProps {
  content: string;
}

// Parse custom Video component from MDX content
const parseContent = (content: string) => {
  const parts: Array<{ type: "markdown" | "video"; content: string; src?: string; poster?: string }> = [];
  const videoRegex = /<Video\s+src="([^"]+)"(?:\s+poster="([^"]+)")?\s*\/>/g;
  
  let lastIndex = 0;
  let match;
  
  while ((match = videoRegex.exec(content)) !== null) {
    if (match.index > lastIndex) {
      parts.push({
        type: "markdown",
        content: content.slice(lastIndex, match.index),
      });
    }
    
    parts.push({
      type: "video",
      content: "",
      src: match[1],
      poster: match[2],
    });
    
    lastIndex = match.index + match[0].length;
  }
  
  if (lastIndex < content.length) {
    parts.push({
      type: "markdown",
      content: content.slice(lastIndex),
    });
  }
  
  return parts;
};

export const ContentRenderer = ({ content }: ContentRendererProps) => {
  const parts = useMemo(() => parseContent(content), [content]);
  
  return (
    <>
      {parts.map((part, index) => {
        if (part.type === "video" && part.src) {
          return <VideoPlayer key={index} src={part.src} poster={part.poster} />;
        }
        return <MarkdownContent key={index} content={part.content} />;
      })}
    </>
  );
};
