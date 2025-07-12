import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Copy, MapPin, ExternalLink } from 'lucide-react'
import logoCopa from '../assets/logo-copa.png'

const CopaPopup = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    // Mostra o popup após 2 segundos
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // Adiciona listener para tecla ESC
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isVisible) {
        handleClose()
      }
    }

    if (isVisible) {
      document.addEventListener('keydown', handleKeyDown)
      // Previne scroll do body quando popup está aberto
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isVisible])

  const handleClose = () => {
    console.log('Fechando popup...') // Debug
    setIsVisible(false)
  }

  const copyAddress = async () => {
    const address = "Largo São José do Belém, 61 - Belenzinho, São Paulo - SP"
    
    try {
      await navigator.clipboard.writeText(address)
      setCopied(true)
      
      // Reset do estado após 2 segundos
      setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch (err) {
      console.error('Erro ao copiar endereço:', err)
    }
  }

  const openMaps = () => {
    window.open('https://maps.google.com/?q=Largo+São+José+do+Belém,+61,+São+Paulo,+SP', '_blank')
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background com gradiente da Copa */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-green-500 to-yellow-400 opacity-10"></div>
            
            {/* Botão fechar - Corrigido com z-index maior */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-200 shadow-lg"
              style={{ zIndex: 9999 }}
              aria-label="Fechar popup"
            >
              <X size={20} className="text-gray-700" />
            </button>

            <div className="relative z-10 p-8 text-center">
              {/* Logo da Copa */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", damping: 15 }}
                className="mb-6"
              >
                <img 
                  src={logoCopa}
                  alt="Copa do Mundo 2026" 
                  className="w-24 h-24 mx-auto object-contain"
                />
              </motion.div>

              {/* Título */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl font-anton text-action-red mb-4"
              >
                COPA 2026 FIFA
              </motion.h2>

              {/* Texto */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-gray-700 mb-6 leading-relaxed"
              >
                Estaremos com álbum e figurinhas da Copa do Mundo 2026! 
                <br />
                <span className="font-semibold text-action-red">
                  Fique de olho!
                </span>
              </motion.p>

              {/* Botões */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-3"
              >
                <button
                  onClick={copyAddress}
                  className="w-full bg-action-red text-white font-bold py-4 px-6 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Copy size={20} />
                  {copied ? 'Endereço Copiado!' : 'Copiar Endereço'}
                </button>

                <button
                  onClick={openMaps}
                  className="w-full bg-white text-action-red font-bold py-3 px-6 rounded-lg border-2 border-action-red hover:bg-action-red hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  <MapPin size={18} />
                  Como Chegar
                  <ExternalLink size={16} />
                </button>
              </motion.div>

              {/* Texto auxiliar */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-sm text-gray-500 mt-4"
              >
                (clique para copiar o endereço) • Pressione ESC para fechar
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CopaPopup 