import { HelmetProvider } from 'react-helmet-async'
import Hero from './components/Hero'
import Services from './components/Services'
import Timeline from './components/Timeline'
import Location from './components/Location'
import Footer from './components/Footer'
import SEO from './components/SEO'
import ScrollToTop from './components/ScrollToTop'
import CopaPopup from './components/CopaPopup'

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-light-gray">
        <SEO />
        <Hero />
        <Services />
        <Timeline />
        <Location />
        <Footer />
        <ScrollToTop />
        <CopaPopup />
      </div>
    </HelmetProvider>
  )
}

export default App 