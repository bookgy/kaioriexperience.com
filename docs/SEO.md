# QA SEO Antes De Publicar

Estas instrucciones sirven para que cualquier desarrollador pueda configurar, revisar y validar que una página web cumple una base SEO técnica correcta antes de publicarla.

Toda página pública debe ser:

- Rastreable.
- Indexable.
- Rápida.
- Semántica.
- Mobile-first.
- Accesible.
- Segura.
- Medible.
- Sin duplicados técnicos.
- Preparada para conversión.

## 1. Configurar `robots.txt`

Crear o revisar:

```text
/robots.txt
```

Debe permitir recursos públicos necesarios:

- `/css/`
- `/js/`
- `/img/`
- `/fonts/`

Puede bloquear zonas privadas o sin valor SEO:

- `/admin/`
- `/login/`
- `/panel/`
- `/staging/`
- `/test/`
- `/private/`
- `/tmp/`

Ejemplo recomendado:

```txt
User-agent: *
Disallow: /admin/
Disallow: /login/
Disallow: /panel/
Disallow: /staging/
Disallow: /test/
Disallow: /private/

Sitemap: https://www.dominio.com/sitemap.xml
```

Revisar:

- Que existe `/robots.txt`.
- Que no bloquea CSS, JS ni imágenes.
- Que incluye la URL del sitemap.
- Que no bloquea páginas públicas importantes.

Bloquear publicación si:

- [ ] `robots.txt` bloquea toda la web.
- [ ] `robots.txt` bloquea páginas públicas.
- [ ] `robots.txt` bloquea CSS/JS necesarios para renderizar.
- [ ] No existe referencia al sitemap.

## 2. Configurar `sitemap.xml`

Crear un sitemap automático en:

```text
/sitemap.xml
```

Incluir solo URLs que:

- [ ] Devuelven 200.
- [ ] Son públicas.
- [ ] Son indexables.
- [ ] No tienen `noindex`.
- [ ] No redirigen.
- [ ] No son duplicadas.
- [ ] Tienen canonical correcto.

No incluir:

- [ ] URLs 404.
- [ ] URLs 301/302.
- [ ] URLs privadas.
- [ ] URLs con parámetros sin valor SEO.
- [ ] Resultados de búsqueda interna.
- [ ] Páginas filtradas sin control.
- [ ] Páginas con `noindex`.

Ejemplo:

```xml
<url>
  <loc>https://www.dominio.com/servicios/diseno-web/</loc>
  <lastmod>2026-05-26</lastmod>
</url>
```

Revisar:

- Abrir `/sitemap.xml`.
- Comprobar que carga correctamente.
- Comprobar que las URLs devuelven 200.
- Comprobar que no hay URLs duplicadas.
- Comprobar que no hay URLs con parámetros innecesarios.
- Enviar el sitemap a Google Search Console.

Bloquear publicación si:

- [ ] El sitemap no existe.
- [ ] El sitemap contiene errores 404.
- [ ] El sitemap contiene redirecciones.
- [ ] El sitemap contiene páginas `noindex`.
- [ ] El sitemap contiene URLs privadas.

## 3. Configurar versión única del dominio

Definir una única versión oficial de la web.

Ejemplos válidos:

```text
https://www.dominio.com/
```

o:

```text
https://dominio.com/
```

Pero solo una.

Si la versión oficial es:

```text
https://www.dominio.com/
```

entonces:

```text
http://dominio.com       -> 301 -> https://www.dominio.com/
http://www.dominio.com   -> 301 -> https://www.dominio.com/
https://dominio.com      -> 301 -> https://www.dominio.com/
```

Revisar:

- Que todas las variantes redirigen con 301.
- Que no hay cadenas de redirecciones.
- Que no hay bucles.
- Que los enlaces internos usan siempre la versión oficial.

Bloquear publicación si:

- [ ] La web carga en varias versiones.
- [ ] Hay mezcla entre www y no-www.
- [ ] Hay mezcla entre http y https.
- [ ] Hay redirecciones encadenadas.
- [ ] Hay enlaces internos apuntando a versiones no oficiales.

## 4. Configurar URLs limpias

