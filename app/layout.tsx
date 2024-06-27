import './globals.css'
import { Inter } from 'next/font/google'
import * as React from 'react'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "FINE-TUNE AI – Generate fine tune data set using prompt",
  description:
    "Generate fine tune data set using prompt."
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Other head elements... */}
        {/* Google Analytics Tracking Code */}
      </head>
      <body className={inter.className}>
      
        {children}
       
      </body>
    </html>
  )
}
