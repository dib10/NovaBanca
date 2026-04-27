import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { COPA_PRODUCTS, WHATSAPP_HREF, LAUNCH_DATE_BR } from '../data/copa2026'
import { PRODUCT_IMAGES_BY_ID } from '../data/copaProductImages'

const Products = () => {
  return (
    <section
      id="produtos-copa"
      className="py-20 px-4 bg-light-gray"
      aria-labelledby="produtos-copa-heading"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            id="produtos-copa-heading"
            className="section-title text-4xl font-bold mb-4 text-dark-gray"
          >
            Produtos Copa 2026
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lançamento oficial {LAUNCH_DATE_BR}. Preços para retirada no balcão
            no Belenzinho — sem entrega.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COPA_PRODUCTS.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col rounded-2xl border bg-white p-8 shadow-sm ${
                product.featured
                  ? 'border-action-red ring-2 ring-action-red/20 md:scale-[1.02]'
                  : 'border-gray-200'
              }`}
            >
              {product.featured && (
                <p className="text-xs font-bold uppercase tracking-wide text-action-red mb-2">
                  Oferta especial
                </p>
              )}
              {PRODUCT_IMAGES_BY_ID[product.id] && (
                <img
                  src={PRODUCT_IMAGES_BY_ID[product.id]}
                  alt={product.name}
                  width={280}
                  height={200}
                  className="max-h-48 w-full object-contain mx-auto rounded-lg mb-4 bg-gray-50"
                  decoding="async"
                  loading="lazy"
                />
              )}
              <h3 className="text-xl font-bold text-dark-gray mb-1">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500 mb-4">{product.subtitle}</p>
              <p className="mb-4">
                <em className="text-2xl font-anton text-action-red not-italic">
                  {product.priceDisplay}
                </em>
              </p>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-6">
                {product.description}
              </p>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-green-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-700 transition-colors mt-auto"
              >
                <MessageCircle size={20} aria-hidden />
                Falar no WhatsApp
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
