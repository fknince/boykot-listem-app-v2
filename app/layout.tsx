import './globals.css'
import { ThemeProvider } from '@theme/provider'

export const metadata = {
  title: 'Boykot Listem',
  description: 'Topluca tavır al, gücünü göster.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}