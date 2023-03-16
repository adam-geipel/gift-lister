import './globals.css'
import Navbar from './components/navbar/navbar'

export const metadata = {
  title: 'Gift Lister',
  description: 'The little gift list aggregator',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  )
};
