import { generateWebsiteOgImage } from "../../../og-image-template";
import { heroData } from "@/app/page";
import { pricingHeroData } from "@/app/pricing/page";
import { heroData as agentsHeroData } from "@/app/agents/page";
import { partnersHeroData } from "@/app/partners/page";
import { changelogHeroData } from "@/app/changelog/page";

export const runtime = "nodejs";

export function generateStaticParams() {
  return [
    { path: ["home"] },
    { path: ["pricing"] },
    { path: ["agents"] },
    { path: ["partners"] },
    { path: ["changelog"] },
  ];
}

// Static pages with exported heroData
const staticPages: Record<string, { title: string; description: string }> = {
  "/": heroData,
  "/home": heroData,
  "/pricing": pricingHeroData,
  "/agents": agentsHeroData,
  "/partners": partnersHeroData,
  "/changelog": changelogHeroData,
};

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ path?: string[] }> }
) {
  const { path } = await params;

  const pagePath = path?.length ? `/${path.join("/")}` : "/";
  const data = staticPages[pagePath];

  const title = data?.title || "Nexlayer";
  const description = data?.description || "";

  return generateWebsiteOgImage(title, description);
}
