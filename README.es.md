# UR TUNES

[English](README.md) | **Español**

UR TUNES es una aplicación de descubrimiento musical y biblioteca personal desarrollada con React. Busca un artista, explora sus canciones, consulta sus detalles y guarda tus favoritas en una biblioteca que se conserva después de recargar la página.

Este proyecto se desarrolló como parte del programa de Programador Front-End de EBAC. La interfaz de la aplicación está en español.

[Demo en línea](https://urtunes.web.app)

## Funcionalidades

- Busca canciones por artista mediante TheAudioDB.
- Muestra resultados con la portada del álbum, el título de la canción, el artista, el álbum y la duración.
- Permite abrir una página de detalles de la canción y regresar a la vista principal.
- Agrega canciones a una biblioteca personal, evita duplicados y permite eliminar canciones guardadas.
- Recupera la biblioteca desde el `localStorage` del navegador cuando se inicia la aplicación.
- Presenta estados de carga, vacíos y de error, con opciones para reintentar las solicitudes fallidas.
- Ofrece una interfaz adaptable con tema oscuro, acentos cálidos y diseños diferentes para los resultados de búsqueda y las canciones guardadas.
- Incluye controles con etiquetas accesibles e indicadores visibles de foco al navegar con el teclado.

## Tecnologías

| Área | Herramientas |
| --- | --- |
| Interfaz de usuario | React, styled-components |
| Gestión del estado | Redux Toolkit, React Redux |
| Enrutamiento | React Router |
| Solicitudes HTTP | Axios |
| Pruebas | Jest, React Testing Library |
| Desarrollo y compilación | Create React App / react-scripts |

## Instalación y ejecución

Necesitas tener Node.js y npm instalados en tu computadora.

```bash
git clone https://github.com/Y4E1-png/Biblioteca-musical.git
cd Biblioteca-musical
npm ci
npm start
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador. Se requiere conexión a internet para consultar los datos musicales y cargar las portadas.

## Uso

1. Escribe el nombre de un artista en el campo de búsqueda y selecciona el icono de lupa.
2. Explora las canciones y selecciona **Agregar a mi biblioteca** para guardar una canción.
3. Selecciona el botón de tres puntos de un resultado para abrir su página de detalles.
4. Usa la flecha de regreso para volver a la vista principal.
5. Elimina una canción guardada mediante el botón **×** de su tarjeta en la biblioteca.

La biblioteca se guarda bajo la clave `biblioteca-musical` en `localStorage`. Pertenece al navegador y a la dirección del sitio que se están utilizando. Los resultados de búsqueda se mantienen en memoria, mientras que las canciones guardadas se conservan entre visitas.

Los datos musicales y las portadas provienen de [TheAudioDB](https://www.theaudiodb.com/). La información disponible depende de la respuesta de la API.

## Pruebas

Ejecuta las pruebas en modo interactivo, con seguimiento de cambios:

```bash
npm test
```

Para ejecutarlas una sola vez:

```bash
npm test -- --watchAll=false --runInBand
```

Las pruebas de la aplicación cubren el encabezado, el formulario de búsqueda, los estados de los resultados, las acciones de la biblioteca, la prevención de duplicados y los estados de carga y reintento de los detalles de una canción.

## Compilación para producción

```bash
npm run build
```

Los archivos de producción se generan en el directorio `build/`.

Al publicar la aplicación, configura el alojamiento para servir `index.html` en las rutas gestionadas por el navegador, como `/song/:id`. Esto permite abrir directamente las páginas de detalles o recargarlas. La configuración actual de compilación supone que la aplicación se aloja en la raíz de un dominio.

## Estructura del proyecto

```text
public/             Plantilla HTML, favicon y manifiesto de la aplicación
src/
  assets/           Recursos de marca
  components/       Componentes del encabezado, búsqueda, biblioteca y detalles
  hooks/            Hook reutilizable para consultar datos
  redux/            Store y estados de búsqueda y biblioteca
  styles/           Estilos globales y tema
  __tests__/        Pruebas de componentes y de integración
  App.js            Rutas principales de la aplicación
  index.js          Punto de entrada y proveedores de la aplicación
```

## Autor

**Yael Aguilar**

- [GitHub](https://github.com/Y4E1-png)
- [LinkedIn](https://www.linkedin.com/in/dyael-aguilar)
