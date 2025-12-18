import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface ChangelogEntry {
  slug: string;
  date: string;
  title: string;
  summary: string;
  content: string;
}

export function getChangelogEntries(): ChangelogEntry[] {
  const filePath = path.join(process.cwd(), "content", "changelog.mdx");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  
  const { data, content } = matter(fileContent);
  
  // Split content by entry markers
  const contentSections = content.split(/---\s*\n/).filter((section) => section.trim());
  
  // Map entries from frontmatter with their content sections
  const entries: ChangelogEntry[] = data.entries.map((entry: any, index: number) => {
    // Find the content section that matches this entry's slug
    const sectionContent = contentSections[index] || "";
    
    // Remove the entry comment marker and clean up
    const cleanContent = sectionContent
      .replace(/\{\/\*\s*Entry:\s*[\w-]+\s*\*\/\}\s*\n?/, "")
      .trim();
    
    return {
      slug: entry.slug,
      date: entry.date,
      title: entry.title,
      summary: entry.summary,
      content: cleanContent,
    };
  });
  
  return entries;
}
