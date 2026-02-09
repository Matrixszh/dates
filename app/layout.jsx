import './globals.css'

export const metadata = {
  title: 'TAMR Premium Dates - The Best Quality From The Best Source',
  description: 'Premium quality dates from the best sources. Offering Ajwa, Medjoul, Amber, Mabroom, Sukkari, Kalmi, Safawi, Mashrook, Mazafati, and Sugai dates.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
