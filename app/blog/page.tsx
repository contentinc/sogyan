import Header from '../components/header'
import Footer from '../components/footer'
import { Button } from "@/components/ui/button"

export default function BlogPage() {
  const blogPosts = [
    { id: 1, title: "The Future of Educational Technology", excerpt: "Exploring how new technologies are shaping the way children learn and grow." },
    { id: 2, title: "Balancing Screen Time and Family Time", excerpt: "Tips for parents on managing technology use in the household." },
    { id: 3, title: "How Sogyan is Revolutionizing Classroom Learning", excerpt: "A deep dive into the features that make Sogyan stand out in educational tech." },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Sogyan Blog</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div key={post.id} className="border rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Button variant="outline">Read More</Button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

