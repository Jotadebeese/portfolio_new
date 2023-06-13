import '/styles/globals.css'
import { PT_Serif } from 'next/font/google'
import NavMenu from '@/components/NavMenu'
import AuthProvider from './AuthProvider'

const pt_serif = PT_Serif({ subsets: ['latin'], weight:['400'] })

export const metadata = {
  title: "Hi, I'm Juan",
  description: 'This is my portfolio, feel free to look around!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={pt_serif.className}>
          <NavMenu />
          {children}
        </body>
      </html>
    </AuthProvider>
  )
}
