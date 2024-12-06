import Header from './components/header'
import Hero from './components/hero'
import Features from './components/features'
import Contact from './components/contact'
import Newsletter from './components/newsletter'
import Footer from './components/footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Contact />
      <Newsletter />
      <Footer />
    </div>
  )
}

