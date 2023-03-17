import './globals.css'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import { Inter } from 'next/font/google'

export const metadata = {
  title: 'Gift Lister',
  description: 'The little gift list aggregator',
};


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
};
