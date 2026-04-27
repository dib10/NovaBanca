import { Helmet } from 'react-helmet-async'
import {
  SITE_URL,
  OG_IMAGE_PATH,
  TELEPHONE_E164,
  ADDRESS_FULL,
  COPA_PRODUCTS,
  MAPS_URL,
  LAUNCH_DATE_BR,
  PRICE_PACOTINHO_DISPLAY,
  PRICE_KIT_DISPLAY,
} from '../data/copa2026'

const SITE_ORIGIN = SITE_URL.replace(/\/$/, '')
const OG_IMAGE_URL = `${SITE_ORIGIN}${OG_IMAGE_PATH}`

const businessId = `${SITE_ORIGIN}/#business`

const jsonLdGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': businessId,
      name: 'Nova Banca',
      description:
        'Banca no Belenzinho com figurinhas e álbum da Copa do Mundo 2026. Venda no balcão e encontros de troca na pracinha.',
      image: OG_IMAGE_URL,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Largo São José do Belém, 61 - Belém, São Paulo - SP, 03057-040',
        addressLocality: 'São Paulo',
        addressRegion: 'SP',
        postalCode: '03057-040',
        addressCountry: 'BR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -23.540857,
        longitude: -46.589222,
      },
      openingHours: ['Mo-Fr 09:00-18:00', 'Sa 09:00-16:00', 'PH 09:00-15:00'],
      telephone: TELEPHONE_E164,
      priceRange: '$$',
      currenciesAccepted: 'BRL',
      paymentAccepted: 'Cash, Credit Card',
      hasMap: MAPS_URL,
    },
    ...COPA_PRODUCTS.map((p) => ({
      '@type': 'Product',
      '@id': `${SITE_ORIGIN}/#product-${p.id}`,
      name: p.name + (p.id === 'pacotinho' ? ' (7 cromos)' : ''),
      description: p.description,
      offers: {
        '@type': 'Offer',
        priceCurrency: 'BRL',
        price: p.priceSchema,
        availability: 'https://schema.org/InStock',
        url: SITE_ORIGIN,
        seller: { '@id': businessId },
      },
    })),
  ],
}

const metaDescription =
  `Nova Banca Belenzinho: Copa 2026 Panini — lançamento ${LAUNCH_DATE_BR}. Pacotinho ${PRICE_PACOTINHO_DISPLAY}, kit álbum + 12 envelopes ${PRICE_KIT_DISPLAY}. Só balcão: ${ADDRESS_FULL}.`

const SEO = () => {
  return (
    <Helmet>
      <title>
        Nova Banca Belenzinho | Copa 2026 — figurinhas e álbum Panini
      </title>
      <meta name="description" content={metaDescription} />
      <meta
        name="keywords"
        content={`Panini Copa 2026, figurinhas Copa 2026, álbum Copa 2026, Belenzinho, Nova Banca, lançamento ${LAUNCH_DATE_BR}, Largo São José do Belém`}
      />

      <meta property="og:title" content="Nova Banca Belenzinho | Copa 2026 Panini" />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${SITE_ORIGIN}/`} />
      <meta property="og:image" content={OG_IMAGE_URL} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Nova Banca Belenzinho | Copa 2026 Panini" />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={OG_IMAGE_URL} />

      <script type="application/ld+json">{JSON.stringify(jsonLdGraph)}</script>
    </Helmet>
  )
}

export default SEO
