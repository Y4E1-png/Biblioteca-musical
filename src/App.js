import React, {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router';
import Header from './components/Header/Header';
import SearchResults from './components/SearchResults/SearchResults';
import Library from './components/Library/Library';
import useFetch from './hooks/useFetch'; 
import SearchBar from './components/SearchBar/SearchBar';
import SongDetail from './components/SongDetail/SongDetail';
import './App.css';

const App = () => {

  const [url, setUrl] = useState(
    'https://www.theaudiodb.com/api/v1/json/123/searchalbum.php?s=Oasis'
  );

  const { data, loading, error, reintentar } = useFetch(url);
  
  const [artista, setArtista] = useState('');
  
  const [biblioteca, setBiblioteca] = useState([]);

  useEffect(() => {
      console.log("La biblioteca se ha actualizado.");
  },[biblioteca]);

  const agregarCancion = (cancion) => {
    setBiblioteca([...biblioteca, cancion]);
  }

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
        return <p>Cargando álbumes...</p>;
      }

      if (error) {
        return (
          <>
            <p>Hubo un problema al cargar los álbumes.</p>
            <button type="button" onClick={reintentar}>
              Reintentar
            </button>
          </>
        );
      }

      if (!data.album || data.album.length === 0) {
        return <p>No se encontraron álbumes.</p>;
      }
      return data.album.map((album) => (
        <SearchResults
          key={album.idAlbum}
          idAlbum={album.idAlbum}
          agregarCancion={agregarCancion}
        />
      ));
  };

  return (
    <div className="App">
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
                <Library 
                  canciones={biblioteca} 
                />
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
    </div>
  );
}
export default App;
