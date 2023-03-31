
import  Navbar  from './components/navbar/navbar'; 
import Footer from './footer'
import Auth from './auth';
import { Inter } from 'next/font/google';
import './globals.css'

export const metadata = {
  title: 'Gift Lister',
  description: 'The little gift list aggregator',
};

const inter = Inter({ subsets: ['latin'] })

const RootLayout = async ({
  children,
}: {
  children: React.ReactNode,
}) => {

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* @ts-expect-error Server Component */}
        <Auth>
          <Navbar />
          {children}
        </Auth>
        <Footer/>
      </body>
    </html>
  )
};

export default RootLayout;