import type { Metadata } from 'next'
import './globals.css'
import { Montserrat, Oxanium } from 'next/font/google'

export const metadata: Metadata = {
  title: 'devstage',
}

const oxanium = Oxanium({
  weight: ['500', '600'],
  subsets: ['latin'], //Tipos de caracteres para carregamento da fonte
  variable: '--font-oxanium', //Qual a variavel usada para acessar a font
})

const montserrat = Montserrat({
  weight: ['400', '600'],
  subsets: ['latin'], //Tipos de caracteres para carregamento da fonte
  variable: '--font-montserrat', //Qual a variavel usada para acessar a font
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${oxanium.variable} ${montserrat.variable}`}>
      <body className="bg-gray-900 text-gray-100 antialiased bg-[url(/background.png)] bg-no-repeat bg-top md:bg-right-top">
        {children}
      </body>
    </html>
  )
}
