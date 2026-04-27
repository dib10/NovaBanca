import Hero from './components/Hero'
import Services from './components/Services'
import Products from './components/Products'
import Timeline from './components/Timeline'
import FAQ from './components/FAQ'
import Location from './components/Location'
import Footer from './components/Footer'
import SEO from './components/SEO'
import ScrollToTop from './components/ScrollToTop'
import CopaPopup from './components/CopaPopup'

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
      <ScrollToTop />
      <CopaPopup />
    </div>
  )
}

export default App 