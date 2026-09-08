import React, {useState} from 'react';
import {Routes, Route} from 'react-router';
import Header from './components/Header/Header';
import SearchResults from './components/SearchResults/SearchResults';
import Library from './components/Library/Library';
import useFetch from './hooks/useFetch'; 
import SearchBar from './components/SearchBar/SearchBar';
import SongDetail from './components/SongDetail/SongDetail';
import StatusMessage from './components/StatusMessage/StatusMessage';
import { AppContainer } from './App.styles';


const App = () => {

  const [url, setUrl] = useState(
    'https://www.theaudiodb.com/api/v1/json/123/searchalbum.php?s=Coldplay'
  );

  const { data, loading, error, reintentar } = useFetch(url);
  
  const [artista, setArtista] = useState('');
  
  const buscarArtista = (e) => {
    e.preventDefault();

    const nuevaUrl = `https://www.theaudiodb.com/api/v1/json/123/searchalbum.php?s=${encodeURIComponent(artista)}`;
    
      if (nuevaUrl === url) {
        reintentar();
      } else {
        setUrl(nuevaUrl);
      }
  };

  const renderContent = () => {
      if (loading) {
        return <StatusMessage>Cargando álbumes...</StatusMessage>;
      }

        if (error) {
          return (
            <>
              <StatusMessage error>Hubo un problema al cargar los álbumes.</StatusMessage>
              <button type="button" onClick={reintentar}>
                Reintentar
              </button>
            </>
          );
        }

          if (!data.album || data.album.length === 0) {
            return <StatusMessage>No se encontraron álbumes.</StatusMessage>;
          }
          
    return data.album.map((album) => (
      <SearchResults
        key={album.idAlbum}
        idAlbum={album.idAlbum}
      />
    ));
  };

  return (
    <AppContainer>
      <Header 
      />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar
                  artista={artista}
                  setArtista={setArtista}
                  buscarArtista={buscarArtista}
                />
                {renderContent()}
                <Library />
              </>
            }
          />
          <Route
            path="/song/:id"
            element={
              <SongDetail />
            }
          />
        </Routes>
      </main>
    </AppContainer>
  );
}
export default App;
