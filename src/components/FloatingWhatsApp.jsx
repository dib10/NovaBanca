import { WHATSAPP_HREF } from '../data/copa2026'
import whatsappIcon from '../assets/whatsapp.png'
import { openWhatsAppSmart } from '../utils/openWhatsAppSmart'

const FloatingWhatsApp = () => {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(event) => {
        event.preventDefault()
        openWhatsAppSmart()
      }}
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 rounded-full shadow-lg transition-transform duration-200 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
    >
      <img
        src={whatsappIcon}
        alt="WhatsApp"
        className="w-11 h-11 sm:w-12 sm:h-12 object-contain"
      />
    </a>
  )
}

export default FloatingWhatsApp
