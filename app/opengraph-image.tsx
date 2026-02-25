import { generateWebsiteOgImage } from "./og-image-template";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Nexlayer | The First Agent-Native Cloud";

export default function Image() {
  return generateWebsiteOgImage(
    "The First Agent-Native Cloud",
    "Deploy any GitHub repo in minutes with Nexlayer-MCP — auto-detect, containerize, and go live. No DevOps."
  );
}
