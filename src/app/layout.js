import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import { Inter } from 'next/font/google'
import './globals.css'
import About from '@/components/About'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Agway Investment',
  description: 'Inspiring Growth',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#f3f5f8] overflow-x-hidden
      w-full`}>
        <Navigation />
        {children}</body>
    </html>
  )
}
