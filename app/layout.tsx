import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '100', '500', '700']
})

export const metadata: Metadata = {
  title: 'Weather App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} dark:bg-black dark:text-white scroll`}>
        {children}
        </body>
    </html>
  )
}
