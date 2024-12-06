import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-serif border border-black px-2 py-1">
            Sogyan
          </Link>
          
          {pathname === '/blog' ? (
            <Link href="/" className="font-medium hover:text-gray-600 transition-colors">
              HOME
            </Link>
          ) : (
            <Link href="/blog" className="font-medium hover:text-gray-600 transition-colors">
              BLOG
            </Link>
          )}
        </nav>
      </div>
    </header>
  )
}