Todas las URLs públicas deben ser limpias, semánticas y estables.

Correcto:

```text
/servicios/
/servicios/diseno-web/
/servicios/seo-tecnico/
/blog/guia-seo-tecnico/
/contacto/
```

Incorrecto:

```text
/page.php?id=123
/index.php?route=product/product&id=45
/servicios.php?id=8
/categoria?filter=abc&sort=desc
```

Reglas:

- [ ] Usar minúsculas.
- [ ] Evitar IDs técnicos.
- [ ] Evitar parámetros innecesarios.
- [ ] Evitar caracteres raros.
- [ ] Evitar fechas salvo que tengan sentido.
- [ ] Evitar cambios de URL una vez publicada.
- [ ] Usar guiones medios, no guiones bajos.

Bloquear publicación si:

- [ ] La URL contiene IDs técnicos innecesarios.
- [ ] La URL tiene parámetros indexables sin control.
- [ ] Existen varias URLs para el mismo contenido.
- [ ] La URL no es estable.

## 5. Configurar canonical

Todas las páginas indexables deben tener canonical.

Ejemplo:

```html
<link rel="canonical" href="https://www.dominio.com/servicios/diseno-web/">
```

Reglas:

- [ ] Una página indexable debe apuntar a sí misma.
- [ ] Una página duplicada debe apuntar a la principal.
- [ ] El canonical debe estar en el HTML inicial.
- [ ] El canonical no debe depender de JavaScript.
- [ ] El canonical debe usar la URL final con HTTPS.
- [ ] El canonical debe coincidir con la versión oficial del dominio.

Bloquear publicación si:

- [ ] No hay canonical.
- [ ] El canonical apunta a otra página por error.
- [ ] El canonical apunta a una URL con 404.
- [ ] El canonical apunta a una URL redirigida.
- [ ] El canonical contradice el sitemap.

## 6. Configurar titles y meta descriptions

Cada página indexable debe tener:

- [ ] Title único.
- [ ] Meta description única.
- [ ] Title alineado con el H1.
- [ ] Description orientada al clic.

Ejemplo:

```html
<title>Diseño web profesional para empresas | Nombre Marca</title>
<meta name="description" content="Creamos páginas web rápidas, optimizadas para SEO y preparadas para captar clientes. Solicita presupuesto personalizado.">
```

No usar:

```html
<title>Inicio</title>
<title>Servicios</title>
<title>Página nueva</title>
<title>Untitled</title>
```

Bloquear publicación si:

- [ ] No hay title.
- [ ] El title está duplicado.
- [ ] El title es genérico.
- [ ] No hay meta description en una página importante.
- [ ] La description está duplicada.

## 7. Configurar encabezados H1, H2 y H3

Reglas:

- [ ] Un solo H1 por página.
- [ ] El H1 debe describir el tema principal.
- [ ] Usar H2 para secciones principales.
- [ ] Usar H3 para subsecciones.
- [ ] No usar headings solo por estética.
- [ ] No convertir títulos importantes en imágenes.

Ejemplo correcto:

```html
<h1>Diseño web profesional para empresas</h1>

<h2>Qué incluye nuestro servicio</h2>
<h3>Diseño responsive</h3>
<h3>Optimización SEO técnica</h3>

<h2>Preguntas frecuentes</h2>
```

Bloquear publicación si:

- [ ] No hay H1.
- [ ] Hay varios H1 sin justificación.
- [ ] El H1 está oculto.
- [ ] Los encabezados se usan solo para diseño visual.
- [ ] La jerarquía está rota.

## 8. Configurar HTML semántico

Estructura recomendada:

```html
<header>
  <nav></nav>
</header>

<main>
  <section></section>
  <article></article>
</main>

<footer></footer>
```

Reglas:

- [ ] Debe existir un único `<main>`.
- [ ] El contenido principal debe estar dentro de `<main>`.
- [ ] El menú principal debe estar dentro de `<nav>`.
- [ ] El pie debe estar dentro de `<footer>`.
- [ ] No usar solo `div` para toda la estructura.

Bloquear publicación si:

