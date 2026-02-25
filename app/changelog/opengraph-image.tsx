import { generateWebsiteOgImage } from "../og-image-template";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Changelog | Nexlayer";

export default function Image() {
  return generateWebsiteOgImage(
    "What's New at Nexlayer",
    "Product updates, improvements, and new features — shipped fast. Follow along as we build the agent-native cloud."
  );
}
