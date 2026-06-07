# Premisas del proyecto Kaiori

Documento interno para guardar las premisas base del proyecto, su enfoque, criterios SEO, UX, conversion y estructura de crecimiento.

## Naturaleza del documento

- Uso interno del equipo.
- No publico.
- No indexable como seccion web.
- Debe vivir siempre fuera de `app/` y fuera de `public/`.

## Idea central

```txt
La experiencia real del cliente es donde se gana o se pierde la confianza.
```

Kaiori no vende teoria.
Kaiori no vende estetica.
Kaiori no vende informes genericos.

Kaiori convierte la experiencia real del cliente en decisiones que mejoran el negocio.

## Posicionamiento

Kaiori debe posicionarse como una marca B2B especializada en analizar la experiencia cliente real para negocios de hospitality, turismo y servicios.

Debe comunicar que ayuda a:

- detectar fricciones invisibles;
- mejorar claridad y confianza;
- aumentar conversion;
- reforzar reputacion;
- priorizar mejoras reales.

## Tono de marca

La comunicacion debe sentirse:

- profesional;
- clara;
- elegante;
- analitica;
- humana;
- premium sin ser fria;
- cercana sin ser informal;
- orientada a negocio.

Evitar:

- lenguaje turistico tipico;
- estetica de influencer o lifestyle;
- claims vacios;
- tecnicismos innecesarios;
- tono de agencia de marketing tradicional.

## Reglas de copy

Usar ideas como:

- Analizamos la experiencia desde el punto de vista del cliente real.
- Detectamos fricciones invisibles que afectan al negocio.
- Convertimos experiencia en mejora.
- No analizamos lo que dices, analizamos lo que vive tu cliente.

Evitar frases como:

- Somos la solucion definitiva.
- Elevamos tu negocio al siguiente nivel.
- Revolucionamos tu experiencia.
- Creamos experiencias inolvidables.

## Estructura web base

La estructura del proyecto debe ser clara y escalable.

Referencias principales:

```txt
/
|-- page
|-- services
|-- onsite-audit
|-- free-diagnosis
|-- sectors
|-- landings
|-- clients
|-- blog
|-- contact
`-- legal
```

## Route groups internos

### `(landings)`

- Sirve para agrupar landings internas en `app/(landings)`.
- No debe aparecer en la URL.
- Ejemplo: `app/(landings)/mi-landing/page.js` -> `/mi-landing`

### `(clients)`

- Sirve para agrupar paginas de clientes o propuestas en `app/(clients)`.
- No debe aparecer en la URL.
- Por defecto, las paginas de cliente no deben indexarse.
- Si una pagina de cliente pasa a ser publica, debe moverse a una seccion publica especifica.

## Reglas de indexacion

- El contenido interno no debe estar en `public/`.
- La documentacion interna no debe generar rutas publicas.
- Las paginas dentro de `(clients)` deben ser `noindex, nofollow` por defecto.
- Si algun dia existiera una URL publica `/docs`, debe seguir bloqueada para robots.

## Servicios y narrativa

Kaiori debe explicar con claridad:

- que hace;
- por que importa;
- que puede hacer el negocio para empezar.

Servicios principales:

- auditoria de experiencia cliente;
- diagnostico inicial;
- plan de accion y mejora;
- mystery guest o auditoria presencial;
- analisis de reputacion y conversion.

## UX y conversion

Prioridades:

- que el usuario entienda en menos de 5 segundos que hace Kaiori;
- que el CTA principal sea visible;
- que cada pagina explique claramente que incluye y que recibe el cliente;
- que el formulario sea breve y cualifique sin friccion innecesaria.

CTAs principales recomendados:

- Solicitar diagnostico gratuito
- Solicitar auditoria presencial
- Analizar mi experiencia cliente
- Quiero detectar oportunidades de mejora

Evitar CTAs genericos como:

- Enviar
- Mas informacion
- Contactar
- Saber mas

## Formularios

Campos base recomendados:

- nombre;
- email;
- empresa o negocio;
- web del negocio;
- tipo de negocio;
- servicio de interes;
- mensaje breve;
- consentimiento legal.

Reglas:

- conservar landing de origen;
- conservar pagina de cliente de origen, si aplica;
- capturar UTMs;
- mostrar errores claros;
- evitar pedir demasiados datos en el primer contacto.

## SEO tecnico

La base tecnica debe cuidar:

- App Router;
- metadatos por pagina;
- sitemap;
- robots;
- canonicals;
- Open Graph;
- JSON-LD;
- formularios seguros;
- optimizacion de imagenes;
- redirecciones 301;
- control de indexacion para contenido interno;
- URLs limpias.

## Rendimiento

Objetivos tecnicos:

- LCP por debajo de 2.5 s;
- INP por debajo de 200 ms;
- CLS por debajo de 0.1;
- imagenes optimizadas;
- evitar librerias innecesarias;
- cargar scripts de terceros solo cuando aporten valor real.

## Tracking

La medicion debe formar parte del desarrollo, no anadirse al final.

Eventos orientativos:

- `diagnosis_form_submit`
- `audit_request_click`
- `onsite_audit_form_submit`
- `client_page_view`
- `cta_click`
- `form_error`

## QA antes de publicar

Checklist minima:

- H1 unico;
- meta title correcto;
- meta description especifica;
- canonical;
- Open Graph;
- JSON-LD valido;
- enlaces internos;
- CTAs funcionando;
- formularios funcionando;
- eventos funcionando;
- responsive movil;
- rendimiento;
- accesibilidad basica;
- decision de indexacion correcta.

## Nota operativa

El archivo original con el volcado completo de premisas puede servir como fuente de ampliacion de este documento. Esta version deja asentadas las reglas base para trabajo diario dentro del repositorio.
