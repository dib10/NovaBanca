import { Helmet } from 'react-helmet-async'

const SEO = () => {
  return (
    <Helmet>
      <title>Nova Banca: A sua conveniência diária no coração do Belenzinho</title>
      <meta name="description" content="Banca de jornal no Belenzinho. Notícias, mangás, refrigerantes e serviços. Largo São José do Belém, 61. Segunda a sexta das 09h às 18h, sábado das 09h às 16h, feriados das 09h às 15h, domingo fechado." />
      <meta name="keywords" content="banca de jornal, belenzinho, são paulo, notícias, mangás, conveniência, largo são josé do belém" />
      
      {/* Open Graph */}
      <meta property="og:title" content="Nova Banca: A sua conveniência diária no coração do Belenzinho" />
      <meta property="og:description" content="Mais que uma banca. O seu ponto de confiança para notícias, serviços e um bom dia." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://novabanca.vercel.app/" />
      <meta property="og:image" content="/src/assets/largo.jpeg" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Nova Banca: A sua conveniência diária no coração do Belenzinho" />
      <meta name="twitter:description" content="Mais que uma banca. O seu ponto de confiança para notícias, serviços e um bom dia." />
      
      {/* Local Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Nova Banca",
          "description": "Banca de jornal e conveniência no Belenzinho",
          "image": "/src/assets/largo.jpeg",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Largo São José do Belém, 61",
            "addressLocality": "São Paulo",
            "addressRegion": "SP",
            "postalCode": "03057-040",
            "addressCountry": "BR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -23.540857,
            "longitude": -46.589222
          },
          "openingHours": [
            "Mo-Fr 09:00-18:00",
            "Sa 09:00-16:00",
            "PH 09:00-15:00"
          ],
          "telephone": "+55-11-XXXX-XXXX",
          "priceRange": "$$",
          "currenciesAccepted": "BRL",
          "paymentAccepted": "Cash, Credit Card"
        })}
      </script>
    </Helmet>
  )
}

export default SEO 