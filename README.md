# Nexus — Landing Page

Landing page construída a partir do design system **Nexus Electric** (dark cyberpunk-modernist, foco em desenvolvedores).

## Stack

- **React 18** + **Vite 5** (dev server rápido, HMR)
- **Tailwind CSS 3** com tokens do design system extendidos no `tailwind.config.js`
- **lucide-react** para ícones
- **Geist** (UI) + **JetBrains Mono** (code/labels) via Google Fonts

## Como rodar

```bash
npm install
npm run dev
```

O Vite sobe em `http://localhost:5173`. O flag `host: true` no `vite.config.js` também expõe na rede local (útil pra testar em outro dispositivo).

## Build de produção

```bash
npm run build
npm run preview
```

O output vai pra `dist/` — pode subir direto em Vercel, Netlify, Cloudflare Pages, S3+CloudFront, etc.

## Estrutura

```
nexus-electric/
├── index.html              # entry, fontes, favicon SVG inline, theme-color
├── tailwind.config.js      # tokens Nexus Electric (cores, tipografia, animações)
├── vite.config.js
├── postcss.config.js
└── src/
    ├── main.jsx            # bootstrap React
    ├── index.css           # @tailwind + utilities nx-* + keyframes
    └── App.jsx             # landing page completa (single-file)
```

## Decisões de design respeitando o spec

- **Shapes estritamente sharp**: zero `border-radius` em botões, cards, inputs, containers. Só `rounded-full` em blur blobs decorativos do background.
- **Tonal layers ao invés de shadows**: profundidade via shifts de `surface-container-*`.
- **Inner glow** em estados ativos via `box-shadow inset` em Electric Blue.
- **Scrollbar customizada** thin + dark, thumb fica Electric Blue no hover (definido em `index.css`).
- **Nav vertical** com indicador de barra Electric Blue na borda esquerda do item ativo.
- **Grid 12 colunas** com max-width 1440px, gutters de 24px.

## Deploy rápido (sugestões)

- **Vercel**: `vercel` (auto-detecta Vite)
- **Netlify**: drag-and-drop da pasta `dist/` ou conecta o repo
- **Cloudflare Pages**: build command `npm run build`, output dir `dist`
