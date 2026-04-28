import { WHATSAPP_HREF } from '../data/copa2026'

const MOBILE_USER_AGENT_REGEX =
  /Android|iPhone|iPad|iPod|Windows Phone|IEMobile|Opera Mini|Mobile/i

const WHATSAPP_APP_URL = 'whatsapp://send?phone=5511972240084'

export function openWhatsAppSmart() {
  if (typeof window === 'undefined') return

  const isMobile = MOBILE_USER_AGENT_REGEX.test(navigator.userAgent)

  if (!isMobile) {
    window.open(WHATSAPP_HREF, '_blank', 'noopener,noreferrer')
    return
  }

  const openedAt = Date.now()
  window.location.href = WHATSAPP_APP_URL

  window.setTimeout(() => {
    // If app deep-link did not take over promptly, fallback to wa.me.
    if (Date.now() - openedAt < 1800) {
      window.location.href = WHATSAPP_HREF
    }
  }, 1200)
}
