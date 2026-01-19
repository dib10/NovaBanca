import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqData = [
    {
        question: "Quando começa a Copa do Mundo 2026 e a venda do álbum?",
        answer: "A Copa começa em junho, mas a festa na Nova Banca começa antes! A previsão de chegada dos álbuns e figurinhas oficiais Panini é entre março e abril. Fique ligado no nosso Instagram para a data exata do lançamento."
    },
    {
        question: "Onde comprar o álbum da Copa 2026 no Belenzinho?",
        answer: "A Nova Banca é o ponto oficial da Panini no Belenzinho. Estamos no Largo São José do Belém, 61 (em frente à Padaria Belga). Temos estoque garantido de álbuns, pacotinhos e kits."
    },
    {
        question: "As figurinhas vendidas na Nova Banca são originais?",
        answer: "Com certeza! Somos revendedores oficiais da Panini no Belenzinho. Todos os nossos produtos (álbuns e pacotinhos) são 100% originais e lacrados. Não arrisque sua coleção, venha buscar os seus garantidos aqui."
    },
    {
        question: "Vocês vendem figurinhas avulsas (lista de faltantes)?",
        answer: "Nós vendemos os pacotinhos lacrados originais. Para conseguir suas figurinhas soltas e completar a lista, promovemos encontro de troca aos fins de semana. É a melhor forma de conseguir as difíceis!"
    },
    {
        question: "Qual o horário de troca de figurinhas na Nova Banca?",
        answer: "Nossos encontros de troca acontecem aos sábados (09h às 16h) e domingos (durante a época da Copa). Traga sua lista e venha trocar!"
    },
    {
        question: "Posso reservar álbuns ou pedir pelo WhatsApp?",
        answer: "Com certeza! Para garantir itens disputados como o Álbum Capa Dura ou Boxes Fechados (atacado), chame no nosso WhatsApp. Você reserva e só passa aqui para retirar."
    },
    {
        question: "Tem estacionamento perto da banca?",
        answer: "Sim! Estamos no Largo São José do Belém, que possui vagas ao redor da praça (Zona Azul) e é muito fácil de parar para uma compra rápida ou para ficar nos eventos de troca."
    },
    {
        question: "Vocês vendem o álbum capa dura e kits especiais?",
        answer: "Sim! Trabalhamos com a linha completa: Capa Cartão, Capa Dura (Silver/Gold se houver). Tudo 100% original Panini."
    },
    {
        question: "Quais as formas de pagamento?",
        answer: "Aceitamos PIX, cartões de crédito, débito e dinheiro."
    }
]

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null)

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    // Generate JSON-LD Schema
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
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
                    <h2 className="section-title text-4xl font-bold mb-4 text-dark-gray">Perguntas Frequentes</h2>
                    <p className="text-lg text-gray-600">
                        Tire suas dúvidas sobre a Copa, álbuns e nossa banca no Belenzinho.
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="border border-gray-200 rounded-lg overflow-hidden"
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 text-left focus:outline-none"
                            >
                                <span className="text-lg font-semibold text-dark-gray">{item.question}</span>
                                {activeIndex === index ? (
                                    <ChevronUp className="w-5 h-5 text-action-red" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-500" />
                                )}
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
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
