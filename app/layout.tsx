import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nexlayer - From Local to Global in One Prompt",
  description:
    "Nexlayer is the AI-native cloud that transforms your MVP into a production-grade app in under 5 minutes. Ship from your AI coding tool to a live, secure, global URL.",
  generator: "Next.js",
  openGraph: {
    title: "Nexlayer - From Local to Global in One Prompt",
    description:
      "Nexlayer is the AI-native cloud that transforms your MVP into a production-grade app in under 5 minutes. Ship from your AI coding tool to a live, secure, global URL.",
    url: "https://nexlayer.io",
    siteName: "Nexlayer",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nexlayer - From Local to Global in One Prompt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexlayer - From Local to Global in One Prompt",
    description:
      "Nexlayer is the AI-native cloud that transforms your MVP into a production-grade app in under 5 minutes. Ship from your AI coding tool to a live, secure, global URL.",
    images: ["/og-image.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
