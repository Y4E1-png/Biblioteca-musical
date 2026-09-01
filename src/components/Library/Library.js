
import React from "react";
import Song from "../Song/Song";
import './styles.css';

const Library = (props) => {
    return (
        <section className="biblioteca">
            <h2>Mi biblioteca</h2>

            {props.canciones.map((cancion) => (
                <Song
                    key={cancion.id}
                    titulo={cancion.titulo}
                    artista={cancion.artista}
                    album={cancion.album}
                    duracion={cancion.duracion}
                />
            ))}
        </section>
    );
}

export default Library;