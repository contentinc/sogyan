import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-black/60 z-10">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Students learning"
          fill
          className="object-cover mix-blend-overlay"
          priority
        />
      </div>
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
            Re-define the relation between children and tech!
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Safe, Efficient and Engaging
          </p>
          <Button 
            size="lg"
            className="bg-white text-black hover:bg-white/90"
          >
            KEEP ME POSTED!
          </Button>
        </div>
      </div>
    </section>
  )
}

