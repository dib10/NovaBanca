import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { renderToString } from 'react-dom/server'
import { HelmetProvider } from 'react-helmet-async'

import App from './App.jsx'
import './index.css'

function Root() {
  return (
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>
  )
}

function helmetHeadFromContext(helmetContext) {
  const helmet = helmetContext?.helmet
  if (!helmet) {
    return { lang: 'pt-BR', elements: new Set() }
  }

  const parts = [
    helmet.title?.toString?.(),
    helmet.priority?.toString?.(),
    helmet.meta?.toString?.(),
    helmet.link?.toString?.(),
    helmet.script?.toString?.(),
    helmet.noscript?.toString?.(),
    helmet.style?.toString?.(),
  ].filter(Boolean)

  return {
    lang: 'pt-BR',
    elements: new Set(parts),
  }
}

export async function prerender(/* data */) {
  const helmetContext = {}

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <App />
    </HelmetProvider>,
  )

  return {
    html,
    head: helmetHeadFromContext(helmetContext),
  }
}

if (typeof document !== 'undefined') {
  const container = document.getElementById('root')
  const app = <Root />

  if (container.firstChild) {
    hydrateRoot(container, app)
  } else {
    createRoot(container).render(app)
  }
}
