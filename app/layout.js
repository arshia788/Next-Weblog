import Layout from '@/components/layout/Layout'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog Page',
  description: 'Main Blog Page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}> <Layout>{children}</Layout> </body>
    </html>
  )
}
