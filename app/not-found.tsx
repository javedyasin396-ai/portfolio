import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="label">Error 404</p>
      <h1 className="mt-6 font-serif text-5xl font-bold">
        Page not <em className="text-accent">found</em>
      </h1>
      <p className="mt-4 max-w-md text-label">The page you are looking for does not exist or has moved.</p>
      <Link href="/" className="btn btn-primary mt-8">
        Back to home
      </Link>
    </main>
  )
}
