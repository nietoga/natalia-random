---
name: "Natalia, en esto invertí mi sábado"
description: "Una carta digital breve: explicación, pruebas reales, dominio propio y contacto personal."
colors:
  warm-paper: "#f3eee5"
  near-black-ink: "#171611"
  love-red: "#e44832"
  deployment-yellow: "#f2bf43"
  ownership-green: "#26745d"
  image-loading: "#dfd8cc"
  fish-photo-loading: "#2a2a25"
  paper-rule: "rgba(23,22,17,.2)"
typography:
  display: { fontFamily: "Manrope, sans-serif", fontSize: "clamp(3.25rem, 15vw, 6rem)", fontWeight: 600, lineHeight: 0.88, letterSpacing: "-.04em" }
  headline: { fontFamily: "Manrope, sans-serif", fontSize: "clamp(3rem, 13vw, 6rem)", fontWeight: 600, lineHeight: 0.9, letterSpacing: "-.04em" }
  body: { fontFamily: "Manrope, sans-serif", fontSize: "1.05rem", fontWeight: 400, lineHeight: 1.55 }
  technical-label: { fontFamily: "DM Mono, monospace", fontSize: ".68rem", fontWeight: 500, lineHeight: 1.2, letterSpacing: ".07em" }
rounded:
  none: "0"
  circle: "50%"
spacing:
  page-mobile: "20px"
  page-wide: "4vw"
  section-mobile: "90px"
  section-wide: "130px"
components:
  domain-proof: { backgroundColor: "{colors.warm-paper}", textColor: "{colors.near-black-ink}", typography: "{typography.technical-label}", rounded: "{rounded.none}", padding: "12px 14px" }
  technical-chip: { backgroundColor: "{colors.near-black-ink}", textColor: "{colors.warm-paper}", typography: "{typography.technical-label}", rounded: "{rounded.none}", padding: "9px 12px" }
---

# Design System: Natalia, en esto invertí mi sábado

## Overview

**Creative North Star: “El sábado puesto en línea.”**

Una carta móvil, directa y afectiva. El hero reduce la explicación a una línea y enseña una pista animada para comenzar a desplazarse. Inmediatamente después, una introducción de dos frases explica Proxmox y Coolify y da paso a las dos capturas reales. Una banda técnica compacta resume lo que quedó funcionando, la prueba verde confirma los dominios propios y el recorrido termina con el pez y una conclusión accionable por WhatsApp.

La interfaz toma vocabulario de despliegue —estado, mono, etiquetas y URLs literales— sin convertirse en dashboard, portafolio ni relato técnico extenso.

## Colors

- **Papel cálido** y **tinta casi negra** forman el mundo editorial base.
- **Verde de propiedad** ocupa únicamente la prueba literal de `slash.apps.nietoga.com/natalia` y `natalia.apps.nietoga.com`.
- **Amarillo** pertenece al foco, a la etiqueta de la banda y a la llamada final de WhatsApp; **rojo** a selección y caret.
- Los grises de carga reservan las capturas y la foto del pez mientras decodifican o si fallan.

Los colores se usan en superficies o señales con función clara. El amarillo final es una acción de contacto, no el antiguo capítulo narrativo de servicios. No hay degradados ni color decorativo gratuito.

## Typography

Manrope lleva titulares, cuerpo y voz personal. El hero usa el titular compacto “Natalia, en esto invertí mi sábado.” y una sola línea de apoyo. DM Mono se reserva para estado, órbitas, banda técnica, pies de captura, navegación y prueba de dominios.

Las etiquetas técnicas aparecen en mayúsculas. Las dos URLs conservan su forma literal, en minúsculas, y pueden partir en cualquier punto.

## Layout

La implementación es mobile-first: una columna, 20px de margen lateral y ritmo vertical compacto. El orden es fijo: hero, introducción breve de evidencia, dos capturas, banda técnica horizontal etiquetada, prueba verde de dominio, posdata del pez, conclusión y contacto amarillo por WhatsApp, y pie.

`html` y `body` usan `scroll-snap-type: y mandatory`. Los cinco hijos directos de `main` —`.portada`, `.evidencias`, `.prueba-dominio`, `.postdata` y `.contacto`— ocupan al menos `100svh`, se alinean al inicio y usan `scroll-snap-stop: always`, de modo que cada gesto se detiene en el siguiente capítulo. Cada capítulo intermedio ofrece además un botón `Seguir ↓` al borde inferior para marcar la pausa y avanzar de forma intencional. No queda contenido superior suelto entre puntos: la banda técnica cierra `.evidencias` y el footer cierra `.contacto`. Con movimiento reducido, tanto el desplazamiento suave como el scroll snapping se desactivan en `html` y `body`.

Desde 760px el margen pasa a 4vw; la introducción ocupa todo el ancho en dos columnas, las capturas forman dos columnas con la segunda desplazada 72px, la banda centra su etiqueta y seis elementos, y la prueba, posdata y contacto se dividen en dos columnas. Cada captura reserva `2184/2086` en móvil y `3456/2088` desde 760px; la foto del pez reserva siempre `3/4`.

## Elevation & Depth

El sistema es casi plano. Las capturas usan una sombra suave y rotaciones opuestas para sentirse como pruebas sobre papel; la foto del pez usa una sombra oscura sobria. No hay tarjetas flotantes.

