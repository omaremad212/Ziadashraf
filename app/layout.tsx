import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ziad Ashraf | Brand & Graphic Designer',
  description: 'Crafting unique brand identities through bold visuals and strategic design solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
