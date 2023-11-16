import type { Metadata } from 'next'
import { DM_Sans as dmSans } from 'next/font/google'
import './globals.css'

const inter = dmSans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Checkout',
  description: 'Método de pagamento',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
