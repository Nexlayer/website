"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownContentProps {
  content: string;
}

export const MarkdownContent = ({ content }: MarkdownContentProps) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        p: ({ children, node }) => {
          // Check if the paragraph contains only an image
          const hasOnlyImage = node?.children?.length === 1 && 
            node.children[0].type === 'element' && 
            (node.children[0] as any).tagName === 'img';
          
          if (hasOnlyImage) {
            // Return children directly without wrapping in <p>
            return <>{children}</>;
          }
          
          return <p className="text-gray-300 leading-relaxed mb-4">{children}</p>;
        },
        h2: ({ children }) => (
          <h3 className="text-white text-lg font-semibold mb-3 mt-6">{children}</h3>
        ),
        h3: ({ children }) => (
          <h4 className="text-white text-base font-semibold mb-2 mt-4">{children}</h4>
        ),
        ul: ({ children }) => (
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-4">{children}</ul>
        ),
        li: ({ children }) => <li>{children}</li>,
        img: ({ src, alt }) => (
          <figure className="my-6">
            <div className="bg-[#111111] rounded-lg overflow-hidden border border-[#222222]">
              <img src={src} alt={alt || ""} className="w-full h-auto object-cover" />
            </div>
            {alt && (
              <figcaption className="text-center text-gray-500 text-sm mt-2">{alt}</figcaption>
            )}
          </figure>
        ),
        blockquote: ({ children }) => (
          <blockquote className="border-l-2 border-cyan-400 pl-4 my-4 text-gray-400 italic">
            {children}
          </blockquote>
        ),
        a: ({ href, children }) => (
          <a href={href} className="text-cyan-400 hover:text-cyan-300 underline">
            {children}
          </a>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
};
