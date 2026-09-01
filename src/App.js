import React, {useState, useEffect} from 'react';
import Header from './components/Header/Header';
import SearchResults from './components/SearchResults/SearchResults';
import Library from './components/Library/Library';
import './App.css';

const App = () => {

  const [resultadosBusqueda, setResultadosBusqueda] = useState([
    {
      id: 1,
      titulo: "Neón Sobre Tlalpan",
      artista: "Marea de Bolsillo",
      album: "Kilometro Cero",
      duracion: "3:19"
    },
    {
      id: 2,
      titulo: "La planta del departamento 6",
      artista: "Abril Magnética",
      album: "Objetos que sobreviven a una mudanza",
      duracion: "3:45" 
    },
    {
      id: 3,
      titulo: "Café a las 2:17",
      artista: "Los Edificios Vacíos",
      album: "Manual para perder el último metro",
      duracion: "3:51"
    }
  ]);

  const [biblioteca, setBiblioteca] = useState([]);

  useEffect(() => {
    console.log("La biblioteca se ha actualizado.");
  }, [biblioteca]);

  const agregarCancion = (cancion) => {
    setBiblioteca([...biblioteca, cancion]);
  }

  return (
    <div className="App">
      <Header 
      />
      <main>
        <SearchResults 
          canciones={resultadosBusqueda} 
          agregarCancion={agregarCancion} 
        />
        <Library 
          canciones={biblioteca} 
        />
      </main>
    </div>
  );
}
export default App;
