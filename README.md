# Corgi VPN 🐶🛡️

App web **gratuita** con un corgi guardián. Sin cuenta, sin anuncios, sin pago.

## Qué hace
- Consulta el catálogo público y gratuito de **VPN Gate** (Universidad de Tsukuba).
- Busca, filtra y ordena servidores por país, latencia, velocidad, protocolo o puntuación.
- Guarda favoritos y registro de actividad **solo en tu dispositivo**.
- Descarga configuraciones **OpenVPN reales (.ovpn)** desde VPN Gate.
- Incluye una **demo local** de la experiencia de conexión (no cifra tu tráfico).
- Mascota animada: dormido cuando está desconectado; slow-motion entre poses al conectar.
- Guía paso a paso para conectar de verdad con **OpenVPN Connect** (gratis).

## Importante
Un navegador no puede crear una VPN del sistema por sí solo. Corgi VPN te consigue la configuración real y te guía; la conexión la realiza OpenVPN Connect. Los servidores de VPN Gate son voluntarios: revisa su política de registro y úsalos con precaución.

## Correr en local
```bash
node server.js
# abre http://localhost:3000
```
Requiere Node.js 18+. No necesita dependencias npm.

## Desplegar en Vercel
1. Conectá este repositorio en [vercel.com](https://vercel.com).
2. Framework preset: **Other**.
3. Build command: dejar vacío (o `node build.js` si querés regenerar).
4. Output: raíz del proyecto.
5. Deploy.

La UI y la demo del corgi funcionan en estático. Las rutas `/api/*` usan el `server.js` como función serverless cuando Vercel las resuelve.

## Archivos
- `index.html` — app completa (CSS/JS inline + catálogo de respaldo).
- `server.js` — servidor estático + API de catálogo/descarga.
- `styles.css`, `app.js` — fuentes de la interfaz (el build las incrusta).
- `build.js` — regenera `index.html` inline.
- `data/servers.json` — catálogo de respaldo sin conexión.
- `vercel.json` — configuración para Vercel.

## Privacidad
La app no envía tu historial a servidores propios. Solo consulta el catálogo público de VPN Gate y descarga las configuraciones que tú pides. Favoritos, ajustes y actividad se guardan en `localStorage` y puedes borrarlos desde Ajustes.
