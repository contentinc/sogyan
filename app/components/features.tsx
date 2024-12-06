import Image from 'next/image'

const features = [
  {
    title: "Revolutionizing Learning",
    description: "Our device seamlessly fits into both classroom and home learning scenarios, replacing mobile phones in children's lives.",
    image: "/placeholder.svg?height=400&width=600"
  },
  {
    title: "Revolutionizing Teaching",
    description: "Our device empowers students to learn without disrupting teaching methods, enhancing engagement and efficiency. We enable teachers to engage, monitor and track student learning like never before.",
    image: "/placeholder.svg?height=400&width=600"
  },
  {
    title: "Revolutionizing Parenting",
    description: "Designed for safety and well-being, our device blocks inappropriate content, promotes healthy habits, and sparks excitement for learning.",
    image: "/placeholder.svg?height=400&width=600"
  }
]

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className={`flex flex-col md:flex-row items-center gap-12 mb-24 last:mb-0 ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="md:w-1/2">
              <div className="relative h-[400px] overflow-hidden rounded-lg">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-serif mb-4">{feature.title}</h2>
              <p className="text-lg text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