- [ ] No hay estructura semántica mínima.
- [ ] El contenido principal no está en `main`.
- [ ] La navegación no es rastreable.
- [ ] La página depende de elementos no accesibles.

## 9. Configurar contenido en HTML inicial

Reglas:

- [ ] El H1 debe estar en el HTML inicial.
- [ ] Los textos principales deben estar en el HTML inicial.
- [ ] Los enlaces internos importantes deben estar en el HTML inicial.
- [ ] Los metadatos deben estar generados en servidor.
- [ ] No depender solo de JavaScript para contenido SEO crítico.

Evitar en páginas SEO:

```html
<div id="app"></div>
```

Recomendado:

- [ ] SSR.
- [ ] SSG.
- [ ] Prerender.
- [ ] Renderizado backend.
- [ ] Plantillas PHP/Blade/Twig/etc.

Bloquear publicación si:

- [ ] El HTML inicial está vacío.
- [ ] El contenido aparece solo tras JavaScript.
- [ ] Los metadatos se generan solo en cliente.
- [ ] Los enlaces internos importantes no existen en HTML.

## 10. Configurar enlaces internos rastreables

Correcto:

```html
<a href="/servicios/seo-tecnico/">Servicio de SEO técnico</a>
```

Incorrecto:

```html
<button onclick="location.href='/servicios/seo-tecnico/'">
  Clic aquí
</button>
```

Reglas:

- [ ] Usar `href` real.
- [ ] Usar anchor text descriptivo.
- [ ] No abusar de “clic aquí”.
- [ ] No dejar páginas importantes huérfanas.
- [ ] Añadir breadcrumbs si hay varios niveles.
- [ ] Enlazar páginas relacionadas entre sí.

Bloquear publicación si:

- [ ] Los enlaces importantes no usan `href`.
- [ ] Hay enlaces internos rotos.
- [ ] Hay páginas importantes huérfanas.
- [ ] Los enlaces apuntan a URLs no canónicas.

## 11. Configurar imágenes optimizadas

Reglas:

- [ ] Usar WebP o AVIF cuando sea posible.
- [ ] Servir la imagen al tamaño real necesario.
- [ ] Comprimir antes de subir.
- [ ] Añadir `width` y `height`.
- [ ] Añadir `alt` descriptivo.
- [ ] Usar nombres de archivo descriptivos.
- [ ] No cargar imágenes gigantes redimensionadas con CSS.
- [ ] No meter texto importante dentro de imágenes.

Ejemplo correcto:

```html
<img
  src="/img/diseno-web-responsive.webp"
  width="800"
  height="500"
  alt="Ejemplo de diseño web responsive en ordenador y móvil">
```

Bloquear publicación si:

- [ ] La imagen principal pesa demasiado.
- [ ] Faltan `width` y `height`.
- [ ] Faltan `alt` en imágenes relevantes.
- [ ] Se usan imágenes enormes redimensionadas con CSS.
- [ ] El hero afecta negativamente al LCP.

## 12. Configurar rendimiento básico

Reglas obligatorias:

- [ ] Activar compresión GZIP o Brotli.
- [ ] Activar caché de navegador.
- [ ] Minificar CSS.
- [ ] Minificar JS.
- [ ] Eliminar CSS no utilizado.
- [ ] Reducir JavaScript innecesario.
- [ ] Usar `defer` o `async` en scripts no críticos.
- [ ] Optimizar fuentes.
- [ ] Optimizar imágenes.
- [ ] Evitar sliders pesados.
- [ ] Evitar vídeos de fondo innecesarios.

Métricas a vigilar:

- [ ] LCP.
- [ ] INP.
- [ ] CLS.
- [ ] TTFB.
- [ ] Peso total de página.
- [ ] Número de requests.

Bloquear publicación si:

- [ ] La página carga muy lenta en móvil.
- [ ] El LCP es claramente deficiente.
- [ ] Hay saltos visuales importantes.
- [ ] Hay demasiado JavaScript innecesario.
- [ ] Hay recursos bloqueantes evitables.

## 13. Configurar mobile-first

Reglas:

