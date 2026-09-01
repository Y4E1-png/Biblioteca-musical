
import React from "react";
import Song from "../Song/Song";
import './styles.css';

const SearchResults = (props) => {
    return (
        <section className="resultados">
            <h2>Resultados de la búsqueda</h2>

            {props.canciones.map((cancion) => (

                <div key={cancion.id}>
                    <Song
                        titulo={cancion.titulo}
                        artista={cancion.artista}
                        album={cancion.album}
                        duracion={cancion.duracion}
                    />
                    <button onClick ={() => props.agregarCancion(cancion)}>
                        Agregar a mi biblioteca
                    </button>
                </div>
            ))}
        </section>
    );
}
export default SearchResults;