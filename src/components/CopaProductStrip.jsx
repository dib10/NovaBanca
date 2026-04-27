import { motion } from 'framer-motion'
import { COPA_PRODUCT_STRIP } from '../data/copaProductImages'

const sizeClasses = {
  hero: 'max-h-28 sm:max-h-32 md:max-h-36',
  inline: 'max-h-24 sm:max-h-28',
  compact: 'max-h-14 sm:max-h-16 md:max-h-20',
}

/**
 * Faixa com as 3 fotos oficiais Copa (pacotinho, álbum, kit).
 * variant: hero (landing), inline (Services), compact (FAQ, Timeline, Location).
 */
const CopaProductStrip = ({
  variant = 'inline',
  className = '',
}) => {
  const imgCls = sizeClasses[variant] ?? sizeClasses.inline

  return (
    <div
      className={`flex flex-wrap justify-center items-end gap-4 sm:gap-6 md:gap-8 ${className}`}
      role="group"
      aria-label="Produtos Copa 2026 na Nova Banca"
    >
      {COPA_PRODUCT_STRIP.map((item, index) => (
        <motion.figure
          key={item.id}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
          className="flex flex-col items-center text-center max-w-[120px] sm:max-w-[140px]"
        >
          <img
            src={item.src}
            alt={item.label}
            width={160}
            height={140}
            className={`w-auto ${imgCls} object-contain rounded-lg bg-white/90 shadow-md border border-gray-100`}
            loading="lazy"
            decoding="async"
          />
          <figcaption className="mt-2 text-xs sm:text-sm font-medium text-current">
            {item.label}
          </figcaption>
        </motion.figure>
      ))}
    </div>
  )
}

export default CopaProductStrip