- [ ] El contenido móvil debe ser equivalente al de escritorio.
- [ ] El menú debe ser usable con el dedo.
- [ ] Los botones deben tener tamaño suficiente.
- [ ] Los formularios deben ser cómodos.
- [ ] No debe haber scroll horizontal.
- [ ] No debe haber popups intrusivos.
- [ ] Los CTAs deben ser visibles.
- [ ] El texto debe ser legible.

Bloquear publicación si:

- [ ] Hay contenido importante que no aparece en móvil.
- [ ] Hay scroll horizontal.
- [ ] El menú no funciona bien.
- [ ] Los formularios son difíciles de usar.
- [ ] El banner de cookies tapa el contenido principal.
- [ ] Los botones son demasiado pequeños.

## 14. Configurar datos estructurados Schema

Tipos habituales:

- Organization.
- LocalBusiness.
- BreadcrumbList.
- Article.
- BlogPosting.
- Product.
- Offer.
- Review.
- FAQPage.

Ejemplo `Organization`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Nombre de la empresa",
  "url": "https://www.dominio.com",
  "logo": "https://www.dominio.com/logo.png"
}
</script>
```

Reglas:

- [ ] El schema debe coincidir con contenido visible.
- [ ] No marcar contenido falso.
- [ ] No marcar reseñas inventadas.
- [ ] No marcar FAQs si no están visibles.
- [ ] Validar antes de publicar.

Bloquear publicación si:

- [ ] El schema contiene errores críticos.
- [ ] El schema no coincide con el contenido visible.
- [ ] Hay valoraciones falsas.
- [ ] Hay FAQs marcadas pero no visibles.

## 15. Configurar accesibilidad básica

Reglas:

- [ ] Imágenes relevantes con `alt`.
- [ ] Formularios con `label`.
- [ ] Botones con texto comprensible.
- [ ] Contraste suficiente.
- [ ] Navegación por teclado.
- [ ] Foco visible.
- [ ] No depender solo del color.
- [ ] Tamaños de fuente legibles.

Bloquear publicación si:

- [ ] Formularios sin labels.
- [ ] Botones sin texto claro.
- [ ] Contraste insuficiente.
- [ ] No se puede navegar con teclado.
- [ ] El foco visual está oculto.

## 16. Configurar formularios seguros y medibles

Reglas técnicas:

- [ ] Validación en cliente.
- [ ] Validación en servidor.
- [ ] Sanitización de datos.
- [ ] Protección CSRF si aplica.
- [ ] Protección antispam.
- [ ] Mensajes de error claros.
- [ ] Confirmación tras envío.
- [ ] No perder datos si hay error.

Eventos de conversión recomendados:

- `form_submit`
- `lead_generated`
- `click_phone`
- `click_whatsapp`
- `click_email`
- `booking_completed`
- `purchase`
- `sign_up`
- `download`

Bloquear publicación si:

- [ ] El formulario no envía.
- [ ] El formulario no valida en servidor.
- [ ] El formulario no tiene protección antispam.
- [ ] El evento de conversión no se mide.
- [ ] El evento se dispara duplicado.

## 17. Configurar analítica

Herramientas mínimas:

- [ ] Google Analytics 4.
- [ ] Google Search Console.
- [ ] Google Tag Manager, si aplica.

Configurar:

- [ ] Page views.
- [ ] Eventos de conversión.
- [ ] Clicks en teléfono.
- [ ] Clicks en WhatsApp.
- [ ] Envíos de formularios.
- [ ] Compras o reservas, si aplica.
- [ ] UTMs para campañas.
- [ ] Consent Mode si aplica.

Bloquear publicación si:

- [ ] No hay medición básica.
- [ ] GA4 está duplicado.
- [ ] GTM está duplicado.
- [ ] Las conversiones no se registran.
- [ ] Search Console no está configurado.

## 18. Configurar seguridad básica

Reglas:

- [ ] HTTPS obligatorio.
- [ ] Redirección HTTP a HTTPS.
- [ ] Validación server-side en formularios.
- [ ] Sanitización de entradas.
- [ ] Protección CSRF cuando aplique.
- [ ] No mostrar errores técnicos.
- [ ] No exponer rutas internas.
- [ ] No exponer trazas.
- [ ] Mantener dependencias actualizadas.

Páginas legales visibles:

- [ ] Aviso legal.
- [ ] Política de privacidad.
- [ ] Política de cookies.
- [ ] Condiciones de uso, si aplica.
- [ ] Condiciones de contratación, si aplica.

Bloquear publicación si:

- [ ] La web no tiene HTTPS.
- [ ] Hay contenido mixto HTTP/HTTPS.
- [ ] Se muestran errores técnicos.
- [ ] Los formularios no validan en servidor.
- [ ] Faltan páginas legales básicas.

## 19. Configurar páginas de error

Crear página 404 personalizada.

Reglas:

- [ ] Debe devolver código HTTP 404.
- [ ] Debe tener diseño coherente.
- [ ] Debe permitir volver a zonas útiles.
- [ ] No debe indexarse.
- [ ] No debe redirigir automáticamente a la home.

Enlaces útiles en 404:

- Inicio.
- Servicios.
- Blog.
- Contacto.

Bloquear publicación si:

- [ ] La página 404 devuelve 200.
- [ ] Todos los errores redirigen a home.
- [ ] La página 404 se indexa.
- [ ] La página 404 no ofrece salida al usuario.

## 20. Configurar redirecciones

Correcto:

```text
/servicio-antiguo/ -> 301 -> /servicios/nuevo-servicio/
```

Incorrecto:

```text
/servicio-antiguo/ -> 301 -> /servicios/ -> 301 -> /servicios/nuevo-servicio/
```

Reglas:

- [ ] Usar 301 para cambios definitivos.
- [ ] Usar 302 solo para cambios temporales.
- [ ] Evitar cadenas.
- [ ] Evitar bucles.
- [ ] Redirigir a la página equivalente más cercana.
- [ ] No redirigir todo a la home.

Bloquear publicación si:

- [ ] Hay URLs antiguas importantes sin redirección.
- [ ] Hay cadenas de redirección.
- [ ] Hay bucles.
- [ ] Se redirigen páginas relevantes a la home sin criterio.

## 21. Checklist técnica antes de publicar una página

- [ ] URL limpia y definitiva.
- [ ] Código HTTP 200.
- [ ] No bloqueada por `robots.txt`.
- [ ] Incluida en sitemap si debe indexarse.
- [ ] Sin `noindex` si debe posicionar.
- [ ] Canonical correcto.
- [ ] Title único.
- [ ] Meta description única.
- [ ] Un solo H1.
- [ ] H2/H3 bien estructurados.
- [ ] HTML semántico.
- [ ] Contenido principal en HTML inicial.
- [ ] Enlaces internos con `href` real.
- [ ] Sin enlaces internos rotos.
- [ ] Imágenes comprimidas.
- [ ] Imágenes con `width` y `height`.
- [ ] Imágenes con `alt` descriptivo.
- [ ] Buena visualización móvil.
- [ ] Sin scroll horizontal.
- [ ] Scripts no críticos con `defer`/`async`.
- [ ] CSS/JS optimizados.
- [ ] Sin errores JavaScript críticos.
- [ ] Core Web Vitals revisados.
- [ ] Schema válido si aplica.
- [ ] Formularios funcionando.
- [ ] Eventos de conversión medidos.
- [ ] HTTPS correcto.
- [ ] Sin errores técnicos visibles.
- [ ] Páginas legales accesibles.

## 22. Checklist global antes de lanzar la web

- [ ] `robots.txt` correcto.
- [ ] `sitemap.xml` correcto.
- [ ] Dominio canónico definido.
- [ ] HTTP redirige a HTTPS.
- [ ] www/no-www unificado.
- [ ] No hay páginas públicas bloqueadas.
- [ ] No hay páginas importantes con `noindex`.
- [ ] No hay titles duplicados críticos.
- [ ] No hay H1 ausentes en páginas importantes.
- [ ] No hay errores 404 internos.
- [ ] No hay redirecciones encadenadas.
- [ ] No hay contenido crítico cargado solo por JS.
- [ ] No hay imágenes pesadas críticas.
- [ ] La web funciona bien en móvil.
- [ ] Search Console configurado.
- [ ] GA4 configurado.
- [ ] GTM configurado si aplica.
- [ ] Conversiones comprobadas.
- [ ] Formularios comprobados.
- [ ] Schema validado.
- [ ] Página 404 correcta.
- [ ] Páginas legales visibles.
- [ ] Backup previo al lanzamiento.

## 23. Comandos útiles para revisión técnica

Comprobar cabeceras HTTP:

```bash
curl -I https://www.dominio.com/
```

Comprobar redirecciones:

```bash
curl -IL http://dominio.com/
```

Comprobar `robots.txt`:

```bash
curl https://www.dominio.com/robots.txt
```

Comprobar sitemap:

```bash
curl https://www.dominio.com/sitemap.xml
```

Comprobar una página inexistente:

```bash
curl -I https://www.dominio.com/esta-url-no-existe/
```

Debe devolver:

```text
HTTP/2 404
```

## 24. Herramientas recomendadas para QA

- [ ] Google Search Console.
- [ ] PageSpeed Insights.
- [ ] Lighthouse.
- [ ] Screaming Frog.
- [ ] Rich Results Test.
- [ ] Schema Markup Validator.
- [ ] Chrome DevTools.
- [ ] GA4 DebugView.
- [ ] Google Tag Assistant.
- [ ] WebPageTest.

## 25. Criterios de bloqueo

Una página o web no debe publicarse si ocurre cualquiera de estos casos:

- [ ] No es rastreable.
- [ ] No es indexable cuando debería serlo.
- [ ] Tiene `noindex` por error.
- [ ] Está bloqueada en `robots.txt`.
- [ ] No tiene title.
- [ ] No tiene H1.
- [ ] Devuelve un código HTTP incorrecto.
- [ ] El contenido principal no aparece en HTML inicial.
- [ ] Tiene una URL inestable o duplicada.
- [ ] Tiene canonical incorrecto.
- [ ] No funciona bien en móvil.
- [ ] Carga muy lenta.
- [ ] Tiene errores graves de JavaScript.
- [ ] Los formularios no funcionan.
- [ ] No mide conversiones.
- [ ] No tiene HTTPS.
- [ ] Muestra errores técnicos.

## 26. Regla final para desarrollo

Antes de publicar, el desarrollador debe poder responder “sí” a estas preguntas:

- [ ] ¿Google puede rastrear esta página?
- [ ] ¿Google puede indexarla si debe posicionar?
- [ ] ¿La URL es limpia, única y estable?
- [ ] ¿El contenido principal está en el HTML inicial?
- [ ] ¿Tiene title, description, H1 y canonical correctos?
- [ ] ¿Los enlaces internos son rastreables?
- [ ] ¿Carga rápido en móvil?
- [ ] ¿Las imágenes están optimizadas?
- [ ] ¿Los formularios funcionan y son seguros?
- [ ] ¿Las conversiones se miden correctamente?
- [ ] ¿La página es accesible y usable?
- [ ] ¿La página devuelve el código HTTP correcto?

Si alguna respuesta es “no”, la página no está lista para producción.

## Apéndice Kaiori

### Rutas principales

- `/`
- `/servicios`
- `/diagnostico-gratuito`
- `/auditoria-presencial`
- `/metodologia`
- `/contacto`
- `/blog`
- `/aviso-legal`
- `/politica-privacidad`
- `/politica-cookies`
- `/terminos-condiciones`

### Keywords principales

- auditoría experiencia cliente
- auditoría customer experience
- experiencia cliente hospitality
- auditoría hotelera
- auditoría para alojamientos
- auditoría para restaurantes
- mystery guest hospitality
- mejora experiencia cliente
- reputación online hospitality
- optimización proceso de reserva
- customer journey hospitality

### Reglas de copy para Kaiori

- Priorizar claridad antes que densidad de keywords.
- Evitar tono demasiado comercial o promesas exageradas.
- Usar lenguaje B2B, profesional y directo.
- Relacionar experiencia cliente con confianza, claridad, satisfacción, reputación y decisión de reserva.
- Evitar parecer una agencia de marketing, una web turística o una página de influencers.
