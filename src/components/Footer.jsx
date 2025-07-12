import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-dark-gray text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-anton text-2xl mb-4">NOVA BANCA</h3>
            <p className="text-gray-300 mb-6 max-w-md mx-auto">
              Seu ponto de confiança para notícias, serviços e um bom dia no coração do Belenzinho.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="border-t border-gray-700 pt-6"
          >
            <p className="text-gray-400 text-sm">
              © 2025 Nova Banca. Todos os direitos reservados.
            </p>
            <p className="text-gray-500 text-xs mt-2 flex items-center justify-center gap-1">
              Feito com <Heart size={12} className="text-action-red" /> no Belenzinho
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 