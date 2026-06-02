# Kaiori Web

Web de Kaiori migrada a Next.js, React y CSS global personalizado.

## Stack

- Next.js
- React
- JavaScript / JSX
- CSS global personalizado en `app/globals.css`
- Next API Route en `/api/contact`
- Node.js `fs/promises` para guardar solicitudes
- Node 20 recomendado

## Comandos

```bash
npm install
npm run dev
npm run build
npm run start
```

El proyecto incluye `.nvmrc` con Node `20.14.0`. En este equipo los scripts ya priorizan `/usr/local/bin` para usar Node 20 al ejecutar Astro.

## Estructura

- `app/`: rutas Next.js.
- `app/components/`: componentes React reutilizables.
- `app/globals.css`: estilos globales sin Tailwind.
- `app/api/contact/route.js`: endpoint del formulario.
- `src/data/`: contenido estructurado reutilizado.

## Deploy

Preparado para Vercel con los scripts estándar de Astro.
