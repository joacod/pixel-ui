import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center text-center px-4">
      <div className="max-w-2xl space-y-6">
        <h1 className="text-5xl font-bold tracking-tight">👾 Pixel UI 👾</h1>

        <div>
          <p className="text-lg text-fd-muted-foreground mx-auto">
            Retro pixel-art styled React component library built on Base UI.
          </p>
          <Link
            href="/docs"
            className="inline-flex items-center  text-fd-foreground font-semibold  transition-all duration-200 group underline"
          >
            Documentation
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </main>
  )
}
