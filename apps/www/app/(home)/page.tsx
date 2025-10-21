import { SiNpm } from 'react-icons/si'
import { FaGithub } from 'react-icons/fa'
import { FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center text-center px-4">
      <div className="max-w-2xl space-y-6">
        <h1 className="text-5xl font-bold tracking-tight">👾 Pixel UI 👾</h1>

        <div>
          <p className="text-lg text-fd-muted-foreground mx-auto">
            Retro pixel-art styled React component library built on{' '}
            <a
              href="https://base-ui.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fd-foreground font-semibold hover:underline"
            >
              Base UI
            </a>
            .
          </p>
          <div className="flex items-center justify-center gap-4 mt-4">
            <a
              href="https://www.npmjs.com/package/@joacod/pixel-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-secondary/80 transition-colors"
            >
              <SiNpm className="w-5 h-5" />
              <span className="font-semibold">npm</span>
            </a>
            <a
              href="https://github.com/joacod/pixel-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-secondary/80 transition-colors"
            >
              <FaGithub className="w-5 h-5" />
              <span className="font-semibold">GitHub</span>
            </a>
          </div>
          <Link
            href="/docs"
            className="inline-flex items-center  text-fd-foreground font-semibold  transition-all duration-200 group underline mt-4"
          >
            Documentation
            <FaArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </main>
  )
}
