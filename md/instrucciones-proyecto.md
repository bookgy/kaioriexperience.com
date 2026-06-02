# Instrucciones del proyecto Kaiori Web

## Objetivo

Crear y mantener una landing page para Kaiori, una marca orientada a auditoria de experiencia, presencia digital y optimizacion para negocios de hospitality y sectores cercanos.

La pagina debe comunicar con claridad:

- Que Kaiori ayuda a entender lo que vive el cliente.
- Que detecta fricciones entre percepcion, experiencia y conversion.
- Que entrega mejoras claras, priorizadas y accionables.
- Que la identidad visual debe sentirse profesional, limpia y premium.

## Stack actual

- Astro.
- Tailwind CSS instalado con integracion oficial.
- Componentes `.astro` reutilizables.
- Iconos SVG inline.
- Sitemap con `@astrojs/sitemap`.
- Tipografia Poppins desde Google Fonts.

## Comandos

Instalar dependencias:

```bash
npm install
```

Arrancar la web en local:

```bash
npm run dev
```

URL habitual:

```text
http://127.0.0.1:4321/
```

## Archivos principales

- `src/pages/index.astro`: pagina principal.
- `src/components/`: componentes reutilizables de la landing.
- `src/layouts/BaseLayout.astro`: layout base con SEO.
- `src/data/site.js`: contenido estructurado de menus, servicios, metodo, sectores y testimonios.
- `src/styles/global.css`: estilos globales y directivas Tailwind.
- `astro.config.mjs`: configuracion de Astro, Tailwind y sitemap.
- `tailwind.config.mjs`: tema Tailwind con colores de marca.
- `package.json`: scripts y dependencias.
- `md/`: documentacion y notas del proyecto.
- `public/assets/brand/`: activos visuales de marca disponibles para la web.
- `src/assets/brand/`: copia de activos de marca para uso interno futuro.
- `public/favicon.svg`: icono principal del navegador.

## Identidad visual

Documento de referencia:

- `md/guia-marca.md`.

Paleta actual:

- Azul principal: `#214C9A`.
- Azul oscuro: `#193B77`.
- Azul medio: `#4A9BF9`.
- Turquesa: `#62DDD0`.
- Fondo claro: `#F7F8FC`.
- Superficies claras: `#FFFFFF`, `#F7F9FE`, `#E9E9EE`.

Tipografia:

- Poppins como familia principal.
- Pesos usados: regular, medium, semibold y bold.

Estilo:

- Limpio, corporativo y orientado a confianza.
- Inspiracion Material: superficies claras, jerarquia visual, sombras suaves y estados de hover.
- Bordes redondeados amplios en bloques principales.
- Uso de tarjetas para servicios, pasos, sectores y resultados.
- La informacion interna de marca vive en `md/` y no debe aparecer como una seccion comercial para clientes.

## Estructura de la landing

Secciones actuales:

- Header con logo y navegacion.
- Hero con propuesta principal, llamadas a la accion y visual abstracto de flujo sin imagen.
- Servicios generales.
- Auditoria fisica de experiencia como servicio especial.
- Metodo.
- Resultado / decisiones accionables.
- Sectores.
- CTA final.
- Contacto.

## Reglas de contenido

- Mantener el mensaje claro y directo.
- Priorizar beneficios concretos frente a frases genericas.
- Evitar textos excesivamente largos en tarjetas y botones.
- Usar un tono profesional, cercano y seguro.
- Mantener la idea central: experiencia real del cliente convertida en mejoras accionables.

## Reglas de edicion

- Tocar `src/data/site.js` para cambios de textos repetibles o listas.
- Tocar `src/components/` para cambios de layout por seccion.
- Tocar `src/layouts/BaseLayout.astro` si cambian SEO global, fuentes o metadatos.
- Tocar `src/styles/global.css` para reglas globales muy pequenas.
- Guardar briefings, textos aprobados y decisiones en esta carpeta `md/`.
- Antes de dar por terminado un cambio visual, revisar la pagina en navegador.

## Checklist antes de publicar

- La pagina arranca con `npm run dev`.
- No hay errores visibles en consola.
- El hero se entiende en el primer vistazo.
- Los botones y enlaces son claros.
- La version movil no rompe textos ni tarjetas.
- El formulario de contacto mantiene una lectura limpia.
- La paleta y el logo se ven consistentes en fondos claros y oscuros.
