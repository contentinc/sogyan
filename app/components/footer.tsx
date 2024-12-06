import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-8 bg-gray-50 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xl font-serif">SOGYAN</p>
          <div className="space-x-6 text-sm text-gray-600">
            <Link href="/privacy" className="hover:text-gray-900">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-900">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

