import imgCromos from '../assets/cromos-figurinhas.png'
import imgAlbum from '../assets/album_copa.png'
import imgKit from '../assets/kit-brochura.png'

/** Mapa por id de produto (cards, SEO já usa paths em copa2026). */
export const PRODUCT_IMAGES_BY_ID = {
  pacotinho: imgCromos,
  'album-brochura': imgAlbum,
  'combo-kit': imgKit,
}

/** Ordem fixa para faixas na página (Hero, FAQ, etc.). */
export const COPA_PRODUCT_STRIP = [
  { id: 'pacotinho', src: imgCromos, label: 'Pacotinho' },
  { id: 'album-brochura', src: imgAlbum, label: 'Álbum brochura' },
  { id: 'combo-kit', src: imgKit, label: 'Kit promo' },
]
