import './globals.css'
import { Manrope } from 'next/font/google';

const manrope = Manrope({
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-manrope',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <main className={`${manrope.variable} font-sans`}>
          {children}
        </main>
      </body>
    </html>
  )
}
