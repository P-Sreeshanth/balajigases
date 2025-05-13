import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FabQuickAction from '@/components/FabQuickAction'
import HeroSection from '@/components/HeroSection'
import TimelineSection from '@/components/TimelineSection'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sri Balaji Industrial Gases Pvt Ltd',
  description: 'Leading manufacturer and supplier of industrial gases, medical gases, and gas equipment in India.',
  keywords: 'industrial gases, medical gases, gas equipment, oxygen, nitrogen, argon, carbon dioxide, gas cylinders',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <FabQuickAction />
      </body>
    </html>
  )
} 