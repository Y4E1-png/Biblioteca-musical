Español | [Read in English](README.md) 

# Biblioteca musical

Aplicación desarrollada con React para buscar canciones por artista, consultar sus detalles y crear una biblioteca musical personal.

Desarrollada como parte del programa de Desarrollo Front-End de EBAC para practicar la integración con una API, los componentes reutilizables, la navegación y la administración del estado de una aplicación.

La información musical se obtiene de la API de TheAudioDB.

## Funcionalidades

- Buscar canciones por nombre de artista.
- Consultar títulos, artistas, álbumes, imágenes y duración cuando estén disponibles.
- Abrir una página con los detalles de una canción.
- Agregar canciones a una biblioteca personal.
- Evitar que se agreguen canciones duplicadas.
- Eliminar canciones de la biblioteca.
- Mostrar mensajes de carga y error con una opción para reintentar.

La biblioteca personal se almacena en memoria y se reinicia al recargar la página.

## Tecnologías

- **HTML, CSS y JavaScript:** estructura, estilos y lógica de la aplicación.
- **React y React DOM:** componentes reutilizables y renderizado de la interfaz.
- **Redux Toolkit y React Redux:** administración de los resultados de búsqueda, estados de carga, errores y biblioteca personal.
- **React Router:** navegación entre la página de inicio y las páginas de detalles de canciones.
- **styled-components:** estilos de componentes, estilos globales y tema visual.
- **Axios:** peticiones HTTP a la API de TheAudioDB.
- **Create React App:** servidor de desarrollo y generación de la versión de producción mediante react-scripts.
- **Jest:** pruebas automatizadas.
- **React Testing Library:** pruebas de componentes e interacciones del usuario.
- **npm:** administración de dependencias y comandos del proyecto.

## Cómo ejecutar el proyecto

### Requisitos

- Node.js y npm instalados.
- Git instalado para clonar el repositorio.
- Conexión a Internet para instalar las dependencias y consultar la información musical de TheAudioDB.

### Instalación

1. Clona el repositorio y abre su carpeta:

```bash
git clone https://github.com/Y4E1-png/Biblioteca-musical.git
cd Biblioteca-musical
```

2. Instala las dependencias:

```bash
npm install
```

3. Inicia el servidor de desarrollo:

```bash
npm start
```

Abre en el navegador la dirección local que aparece en la terminal.

## Comandos disponibles

| Comando | Descripción |
|---|---|
| `npm start` | Inicia el servidor de desarrollo. |
| `npm test` | Ejecuta las pruebas automatizadas. |
| `npm run build` | Genera la versión de producción en la carpeta `build`. |

## Ejemplo de uso

La interfaz de la aplicación está en español.

1. Escribe el nombre de un artista, por ejemplo `Coldplay`, en el campo de búsqueda.
2. Presiona **Buscar** y espera los resultados.
3. Explora las canciones y su información disponible.
4. Presiona **Agregar a mi biblioteca** para añadir una canción a tu colección.
5. Encuentra la canción seleccionada en la sección **Mi biblioteca**.
6. Presiona **Eliminar** para quitar una canción de la biblioteca.
7. Presiona **Ver detalles** en un resultado de búsqueda para abrir la página de esa canción.

Utiliza el botón Atrás del navegador para regresar desde la página de detalles de una canción.

Si una petición falla, presiona **Reintentar** para intentarlo nuevamente. Las canciones, imágenes y demás información disponibles dependen de los datos que devuelve TheAudioDB.

## Integración con la API

La aplicación utiliza TheAudioDB para obtener información musical mediante Axios.

Las búsquedas por artista consultan primero sus álbumes y después las canciones asociadas con esos álbumes. Las páginas de detalles consultan la información mediante el identificador de la canción seleccionada.

Los resultados de búsqueda, estados de carga y errores se administran con Redux Toolkit. Las páginas de detalles utilizan un hook personalizado llamado `useFetch` para administrar sus peticiones.

## Pruebas

El proyecto incluye pruebas automatizadas con Jest y React Testing Library.

Las pruebas cubren:

- El renderizado de la aplicación y sus componentes principales.
- La escritura del nombre de un artista y el envío de una búsqueda.
- La presentación de los resultados de búsqueda.
- La incorporación de canciones a la biblioteca personal.
- La eliminación de canciones y el mensaje de biblioteca vacía.
- La presentación de detalles, mensajes de carga y ausencia de información de una canción.
- El reintento de una petición de detalles después de un error.

Para ejecutar las pruebas:

```bash
npm test
```

## Estructura del proyecto

```text
src/
├── __tests__/    Pruebas automatizadas
├── components/   Componentes de la interfaz y sus estilos
├── hooks/        Hooks personalizados para obtener datos
├── redux/        Store y slices de Redux
├── styles/       Estilos globales y tema visual
├── App.js        Organización de la aplicación y sus rutas
├── index.js      Punto de entrada de la aplicación
└── setupTests.js Configuración de las pruebas
```


## Autor

Desarrollado por **Yael Aguilar** como parte del programa de Desarrollo Front-End de EBAC.

[Perfil de GitHub](https://github.com/Y4E1-png)
