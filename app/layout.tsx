import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nexlayer — The Cloud Agents Trust™",
  description: "Nexlayer is the first agent-native cloud. From GitHub repo to production in minutes — no infra setup, no configs, no humans in the loop. 5,000+ apps live. The next is yours.",
  generator: "Next.js",
  robots: "index, follow",
  openGraph: {
    title: "Nexlayer — The first agent-native cloud",
    description: "Deploy AI apps to production with one prompt. Agents build, Nexlayer ships.",
    url: "https://nexlayer.com/",
    siteName: "Nexlayer",
    images: [
      {
        url: "https://nexlayer.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nexlayer — The Cloud Agents Trust™",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexlayer — The Cloud Agents Trust™",
    description: "From repo to live in minutes. No infra. No configs. 5,000+ apps live.",
    images: ["https://nexlayer.com/og-image.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="canonical" href="https://nexlayer.com/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Nexlayer",
              "url": "https://nexlayer.com/",
              "logo": "https://nexlayer.com/logo.png",
              "sameAs": [
                "https://x.com/nexlayer",
                "https://github.com/nexlayer"
              ]
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
