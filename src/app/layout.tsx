import type { Metadata } from 'next'
import './globals.css'

import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import { Fira_Code } from 'next/font/google'

const firaCode = Fira_Code({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

const title = 'Johan Kristianto | Software Engineer & IT Specialist'

const description =
  "Software Engineer & IT Specialist from Indonesia. I craft scalable web applications with React, Next.js, and Node.js, and integrate secure systems with modern technologies. Let's build something impactful together."

const url = process.env.NEXT_PUBLIC_SITE_URL

export const metadata: Metadata = {
  title,
  description,
  category: 'technology',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
  alternates: {
    canonical: url,
  },
  openGraph: {
    title,
    description,
    url,
    siteName: 'Johan Kristianto Portfolio',
    type: 'website',
  },
  icons: {
    icon: '/favicon.svg', // default favicon
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${firaCode.className}`}>
        <header>
          <Navbar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  )
}
