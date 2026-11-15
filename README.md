# Corgi VPN

App web gratuita con mascota corgi animada.

## Estructura

- `public/` → sitio estático (lo que Vercel publica)
- `scripts/dev-server.js` → servidor local de desarrollo
- `vercel.json` → sin build, `outputDirectory: public`

## Local

```bash
npm run dev
# http://localhost:3000
```

## Vercel

Framework Preset: **Other**. Sin Build Command, sin Install Command, Output Directory `public` (ya está definido en `vercel.json`).
Si el deploy pide login, desactivá *Settings → Deployment Protection → Vercel Authentication* o usá el dominio de producción.
