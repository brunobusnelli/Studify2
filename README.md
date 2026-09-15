# Studify

## Integrantes

- Bruno Busnelli
- Franco Garcia

## Descripción del proyecto

Studify es una interfaz web orientada a estudiantes que permite organizar el estudio, visualizar estadísticas, administrar apuntes, planificar exámenes y utilizar técnicas de estudio como Pomodoro.

El proyecto fue desarrollado aplicando HTML5 y CSS3, utilizando Flexbox, CSS Grid, variables CSS y Responsive Design para adaptar la interfaz a computadora, tablet y celular.

## Tecnologías utilizadas

- HTML5
- CSS3
- Git
- GitHub

## ¿Dónde utilizamos Flexbox?

Flexbox fue utilizado principalmente en la navegación principal del sitio.

```css
nav ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}
```

`display: flex` permite organizar los enlaces del menú de manera flexible.

También utilizamos `flex-wrap: wrap` para permitir que los elementos bajen de línea si no hay suficiente espacio disponible.

En dispositivos móviles, mediante una Media Query, cambiamos la dirección del menú:

```css
nav ul {
    flex-direction: column;
}
```

De esta manera, en computadora el menú se muestra horizontal y en celular se muestra vertical.

## ¿Dónde utilizamos CSS Grid?

CSS Grid fue utilizado en la sección "Resumen de estudio", donde se muestran las horas estudiadas, la racha actual, las sesiones completadas y los apuntes guardados.

```css
.resumen-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
}
```

En computadora se muestran cuatro columnas.

En tablet el Grid cambia a dos columnas:

```css
.resumen-grid {
    grid-template-columns: repeat(2, 1fr);
}
```

Y en celular se muestra una sola columna:

```css
.resumen-grid {
    grid-template-columns: 1fr;
}
```

## ¿Qué variables CSS creamos?

Las variables CSS fueron creadas dentro de `:root` para reutilizar colores, espaciados, bordes y sombras en toda la página.

```css
:root {
    --color-primario: #5b5be7;
    --color-secundario: #7c3aed;
    --color-fondo: #f5f7fb;
    --color-blanco: #ffffff;
    --color-texto: #1f2937;
    --color-texto-suave: #6b7280;

    --radio-borde: 12px;
    --sombra: 0 4px 14px rgba(0, 0, 0, 0.08);
    --espaciado: 1rem;
}
```

Luego las utilizamos mediante la función `var()`.

Ejemplo:

```css
body {
    background-color: var(--color-fondo);
    color: var(--color-texto);
}
```

Esto permite modificar fácilmente el diseño desde un solo lugar.

## ¿Cómo implementamos el Responsive Design?

El Responsive Design fue implementado utilizando Media Queries.

Para tablets utilizamos:

```css
@media (max-width: 900px) {
    .resumen-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
```

Para celulares utilizamos:

```css
@media (max-width: 600px) {
    .resumen-grid {
        grid-template-columns: 1fr;
    }

    nav ul {
        flex-direction: column;
    }
}
```

También modificamos tamaños, márgenes, botones, tablas y espaciados para lograr que la página se adapte correctamente a diferentes tamaños de pantalla.

## Box Model

Durante el desarrollo utilizamos propiedades correspondientes al Box Model, como:

- `margin`
- `padding`
- `border`
- `box-sizing`

También utilizamos:

```css
* {
    box-sizing: border-box;
}
```

`box-sizing: border-box` permite que el padding y el borde formen parte del tamaño total del elemento.

## Unidades utilizadas

En los estilos utilizamos diferentes tipos de unidades CSS:

- `px`
- `%`
- `rem`
- `fr`

Por ejemplo, `rem` fue utilizado para espaciados y tamaños, `%` para anchos y `fr` para distribuir columnas mediante CSS Grid.

## HTML semántico

Se utilizaron etiquetas semánticas de HTML5 para organizar correctamente el contenido:

- `header`
- `nav`
- `main`
- `section`
- `article`
- `aside`
- `footer`

Esto mejora la estructura, accesibilidad y comprensión del contenido.

## Estrategias SEO implementadas

Se implementaron diferentes estrategias de SEO para mejorar la interpretación de la página por parte de los motores de búsqueda.

### 1. Título descriptivo

Se utilizó la etiqueta `<title>` con un texto relacionado directamente con el contenido del sitio.

```html
<title>Studify | Organización y técnicas de estudio</title>
```

Su objetivo es indicar claramente el tema principal de la página.

### 2. Meta description

Se agregó una descripción de la página utilizando:

```html
<meta name="description" content="Studify es una plataforma para organizar el estudio, planificar exámenes, utilizar la técnica Pomodoro y mejorar tus hábitos de aprendizaje.">
```

Su objetivo es describir brevemente el contenido de la página para los buscadores.

### 3. Idioma de la página

Se definió el idioma principal mediante:

```html
<html lang="es">
```

Esto ayuda a los navegadores y motores de búsqueda a identificar que el contenido está escrito en español.

### 4. HTML semántico

Se utilizaron etiquetas como `header`, `nav`, `main`, `section`, `article` y `footer`.

Esto permite organizar mejor la información y ayuda a los buscadores a comprender la estructura del contenido.

### 5. Jerarquía de encabezados

Se utilizaron correctamente etiquetas `h1`, `h2`, `h3` y `h4`.

El `h1` identifica el nombre principal del sitio y los demás encabezados organizan las diferentes secciones.

### 6. Enlaces descriptivos

Los enlaces utilizan textos que indican su función, por ejemplo:

```html
<a href="#pomodoro">Comenzar sesión</a>
```

Esto es más descriptivo que utilizar textos genéricos como "click aquí".

### 7. Meta robots

Se agregó:

```html
<meta name="robots" content="index, follow">
```

Esto indica a los motores de búsqueda que pueden indexar la página y seguir sus enlaces.

## Git y GitHub

El proyecto fue gestionado utilizando Git y GitHub.

Se trabajó principalmente con las siguientes ramas:

- `main`: contiene la versión estable del proyecto.
- `dev`: contiene el desarrollo del TP.

Durante el desarrollo se realizaron diferentes commits con mensajes claros y descriptivos.

Al finalizar el proyecto, los cambios realizados en `dev` se integrarán en `main` mediante un Pull Request.