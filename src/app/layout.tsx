import type { Metadata } from 'next'
import { Courier_Prime } from 'next/font/google'
import './globals.css'
 
const courierprime = Courier_Prime({ weight:['400', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'kaej!',
  description: 'a personal site for the one and only jake "k-wau" bees',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={courierprime.className}>{children}</body>
    </html>
  )
}
