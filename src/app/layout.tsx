import type { ReactNode } from "react"
import "./globals.css"

export const metadata = {
  title: "NBA Stats & Player Profiles",
  description: "SEO-optimized NBA teams and player statistics"
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
