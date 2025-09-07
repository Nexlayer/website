import type React from "react";
import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://nexlayer.com"),
  title: {
    template: "%s | Nexlayer",
    default: "Nexlayer - The First Agent-Native Cloud Platform",
  },
  description:
    "Nexlayer is the first AI agent-native cloud. Deploy any GitHub repo in minutes with Nexlayer-MCP — auto-detect, containerize, and go live. No DevOps.",
  keywords:
    "AI agent-native cloud, GitHub deployment, Nexlayer-MCP, auto-detect stack, containerize, instant deployment, no DevOps, cloud agents, AI cloud platform, production deployment",
  openGraph: {
    title: {
      template: "%s | Nexlayer",
      default: "Nexlayer - The First Agent-Native Cloud Platform",
    },
    description:
      "Nexlayer is the first AI agent-native cloud, enabling agents and developers to deploy any GitHub repo instantly. The Nexlayer-MCP auto-detects your stack, containerizes, orchestrates, and delivers a live production URL — no dashboards, no DevOps. The Cloud Agents Trust™.",
    type: "website",
    url: new URL("https://nexlayer.com"),
    images: [
      {
        url: new URL("https://nexlayer.com/og-image.png"),
        alt: "Nexlayer Open Graph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nexlayer",
    title: {
      template: "%s | Nexlayer",
      default: "Nexlayer - The First Agent-Native Cloud Platform",
    },
    description:
      "Nexlayer is the first AI agent-native cloud, enabling agents and developers to deploy any GitHub repo instantly. The Nexlayer-MCP auto-detects your stack, containerizes, orchestrates, and delivers a live production URL — no dashboards, no DevOps. The Cloud Agents Trust™.",
    creator: "@nexlayer",
    images: [
      {
        url: new URL("https://nexlayer.com/og-image.png"),
        alt: "Nexlayer Twitter Image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link rel="canonical" href="https://nexlayer.com/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Nexlayer",
              url: "https://nexlayer.com/",
              logo: "https://nexlayer.com/logo.png",
              sameAs: ["https://x.com/nexlayer", "https://github.com/nexlayer"],
            }),
          }}
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </head>
      <body className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
