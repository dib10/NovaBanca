import { motion } from 'framer-motion'
import { MapPin, Clock, Phone, ExternalLink } from 'lucide-react'

const Location = () => {
  const handleDirections = () => {
    window.open('https://maps.google.com/?q=Largo+São+José+do+Belém,+61,+São+Paulo,+SP', '_blank')
  }

  const handleCall = () => {
    window.open('tel:+5511XXXX-XXXX', '_self')
  }

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Endereço e Horários</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Mapa */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-light-gray rounded-xl overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.1234567890123!2d-46.589222!3d-23.540857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMyJzI3LjEiUyA0NsKwMzUnMjEuMiJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
                width="100%" 
                height="400" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Nova Banca - Localização"
                className="w-full"
              ></iframe>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDirections}
              className="btn-primary mt-6 w-full inline-flex items-center justify-center gap-2"
            >
              <ExternalLink size={20} />
              Abrir no Google Maps
            </motion.button>
          </motion.div>

          {/* Informações */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Endereço */}
            <div className="card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-action-red rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dark-gray mb-3">Endereço</h3>
                  <div className="space-y-2 text-lg">
                    <p className="font-semibold">Largo São José do Belém, 61</p>
                    <p>Belenzinho</p>
                    <p>São Paulo - SP</p>
                    <p>CEP: 03057-040</p>
                    <p className="text-action-red font-medium text-sm mt-3">
                      Em frente à Padaria Belga
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Horários */}
            <div className="card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-action-red rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dark-gray mb-3">Horários de Funcionamento</h3>
                  <div className="space-y-3 text-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Segunda a Sexta:</span>
                      <span className="font-bold text-action-red">09:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Sábado:</span>
                      <span className="font-bold text-action-red">09:00 - 16:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Domingo:</span>
                      <span className="font-bold text-action-red">Fechado</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Feriados:</span>
                      <span className="font-bold text-action-red">09:00 - 15:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contato */}
            <div className="card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-action-red rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dark-gray mb-3">Dúvidas?</h3>
                  <p className="text-lg mb-4">Entre em contato conosco</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleCall}
                    className="btn-secondary inline-flex items-center gap-2"
                  >
                    <Phone size={20} />
                    Ligar para Dúvidas
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Location 