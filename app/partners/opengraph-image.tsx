import { generateWebsiteOgImage } from "../og-image-template";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Partners | Nexlayer";

export default function Image() {
  return generateWebsiteOgImage(
    "Hire a Nexlayer Partner",
    "Work with vetted experts who build and deploy on Nexlayer. Get your project live faster."
  );
}
