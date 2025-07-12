import { motion } from 'framer-motion'
import { MapPin, ArrowRight, ChevronDown } from 'lucide-react'

const Hero = () => {
  const handleDirections = () => {
    window.open('https://maps.google.com/?q=Largo+São+José+do+Belém,+61,+São+Paulo,+SP', '_blank')
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/largo.jpeg)',
          filter: 'brightness(0.7) contrast(1.1)'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-anton text-5xl md:text-7xl lg:text-8xl mb-6 tracking-wider">
            NOVA BANCA
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 font-light leading-relaxed">
            A sua conveniência diária no coração do Belenzinho
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-lg md:text-xl mb-12 text-gray-200">
            Mais que uma banca. O seu ponto de confiança para notícias, serviços e um bom dia.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button 
            onClick={handleDirections}
            className="btn-primary inline-flex items-center gap-3 text-xl px-10 py-5 shadow-2xl"
          >
            <MapPin size={24} />
            Como Chegar Agora
            <ArrowRight size={20} />
          </button>
          
          <button 
            onClick={() => scrollToSection('services')}
            className="text-white border-2 border-white px-6 py-3 rounded-lg hover:bg-white hover:text-dark-gray transition-all duration-300"
          >
            Nossos Serviços
          </button>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => scrollToSection('services')}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <ChevronDown size={16} className="text-white mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero 