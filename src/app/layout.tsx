import { type Metadata } from 'next'
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Geist, Geist_Mono, Manrope } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const manropeFont = Manrope({
  subsets: ['latin'],
  // variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: "Zuno",
  description: "Share AI powered video with your friends with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${manropeFont.className} `}>
          <ThemeProvider>
          {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}