import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter, Original_Surfer } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const originalSurfer = Original_Surfer({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-surfer",
})

export const metadata: Metadata = {
  title: "Chase & Lien | Travel Adventures",
  description: "Highlights from all around the world",
  generator: "v0.app",
  icons: {
    icon: "/IMG_0195.png",
    apple: "/IMG_0195.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${originalSurfer.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
