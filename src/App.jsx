import Hero from './components/Hero'
import Services from './components/Services'
import Products from './components/Products'
import Timeline from './components/Timeline'
import FAQ from './components/FAQ'
import Location from './components/Location'
import Footer from './components/Footer'
import SEO from './components/SEO'
import CopaPopup from './components/CopaPopup'
import FloatingWhatsApp from './components/FloatingWhatsApp'

function App() {
  return (
    <div className="min-h-screen bg-light-gray overflow-x-hidden w-full">
      <SEO />
      <Hero />
      <Services />
      <Products />
      <Timeline />
      <FAQ />
      <Location />
      <Footer />
      <FloatingWhatsApp />
      <CopaPopup />
    </div>
  )
}

export default App 