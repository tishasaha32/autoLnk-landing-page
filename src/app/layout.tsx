import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
// import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "AutoLnk - Car Shows & Racing Events",
  description: "Join the most exciting car shows, racing events, and automotive experiences with AutoLnk.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="min-h-screen bg-black text-white">
        {/* <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange> */}
        {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}


import './globals.css'