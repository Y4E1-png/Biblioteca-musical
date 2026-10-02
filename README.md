# UR TUNES

**English** | [Español](README.es.md)

UR TUNES is a music discovery and personal library application built with React. Search for an artist, explore their songs, view track details, and save your favorites in a library that stays available after a page reload.

This project was developed as part of the EBAC Front-End Developer program. The application interface is in Spanish.

## Features

- Search for songs by artist using TheAudioDB.
- Browse results with album artwork, song titles, artists, albums, and track durations.
- Open a dedicated song detail page and return to the main view.
- Add songs to a personal library, prevent duplicate entries, and remove saved songs.
- Restore the library from browser `localStorage` when the application loads.
- Display loading, empty, and error states, with retry actions for failed requests.
- Use a responsive dark interface with warm accents and distinct layouts for search results and saved songs.
- Navigate controls with accessible labels and visible keyboard focus indicators.

## Tech Stack

| Area | Tools |
| --- | --- |
| User interface | React, styled-components |
| State management | Redux Toolkit, React Redux |
| Routing | React Router |
| HTTP requests | Axios |
| Testing | Jest, React Testing Library |
| Development and build | Create React App / react-scripts |

## Getting Started

You need Node.js and npm installed on your computer.

```bash
git clone https://github.com/Y4E1-png/Biblioteca-musical.git
cd Biblioteca-musical
npm ci
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser. An internet connection is needed to retrieve music data and artwork.

## Usage

1. Enter an artist's name in the search field and select the search icon.
2. Browse the returned songs and select **Agregar a mi biblioteca** to save a song.
3. Select the three-dot button on a search result to open its detail page.
4. Use the back arrow to return to the main view.
5. Remove a saved song using the **×** button on its library card.

The saved library is stored under the `biblioteca-musical` key in `localStorage`. It belongs to the current browser and site address. Search results are kept in memory, while saved songs persist between visits.

Music metadata and artwork come from [TheAudioDB](https://www.theaudiodb.com/). Available information depends on the API response.

## Testing

Run the test suite in watch mode:

```bash
npm test
```

Run it once without watch mode:

```bash
npm test -- --watchAll=false --runInBand
```

The application tests cover the header, search form, result states, library actions, duplicate prevention, and song detail loading and retry behavior.

## Production Build

```bash
npm run build
```

The production files are generated in the `build/` directory.

When deploying, configure the host to serve `index.html` for client-side routes such as `/song/:id`. This allows detail pages to work when opened directly or refreshed. The current build configuration assumes the application is hosted at the root of a domain.

## Project Structure

```text
public/             HTML template, favicon, and web app manifest
src/
  assets/           Brand assets
  components/       Header, search, library, and song detail components
  hooks/            Reusable data-fetching hook
  redux/            Store, search state, and library state
  styles/           Global styles and theme
  __tests__/        Component and integration tests
  App.js            Main application routes
  index.js          Application entry point and providers
```

## Author

**Yael Aguilar**

- [GitHub](https://github.com/Y4E1-png)
- [LinkedIn](https://www.linkedin.com/in/dyael-aguilar)
