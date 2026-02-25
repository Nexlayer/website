import { generateWebsiteOgImage } from "../og-image-template";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Agents | Nexlayer";

export default function Image() {
  return generateWebsiteOgImage(
    "Built for AI Agents",
    "Nexlayer is the cloud that agents trust. Deploy any repo instantly via MCP — no dashboards, no DevOps."
  );
}
