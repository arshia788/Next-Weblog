import Layout from '@/components/layout/Layout'
import Providers from '@/redux/Providers';

import './globals.css'
import { Inter } from 'next/font/google';
import NextAuthProvider from '@/providers/NextAuthProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog Page',
  description: 'Main Blog Page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <NextAuthProvider>
          <Providers>
            <Layout>
              {children}
            </Layout>
          </Providers>
        </NextAuthProvider>

      </body>
    </html>
  )
}
