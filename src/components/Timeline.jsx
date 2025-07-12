import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const timelineData = [
  {
    year: "O INÍCIO",
    title: "Nossa história começa no coração do Belenzinho",
    description: "Fincando raízes na comunidade e se tornando parte da história do bairro."
  },
  {
    year: "2019: A MODERNIZAÇÃO",
    title: "Uma nova cara para melhor atendimento",
    description: "Reformamos e modernizamos a banca para melhor atender nossos amigos e clientes."
  },
  {
    year: "HOJE: SEU PONTO DE PARADA",
    title: "Orgulho de servir a comunidade",
    description: "Somos o seu ponto de parada diária no vibrante centro comercial do Largo do Belém."
  }
]

const Timeline = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 px-4 bg-light-gray">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Nossa História</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            O Largo São José do Belém, localizado no coração da Zona Leste de São Paulo, é o nosso lar. 
            Como um importante centro comercial e ponto de referência do bairro, temos orgulho de fazer 
            parte desta história, ao lado da Paróquia São José de Belém e de tantos outros comércios e serviços.
          </p>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-metal-gray h-full"></div>
          
          <div className="space-y-12 lg:space-y-0">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline Item */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="card max-w-md mx-auto lg:mx-0"
                  >
                    <div className="text-action-red font-anton text-lg mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-bold text-dark-gray mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <div className="relative z-10">
                  <div className="w-6 h-6 bg-action-red rounded-full border-4 border-white shadow-lg"></div>
                </div>

                {/* Empty space for alignment */}
                <div className="flex-1 hidden lg:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline 