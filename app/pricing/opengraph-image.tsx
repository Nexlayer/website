import { generateWebsiteOgImage } from "../og-image-template";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Pricing | Nexlayer";

export default function Image() {
  return generateWebsiteOgImage(
    "Simple, Transparent Pricing",
    "Start free and scale as you grow. No hidden fees, no DevOps overhead — just instant deployment."
  );
}
