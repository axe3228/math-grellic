import { Manrope, Squada_One } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-manrope',
});

const squada = Squada_One({
  weight: ['400'],
  display: 'swap',
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-squada',
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
        <main className={`${manrope.variable} ${squada.variable} font-sans`}>
          {children}
        </main>
      </body>
    </html>
  )
}
