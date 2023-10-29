import type { Metadata } from 'next'

import { Courier_Prime } from 'next/font/google'
import './globals.css'
 
const courierprime = Courier_Prime({ weight:'700', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'kaej!',
  description: 'a personal site for the one and only jake "k-wau" bees',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) 
{
  return (
    <html lang="en">
      <body className={courierprime.className}>
        <audio id="backgroundMusic" src='/audio/background.mp3' preload='auto' loop />
        <audio id="leftArrowSound" src="/audio/leftarrow.mp3" preload='auto'/>
        <audio id="rightArrowSound" src="/audio/rightarrow.mp3" preload='auto'/>
        <audio id="blackHoleSound" src="/audio/blackhole.mp3" preload='auto'/>
        {children}
      </body>
    </html>
  )
}
