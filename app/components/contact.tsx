import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h2 className="text-3xl font-serif mb-4">CONTACT US</h2>
        <p className="text-xl mb-4">Do you have a question?</p>
        <p className="text-gray-600 mb-8">Drop us a line anytime, and we will get back to you with answers!</p>
        <Button 
          size="lg"
          className="bg-black text-white hover:bg-black/90 mb-6"
        >
          Message us on WhatsApp
        </Button>
        <p className="text-lg">+91 6386204036</p>
      </div>
    </section>
  )
}

