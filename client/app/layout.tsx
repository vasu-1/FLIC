import './globals.css'
import type { Metadata } from 'next'
import {opun_black, opun_light, opun_medium} from "./assets/fonts/FontMaster"
import logo from "./assets/logos/flic-transperent.png"
import SwitchTheme from './components/SwitchTheme'

export const metadata: Metadata = {
  title: 'FLIC | Form Link Chat',
  description: 'This Website Is For Form, Link And Chat',
  icons: {apple: logo.src, icon: logo.src}
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${opun_medium.variable} font-opun-medium`}>
      <SwitchTheme />
        {children}
      </body>
    </html>
  )
}
