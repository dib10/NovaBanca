/** Dados oficiais Copa 2026 — Nova Banca (fonte única para UI e SEO) */

export const SITE_URL = 'https://novabanca.vercel.app'

export const OG_IMAGE_PATH = '/largo.jpeg'

/** Servidas em `public/` — URLs estáveis para Product.image no JSON-LD. */
export const SCHEMA_PRODUCT_IMAGE_CROMOS = '/schema-product-cromos.png'
export const SCHEMA_PRODUCT_IMAGE_ALBUM = '/schema-product-album.png'
/** Kit promocional (imagem própria do combo). */
export const SCHEMA_PRODUCT_IMAGE_KIT_BROCHURA = '/schema-product-kit-brochura.png'

export function absoluteSiteUrl(path) {
  const origin = SITE_URL.replace(/\/$/, '')
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${origin}${normalized}`
}

/** Mesmo número para WhatsApp e ligação (E.164 sem espaços). */
export const TELEPHONE_E164 = '+5511972240084'

export const WHATSAPP_HREF = 'https://wa.me/5511972240084'

/** Formato BR para texto na interface. */
export const PHONE_DISPLAY_BR = '(11) 97224-0084'

export const ADDRESS_FULL =
  'Largo São José do Belém, 61 - Belenzinho, São Paulo - SP'

export const MAPS_URL = 'https://maps.app.goo.gl/635Sgj2hZrR1pN8U9'

/** Lançamento oficial (Brasil) */
export const LAUNCH_DATE_ISO = '2026-05-01'

export const LAUNCH_DATE_BR = '01/05'

/** Preços — schema.org (string decimal) */
export const PRICE_PACOTINHO_SCHEMA = '7.00'
export const PRICE_ALBUM_SCHEMA = '24.90'
export const PRICE_KIT_SCHEMA = '77.00'

/** Preços — exibição */
export const PRICE_PACOTINHO_DISPLAY = 'R$ 7,00'
export const PRICE_ALBUM_DISPLAY = 'R$ 24,90'
export const PRICE_KIT_DISPLAY = 'R$ 77,00'
/** Referência se comprar álbum + envelopes “na soma” separada (contexto Panini). */
export const PRICE_KIT_REFERENCE_DISPLAY = 'R$ 108,90'
/** Fechamento do kit antes da promoção no balcão (84 → 77 = R$ 7 de desconto total). */
export const PRICE_KIT_PRE_PROMO_DISPLAY = 'R$ 84,00'

/**
 * Mensagem curta: desconto é no total do kit (84→77), não “1 envelope grátis”.
 */
export const KIT_PROMO_SHORT =
  `De ${PRICE_KIT_PRE_PROMO_DISPLAY} por ${PRICE_KIT_DISPLAY}: são ${PRICE_PACOTINHO_DISPLAY} de desconto no fechamento do combo — o mesmo valor do pacotinho. É desconto aplicado no kit inteiro; não é envelope avulso de graça.`

/**
 * Versão para FAQ/cards com comparação extra (itens separados).
 */
export const KIT_PROMO_LONG =
  `${KIT_PROMO_SHORT} Se você montar álbum + envelopes comprando cada parte separada, a soma de referência fica em torno de ${PRICE_KIT_REFERENCE_DISPLAY}.`

/** Card "Oferta especial" — seção Produtos Copa 2026 (somente este bloco de UI). */
export const KIT_PRODUCT_CARD_DESCRIPTION =
  '🔥 Nessa promo, o álbum sai DE GRAÇA e você ainda ganha 1 pacotinho de brinde! Garanta seu kit inicial com desconto exclusivo para retirada no balcão.'

export const COPA_PRODUCTS = [
  {
    id: 'pacotinho',
    name: 'Pacotinho de Figurinhas',
    subtitle: '7 cromos',
    priceSchema: PRICE_PACOTINHO_SCHEMA,
    priceDisplay: PRICE_PACOTINHO_DISPLAY,
    description:
      'Pacotinho avulso com 7 cromos da coleção oficial da Copa do Mundo 2026. O único pacote com chances reais de tirar as cobiçadas Legends, Douradas, Escudos e Brilhantes!',
    featured: false,
    schemaImagePath: SCHEMA_PRODUCT_IMAGE_CROMOS,
  },
  {
    id: 'album-brochura',
    name: 'Álbum Brochura',
    subtitle: 'Edição normal',
    priceSchema: PRICE_ALBUM_SCHEMA,
    priceDisplay: PRICE_ALBUM_DISPLAY,
    description:
      'Álbum brochura oficial Panini para você colar as figurinhas da Copa 2026.',
    featured: false,
    schemaImagePath: SCHEMA_PRODUCT_IMAGE_ALBUM,
  },
  {
    id: 'combo-kit',
    name: 'Combo Álbum + 12 envelopes',
    subtitle: 'Oferta especial',
    priceSchema: PRICE_KIT_SCHEMA,
    priceDisplay: PRICE_KIT_DISPLAY,
    description: KIT_PRODUCT_CARD_DESCRIPTION,
    featured: true,
    schemaImagePath: SCHEMA_PRODUCT_IMAGE_KIT_BROCHURA,
  },
]

/**
 * Linha de urgência até o dia 01/05 (calendário em America/São_Paulo).
 */
export function getLaunchUrgencyLine(now = new Date()) {
  const todayInSP = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Sao_Paulo',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(now)

  const [y, m, d] = todayInSP.split('-').map(Number)
  const [ly, lm, ld] = LAUNCH_DATE_ISO.split('-').map(Number)

  const todayUtc = Date.UTC(y, m - 1, d)
  const launchUtc = Date.UTC(ly, lm - 1, ld)
  const diffMs = launchUtc - todayUtc
  const days = Math.round(diffMs / (1000 * 60 * 60 * 24))

  if (days > 1) return `Faltam ${days} dias para ${LAUNCH_DATE_BR}!`
  if (days === 1) return `Falta 1 dia para ${LAUNCH_DATE_BR}!`
  if (days === 0) return `É hoje o lançamento (${LAUNCH_DATE_BR})!`
  return `Lançamento oficial ${LAUNCH_DATE_BR} — passou na banca e garantiu seu kit?`
}
