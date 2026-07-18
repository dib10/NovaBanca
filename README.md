# Nova Banca

Landing page da **Nova Banca**, no Belenzinho (São Paulo), criada para apresentar a banca, seus serviços e a campanha de álbuns e figurinhas da Copa 2026. A experiência direciona o visitante para o mapa, ligação ou reserva pelo WhatsApp.

## Tecnologias

- **React 18** e **Vite** para a interface e o build;
- **Tailwind CSS** e PostCSS para estilos responsivos e componentes visuais reutilizáveis;
- **Framer Motion** para animações de entrada, hover, modal e FAQ;
- **Lucide React** para ícones;
- **React Helmet Async** para metadados da página;
- **vite-prerender-plugin** para gerar HTML estático no build;
- **Google Analytics (gtag)** para medição de acessos.

## Estrutura

```text
src/
├── assets/       imagens usadas pela interface
├── components/   seções e recursos visuais da página
├── data/         dados centralizados da Copa e imagens dos produtos
├── utils/        comportamento reutilizável, como o acesso ao WhatsApp
├── App.jsx       composição da landing page
├── main.jsx      entrada, pré-renderização e hidratação do React
└── index.css     base visual e classes reutilizáveis do Tailwind
public/           imagens com URL pública, robots.txt e recursos para SEO
```

Os componentes foram separados por responsabilidade: `Hero`, `Services`, `Products`, `Timeline`, `FAQ`, `Location`, `Footer`, `CopaPopup`, `FloatingWhatsApp` e `SEO`. Assim, cada seção pode ser alterada sem concentrar toda a página em um único arquivo.

`src/data/copa2026.js` é a fonte central de dados da campanha: produtos, preços, contato, endereço, links e data de lançamento. Esses dados alimentam tanto a interface quanto a marcação de SEO, reduzindo inconsistências.

> `estilo.css` e `animacao.js`, na raiz, são arquivos da versão estática anterior e não fazem parte da entrada atual do React. A aplicação em uso parte de `src/main.jsx`.

## SEO, dados estruturados e leitura por IA

A estratégia de descoberta da página foi construída com SEO técnico e conteúdo estruturado — a abordagem relacionada ao que muitas vezes é chamado de “SIL” neste contexto:

- HTML estático é pré-renderizado durante `npm run build` e depois hidratado pelo React no navegador. Isso entrega conteúdo já visível a buscadores, sem depender apenas da execução de JavaScript.
- `SEO.jsx` define título, descrição, Open Graph e Twitter Cards para resultados de busca e compartilhamentos.
- Dados estruturados **Schema.org em JSON-LD** descrevem a Nova Banca como `LocalBusiness` e os itens da campanha como `Product` com preço, disponibilidade, vendedor e imagem pública.
- `FAQ.jsx` publica também o schema `FAQPage`, permitindo que perguntas e respostas sejam compreendidas por mecanismos de busca e sistemas de IA.
- `robots.txt` permite o rastreamento e aponta para o sitemap publicado.

Essa combinação torna mais claro para buscadores e assistentes de IA o que é o negócio, onde ele fica, quais produtos oferece e como entrar em contato.

## Experiência e cuidados de implementação

- Layout responsivo para celular, tablet e desktop;
- imagens dos produtos com carregamento preguiçoso (`loading="lazy"`) e decodificação assíncrona;
- popup promocional da Copa com fechamento por botão, clique externo ou tecla `Esc`;
- botões de WhatsApp com tentativa de abrir o app no celular e fallback para a versão web;
- links externos abertos com `noopener noreferrer`;
- animações ativadas ao entrar na área visível, sem repetição desnecessária;
- atributos semânticos e `aria-label` nos controles relevantes.

## Executar localmente

```bash
npm install
npm run dev
```

Outros comandos:

```bash
npm run build   # gera a versão de produção em dist/
npm run preview # visualiza o build localmente
npm run lint    # verifica o código
```

## Manutenção rápida

Para atualizar a campanha, altere primeiro `src/data/copa2026.js`. Para trocar imagens da interface, use `src/assets/`; para imagens referenciadas diretamente pelo Schema.org, mantenha os arquivos correspondentes em `public/`, pois eles precisam ter URLs estáveis.
