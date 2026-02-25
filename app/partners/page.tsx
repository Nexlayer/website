import type { Metadata } from "next";
import PartnersClient from "./PartnersClient";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Hire a Nexlayer partner. Work with vetted experts who build and deploy on Nexlayer. Get your project live faster.",
  openGraph: {
    title: "Partners | Nexlayer",
    description:
      "Hire a Nexlayer partner. Work with vetted experts who build and deploy on Nexlayer. Get your project live faster.",
    url: "https://nexlayer.com/partners",
  },
  twitter: {
    title: "Partners | Nexlayer",
    description:
      "Hire a Nexlayer partner. Work with vetted experts who build and deploy on Nexlayer. Get your project live faster.",
  },
};

export default function PartnersPage() {
  return <PartnersClient />;
}
