import type { Metadata } from "next";
import PartnersClient from "./PartnersClient";

export const partnersHeroData = {
  title: "Hire a Nexlayer Partner",
  description:
    "Whether you're just getting started with Nexlayer or looking to implement advanced functionality, our partners have the expertise and industry knowledge to deliver the right solution.",
};

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Hire a Nexlayer partner. Work with vetted experts who build and deploy on Nexlayer. Get your project live faster.",
  openGraph: {
    title: "Partners | Nexlayer",
    description:
      "Hire a Nexlayer partner. Work with vetted experts who build and deploy on Nexlayer. Get your project live faster.",
    url: "https://nexlayer.com/partners",
    images: [
      {
        url: `/api/og/partners?title=${encodeURIComponent(partnersHeroData.title)}&description=${encodeURIComponent(partnersHeroData.description)}`,
        width: 1200,
        height: 630,
        alt: partnersHeroData.title,
      },
    ],
  },
  twitter: {
    title: "Partners | Nexlayer",
    description:
      "Hire a Nexlayer partner. Work with vetted experts who build and deploy on Nexlayer. Get your project live faster.",
  },
};

export default function PartnersPage() {
  return <PartnersClient heroData={partnersHeroData} />;
}
