English | [Leer en español](README.es.md)

# Music Library

A React application for searching songs by artist, viewing song details, and building a personal music library.

Developed as part of the Front-End Development program at EBAC to practice API integration, reusable components, routing, and application state management.

Music information is retrieved from TheAudioDB API.

## Features

- Search for songs by artist name.
- View song titles, artists, albums, artwork, and duration when available.
- Open a dedicated page with song details.
- Add songs to a personal library.
- Prevent duplicate songs from being added.
- Remove songs from the library.
- Display loading messages and error messages with a retry option.

The personal library is stored in memory and resets when the page is refreshed.

## Technologies

- **HTML, CSS, and JavaScript:** page structure, styling, and application logic.
- **React and React DOM:** reusable components and rendering the interface.
- **Redux Toolkit and React Redux:** managing search results, loading states, errors, and the personal library.
- **React Router:** navigation between the home page and song detail pages.
- **styled-components:** component styles, global styles, and theming.
- **Axios:** HTTP requests to TheAudioDB API.
- **Create React App:** development server and production builds through react-scripts.
- **Jest:** automated tests.
- **React Testing Library:** testing components and user interactions.
- **npm:** dependency management and project commands.

## Getting started

### Requirements

- Node.js and npm installed.
- Git installed to clone the repository.
- An internet connection to install dependencies and retrieve music information from TheAudioDB.

### Installation

1. Clone the repository and open its folder:

```bash
git clone https://github.com/Y4E1-png/Biblioteca-musical.git
cd Biblioteca-musical
```

2. Install the dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

Open the local address displayed in the terminal.

## Available commands

| Command | Description |
|---|---|
| `npm start` | Starts the development server. |
| `npm test` | Runs the automated tests. |
| `npm run build` | Generates the production version in the `build` folder. |

## Usage example

The application interface is in Spanish.

1. Enter an artist's name, such as `Coldplay`, in the search field.
2. Click **Buscar** and wait for the results.
3. Browse the songs and their available information.
4. Click **Agregar a mi biblioteca** to add a song to your collection.
5. Find the selected song in the **Mi biblioteca** section.
6. Click **Eliminar** to remove a song from the library.
7. Click **Ver detalles** on a search result to open its song detail page.

Use your browser's Back button to return from a song detail page.

If a request fails, click **Reintentar** to try again. Available songs, images, and metadata depend on the information returned by TheAudioDB.

## API integration

The application uses TheAudioDB to retrieve music information through Axios.

Artist searches first retrieve the artist's albums and then the tracks associated with those albums. Song detail pages request information using the selected song's ID.

Search results, loading states, and errors are managed with Redux Toolkit. Song detail pages use a custom `useFetch` hook to manage their requests.

## Tests

The project includes automated tests using Jest and React Testing Library.

The tests cover:

- Rendering the application and its main components.
- Entering an artist's name and submitting a search.
- Displaying search results.
- Adding songs to the personal library.
- Removing songs and displaying an empty library message.
- Displaying song details, loading messages, and missing details.
- Retrying a song detail request after an error.

To run the tests:

```bash
npm test
```

## Project structure

```text
src/
├── __tests__/    Automated tests
├── components/   Interface components and their styles
├── hooks/        Custom hooks for data fetching
├── redux/        Redux store and slices
├── styles/       Global styles and theme
├── App.js        Application layout and routes
├── index.js      Application entry point
└── setupTests.js Testing configuration
```


## Author

Developed by **Yael Aguilar** as part of the Front-End Development program at EBAC.

[GitHub profile](https://github.com/Y4E1-png)
