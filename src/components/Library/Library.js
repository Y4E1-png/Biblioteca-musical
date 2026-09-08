
import React from "react";
import Song from "../Song/Song";
import { LibraryContainer, LibraryTitle } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { removeSong } from "../../redux/libraryActions";


const Library = () => {

    const canciones = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
        <LibraryContainer>
            <LibraryTitle>Mi biblioteca</LibraryTitle>

            {canciones.map((cancion) => (
                <div key={cancion.id}>
                    <Song
                        titulo={cancion.titulo}
                        artista={cancion.artista}
                        album={cancion.album}
                        duracion={cancion.duracion}
                    />
                    <button type="button" onClick={() => dispatch(removeSong(cancion.id))}>
                        Eliminar
                    </button>
                </div>
            ))}
        </LibraryContainer>
    );
}

export default Library;