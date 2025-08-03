import { ReactNode } from "react";
import '@/globals.scss'

type RootLayoutProps = {
  children: ReactNode,
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}