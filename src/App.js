import React, {useState} from 'react';
import {Routes, Route} from 'react-router';
import Header from './components/Header/Header';
import SearchResults from './components/SearchResults/SearchResults';
import Library from './components/Library/Library';
import SearchBar from './components/SearchBar/SearchBar';
import SongDetail from './components/SongDetail/SongDetail';
import { AppContainer } from './App.styles';


const App = () => {
  
  const [artista, setArtista] = useState('');
  
  return (
    <AppContainer>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header>
                  <SearchBar
                    artista={artista}
                    setArtista={setArtista}
                  />
                </Header>

                <SearchResults artista={artista} />

                <Library />
              </>
            }
          />
          
          <Route
            path="/song/:id"
            element={
              <>
                <Header />

                <SongDetail />
              </>
            }
          />
        </Routes>
      </main>
    </AppContainer>
  );
}
export default App;
