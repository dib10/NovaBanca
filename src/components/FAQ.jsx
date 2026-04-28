import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { ChevronDown, ChevronUp } from 'lucide-react'
import {
  ADDRESS_FULL,
  LAUNCH_DATE_BR,
  PRICE_ALBUM_DISPLAY,
  PRICE_PACOTINHO_DISPLAY,
  WHATSAPP_HREF,
  PHONE_DISPLAY_BR,
  KIT_PROMO_LONG,
} from '../data/copa2026'

const faqData = [
  {
    question:
      'Quando é o lançamento oficial dos produtos da Copa 2026 na Nova Banca?',
    answer: `O lançamento oficial está marcado para 1º de maio (${LAUNCH_DATE_BR}). É nessa data que intensificamos a disponibilidade dos produtos Panini da Copa no nosso balcão — compareça ou combine pelo WhatsApp.`,
  },
  {
    question: 'Quanto custam o pacotinho e o álbum brochura?',
    answer: `Pacotinho avulso (7 cromos): ${PRICE_PACOTINHO_DISPLAY}. Álbum brochura (edição normal): ${PRICE_ALBUM_DISPLAY}. Confira também o kit promocional abaixo.`,
  },
  {
    question: 'Qual é a oferta do kit (combo)?',
    answer: `Para o kit com álbum brochura e 12 envelopes: ${KIT_PROMO_LONG}`,
  },
  {
    question: 'Onde compro e vocês entregam?',
    answer: `Somente venda física no balcão: ${ADDRESS_FULL}. No momento não realizamos entregas — você retira na banca.`,
  },
  {
    question: 'Onde e quando acontecem os encontros de troca?',
    answer:
      'Os encontros de troca de figurinhas ocorrem aos finais de semana na pracinha em frente à banca. Leve suas repetidas e sua lista de faltantes!',
  },
  {
    question: 'Onde achar figurinhas originais da Copa 2026 no Belenzinho?',
    answer:
      'Na Nova Banca, localizada no Largo São José do Belém, 61. Nós somos revendedores oficiais e trabalhamos apenas com pacotinhos e álbuns 100% originais e lacrados da Panini. Fuja de falsificações na internet e garanta seu material oficial direto no nosso balcão.',
  },
  {
    question: 'Quantas figurinhas vêm em cada pacotinho da Copa do Mundo 2026?',
    answer:
      'Para o álbum oficial da Copa do Mundo FIFA 2026 da Panini, cada envelope contém exatamente 7 cromos (figurinhas). Na Nova Banca, você encontra os pacotes originais avulsos por R$ 7,00 cada, prontos para você abrir e completar sua coleção!',
  },
  {
    question: 'Qual banca vai vender figurinhas e o álbum da Copa 2026 no Belenzinho?',
    answer:
      'A Nova Banca é o seu ponto de venda oficial no Belenzinho! Nós teremos estoque completo do álbum oficial Panini e dos pacotinhos de figurinhas a partir do lançamento em 01/05. Estamos localizados bem no coração do bairro, no Largo São José do Belém, 61. Passe aqui ou garanta o seu kit reservando pelo WhatsApp!',
  },
  {
    question: 'Quantas figurinhas tem o álbum da Copa do Mundo 2026?',
    answer:
      'Esta edição será a maior de todos os tempos! O álbum completo da Copa de 2026 exige 980 figurinhas para ser preenchido. Ao longo de suas 112 páginas, você vai colar cromos das 48 seleções participantes, além de brilhantes, escudos e mascotes especiais. É um desafio e tanto, e a Nova Banca está aqui para te ajudar nessa jornada!',
  },
  {
    question: 'Posso reservar pelo WhatsApp?',
    answer: `Sim. WhatsApp ${PHONE_DISPLAY_BR}: ${WHATSAPP_HREF}. Use para combinar reserva ou tirar dúvidas antes de vir ao balcão.`,
  },
  {
    question: 'Quais formas de pagamento vocês aceitam?',
    answer:
      'Aceitamos PIX, cartões de crédito e débito e dinheiro. Confirme no balcão se houver novidade pontual.',
  },
  {
    question: 'Tem estacionamento perto?',
    answer: `Estamos no Largo São José do Belém, com vagas ao redor (Zona Azul) para uma parada rápida na banca ou nos encontros na pracinha.`,
  },
]

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <section className="py-20 px-4 bg-white">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-4xl font-bold mb-4 text-dark-gray">
            Perguntas frequentes
          </h2>
          <p className="text-lg text-gray-600">
            Preços, lançamento em {LAUNCH_DATE_BR}, kit promocional e como nos
            encontrar no Belenzinho.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                type="button"
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-action-red"
              >
                <span className="text-lg font-semibold text-dark-gray pr-4">
                  {item.question}
                </span>
                {activeIndex === index ? (
                  <ChevronUp className="w-5 h-5 shrink-0 text-action-red" />
                ) : (
                  <ChevronDown className="w-5 h-5 shrink-0 text-gray-500" />
                )}
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 bg-white border-t border-gray-100 text-gray-600 leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
