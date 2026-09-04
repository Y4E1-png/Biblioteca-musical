
import React from "react";
import Song from "../Song/Song";
import { LibraryContainer, LibraryTitle } from "./styles";


const Library = (props) => {
    return (
        <LibraryContainer>
            <LibraryTitle>Mi biblioteca</LibraryTitle>

            {props.canciones.map((cancion) => (
                <Song
                    key={cancion.id}
                    titulo={cancion.titulo}
                    artista={cancion.artista}
                    album={cancion.album}
                    duracion={cancion.duracion}
                />
            ))}
        </LibraryContainer>
    );
}

export default Library;