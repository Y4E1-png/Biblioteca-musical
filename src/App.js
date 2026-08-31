import React, {Component} from 'react';
import Header from './components/Header';
import Song from './components/Song';
import './App.css';

class App extends Component {

  componentDidMount() {
    console.log("La aplicación se ha montado correctamente.");
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main className="biblioteca">
          <h2>Mi playlist</h2>
          <Song
            title="Neón Sobre Tlalpan"
            artist="Marea de Bolsillo"
            album="Kilometro Cero"
            duration="3:19"
          />
          <Song
            title="La planta del departamento 6"
            artist="Abril Magnética"
            album="Objetos que sobreviven a una mudanza"
            duration="3:45"
          />
          <Song
            title="Café a las 2:17"
            artist="Los Edificios Vacíos"
            album="Manual para perder el último metro"
            duration="3:51"
          />
        </main>
      </div>
    );
  }
}

export default App;
