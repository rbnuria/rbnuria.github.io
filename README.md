# Presentaciones para GitHub Pages

Esta carpeta contiene una web estática con tres presentaciones interactivas y sus PDF. Las animaciones funcionan sin ejecutar Node.js en el servidor.

## Integración

Copia esta carpeta dentro de la carpeta que ya publica tu web, por ejemplo con el nombre `presentaciones`. Conserva todas las subcarpetas. La portada será `presentaciones/index.html`.

Los enlaces son relativos y las diapositivas usan rutas con `#/`, para que las diapositivas interiores puedan abrirse y recargarse en GitHub Pages sin errores 404.

Si tu web usa un generador (Jekyll, Hugo, Astro, etc.), integra estos archivos en su directorio de recursos estáticos. No sustituyas su workflow de publicación ni su página principal.

La ubicación exacta y los pasos de publicación quedan pendientes de identificar el repositorio de destino.

## Actualizaciones

Las fuentes editables siguen en los tres proyectos Slidev originales. Esta carpeta es el resultado compilado; no edites los archivos de `assets` a mano.