## Shapes

Secciones, banda, etiquetas, captions y fichas de dominio tienen esquinas rectas. Los círculos se reservan para estado, núcleo, órbitas, pulso y las tres burbujas del pez.

## Components

### Hero

La navegación solo contiene el estado `sábado completado`, alineado a la derecha; no hay logo ni firma. El hero contiene el titular, la línea “Un servidor. Varios servicios. Todo en un sábado.”, el meme `sabado.jpeg` y una continuación discreta `Seguir ↓` inmediatamente después de la imagen.

En el borde inferior aparece el enlace `Desliza para ver` con una flecha lineal que oscila verticalmente y lleva a `#evidencias`. React escucha el primer evento de scroll con un listener pasivo y de una sola ejecución; después la pista se desvanece, baja 10px, pierde interacción y no vuelve durante la visita. Con movimiento reducido permanece visible pero sin oscilación hasta ese primer scroll.

### Evidencias de captura

La sección abre con “Primero monté Proxmox. Después, Coolify.” y explica en una frase que Proxmox aloja las máquinas virtuales y Coolify despliega y mantiene los servicios; luego enumera DDNS y los demás servicios. Le siguen las dos figuras. Cada `<picture>` sirve una variante vertical WebP de 700px en móvil y una panorámica de 1400px desde 760px, con carga diferida, decodificación asíncrona, reserva estable y `object-fit: cover`. El pie muestra `cargando…`, `No se pudo cargar` o `toca para ampliar ↗`.

El enlace cubre toda la captura y abre la panorámica completa en una pestaña nueva. El `figcaption` tiene `pointer-events: none`, por lo que tocar cualquier punto —incluido el caption— activa la ampliación.

### Banda técnica

Una única franja horizontal de tinta abre con la etiqueta amarilla `Quedaron funcionando:` y enumera `Proxmox`, `Coolify`, `DDNS`, `Enlaces cortos`, `Citas` y `Chatbot`. Es un `<div>` anidado al final de `.evidencias`, extendido hasta sus bordes mediante márgenes negativos; no crea un punto de snap propio. En móvil admite desplazamiento horizontal sin barra visible; desde 760px ocupa ambas columnas y centra los elementos.

### Prueba de dominios propios

Sobre verde, una flecha `↗` dirige la mirada hacia la barra del navegador y una ficha clara muestra literalmente `natalia.apps.nietoga.com`. Las filas conservan exactamente `slash.apps.nietoga.com/natalia` y `natalia.apps.nietoga.com`. Con movimiento reducido, la flecha queda estática.

### Posdata

La posdata oscura abre con “Ah, además…” y presenta con tono amistoso al pez limpiador Mantequilla, que trajo Kevin. La foto real `/pez-kevin.webp` conserva reserva `3/4`, carga diferida, texto alternativo y estados visibles. En móvil forma una columna; desde 760px usa `.8fr 1.2fr`. Tres burbujas discretas se inmovilizan con movimiento reducido.

### Contacto por WhatsApp

Una superficie amarilla final integra la conclusión “Eso fue mi sábado.” con una pastilla de alto contraste encima de “¿Alguna duda?”. La frase “Escríbeme por WhatsApp” usa el mismo resalte. Titular y CTA viven en `.contacto-contenido`; los estilos interactivos se aplican específicamente a `.contacto-contenido > a`. Enlaza a `https://wa.me/573127509912` en una pestaña nueva y muestra `312 750 9912`. En móvil, llamada y enlace se apilan; desde 760px forman dos columnas. El footer está anidado al fondo de este mismo capítulo mediante `margin-top: auto`, sin convertirse en otro punto de snap.

### Enlaces y foco

Los enlaces son texto subrayado. Hover engrosa el subrayado y foco visible usa contorno amarillo de 3px con 5px de separación.

## Do's and Don'ts

### Do

- Mantener la secuencia breve y limitar la introducción de evidencia a las dos frases implementadas.
- Mantener la tecnología en una sola banda horizontal compacta.
- Reservar DM Mono para evidencia técnica.
- Mantener exactas las dos URLs propias y la flecha hacia la barra.
- Mantener estados de carga/error, variantes responsive y ampliación mediante toda la superficie de cada captura.
- Conservar la navegación sin logo, la conclusión dentro del CTA y la posdata literal sobre Kevin y el pez.
- Conservar el CTA amarillo final, su URL `wa.me/573127509912` y el número visible `312 750 9912`.
- Preservar fallbacks sin scripting y para movimiento reducido.
- Mantener exactamente cinco hijos directos y puntos de snap: anidar la banda técnica al final de evidencia y el footer al final de contacto; desactivar snapping con movimiento reducido.
- Mostrar la pista `Desliza para ver` solo hasta el primer desplazamiento.

### Don't

- No reintroducir hitos, una cronología, texto intermedio entre capturas, el capítulo amarillo de servicios ni la marquesina.
- No convertir la carta en dashboard, portafolio, tarjetas o explicación extensa.
- No reemplazar las capturas reales por imágenes inventadas o un único recurso para todos los tamaños.
- No inventar métricas, horarios ni servicios.
- No añadir degradados, radios decorativos o sombras fuera de las pruebas visuales.
- No reintroducir logo, firma, corazón, capítulo de cierre ni `IntersectionObserver`; no recargar la posdata con decoración acuática.
