import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">Pixel UI</h1>
      <p className="text-fd-muted-foreground">
        Retro pixel-art styled React component library built on Base UI.{' '}
        <Link
          href="/docs"
          className="text-fd-foreground font-semibold underline"
        >
          Docs
        </Link>
      </p>
    </main>
  )
}
