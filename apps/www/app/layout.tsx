import '@/app/global.css'
import { RootProvider } from 'fumadocs-ui/provider/next'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'pixel-ui - Retro pixel-art React components',
  description:
    'Opinionated pixel-art styled React component library built on Base UI with modern accessibility standards',
}

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen font-pixel">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  )
}
