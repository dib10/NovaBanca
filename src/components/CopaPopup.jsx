import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Copy, MapPin, ExternalLink } from 'lucide-react'
import logoCopa from '../assets/logo-copa.png'
import {
  ADDRESS_FULL,
  MAPS_URL,
  WHATSAPP_HREF,
  LAUNCH_DATE_BR,
  getLaunchUrgencyLine,
} from '../data/copa2026'
import { openWhatsAppSmart } from '../utils/openWhatsAppSmart'

const CopaPopup = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [copied, setCopied] = useState(false)
  const whatsappIconSrc = `${import.meta.env.BASE_URL}whatsapp.png`

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isVisible) {
        setIsVisible(false)
      }
    }

    if (isVisible) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isVisible])

  const handleClose = () => {
    setIsVisible(false)
  }

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(ADDRESS_FULL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Erro ao copiar endereço:', err)
    }
  }

  const openMaps = () => {
    window.open(MAPS_URL, '_blank')
  }

  const urgencyLine = getLaunchUrgencyLine()

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
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full relative overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-green-500 to-yellow-400 opacity-10" />

            <button
              type="button"
              onClick={handleClose}
              className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-200 shadow-lg"
              style={{ zIndex: 9999 }}
              aria-label="Fechar popup"
            >
              <X size={20} className="text-gray-700" />
            </button>

            <div className="relative z-10 p-8 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', damping: 15 }}
                className="mb-4"
              >
                <img
                  src={logoCopa}
                  alt="Copa do Mundo 2026"
                  className="w-24 h-24 mx-auto object-contain"
                />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl sm:text-3xl font-anton text-action-red mb-2"
              >
                Lançamento Copa 2026
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="text-lg font-semibold text-gray-800 mb-1"
              >
                Data oficial: {LAUNCH_DATE_BR}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.38 }}
                className="text-base text-action-red font-semibold mb-4"
              >
                {urgencyLine}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="rounded-xl border-2 border-action-red/40 bg-gradient-to-br from-red-50 to-amber-50 p-4 mb-6 text-left"
              >
                <p className="text-gray-800 font-semibold leading-snug">
                  {
                    '🔥 Super Kit Copa: Álbum Brochura + 12 Envelopes por apenas R$ 77,00! (Nessa promo, o álbum sai DE GRAÇA e você ainda ganha 1 pacotinho de brinde!)'
                  }
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42 }}
                className="text-sm text-gray-600 mb-6 leading-relaxed"
              >
                Venda somente no balcão — sem entregas no momento. Venha ao
                Belenzinho!
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-3"
              >
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(event) => {
                    event.preventDefault()
                    openWhatsAppSmart()
                  }}
                  className="w-full bg-green-600 text-white font-bold py-4 px-6 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                >
                  <img
                    src={whatsappIconSrc}
                    alt=""
                    aria-hidden="true"
                    className="w-[22px] h-[22px] object-contain"
                  />
                  Reservar pelo WhatsApp
                </a>

                <button
                  type="button"
                  onClick={copyAddress}
                  className="w-full bg-action-red text-white font-bold py-4 px-6 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Copy size={20} />
                  {copied ? 'Endereço copiado!' : 'Copiar endereço'}
                </button>

                <button
                  type="button"
                  onClick={openMaps}
                  className="w-full bg-white text-action-red font-bold py-3 px-6 rounded-lg border-2 border-action-red hover:bg-action-red hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  <MapPin size={18} />
                  Como chegar
                  <ExternalLink size={16} />
                </button>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-sm text-gray-500 mt-4"
              >
                Clique para copiar o endereço • ESC para fechar
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CopaPopup
