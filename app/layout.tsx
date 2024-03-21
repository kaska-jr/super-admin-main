import './globals.css'
import type { Metadata } from 'next'
import SideBar from './components/SideBar'
import { Providers } from './provider'
import Navbar from './components/NavBar'

export const metadata: Metadata = {
  title: 'Cartle SuperAdmin dashboard',
  description: "Analytics Dashboard",
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-layout dark:bg-gray-800">
        <head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
        </head>
        <Providers>
          
              {children}
          
        </Providers>
      </body>
  </html>
  )
}
