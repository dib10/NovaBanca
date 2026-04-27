import { motion } from 'framer-motion'
import { Newspaper, BookOpen, Coffee } from 'lucide-react'

const services = [
  {
    icon: Newspaper,
    title: "Notícias do Mundo",
    description: "Jornais, revistas e as últimas notícias para você se manter informado"
  },
  {
    icon: BookOpen,
    title: "Cultura Pop & Mangás",
    description: "Mangás, quadrinhos e cultura pop para os fãs de entretenimento"
  },
  {
    icon: Coffee,
    title: "Pausa Rápida",
    description: "Refrigerantes, água e bebidas para sua pausa diária"
  }
]

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Tudo o que você precisa, em um só lugar
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="card text-center group"
            >
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-light-gray rounded-full flex items-center justify-center group-hover:bg-action-red transition-colors duration-300">
                  <service.icon 
                    size={40} 
                    className="text-dark-gray group-hover:text-white transition-colors duration-300" 
                  />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-dark-gray mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services 