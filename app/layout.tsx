import './globals.css'
import Header from '../components/HeaderFooter/Header'

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
        <Header/>
        {children}
      </body>
    </html>
  )
};
