import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

function getAppRoutes(appDir: string): string[] {
  const urls: string[] = [];
  function walk(dir: string, base: string = "") {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        walk(fullPath, path.join(base, file));
      } else if (file === "page.tsx") {
        let route = path.join(base, "/").replace(/\\/g, "/");
        route = route.replace(/\/page$/, "");
        if (!route.startsWith("/")) {
          route = "/" + route;
        }
        urls.push(route);
      }
    }
  }
  walk(appDir);
  return urls.filter((u, i, arr) => arr.indexOf(u) === i);
}

export async function GET() {
  const appDir = path.join(process.cwd(), "app");
  const urls = getAppRoutes(appDir);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nexlayer.com";
  const allUrls = Array.from(new Set([...urls, "/playground"]));
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${allUrls
    .map(
      (url) =>
        `  <url><loc>${baseUrl}${url}</loc><changefreq>monthly</changefreq><priority>1.0</priority></url>`
    )
    .join("\n")}\n</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
