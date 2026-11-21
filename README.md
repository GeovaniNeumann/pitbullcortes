# Pitbull Cortes — Landing Page

Next.js 14 (App Router) + TypeScript + Tailwind CSS. Sem dependências extras (animações via CSS + IntersectionObserver).

## Rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Antes de publicar

1. **Imagens** — coloque em `/public`:
   - `pithero.webp` (hero + og:image)
   - `pitlogoheader.webp` (header, seção Sobre, footer, favicon)
2. **Edite `lib/config.ts`**: links do Instagram/Facebook, horários e (se quiser) o texto da mensagem do WhatsApp.
3. **Preços** — `components/Services.tsx` (array `SERVICES`).
4. **Depoimentos** — `components/Testimonials.tsx`.
5. **Galeria** — `components/Gallery.tsx` (troque os placeholders por `<Image>`).
6. **Domínio** — `SITE_URL` em `app/layout.tsx`.
7. **Mapa** — a busca do Google Maps está em `lib/config.ts` (`MAP_QUERY`); ajuste a cidade se necessário.
