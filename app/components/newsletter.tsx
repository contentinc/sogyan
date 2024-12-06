import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Newsletter() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-xl text-center">
        <h2 className="text-3xl font-serif mb-8">Join Our Mailing List</h2>
        <form className="flex gap-4">
          <Input 
            type="email" 
            placeholder="Email" 
            className="flex-grow"
          />
          <Button type="submit" className="bg-black hover:bg-black/90">
            SIGN UP
          </Button>
        </form>
      </div>
    </section>
  )
}

